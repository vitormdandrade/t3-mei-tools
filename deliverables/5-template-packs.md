# Kit MEI — 5 New Template Packs

> **Date:** July 3, 2026
> **Project:** t3-mei-tools (oraculodomei.com.br)
> **Branch:** main (auto-deploys to Vercel)

## Summary

Added 5 individual PDF template packs to the Kit MEI Stripe store. Each template pack is sold separately with its own landing page, Stripe checkout flow, PDF generation on payment, and email delivery.

## New Templates

| # | Template | Slug | Price | Pages |
|---|----------|------|-------|-------|
| 1 | Contrato de Prestação de Serviços | `contrato-prestacao` | R$49,90 | 2-3 |
| 2 | Recibo de Autônomo (RPA) | `recibo-autonomo` | R$19,90 | 2-3 |
| 3 | Declaração Anual MEI (DASN-SIMEI) | `dasn-simei` | R$29,90 | 3-4 |
| 4 | Nota Fiscal de Serviço Avulsa | `nota-fiscal-avulsa` | R$19,90 | 2-3 |
| 5 | Termo de Rescisão de Contrato | `termo-rescisao` | R$39,90 | 2-3 |

## Files Created

### Landing Pages (5)
- `app/kit-mei/contrato-prestacao/page.tsx` — SEO metadata + TemplatePageClient
- `app/kit-mei/recibo-autonomo/page.tsx` — SEO metadata + TemplatePageClient
- `app/kit-mei/dasn-simei/page.tsx` — SEO metadata + TemplatePageClient
- `app/kit-mei/nota-fiscal-avulsa/page.tsx` — SEO metadata + TemplatePageClient
- `app/kit-mei/termo-rescisao/page.tsx` — SEO metadata + TemplatePageClient

### Shared Component
- `app/kit-mei/components/TemplatePageClient.tsx` — Reusable template page layout with buy button, features, cross-sells, FAQ, and Stripe checkout integration

### Stripe Setup Script
- `scripts/setup-stripe-products.ts` — Creates 5 Stripe products + prices (run once with STRIPE_SECRET_KEY set)

## Files Modified

### Core Libraries
- `lib/stripe.ts` — Added `TEMPLATE_PRICES` map with product metadata and prices (in cents)
- `lib/pdf-templates.ts` — Added 5 new PDF generators:
  - `generateContratoPrestacaoDetalhado()` — 8-clause contract with IP clause
  - `generateReciboAutonomoRPA()` — RPA with service table + retention calc
  - `generateDASN_SIMEI()` — DASN-SIMEI with monthly tables + limit check
  - `generateNotaFiscalAvulsa()` — NFS-e with full fiscal fields
  - `generateTermoRescisaoContrato()` — Contract termination with financial settlement
- `lib/supabase-storage.ts` — Added `uploadPdfAndGetUrl()` for single PDF uploads; updated bucket to allow `application/pdf` mime type
- `lib/email.ts` — Added `sendTemplateDeliveryEmail()` for individual template email delivery

### API Routes
- `app/api/checkout/route.ts` — Updated to accept `{ product: "slug" }` in POST body. Routes to individual pricing or bundle pricing based on product parameter
- `app/api/webhook/route.ts` — Added handling for `type: "template-pack"` metadata. Generates single PDF instead of ZIP for individual templates. Uses `SINGLE_PDF_GENERATORS` map to route to correct generator
- `app/api/download/route.ts` — Updated to support PDF downloads (content-type: application/pdf) alongside ZIP downloads

### Existing Pages Updated
- `app/kit-mei/page.tsx` — Updated SEO metadata to mention individual templates
- `app/kit-mei/Client.tsx` — Added "Templates Individuais" cross-sell grid at bottom
- `app/kit-mei/sucesso/Client.tsx` — Updated to show template-specific messaging when `product` param present

## Technical Details

### Checkout Flow
1. User visits `/kit-mei/[slug]` → sees product landing page
2. Clicks "Comprar" → POST `/api/checkout` with `{ product: "slug" }`
3. Creates Stripe Checkout Session with `price_data` inline (no pre-created product required)
4. Session metadata includes `product: "slug"` and `type: "template-pack"`
5. Success URL: `/kit-mei/sucesso?session_id={CHECKOUT_SESSION_ID}&product=slug`

### Webhook Processing
1. Webhook receives `checkout.session.completed`
2. Checks `metadata.type === "template-pack"` to identify individual template
3. Routes to correct PDF generator via `SINGLE_PDF_GENERATORS` map
4. Uploads single PDF to Supabase (bucket: `kit-mei-downloads`, path: `{sessionId}/{filename}`)
5. Stores in-memory with `isPdf: true` for success page
6. Sends delivery email via Resend with product-specific template

### PDF Generation
- All PDFs use pdfkit with A4 size, 60pt margins
- Professional header with "Kit MEI - Oraculo do MEI"
- Page numbers in footer
- Fill-in-the-blank fields for customer data
- 2-4 pages each with clean formatting

### Stripe Products (Optional)
- Products can be created via `npx tsx scripts/setup-stripe-products.ts`
- Not required for checkout — current implementation uses inline `price_data`
- Products created for Stripe Dashboard reference and future use

## Deployment

This project auto-deploys to Vercel on push to `main`. After pushing:

1. Verify environment variables on Vercel:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`

2. Verify Stripe webhook endpoint points to `https://oraculodomei.com.br/api/webhook`

3. Test each template flow:
   - Visit `/kit-mei/contrato-prestacao` → buy → download PDF
   - Repeat for each template

## Stripe Product IDs

Products created via the setup script will have unique Stripe product IDs.
The current implementation does not use these IDs (uses inline price_data).
If you want to switch to using pre-created prices, update the checkout route
to use `price: priceId` instead of `price_data`.

Run the setup script to get the IDs:
```bash
cd /Volumes/ssd/consistencylabs/t3-blogs/t3-mei-tools
npx tsx scripts/setup-stripe-products.ts
```
