import { NextRequest, NextResponse } from "next/server";
import { getStripe, KIT_MEI_PRICE_CENTS, TEMPLATE_PRICES } from "../../../lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const product = body.product as string | undefined;
    const stripe = getStripe();
    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "https://oraculodomei.com.br";

    // Determine if this is for the bundled Kit MEI or an individual template
    let lineItem: any;
    let metadata: Record<string, string>;
    let successUrl: string;
    let cancelUrl: string;

    if (product && TEMPLATE_PRICES[product]) {
      // Individual template pack
      const tpl = TEMPLATE_PRICES[product];
      lineItem = {
        price_data: {
          currency: "brl",
          product_data: {
            name: tpl.name,
            description: tpl.description,
          },
          unit_amount: tpl.price,
        },
        quantity: 1,
      };
      metadata = { product, type: "template-pack" };
      successUrl = `${origin}/kit-mei/sucesso?session_id={CHECKOUT_SESSION_ID}&product=${product}`;
      cancelUrl = `${origin}/kit-mei/${product}`;
    } else {
      // Default: Kit MEI bundle
      lineItem = {
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
      };
      metadata = { product: "kit-mei" };
      successUrl = `${origin}/kit-mei/sucesso?session_id={CHECKOUT_SESSION_ID}`;
      cancelUrl = `${origin}/kit-mei`;
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [lineItem],
      metadata,
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Falha ao criar sessão de checkout" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Checkout error:", error);
    const message = error?.message || String(error);
    return NextResponse.json(
      { error: `Erro ao processar checkout: ${message}` },
      { status: 500 }
    );
  }
}
