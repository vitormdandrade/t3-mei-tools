export const metadata = {
  title: "Guia Completo DAS MEI 2026 - Valores, Prazos e Pagamento",
  description: "Entenda tudo sobre DAS MEI 2026: valores atualizados, como pagar, prazos e penalidades.",
  alternates: { canonical: '/guias/das-mei-2026' },
};

export default function DasMei2026() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Guia Completo: DAS MEI 2026</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Tudo que você precisa saber sobre o Documento de Arrecadação do Simples Nacional (DAS) para MEI em 2026.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">O que é DAS?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          O DAS é a contribuição mensal que todo MEI precisa pagar à Prefeitura e ao INSS. É o "imposto" do MEI, mas bem mais simples e barato que outros regimes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Valores DAS 2026</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Com o salário mínimo em R$ 1.518, os valores de DAS para 2026 são:</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border dark:border-gray-700 px-4 py-2 text-left font-bold">Categoria</th>
                <th className="border dark:border-gray-700 px-4 py-2 text-center font-bold">INSS</th>
                <th className="border dark:border-gray-700 px-4 py-2 text-center font-bold">Taxa Municipal</th>
                <th className="border dark:border-gray-700 px-4 py-2 text-center font-bold">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border dark:border-gray-700 px-4 py-2">Comércio</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">R$ 75,90</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">R$ 1,00</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center font-bold">R$ 76,90</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="border dark:border-gray-700 px-4 py-2">Serviços</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">R$ 75,90</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">R$ 5,00</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center font-bold">R$ 80,90</td>
              </tr>
              <tr>
                <td className="border dark:border-gray-700 px-4 py-2">Indústria</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">R$ 75,90</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">R$ 1,00</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center font-bold">R$ 76,90</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Como Pagar DAS</h2>
        <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-4">
          <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-3">Opções de Pagamento</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-900 dark:text-blue-200">
            <li><strong>Banco:</strong> Todos os bancos recebem boleto do DAS</li>
            <li><strong>Lotérica:</strong> Rápido e fácil</li>
            <li><strong>Prefeitura:</strong> Direto na secretaria de finanças</li>
            <li><strong>App MEI:</strong> Pagamento online via aplicativo oficial</li>
            <li><strong>Internet Banking:</strong> Alguns bancos permitem boleto pelo app</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Prazos</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Vencimento:</strong> dia 20 do mês seguinte ao mês de referência. Ex: o DAS de Janeiro/2026 vence em 20 de Fevereiro de 2026.</li>
          <li><strong>Fim de semana ou feriado:</strong> se o dia 20 cair em sábado, domingo ou feriado nacional, o vencimento é transferido para o próximo dia útil, sem multa.</li>
          <li><strong>Tolerância:</strong> o DAS atrasado pode ser pago, mas gera multa de 0,33% ao dia (limitada a 20%) + juros Selic.</li>
          <li><strong>Bloqueio CNPJ:</strong> pode ocorrer após 180 dias de atraso.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Veja as 12 datas de 2026, já ajustadas, no{' '}
          <a href="/calendario-das" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            Calendário DAS 2026
          </a>
          {' '}— você pode baixar o arquivo .ics para importar no Google Calendar ou Apple Calendar.
        </p>
      </section>

      <div className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-200 mb-4">Use Nossa Calculadora</h2>
        <p className="text-green-900 dark:text-green-200 mb-4">Saiba exatamente quanto você pagará de DAS:</p>
        <a href="/calculadora/das" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
          Calcular DAS 2026
        </a>
      </div>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Conteúdo Relacionado</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/guias/como-abrir-mei" className="border dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition group">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600">Como Abrir MEI →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Guia passo a passo para registrar seu MEI gratuitamente</p>
          </a>
          <a href="/calendario-das" className="border dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition group">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600">Calendário DAS 2026 →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Datas de vencimento para download (.ics)</p>
          </a>
          <a href="/guias/limite-faturamento-mei" className="border dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition group">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600">Limite de Faturamento MEI →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Entenda o teto de R$ 81 mil e o que fazer se ultrapassar</p>
          </a>
          <a href="/guias/abrir-conta-pj-mei" className="border dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition group">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600">Abrir Conta PJ para MEI →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Compare as melhores contas PJ gratuitas para seu CNPJ</p>
          </a>
        </div>
      </section>
    </article>
  );
}
