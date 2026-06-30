export const metadata = {
  title: "Limite de Faturamento MEI 2026 - R$ 85 mil",
  description: "Entenda o limite de R$ 85 mil de MEI e quando você deve migrar para outro regime.",
  alternates: { canonical: '/guias/limite-faturamento-mei' },
};

export default function LimiteFaturamentoMEI() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Limite de Faturamento MEI 2026</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">O limite de R$ 85 mil por ano e quando você precisa mudar de regime.</p>
      </div>

      <section className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-200 mb-2">O Limite</h2>
        <p className="text-green-900 dark:text-green-200 text-xl"><strong>R$ 81.000</strong> por ano (2026)</p>
        <p className="text-green-900 dark:text-green-200 text-sm mt-2">Ou ~R$ 7.083/mês em média</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Por Que Existe um Limite?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>MEI foi criado para trabalhadores autônomos registrados formalmente</li>
          <li>Limite garante simpticidade tributária e fiscal</li>
          <li>Acima disso, você tem obrigações maiores de ME/Simples Nacional</li>
          <li>Lei Federal estabelece este limite</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">O que Conta na Limite?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Vendas:</strong> Todas as vendas de produtos</li>
          <li><strong>Serviços:</strong> Todos os serviços prestados</li>
          <li><strong>Não conta:</strong> Devolução de produtos (reduz o total)</li>
          <li><strong>Não conta:</strong> Devoluções e cancelamentos</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Histórico dos Limites</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border dark:border-gray-700 px-4 py-2 text-left font-bold">Período</th>
                <th className="border dark:border-gray-700 px-4 py-2 text-center font-bold">Limite Anual</th>
                <th className="border dark:border-gray-700 px-4 py-2 text-center font-bold">Limite Mensal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border dark:border-gray-700 px-4 py-2">2022-2024</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">R$ 81.000</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">~R$ 6.750</td>
              </tr>
              <tr className="bg-green-50 dark:bg-green-950/40">
                <td className="border dark:border-gray-700 px-4 py-2">2025-2026</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center text-green-900 dark:text-green-200 font-bold">R$ 81.000</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center text-green-900 dark:text-green-200 font-bold">~R$ 7.083</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">O que Fazer se Exceder?</h2>
        <div className="space-y-3">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">No mesmo ano</h3>
            <p className="text-gray-700 dark:text-gray-300">Se exceder durante o ano, continue como MEI até o final. Ajuste para o próximo ano se necessário.</p>
          </div>
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Desenquadramento</h3>
            <p className="text-gray-700 dark:text-gray-300">Se ultrapassar R$ 85 mil no ano anterior, você é obrigado a migrar para Simples Nacional ou ME no ano seguinte.</p>
          </div>
          <div className="border dark:border-gray-700 rounded-lg p-4 bg-red-50 dark:bg-red-950/40">
            <h3 className="font-bold text-red-900 dark:text-red-200 mb-2">Sem comunicação</h3>
            <p className="text-red-900 dark:text-red-200">A Receita Federal detectará automaticamente o excesso. Você pode ser penalizado se não se formalizar corretamente.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Use Nossa Calculadora</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Acompanhe seu faturamento em tempo real:</p>
        <a href="/calculadora/faturamento" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
          Calcular Faturamento
        </a>
      </section>
    </div>
  );
}
