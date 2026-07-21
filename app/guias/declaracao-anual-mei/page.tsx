export const metadata = {
  title: "Declaração Anual MEI (DASN-SIMEI) 2026 — Guia Completo",
  description: "Passo a passo completo para declarar o faturamento anual do MEI (DASN-SIMEI) em 2026. Prazos, documentos necessários, cálculo de impostos e como evitar multas.",
  alternates: { canonical: '/guias/declaracao-anual-mei' },
};

export default function DeclaracaoAnualMEI() {
  return (
    <article className="prose-guide max-w-3xl mx-auto">
      <header className="mb-10">
        <span className="text-label">Guia</span>
        <h1 className="text-hero mt-2 mb-4">Declaração Anual MEI (DASN-SIMEI) 2026</h1>
        <p className="text-body-lg">Tudo sobre a declaração anual de faturamento do MEI: prazos, como preencher, documentos necessários, cálculo de excesso e como evitar multas.</p>
      </header>

      <div className="callout callout-warning my-6">
        <p className="callout-title">⚠️ Atenção aos prazos</p>
        <p>A <strong>DASN-SIMEI</strong> deve ser entregue até <strong>31 de maio de 2026</strong> (para faturamento de 2025). O atraso gera multa mínima de R$ 50 ou 2% ao mês sobre os tributos declarados.</p>
      </div>

      <h2>O que é a DASN-SIMEI?</h2>
      <p>A DASN-SIMEI (Declaração Anual do Simples Nacional para o Microempreendedor Individual) é a declaração obrigatória que todo MEI deve entregar anualmente à Receita Federal. Nela, você informa o <strong>faturamento bruto total do ano anterior</strong>, ou seja, tudo que seu MEI recebeu no ano.</p>

      <div className="callout callout-info my-6">
        <p className="callout-title">💡 Importante</p>
        <p>Mesmo que seu MEI <strong>não tenha faturado nada</strong> no ano, você ainda precisa entregar a declaração. MEI sem faturamento declara R$ 0,00 e continua regular.</p>
      </div>

      <h2>Quem precisa declarar?</h2>
      <ul>
        <li><strong>Todos os MEIs ativos</strong> — mesmo sem faturamento</li>
        <li><strong>MEIs que deram baixa</strong> no CNPJ — declaração de extinção proporcional</li>
        <li><strong>MEIs que ultrapassaram o limite</strong> — declaração com cálculo de excesso</li>
      </ul>

      <h2>Prazo da DASN-SIMEI 2026</h2>
      <p>A declaração referente ao <strong>ano-calendário 2025</strong> deve ser entregue até:</p>
      <div className="result-card text-center p-4 my-4">
        <p className="result-label">Data limite</p>
        <p className="result-value">31 de maio de 2026</p>
      </div>
      <p>O período de entrega geralmente começa em <strong>janeiro</strong>. Recomendamos entregar o quanto antes para evitar esquecimentos e congestionamento do sistema nos últimos dias.</p>

      <h2>Documentos necessários</h2>
      <p>Antes de fazer a declaração, tenha em mãos:</p>
      <ol>
        <li><strong>CNPJ do MEI</strong> — número completo</li>
        <li><strong>Relatório de receitas brutas de 2025</strong> — todas as notas fiscais emitidas, recibos e comprovantes de vendas/prestação de serviços</li>
        <li><strong>Comprovante de pagamento dos DAS</strong> — todos os boletos pagos ao longo do ano</li>
        <li><strong>Extrato bancário PJ</strong> — para conferir as entradas de dinheiro na conta</li>
      </ol>

      <div className="callout callout-info my-6">
        <p className="callout-title">📊 Dica de organização</p>
        <p>Mantenha uma planilha com todas as receitas mensais do ano. Facilita o preenchimento e serve como comprovante em caso de fiscalização. Guarde os documentos por <strong>5 anos</strong>.</p>
      </div>

      <h2>Passo a Passo para Preencher</h2>

      <h3>Passo 1: Acesse o Portal do Empreendedor</h3>
      <p>Acesse <strong>gov.br/mei</strong> e faça login com sua conta gov.br (nível prata ou ouro). Clique em <strong>"Declaração Anual de Faturamento"</strong>.</p>

      <h3>Passo 2: Informe o ano-calendário</h3>
      <p>Selecione <strong>2025</strong> como ano-calendário. O sistema mostrará automaticamente sua situação cadastral.</p>

      <h3>Passo 3: Informe o faturamento bruto</h3>
      <p>Digite o <strong>valor total das receitas brutas</strong> de 2025 (soma de todas as vendas ou serviços prestados). Este valor deve corresponder à realidade — não arredonde nem omita valores.</p>

      <h3>Passo 4: Informe se houve empregado</h3>
      <p>Marque se você teve <strong>funcionário registrado</strong> durante o ano. MEI pode ter no máximo 1 empregado.</p>

      <h3>Passo 5: Revise e envie</h3>
      <p>Confira todos os dados e clique em <strong>"Enviar Declaração"</strong>. O sistema gerará um recibo de entrega — salve ou imprima para seus registros.</p>

      <h2>Limite de Faturamento e Excesso</h2>
      <p>O limite de faturamento anual do MEI em 2025 era de <strong>R$ 81.000</strong>. Se você ultrapassou esse valor:</p>
      <ul>
        <li><strong>Até 20% de excesso (até R$ 97.200):</strong> paga DAS complementar sobre o excedente e continua como MEI</li>
        <li><strong>Acima de 20%:</strong> é desenquadrado do MEI e precisa migrar para ME (Microempresa) ou outro regime</li>
      </ul>

      <div className="callout callout-warning my-6">
        <p className="callout-title">⚠️ Cálculo do excesso</p>
        <p>Se seu faturamento foi de R$ 90.000 em 2025, o excesso é de R$ 9.000. Você pagará DAS complementar sobre esse valor, calculado com as alíquotas do Simples Nacional (não do MEI). Use nossa <a href="/calculadora/faturamento" className="font-semibold text-accent hover:underline">calculadora de limite de faturamento</a> para simular.</p>
      </div>

      <h2>Multas por atraso ou não entrega</h2>
      <ul>
        <li><strong>Multa mínima:</strong> R$ 50,00 (ou 2% ao mês-calendário sobre os tributos declarados, o que for menor)</li>
        <li><strong>Não entrega:</strong> CNPJ fica irregular, impedindo emissão de certidões negativas, abertura de conta PJ e participação em licitações</li>
        <li><strong>Após 2 anos sem entrega:</strong> CNPJ pode ser cancelado pela Receita Federal</li>
      </ul>

      <h2>Diferença entre DASN-SIMEI e Imposto de Renda</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left border">Critério</th>
              <th className="p-3 text-left border">DASN-SIMEI</th>
              <th className="p-3 text-left border">IRPF (Imposto de Renda PF)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border font-semibold">Quem declara</td>
              <td className="p-3 border">O MEI (CNPJ)</td>
              <td className="p-3 border">A pessoa física (CPF)</td>
            </tr>
            <tr>
              <td className="p-3 border font-semibold">Obrigatório?</td>
              <td className="p-3 border">Sim, todo MEI ativo</td>
              <td className="p-3 border">Depende da renda total</td>
            </tr>
            <tr>
              <td className="p-3 border font-semibold">Prazo 2026</td>
              <td className="p-3 border">31 de maio</td>
              <td className="p-3 border">31 de maio (mesmo prazo)</td>
            </tr>
            <tr>
              <td className="p-3 border font-semibold">O que declara</td>
              <td className="p-3 border">Faturamento bruto do MEI</td>
              <td className="p-3 border">Todos os rendimentos (MEI + outros)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
        <strong>Importante:</strong> São duas declarações diferentes. Mesmo que você entregue a DASN-SIMEI, pode ainda precisar declarar Imposto de Renda como pessoa física se seus rendimentos totais ultrapassarem o limite de isenção.
      </p>

      <h2>Perguntas Frequentes</h2>
      <details className="card p-4 mb-3">
        <summary className="font-bold cursor-pointer">Preciso de contador para fazer a DASN-SIMEI?</summary>
        <p className="mt-2">Não. A declaração é simples e pode ser feita pelo próprio MEI no portal gov.br/mei. Porém, se você teve faturamento alto, excesso de limite, ou situação fiscal complexa, um contador pode ajudar a evitar erros.</p>
      </details>
      <details className="card p-4 mb-3">
        <summary className="font-bold cursor-pointer">O que acontece se eu declarar valor menor que o real?</summary>
        <p className="mt-2">A Receita Federal cruza dados com instituições financeiras, administradoras de cartão e notas fiscais eletrônicas. Declarar valor menor que o real pode gerar malha fiscal, multa e até exclusão do MEI.</p>
      </details>
      <details className="card p-4 mb-3">
        <summary className="font-bold cursor-pointer">Posso retificar a declaração depois de enviada?</summary>
        <p className="mt-2">Sim. Até o prazo final (31 de maio) você pode retificar sem penalidade. Após o prazo, retificações podem gerar multa se houver imposto a pagar adicional.</p>
      </details>

      {/* Próximos Passos */}
      <div className="callout callout-accent mt-8">
        <h3 className="callout-title">Próximos Passos</h3>
        <ul className="space-y-2">
          <li>✓ <a href="/calculadora/das" className="font-semibold text-accent hover:underline">Calcule seu DAS mensal</a></li>
          <li>✓ <a href="/calculadora/faturamento" className="font-semibold text-accent hover:underline">Verifique seu limite de faturamento</a></li>
          <li>✓ <a href="/guias/das-mei-2026" className="font-semibold text-accent hover:underline">Guia completo do DAS MEI 2026</a></li>
          <li>✓ <a href="/melhores/melhores-contas-pj-mei" className="font-semibold text-accent hover:underline">Abra uma conta PJ gratuita</a></li>
        </ul>
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
                name: 'Qual o prazo da DASN-SIMEI 2026?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A DASN-SIMEI referente ao ano-calendário 2025 deve ser entregue até 31 de maio de 2026.',
                },
              },
              {
                '@type': 'Question',
                name: 'O que acontece se eu não entregar a DASN-SIMEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Multa mínima de R$ 50 ou 2% ao mês sobre tributos declarados. O CNPJ fica irregular, impedindo emissão de certidões e abertura de conta PJ.',
                },
              },
              {
                '@type': 'Question',
                name: 'Preciso de contador para fazer a DASN-SIMEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Não. A declaração é simples e pode ser feita pelo próprio MEI no portal gov.br/mei. Um contador pode ajudar em casos de faturamento alto ou excesso de limite.',
                },
              },
              {
                '@type': 'Question',
                name: 'Qual o limite de faturamento do MEI em 2025?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'O limite de faturamento anual do MEI em 2025 foi de R$ 81.000. Até 20% de excesso (R$ 97.200) é permitido com pagamento de DAS complementar. Acima de 20%, o MEI é desenquadrado.',
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
