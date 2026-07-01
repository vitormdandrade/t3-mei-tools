export const metadata = {
  title: "Guia Completo DAS MEI 2026 - Valores, Prazos e Pagamento",
  description: "Entenda tudo sobre DAS MEI 2026: valores atualizados, como pagar, prazos e penalidades.",
  alternates: { canonical: '/guias/das-mei-2026' },
};

export default function DasMei2026() {
  return (
    <article className="prose-guide max-w-3xl mx-auto">
      <header className="mb-10">
        <span className="text-label">Guia</span>
        <h1 className="text-hero mt-2 mb-4">Guia Completo: DAS MEI 2026</h1>
        <p className="text-body-lg">
          Tudo que você precisa saber sobre o Documento de Arrecadação do Simples Nacional (DAS) para MEI em 2026.
        </p>
      </header>

      <h2>O que é DAS?</h2>
      <p>
        O DAS é a contribuição mensal que todo MEI precisa pagar à Prefeitura e ao INSS. É o &quot;imposto&quot; do MEI, mas bem mais simples e barato que outros regimes.
      </p>

      <h2>Valores DAS 2026</h2>
      <p>Com o salário mínimo em R$ 1.518, os valores de DAS para 2026 são:</p>
      <div className="overflow-x-auto my-6">
        <table className="table-compare">
          <thead>
            <tr>
              <th>Categoria</th>
              <th>INSS</th>
              <th>Taxa Municipal</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Comércio</td>
              <td>R$ 75,90</td>
              <td>R$ 1,00</td>
              <td><strong>R$ 76,90</strong></td>
            </tr>
            <tr>
              <td>Serviços</td>
              <td>R$ 75,90</td>
              <td>R$ 5,00</td>
              <td><strong>R$ 80,90</strong></td>
            </tr>
            <tr>
              <td>Indústria</td>
              <td>R$ 75,90</td>
              <td>R$ 1,00</td>
              <td><strong>R$ 76,90</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Como Pagar DAS</h2>
      <div className="callout callout-info my-6">
        <p className="callout-title">Opções de Pagamento</p>
        <ul>
          <li><strong>Banco:</strong> Todos os bancos recebem boleto do DAS</li>
          <li><strong>Lotérica:</strong> Rápido e fácil</li>
          <li><strong>Prefeitura:</strong> Direto na secretaria de finanças</li>
          <li><strong>App MEI:</strong> Pagamento online via aplicativo oficial</li>
          <li><strong>Internet Banking:</strong> Alguns bancos permitem boleto pelo app</li>
        </ul>
      </div>

      <h2>Prazos</h2>
      <ul>
        <li><strong>Vencimento:</strong> dia 20 do mês seguinte ao mês de referência. Ex: o DAS de Janeiro/2026 vence em 20 de Fevereiro de 2026.</li>
        <li><strong>Fim de semana ou feriado:</strong> se o dia 20 cair em sábado, domingo ou feriado nacional, o vencimento é transferido para o próximo dia útil, sem multa.</li>
        <li><strong>Tolerância:</strong> o DAS atrasado pode ser pago, mas gera multa de 0,33% ao dia (limitada a 20%) + juros Selic.</li>
        <li><strong>Bloqueio CNPJ:</strong> pode ocorrer após 180 dias de atraso.</li>
      </ul>
      <p>
        Veja as 12 datas de 2026, já ajustadas, no{' '}
        <a href="/calendario-das">Calendário DAS 2026</a>
        {' '}— você pode baixar o arquivo .ics para importar no Google Calendar ou Apple Calendar.
      </p>

      <div className="callout callout-accent my-8">
        <p className="callout-title">Use Nossa Calculadora</p>
        <p className="mb-4">Saiba exatamente quanto você pagará de DAS:</p>
        <a href="/calculadora/das" className="btn-primary no-underline inline-flex">
          Calcular DAS 2026
        </a>
      </div>

      <h2>Conteúdo Relacionado</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          ['/guias/como-abrir-mei', 'Como Abrir MEI', 'Guia passo a passo para registrar seu MEI gratuitamente'],
          ['/calendario-das', 'Calendário DAS 2026', 'Datas de vencimento para download (.ics)'],
          ['/guias/limite-faturamento-mei', 'Limite de Faturamento MEI', 'Entenda o teto de R$ 81 mil e o que fazer se ultrapassar'],
          ['/guias/abrir-conta-pj-mei', 'Abrir Conta PJ para MEI', 'Compare as melhores contas PJ gratuitas para seu CNPJ'],
        ].map(([href, title, desc]) => (
          <a key={href} href={href} className="card card-hover no-underline p-4 flex flex-col gap-1">
            <span className="font-semibold" style={{ color: 'var(--color-foreground)' }}>{title} →</span>
            <span className="text-caption">{desc}</span>
          </a>
        ))}
      </div>
    </article>
  );
}
