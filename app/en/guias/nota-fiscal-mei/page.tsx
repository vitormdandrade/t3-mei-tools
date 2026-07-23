import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MEI Invoicing (Nota Fiscal) — When It\'s Required and How to Issue',
  description: 'Complete English guide to MEI invoicing in Brazil: when Nota Fiscal is mandatory, how to issue RPA, NFSe, and NFe, plus compliance tips for micro-entrepreneurs.',
  alternates: {
    canonical: '/en/guias/nota-fiscal-mei',
    languages: {
      'pt-BR': 'https://oraculodomei.com.br/guias/nota-fiscal-mei',
      'en': 'https://oraculodomei.com.br/en/guias/nota-fiscal-mei',
    },
  },
  openGraph: {
    title: 'MEI Invoicing (Nota Fiscal) — Complete English Guide',
    description: 'When Brazilian MEIs must issue invoices (Nota Fiscal), how to do it, and compliance rules for micro-entrepreneurs.',
    type: 'article',
    locale: 'en_US',
  },
};

export default function NotaFiscalMEIEn() {
  return (
    <article className="prose-guide max-w-3xl mx-auto">
      <header className="mb-10">
        <span className="text-label">Guide</span>
        <h1 className="text-hero mt-2 mb-4">MEI Invoicing (Nota Fiscal) in 2026</h1>
        <p className="text-body-lg">When it&apos;s mandatory, how to issue, and key compliance rules for Brazilian micro-entrepreneurs.</p>
      </header>

      <div className="callout callout-info my-6">
        <p className="callout-title">When Is It Mandatory?</p>
        <ul>
          <li>Sales to other businesses (B2B)</li>
          <li>Services above R$ 200 in value</li>
          <li>Export transactions</li>
          <li>When requested by the client</li>
          <li>Some municipalities require it for all operations (check local rules)</li>
        </ul>
      </div>

      <h2>When It&apos;s NOT Mandatory</h2>
      <ul>
        <li>Sales to individual consumers (B2C)</li>
        <li>Services below R$ 200</li>
        <li>Small retail sales</li>
        <li>Simple domestic services</li>
      </ul>

      <h2>How to Issue a Nota Fiscal</h2>
      <h3>Option 1: RPA (Service Payment Receipt)</h3>
      <p>For service providers. Can be done manually or with specific software.</p>
      <h3>Option 2: NFSe (Electronic Service Invoice)</h3>
      <p>Mandatory for services in many municipalities. Issued through the city&apos;s online system.</p>
      <h3>Option 3: NFe (Electronic Invoice)</h3>
      <p>For commerce/trade. Requires a digital certificate and specific software.</p>

      <h2>Key Tips</h2>
      <ul>
        <li>Always ask the client if they need an invoice</li>
        <li>Keep copies of all issued invoices</li>
        <li>Avoid identification errors (name, CNPJ)</li>
        <li>Cancel within 24 hours if there&apos;s a mistake</li>
        <li>Check with your municipality for local requirements</li>
      </ul>

      <div className="callout callout-info my-6">
        <p className="callout-title">Next Steps</p>
        <ul>
          <li>✓ <a href="/calculadora/das">Calculate Your DAS Tax</a></li>
          <li>✓ <a href="/kit-mei/gerador-nota-fiscal">MEI Invoice Generator Tool</a></li>
          <li>✓ <a href="/en/guias/das-mei-2026">Understand DAS 2026</a></li>
        </ul>
      </div>

      <h2>Related Content</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          ['/en/guias/como-abrir-mei', 'How to Open MEI', 'Step-by-step guide to register your MEI for free in 2026'],
          ['/en/guias/das-mei-2026', 'DAS MEI 2026', 'Updated values, deadlines, and how to pay DAS'],
          ['/guias/limite-faturamento-mei', 'MEI Revenue Limit', 'Understand the R$ 81,000 cap and what to do if you exceed it'],
          ['/guias/abrir-conta-pj-mei', 'Open a PJ Account for MEI', 'Compare the best free business accounts for your CNPJ'],
        ].map(([href, title, desc]) => (
          <Link key={href} href={href} className="card card-hover no-underline p-4 flex flex-col gap-1">
            <span className="font-semibold" style={{ color: 'var(--color-foreground)' }}>{title} →</span>
            <span className="text-caption">{desc}</span>
          </Link>
        ))}
      </div>

      {/* Kit MEI CTA */}
      <div className="callout callout-accent my-8">
        <p className="callout-title">📋 Need Ready-to-Use Templates?</p>
        <p className="mb-4">
          Download our MEI Kit with 4 professional PDFs: Service Contract, Invoice Template, Payment Receipt, and Liability Waiver — all in Portuguese, ready for Brazilian compliance.
        </p>
        <Link href="/kit-mei" className="btn-primary no-underline inline-flex">
          Buy MEI Kit — R$ 29,90
        </Link>
      </div>

      {/* FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'When is a MEI required to issue a Nota Fiscal?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A MEI must issue an invoice (Nota Fiscal) for B2B sales, services above R$ 200, export transactions, and when the client requests one. Some municipalities require invoices for all operations — check local rules.',
                },
              },
              {
                '@type': 'Question',
                name: 'When does a MEI not need to issue a Nota Fiscal?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Invoicing is not mandatory for B2C sales to individual consumers, services under R$ 200, small retail sales, and simple domestic services. However, issuing an invoice conveys professionalism even when optional.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can a MEI issue an invoice?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A MEI can issue invoices in three ways: RPA (Service Payment Receipt) for services, NFSe (Electronic Service Invoice) through the municipality\'s online system, or NFe (Electronic Invoice) for commerce, which requires a digital certificate.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the deadline to cancel a MEI invoice?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The cancellation window is up to 24 hours after issuance, depending on municipal rules. After that period, you may need to request a correction letter or issue a return invoice.',
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
