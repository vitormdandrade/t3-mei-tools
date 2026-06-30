import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "../../../lib/stripe";
import {
  generateContratoPrestacaoServicos,
  generateModeloNotaFiscal,
  generateReciboPagamento,
  generateTermoResponsabilidade,
} from "../../../lib/pdf-templates";
import Stripe from "stripe";

// Dynamic import to work around archiver CJS/ESM interop with Turbopack
async function createZip(pdfs: { name: string; data: Buffer }[]): Promise<Buffer> {
  // Use dynamic require for archiver to avoid Turbopack static analysis issues
  const archiverMod = await import("archiver");
  // archiver CJS module: the default may be the namespace, Archiver is the class
  const ArchiverClass = (archiverMod as any).default?.Archiver || (archiverMod as any).Archiver;

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

export async function POST(req: NextRequest) {
  try {
    let event: Stripe.Event;

    if (process.env.STRIPE_WEBHOOK_SECRET) {
      event = await verifyWebhook(req);
    } else {
      // Development mode: parse body directly
      event = await req.json() as Stripe.Event;
    }

    // Handle checkout.session.completed
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      // Only process kit-mei purchases
      if (session.metadata?.product !== "kit-mei") {
        return NextResponse.json({ received: true, skipped: "not kit-mei" });
      }

      const customerEmail = session.customer_details?.email;
      const customerName = session.customer_details?.name;

      if (!customerEmail) {
        console.error("No customer email in session:", session.id);
        return NextResponse.json(
          { error: "No customer email found" },
          { status: 400 }
        );
      }

      // Generate all 4 PDFs
      const data = {
        nome: customerName || "",
        email: customerEmail,
        nomeEmpresa: customerName || "",
      };

      console.log(`Generating Kit MEI PDFs for ${customerEmail}...`);

      const [contrato, notaFiscal, recibo, termo] = await Promise.all([
        generateContratoPrestacaoServicos(data),
        generateModeloNotaFiscal(data),
        generateReciboPagamento(data),
        generateTermoResponsabilidade(data),
      ]);

      // Create ZIP archive
      const zipBuffer = await createZip([
        { name: "01-Contrato-Prestacao-Servicos.pdf", data: contrato },
        { name: "02-Modelo-Nota-Fiscal-RPA.pdf", data: notaFiscal },
        { name: "03-Recibo-Pagamento.pdf", data: recibo },
        { name: "04-Termo-Responsabilidade.pdf", data: termo },
      ]);

      console.log(
        `Kit MEI generated for ${customerEmail}. ZIP size: ${(zipBuffer.length / 1024).toFixed(1)} KB`
      );

      // Store zip in memory mapped to session for the success page to retrieve
      // In production: use Vercel Blob or S3 for persistence
      if (!(globalThis as any).__kitMeiZips) {
        (globalThis as any).__kitMeiZips = new Map();
      }
      (globalThis as any).__kitMeiZips.set(session.id, {
        buffer: zipBuffer,
        email: customerEmail,
        createdAt: Date.now(),
      });

      // Cleanup old entries (keep last 24 hours)
      const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
      for (const [key, val] of (globalThis as any).__kitMeiZips.entries()) {
        if (val.createdAt < oneDayAgo) {
          (globalThis as any).__kitMeiZips.delete(key);
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
