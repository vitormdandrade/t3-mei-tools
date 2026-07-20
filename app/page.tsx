export const metadata = {
  title: "Oráculo do MEI — Calculadoras Gratuitas para Microempreendedores",
  description: "Ferramentas completas para MEI: calculadora de DAS, faturamento, MEI vs ME, INSS autônomo e guias detalhados.",
  alternates: { canonical: '/' },
};

type Tool = {
  href: string;
  icon: string;
  title: string;
  desc: string;
  cta: string;
};

const taxTools: Tool[] = [
  { href: '/calculadora/das', icon: '🧾', title: 'Calculadora DAS', desc: 'Calcule o valor mensal do DAS conforme sua atividade e o salário mínimo do ano.', cta: 'Ver calculadora' },
  { href: '/calculadora/faturamento', icon: '📊', title: 'Limite de Faturamento', desc: 'Acompanhe seu faturamento anual e saiba quando precisa mudar de regime.', cta: 'Ver calculadora' },
  { href: '/calculadora/mei-vs-me', icon: '⚖️', title: 'MEI vs ME vs Simples', desc: 'Compare impostos, custos e benefícios dos três regimes para o seu negócio.', cta: 'Ver calculadora' },
  { href: '/calculadora/inss-autonomo', icon: '🛡️', title: 'INSS Autônomo', desc: 'Calcule a contribuição ao INSS como autônomo conforme sua renda mensal.', cta: 'Ver calculadora' },
];

const financeTools: Tool[] = [
  { href: '/calculadora/margem-de-lucro', icon: '💹', title: 'Margem de Lucro', desc: 'Quanto de cada real vendido vira lucro real depois dos custos.', cta: 'Ver calculadora' },
  { href: '/calculadora/preco-por-hora', icon: '⏱️', title: 'Preço por Hora', desc: 'Valor mínimo/hora para freelancers cobrirem salário, DAS e despesas.', cta: 'Ver calculadora' },
  { href: '/calculadora/ponto-de-equilibrio', icon: '🎯', title: 'Ponto de Equilíbrio', desc: 'Quantas unidades vender por mês para cobrir os custos fixos.', cta: 'Ver calculadora' },
];

const referenceTools: Tool[] = [
  { href: '/calculadora/cnae', icon: '🔍', title: 'CNAEs Permitidos para MEI', desc: 'Busque entre centenas de atividades aceitas no MEI com descrição e categoria.', cta: 'Ver CNAEs' },
  { href: '/calendario-das', icon: '📅', title: 'Calendário DAS 2026', desc: 'Todas as 12 datas de vencimento do ano + arquivo .ics para Google/Apple Calendar.', cta: 'Ver calendário' },
];

const guides: Tool[] = [
  { href: '/guias/como-abrir-mei', icon: '🚀', title: 'Como Abrir MEI', desc: 'Passo a passo para registrar seu MEI online e começar legalmente.', cta: 'Ler guia' },
  { href: '/guias/das-mei-2026', icon: '📑', title: 'DAS 2026', desc: 'Entenda tudo sobre o DAS: valores, prazos e como pagar corretamente.', cta: 'Ler guia' },
  { href: '/guias/nota-fiscal-mei', icon: '🧾', title: 'Nota Fiscal MEI', desc: 'Quando, como e quando usar nota fiscal no MEI. Regras 2026.', cta: 'Ler guia' },
];

const comparisons: Tool[] = [
  { href: '/melhores/melhores-contas-pj-mei', icon: '🏦', title: 'Melhores Contas PJ para MEI', desc: 'Compare as melhores contas bancárias para MEI com transferências, cartões e crédito.', cta: 'Ver comparativo' },
  { href: '/melhores/melhores-maquininhas-mei', icon: '💳', title: 'Melhores Maquininhas', desc: 'Maquininhas de crédito e débito para MEI com as melhores taxas e suporte.', cta: 'Ver comparativo' },
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.href}
      className="card card-hover no-underline p-6 flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1"
    >
      <span
        className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl shrink-0"
        style={{ background: 'var(--color-accent-soft)' }}
        aria-hidden
      >
        {tool.icon}
      </span>
      <h3 className="text-subheading" style={{ color: 'var(--color-foreground)' }}>{tool.title}</h3>
      <p className="text-body flex-grow">{tool.desc}</p>
      <span className="link-arrow mt-1">{tool.cta} <span aria-hidden>→</span></span>
    </a>
  );
}

