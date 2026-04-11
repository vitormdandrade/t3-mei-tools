'use client';

import { useState, useMemo } from 'react';

function fmt(n: number) {
  return n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function PrecoPorHoraCalculator() {
  const [salario, setSalario] = useState('');
  const [horasMes, setHorasMes] = useState('160');
  const [feriasDias, setFeriasDias] = useState('30');
  const [despesas, setDespesas] = useState('');

  const result = useMemo(() => {
    const s = parseFloat(salario.replace(',', '.'));
    const h = parseFloat(horasMes);
    const f = parseFloat(feriasDias) || 0;
    const d = parseFloat(despesas.replace(',', '.')) || 0;

    if (!s || !h || h <= 0) return null;

    // Adjust for vacation: total working months minus vacation fraction
    const mesesEfetivos = 12 - f / 30;
    const horasAno = h * mesesEfetivos;
    const horasMesMedio = horasAno / 12;

    // DAS cost (commerce baseline, lowest estimate)
    const dasMensal = 75.9;

    // Gross needed per month
    const totalMensal = s + d + dasMensal;

    // Min hourly rate
    const valorMinimo = totalMensal / horasMesMedio;

    // Recommended = 20% buffer for idle time, sick days, etc.
    const valorRecomendado = valorMinimo * 1.2;

    // Daily rate (8h)
    const diaria = valorRecomendado * 8;

    return {
      valorMinimo,
      valorRecomendado,
      diaria,
      totalMensal,
      dasMensal,
      horasMesMedio,
    };
  }, [salario, horasMes, feriasDias, despesas]);

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>Como funciona:</strong> Divida tudo que você precisa ganhar no mês
          (salário + despesas + DAS) pelo número de horas que você realmente trabalha.
          Simples, mas poucos MEIs fazem esse cálculo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Seus Dados</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Quanto você quer ganhar por mês líquido (R$)
              </label>
              <input
                type="number"
                min="0"
                step="100"
                placeholder="Ex: 5000"
                value={salario}
                onChange={(e) => setSalario(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Horas de trabalho por mês
              </label>
              <select
                value={horasMes}
                onChange={(e) => setHorasMes(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="80">80h/mês (meio período)</option>
                <option value="120">120h/mês (6h/dia)</option>
                <option value="160">160h/mês (8h/dia, padrão)</option>
                <option value="176">176h/mês (44h/semana)</option>
                <option value="200">200h/mês (intenso)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Dias de férias por ano
              </label>
              <select
                value={feriasDias}
                onChange={(e) => setFeriasDias(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="0">Sem férias</option>
                <option value="15">15 dias</option>
                <option value="30">30 dias (1 mês)</option>
                <option value="45">45 dias</option>
                <option value="60">60 dias (2 meses)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Despesas mensais do negócio (R$) <span className="text-gray-400 font-normal">opcional</span>
              </label>
              <input
                type="number"
                min="0"
                step="50"
                placeholder="Ex: 500 (internet, material, software)"
                value={despesas}
                onChange={(e) => setDespesas(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">
                Internet, material de trabalho, softwares, transporte, etc.
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="border rounded-lg p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Seu Preço por Hora</h2>

          {!result ? (
            <div className="flex items-center justify-center h-48 text-gray-400 text-sm">
              Preencha o salário desejado para ver o resultado
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-gray-500 mb-1">Valor Mínimo por Hora</p>
                <p className="text-4xl font-bold text-blue-600">
                  R$ {fmt(result.valorMinimo)}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Abaixo disso você trabalha no prejuízo
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-indigo-500">
                <p className="text-sm text-gray-500 mb-1">Valor Recomendado/Hora</p>
                <p className="text-4xl font-bold text-indigo-600">
                  R$ {fmt(result.valorRecomendado)}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  +20% para cobrir dias improdutivos e imprevistos
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="text-sm text-gray-500 mb-1">Diária (8h)</p>
                <p className="text-3xl font-bold text-purple-600">
                  R$ {fmt(result.diaria)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Breakdown */}
      {result && (
        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Como foi calculado</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-2 text-gray-600">Salário líquido desejado</td>
                  <td className="py-2 text-right font-mono text-gray-900">R$ {fmt(parseFloat(salario.replace(',', '.')))}</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-600">DAS MEI (mínimo)</td>
                  <td className="py-2 text-right font-mono text-gray-900">R$ {fmt(result.dasMensal)}</td>
                </tr>
                {parseFloat(despesas.replace(',', '.')) > 0 && (
                  <tr>
                    <td className="py-2 text-gray-600">Despesas do negócio</td>
                    <td className="py-2 text-right font-mono text-gray-900">R$ {fmt(parseFloat(despesas.replace(',', '.')))}</td>
                  </tr>
                )}
                <tr className="font-semibold border-t border-gray-300">
                  <td className="py-2 text-gray-900">Total necessário/mês</td>
                  <td className="py-2 text-right font-mono text-gray-900">R$ {fmt(result.totalMensal)}</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-600">Horas efetivas/mês</td>
                  <td className="py-2 text-right font-mono text-gray-900">{fmt(result.horasMesMedio)}h</td>
                </tr>
                <tr className="font-semibold border-t-2 border-blue-400">
                  <td className="py-2 text-blue-700">Valor mínimo/hora</td>
                  <td className="py-2 text-right font-mono text-blue-700">R$ {fmt(result.valorMinimo)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Dicas ao Precificar</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Nunca use apenas o valor mínimo como preço — ele cobre custos mas não deixa margem para crescer</li>
          <li>• O valor recomendado (+20%) cobre dias doentes, feriados e semanas com poucos clientes</li>
          <li>• Para projetos maiores, negocie o valor total do projeto, não hora a hora</li>
          <li>• Revise seu preço a cada 6 meses conforme o custo de vida sobe</li>
          <li>• Freelancers experientes cobram 2–4× o valor mínimo — o mercado paga por experiência</li>
        </ul>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-base font-bold text-green-900 mb-3">Veja também</h3>
        <div className="flex gap-4 flex-wrap">
          <a href="/calculadora/margem-de-lucro" className="text-blue-600 font-semibold hover:underline text-sm">
            → Calculadora Margem de Lucro
          </a>
          <a href="/calculadora/das" className="text-blue-600 font-semibold hover:underline text-sm">
            → Calculadora DAS
          </a>
          <a href="/calculadora/mei-vs-me" className="text-blue-600 font-semibold hover:underline text-sm">
            → MEI vs ME vs Simples
          </a>
        </div>
      </div>
    </div>
  );
}
