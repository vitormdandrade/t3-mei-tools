import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oráculo do MEI — Free Calculators for Brazilian Micro-Entrepreneurs',
  description: 'Complete toolset for MEI: DAS tax calculator, revenue limits, MEI vs ME comparison, INSS, and step-by-step English guides for Brazilian entrepreneurs.',
  alternates: {
    canonical: '/en',
    languages: {
      'pt-BR': 'https://oraculodomei.com.br',
      'en': 'https://oraculodomei.com.br/en',
    },
  },
  openGraph: {
    title: 'Oráculo do MEI — Free Calculators for MEI Entrepreneurs',
    description: 'DAS calculator, revenue limits, CNAE search, and English guides for opening and managing a Brazilian MEI.',
    type: 'website',
    locale: 'en_US',
    url: 'https://oraculodomei.com.br/en',
    siteName: 'Oráculo do MEI',
  },
};

type Tool = {
  href: string;
  icon: string;
  title: string;
  desc: string;
  cta: string;
};

const taxTools: Tool[] = [
  { href: '/calculadora/das', icon: '🧾', title: 'DAS Calculator', desc: 'Calculate your monthly DAS tax based on your activity and the current minimum wage.', cta: 'Open calculator' },
  { href: '/calculadora/faturamento', icon: '📊', title: 'Revenue Limit Tracker', desc: 'Track your annual revenue and know when you need to switch tax regimes.', cta: 'Open calculator' },
  { href: '/calculadora/mei-vs-me', icon: '⚖️', title: 'MEI vs ME vs Simples', desc: 'Compare taxes, costs, and benefits across all three Brazilian business regimes.', cta: 'Open calculator' },
  { href: '/calculadora/inss-autonomo', icon: '🛡️', title: 'INSS for Freelancers', desc: 'Calculate your INSS social security contribution as a freelancer based on monthly income.', cta: 'Open calculator' },
];

const financeTools: Tool[] = [
  { href: '/calculadora/margem-de-lucro', icon: '💹', title: 'Profit Margin', desc: 'How much of every real sold becomes actual profit after costs.', cta: 'Open calculator' },
  { href: '/calculadora/preco-por-hora', icon: '⏱️', title: 'Hourly Rate', desc: 'Minimum hourly rate for freelancers to cover salary, DAS, and expenses.', cta: 'Open calculator' },
  { href: '/calculadora/ponto-de-equilibrio', icon: '🎯', title: 'Break-Even Point', desc: 'How many units to sell per month to cover fixed costs.', cta: 'Open calculator' },
];

const referenceTools: Tool[] = [
  { href: '/calculadora/cnae', icon: '🔍', title: 'CNAE Codes for MEI', desc: 'Search hundreds of activities allowed for MEI with description and category.', cta: 'Search CNAEs' },
  { href: '/calendario-das', icon: '📅', title: 'DAS Calendar 2026', desc: 'All 12 payment due dates for the year + .ics file for Google/Apple Calendar.', cta: 'View calendar' },
];

const guides: Tool[] = [
  { href: '/en/guias/como-abrir-mei', icon: '🚀', title: 'How to Open MEI', desc: 'Step-by-step guide to register your MEI online and start legally in Brazil.', cta: 'Read guide' },
  { href: '/en/guias/das-mei-2026', icon: '📑', title: 'DAS 2026 Guide', desc: 'Everything about DAS: values, deadlines, and how to pay correctly.', cta: 'Read guide' },
  { href: '/en/guias/nota-fiscal-mei', icon: '🧾', title: 'MEI Invoicing (Nota Fiscal)', desc: 'When, how, and rules for issuing invoices as a Brazilian MEI.', cta: 'Read guide' },
];

const comparisons: Tool[] = [
  { href: '/melhores/melhores-contas-pj-mei', icon: '🏦', title: 'Best Business Accounts for MEI', desc: 'Compare the best bank accounts for MEI with transfers, cards, and credit.', cta: 'Compare Accounts →' },
  { href: '/melhores/melhores-maquininhas-mei', icon: '💳', title: 'Best POS Terminals', desc: 'Card machines for MEI with the best rates and support.', cta: 'Compare Terminals →' },
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.href}
      className="card card-hover no-underline p-6 flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1"
    >
      <span className="text-3xl" role="img" aria-hidden="true">
        {tool.icon}
      </span>
      <div className="flex flex-col gap-1 flex-1">
        <h3 className="text-base font-bold m-0 leading-snug" style={{ color: 'var(--color-foreground)' }}>
          {tool.title}
        </h3>
        <p className="text-sm m-0 leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          {tool.desc}
        </p>
      </div>
      <span
        className="text-sm font-semibold inline-flex items-center gap-1"
        style={{ color: 'var(--brand-primary)' }}
      >
        {tool.cta} <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}

function Section({ title, tools }: { title: string; tools: Tool[] }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <ToolCard key={tool.href} tool={tool} />
        ))}
      </div>
    </section>
  );
}

export default function EnHome() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4"
          style={{ background: 'var(--color-surface-alt)', border: '1px solid var(--color-border)', color: 'var(--color-muted)' }}>
          🇧🇷 English guides for Brazilian MEI entrepreneurs
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: 'var(--color-foreground)', letterSpacing: '-0.02em' }}>
          Free Tools &amp; Guides for<br />Brazilian Micro-Entrepreneurs
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-muted)', lineHeight: 1.6 }}>
          Everything you need to open and manage your MEI in Brazil — calculators, step-by-step guides,
          and comparisons — now available in English.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mt-6">
          <Link href="/en/guias/como-abrir-mei" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white"
            style={{ background: 'var(--brand-primary)' }}>
            🚀 How to Open MEI →
          </Link>
          <Link href="/calculadora/das" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold"
            style={{ background: 'var(--color-surface-alt)', color: 'var(--color-foreground)', border: '1px solid var(--color-border)' }}>
            🧾 DAS Calculator
          </Link>
        </div>
      </div>

      <Section title="📋 Tax & Legal Calculators" tools={taxTools} />
      <Section title="💰 Business & Finance" tools={financeTools} />
      <Section title="🔍 Reference Tools" tools={referenceTools} />
      <Section title="📖 English Guides" tools={guides} />
      <Section title="🏦 Comparisons" tools={comparisons} />

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
                name: 'How much does it cost to open a MEI in Brazil?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Completely free. There is no registration fee. The only cost is the monthly DAS tax (starting at R$ 71.60 in 2026).',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need a Brazilian address to open a MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. You need a residential address in Brazil and a Brazilian CPF to register as a MEI.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the DAS tax?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'DAS (Documento de Arrecadação do Simples Nacional) is the unified monthly tax paid by MEI entrepreneurs. The amount varies by activity: R$ 71.60 for commerce/industry, R$ 75.60 for services, and R$ 76.60 for commerce+services (2026 values).',
                },
              },
              {
                '@type': 'Question',
                name: 'Can foreigners open a MEI in Brazil?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Foreigners with a permanent visa and a valid Brazilian CPF can open a MEI. Temporary visa holders generally cannot. Check the latest rules on the gov.br portal.',
                },
              },
            ],
          }),
        }}
      />
      {/* Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Oráculo do MEI',
            url: 'https://oraculodomei.com.br',
            description: 'Free tools and guides for Brazilian MEI micro-entrepreneurs — DAS calculator, opening guides, and fintech comparisons in Portuguese and English.',
            sameAs: ['https://oraculodomei.com.br', 'https://oraculodomei.com.br/en'],
          }),
        }}
      />
    </div>
  );
}
