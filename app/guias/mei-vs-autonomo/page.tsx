export const metadata = {
  title: "MEI vs Autônomo - Qual É Melhor?",
  description: "Comparação completa: MEI vs autônomo. Custos, impostos, benefícios e diferenças.",
  alternates: { canonical: '/guias/mei-vs-autonomo' },
};

export default function MEIVsAutonomo() {
  return (
    <article className="prose-guide max-w-3xl mx-auto">
      <header className="mb-10">
        <span className="text-label">Guia</span>
        <h1 className="text-hero mt-2 mb-4">MEI vs Autônomo: Qual Escolher?</h1>
        <p className="text-body-lg">Comparação completa entre ser MEI e trabalhar como autônomo.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card p-6">
          <h2>MEI (Microempreendedor Individual)</h2>
          <ul>
            <li>✓ CNPJ próprio</li>
            <li>✓ Formalidade legal</li>
            <li>✓ Acesso a crédito</li>
            <li>✓ Contribuição 5% (mínimo)</li>
            <li>✓ Nota fiscal</li>
            <li>✗ Limite de R$ 85k/ano</li>
            <li>✗ Apenas 1 funcionário</li>
          </ul>
        </div>

        <div className="card p-6">
          <h2>Autônomo</h2>
          <ul>
            <li>✓ Sem limite de faturamento</li>
            <li>✓ Sem obrigações formais</li>
            <li>✓ Simples de começar</li>
            <li>✗ Sem CNPJ (menos crédito)</li>
            <li>✗ Contribuição 11-20% (INSS)</li>
            <li>✗ Sem regularidade legal</li>
            <li>✗ Sem nota fiscal</li>
          </ul>
        </div>
      </div>

      <h2>Comparação Detalhada</h2>
      <div className="overflow-x-auto my-6">
        <table className="table-compare">
          <thead>
            <tr>
              <th>Aspecto</th>
              <th>MEI</th>
              <th>Autônomo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>CNPJ</strong></td>
              <td>Sim</td>
              <td>Não</td>
            </tr>
            <tr>
              <td><strong>Faturamento Limite</strong></td>
              <td>R$ 85k/ano</td>
              <td>Ilimitado</td>
            </tr>
            <tr>
              <td><strong>INSS Mensal</strong></td>
              <td>R$ 75-80</td>
              <td>R$ 165+</td>
            </tr>
            <tr>
              <td><strong>Acesso a Crédito</strong></td>
              <td>Sim</td>
              <td>Difícil</td>
            </tr>
            <tr>
              <td><strong>Nota Fiscal</strong></td>
              <td>Sim</td>
              <td>Recibo</td>
            </tr>
            <tr>
              <td><strong>Benefícios INSS</strong></td>
              <td>Básicos</td>
              <td>Completos</td>
            </tr>
            <tr>
              <td><strong>Funcionários</strong></td>
              <td>1 máximo</td>
              <td>Não</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Custos Mensais Estimados</h2>
      <p>Para uma renda de R$ 3.000/mês:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card p-6">
          <h3>MEI</h3>
          <ul>
            <li><strong>DAS (serviços):</strong> R$ 80,90</li>
            <li><strong>Contador (opcional):</strong> R$ 100-200</li>
            <li><strong>Total:</strong> ~R$ 180-280</li>
          </ul>
        </div>

        <div className="card p-6">
          <h3>Autônomo</h3>
          <ul>
            <li><strong>INSS (11%):</strong> R$ 330</li>
            <li><strong>Sem contabilidade:</strong> R$ 0</li>
            <li><strong>Total:</strong> ~R$ 330</li>
          </ul>
        </div>
      </div>

      <h2>Quando Escolher Cada Um</h2>
      <div className="callout callout-info my-6">
        <p className="callout-title">Escolha MEI se:</p>
        <ul>
          <li>Você quer formalidade e CNPJ</li>
          <li>Precisa de crédito ou parcelamentos</li>
          <li>Vai faturar até R$ 85k/ano</li>
          <li>Quer benefícios do INSS</li>
          <li>Precisa emitir nota fiscal</li>
        </ul>
      </div>
      <div className="callout callout-warning my-6">
        <p className="callout-title">Escolha Autônomo se:</p>
        <ul>
          <li>Trabalha de forma informal/pontual</li>
          <li>Não quer burocrácia</li>
          <li>Faturamento pode ser alto/sem limite</li>
          <li>Clientes não pedem nota/CNPJ</li>
          <li>Quer máximos benefícios de INSS</li>
        </ul>
      </div>

      <div className="callout callout-accent my-8">
        <p className="callout-title">Próximo Passo</p>
        <a href="/calculadora/das" className="btn-primary no-underline inline-flex">
          Calcular DAS MEI
        </a>
      </div>
    </article>
  );
}
