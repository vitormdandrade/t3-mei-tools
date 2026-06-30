export const metadata = {
  title: "MEI vs Autônomo - Qual É Melhor?",
  description: "Comparação completa: MEI vs autônomo. Custos, impostos, benefícios e diferenças.",
  alternates: { canonical: '/guias/mei-vs-autonomo' },
};

export default function MEIVsAutonomo() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">MEI vs Autônomo: Qual Escolher?</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">Comparação completa entre ser MEI e trabalhar como autônomo.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border dark:border-gray-700 rounded-lg p-6 bg-blue-50 dark:bg-blue-950/40">
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-4">MEI (Microempreendedor Individual)</h2>
          <ul className="space-y-2 text-blue-900 dark:text-blue-200 text-sm">
            <li>✓ CNPJ próprio</li>
            <li>✓ Formalidade legal</li>
            <li>✓ Acesso a crédito</li>
            <li>✓ Contribuição 5% (mínimo)</li>
            <li>✓ Nota fiscal</li>
            <li>✗ Limite de R$ 85k/ano</li>
            <li>✗ Apenas 1 funcionário</li>
          </ul>
        </div>

        <div className="border dark:border-gray-700 rounded-lg p-6 bg-yellow-50 dark:bg-yellow-950/40">
          <h2 className="text-2xl font-bold text-yellow-900 dark:text-yellow-200 mb-4">Autônomo</h2>
          <ul className="space-y-2 text-yellow-900 dark:text-yellow-200 text-sm">
            <li>✓ Sem limite de faturamento</li>
            <li>✓ Sem obrigações formais</li>
            <li>✓ Simples de começar</li>
            <li>✗ Sem CNPJ (menos crédito)</li>
            <li>✗ Contribuição 11-20% (INSS)</li>
            <li>✗ Sem regularidade legal</li>
            <li>✗ Sem nota fiscal</li>
          </ul>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Comparação Detalhada</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border dark:border-gray-700 px-4 py-2 text-left font-bold">Aspecto</th>
                <th className="border dark:border-gray-700 px-4 py-2 text-center font-bold">MEI</th>
                <th className="border dark:border-gray-700 px-4 py-2 text-center font-bold">Autônomo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border dark:border-gray-700 px-4 py-2 font-bold">CNPJ</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">Sim</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">Não</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="border dark:border-gray-700 px-4 py-2 font-bold">Faturamento Limite</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">R$ 85k/ano</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">Ilimitado</td>
              </tr>
              <tr>
                <td className="border dark:border-gray-700 px-4 py-2 font-bold">INSS Mensal</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">R$ 75-80</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">R$ 165+</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="border dark:border-gray-700 px-4 py-2 font-bold">Acesso a Crédito</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">Sim</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">Difícil</td>
              </tr>
              <tr>
                <td className="border dark:border-gray-700 px-4 py-2 font-bold">Nota Fiscal</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">Sim</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">Recibo</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="border dark:border-gray-700 px-4 py-2 font-bold">Benefícios INSS</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">Básicos</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">Completos</td>
              </tr>
              <tr>
                <td className="border dark:border-gray-700 px-4 py-2 font-bold">Funcionários</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">1 máximo</td>
                <td className="border dark:border-gray-700 px-4 py-2 text-center">Não</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Custos Mensais Estimados</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">Para uma renda de R$ 3.000/mês:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border dark:border-gray-700 rounded-lg p-4 bg-blue-50 dark:bg-blue-950/40">
            <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-3">MEI</h3>
            <div className="space-y-2 text-sm text-blue-900 dark:text-blue-200">
              <div className="flex justify-between">
                <span>DAS (serviços):</span>
                <strong>R$ 80,90</strong>
              </div>
              <div className="flex justify-between">
                <span>Contador (opcional):</span>
                <strong>R$ 100-200</strong>
              </div>
              <div className="border-t border-blue-400 dark:border-blue-700 my-2"></div>
              <div className="flex justify-between text-base font-bold">
                <span>Total:</span>
                <strong>~R$ 180-280</strong>
              </div>
            </div>
          </div>

          <div className="border dark:border-gray-700 rounded-lg p-4 bg-yellow-50 dark:bg-yellow-950/40">
            <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-3">Autônomo</h3>
            <div className="space-y-2 text-sm text-yellow-900 dark:text-yellow-200">
              <div className="flex justify-between">
                <span>INSS (11%):</span>
                <strong>R$ 330</strong>
              </div>
              <div className="flex justify-between">
                <span>Sem contabilidade:</span>
                <strong>R$ 0</strong>
              </div>
              <div className="border-t border-yellow-400 dark:border-yellow-700 my-2"></div>
              <div className="flex justify-between text-base font-bold">
                <span>Total:</span>
                <strong>~R$ 330</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Quando Escolher Cada Um</h2>
        <div className="space-y-3">
          <div className="border dark:border-gray-700 rounded-lg p-4 bg-green-50 dark:bg-green-950/40">
            <h3 className="font-bold text-green-900 dark:text-green-200 mb-2">Escolha MEI se:</h3>
            <ul className="list-disc list-inside space-y-1 text-green-900 dark:text-green-200 text-sm">
              <li>Você quer formalidade e CNPJ</li>
              <li>Precisa de crédito ou parcelamentos</li>
              <li>Vai faturar até R$ 85k/ano</li>
              <li>Quer benefícios do INSS</li>
              <li>Precisa emitir nota fiscal</li>
            </ul>
          </div>
          <div className="border dark:border-gray-700 rounded-lg p-4 bg-yellow-50 dark:bg-yellow-950/40">
            <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">Escolha Autônomo se:</h3>
            <ul className="list-disc list-inside space-y-1 text-yellow-900 dark:text-yellow-200 text-sm">
              <li>Trabalha de forma informal/pontual</li>
              <li>Não quer burocrácia</li>
              <li>Faturamento pode ser alto/sem limite</li>
              <li>Clientes não pedem nota/CNPJ</li>
              <li>Quer máximos benefícios de INSS</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-200 mb-4">Próximo Passo</h2>
        <a href="/calculadora/das" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
          Calcular DAS MEI
        </a>
      </div>
    </div>
  );
}
