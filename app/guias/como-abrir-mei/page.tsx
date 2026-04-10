export const metadata = {
  title: "Como Abrir MEI Online - Guia Passo a Passo 2026",
  description: "Guia completo para registrar seu MEI no portal oficial. Documentos necessários, custos e prazos.",
};

export default function ComoAbrirMEI() {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Como Abrir MEI Online em 2026</h1>
        <p className="text-gray-600 text-lg">
          Guia passo a passo para registrar seu Microempreendedor Individual no portal oficial. Totalmente gratuito e 100% online.
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-green-900 mb-2">Boas Notícias</h2>
        <p className="text-green-900">
          Abrir MEI é totalmente gratuito e leva menos de 10 minutos. Nenhuma taxa, nenhuma burocrácia excessiva.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">1. Documentos Necessários</h2>
        <p>Antes de começar, prepare os seguintes documentos:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>CPF</strong> - Seu número de CPF</li>
          <li><strong>Título de Eleitor</strong> - Número e estado</li>
          <li><strong>Comprovante de Residência</strong> - Recente (luz, água, telefone)</li>
          <li><strong>Dados Bancários</strong> - Banco, agência e conta (opcional, mas recomendado)</li>
          <li><strong>E-mail Válido</strong> - Para receber comunicações oficiais</li>
          <li><strong>Telefone</strong> - Celular ou fixo para contato</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">2. Escolher a Atividade (CNAE)</h2>
        <p>O CNAE é o código que define sua atividade econômica. Escolha com cuidado:</p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-900">
            <strong>Dica:</strong> Pesquise no site da Receita Federal o CNAE mais adequado à sua atividade. Você pode escolher até 2 CNAEs principais.
          </p>
        </div>
        <p>Exemplos populares:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>4753-1/00: Comércio varejista de artigos de decoração</li>
          <li>7490-2/03: Atividades de contabilidade</li>
          <li>6010-3/00: Programação de computadores</li>
          <li>5611-1/01: Restaurantes de serviço completo</li>
          <li>9602-9/02: Salões de beleza</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">3. Passo a Passo para Abrir MEI</h2>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Passo 1: Acessar o Portal</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Acesse <strong>www.gov.br/empresas/mei</strong></li>
            <li>Clique em "Abrir Meu Negócio" ou "Registrar MEI"</li>
            <li>Você será redirecionado para o portal de serviços da Receita Federal</li>
          </ol>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Passo 2: Preencher Dados Pessoais</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Digite seu CPF e clique em "Validar"</li>
            <li>Confirme sua data de nascimento</li>
            <li>Digite seu número de título de eleitor</li>
            <li>Preencha nome completo, e-mail e telefone</li>
            <li>Confirme endereço residencial (será o da empresa)</li>
          </ol>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Passo 3: Escolher CNAE e Atividade</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Pesquise sua atividade no campo de busca</li>
            <li>Selecione o CNAE que melhor corresponde</li>
            <li>Você pode adicionar até 2 atividades secundárias</li>
            <li>Clique em "Continuar"</li>
          </ol>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Passo 4: Indicar Opção de Contribuição</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Escolha se quer contribuir como MEI (5%) ou outro regime</li>
            <li>Para MEI, a alíquota é 5% do salário mínimo</li>
            <li>Você terá direito a benefícios do INSS</li>
          </ol>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Passo 5: Revisar e Confirmar</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Revise todos os dados preenchidos</li>
            <li>Aceite os termos de responsabilidade</li>
            <li>Clique em "Enviar"</li>
            <li>Você receberá um número de protocolo</li>
          </ol>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Passo 6: Baixar Documentos</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Após confirmação, você receberá seu CNPJ</li>
            <li>Baixe o Comprovante de Inscrição e Situação Cadastral</li>
            <li>Guarde este documento (é seu CNPJ MEI)</li>
            <li>Você pode imprimir ou salvar em PDF</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">4. Próximos Passos Após Abrir MEI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">Obrigatórios</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Pagar primeiro DAS</li>
              <li>Abrir conta bancária PJ</li>
              <li>Gerar Recibo de Inscrição</li>
              <li>Registrar no prefeitura local</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">Recomendados</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Buscar contador/contabilista</li>
              <li>Registrar marca (INPI)</li>
              <li>Configurar sistema de notas</li>
              <li>Organizar documentação</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">5. Quanto Tempo Leva?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Preenchimento:</strong> 5-10 minutos</li>
          <li><strong>Processamento:</strong> Instantâneo</li>
          <li><strong>CNPJ Ativo:</strong> Minutos após conclusão</li>
          <li><strong>Acesso a sistemas:</strong> 24-48 horas</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">6. Perguntas Frequentes</h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-bold text-gray-900 cursor-pointer">Quanto custa abrir MEI?</summary>
            <p className="text-gray-700 mt-2">Totalmente gratuito. Nenhuma taxa ou burocrácia. O único custo será o DAS mensal.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-bold text-gray-900 cursor-pointer">Preciso de contador para abrir MEI?</summary>
            <p className="text-gray-700 mt-2">Não. Você abre online sozinho. Um contador ajuda com impostos, mas não é obrigatório.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-bold text-gray-900 cursor-pointer">Posso abrir MEI sendo desempregado?</summary>
            <p className="text-gray-700 mt-2">Sim. Não há restrição. Você pode abrir MEI em qualquer situação de emprego.</p>
          </details>
          <details className="border rounded-lg p-4">
            <summary className="font-bold text-gray-900 cursor-pointer">E-mail de confirmação não chegou?</summary>
            <p className="text-gray-700 mt-2">Verifique spam. Se não receber em 1h, acesse o portal novamente com seu CPF.</p>
          </details>
        </div>
      </section>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Próximos Passos</h2>
        <ul className="space-y-2 text-green-900">
          <li>✓ <a href="/calculadora/das" className="font-semibold text-blue-600 hover:underline">Calcule seu DAS</a></li>
          <li>✓ <a href="/melhores/melhores-contas-pj-mei" className="font-semibold text-blue-600 hover:underline">Abra uma conta PJ</a></li>
          <li>✓ <a href="/guias/das-mei-2026" className="font-semibold text-blue-600 hover:underline">Entenda o DAS</a></li>
        </ul>
      </div>
    </article>
  );
}
