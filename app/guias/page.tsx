export const metadata = {
  title: "Guias Completos para MEI e Freelancers",
  description: "Guias detalhados sobre como abrir MEI, calcular DAS, emitir nota fiscal e muito mais.",
  alternates: { canonical: '/guias' },
};

export default function GuidesPage() {
  const guides = [
    {
      slug: "como-abrir-mei",
      title: "Como Abrir MEI Online em 2026",
      excerpt: "Passo a passo completo para registrar seu MEI no portal oficial.",
      category: "Regulamentação",
    },
    {
      slug: "das-mei-2026",
      title: "Guia Completo: DAS MEI 2026",
      excerpt: "Entenda tudo sobre o DAS: valores, prazos, forma de pagamento.",
      category: "Impostos",
    },
    {
      slug: "nota-fiscal-mei",
      title: "Nota Fiscal MEI: Quando e Como Usar",
      excerpt: "Saiba quando é obrigatório, como emitir e as regras 2026.",
      category: "Nota Fiscal",
    },
    {
      slug: "mei-pode-ter-funcionario",
      title: "MEI Pode Ter Funcionário? Regras 2026",
      excerpt: "Tudo sobre contratação de funcionários como MEI.",
      category: "Funcionários",
    },
    {
      slug: "limite-faturamento-mei",
      title: "Limite de Faturamento MEI Explicado",
      excerpt: "Entenda o limite de R$ 85 mil e quando você deve mudar de regime.",
      category: "Faturamento",
    },
    {
      slug: "mei-vs-autonomo",
      title: "MEI vs Autônomo: Qual Escolher?",
      excerpt: "Comparação completa entre ser MEI e trabalhar como autônomo.",
      category: "Comparação",
    },
    {
      slug: "abrir-conta-pj-mei",
      title: "Como Abrir Conta PJ para MEI",
      excerpt: "Guia para abrir conta bancária PJ/MEI com documentação necessária.",
      category: "Banco",
    },
    {
      slug: "cancelar-mei",
      title: "Como Cancelar MEI (Dar Baixa) em 2026",
      excerpt: "Passo a passo para encerrar seu MEI, regularizar débitos e evitar multas.",
      category: "Regulamentação",
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <span className="text-label">Conteúdo</span>
        <h1 className="text-hero mt-2 mb-3">Guias Completos para MEI</h1>
        <p className="text-body-lg max-w-2xl">
          Aprenda tudo que você precisa saber sobre ser MEI ou freelancer no Brasil.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <a
            key={guide.slug}
            href={`/guias/${guide.slug}`}
            className="card card-hover no-underline p-6 flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1"
          >
            <div>
              <span className="pill">{guide.category}</span>
            </div>
            <h3 className="text-subheading" style={{ color: 'var(--color-foreground)' }}>{guide.title}</h3>
            <p className="text-body flex-grow">{guide.excerpt}</p>
            <span className="link-arrow mt-1">Ler guia <span aria-hidden>→</span></span>
          </a>
        ))}
      </div>

      {/* Ebook CTA */}
      <div className="card p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 border-2" style={{ borderColor: 'var(--brand-gold, #d4a12a)' }}>
        <div className="text-6xl shrink-0">📘</div>
        <div className="flex-grow text-center sm:text-left">
          <h2 className="text-subheading mb-1" style={{ color: 'var(--color-foreground)' }}>
            Todos os guias em um único PDF
          </h2>
          <p className="text-body">
            O <strong>Guia Completo do MEI 2026</strong> reúne abertura, DAS, nota fiscal,
            DASN-SIMEI, INSS e finanças em 9 capítulos objetivos. Leia offline, no seu ritmo.
          </p>
        </div>
        <a href="/kit-mei/guia-mei-2026" className="btn-primary no-underline shrink-0">
          Comprar Ebook — R$ 19,90
        </a>
      </div>

      {/* Kit MEI CTA */}
      <div
        className="rounded-3xl p-8 sm:p-10 text-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-light) 100%)' }}
      >
        <h2 className="text-heading mb-2" style={{ color: '#ffffff' }}>
          📋 Kit MEI — Documentos Prontos para Usar
        </h2>
        <p className="text-body-lg mb-6 max-w-2xl mx-auto" style={{ color: '#c8d2dc' }}>
          4 modelos profissionais em PDF: Contrato, Nota Fiscal, Recibo e Termo de Responsabilidade.
        </p>
        <a href="/kit-mei" className="btn-gold btn-lg no-underline inline-flex items-center gap-2">
          Comprar por R$ 29,90
        </a>
      </div>
    </div>
  );
}
