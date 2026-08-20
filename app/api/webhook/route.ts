import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "../../../lib/stripe";
import {
  generateContratoPrestacaoServicos,
  generateModeloNotaFiscal,
  generateReciboPagamento,
  generateTermoResponsabilidade,
  generateContratoPrestacaoDetalhado,
  generateReciboAutonomoRPA,
  generateDASN_SIMEI,
  generateNotaFiscalAvulsa,
  generateTermoRescisaoContrato,
  generateReciboMEI,
} from "../../../lib/pdf-templates";
import { generateGuiaCompletoMEI2026 } from "../../../lib/pdf-ebook";
import { ensureBucket, uploadKitZipAndGetUrl, uploadPdfAndGetUrl } from "../../../lib/supabase-storage";
import { sendKitDeliveryEmail, sendTemplateDeliveryEmail } from "../../../lib/email";
import Stripe from "stripe";

// Dynamic import to work around archiver CJS/ESM interop with Turbopack
async function createZip(pdfs: { name: string; data: Buffer }[]): Promise<Buffer> {
  const archiverMod = await import("archiver");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ArchiverClass =
    (archiverMod as any).default?.Archiver || (archiverMod as any).Archiver;

  return new Promise((resolve, reject) => {
    const archive = new ArchiverClass("zip", { zlib: { level: 9 } });
    const chunks: Buffer[] = [];

    archive.on("data", (chunk: Buffer) => chunks.push(chunk));
    archive.on("end", () => resolve(Buffer.concat(chunks)));
    archive.on("error", reject);

    for (const pdf of pdfs) {
      archive.append(pdf.data, { name: pdf.name });
    }

    archive.finalize();
  });
}

// Verify the webhook signature to ensure it's from Stripe
async function verifyWebhook(req: NextRequest): Promise<Stripe.Event> {
  const stripe = getStripe();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    throw new Error("Missing stripe-signature header");
  }

  const body = await req.text();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    throw new Error("STRIPE_WEBHOOK_SECRET is not set");
  }

  return stripe.webhooks.constructEvent(body, signature, webhookSecret);
}

// Map product → single PDF generator
const SINGLE_PDF_GENERATORS: Record<string, {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fn: (data: any) => Promise<Buffer>;
  filename: string;
  name: string;
}> = {
  "contrato-prestacao": {
    fn: generateContratoPrestacaoDetalhado,
    filename: "Contrato-Prestacao-Servicos.pdf",
    name: "Contrato de Prestação de Serviços",
  },
  "recibo-autonomo": {
    fn: generateReciboAutonomoRPA,
    filename: "Recibo-Autonomo-RPA.pdf",
    name: "Recibo de Autônomo (RPA)",
  },
  "dasn-simei": {
    fn: generateDASN_SIMEI,
    filename: "Declaracao-Anual-DASN-SIMEI.pdf",
    name: "Declaração Anual MEI (DASN-SIMEI)",
  },
  "nota-fiscal-avulsa": {
    fn: generateNotaFiscalAvulsa,
    filename: "Nota-Fiscal-Servico-Avulsa.pdf",
    name: "Nota Fiscal de Serviço Avulsa",
  },
  "termo-rescisao": {
    fn: generateTermoRescisaoContrato,
    filename: "Termo-Rescisao-Contrato.pdf",
    name: "Termo de Rescisão de Contrato",
  },
  "guia-mei-2026": {
    fn: generateGuiaCompletoMEI2026,
    filename: "Guia-Completo-MEI-2026.pdf",
    name: "Guia Completo do MEI 2026 (Ebook)",
  },
};

