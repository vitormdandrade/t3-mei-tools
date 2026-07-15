export const metadata = {
  title: "MEI Pode Ter Funcionário? Regras 2026",
  description: "Saiba se MEI pode ter funcionário, como contratar e quando você é obrigado a virar ME.",
  alternates: { canonical: '/guias/mei-pode-ter-funcionario' },
};

export default function MEIPodeSerFuncionario() {
  return (
    <article className="prose-guide max-w-3xl mx-auto">
      <header className="mb-10">
        <span className="text-label">Guia</span>
        <h1 className="text-hero mt-2 mb-4">MEI Pode Ter Funcionário em 2026?</h1>
        <p className="text-body-lg">Regras, limitações e o que você precisa saber antes de contratar.</p>
      </header>

      <div className="callout callout-info my-6">
        <p className="callout-title">Resposta Curta</p>
        <p>
          <strong>SIM!</strong> MEI pode ter 1 funcionário. Não pode contratar mais de um.
        </p>
      </div>

      <h2>Regras para Contratar Funcionário</h2>
      <div className="callout callout-accent my-6">
        <p className="callout-title">✓ Você Pode:</p>
        <ul>
          <li>Contratar 1 funcionário com registro em CTPS</li>
          <li>Pagar salário compatível com o mercado</li>
          <li>Descontar INSS e IRRF do funcionário</li>
          <li>Pagar encargos sociais e 13º</li>
        </ul>
      </div>
      <div className="callout callout-terra my-6">
        <p className="callout-title">✗ Você NÃO Pode:</p>
        <ul>
          <li>Contratar 2 ou mais funcionários</li>
          <li>Ter estagiários sem registro</li>
          <li>Ter prestadores de serviço sem nota fiscal</li>
          <li>Pagar trabalhador sem vínculo formal</li>
        </ul>
      </div>

      <h2>Custos de Contratar um Funcionário</h2>
      <div className="callout callout-warning my-6">
        <p className="callout-title">Exemplo: Funcionário com salário de R$ 1.500/mês (salário mínimo)</p>
        <div className="overflow-x-auto my-6">
          <table className="table-compare">
            <tbody>
              <tr>
                <td>Salário:</td>
                <td><strong>R$ 1.500,00</strong></td>
              </tr>
              <tr>
                <td>INSS (11%):</td>
                <td><strong>R$ 165,00</strong></td>
              </tr>
              <tr>
                <td>IRRF (se houver):</td>
                <td><strong>R$ 0,00 (mínimo)</strong></td>
              </tr>
              <tr>
                <td><strong>Custo Mensal Total:</strong></td>
                <td><strong>~R$ 1.800-2.000</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Como Contratar Funcionário</h2>
      <ol>
        <li><strong>Entrevista e seleção</strong> - Escolha o melhor candidato</li>
        <li><strong>CTPS</strong> - O funcionário precisará levar a Carteira de Trabalho</li>
        <li><strong>Registro na CTPS</strong> - Você registra dados do emprego</li>
        <li><strong>Filiação ao INSS</strong> - Como empregador (você já está)</li>
        <li><strong>Documento de Saúde</strong> - ASO (Atestado de Saúde Ocupacional)</li>
        <li><strong>Folha de Pagamento</strong> - Registre os salários e descontos</li>
        <li><strong>Repasse ao INSS</strong> - Até o 15º dia do mês seguinte</li>
      </ol>

      <h2>O que Acontece se Contratar Mais de 1?</h2>
      <div className="callout callout-terra my-6">
        <p>
          Se você contratar 2 ou mais funcionários, é obrigado a migrar para Microempresa (ME) ou outra modalidade:
        </p>
        <ul>
          <li>Você será reclassificado administrativamente</li>
          <li>Terá que cumprir obrigações de ME</li>
          <li>Impostos serão maiores</li>
          <li>Pode sofrer multas se descoberto</li>
        </ul>
      </div>

      <h2>Alternativas a Contratar</h2>
      <ul>
        <li><strong>Pessoa Jurídica (PJ):</strong> Contratar outra empresa ou autônomo sem vinculo</li>
        <li><strong>Terceirizar:</strong> Contratar serviços especializados</li>
        <li><strong>Família:</strong> Pode ser contra-produtivo (risco fiscal)</li>
        <li><strong>Virar ME:</strong> Se crescimento justificar</li>
      </ul>

      <div className="callout callout-info my-8">
        <p className="callout-title">Saiba Mais</p>
        <a href="/calculadora/mei-vs-me">
          → Comparar MEI vs ME
        </a>
      </div>

      {/* FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'MEI pode ter funcionário em 2026?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sim. O MEI pode contratar 1 único funcionário com registro em CTPS, pagando salário compatível com o mercado e recolhendo os encargos sociais (INSS, FGTS, 13º, férias). O custo total fica em torno de 20-30% acima do salário.',
                },
              },
              {
                '@type': 'Question',
                name: 'O que acontece se um MEI contratar mais de um funcionário?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Se contratar 2 ou mais funcionários, o MEI é obrigado a migrar para Microempresa (ME) ou outro regime tributário. Há risco de reclassificação administrativa, multas fiscais e aumento de impostos.',
                },
              },
              {
                '@type': 'Question',
                name: 'Quais são os custos de contratar um funcionário como MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Para um salário de R$ 1.500 (mínimo), os custos incluem: INSS patronal (11% = R$ 165), FGTS (8% = R$ 120), 13º proporcional, férias + 1/3, e outros encargos. O custo total mensal fica entre R$ 1.800 e R$ 2.000.',
                },
              },
              {
                '@type': 'Question',
                name: 'Quais alternativas um MEI tem além de contratar um funcionário?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Alternativas incluem: contratar outra empresa como PJ (prestador de serviços), terceirizar serviços especializados, ou migrar para ME se o crescimento do negócio justificar uma estrutura maior com mais funcionários.',
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
