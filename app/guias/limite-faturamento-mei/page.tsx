export const metadata = {
  title: "Limite de Faturamento MEI 2026 - R$ 85 mil",
  description: "Entenda o limite de R$ 85 mil de MEI e quando você deve migrar para outro regime.",
  alternates: { canonical: '/guias/limite-faturamento-mei' },
};

export default function LimiteFaturamentoMEI() {
  return (
    <article className="prose-guide max-w-3xl mx-auto">
      <header className="mb-10">
        <span className="text-label">Guia</span>
        <h1 className="text-hero mt-2 mb-4">Limite de Faturamento MEI 2026</h1>
        <p className="text-body-lg">O limite de R$ 85 mil por ano e quando você precisa mudar de regime.</p>
      </header>

      <div className="callout callout-info my-6">
        <p className="callout-title">O Limite</p>
        <p><strong>R$ 81.000</strong> por ano (2026)</p>
        <p>Ou ~R$ 7.083/mês em média</p>
      </div>

      <h2>Por Que Existe um Limite?</h2>
      <ul>
        <li>MEI foi criado para trabalhadores autônomos registrados formalmente</li>
        <li>Limite garante simpticidade tributária e fiscal</li>
        <li>Acima disso, você tem obrigações maiores de ME/Simples Nacional</li>
        <li>Lei Federal estabelece este limite</li>
      </ul>

      <h2>O que Conta na Limite?</h2>
      <ul>
        <li><strong>Vendas:</strong> Todas as vendas de produtos</li>
        <li><strong>Serviços:</strong> Todos os serviços prestados</li>
        <li><strong>Não conta:</strong> Devolução de produtos (reduz o total)</li>
        <li><strong>Não conta:</strong> Devoluções e cancelamentos</li>
      </ul>

      <h2>Histórico dos Limites</h2>
      <div className="overflow-x-auto my-6">
        <table className="table-compare">
          <thead>
            <tr>
              <th>Período</th>
              <th>Limite Anual</th>
              <th>Limite Mensal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2022-2024</td>
              <td>R$ 81.000</td>
              <td>~R$ 6.750</td>
            </tr>
            <tr>
              <td>2025-2026</td>
              <td><strong>R$ 81.000</strong></td>
              <td><strong>~R$ 7.083</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>O que Fazer se Exceder?</h2>
      <div className="callout callout-info my-6">
        <p className="callout-title">No mesmo ano</p>
        <p>Se exceder durante o ano, continue como MEI até o final. Ajuste para o próximo ano se necessário.</p>
      </div>
      <div className="callout callout-info my-6">
        <p className="callout-title">Desenquadramento</p>
        <p>Se ultrapassar R$ 85 mil no ano anterior, você é obrigado a migrar para Simples Nacional ou ME no ano seguinte.</p>
      </div>
      <div className="callout callout-terra my-6">
        <p className="callout-title">Sem comunicação</p>
        <p>A Receita Federal detectará automaticamente o excesso. Você pode ser penalizado se não se formalizar corretamente.</p>
      </div>

      <div className="callout callout-accent my-8">
        <p className="callout-title">Use Nossa Calculadora</p>
        <p className="mb-4">Acompanhe seu faturamento em tempo real:</p>
        <a href="/calculadora/faturamento" className="btn-primary no-underline inline-flex">
          Calcular Faturamento
        </a>
      </div>
    </article>
  );
}
