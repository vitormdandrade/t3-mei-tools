import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "../../../lib/stripe";
import { getSupabaseAdmin } from "@/lib/supabase";

export const DAS_ALERT_PRICE_CENTS = 490; // R$4,90

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://oraculodomei.com.br";

    const body = await req.json();
    const { phone, das_due_day } = body;

    // Validate phone: must be +55 DDD XXXXX-XXXX format (digits only after strip)
    if (!phone || typeof phone !== "string") {
      return NextResponse.json(
        { error: "Número de WhatsApp é obrigatório." },
        { status: 400 }
      );
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 12 || phoneDigits.length > 13) {
      // +55 + DDD(2) + number(8-9) = 12-13 digits
      return NextResponse.json(
        { error: "Formato de WhatsApp inválido. Use: +55 DDD XXXXX-XXXX" },
        { status: 400 }
      );
    }

    // Validate das_due_day
    const dueDay = parseInt(String(das_due_day), 10);
    if (isNaN(dueDay) || dueDay < 1 || dueDay > 31) {
      return NextResponse.json(
        { error: "Dia de vencimento inválido. Escolha um dia entre 1 e 31." },
        { status: 400 }
      );
    }

    // Create or find subscriber in Supabase first (pre-stripe)
    const supabase = getSupabaseAdmin();
    const { data: subscriber, error: insertError } = await supabase
      .from("das_subscribers")
      .insert({
        phone: phoneDigits,
        das_due_day: dueDay,
        subscription_status: "incomplete",
        trial_ends_at: null,
      })
      .select("id")
      .single();

    if (insertError) {
      console.error("Failed to insert subscriber:", insertError);
      return NextResponse.json(
        { error: "Erro ao registrar assinatura. Tente novamente." },
        { status: 500 }
      );
    }

    // Create Stripe Checkout session in subscription mode with 2-month free trial
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: "DAS Alert Bot — Lembrete de Vencimento DAS MEI",
              description:
                "Receba lembretes via WhatsApp 3 dias antes do vencimento do DAS. " +
                "2 meses grátis, depois R$4,90/mês.",
            },
            unit_amount: DAS_ALERT_PRICE_CENTS,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: 60, // 2-month free trial
        metadata: {
          product: "das-alert-bot",
          subscriber_id: String(subscriber.id),
          phone: phoneDigits,
          das_due_day: String(dueDay),
        },
      },
      metadata: {
        product: "das-alert-bot",
        subscriber_id: String(subscriber.id),
      },
      success_url: `${origin}/calendario-das?subscribed=true&trial=true`,
      cancel_url: `${origin}/calendario-das?subscribed=false`,
      customer_creation: "always",
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Falha ao criar sessão de checkout." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("DAS subscribe error:", error);
    const message = error?.message || String(error);
    return NextResponse.json(
      { error: `Erro ao processar assinatura: ${message}` },
      { status: 500 }
    );
  }
}
