export const metadata = {
  title: "Guias Completos para MEI e Freelancers",
  description: "Guias detalhados sobre como abrir MEI, calcular DAS, emitir nota fiscal e muito mais.",
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Guias Completos para MEI</h1>
        <p className="text-gray-600 text-lg">
          Aprenda tudo que você precisa saber sobre ser MEI ou freelancer no Brasil.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <a
            key={guide.slug}
            href={`/guias/${guide.slug}`}
            className="border rounded-lg p-6 hover:shadow-lg transition hover:border-blue-400"
          >
            <div className="mb-3">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                {guide.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
            <p className="text-gray-600 mb-4">{guide.excerpt}</p>
            <span className="text-blue-600 font-semibold hover:underline">Ler guia →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
