'use client';

import { useState } from 'react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function INSSAutonomoCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(3000);
  const [contributionClass, setContributionClass] = useState<'5' | '11' | '20'>('5');

  const rate = parseFloat(contributionClass) / 100;
  const monthlyInss = monthlyIncome * rate;
  const annualInss = monthlyInss * 12;

  // Contribution ceiling (aproximado para 2026)
  const contributionCeiling = 5000;
  const ceilingAnnual = contributionCeiling * 12;

  // Maximum benefit (salário mínimo base)
  const minimumWage = 1518;
  const maximumBenefit = monthlyIncome > contributionCeiling ? contributionCeiling : monthlyIncome;

  const formatCurrency = (value: number) =>
    value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const benefits = {
    '5': {
      name: 'Alíquota Reduzida (Microempreendedor)',
      aposentadoriaIdade: false,
      aposentadoriaTempoContribuicao: false,
      auxiliodoenca: true,
      salarioMaternidade: true,
      pensaoPorMorte: true,
      auxilioAcidente: false,
    },
    '11': {
      name: 'Contribuinte Individual',
      aposentadoriaIdade: true,
      aposentadoriaTempoContribuicao: true,
      auxiliodoenca: true,
      salarioMaternidade: true,
      pensaoPorMorte: true,
      auxilioAcidente: true,
    },
    '20': {
      name: 'Contribuinte Individual Opcional',
      aposentadoriaIdade: true,
      aposentadoriaTempoContribuicao: true,
      auxiliodoenca: true,
      salarioMaternidade: true,
      pensaoPorMorte: true,
      auxilioAcidente: true,
    },
  };

  const currentBenefit = benefits[contributionClass];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Calculadora INSS - Autônomo/Freelancer</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Calcule sua contribuição ao INSS como autônomo e conheça os benefícios disponíveis.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-900 dark:text-blue-200">
          <strong>Importante:</strong> Autônomos e freelancers não registrados como MEI ou PJ devem contribuir como contribuintes individuais.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 border dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Simulação de Contribuição</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Renda Mensal
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-600 dark:text-gray-400">R$</span>
                <input
                  type="number"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(parseInt(e.target.value) || 0)}
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  step="100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Tipo de Contribuição
              </label>
              <div className="space-y-3">
                <label className="flex items-center p-3 border dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900" onClick={() => setContributionClass('5')}>
                  <input
                    type="radio"
                    name="contribution"
                    value="5"
                    checked={contributionClass === '5'}
                    onChange={(e) => setContributionClass(e.target.value as '5' | '11' | '20')}
                    className="mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-gray-100">5% - Microempreendedor (MEI)</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Categoria reduzida, poucos benefícios</p>
                  </div>
                </label>

                <label className="flex items-center p-3 border dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900" onClick={() => setContributionClass('11')}>
                  <input
                    type="radio"
                    name="contribution"
                    value="11"
                    checked={contributionClass === '11'}
                    onChange={(e) => setContributionClass(e.target.value as '5' | '11' | '20')}
                    className="mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-gray-100">11% - Contribuinte Individual</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Padrão para autônomos, maioria dos benefícios</p>
                  </div>
                </label>

                <label className="flex items-center p-3 border dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900" onClick={() => setContributionClass('20')}>
                  <input
                    type="radio"
                    name="contribution"
                    value="20"
                    checked={contributionClass === '20'}
                    onChange={(e) => setContributionClass(e.target.value as '5' | '11' | '20')}
                    className="mr-3"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-gray-100">20% - Contribuinte Voluntário/Autônomo</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Alíquota máxima, para aumentar aposentadoria</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-sm text-yellow-900 dark:text-yellow-200">
                <strong>Teto de Contribuição:</strong> {formatCurrency(contributionCeiling)}/mês ou {formatCurrency(ceilingAnnual)}/ano
              </p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="border dark:border-gray-700 rounded-lg p-6 bg-gradient-to-br from-accent-soft to-surface-alt dark:from-accent-soft/20 dark:to-surface h-fit">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Sua Contribuição</h2>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Contribuição Mensal ({contributionClass}%)</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {formatCurrency(monthlyInss)}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-border">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Contribuição Anual</p>
              <p className="text-2xl font-bold text-accent">
                {formatCurrency(annualInss)}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Alíquota</p>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {contributionClass}%
              </p>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/40 rounded-lg p-3 text-center">
              <p className="text-xs text-blue-900 dark:text-blue-200 mb-1">Valor para 12 meses</p>
              <p className="text-lg font-bold text-blue-900 dark:text-blue-200">
                {formatCurrency(annualInss)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="border dark:border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Benefícios Disponíveis - {currentBenefit.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg border-2 ${currentBenefit.aposentadoriaIdade ? 'border-accent dark:border-accent bg-surface-alt dark:bg-accent-soft/30' : 'border-red-400 dark:border-red-700 bg-red-50 dark:bg-red-950/40'}`}>
            <p className={`font-semibold ${currentBenefit.aposentadoriaIdade ? 'text-foreground' : 'text-red-900 dark:text-red-200'}`}>
              {currentBenefit.aposentadoriaIdade ? '✓' : '✗'} Aposentadoria por Idade
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Aos 62 anos (mulher) ou 65 anos (homem)</p>
          </div>

          <div className={`p-4 rounded-lg border-2 ${currentBenefit.aposentadoriaTempoContribuicao ? 'border-accent dark:border-accent bg-surface-alt dark:bg-accent-soft/30' : 'border-red-400 dark:border-red-700 bg-red-50 dark:bg-red-950/40'}`}>
            <p className={`font-semibold ${currentBenefit.aposentadoriaTempoContribuicao ? 'text-foreground' : 'text-red-900 dark:text-red-200'}`}>
              {currentBenefit.aposentadoriaTempoContribuicao ? '✓' : '✗'} Aposentadoria por Tempo
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Com 30 anos (mulher) ou 35 anos (homem)</p>
          </div>

          <div className={`p-4 rounded-lg border-2 ${currentBenefit.auxiliodoenca ? 'border-accent dark:border-accent bg-surface-alt dark:bg-accent-soft/30' : 'border-red-400 dark:border-red-700 bg-red-50 dark:bg-red-950/40'}`}>
            <p className={`font-semibold ${currentBenefit.auxiliodoenca ? 'text-foreground' : 'text-red-900 dark:text-red-200'}`}>
              {currentBenefit.auxiliodoenca ? '✓' : '✗'} Auxílio-Doença
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Quando incapacitado para trabalhar</p>
          </div>

          <div className={`p-4 rounded-lg border-2 ${currentBenefit.salarioMaternidade ? 'border-accent dark:border-accent bg-surface-alt dark:bg-accent-soft/30' : 'border-red-400 dark:border-red-700 bg-red-50 dark:bg-red-950/40'}`}>
            <p className={`font-semibold ${currentBenefit.salarioMaternidade ? 'text-foreground' : 'text-red-900 dark:text-red-200'}`}>
              {currentBenefit.salarioMaternidade ? '✓' : '✗'} Salário-Maternidade
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Durante gestação e pós-parto</p>
          </div>

          <div className={`p-4 rounded-lg border-2 ${currentBenefit.pensaoPorMorte ? 'border-accent dark:border-accent bg-surface-alt dark:bg-accent-soft/30' : 'border-red-400 dark:border-red-700 bg-red-50 dark:bg-red-950/40'}`}>
            <p className={`font-semibold ${currentBenefit.pensaoPorMorte ? 'text-foreground' : 'text-red-900 dark:text-red-200'}`}>
              {currentBenefit.pensaoPorMorte ? '✓' : '✗'} Pensão por Morte
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Para dependentes em caso de falecimento</p>
          </div>

          <div className={`p-4 rounded-lg border-2 ${currentBenefit.auxilioAcidente ? 'border-accent dark:border-accent bg-surface-alt dark:bg-accent-soft/30' : 'border-red-400 dark:border-red-700 bg-red-50 dark:bg-red-950/40'}`}>
            <p className={`font-semibold ${currentBenefit.auxilioAcidente ? 'text-foreground' : 'text-red-900 dark:text-red-200'}`}>
              {currentBenefit.auxilioAcidente ? '✓' : '✗'} Auxílio-Acidente
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Quando reduz capacidade laborativa</p>
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div className="border dark:border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Comparativo de Alíquotas</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-700">
              <tr>
                <th className="px-4 py-3 text-left font-bold">Alíquota</th>
                <th className="px-4 py-3 text-center font-bold">Categoria</th>
                <th className="px-4 py-3 text-center font-bold">Para Renda R$ 3.000</th>
                <th className="px-4 py-3 text-center font-bold">Benefícios</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-bold">5%</td>
                <td className="px-4 py-3">MEI</td>
                <td className="px-4 py-3 text-center">{formatCurrency(3000 * 0.05)}</td>
                <td className="px-4 py-3 text-center text-sm">Mínimos</td>
              </tr>
              <tr className="border-b dark:border-gray-700 bg-blue-50 dark:bg-blue-950/40">
                <td className="px-4 py-3 font-bold text-blue-600 dark:text-blue-400">11%</td>
                <td className="px-4 py-3 text-blue-600 dark:text-blue-400">Contribuinte Individual</td>
                <td className="px-4 py-3 text-center text-blue-600 dark:text-blue-400 font-bold">{formatCurrency(3000 * 0.11)}</td>
                <td className="px-4 py-3 text-center text-sm text-blue-600 dark:text-blue-400">Maioria</td>
              </tr>
              <tr className="border-b dark:border-gray-700">
                <td className="px-4 py-3 font-bold">20%</td>
                <td className="px-4 py-3">Voluntário/Autônomo</td>
                <td className="px-4 py-3 text-center">{formatCurrency(3000 * 0.2)}</td>
                <td className="px-4 py-3 text-center text-sm">Máximos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border dark:border-gray-700 rounded-lg p-6 bg-blue-50 dark:bg-blue-950/40">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-200 mb-4">Dicas</h3>
          <ul className="space-y-2 text-blue-900 dark:text-blue-200 text-sm">
            <li>• Guarde todos os recibos de pagamento do INSS</li>
            <li>• Verifique sua contribuição no myINSS</li>
            <li>• Mantenha sua contribuição em dia</li>
            <li>• Contribuinte a partir de 16 anos</li>
          </ul>
        </div>

        <div className="border dark:border-gray-700 rounded-lg p-6 bg-surface-alt dark:bg-accent-soft/30">
          <h3 className="text-lg font-bold text-foreground mb-4">MEI vs Autônomo</h3>
          <ul className="space-y-2 text-foreground text-sm">
            <li>• MEI: 5% com CNPJ (até R$ 85k/ano)</li>
            <li>• Autônomo: 11-20% sem CNPJ</li>
            <li>• MEI tem mais benefícios acessórios</li>
            <li>• Autônomo pode contribuir como voluntário</li>
          </ul>
        </div>
      </div>

      {/* Lead Capture — contador orçamento */}
      <LeadCaptureForm
        source="inss"
        contextMessage="Autônomo pensando em virar MEI? Receba orçamento de contadores e veja qual regime vale mais a pena para você."
      />

      <div className="bg-surface-alt dark:bg-accent-soft/30 border border-border rounded-lg p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">Próximos Passos</h3>
        <div className="flex gap-4 flex-wrap text-sm">
          <a href="/calculadora/das" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            → Calculadora DAS MEI
          </a>
          <a href="/guias/como-abrir-mei" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            → Como Abrir MEI
          </a>
        </div>
      </div>
    </div>
  );
}
