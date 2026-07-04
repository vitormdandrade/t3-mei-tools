import { NextRequest, NextResponse } from "next/server";
import { getStripe, KIT_MEI_PRICE_CENTS, TEMPLATE_PRICES } from "../../../lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const product = body.product as string | undefined;
    const stripe = getStripe();
    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "https://oraculodomei.com.br";

    // Determine if this is for the bundled Kit MEI or an individual template
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

      if (product === "gerador-recibo") {
        // Gerador: include form data in metadata (split across keys for 500-char limit)
        metadata = {
          product,
          type: "gerador",
          form_nome: String(body.form_nome || "").slice(0, 500),
          form_cnpj: String(body.form_cnpj || "").slice(0, 500),
          form_endereco: String(body.form_endereco || "").slice(0, 500),
          form_telefone: String(body.form_telefone || "").slice(0, 500),
          form_email: String(body.form_email || "").slice(0, 500),
          form_tomador_nome: String(body.form_tomador_nome || "").slice(0, 500),
          form_tomador_cpfcnpj: String(body.form_tomador_cpfcnpj || "").slice(0, 500),
          form_tomador_endereco: String(body.form_tomador_endereco || "").slice(0, 500),
          form_servico_descricao: String(body.form_servico_descricao || "").slice(0, 500),
          form_servico_valor: String(body.form_servico_valor || "").slice(0, 500),
          form_servico_data: String(body.form_servico_data || "").slice(0, 500),
          form_recibo_numero: String(body.form_recibo_numero || "").slice(0, 500),
        };
        successUrl = `${origin}/kit-mei/sucesso?session_id={CHECKOUT_SESSION_ID}&product=${product}`;
        cancelUrl = `${origin}/kit-mei/${product}`;
      } else {
        metadata = { product, type: "template-pack" };
        successUrl = `${origin}/kit-mei/sucesso?session_id={CHECKOUT_SESSION_ID}&product=${product}`;
        cancelUrl = `${origin}/kit-mei/${product}`;
      }
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
  } catch (error: unknown) {
    console.error("Checkout error:", error);
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: `Erro ao processar checkout: ${message}` },
      { status: 500 }
    );
  }
}
