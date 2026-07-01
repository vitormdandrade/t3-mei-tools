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
        <a href="/guias/como-abrir-mei">← Voltar ao guias</a>
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
    </article>
  );
}
