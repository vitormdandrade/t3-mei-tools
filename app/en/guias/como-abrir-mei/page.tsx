import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Open MEI Online — Step-by-Step Guide 2026",
  description: "Complete guide to registering as a MEI (Individual Microentrepreneur) in Brazil. Required documents, step-by-step process, and timelines — 100% free.",
  alternates: {
    canonical: '/en/guias/como-abrir-mei',
    languages: {
      'pt-BR': 'https://oraculodomei.com.br/guias/como-abrir-mei',
      'en': 'https://oraculodomei.com.br/en/guias/como-abrir-mei',
    },
  },
  openGraph: {
    title: "How to Open MEI Online — Step-by-Step Guide 2026",
    description: "Complete guide: documents, CNAE codes, and step-by-step to open your Brazilian MEI in 10 minutes. 100% free.",
    type: 'article',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to open a MEI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completely free. No fees or bureaucracy. The only cost will be the monthly DAS tax.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an accountant to open a MEI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. You can do it yourself online. An accountant helps with taxes but is not required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I open a MEI while unemployed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. There are no restrictions. You can open a MEI regardless of your employment situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Confirmation email not received?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check your spam folder. If you haven\'t received it within 1 hour, access the portal again with your CPF.',
      },
    },
  ],
};

export default function ComoAbrirMeiEn() {
  return (
    <article className="prose-guide max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How to Open MEI Online in 2026',
            description:
              'Step-by-step guide to registering as a Microempreendedor Individual on the official portal. Free and 100% online.',
            author: {
              '@type': 'Organization',
              name: 'Oráculo do MEI',
              url: 'https://oraculodomei.com.br',
            },
            datePublished: '2025-01-01',
            dateModified: '2026-07-23',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://oraculodomei.com.br/en/guias/como-abrir-mei',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Oráculo do MEI',
              url: 'https://oraculodomei.com.br',
            },
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
                name: 'How to Open MEI',
              },
            ],
          }),
        }}
      />
      <header className="mb-10">
        <span className="text-label">Guide</span>
        <h1 className="text-hero mt-2 mb-4">How to Open MEI Online in 2026</h1>
        <p className="text-body-lg">
          Step-by-step guide to registering your Individual Microentrepreneur (MEI) on Brazil's official government portal. Completely free and 100% online — no paperwork needed.
        </p>
      </header>

      <div className="callout callout-accent my-6">
        <p className="callout-title">Good News</p>
        <p>
          Opening a MEI is completely free and takes less than 10 minutes. No fees, no excessive bureaucracy.
        </p>
      </div>

      <h2>1. Required Documents</h2>
      <p>Before you start, gather these documents:</p>
      <ul>
        <li><strong>CPF</strong> — Your Brazilian individual taxpayer ID number</li>
        <li><strong>Voter Registration (Título de Eleitor)</strong> — Number and state</li>
        <li><strong>Proof of Address</strong> — Recent utility bill (electricity, water, phone)</li>
        <li><strong>Bank Details</strong> — Bank, branch, and account number (optional but recommended)</li>
        <li><strong>Valid Email</strong> — For official communications</li>
        <li><strong>Phone Number</strong> — Mobile or landline for contact</li>
      </ul>

      <h2>2. Choose Your Activity (CNAE)</h2>
      <p>The CNAE is the code that defines your economic activity. Choose carefully:</p>
      <div className="callout callout-warning my-6">
        <p>
          <strong>Tip:</strong> Search the Receita Federal website for the CNAE that best matches your activity. You can select up to 2 primary CNAEs.
        </p>
      </div>
      <p>Popular examples:</p>
      <ul>
        <li>4753-1/00: Retail sale of decoration articles</li>
        <li>7490-2/03: Accounting activities</li>
        <li>6010-3/00: Computer programming</li>
        <li>5611-1/01: Full-service restaurants</li>
        <li>9602-9/02: Beauty salons</li>
      </ul>
      <p className="text-sm mt-2" style={{ color: 'var(--color-muted)' }}>
        💡 Use our{' '}
        <a href="/calculadora/cnae" style={{ color: 'var(--brand-teal)', fontWeight: 600 }}>
          CNAE calculator
        </a>{' '}
        to find the ideal code for your activity. And after opening,{' '}
        <a href="/calculadora/faturamento" style={{ color: 'var(--brand-teal)', fontWeight: 600 }}>
          simulate your maximum revenue
        </a>{' '}
        to avoid exceeding the MEI cap.
      </p>

      <h2>3. Step-by-Step to Open MEI</h2>

      <div className="card p-6 my-6">
        <h3>Step 1: Access the Portal</h3>
        <ol>
          <li>Go to <strong>www.gov.br/empresas/mei</strong></li>
          <li>Click &quot;Abrir Meu Negócio&quot; (Open My Business) or &quot;Registrar MEI&quot;</li>
          <li>You'll be redirected to the Receita Federal services portal</li>
        </ol>
      </div>

      <div className="card p-6 my-6">
        <h3>Step 2: Fill in Personal Data</h3>
        <ol>
          <li>Enter your CPF and click &quot;Validar&quot; (Validate)</li>
          <li>Confirm your date of birth</li>
          <li>Enter your voter registration number</li>
          <li>Fill in your full name, email, and phone number</li>
          <li>Confirm your residential address (this will be your business address)</li>
        </ol>
      </div>

      <div className="card p-6 my-6">
        <h3>Step 3: Choose CNAE and Activity</h3>
        <ol>
          <li>Search for your activity in the search field</li>
          <li>Select the CNAE that best matches</li>
          <li>You can add up to 2 secondary activities</li>
          <li>Click &quot;Continuar&quot; (Continue)</li>
        </ol>
      </div>

      <div className="card p-6 my-6">
        <h3>Step 4: Select Contribution Option</h3>
        <ol>
          <li>Choose whether to contribute as MEI (5%) or another regime</li>
          <li>For MEI, the rate is 5% of the minimum wage</li>
          <li>You'll be entitled to INSS social security benefits</li>
        </ol>
      </div>

      <div className="card p-6 my-6">
        <h3>Step 5: Review and Confirm</h3>
        <ol>
          <li>Review all entered data</li>
          <li>Accept the terms of responsibility</li>
          <li>Click &quot;Enviar&quot; (Submit)</li>
          <li>You'll receive a protocol number</li>
        </ol>
      </div>

      <div className="card p-6 my-6">
        <h3>Step 6: Download Documents</h3>
        <ol>
          <li>After confirmation, you'll receive your CNPJ</li>
          <li>Download the Registration Certificate (Comprovante de Inscrição e Situação Cadastral)</li>
          <li>Save this document — it's your MEI CNPJ proof</li>
          <li>You can print or save as PDF</li>
        </ol>
      </div>

      {/* Mid-content Kit MEI CTA — high-intent audience, internal product upsell */}
      <div className="my-8 rounded-2xl p-6 sm:p-8" style={{ background: 'linear-gradient(135deg, var(--brand-navy), var(--brand-navy-light))' }}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#ffffff' }}>
              📋 Opened your MEI? Don't stop there!
            </h3>
            <p style={{ color: '#c8d2dc' }} className="text-body">
              Every MEI needs a service agreement, invoice, receipt, and professional quote template. Our <strong style={{ color: '#fbbf24' }}>Kit MEI</strong> includes 4 ready-to-use PDF templates so you can start billing today.
            </p>
            <ul className="mt-3 space-y-1" style={{ color: '#b4c1ce' }}>
              <li>✅ Service Agreement Template</li>
              <li>✅ Invoice Template</li>
              <li>✅ Receipts for Individuals & Companies</li>
              <li>✅ Professional Quote Template</li>
            </ul>
          </div>
          <a href="/kit-mei" className="btn-light no-underline inline-flex items-center gap-2 whitespace-nowrap text-center justify-center px-6 py-4 rounded-xl font-bold text-lg">
            Get Kit MEI →<br/>
            <span className="text-sm font-normal opacity-90">Only R$ 29.90</span>
          </a>
        </div>
      </div>

      <h2>4. Next Steps After Opening MEI</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="card p-4">
          <h3>Required</h3>
          <ul>
            <li>Pay your first DAS</li>
            <li>Open a business bank account (PJ)</li>
            <li>Generate Registration Receipt</li>
            <li>Register with your local city hall</li>
          </ul>
        </div>
        <div className="card p-4">
          <h3>Recommended</h3>
          <ul>
            <li>Find an accountant</li>
            <li>Register your trademark (INPI)</li>
            <li>Set up an invoicing system</li>
            <li>Organize documentation</li>
          </ul>
        </div>
      </div>

      <h2>5. How Long Does It Take?</h2>
      <ul>
        <li><strong>Form filling:</strong> 5–10 minutes</li>
        <li><strong>Processing:</strong> Instant</li>
        <li><strong>Active CNPJ:</strong> Minutes after completion</li>
        <li><strong>System access:</strong> 24–48 hours</li>
      </ul>

      <h2>6. Frequently Asked Questions</h2>
      <div className="space-y-4 my-6">
        <details className="card p-4">
          <summary className="font-semibold cursor-pointer">How much does it cost to open a MEI?</summary>
          <p>Completely free. No fees or bureaucracy. The only cost will be the monthly DAS tax.</p>
        </details>
        <details className="card p-4">
          <summary className="font-semibold cursor-pointer">Do I need an accountant to open a MEI?</summary>
          <p>No. You can do it yourself online. An accountant helps with taxes but is not required.</p>
        </details>
        <details className="card p-4">
          <summary className="font-semibold cursor-pointer">Can I open a MEI while unemployed?</summary>
          <p>Yes. There are no restrictions. You can open a MEI regardless of your employment situation.</p>
        </details>
        <details className="card p-4">
          <summary className="font-semibold cursor-pointer">Confirmation email not received?</summary>
          <p>Check your spam folder. If you haven't received it within 1 hour, access the portal again with your CPF.</p>
        </details>
      </div>

      <div className="callout callout-accent my-8">
        <p className="callout-title">Next Steps</p>
        <ul>
          <li>✓ <a href="/calculadora/das">Calculate your DAS</a></li>
          <li>✓ <a href="/melhores/melhores-contas-pj-mei">Open a PJ business account</a></li>
          <li>✓ <a href="/guias/das-mei-2026">Understand the DAS</a></li>
        </ul>
      </div>

      <h2>Related Content</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {([
          ['/en/guias/das-mei-2026', 'DAS MEI 2026', 'Updated amounts, deadlines, and how to pay the DAS'],
          ['/guias/limite-faturamento-mei', 'MEI Revenue Cap', 'Understand the R$ 81k limit and what to do if you exceed it'],
          ['/guias/abrir-conta-pj-mei', 'Open a PJ Account for MEI', 'Compare the best free business accounts for your CNPJ'],
          ['/en/guias/das-mei-2026', 'MEI Hiring Rules', 'Rules, limits, and obligations for hiring employees as a MEI'],
        ].map(([href, title, desc]) => (
          <a key={href} href={href} className="card card-hover no-underline p-4 flex flex-col gap-1">
            <span className="font-semibold" style={{ color: 'var(--color-foreground)' }}>{title} →</span>
            <span className="text-caption">{desc}</span>
          </a>
        )))}
      </div>

      {/* Kit MEI CTA */}
      <div className="callout callout-accent my-8">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <p className="callout-title">
              📋 Opened your MEI? You need documents!
            </p>
            <p>
              Every MEI needs contracts, invoices, and receipts. Our Kit MEI includes 4 professional PDF templates ready to fill out and use.
            </p>
          </div>
          <a
            href="/kit-mei"
            className="btn-primary no-underline inline-flex whitespace-nowrap"
          >
            Buy Kit MEI — R$ 29.90
          </a>
        </div>
      </div>

      {/* Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How to Open a MEI in Brazil — Complete Step-by-Step Guide 2026',
            description:
              'Complete guide to opening a MEI (Individual Microentrepreneur) in Brazil: requirements, step-by-step online process, costs, deadlines, and what to do after registration.',
            author: {
              '@type': 'Organization',
              name: 'Oráculo do MEI',
              url: 'https://oraculodomei.com.br',
            },
            datePublished: '2025-06-15',
            dateModified: '2026-07-22',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://oraculodomei.com.br/en/guias/como-abrir-mei',
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
                name: 'How to Open a MEI',
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
                name: 'How much does it cost to open a MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Completely free. No fees or bureaucracy. The only cost will be the monthly DAS tax.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need an accountant to open a MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. You can do it yourself online. An accountant helps with taxes but is not required for MEI registration.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I open a MEI while unemployed?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. There are no restrictions. You can open a MEI regardless of your employment situation in Brazil.',
                },
              },
              {
                '@type': 'Question',
                name: 'What if I don\'t receive the confirmation email?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Check your spam folder. If you haven\'t received it within 1 hour, access the portal again with your CPF to retrieve your MEI registration.',
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
