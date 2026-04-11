'use client';

import { useState, useMemo } from 'react';

function fmt(n: number) {
  return n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function MargemCalculator() {
  const [custo, setCusto] = useState('');
  const [preco, setPreco] = useState('');

  const result = useMemo(() => {
    const c = parseFloat(custo.replace(',', '.'));
    const p = parseFloat(preco.replace(',', '.'));
    if (!c || !p || p <= 0) return null;

    const lucro = p - c;
    const margem = (lucro / p) * 100;
    const markup = p / c;
    return { lucro, margem, markup, c, p };
  }, [custo, preco]);

  const margemLabel = result
    ? result.margem < 0
      ? { text: 'Prejuízo', color: 'text-red-600', bg: 'bg-red-50 border-red-200' }
      : result.margem < 15
      ? { text: 'Margem baixa — revise os custos', color: 'text-orange-600', bg: 'bg-orange-50 border-orange-200' }
      : result.margem < 30
      ? { text: 'Margem moderada', color: 'text-yellow-600', bg: 'bg-yellow-50 border-yellow-200' }
      : { text: 'Margem saudável ✓', color: 'text-green-600', bg: 'bg-green-50 border-green-200' }
    : null;

  return (
    <div className="space-y-8">
      {/* Info banner */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-sm text-green-900">
          <strong>Fórmula:</strong> Margem (%) = ((Preço − Custo) ÷ Preço) × 100.
          Mostra quantos centavos de cada real vendido viram lucro real.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Dados do Produto ou Serviço</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Custo Total (R$)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="Ex: 35,00"
                value={custo}
                onChange={(e) => setCusto(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Inclua: matéria-prima, embalagem, frete, mão de obra, despesas diretas
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preço de Venda (R$)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="Ex: 80,00"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                O valor que você cobra do cliente final
              </p>
            </div>

            {result && (
              <div className={`rounded-lg p-4 border ${margemLabel!.bg}`}>
                <p className={`font-semibold ${margemLabel!.color}`}>{margemLabel!.text}</p>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="border rounded-lg p-6 bg-gradient-to-br from-green-50 to-emerald-50">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Resultado</h2>

          {!result ? (
            <div className="flex items-center justify-center h-40 text-gray-400 text-sm">
              Preencha custo e preço para ver o resultado
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="text-sm text-gray-500 mb-1">Margem de Lucro</p>
                <p className={`text-4xl font-bold ${result.margem >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {fmt(result.margem)}%
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-emerald-200">
                <p className="text-sm text-gray-500 mb-1">Lucro por Venda</p>
                <p className={`text-3xl font-bold ${result.lucro >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                  R$ {fmt(result.lucro)}
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-teal-200">
                <p className="text-sm text-gray-500 mb-1">Markup</p>
                <p className="text-3xl font-bold text-teal-600">
                  {fmt(result.markup)}x
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Você cobra {fmt(result.markup)}× o custo
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reference table */}
      <div className="border rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Referência: O que é uma boa margem?</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 text-gray-600">Margem</th>
                <th className="text-left py-2 text-gray-600">Avaliação</th>
                <th className="text-left py-2 text-gray-600">O que fazer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-2 font-mono text-red-600">&lt; 0%</td>
                <td className="py-2 text-red-600 font-semibold">Prejuízo</td>
                <td className="py-2 text-gray-600">Reajuste urgente de preço ou corte de custos</td>
              </tr>
              <tr>
                <td className="py-2 font-mono text-orange-600">0% – 15%</td>
                <td className="py-2 text-orange-600 font-semibold">Baixa</td>
                <td className="py-2 text-gray-600">Funciona, mas pouco espaço para erro ou crescimento</td>
              </tr>
              <tr>
                <td className="py-2 font-mono text-yellow-600">15% – 30%</td>
                <td className="py-2 text-yellow-600 font-semibold">Moderada</td>
                <td className="py-2 text-gray-600">Razoável — otimize custos para melhorar</td>
              </tr>
              <tr>
                <td className="py-2 font-mono text-green-600">&gt; 30%</td>
                <td className="py-2 text-green-600 font-semibold">Saudável</td>
                <td className="py-2 text-gray-600">Bom — você tem espaço para crescer e investir</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Example */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Exemplo Prático</h3>
        <p className="text-gray-700 text-sm">
          Maria vende bolos artesanais. Custo total por bolo (ingredientes + embalagem + gás): <strong>R$35,00</strong>.
          Preço de venda: <strong>R$80,00</strong>.
          <br /><br />
          Margem = ((80 − 35) ÷ 80) × 100 = <strong>56,3%</strong>. Lucro por bolo: <strong>R$45,00</strong>. Markup: <strong>2,3×</strong>.
          Se vender 60 bolos/mês, o lucro líquido é R$2.700.
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-base font-bold text-green-900 mb-3">Veja também</h3>
        <div className="flex gap-4 flex-wrap">
          <a href="/calculadora/preco-por-hora" className="text-blue-600 font-semibold hover:underline text-sm">
            → Calculadora Preço por Hora
          </a>
          <a href="/calculadora/das" className="text-blue-600 font-semibold hover:underline text-sm">
            → Calculadora DAS
          </a>
          <a href="/calculadora/faturamento" className="text-blue-600 font-semibold hover:underline text-sm">
            → Limite de Faturamento
          </a>
        </div>
      </div>
    </div>
  );
}