const faqs = [
  { q: 'Qual é o limite de faturamento para MEI em 2026?', a: 'O limite anual é de R$ 81.000 em 2026. Se ultrapassar este valor, você terá que migrar para outro regime.' },
  { q: 'Como funciona o DAS?', a: 'O DAS é a contribuição mensal que o MEI faz à Prefeitura (ISS ou ICMS) e ao INSS. Varia conforme a categoria da atividade.' },
  { q: 'MEI pode ter funcionário?', a: 'Sim, MEI pode ter apenas 1 funcionário. Se contratar outro, é obrigado a virar ME.' },
  { q: 'Qual o valor do DAS MEI em 2026?', a: 'Em 2026, o DAS para comércio/indústria é de aproximadamente R$ 76,60 e para serviços é de R$ 81,60, considerando o salário mínimo vigente. Use nossa calculadora para o valor exato.' },
  { q: 'MEI precisa declarar Imposto de Renda?', a: 'Sim, se seus rendimentos tributáveis ultrapassarem R$ 30.639,90 no ano. Além disso, todo MEI deve entregar a DASN-SIMEI anualmente, declarando o faturamento bruto do ano anterior.' },
];

export default function Home() {
  return (
    <div className="space-y-20">
      {/* ── Hero ── */}
      <section
        className="text-center rounded-3xl px-6 py-16 sm:py-20"
        style={{ background: 'linear-gradient(160deg, var(--color-accent-soft) 0%, var(--color-surface-alt) 55%, var(--color-background) 100%)' }}
      >
        <span className="pill mb-5">🔮 Oráculo do MEI · 100% gratuito</span>
        <h1 className="text-hero mb-5 max-w-3xl mx-auto">
          Ferramentas gratuitas para <span className="gradient-text">MEI e Freelancers</span>
        </h1>
        <p className="text-body-lg max-w-2xl mx-auto mb-8">
          Calcule DAS, faturamento, preços, margens e compare regimes de impostos com precisão — sem cadastro, sem limite.
        </p>
        <div className="flex gap-3 justify-center flex-wrap mb-10">
          <a href="/calculadora/das" className="btn-primary btn-lg no-underline">Calcular DAS</a>
          <a href="/calculadora/faturamento" className="btn-secondary btn-lg no-underline">Limite de faturamento</a>
        </div>
        <div className="flex gap-2.5 justify-center flex-wrap">
          <span className="chip">✓ Sem limite de cálculos</span>
          <span className="chip">✓ 100% gratuito, sem cadastro</span>
          <span className="chip">✓ Cada calculadora com URL própria</span>
        </div>
        <p className="text-sm mt-4" style={{ color: 'var(--color-muted)' }}>
          🔢 <strong>+10.000</strong> cálculos realizados em 2026 · Atualizado em Julho/2026
        </p>
      </section>

      {/* ── Calculators ── */}
      <section>
        <div className="mb-8">
          <span className="text-label">Calculadoras</span>
          <h2 className="text-heading mt-2 mb-2">Nossas Calculadoras</h2>
          <p className="text-body-lg max-w-2xl">7 calculadoras dedicadas — cada uma com sua própria URL, para você achar exatamente o que precisa no Google.</p>
        </div>

        <h3 className="text-subheading mb-4" style={{ color: 'var(--color-foreground)' }}>Impostos e regime MEI</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {taxTools.map((t) => <ToolCard key={t.href} tool={t} />)}
        </div>

        <h3 className="text-subheading mb-4" style={{ color: 'var(--color-foreground)' }}>Gestão financeira do negócio</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {financeTools.map((t) => <ToolCard key={t.href} tool={t} />)}
        </div>

        <h3 className="text-subheading mb-4" style={{ color: 'var(--color-foreground)' }}>Consulta e referência</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {referenceTools.map((t) => <ToolCard key={t.href} tool={t} />)}
        </div>
      </section>

      {/* ── Guides ── */}
      <section>
        <div className="mb-8">
          <span className="text-label">Conteúdo</span>
          <h2 className="text-heading mt-2">Guias Completos</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((t) => <ToolCard key={t.href} tool={t} />)}
        </div>
      </section>

      {/* ── Kit MEI ── */}
      <section>
        <div
          className="rounded-3xl p-8 sm:p-10 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-light) 100%)' }}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                style={{ background: 'var(--brand-gold-soft)', color: 'var(--brand-gold)' }}
              >
                📋 Kit MEI — Documentos Prontos
              </span>
              <h2 className="text-heading mb-3" style={{ color: '#ffffff' }}>Kit MEI Completo</h2>
              <p className="text-body-lg mb-6" style={{ color: '#c8d2dc' }}>
                4 modelos profissionais em PDF: Contrato de Prestação de Serviços, Nota Fiscal (RPA), Recibo de Pagamento e Termo de Responsabilidade.
              </p>
              <div className="flex items-center gap-5 flex-wrap">
                <span className="text-2xl font-bold" style={{ color: 'var(--brand-gold)' }}>R$ 29,90</span>
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold" style={{ background: 'rgba(251,191,36,0.15)', color: 'var(--brand-gold)', border: '1px solid rgba(251,191,36,0.3)' }}>
                  ⚡ Mais de 800 kits vendidos
                </span>
                <a href="/kit-mei" className="btn-gold no-underline inline-flex items-center gap-2">Comprar Kit MEI <span aria-hidden>→</span></a>
              </div>
              <p className="text-sm mt-3" style={{ color: '#c8d2dc' }}>
                📘 Novo: <a href="/kit-mei/guia-mei-2026" className="font-semibold underline" style={{ color: 'var(--brand-gold)' }}>Guia Completo do MEI 2026</a> — ebook com tudo sobre abertura, DAS, nota fiscal e DASN por R$ 19,90.
              </p>
              <p className="text-xs mt-2 font-medium" style={{ color: '#e8a890' }}>
                ⏰ Preço promocional — compre agora antes do reajuste
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2.5 shrink-0">
              {['📝 Contrato', '🧾 Nota Fiscal', '💰 Recibo', '✍️ Termo'].map((label) => (
                <span
                  key={label}
                  className="px-3.5 py-2 rounded-full text-sm font-medium text-center"
                  style={{ background: 'rgba(255,255,255,0.08)', color: '#e8ece7', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparisons ── */}
      <section>
        <div className="mb-8">
          <span className="text-label">Comparativos</span>
          <h2 className="text-heading mt-2">Melhores Contas e Soluções PJ</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {comparisons.map((t) => <ToolCard key={t.href} tool={t} />)}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section>
        <div className="mb-8">
          <span className="text-label">Dúvidas</span>
          <h2 className="text-heading mt-2">Perguntas Frequentes</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="card p-6 group">
              <summary className="text-subheading cursor-pointer list-none flex items-center justify-between gap-4" style={{ color: 'var(--color-foreground)' }}>
                {item.q}
                <span className="link-arrow shrink-0 transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="text-body mt-3">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
              },
            })),
          }),
        }}
      />

      {/* Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Oráculo do MEI',
            url: 'https://oraculodomei.com.br',
            description: 'Ferramentas gratuitas para microempreendedores: calculadoras de DAS, faturamento, MEI vs ME, INSS autônomo e guias completos.',
            sameAs: [
              'https://oraculodomei.com.br',
            ],
          }),
        }}
      />
    </div>
  );
}
