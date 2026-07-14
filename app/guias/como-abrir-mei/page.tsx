export const metadata = {
  title: "Como Abrir MEI Online - Guia Passo a Passo 2026",
  description: "Guia completo para registrar seu MEI no portal oficial. Documentos necessários, custos e prazos.",
  alternates: { canonical: '/guias/como-abrir-mei' },
  openGraph: {
    title: "Como Abrir MEI Online - Guia Passo a Passo 2026",
    description: "Guia completo para registrar seu MEI gratuitamente no portal gov.br. Documentos, CNAE e passo a passo em 10 minutos.",
    type: 'article',
    locale: 'pt_BR',
    url: 'https://oraculodomei.com.br/guias/como-abrir-mei',
    siteName: 'Oráculo do MEI',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Como Abrir MEI Online — Passo a Passo 2026",
    description: "Guia completo: documentos, CNAE e passo a passo para abrir seu MEI em 10 minutos. 100% gratuito.",
  },
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
    <article className="prose-guide max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Como Abrir MEI Online em 2026',
            description:
              'Guia passo a passo para registrar seu Microempreendedor Individual no portal oficial. Totalmente gratuito e 100% online.',
            author: {
              '@type': 'Organization',
              name: 'Oráculo do MEI',
              url: 'https://oraculodomei.com.br',
            },
            datePublished: '2025-01-01',
            dateModified: '2026-07-01',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://oraculodomei.com.br/guias/como-abrir-mei',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Oráculo do MEI',
              url: 'https://oraculodomei.com.br',
            },
          }),
        }}
      />
      {/* BreadcrumbList Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Início',
                item: 'https://oraculodomei.com.br',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Guias',
                item: 'https://oraculodomei.com.br/guias',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Como Abrir MEI',
              },
            ],
          }),
        }}
      />
      <header className="mb-10">
        <span className="text-label">Guia</span>
        <h1 className="text-hero mt-2 mb-4">Como Abrir MEI Online em 2026</h1>
        <p className="text-body-lg">
          Guia passo a passo para registrar seu Microempreendedor Individual no portal oficial. Totalmente gratuito e 100% online.
        </p>
      </header>

      <div className="callout callout-accent my-6">
        <p className="callout-title">Boas Notícias</p>
        <p>
          Abrir MEI é totalmente gratuito e leva menos de 10 minutos. Nenhuma taxa, nenhuma burocrácia excessiva.
        </p>
      </div>

      <h2>1. Documentos Necessários</h2>
      <p>Antes de começar, prepare os seguintes documentos:</p>
      <ul>
        <li><strong>CPF</strong> - Seu número de CPF</li>
        <li><strong>Título de Eleitor</strong> - Número e estado</li>
        <li><strong>Comprovante de Residência</strong> - Recente (luz, água, telefone)</li>
        <li><strong>Dados Bancários</strong> - Banco, agência e conta (opcional, mas recomendado)</li>
        <li><strong>E-mail Válido</strong> - Para receber comunicações oficiais</li>
        <li><strong>Telefone</strong> - Celular ou fixo para contato</li>
      </ul>

      <h2>2. Escolher a Atividade (CNAE)</h2>
      <p>O CNAE é o código que define sua atividade econômica. Escolha com cuidado:</p>
      <div className="callout callout-warning my-6">
        <p>
          <strong>Dica:</strong> Pesquise no site da Receita Federal o CNAE mais adequado à sua atividade. Você pode escolher até 2 CNAEs principais.
        </p>
      </div>
      <p>Exemplos populares:</p>
      <ul>
        <li>4753-1/00: Comércio varejista de artigos de decoração</li>
        <li>7490-2/03: Atividades de contabilidade</li>
        <li>6010-3/00: Programação de computadores</li>
        <li>5611-1/01: Restaurantes de serviço completo</li>
        <li>9602-9/02: Salões de beleza</li>
      </ul>
      <p className="text-sm mt-2" style={{ color: 'var(--color-muted)' }}>
        💡 Use nossa{' '}
        <a href="/calculadora/cnae" style={{ color: 'var(--brand-teal)', fontWeight: 600 }}>
          calculadora de CNAE
        </a>{' '}
        para encontrar o código ideal para sua atividade. E depois de abrir,{' '}
        <a href="/calculadora/faturamento" style={{ color: 'var(--brand-teal)', fontWeight: 600 }}>
          simule seu faturamento máximo
        </a>{' '}
        para não ultrapassar o teto MEI.
      </p>

      <h2>3. Passo a Passo para Abrir MEI</h2>

      <div className="card p-6 my-6">
        <h3>Passo 1: Acessar o Portal</h3>
        <ol>
          <li>Acesse <strong>www.gov.br/empresas/mei</strong></li>
          <li>Clique em &quot;Abrir Meu Negócio&quot; ou &quot;Registrar MEI&quot;</li>
          <li>Você será redirecionado para o portal de serviços da Receita Federal</li>
        </ol>
      </div>

      <div className="card p-6 my-6">
        <h3>Passo 2: Preencher Dados Pessoais</h3>
        <ol>
          <li>Digite seu CPF e clique em &quot;Validar&quot;</li>
          <li>Confirme sua data de nascimento</li>
          <li>Digite seu número de título de eleitor</li>
          <li>Preencha nome completo, e-mail e telefone</li>
          <li>Confirme endereço residencial (será o da empresa)</li>
        </ol>
      </div>

      <div className="card p-6 my-6">
        <h3>Passo 3: Escolher CNAE e Atividade</h3>
        <ol>
          <li>Pesquise sua atividade no campo de busca</li>
          <li>Selecione o CNAE que melhor corresponde</li>
          <li>Você pode adicionar até 2 atividades secundárias</li>
          <li>Clique em &quot;Continuar&quot;</li>
        </ol>
      </div>

      <div className="card p-6 my-6">
        <h3>Passo 4: Indicar Opção de Contribuição</h3>
        <ol>
          <li>Escolha se quer contribuir como MEI (5%) ou outro regime</li>
          <li>Para MEI, a alíquota é 5% do salário mínimo</li>
          <li>Você terá direito a benefícios do INSS</li>
        </ol>
      </div>

      <div className="card p-6 my-6">
        <h3>Passo 5: Revisar e Confirmar</h3>
        <ol>
          <li>Revise todos os dados preenchidos</li>
          <li>Aceite os termos de responsabilidade</li>
          <li>Clique em &quot;Enviar&quot;</li>
          <li>Você receberá um número de protocolo</li>
        </ol>
      </div>

      <div className="card p-6 my-6">
        <h3>Passo 6: Baixar Documentos</h3>
        <ol>
          <li>Após confirmação, você receberá seu CNPJ</li>
          <li>Baixe o Comprovante de Inscrição e Situação Cadastral</li>
          <li>Guarde este documento (é seu CNPJ MEI)</li>
          <li>Você pode imprimir ou salvar em PDF</li>
        </ol>
      </div>

      {/* Mid-content Kit MEI CTA — high-intent audience, internal product upsell */}
      <div className="my-8 rounded-2xl p-6 sm:p-8" style={{ background: 'linear-gradient(135deg, var(--brand-navy), var(--brand-navy-light))' }}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#ffffff' }}>
              📋 Abriu seu MEI? Não pare por aí!
            </h3>
            <p style={{ color: '#c8d2dc' }} className="text-body">
              Todo MEI precisa de contrato de prestação de serviços, nota fiscal, recibo e orçamento profissional. Nosso <strong style={{ color: '#fbbf24' }}>Kit MEI</strong> reúne 4 modelos em PDF prontos para você preencher e começar a faturar hoje mesmo.
            </p>
            <ul className="mt-3 space-y-1" style={{ color: '#b4c1ce' }}>
              <li>✅ Contrato de Prestação de Serviços</li>
              <li>✅ Modelo de Nota Fiscal</li>
              <li>✅ Recibo para Pessoa Física e Jurídica</li>
              <li>✅ Orçamento Profissional</li>
            </ul>
          </div>
          <a href="/kit-mei" className="btn-light no-underline inline-flex items-center gap-2 whitespace-nowrap text-center justify-center px-6 py-4 rounded-xl font-bold text-lg">
            Quero o Kit MEI →<br/>
            <span className="text-sm font-normal opacity-90">Apenas R$ 29,90</span>
          </a>
        </div>
      </div>

      <h2>4. Próximos Passos Após Abrir MEI</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="card p-4">
          <h3>Obrigatórios</h3>
          <ul>
            <li>Pagar primeiro DAS</li>
            <li>Abrir conta bancária PJ</li>
            <li>Gerar Recibo de Inscrição</li>
            <li>Registrar no prefeitura local</li>
          </ul>
        </div>
        <div className="card p-4">
          <h3>Recomendados</h3>
          <ul>
            <li>Buscar contador/contabilista</li>
            <li>Registrar marca (INPI)</li>
            <li>Configurar sistema de notas</li>
            <li>Organizar documentação</li>
          </ul>
        </div>
      </div>

      <h2>5. Quanto Tempo Leva?</h2>
      <ul>
        <li><strong>Preenchimento:</strong> 5-10 minutos</li>
        <li><strong>Processamento:</strong> Instantâneo</li>
        <li><strong>CNPJ Ativo:</strong> Minutos após conclusão</li>
        <li><strong>Acesso a sistemas:</strong> 24-48 horas</li>
      </ul>

      <h2>6. Perguntas Frequentes</h2>
      <div className="space-y-4 my-6">
        <details className="card p-4">
          <summary className="font-semibold cursor-pointer">Quanto custa abrir MEI?</summary>
          <p>Totalmente gratuito. Nenhuma taxa ou burocrácia. O único custo será o DAS mensal.</p>
        </details>
        <details className="card p-4">
          <summary className="font-semibold cursor-pointer">Preciso de contador para abrir MEI?</summary>
          <p>Não. Você abre online sozinho. Um contador ajuda com impostos, mas não é obrigatório.</p>
        </details>
        <details className="card p-4">
          <summary className="font-semibold cursor-pointer">Posso abrir MEI sendo desempregado?</summary>
          <p>Sim. Não há restrição. Você pode abrir MEI em qualquer situação de emprego.</p>
        </details>
        <details className="card p-4">
          <summary className="font-semibold cursor-pointer">E-mail de confirmação não chegou?</summary>
          <p>Verifique spam. Se não receber em 1h, acesse o portal novamente com seu CPF.</p>
        </details>
      </div>

      <div className="callout callout-accent my-8">
        <p className="callout-title">Próximos Passos</p>
        <ul>
          <li>✓ <a href="/calculadora/das">Calcule seu DAS</a></li>
          <li>✓ <a href="/melhores/melhores-contas-pj-mei">Abra uma conta PJ</a></li>
          <li>✓ <a href="/guias/das-mei-2026">Entenda o DAS</a></li>
        </ul>
      </div>

      <h2>Conteúdo Relacionado</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          ['/guias/das-mei-2026', 'DAS MEI 2026', 'Valores atualizados, prazos e como pagar o DAS'],
          ['/guias/limite-faturamento-mei', 'Limite de Faturamento MEI', 'Entenda o teto de R$ 81 mil e o que fazer se ultrapassar'],
          ['/guias/abrir-conta-pj-mei', 'Abrir Conta PJ para MEI', 'Compare as melhores contas PJ gratuitas para seu CNPJ'],
          ['/guias/mei-pode-ter-funcionario', 'MEI Pode Ter Funcionário?', 'Regras, limites e obrigações para contratar'],
        ].map(([href, title, desc]) => (
          <a key={href} href={href} className="card card-hover no-underline p-4 flex flex-col gap-1">
            <span className="font-semibold" style={{ color: 'var(--color-foreground)' }}>{title} →</span>
            <span className="text-caption">{desc}</span>
          </a>
        ))}
      </div>

      {/* Kit MEI CTA */}
      <div className="callout callout-accent my-8">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <p className="callout-title">
              📋 Abriu seu MEI? Precisa de documentos!
            </p>
            <p>
              Todo MEI precisa de contrato, nota fiscal e recibos. Nosso Kit MEI inclui 4 modelos profissionais em PDF prontos para preencher e usar.
            </p>
          </div>
          <a
            href="/kit-mei"
            className="btn-primary no-underline inline-flex whitespace-nowrap"
          >
            Comprar Kit MEI — R$ 29,90
          </a>
        </div>
      </div>
    </article>
  );
}
