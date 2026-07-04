import Stripe from "stripe";

// IMPORTANT: never instantiate Stripe at module scope.
// Construct it lazily at request time so the secret key is read from the
// environment when the handler actually runs, not when the module is loaded.
export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(key, {
    // Use account's default API version
  });
}

// Price for Kit MEI in cents (R$29,90)
export const KIT_MEI_PRICE_CENTS = 2990;

// Individual template pack prices (in cents)
export const TEMPLATE_PRICES: Record<string, { price: number; name: string; description: string }> = {
  "contrato-prestacao": {
    price: 4990,
    name: "Contrato de Prestação de Serviços",
    description: "Contrato profissional para MEI com cláusulas completas. Ideal para design gráfico, TI, fotografia e outros serviços.",
  },
  "recibo-autonomo": {
    price: 1990,
    name: "Recibo de Autônomo (RPA)",
    description: "Recibo de Pagamento a Autônomo preenchível, formato profissional. Perfeito para comprovar serviços prestados.",
  },
  "dasn-simei": {
    price: 2990,
    name: "Declaração Anual MEI (DASN-SIMEI)",
    description: "Modelo preenchível da Declaração Anual do Simples Nacional para MEI. Preencha e entregue sua declaração.",
  },
  "nota-fiscal-avulsa": {
    price: 1990,
    name: "Nota Fiscal de Serviço Avulsa",
    description: "Modelo de nota fiscal avulsa para serviços. Formato profissional com todos os campos obrigatórios.",
  },
  "termo-rescisao": {
    price: 3990,
    name: "Termo de Rescisão de Contrato",
    description: "Documento formal para encerramento de contrato de prestação de serviços. Cláusulas de quitação e responsabilidades.",
  },
  "gerador-recibo": {
    price: 3990,
    name: "Gerador de Recibo MEI",
    description: "Preencha os dados e receba seu Recibo MEI preenchido em PDF. Profissional, rápido e pronto para enviar ao cliente.",
  },
};