export async function POST(req: NextRequest) {
  try {
    let event: Stripe.Event;

    if (process.env.STRIPE_WEBHOOK_SECRET) {
      try {
        event = await verifyWebhook(req);
      } catch (error: any) {
        // Missing/invalid signature or missing secret is a client/config
        // error — return 400 so Stripe never retries malformed deliveries.
        // Keep 500 for genuine processing failures below.
        console.error(
          "Webhook signature verification failed:",
          error?.message ?? error
        );
        return NextResponse.json(
          { error: "Invalid signature" },
          { status: 400 }
        );
      }
    } else {
      // Development mode: parse body directly
      event = (await req.json()) as Stripe.Event;
    }

    // Handle checkout.session.completed
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const product = session.metadata?.product;
      const type = session.metadata?.type;

      const customerEmail = session.customer_details?.email;
      const customerName = session.customer_details?.name || "Empreendedor";

      if (!customerEmail) {
        console.error("No customer email in session:", session.id);
        return NextResponse.json(
          { error: "No customer email found" },
          { status: 400 }
        );
      }

      console.log(`Processing ${product} (type: ${type}) for ${customerEmail} (session: ${session.id})`);

      // ─── Gerador de Recibo MEI ───
      if (type === "gerador" && product === "gerador-recibo") {
        const formData = {
          nome: session.metadata?.form_nome || "",
          cnpj: session.metadata?.form_cnpj || "",
          endereco: session.metadata?.form_endereco || "",
          telefone: session.metadata?.form_telefone || "",
          email: session.metadata?.form_email || customerEmail,
          tomadorNome: session.metadata?.form_tomador_nome || "",
          tomadorCpfCnpj: session.metadata?.form_tomador_cpfcnpj || "",
          tomadorEndereco: session.metadata?.form_tomador_endereco || "",
          servicoDescricao: session.metadata?.form_servico_descricao || "",
          servicoValor: session.metadata?.form_servico_valor || "",
          servicoData: session.metadata?.form_servico_data || "",
          reciboNumero: session.metadata?.form_recibo_numero || "",
        };

        const filename = "Recibo-MEI.pdf";
        const templateName = "Recibo MEI";

        // STEP 1: Generate PDF with form data
        const pdfBuffer = await generateReciboMEI(formData);
        console.log(`${templateName} PDF generated: ${(pdfBuffer.length / 1024).toFixed(1)} KB`);

        // STEP 2: Upload to Supabase
        await ensureBucket();
        const downloadUrl = await uploadPdfAndGetUrl(session.id, pdfBuffer, filename);
        console.log(`Download URL generated for session ${session.id}`);

        // STEP 3: Keep in-memory store
        if (!(globalThis as any).__kitMeiZips) {
          (globalThis as any).__kitMeiZips = new Map();
        }
        (globalThis as any).__kitMeiZips.set(session.id, {
          buffer: pdfBuffer,
          email: customerEmail,
          downloadUrl,
          createdAt: Date.now(),
          isPdf: true,
          filename,
        });

        // STEP 4: Send email
        try {
          await sendTemplateDeliveryEmail({
            to: customerEmail,
            name: customerName,
            downloadUrl,
            templateName,
          });
          console.log(`Template email sent to ${customerEmail}`);
        } catch (emailError: unknown) {
          const errMsg = emailError instanceof Error ? emailError.message : String(emailError);
          console.error("Failed to send template email:", errMsg);
        }

        return NextResponse.json({ received: true });
      }

      // --- Individual template pack ---
      if (type === "template-pack" && product && SINGLE_PDF_GENERATORS[product]) {
        const generator = SINGLE_PDF_GENERATORS[product];

        const data = {
          nome: customerName,
          email: customerEmail,
          nomeEmpresa: customerName,
        };

        // STEP 1: Generate single PDF
        const pdfBuffer = await generator.fn(data);
        console.log(`${generator.name} PDF generated: ${(pdfBuffer.length / 1024).toFixed(1)} KB`);

        // STEP 2: Upload to Supabase
        await ensureBucket();
        const downloadUrl = await uploadPdfAndGetUrl(session.id, pdfBuffer, generator.filename);

        console.log(`Download URL generated for session ${session.id}`);

        // STEP 3: Keep in-memory store
        if (!(globalThis as any).__kitMeiZips) {
          (globalThis as any).__kitMeiZips = new Map();
        }
        (globalThis as any).__kitMeiZips.set(session.id, {
          buffer: pdfBuffer,
          email: customerEmail,
          downloadUrl,
          createdAt: Date.now(),
          isPdf: true,
          filename: generator.filename,
        });

        // STEP 4: Send email
        try {
          await sendTemplateDeliveryEmail({
            to: customerEmail,
            name: customerName,
            downloadUrl,
            templateName: generator.name,
          });
          console.log(`Template email sent to ${customerEmail}`);
        } catch (emailError: unknown) {
          const errMsg = emailError instanceof Error ? emailError.message : String(emailError);
          console.error("Failed to send template email:", errMsg);
        }

        return NextResponse.json({ received: true });
      }

      // --- Original Kit MEI bundle ---
      if (!product || product === "kit-mei") {
        // Only process kit-mei purchases
        if (session.metadata?.product !== "kit-mei" && product !== "kit-mei") {
          return NextResponse.json({ received: true, skipped: "not kit-mei" });
        }

        console.log(`Processing Kit MEI for ${customerEmail} (session: ${session.id})`);

        const data = {
          nome: customerName,
          email: customerEmail,
          nomeEmpresa: customerName,
        };

        // STEP 1: Generate all 4 PDFs
        const [contrato, notaFiscal, recibo, termo] = await Promise.all([
          generateContratoPrestacaoServicos(data),
          generateModeloNotaFiscal(data),
          generateReciboPagamento(data),
          generateTermoResponsabilidade(data),
        ]);

        // STEP 2: Create ZIP archive
        const zipBuffer = await createZip([
          { name: "01-Contrato-Prestacao-Servicos.pdf", data: contrato },
          { name: "02-Modelo-Nota-Fiscal-RPA.pdf", data: notaFiscal },
          { name: "03-Recibo-Pagamento.pdf", data: recibo },
          { name: "04-Termo-Responsabilidade.pdf", data: termo },
        ]);

        console.log(
          `Kit MEI ZIP generated: ${(zipBuffer.length / 1024).toFixed(1)} KB`
        );

        // STEP 3: Ensure Supabase bucket exists, upload ZIP, get signed URL
        await ensureBucket();
        const downloadUrl = await uploadKitZipAndGetUrl(session.id, zipBuffer);

        console.log(`Download URL generated for session ${session.id}`);

        // STEP 4: Keep in-memory store for success page (backward compat)
        if (!(globalThis as any).__kitMeiZips) {
          (globalThis as any).__kitMeiZips = new Map();
        }
        (globalThis as any).__kitMeiZips.set(session.id, {
          buffer: zipBuffer,
          email: customerEmail,
          downloadUrl,
          createdAt: Date.now(),
        });

        // STEP 5: Send email via Resend
        try {
          await sendKitDeliveryEmail({
            to: customerEmail,
            name: customerName,
            downloadUrl,
          });
          console.log(`Kit MEI email sent to ${customerEmail}`);
        } catch (emailError: unknown) {
          const errMsg = emailError instanceof Error ? emailError.message : String(emailError);
          console.error("Failed to send Kit MEI email:", errMsg);
        }
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
