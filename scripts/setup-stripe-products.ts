#!/usr/bin/env node

/**
 * Stripe Product Setup Script for Kit MEI Template Packs
 *
 * Creates 5 Stripe products for the individual template packs.
 * Run this once when setting up the store with real Stripe keys.
 *
 * Usage:
 *   npx tsx scripts/setup-stripe-products.ts
 *
 * Requires STRIPE_SECRET_KEY in environment (from .env.local or Vercel env).
 */

import Stripe from "stripe";

const PRODUCTS = [
  {
    slug: "contrato-prestacao",
    name: "Contrato de Prestação de Serviços (MEI)",
    description:
      "Contrato profissional para MEI com 8 cláusulas completas. Ideal para design gráfico, TI, fotografia e outros serviços.",
    price_cents: 4990,
    images: [],
    metadata: { type: "template-pack", slug: "contrato-prestacao" },
  },
  {
    slug: "recibo-autonomo",
    name: "Recibo de Autônomo (RPA) — MEI",
    description:
      "Recibo de Pagamento a Autônomo preenchível. Tabela de serviços, retenções de INSS/ISS/IRRF e formatação profissional.",
    price_cents: 1990,
    images: [],
    metadata: { type: "template-pack", slug: "recibo-autonomo" },
  },
  {
    slug: "dasn-simei",
    name: "Declaração Anual MEI (DASN-SIMEI)",
    description:
      "Modelo preenchível da Declaração Anual do Simples Nacional para MEI. Tabelas mensais, verificação de limite e dados do empregado.",
    price_cents: 2990,
    images: [],
    metadata: { type: "template-pack", slug: "dasn-simei" },
  },
  {
    slug: "nota-fiscal-avulsa",
    name: "Nota Fiscal de Serviço Avulsa (MEI)",
    description:
      "Modelo de nota fiscal avulsa para serviços. Campos completos para prestador, tomador, discriminação e valores fiscais.",
    price_cents: 1990,
    images: [],
    metadata: { type: "template-pack", slug: "nota-fiscal-avulsa" },
  },
  {
    slug: "termo-rescisao",
    name: "Termo de Rescisão de Contrato (MEI)",
    description:
      "Termo de rescisão contratual para MEI. Cláusulas de acerto financeiro, quitação geral e obrigações pós-rescisão.",
    price_cents: 3990,
    images: [],
    metadata: { type: "template-pack", slug: "termo-rescisao" },
  },
];

async function main() {
  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeKey) {
    console.error("❌ STRIPE_SECRET_KEY is not set in environment.");
    console.error("   Set it via: export STRIPE_SECRET_KEY=sk_live_...");
    process.exit(1);
  }

  const stripe = new Stripe(stripeKey);

  console.log("🔧 Setting up Stripe products for Kit MEI template packs...\n");

  for (const product of PRODUCTS) {
    try {
      // Create product
      const stripeProduct = await stripe.products.create({
        name: product.name,
        description: product.description,
        metadata: product.metadata,
        images: product.images,
      });

      console.log(`✅ Product created: ${product.name} (${stripeProduct.id})`);

      // Create price
      const price = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: product.price_cents,
        currency: "brl",
        metadata: product.metadata,
      });

      console.log(`   💰 Price created: R$${(product.price_cents / 100).toFixed(2)} (${price.id})`);
      console.log(`   📋 Metadata:`, product.metadata);
      console.log("");
    } catch (error: any) {
      console.error(`❌ Failed to create ${product.name}:`, error.message);
    }
  }

  console.log("🏁 Done! All products created.");
  console.log("\n📝 Next steps:");
  console.log("   1. Update lib/stripe.ts with the created Price IDs if using price_id instead of price_data.");
  console.log("   2. Test each checkout flow at /kit-mei/[slug]");
  console.log("   3. Verify webhook handles each product type correctly.");
  console.log("\nNote: The current checkout implementation uses inline price_data,");
  console.log("so products created here are optional — they exist in Stripe dashboard for reference.");
}

main().catch(console.error);
