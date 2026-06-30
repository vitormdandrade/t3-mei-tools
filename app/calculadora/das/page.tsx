'use client';

import { useState, useMemo } from 'react';
import dasRates from '@/data/das-rates.json';
import LeadCaptureForm from '@/components/LeadCaptureForm';

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
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Calculadora DAS MEI</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Calcule o valor mensal do DAS (Documento de Arrecadação do Simples Nacional) conforme sua categoria de atividade.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-900 dark:text-blue-200">
          <strong>O que é DAS?</strong> É a contribuição mensal que todo MEI precisa pagar. Inclui INSS (5% do salário mínimo), ICMS (se comércio) e ISS (se serviços).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="border dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Dados da Simulação</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Ano
              </label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value as Year)}
                className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026 (Atual)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Categoria de Atividade
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="w-full px-4 py-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="commerce">Comércio</option>
                <option value="services">Serviços</option>
                <option value="industry">Indústria</option>
              </select>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Verifique a categoria correta da sua atividade junto à Prefeitura.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong>Salário Mínimo {year}:</strong>
              </p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                R$ {(dasRates[year as keyof typeof dasRates].minimumWage).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div className="border dark:border-gray-700 rounded-lg p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/40 dark:to-blue-950/40">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Valor do DAS {year}</h2>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">INSS (5% do salário mínimo)</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                R$ {rates.inss.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            {rates.icms > 0 && (
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">ICMS (Comércio - Estadual)</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  R$ {rates.icms.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            )}

            {rates.iss > 0 && (
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">ISS (Serviços - Municipal)</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  R$ {rates.iss.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            )}

            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border-2 border-green-500 dark:border-green-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">DAS Mensal Total</p>
              <p className="text-4xl font-bold text-green-600 dark:text-green-400">
                R$ {rates.total.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-700 dark:text-gray-300">
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
        <div className="border dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Dicas Importantes</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
            <li>• O DAS vence no dia 20 do mês seguinte ao mês de referência (ex: DAS de jan vence em 20/fev)</li>
            <li>• Se o dia 20 cair em sábado, domingo ou feriado nacional, o vencimento vai para o próximo dia útil</li>
            <li>• Pode ser pago via Pix, boleto, cartão ou débito automático pelo Portal do Simples Nacional</li>
            <li>• A contribuição ao INSS acumula para aposentadoria, auxílio-doença e outros benefícios</li>
          </ul>
        </div>

        <div className="border dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Resumo por Categoria</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Comércio</p>
              <p className="text-gray-600 dark:text-gray-400">INSS + ICMS (R$ 1/mês)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Serviços</p>
              <p className="text-gray-600 dark:text-gray-400">INSS + ISS (R$ 5/mês)</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Indústria</p>
              <p className="text-gray-600 dark:text-gray-400">INSS + ICMS (R$ 1/mês)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Capture — contador orçamento */}
      <LeadCaptureForm
        source="das"
        contextMessage="Depois de calcular seu DAS, que tal receber orçamento de contadores para cuidar da parte fiscal do seu MEI?"
      />

      {/* Affiliate CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white">
        <h3 className="text-lg font-bold mb-2">💳 Precisa de uma conta PJ para pagar o DAS?</h3>
        <p className="text-blue-100 mb-4 text-sm">
          Compare as melhores contas digitais PJ gratuitas para MEI: sem tarifas, Pix ilimitado e cartão de crédito.
        </p>
        <a
          href="/melhores/melhores-contas-pj-mei"
          className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition shadow-md"
        >
          Ver Melhores Contas PJ →
        </a>
      </div>

      <div className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h3 className="text-lg font-bold text-green-900 dark:text-green-200 mb-2">Próximos Passos</h3>
        <p className="text-green-800 dark:text-green-300 mb-4">
          Agora que você sabe quanto é o DAS, confira também:
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="/calendario-das" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            → Calendário DAS 2026 (todas as datas)
          </a>
          <a href="/calculadora/faturamento" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            → Limite de faturamento
          </a>
          <a href="/guias/das-mei-2026" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            → Guia completo DAS 2026
          </a>
        </div>
      </div>
    </div>
  );
}
