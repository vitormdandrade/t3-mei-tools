import { NextRequest, NextResponse } from "next/server";
import { getStripe, KIT_MEI_PRICE_CENTS } from "../../../lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "https://oraculodomei.com.br";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: "Kit MEI - Pacote de Documentos",
              description:
                "4 modelos profissionais em PDF: Contrato de Prestação de Serviços, Nota Fiscal (RPA), Recibo de Pagamento e Termo de Responsabilidade. Preencha e use imediatamente.",
              images: [`${origin}/kit-mei-og.png`],
            },
            unit_amount: KIT_MEI_PRICE_CENTS,
          },
          quantity: 1,
        },
      ],
      metadata: {
        product: "kit-mei",
      },
      success_url: `${origin}/kit-mei/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/kit-mei`,
      // Brazilian Portuguese auto-detected by Stripe based on locale
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Falha ao criar sessão de checkout" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Erro ao processar checkout" },
      { status: 500 }
    );
  }
}
