import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "../../../lib/stripe";
import { getSupabaseAdmin } from "@/lib/supabase";
import {
  generateContratoPrestacaoServicos,
  generateModeloNotaFiscal,
  generateReciboPagamento,
  generateTermoResponsabilidade,
} from "../../../lib/pdf-templates";
import { ensureBucket, uploadKitZipAndGetUrl } from "../../../lib/supabase-storage";
import { sendKitDeliveryEmail } from "../../../lib/email";
import Stripe from "stripe";

// Dynamic import to work around archiver CJS/ESM interop with Turbopack
async function createZip(pdfs: { name: string; data: Buffer }[]): Promise<Buffer> {
  const archiverMod = await import("archiver");
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

export async function POST(req: NextRequest) {
  try {
    let event: Stripe.Event;

    if (process.env.STRIPE_WEBHOOK_SECRET) {
      event = await verifyWebhook(req);
    } else {
      // Development mode: parse body directly
      event = (await req.json()) as Stripe.Event;
    }

    // Handle checkout.session.completed
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      // Only process kit-mei purchases
      if (session.metadata?.product !== "kit-mei") {
        return NextResponse.json({ received: true, skipped: "not kit-mei" });
      }

      const customerEmail = session.customer_details?.email;
      const customerName = session.customer_details?.name || "Empreendedor";

      if (!customerEmail) {
        console.error("No customer email in session:", session.id);
        return NextResponse.json(
          { error: "No customer email found" },
          { status: 400 }
        );
      }

      console.log(`Processing Kit MEI for ${customerEmail} (session: ${session.id})`);

      // STEP 1: Generate all 4 PDFs
      const data = {
        nome: customerName,
        email: customerEmail,
        nomeEmpresa: customerName,
      };

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
      } catch (emailError: any) {
        console.error("Failed to send Kit MEI email:", emailError?.message);
        // Don't fail the webhook — email is a bonus, download still works via success page
      }
    }

    // --- DAS Alert Bot: Subscription event handlers ---

    // customer.subscription.created — when a DAS Alert Bot subscription is created
    if (event.type === "customer.subscription.created") {
      const subscription = event.data.object as Stripe.Subscription;
      const metadata = subscription.metadata || {};

      if (metadata.product !== "das-alert-bot") {
        return NextResponse.json({ received: true, skipped: "not das-alert-bot" });
      }

      const subscriberId = parseInt(metadata.subscriber_id, 10);
      if (!subscriberId) {
        console.error("No subscriber_id in subscription metadata");
        return NextResponse.json({ received: true, skipped: "no subscriber_id" });
      }

      const trialEnd = subscription.trial_end
        ? new Date(subscription.trial_end * 1000).toISOString()
        : null;

      const supabase = getSupabaseAdmin();
      const { error: updateError } = await supabase
        .from("das_subscribers")
        .update({
          stripe_subscription_id: subscription.id,
          subscription_status: subscription.status,
          trial_ends_at: trialEnd,
        })
        .eq("id", subscriberId);

      if (updateError) {
        console.error(
          `Failed to update subscriber ${subscriberId} on subscription.created:`,
          updateError
        );
      } else {
        console.log(
          `DAS subscriber ${subscriberId} linked to Stripe sub ${subscription.id} (status: ${subscription.status})`
        );
      }
    }

    // customer.subscription.updated — status changes (e.g., trial → active, canceled)
    if (event.type === "customer.subscription.updated") {
      const subscription = event.data.object as Stripe.Subscription;
      const metadata = subscription.metadata || {};

      if (metadata.product !== "das-alert-bot") {
        return NextResponse.json({ received: true, skipped: "not das-alert-bot" });
      }

      const trialEnd = subscription.trial_end
        ? new Date(subscription.trial_end * 1000).toISOString()
        : null;

      const supabase = getSupabaseAdmin();
      const { error: updateError } = await supabase
        .from("das_subscribers")
        .update({
          subscription_status: subscription.status,
          trial_ends_at: trialEnd,
        })
        .eq("stripe_subscription_id", subscription.id);

      if (updateError) {
        console.error(
          `Failed to update subscriber for sub ${subscription.id}:`,
          updateError
        );
      } else {
        console.log(
          `DAS subscription ${subscription.id} updated to status: ${subscription.status}`
        );
      }
    }

    // customer.subscription.deleted — subscription canceled/expired
    if (event.type === "customer.subscription.deleted") {
      const subscription = event.data.object as Stripe.Subscription;
      const metadata = subscription.metadata || {};

      if (metadata.product !== "das-alert-bot") {
        return NextResponse.json({ received: true, skipped: "not das-alert-bot" });
      }

      const supabase = getSupabaseAdmin();
      const { error: updateError } = await supabase
        .from("das_subscribers")
        .update({
          subscription_status: "canceled",
        })
        .eq("stripe_subscription_id", subscription.id);

      if (updateError) {
        console.error(
          `Failed to mark subscriber as canceled for sub ${subscription.id}:`,
          updateError
        );
      } else {
        console.log(
          `DAS subscription ${subscription.id} marked as canceled`
        );
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
