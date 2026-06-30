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
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Guias Completos para MEI</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Aprenda tudo que você precisa saber sobre ser MEI ou freelancer no Brasil.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <a
            key={guide.slug}
            href={`/guias/${guide.slug}`}
            className="border dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition hover:border-blue-400"
          >
            <div className="mb-3">
              <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
                {guide.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{guide.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{guide.excerpt}</p>
            <span className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Ler guia →</span>
          </a>
        ))}
      </div>

      {/* Kit MEI CTA */}
      <div className="bg-gradient-to-r from-amber-50 dark:from-amber-950/40 to-orange-50 dark:to-orange-950/40 border border-amber-200 dark:border-amber-800 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          📋 Kit MEI — Documentos Prontos para Usar
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          4 modelos profissionais em PDF: Contrato, Nota Fiscal, Recibo e Termo de Responsabilidade.
        </p>
        <a
          href="/kit-mei"
          className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700 transition"
        >
          Comprar por R$ 29,90
        </a>
      </div>
    </div>
  );
}
