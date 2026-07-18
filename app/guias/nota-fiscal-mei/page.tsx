export const metadata = {
  title: "Nota Fiscal MEI - Quando é Obrigatória e Como Emitir",
  description: "Guia completo sobre nota fiscal para MEI. Regras 2026, quando é obrigatório e como emitir.",
  alternates: { canonical: '/guias/nota-fiscal-mei' },
};

export default function NotaFiscalMEI() {
  return (
    <article className="prose-guide max-w-3xl mx-auto">
      <header className="mb-10">
        <span className="text-label">Guia</span>
        <h1 className="text-hero mt-2 mb-4">Nota Fiscal MEI em 2026</h1>
        <p className="text-body-lg">Quando é obrigatória, como emitir e regras importantes.</p>
      </header>

      <div className="callout callout-info my-6">
        <p className="callout-title">Quando é Obrigatória?</p>
        <ul>
          <li>Vendas para outras empresas (B2B)</li>
          <li>Serviços com valor acima de R$ 200</li>
          <li>Exportação</li>
          <li>Quando solicitado pelo cliente</li>
          <li>Alguns municípios exigem sempre (verifique local)</li>
        </ul>
      </div>

      <h2>Quando NÃO é Obrigatória</h2>
      <ul>
        <li>Vendas para pessoa física (B2C)</li>
        <li>Serviços abaixo de R$ 200</li>
        <li>Comércio no varejo (pequenas vendas)</li>
        <li>Serviços domésticos simples</li>
      </ul>

      <h2>Como Emitir Nota Fiscal</h2>
      <h3>Opção 1: RPA (Recibo de Prestação de Serviços)</h3>
      <p>Para serviços. Pode ser feito manualmente ou com sistema específico.</p>
      <h3>Opção 2: NFSe (Nota Fiscal Eletrônica de Serviços)</h3>
      <p>Obrigatória para serviços em alguns municípios. Sistema online da prefeitura.</p>
      <h3>Opção 3: NFe (Nota Fiscal Eletrônica)</h3>
      <p>Para comércio. Exige certificado digital e software específico.</p>

      <h2>Dicas Importantes</h2>
      <ul>
        <li>Sempre pergunte ao cliente se precisa de nota fiscal</li>
        <li>Guarde cópias de todas as notas emitidas</li>
        <li>Não cometa erros de identificação (nome, CNPJ)</li>
        <li>Prazo de cancelamento: até 24 horas</li>
        <li>Consulte a prefeitura sobre exigências locais</li>
      </ul>

      <div className="callout callout-info my-6">
        <p className="callout-title">Próximos Passos</p>
        <ul>
          <li>✓ <a href="/calculadora/das">Calcule seu DAS</a></li>
          <li>✓ <a href="/kit-mei/gerador-nota-fiscal">Gerador de Nota Fiscal MEI</a></li>
          <li>✓ <a href="/guias/das-mei-2026">Entenda o DAS 2026</a></li>
        </ul>
      </div>

      <h2>Conteúdo Relacionado</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          ['/guias/como-abrir-mei', 'Como Abrir MEI', 'Passo a passo completo para abrir seu MEI grátis em 2026'],
          ['/guias/das-mei-2026', 'DAS MEI 2026', 'Valores atualizados, prazos e como pagar o DAS'],
          ['/guias/limite-faturamento-mei', 'Limite de Faturamento MEI', 'Entenda o teto de R$ 81 mil e o que fazer se ultrapassar'],
          ['/guias/abrir-conta-pj-mei', 'Abrir Conta PJ para MEI', 'Compare as melhores contas PJ gratuitas para seu CNPJ'],
        ].map(([href, title, desc]) => (
          <a key={href} href={href} className="card card-hover no-underline p-4 flex flex-col gap-1">
            <span className="font-semibold" style={{ color: 'var(--color-foreground)' }}>{title} →</span>
            <span className="text-caption">{desc}</span>
          </a>
        ))}
      </div>

      {/* Kit MEI CTA */}
      <div className="callout callout-accent my-8">
        <p className="callout-title">📋 Precisa de modelos prontos?</p>
        <p className="mb-4">
          Baixe nosso Kit MEI com 4 PDFs profissionais: Contrato de Prestação de Serviços, Modelo de Nota Fiscal, Recibo de Pagamento e Termo de Responsabilidade.
        </p>
        <a href="/kit-mei" className="btn-primary no-underline inline-flex">
          Comprar Kit MEI — R$ 29,90
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
                name: 'Quando o MEI é obrigado a emitir nota fiscal?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'O MEI é obrigado a emitir nota fiscal em vendas para outras empresas (B2B), serviços com valor acima de R$ 200, exportação e quando o cliente solicitar. Alguns municípios exigem nota fiscal em todas as operações — verifique as regras locais.',
                },
              },
              {
                '@type': 'Question',
                name: 'Quando o MEI não precisa emitir nota fiscal?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A nota fiscal não é obrigatória para vendas a pessoa física (B2C), serviços abaixo de R$ 200, comércio no varejo de pequenas vendas e serviços domésticos simples. No entanto, mesmo não sendo obrigatória, emitir a nota transmite profissionalismo.',
                },
              },
              {
                '@type': 'Question',
                name: 'Como emitir nota fiscal sendo MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'O MEI pode emitir nota fiscal de três formas: RPA (Recibo de Prestação de Serviços) para serviços, NFSe (Nota Fiscal Eletrônica de Serviços) pelo sistema online da prefeitura, ou NFe (Nota Fiscal Eletrônica) para comércio, que exige certificado digital.',
                },
              },
              {
                '@type': 'Question',
                name: 'Qual o prazo para cancelar uma nota fiscal MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'O prazo para cancelamento de nota fiscal é de até 24 horas após a emissão, dependendo das regras do município. Após esse prazo, pode ser necessário solicitar uma carta de correção ou emitir uma nota de devolução.',
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
