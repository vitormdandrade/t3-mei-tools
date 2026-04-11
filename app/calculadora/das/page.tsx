'use client';

import { useState, useMemo } from 'react';
import dasRates from '@/data/das-rates.json';

type Year = '2024' | '2025' | '2026';
type Category = 'commerce' | 'services' | 'industry';

export default function DASCalculator() {
  const [year, setYear] = useState<Year>('2026');
  const [category, setCategory] = useState<Category>('commerce');

  const rates = useMemo(() => {
    const yearData = dasRates[year as keyof typeof dasRates];
    return yearData[category as keyof typeof yearData] as any || yearData.commerce;
  }, [year, category]);

  const categoryName = {
    commerce: 'Comércio',
    services: 'Serviços',
    industry: 'Indústria',
  }[category];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Calculadora DAS MEI</h1>
        <p className="text-gray-600">
          Calcule o valor mensal do DAS (Documento de Arrecadação do Simples Nacional) conforme sua categoria de atividade.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>O que é DAS?</strong> É a contribuição mensal que todo MEI precisa pagar. Inclui INSS (5% do salário mínimo), ICMS (se comércio) e ISS (se serviços).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dados da Simulação</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Ano
              </label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value as Year)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026 (Atual)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Categoria de Atividade
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="commerce">Comércio</option>
                <option value="services">Serviços</option>
                <option value="industry">Indústria</option>
              </select>
              <p className="text-xs text-gray-500 mt-2">
                Verifique a categoria correta da sua atividade junto à Prefeitura.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Salário Mínimo {year}:</strong>
              </p>
              <p className="text-2xl font-bold text-green-600">
                R$ {(dasRates[year as keyof typeof dasRates].minimumWage).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div className="border rounded-lg p-6 bg-gradient-to-br from-green-50 to-blue-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Valor do DAS {year}</h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <p className="text-sm text-gray-600 mb-1">INSS (5% do salário mínimo)</p>
              <p className="text-2xl font-bold text-green-600">
                R$ {rates.inss.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            {rates.icms > 0 && (
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-gray-600 mb-1">ICMS (Comércio - Estadual)</p>
                <p className="text-2xl font-bold text-blue-600">
                  R$ {rates.icms.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            )}

            {rates.iss > 0 && (
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="text-sm text-gray-600 mb-1">ISS (Serviços - Municipal)</p>
                <p className="text-2xl font-bold text-purple-600">
                  R$ {rates.iss.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            )}

            <div className="bg-white rounded-lg p-4 border-2 border-green-500">
              <p className="text-sm text-gray-600 mb-1">DAS Mensal Total</p>
              <p className="text-4xl font-bold text-green-600">
                R$ {rates.total.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-700">
                <strong>Anual:</strong> R$ {(rates.total * 12).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Dicas Importantes</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• O DAS vence no dia 20 do mês seguinte ao mês de referência (ex: DAS de jan vence em 20/fev)</li>
            <li>• Se o dia 20 cair em sábado, domingo ou feriado nacional, o vencimento vai para o próximo dia útil</li>
            <li>• Pode ser pago via Pix, boleto, cartão ou débito automático pelo Portal do Simples Nacional</li>
            <li>• A contribuição ao INSS acumula para aposentadoria, auxílio-doença e outros benefícios</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Resumo por Categoria</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-gray-900">Comércio</p>
              <p className="text-gray-600">INSS + ICMS (R$ 1/mês)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Serviços</p>
              <p className="text-gray-600">INSS + ISS (R$ 5/mês)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Indústria</p>
              <p className="text-gray-600">INSS + ICMS (R$ 1/mês)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-green-900 mb-2">Próximos Passos</h3>
        <p className="text-green-800 mb-4">
          Agora que você sabe quanto é o DAS, confira também:
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="/calendario-das" className="text-blue-600 font-semibold hover:underline">
            → Calendário DAS 2026 (todas as datas)
          </a>
          <a href="/calculadora/faturamento" className="text-blue-600 font-semibold hover:underline">
            → Limite de faturamento
          </a>
          <a href="/guias/das-mei-2026" className="text-blue-600 font-semibold hover:underline">
            → Guia completo DAS 2026
          </a>
        </div>
      </div>
    </div>
  );
}
