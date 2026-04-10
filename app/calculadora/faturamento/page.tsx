'use client';

import { useState, useMemo } from 'react';
import meiLimits from '@/data/mei-limits.json';

type Year = 2024 | 2025 | 2026;

interface MonthlyRevenue {
  month: string;
  amount: number;
}

export default function RevenueCalculator() {
  const [year, setYear] = useState<Year>(2026);
  const [monthlyRevenues, setMonthlyRevenues] = useState<MonthlyRevenue[]>([
    { month: 'Janeiro', amount: 0 },
    { month: 'Fevereiro', amount: 0 },
    { month: 'Março', amount: 0 },
  ]);

  const yearData = useMemo(() => {
    return meiLimits.limits.find((l) => l.year === year);
  }, [year]);

  const annualLimit = yearData?.meiAnnualLimit || 85000;

  const total = useMemo(() => {
    return monthlyRevenues.reduce((sum, item) => sum + (item.amount || 0), 0);
  }, [monthlyRevenues]);

  const remaining = Math.max(0, annualLimit - total);
  const percentage = (total / annualLimit) * 100;
  const monthCount = monthlyRevenues.filter((m) => m.amount > 0).length;
  const monthlyAverage = monthCount > 0 ? total / monthCount : 0;
  const yearProjection = monthlyAverage * 12;

  const handleRevenueChange = (index: number, value: number) => {
    const updated = [...monthlyRevenues];
    updated[index].amount = value;
    setMonthlyRevenues(updated);
  };

  const addMonth = () => {
    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
    if (monthlyRevenues.length < 12) {
      setMonthlyRevenues([
        ...monthlyRevenues,
        { month: months[monthlyRevenues.length], amount: 0 },
      ]);
    }
  };

  const removeMonth = (index: number) => {
    setMonthlyRevenues(monthlyRevenues.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Calculadora de Faturamento MEI</h1>
        <p className="text-gray-600">
          Acompanhe seu faturamento anual e saiba se você está próximo do limite MEI.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>Limite MEI 2026:</strong> R$ 85.000 por ano. Ao ultrapassar, você precisa migrar para Microempresa ou Simples Nacional.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 border rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Faturamento Mensal</h2>
            <select
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value) as Year)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value={2024}>2024</option>
              <option value={2025}>2025</option>
              <option value={2026}>2026</option>
            </select>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {monthlyRevenues.map((item, index) => (
              <div key={index} className="flex gap-3 items-center">
                <label className="w-24 text-sm font-semibold text-gray-700">
                  {item.month}
                </label>
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-2 text-gray-600">R$</span>
                  <input
                    type="number"
                    value={item.amount || ''}
                    onChange={(e) => handleRevenueChange(index, parseFloat(e.target.value) || 0)}
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0,00"
                    min="0"
                    step="100"
                  />
                </div>
                {monthlyRevenues.length > 1 && (
                  <button
                    onClick={() => removeMonth(index)}
                    className="text-red-600 hover:text-red-700 font-semibold"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>

          {monthlyRevenues.length < 12 && (
            <button
              onClick={addMonth}
              className="mt-4 w-full bg-blue-100 text-blue-700 font-semibold py-2 rounded-lg hover:bg-blue-200"
            >
              + Adicionar Mês
            </button>
          )}
        </div>

        {/* Summary Section */}
        <div className="border rounded-lg p-6 bg-gradient-to-br from-green-50 to-blue-50 h-fit">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Resumo</h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Total Faturado</p>
              <p className="text-2xl font-bold text-green-600">
                R$ {total.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2">Limite MEI {year}</p>
              <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    percentage <= 90
                      ? 'bg-green-500'
                      : percentage <= 100
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                  }`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
              <p className="text-xs text-gray-600 mt-2">
                {percentage.toFixed(1)}% do limite
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Ainda pode faturar</p>
              <p className={`text-2xl font-bold ${remaining > 0 ? 'text-green-600' : 'text-red-600'}`}>
                R$ {remaining.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-gray-600">Média Mensal</p>
              <p className="text-lg font-bold text-blue-600">
                R$ {monthlyAverage.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <p className="text-xs text-gray-600">Projeção Anual</p>
              <p className={`text-lg font-bold ${yearProjection > annualLimit ? 'text-red-600' : 'text-purple-600'}`}>
                R$ {yearProjection.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>

          {yearProjection > annualLimit && (
            <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-900">
                <strong>Atenção:</strong> Sua projeção anual ultrapassa o limite de MEI. Considere migrar para outro regime.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Limites Históricos</h3>
          <div className="space-y-2 text-sm text-gray-600">
            {meiLimits.limits.map((limit) => (
              <div key={limit.year} className="flex justify-between">
                <span>{limit.year}:</span>
                <strong>R$ {limit.meiAnnualLimit.toLocaleString('pt-BR')}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">O que Fazer?</h3>
          <div className="space-y-2 text-sm">
            <div>
              <p className="font-semibold text-green-600">Até 80% do limite:</p>
              <p className="text-gray-600">Continue como MEI normalmente</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-600">80-100% do limite:</p>
              <p className="text-gray-600">Comece a planejar a migração</p>
            </div>
            <div>
              <p className="font-semibold text-red-600">Acima do limite:</p>
              <p className="text-gray-600">Você é obrigado a migrar legalmente</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-green-900 mb-2">Saiba Mais</h3>
        <div className="flex gap-4 flex-wrap text-sm">
          <a href="/guias/limite-faturamento-mei" className="text-blue-600 font-semibold hover:underline">
            → Guia: Limite de Faturamento
          </a>
          <a href="/calculadora/mei-vs-me" className="text-blue-600 font-semibold hover:underline">
            → Comparar MEI vs ME
          </a>
        </div>
      </div>
    </div>
  );
}
