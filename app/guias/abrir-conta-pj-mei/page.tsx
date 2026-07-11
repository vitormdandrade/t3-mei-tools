export const metadata = {
  title: "Como Abrir Conta PJ para MEI - Guia Completo",
  description: "Guia passo a passo para abrir conta bancária PJ/MEI. Documentos, bancos e taxas.",
  alternates: { canonical: '/guias/abrir-conta-pj-mei' },
};

export default function AbrirContaPJMEI() {
  return (
    <article className="prose-guide max-w-3xl mx-auto">
      <header className="mb-10">
        <span className="text-label">Guia</span>
        <h1 className="text-hero mt-2 mb-4">Como Abrir Conta PJ para MEI</h1>
        <p className="text-body-lg">
          Guia completo para abrir uma conta bancária PJ/MEI com documentação necessária.
        </p>
      </header>

      <div className="callout callout-info my-6">
        <p className="callout-title">Por que Abrir Conta PJ?</p>
        <ul>
          <li>Separação de finanças pessoais e empresariais</li>
          <li>Documentação de fluxo de caixa</li>
          <li>Facilita negociações e crédito</li>
          <li>Exigido por muitos clientes</li>
          <li>Melhor organização fiscal</li>
        </ul>
      </div>

      <h2>Documentos Necessários</h2>
      <h3>Documentos da Empresa (MEI)</h3>
      <ul>
        <li>CNPJ (Comprovante de Inscrição)</li>
        <li>Recibo de Inscrição do MEI (RPA)</li>
        <li>Contrato Social ou Ato Constitutivo</li>
        <li>Comprovante de endereço comercial</li>
      </ul>
      <h3>Documentos Pessoais (Sócio/Proprietário)</h3>
      <ul>
        <li>Documento de identidade (RG ou CNH)</li>
        <li>CPF</li>
        <li>Comprovante de endereço residencial</li>
        <li>Comprovante de renda (declaração ou extrato)</li>
      </ul>

      <h2>Passo a Passo</h2>
      <ol>
        <li><strong>Pesquise bancos:</strong> Compare taxas, tarifas e serviços</li>
        <li><strong>Agende atendimento:</strong> Presencial ou digital (a maioria oferece online)</li>
        <li><strong>Prepare documentos:</strong> Tenha tudo em mãos</li>
        <li><strong>Preencha formulários:</strong> Dados da empresa e do proprietário</li>
        <li><strong>Aprove análise:</strong> O banco analisará seu perfil</li>
        <li><strong>Ative a conta:</strong> Pode levar de 1 a 7 dias úteis</li>
        <li><strong>Receba dados:</strong> Agência, conta e senha</li>
      </ol>

      <h2>Melhores Bancos para MEI</h2>
      <p>Confira nosso comparativo completo:</p>
      <div className="callout callout-accent my-8">
        <a href="/melhores/melhores-contas-pj-mei" className="btn-primary no-underline inline-flex">
          Ver Comparativo de Contas PJ
        </a>
      </div>

      <h2>Custos Típicos</h2>
      <div className="overflow-x-auto my-6">
        <table className="table-compare">
          <thead>
            <tr>
              <th>Serviço</th>
              <th>Custo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Abertura da conta</td>
              <td>Gratuito</td>
            </tr>
            <tr>
              <td>Manutenção mensal</td>
              <td>Gratuito - R$ 30/mês</td>
            </tr>
            <tr>
              <td>Transferência (TED)</td>
              <td>Gratuito - R$ 15</td>
            </tr>
            <tr>
              <td>Boleto bancário</td>
              <td>Gratuito - R$ 5</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Dicas Importantes</h2>
      <ul>
        <li>Abra a conta no mesmo banco onde tem conta pessoal (mais fácil)</li>
        <li>Compare tarifas - algumas são gratuitas para MEI</li>
        <li>Separe SEMPRE suas finanças pessoais da empresa</li>
        <li>Guarde todos os extratos (obrigação fiscal)</li>
        <li>Não se atrasse em pagamentos (afeta sua reputação)</li>
      </ul>

      <div className="callout callout-info my-6">
        <p className="callout-title">Saiba Mais</p>
        <a href="/calculadora/das">→ Calcular DAS</a>
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
                name: 'Quais documentos preciso para abrir conta PJ MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Documentos da empresa: CNPJ, Recibo de Inscrição do MEI, Contrato Social, comprovante de endereço comercial. Documentos pessoais: RG ou CNH, CPF, comprovante de endereço residencial e comprovante de renda.',
                },
              },
              {
                '@type': 'Question',
                name: 'Quanto custa abrir uma conta PJ para MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A abertura da conta é gratuita na maioria dos bancos digitais. A manutenção mensal varia de gratuita a R$ 30/mês. Transferências TED custam de gratuitas a R$ 15. Compare as opções para encontrar a conta ideal para seu MEI.',
                },
              },
              {
                '@type': 'Question',
                name: 'Qual o melhor banco para abrir conta PJ MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Depende das necessidades do seu negócio. Consulte nosso comparativo completo de contas PJ para MEI com as melhores opções do mercado: Conta Simples, Nubank PJ, Neon PJ, Inter Empresas, C6 Bank PJ, Cora, BS2, Sicredi, entre outros.',
                },
              },
              {
                '@type': 'Question',
                name: 'Preciso separar conta PF e PJ sendo MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sim. Separar finanças pessoais e empresariais é essencial para organização fiscal, fluxo de caixa e comprovação de renda. Além disso, muitos clientes exigem pagamento em conta PJ.',
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
