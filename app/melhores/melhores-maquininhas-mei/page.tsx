export default function MelhoresMaquininhas() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Melhores Máquinas de Pagamento para MEI 2026</h1>
        <p className="text-gray-600 text-lg">
          Compare as melhores maquininhas de cartão para MEI. Taxas, características e recomendações.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>O que observar:</strong> Taxa de transação, taxa de aluguel, liquidação rápida, e compatibilidade com seu negócio.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Principais Fornecedoras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Stone</h3>
            <p className="text-gray-700 text-sm mb-4">
              Líder de mercado em Brasil com maior cobertura de MEI.
            </p>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p><strong>Taxa Débito:</strong> 1,69% a 1,99%</p>
              <p><strong>Taxa Crédito:</strong> 2,69% a 3,99%</p>
              <p><strong>Aluguel:</strong> R$ 79-99/mês (ou grátis com volume)</p>
              <p><strong>Liquidação:</strong> D+1</p>
            </div>
            <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 mb-4">
              <p><strong>Destaques:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Maior rede de suporte</li>
                <li>Equipamentos modernos</li>
                <li>Integração com diversos sistemas</li>
              </ul>
            </div>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mercado Pago</h3>
            <p className="text-gray-700 text-sm mb-4">
              Integrada ao Mercado Livre com excelente experiência de uso.
            </p>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p><strong>Taxa Débito:</strong> 1,69% a 1,99%</p>
              <p><strong>Taxa Crédito:</strong> 2,69% a 3,99%</p>
              <p><strong>Aluguel:</strong> Grátis ou baixo com volume</p>
              <p><strong>Liquidação:</strong> D+1</p>
            </div>
            <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 mb-4">
              <p><strong>Destaques:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Integração Mercado Livre</li>
                <li>Avançado antecipação</li>
                <li>App simples</li>
              </ul>
            </div>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 mb-2">SumUp</h3>
            <p className="text-gray-700 text-sm mb-4">
              Maquininha portátil ideal para atendimento ambulante.
            </p>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p><strong>Taxa Débito:</strong> 1,69%</p>
              <p><strong>Taxa Crédito:</strong> 2,49% a 2,99%</p>
              <p><strong>Aluguel:</strong> Grátis</p>
              <p><strong>Liquidação:</strong> D+1</p>
            </div>
            <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 mb-4">
              <p><strong>Destaques:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Equipamento portátil</li>
                <li>Sem aluguel</li>
                <li>Suporte 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-gray-900 mb-2">InfinitePay</h3>
            <p className="text-gray-700 text-sm mb-4">
              Focada em antecipação de recebíveis para MEI.
            </p>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p><strong>Taxa Débito:</strong> 1,99%</p>
              <p><strong>Taxa Crédito:</strong> 2,99%</p>
              <p><strong>Aluguel:</strong> Grátis</p>
              <p><strong>Antecipação:</strong> 24h</p>
            </div>
            <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 mb-4">
              <p><strong>Destaques:</strong></p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Antecipação automática</li>
                <li>Taxa competitiva</li>
                <li>Sem aluguel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border-2 border-yellow-400 rounded-lg p-6 bg-yellow-50">
          <h3 className="text-lg font-bold text-yellow-900 mb-3">Melhor Custo</h3>
          <p className="text-yellow-900 text-sm">
            <strong>SumUp:</strong> Sem aluguel e taxa competitiva de 2,49%.
          </p>
        </div>

        <div className="border-2 border-green-400 rounded-lg p-6 bg-green-50">
          <h3 className="text-lg font-bold text-green-900 mb-3">Melhor Antecipação</h3>
          <p className="text-green-900 text-sm">
            <strong>InfinitePay:</strong> Antecipação em 24h com taxa transparente.
          </p>
        </div>

        <div className="border-2 border-blue-400 rounded-lg p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-blue-900 mb-3">Melhor Portabilidade</h3>
          <p className="text-blue-900 text-sm">
            <strong>SumUp:</strong> Equipamento compacto para trabalho ambulante.
          </p>
        </div>
      </section>

      <section className="border rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Como Escolher</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Se você trabalha...</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li><strong>Presencialmente fixo:</strong> Stone (melhor suporte)</li>
              <li><strong>Ambulante:</strong> SumUp (portátil)</li>
              <li><strong>Online + Presencial:</strong> Mercado Pago</li>
              <li><strong>Precisa antecipação:</strong> InfinitePay</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Observe também:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Compatibilidade com seu sistema PDV</li>
              <li>Atendimento e suporte técnico</li>
              <li>Velocidade de liquidação</li>
              <li>Relatórios e analytics</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Próximos Passos</h2>
        <ul className="space-y-2 text-green-900">
          <li>✓ <a href="/melhores/melhores-contas-pj-mei" className="font-semibold text-blue-600 hover:underline">Ver melhores contas PJ</a></li>
          <li>✓ <a href="/calculadora/das" className="font-semibold text-blue-600 hover:underline">Calcular DAS mensal</a></li>
          <li>✓ Escolha a maquininha ideal para seu negócio</li>
        </ul>
      </div>
    </div>
  );
}
