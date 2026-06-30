export const metadata = {
  title: "Como Abrir MEI Online - Guia Passo a Passo 2026",
  description: "Guia completo para registrar seu MEI no portal oficial. Documentos necessários, custos e prazos.",
  alternates: { canonical: '/guias/como-abrir-mei' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto custa abrir MEI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Totalmente gratuito. Nenhuma taxa ou burocracia. O único custo será o DAS mensal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Preciso de contador para abrir MEI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Você abre online sozinho. Um contador ajuda com impostos, mas não é obrigatório.',
      },
    },
    {
      '@type': 'Question',
      name: 'Posso abrir MEI sendo desempregado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Não há restrição. Você pode abrir MEI em qualquer situação de emprego.',
      },
    },
    {
      '@type': 'Question',
      name: 'E-mail de confirmação não chegou?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Verifique spam. Se não receber em 1h, acesse o portal novamente com seu CPF.',
      },
    },
  ],
};

export default function ComoAbrirMEI() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Como Abrir MEI Online em 2026</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Guia passo a passo para registrar seu Microempreendedor Individual no portal oficial. Totalmente gratuito e 100% online.
        </p>
      </div>

      <div className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h2 className="text-xl font-bold text-green-900 dark:text-green-200 mb-2">Boas Notícias</h2>
        <p className="text-green-900 dark:text-green-200">
          Abrir MEI é totalmente gratuito e leva menos de 10 minutos. Nenhuma taxa, nenhuma burocrácia excessiva.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">1. Documentos Necessários</h2>
        <p>Antes de começar, prepare os seguintes documentos:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>CPF</strong> - Seu número de CPF</li>
          <li><strong>Título de Eleitor</strong> - Número e estado</li>
          <li><strong>Comprovante de Residência</strong> - Recente (luz, água, telefone)</li>
          <li><strong>Dados Bancários</strong> - Banco, agência e conta (opcional, mas recomendado)</li>
          <li><strong>E-mail Válido</strong> - Para receber comunicações oficiais</li>
          <li><strong>Telefone</strong> - Celular ou fixo para contato</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">2. Escolher a Atividade (CNAE)</h2>
        <p>O CNAE é o código que define sua atividade econômica. Escolha com cuidado:</p>
        <div className="bg-yellow-50 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <p className="text-sm text-yellow-900 dark:text-yellow-200">
            <strong>Dica:</strong> Pesquise no site da Receita Federal o CNAE mais adequado à sua atividade. Você pode escolher até 2 CNAEs principais.
          </p>
        </div>
        <p>Exemplos populares:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>4753-1/00: Comércio varejista de artigos de decoração</li>
          <li>7490-2/03: Atividades de contabilidade</li>
          <li>6010-3/00: Programação de computadores</li>
          <li>5611-1/01: Restaurantes de serviço completo</li>
          <li>9602-9/02: Salões de beleza</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">3. Passo a Passo para Abrir MEI</h2>

        <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Passo 1: Acessar o Portal</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Acesse <strong>www.gov.br/empresas/mei</strong></li>
            <li>Clique em "Abrir Meu Negócio" ou "Registrar MEI"</li>
            <li>Você será redirecionado para o portal de serviços da Receita Federal</li>
          </ol>
        </div>

        <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Passo 2: Preencher Dados Pessoais</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Digite seu CPF e clique em "Validar"</li>
            <li>Confirme sua data de nascimento</li>
            <li>Digite seu número de título de eleitor</li>
            <li>Preencha nome completo, e-mail e telefone</li>
            <li>Confirme endereço residencial (será o da empresa)</li>
          </ol>
        </div>

        <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Passo 3: Escolher CNAE e Atividade</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Pesquise sua atividade no campo de busca</li>
            <li>Selecione o CNAE que melhor corresponde</li>
            <li>Você pode adicionar até 2 atividades secundárias</li>
            <li>Clique em "Continuar"</li>
          </ol>
        </div>

        <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Passo 4: Indicar Opção de Contribuição</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Escolha se quer contribuir como MEI (5%) ou outro regime</li>
            <li>Para MEI, a alíquota é 5% do salário mínimo</li>
            <li>Você terá direito a benefícios do INSS</li>
          </ol>
        </div>

        <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Passo 5: Revisar e Confirmar</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Revise todos os dados preenchidos</li>
            <li>Aceite os termos de responsabilidade</li>
            <li>Clique em "Enviar"</li>
            <li>Você receberá um número de protocolo</li>
          </ol>
        </div>

        <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Passo 6: Baixar Documentos</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Após confirmação, você receberá seu CNPJ</li>
            <li>Baixe o Comprovante de Inscrição e Situação Cadastral</li>
            <li>Guarde este documento (é seu CNPJ MEI)</li>
            <li>Você pode imprimir ou salvar em PDF</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">4. Próximos Passos Após Abrir MEI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Obrigatórios</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>Pagar primeiro DAS</li>
              <li>Abrir conta bancária PJ</li>
              <li>Gerar Recibo de Inscrição</li>
              <li>Registrar no prefeitura local</li>
            </ul>
          </div>
          <div className="border dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Recomendados</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>Buscar contador/contabilista</li>
              <li>Registrar marca (INPI)</li>
              <li>Configurar sistema de notas</li>
              <li>Organizar documentação</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">5. Quanto Tempo Leva?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Preenchimento:</strong> 5-10 minutos</li>
          <li><strong>Processamento:</strong> Instantâneo</li>
          <li><strong>CNPJ Ativo:</strong> Minutos após conclusão</li>
          <li><strong>Acesso a sistemas:</strong> 24-48 horas</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">6. Perguntas Frequentes</h2>
        <div className="space-y-4">
          <details className="border dark:border-gray-700 rounded-lg p-4">
            <summary className="font-bold text-gray-900 dark:text-gray-100 cursor-pointer">Quanto custa abrir MEI?</summary>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Totalmente gratuito. Nenhuma taxa ou burocrácia. O único custo será o DAS mensal.</p>
          </details>
          <details className="border dark:border-gray-700 rounded-lg p-4">
            <summary className="font-bold text-gray-900 dark:text-gray-100 cursor-pointer">Preciso de contador para abrir MEI?</summary>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Não. Você abre online sozinho. Um contador ajuda com impostos, mas não é obrigatório.</p>
          </details>
          <details className="border dark:border-gray-700 rounded-lg p-4">
            <summary className="font-bold text-gray-900 dark:text-gray-100 cursor-pointer">Posso abrir MEI sendo desempregado?</summary>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Sim. Não há restrição. Você pode abrir MEI em qualquer situação de emprego.</p>
          </details>
          <details className="border dark:border-gray-700 rounded-lg p-4">
            <summary className="font-bold text-gray-900 dark:text-gray-100 cursor-pointer">E-mail de confirmação não chegou?</summary>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Verifique spam. Se não receber em 1h, acesse o portal novamente com seu CPF.</p>
          </details>
        </div>
      </section>

      <div className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-200 mb-4">Próximos Passos</h2>
        <ul className="space-y-2 text-green-900 dark:text-green-200">
          <li>✓ <a href="/calculadora/das" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">Calcule seu DAS</a></li>
          <li>✓ <a href="/melhores/melhores-contas-pj-mei" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">Abra uma conta PJ</a></li>
          <li>✓ <a href="/guias/das-mei-2026" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">Entenda o DAS</a></li>
        </ul>
      </div>

      {/* Kit MEI CTA */}
      <div className="bg-gradient-to-r from-amber-50 dark:from-amber-950/40 to-orange-50 dark:to-orange-950/40 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              📋 Abriu seu MEI? Precisa de documentos!
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Todo MEI precisa de contrato, nota fiscal e recibos. Nosso Kit MEI inclui 4 modelos profissionais em PDF prontos para preencher e usar.
            </p>
          </div>
          <a
            href="/kit-mei"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-700 transition whitespace-nowrap"
          >
            Comprar Kit MEI — R$ 29,90
          </a>
        </div>
      </div>
    </article>
  );
}
