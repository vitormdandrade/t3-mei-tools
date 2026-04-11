export const metadata = {
  title: "Guia Completo DAS MEI 2026 - Valores, Prazos e Pagamento",
  description: "Entenda tudo sobre DAS MEI 2026: valores atualizados, como pagar, prazos e penalidades.",
};

export default function DasMei2026() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Guia Completo: DAS MEI 2026</h1>
        <p className="text-gray-600 text-lg">
          Tudo que você precisa saber sobre o Documento de Arrecadação do Simples Nacional (DAS) para MEI em 2026.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">O que é DAS?</h2>
        <p className="text-gray-700">
          O DAS é a contribuição mensal que todo MEI precisa pagar à Prefeitura e ao INSS. É o "imposto" do MEI, mas bem mais simples e barato que outros regimes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Valores DAS 2026</h2>
        <p className="text-gray-700 mb-4">Com o salário mínimo em R$ 1.518, os valores de DAS para 2026 são:</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-left font-bold">Categoria</th>
                <th className="border px-4 py-2 text-center font-bold">INSS</th>
                <th className="border px-4 py-2 text-center font-bold">Taxa Municipal</th>
                <th className="border px-4 py-2 text-center font-bold">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Comércio</td>
                <td className="border px-4 py-2 text-center">R$ 75,90</td>
                <td className="border px-4 py-2 text-center">R$ 1,00</td>
                <td className="border px-4 py-2 text-center font-bold">R$ 76,90</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-2">Serviços</td>
                <td className="border px-4 py-2 text-center">R$ 75,90</td>
                <td className="border px-4 py-2 text-center">R$ 5,00</td>
                <td className="border px-4 py-2 text-center font-bold">R$ 80,90</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Indústria</td>
                <td className="border px-4 py-2 text-center">R$ 75,90</td>
                <td className="border px-4 py-2 text-center">R$ 1,00</td>
                <td className="border px-4 py-2 text-center font-bold">R$ 76,90</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Como Pagar DAS</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
          <h3 className="font-bold text-blue-900 mb-3">Opções de Pagamento</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-900">
            <li><strong>Banco:</strong> Todos os bancos recebem boleto do DAS</li>
            <li><strong>Lotérica:</strong> Rápido e fácil</li>
            <li><strong>Prefeitura:</strong> Direto na secretaria de finanças</li>
            <li><strong>App MEI:</strong> Pagamento online via aplicativo oficial</li>
            <li><strong>Internet Banking:</strong> Alguns bancos permitem boleto pelo app</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Prazos</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Vencimento:</strong> dia 20 do mês seguinte ao mês de referência. Ex: o DAS de Janeiro/2026 vence em 20 de Fevereiro de 2026.</li>
          <li><strong>Fim de semana ou feriado:</strong> se o dia 20 cair em sábado, domingo ou feriado nacional, o vencimento é transferido para o próximo dia útil, sem multa.</li>
          <li><strong>Tolerância:</strong> o DAS atrasado pode ser pago, mas gera multa de 0,33% ao dia (limitada a 20%) + juros Selic.</li>
          <li><strong>Bloqueio CNPJ:</strong> pode ocorrer após 180 dias de atraso.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Veja as 12 datas de 2026, já ajustadas, no{' '}
          <a href="/calendario-das" className="text-blue-600 font-semibold hover:underline">
            Calendário DAS 2026
          </a>
          {' '}— você pode baixar o arquivo .ics para importar no Google Calendar ou Apple Calendar.
        </p>
      </section>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Use Nossa Calculadora</h2>
        <p className="text-green-900 mb-4">Saiba exatamente quanto você pagará de DAS:</p>
        <a href="/calculadora/das" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
          Calcular DAS 2026
        </a>
      </div>
    </article>
  );
}
