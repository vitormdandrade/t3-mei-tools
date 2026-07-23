import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAS MEI 2026 Complete Guide — Amounts, Deadlines & Payment",
  description: "Everything about DAS MEI 2026: updated amounts with the new minimum wage, how to pay, deadlines, penalties, and consequences of non-payment.",
  alternates: {
    canonical: '/en/guias/das-mei-2026',
    languages: {
      'pt-BR': 'https://oraculodomei.com.br/guias/das-mei-2026',
      'en': 'https://oraculodomei.com.br/en/guias/das-mei-2026',
    },
  },
  openGraph: {
    title: "DAS MEI 2026 Complete Guide — Updated Amounts",
    description: "DAS MEI 2026: updated table with INSS, ICMS, and ISS. How to pay, deadlines, and late penalties for Brazilian MEI entrepreneurs.",
    type: 'article',
  },
};

export default function DasMei2026En() {
  return (
      <article className="prose-guide max-w-3xl mx-auto">
        <header className="mb-10">
          <span className="text-label">Guide</span>
          <h1 className="text-hero mt-2 mb-4">Complete Guide: DAS MEI 2026</h1>
          <p className="text-body-lg">
            Everything you need to know about Brazil's MEI tax document (DAS — Documento de Arrecadação do Simples Nacional) for 2026.
          </p>
        </header>

      <h2>What is DAS?</h2>
      <p>
        DAS is the monthly tax payment every MEI (Individual Microentrepreneur) in Brazil must make. It covers social security (INSS) and municipal/state taxes (ICMS/ISS). It's the "MEI tax," but much simpler and cheaper than other tax regimes in Brazil.
      </p>

      <h2>DAS 2026 Amounts</h2>
      <p>With Brazil's minimum wage at R$ 1,518 in 2026, the DAS amounts are:</p>
      <div className="overflow-x-auto my-6">
        <table className="table-compare">
          <thead>
            <tr>
              <th>Category</th>
              <th>INSS (Social Security)</th>
              <th>Municipal/State Tax</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Commerce</td>
              <td>R$ 75.90</td>
              <td>R$ 1.00</td>
              <td><strong>R$ 76.90</strong></td>
            </tr>
            <tr>
              <td>Services</td>
              <td>R$ 75.90</td>
              <td>R$ 5.00</td>
              <td><strong>R$ 80.90</strong></td>
            </tr>
            <tr>
              <td>Industry</td>
              <td>R$ 75.90</td>
              <td>R$ 1.00</td>
              <td><strong>R$ 76.90</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
        INSS is 5% of the minimum wage (R$ 1,518 × 5% = R$ 75.90). Municipal tax (ISS) is R$ 5.00 for services; R$ 1.00 for commerce and industry (ICMS).
      </p>

      <h2>How to Pay DAS</h2>
      <div className="callout callout-info my-6">
        <p className="callout-title">Payment Options</p>
        <ul>
          <li><strong>Bank:</strong> All Brazilian banks accept DAS payment slips</li>
          <li><strong>Lottery shops (Lotérica):</strong> Quick and easy in-person option</li>
          <li><strong>City Hall:</strong> Directly at the municipal finance department</li>
          <li><strong>MEI App:</strong> Online payment via the official government app</li>
          <li><strong>Internet Banking:</strong> Most banks allow DAS payment through their apps</li>
        </ul>
      </div>

      <h2>Deadlines</h2>
      <ul>
        <li><strong>Due date:</strong> The 20th of the month following the reference month. Example: January 2026 DAS is due February 20, 2026.</li>
        <li><strong>Weekend or holiday:</strong> If the 20th falls on a Saturday, Sunday, or national holiday, the due date moves to the next business day with no penalty.</li>
        <li><strong>Late payment:</strong> Overdue DAS can still be paid, but incurs a 0.33% daily fine (capped at 20%) plus Selic interest.</li>
        <li><strong>CNPJ suspension:</strong> Your CNPJ (business registration) may be suspended after 180 days of non-payment.</li>
      </ul>
      <p>
        See all 12 due dates for 2026, already adjusted for holidays, on the{' '}
        <a href="/en/calendario-das">DAS 2026 Calendar</a>
        {' '}— you can download the .ics file to import into Google Calendar or Apple Calendar.
      </p>

      <h2>What Happens If You Don't Pay DAS?</h2>
      <p>
        Missing DAS payments triggers progressive consequences that can lead to the cancellation of your MEI CNPJ. Here's how it unfolds:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="table-compare">
          <thead>
            <tr>
              <th>Time Overdue</th>
              <th>Consequence</th>
              <th>How to Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1–30 days</td>
              <td>0.33% daily fine (capped at 20%) + Selic interest</td>
              <td>Generate overdue DAS via PGMEI and pay with surcharges</td>
            </tr>
            <tr>
              <td>31–90 days</td>
              <td>Fine reaches 20% + accumulated interest. Name added to Federal Active Debt registry</td>
              <td>Set up installment plan on the Simples Nacional Portal (up to 60 installments)</td>
            </tr>
            <tr>
              <td>91–180 days</td>
              <td>Active Debt consolidated. CPF restrictions (credit bureaus: Serasa, SPC)</td>
              <td>Negotiate installment plan or lump-sum payment with interest discount</td>
            </tr>
            <tr>
              <td>Over 180 days</td>
              <td>CNPJ may be declared unfit. Loss of social security benefits (INSS)</td>
              <td>Settle all debts and request reactivation with the Federal Revenue Service</td>
            </tr>
            <tr>
              <td>Over 2 years unpaid</td>
              <td>CNPJ permanently cancelled. Loss of MEI status</td>
              <td>Open a new CNPJ (if still eligible) or migrate to ME/EPP</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout callout-warning my-6">
        <p className="callout-title">⚠️ INSS Benefits at Risk</p>
        <p>
          If you fail to pay DAS for more than 12 consecutive months, you <strong>lose access to social security benefits</strong> including sick pay (auxílio-doença), maternity leave pay (salário-maternidade), and retirement. To regain these, you must pay all overdue amounts and complete a new qualifying period.
        </p>
      </div>

      <h2>How to Regularize Overdue DAS</h2>
      <ol>
        <li>Go to <strong>PGMEI</strong> (DAS Generator for MEI) on the Simples Nacional portal</li>
        <li>Select the calendar year with outstanding debts</li>
        <li>The system automatically calculates fines and interest</li>
        <li>Generate the updated DAS and pay at a bank or via internet banking</li>
        <li>Keep the receipt — it takes up to 48 hours for the system to reflect payment</li>
      </ol>
      <p>
        For installment plans, go to the <strong>Simples Nacional Portal</strong> → "Installment Plans" → "MEI Debt Installment." The minimum installment is R$ 50.00 and the maximum term is 60 months.
      </p>

      <div className="callout callout-accent my-8">
        <p className="callout-title">Use Our Calculator</p>
        <p className="mb-4">Find out exactly how much your DAS will cost:</p>
        <a href="/en/calculadora/das" className="btn-primary no-underline inline-flex">
          Calculate DAS 2026
        </a>
      </div>

      {/* Kit MEI CTA */}
      <div className="callout callout-accent my-8">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <p className="callout-title">
              📋 Already an MEI? Need documents!
            </p>
            <p>
              Service contracts, invoices, receipts — everything you need to work as an MEI. Our Kit includes 4 professional PDF templates ready to use.
            </p>
          </div>
          <a
            href="/en/kit-mei"
            className="btn-primary no-underline inline-flex whitespace-nowrap"
          >
            Buy Kit MEI — R$ 29.90
          </a>
        </div>
      </div>

      <h2>Related Content</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          ['/en/guias/como-abrir-mei', 'How to Open an MEI', 'Step-by-step guide to register your MEI for free'],
          ['/en/calendario-das', 'DAS 2026 Calendar', 'Due dates for download (.ics)'],
          ['/en/guias/limite-faturamento-mei', 'MEI Revenue Limit', 'Understand the R$ 81K cap and what to do if you exceed it'],
          ['/en/guias/abrir-conta-pj-mei', 'Open a Business Bank Account', 'Compare the best free business accounts for your CNPJ'],
        ].map(([href, title, desc]) => (
          <a key={href} href={href} className="card card-hover no-underline p-4 flex flex-col gap-1">
            <span className="font-semibold" style={{ color: 'var(--color-foreground)' }}>{title} →</span>
            <span className="text-caption">{desc}</span>
          </a>
        ))}
      </div>

      {/* Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'DAS MEI 2026 Complete Guide — Amounts, Deadlines & Payment',
            description:
              'Everything about Brazil\'s MEI monthly tax (DAS) for 2026: updated amounts with the new minimum wage, how to pay, deadlines, penalties, and consequences of non-payment.',
            author: {
              '@type': 'Organization',
              name: 'Oráculo do MEI',
              url: 'https://oraculodomei.com.br',
            },
            datePublished: '2025-01-01',
            dateModified: '2026-07-22',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://oraculodomei.com.br/en/guias/das-mei-2026',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Oráculo do MEI',
              url: 'https://oraculodomei.com.br',
            },
            inLanguage: 'en',
          }),
        }}
      />
      {/* BreadcrumbList Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://oraculodomei.com.br/en',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Guides',
                item: 'https://oraculodomei.com.br/en/guias',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'DAS MEI 2026',
              },
            ],
          }),
        }}
      />
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
                name: 'How much is the DAS MEI in 2026?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'With the minimum wage at R$ 1,518, the DAS for commerce is R$ 76.90, for services is R$ 80.90, and for industry is R$ 76.90 per month. This includes INSS (5% of minimum wage) plus municipal/state tax.',
                },
              },
              {
                '@type': 'Question',
                name: 'When is the DAS MEI due?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The DAS is due on the 20th of the month following the reference month. If the 20th falls on a Saturday, Sunday, or national holiday, the due date moves to the next business day with no penalty.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I pay the DAS MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It can be paid via payment slip at any bank, lottery shop (Lotérica), the official MEI app, internet banking, or directly at the city hall.',
                },
              },
              {
                '@type': 'Question',
                name: 'What happens if I don\'t pay the DAS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Late payment incurs a 0.33% daily fine (capped at 20%) plus Selic interest. After 180 days overdue, your CNPJ may be suspended and you lose social security (INSS) benefits.',
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
