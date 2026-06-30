export const metadata = {
  title: "Nota Fiscal MEI - Quando é Obrigatória e Como Emitir",
  description: "Guia completo sobre nota fiscal para MEI. Regras 2026, quando é obrigatório e como emitir.",
  alternates: { canonical: '/guias/nota-fiscal-mei' },
};

export default function NotaFiscalMEI() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nota Fiscal MEI em 2026</h1>
        <p className="text-gray-600 text-lg">Quando é obrigatória, como emitir e regras importantes.</p>
      </div>

      <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Quando é Obrigatória?</h2>
        <ul className="list-disc list-inside space-y-2 text-blue-900">
          <li>Vendas para outras empresas (B2B)</li>
          <li>Serviços com valor acima de R$ 200</li>
          <li>Exportação</li>
          <li>Quando solicitado pelo cliente</li>
          <li>Alguns municípios exigem sempre (verifique local)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Quando NÃO é Obrigatória</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Vendas para pessoa física (B2C)</li>
          <li>Serviços abaixo de R$ 200</li>
          <li>Comércio no varejo (pequenas vendas)</li>
          <li>Serviços domésticos simples</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Como Emitir Nota Fiscal</h2>
        <div className="space-y-3">
          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">Opção 1: RPA (Recibo de Prestação de Serviços)</h3>
            <p className="text-gray-700 text-sm">Para serviços. Pode ser feito manualmente ou com sistema específico.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">Opção 2: NFSe (Nota Fiscal Eletrônica de Serviços)</h3>
            <p className="text-gray-700 text-sm">Obrigatória para serviços em alguns municípios. Sistema online da prefeitura.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">Opção 3: NFe (Nota Fiscal Eletrônica)</h3>
            <p className="text-gray-700 text-sm">Para comércio. Exige certificado digital e software específico.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Dicas Importantes</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Sempre pergunte ao cliente se precisa de nota fiscal</li>
          <li>Guarde cópias de todas as notas emitidas</li>
          <li>Não cometa erros de identificação (nome, CNPJ)</li>
          <li>Prazo de cancelamento: até 24 horas</li>
          <li>Consulte a prefeitura sobre exigências locais</li>
        </ul>
      </section>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Próximos Passos</h2>
        <a href="/guias/como-abrir-mei" className="text-blue-600 font-semibold hover:underline">← Voltar ao guias</a>
      </div>

      {/* Kit MEI CTA */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              📋 Precisa de modelos prontos?
            </h2>
            <p className="text-gray-600 text-sm">
              Baixe nosso Kit MEI com 4 PDFs profissionais: Contrato de Prestação de Serviços, Modelo de Nota Fiscal, Recibo de Pagamento e Termo de Responsabilidade.
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
    </div>
  );
}
