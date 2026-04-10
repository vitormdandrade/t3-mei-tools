'use client';

import fintechs from '@/data/fintechs.json';

export default function MelhoresContasPJ() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Melhores Contas PJ para MEI 2026</h1>
        <p className="text-gray-600 text-lg">
          Compare as melhores contas bancárias PJ/MEI do mercado. Taxas, benefícios e comparativo.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>Dica:</strong> A melhor conta para você depende de suas necessidades. Analise transferências, cartão, antecipação de recebíveis e atendimento.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left font-bold">Banco</th>
              <th className="px-4 py-3 text-center font-bold">Taxa Mensal</th>
              <th className="px-4 py-3 text-center font-bold">Transferências</th>
              <th className="px-4 py-3 text-center font-bold">Maquininha</th>
              <th className="px-4 py-3 text-center font-bold">Cartão</th>
              <th className="px-4 py-3 text-center font-bold">Rating</th>
            </tr>
          </thead>
          <tbody>
            {fintechs.fintechs.map((f, idx) => (
              <tr key={f.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 font-bold text-gray-900">{f.name}</td>
                <td className="px-4 py-3 text-center">
                  {f.monthly_fee_brl === 0 ? 'Grátis' : `R$ ${f.monthly_fee_brl}`}
                </td>
                <td className="px-4 py-3 text-center text-sm">✓</td>
                <td className="px-4 py-3 text-center text-sm">
                  {f.highlights.some(h => h.includes('iqueta') || h.includes('iquina')) ? '✓' : '-'}
                </td>
                <td className="px-4 py-3 text-center text-sm">
                  {f.highlights.some(h => h.includes('artão')) ? '✓' : '-'}
                </td>
                <td className="px-4 py-3 text-center font-bold">{f.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed Cards */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Detalhes de Cada Conta</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fintechs.fintechs.map((f) => (
            <div key={f.id} className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{f.name}</h3>
                  <p className="text-sm text-gray-600">{f.best_for}</p>
                </div>
                <div className="text-2xl font-bold text-yellow-500">{f.rating}★</div>
              </div>

              <p className="text-gray-700 text-sm mb-4">{f.description_pt}</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">Destaques:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {f.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 pt-4 border-t">
                <p className="text-sm text-gray-600">
                  <strong>Taxa Mensal:</strong>{' '}
                  {f.monthly_fee_brl === 0 ? 'Gratuito' : `R$ ${f.monthly_fee_brl}/mês`}
                </p>
              </div>

              <a
                href={f.affiliate_url}
                className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 text-sm"
              >
                Conhecer Mais
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border-2 border-yellow-400 rounded-lg p-6 bg-yellow-50">
          <h3 className="text-lg font-bold text-yellow-900 mb-3">Melhor Custo-Benefício</h3>
          <p className="text-yellow-900 mb-3">
            <strong>Neon PJ ou Nubank PJ</strong> - Sem taxa mensal, transferências ilimitadas e interface mobile excelente.
          </p>
        </div>

        <div className="border-2 border-green-400 rounded-lg p-6 bg-green-50">
          <h3 className="text-lg font-bold text-green-900 mb-3">Melhor para Crédito</h3>
          <p className="text-green-900 mb-3">
            <strong>Inter Empresas ou C6 PJ</strong> - Oferecem crédito pré-aprovado e limite automático.
          </p>
        </div>

        <div className="border-2 border-blue-400 rounded-lg p-6 bg-blue-50">
          <h3 className="text-lg font-bold text-blue-900 mb-3">Melhor para Comércio</h3>
          <p className="text-blue-900 mb-3">
            <strong>Stone ou InfinitePay</strong> - Maquininha com taxa competitiva e liquidação rápida.
          </p>
        </div>
      </section>

      {/* Comparison Criteria */}
      <section className="border rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Critérios de Escolha</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Taxa Mensal</h4>
            <p className="text-gray-700 text-sm">
              Quanto você paga mensalmente pela conta. Algumas são gratuitas.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Transferências</h4>
            <p className="text-gray-700 text-sm">
              Não pague por cada TED. Muitos bancos agora oferecem ilimitadas.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Maquininha</h4>
            <p className="text-gray-700 text-sm">
              Se aceita cartão, escolha um banco com maquininha integrada.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Crédito</h4>
            <p className="text-gray-700 text-sm">
              Limite automático e pré-aprovado facilita empréstimos e antecipação.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Próximos Passos</h2>
        <ul className="space-y-2 text-green-900">
          <li>✓ <a href="/guias/abrir-conta-pj-mei" className="font-semibold text-blue-600 hover:underline">Leia nosso guia de abertura de conta</a></li>
          <li>✓ <a href="/calculadora/das" className="font-semibold text-blue-600 hover:underline">Calcule seu DAS mensal</a></li>
          <li>✓ Compare e escolha a melhor opção para seu negócio</li>
        </ul>
      </div>
    </div>
  );
}
