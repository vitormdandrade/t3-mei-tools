export const metadata = {
  title: "MEI Tools - Calculadoras Gratuitas para Microempreendedores",
  description: "Ferramentas completas para MEI: calculadora de DAS, faturamento, MEI vs ME, INSS autônomo e guias detalhados.",
};

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Ferramentas Gratuitas para MEI e Freelancers
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Calcule DAS, faturamento, INSS e compare regimes de impostos com precisão
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/calculadora/das" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
            Calcular DAS
          </a>
          <a href="/calculadora/faturamento" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Faturamento Limite
          </a>
          <a href="/calculadora/mei-vs-me" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
            Comparar Regimes
          </a>
        </div>
      </section>

      {/* Calculators Grid */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Nossas Calculadoras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-600 mb-2">Calculadora DAS</h3>
            <p className="text-gray-600 mb-4">Calcule o valor mensal do DAS conforme sua atividade e o salário mínimo do ano.</p>
            <a href="/calculadora/das" className="text-green-600 font-semibold hover:underline">Ver calculadora →</a>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Limite de Faturamento</h3>
            <p className="text-gray-600 mb-4">Acompanhe seu faturamento anual e saiba quando você precisa mudar de regime.</p>
            <a href="/calculadora/faturamento" className="text-blue-600 font-semibold hover:underline">Ver calculadora →</a>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-purple-600 mb-2">MEI vs ME vs Simples</h3>
            <p className="text-gray-600 mb-4">Compare impostos, custos e benefícios dos três regimes para seu negócio.</p>
            <a href="/calculadora/mei-vs-me" className="text-purple-600 font-semibold hover:underline">Ver calculadora →</a>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-orange-600 mb-2">INSS Autônomo</h3>
            <p className="text-gray-600 mb-4">Calcule a contribuição ao INSS como autônomo conforme sua renda mensal.</p>
            <a href="/calculadora/inss-autonomo" className="text-orange-600 font-semibold hover:underline">Ver calculadora →</a>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Guias Completos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Como Abrir MEI</h3>
            <p className="text-gray-600 text-sm">Passo a passo para registrar seu MEI online e começar legalmente.</p>
            <a href="/guias/como-abrir-mei" className="text-gray-600 font-semibold hover:text-gray-900 text-sm mt-4 inline-block">Ler guia →</a>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-gray-900 mb-2">DAS 2026</h3>
            <p className="text-gray-600 text-sm">Entenda tudo sobre o DAS: valores, prazos e como pagar corretamente.</p>
            <a href="/guias/das-mei-2026" className="text-gray-600 font-semibold hover:text-gray-900 text-sm mt-4 inline-block">Ler guia →</a>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Nota Fiscal MEI</h3>
            <p className="text-gray-600 text-sm">Quando, como e quando usar nota fiscal no MEI. Regras 2026.</p>
            <a href="/guias/nota-fiscal-mei" className="text-gray-600 font-semibold hover:text-gray-900 text-sm mt-4 inline-block">Ler guia →</a>
          </div>
        </div>
      </section>

      {/* Fintechs Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Melhores Contas e Soluções PJ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Melhores Contas PJ para MEI</h3>
            <p className="text-gray-600 mb-4">Compare as melhores contas bancárias para MEI com transferências, cartões e crédito.</p>
            <a href="/melhores/melhores-contas-pj-mei" className="text-blue-600 font-semibold hover:underline">Ver comparativo →</a>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Melhores Máquinas de Pagamento</h3>
            <p className="text-gray-600 mb-4">Maquininhas de crédito e débito para MEI com as melhores taxas e suporte.</p>
            <a href="/melhores/melhores-maquininhas-mei" className="text-blue-600 font-semibold hover:underline">Ver comparativo →</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Perguntas Frequentes</h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Qual é o limite de faturamento para MEI em 2026?</summary>
            <p className="text-gray-600 mt-2">O limite anual é de R$ 81.000 em 2026. Se ultrapassar este valor, você terá que migrar para outro regime.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">Como funciona o DAS?</summary>
            <p className="text-gray-600 mt-2">O DAS é a contribuição mensal que o MEI faz à Prefeitura (ISS ou ICMS) e ao INSS. Varia conforme a categoria da atividade.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-semibold text-gray-900 cursor-pointer">MEI pode ter funcionário?</summary>
            <p className="text-gray-600 mt-2">Sim, MEI pode ter apenas 1 funcionário. Se contratar outro, é obrigado a virar ME.</p>
          </details>
        </div>
      </section>
    </div>
  );
}
