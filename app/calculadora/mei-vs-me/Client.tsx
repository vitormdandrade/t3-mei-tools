'use client';

import { useState } from 'react';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function MeiVsMeCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(3000);
  const [employees, setEmployees] = useState(0);
  const [category, setCategory] = useState<'commerce' | 'services'>('commerce');

  // Calculate MEI costs (fixed)
  const meiMonthlyDas = category === 'services' ? 80.90 : 76.90;
  const meiAnnualDas = meiMonthlyDas * 12;
  const meiMonthlyTotal = meiMonthlyDas;

  // Calculate Simples Nacional (approximately)
  const annualRevenue = monthlyRevenue * 12;
  const simplesRate = category === 'commerce' ? 0.06 : 0.15; // Simplified rates
  const simplesMonthlyTax = monthlyRevenue * simplesRate;
  const simplesAnnualTax = annualRevenue * simplesRate;
  const simplesMonthlyTotal = simplesMonthlyTax;

  // Calculate ME (Simples Nacional, higher bracket)
  const meRate = category === 'commerce' ? 0.125 : 0.25; // Simplified
  const meMonthlyTax = monthlyRevenue * meRate;
  const meAnnualTax = annualRevenue * meRate;
  const meMonthlyTotal = meMonthlyTax;

  // Employee cost (approximate)
  const employeeMonthly = employees * 1500; // Rough estimate with taxes
  const employeeAnnual = employeeMonthly * 12;

  // Simples with employee
  const simplesWithEmployeeMonthly = simplesMonthlyTax + employeeMonthly;
  const simplesWithEmployeeAnnual = simplesAnnualTax + employeeAnnual;

  // ME with employee
  const meWithEmployeeMonthly = meMonthlyTax + employeeMonthly;
  const meWithEmployeeAnnual = meAnnualTax + employeeAnnual;

  const formatCurrency = (value: number) =>
    value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Comparar: MEI vs ME vs Simples Nacional</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Compare impostos, custos e benefícios dos três regimes para escolher o melhor para seu negócio.
        </p>
      </div>

      <div className="bg-accent-soft border border-accent rounded-lg p-4">
        <p className="text-sm text-foreground">
          <strong>Dica:</strong> Esta calculadora usa estimativas. Consulte um contador para situações específicas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Faturamento Mensal
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-600 dark:text-gray-400">R$</span>
            <input
              type="number"
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(parseInt(e.target.value) || 0)}
              className="w-full pl-9 pr-3 py-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent"
              min="0"
              step="500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Categoria
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as 'commerce' | 'services')}
            className="w-full px-3 py-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent"
          >
            <option value="commerce">Comércio</option>
            <option value="services">Serviços</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Funcionários
          </label>
          <select
            value={employees}
            onChange={(e) => setEmployees(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent"
          >
            <option value={0}>0 (apenas você)</option>
            <option value={1}>1 funcionário</option>
            <option value={2}>2 funcionários</option>
            <option value={3}>3+ funcionários</option>
          </select>
        </div>
      </div>

      {/* Main Comparison Table */}
      <div className="overflow-x-auto border dark:border-gray-700 rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-700">
            <tr>
              <th className="px-4 py-3 text-left font-bold text-gray-900 dark:text-gray-100">Aspecto</th>
              <th className="px-4 py-3 text-center font-bold text-accent">MEI</th>
              <th className="px-4 py-3 text-center font-bold text-accent">Simples Nacional</th>
              <th className="px-4 py-3 text-center font-bold text-purple-600 dark:text-purple-400">Microempresa (ME)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-gray-700">
              <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">Limite Anual</td>
              <td className="px-4 py-3 text-center">R$ 81.000</td>
              <td className="px-4 py-3 text-center">R$ 360.000</td>
              <td className="px-4 py-3 text-center">R$ 360.000</td>
            </tr>
            <tr className="border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">Funcionários</td>
              <td className="px-4 py-3 text-center">Máx 1</td>
              <td className="px-4 py-3 text-center">Ilimitado</td>
              <td className="px-4 py-3 text-center">Ilimitado</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">DAS/Impostos Mensais</td>
              <td className="px-4 py-3 text-center font-bold text-accent">{formatCurrency(meiMonthlyTotal)}</td>
              <td className="px-4 py-3 text-center font-bold text-accent">{formatCurrency(simplesMonthlyTotal)}</td>
              <td className="px-4 py-3 text-center font-bold text-purple-600 dark:text-purple-400">{formatCurrency(meMonthlyTotal)}</td>
            </tr>
            <tr className="border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">DAS/Impostos Anuais</td>
              <td className="px-4 py-3 text-center font-bold text-accent">{formatCurrency(meiAnnualDas)}</td>
              <td className="px-4 py-3 text-center font-bold text-accent">{formatCurrency(simplesAnnualTax)}</td>
              <td className="px-4 py-3 text-center font-bold text-purple-600 dark:text-purple-400">{formatCurrency(meAnnualTax)}</td>
            </tr>
            {employees > 0 && (
              <>
                <tr className="border-b dark:border-gray-700">
                  <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100 text-red-600 dark:text-red-400">Custo Funcionários/mês</td>
                  <td className="px-4 py-3 text-center text-red-600 dark:text-red-400">Não permitido</td>
                  <td className="px-4 py-3 text-center font-bold text-accent">{formatCurrency(employeeMonthly)}</td>
                  <td className="px-4 py-3 text-center font-bold text-purple-600 dark:text-purple-400">{formatCurrency(employeeMonthly)}</td>
                </tr>
                <tr className="border-b dark:border-gray-700 bg-yellow-50 dark:bg-yellow-950/40">
                  <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">Total Mensal (com funcionários)</td>
                  <td className="px-4 py-3 text-center text-red-600 dark:text-red-400 font-bold">Não permitido</td>
                  <td className="px-4 py-3 text-center font-bold text-accent">{formatCurrency(simplesWithEmployeeMonthly)}</td>
                  <td className="px-4 py-3 text-center font-bold text-purple-600 dark:text-purple-400">{formatCurrency(meWithEmployeeMonthly)}</td>
                </tr>
              </>
            )}
            <tr className="border-b dark:border-gray-700">
              <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">Nota Fiscal</td>
              <td className="px-4 py-3 text-center">Limitada</td>
              <td className="px-4 py-3 text-center">Sim</td>
              <td className="px-4 py-3 text-center">Sim</td>
            </tr>
            <tr className="border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">Acesso a Crédito</td>
              <td className="px-4 py-3 text-center">Limitado</td>
              <td className="px-4 py-3 text-center">Melhor</td>
              <td className="px-4 py-3 text-center">Melhor</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">CNPJ</td>
              <td className="px-4 py-3 text-center">Sim</td>
              <td className="px-4 py-3 text-center">Sim</td>
              <td className="px-4 py-3 text-center">Sim</td>
            </tr>
            <tr className="border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">Complexidade Contábil</td>
              <td className="px-4 py-3 text-center">Muito baixa</td>
              <td className="px-4 py-3 text-center">Média</td>
              <td className="px-4 py-3 text-center">Alta</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Recommendation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border-2 border-accent dark:border-accent rounded-lg p-6 bg-surface-alt dark:bg-accent-soft/30">
          <h3 className="text-xl font-bold text-foreground mb-4">MEI é Ideal Se</h3>
          <ul className="space-y-2 text-foreground text-sm">
            <li>✓ Você fatura até R$ 85 mil/ano</li>
            <li>✓ Trabalha sozinho ou tem apenas 1 funcionário</li>
            <li>✓ Quer simplicidade e menos burocracia</li>
            <li>✓ Quer o menor custo de impostos</li>
            <li>✓ Está começando seu negócio</li>
          </ul>
        </div>

        <div className="border-2 border-accent rounded-lg p-6 bg-accent-soft">
          <h3 className="text-xl font-bold text-foreground mb-4">Simples Nacional é Ideal Se</h3>
          <ul className="space-y-2 text-foreground text-sm">
            <li>✓ Você fatura entre R$ 85k e R$ 360k/ano</li>
            <li>✓ Precisa contratar funcionários</li>
            <li>✓ Quer economia nos impostos</li>
            <li>✓ Precisa de flexibilidade</li>
            <li>✓ Quer fácil acesso a crédito</li>
          </ul>
        </div>

        <div className="border-2 border-purple-400 dark:border-purple-700 rounded-lg p-6 bg-purple-50 dark:bg-purple-950/40">
          <h3 className="text-xl font-bold text-purple-900 dark:text-purple-200 mb-4">ME é Necessária Se</h3>
          <ul className="space-y-2 text-purple-900 dark:text-purple-200 text-sm">
            <li>✓ Você fatura acima de R$ 360k/ano</li>
            <li>✓ Atua em setores específicos</li>
            <li>✓ Precisa de estrutura empresarial</li>
            <li>✓ Quer máxima credibilidade</li>
            <li>✓ Busca acesso a grandes contratos</li>
          </ul>
        </div>
      </div>

      {/* Benefits Comparison */}
      <div className="border dark:border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Benefícios Sociais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-bold text-accent mb-3">MEI</h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>✓ Aposentadoria por idade</li>
              <li>✓ Auxílio-doença</li>
              <li>✓ Salário-maternidade</li>
              <li>✗ Auxílio desemprego</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-accent mb-3">Simples Nacional</h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>✓ Aposentadoria por idade</li>
              <li>✓ Aposentadoria por tempo</li>
              <li>✓ Auxílio-doença</li>
              <li>✓ Salário-maternidade</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-3">ME</h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>✓ Aposentadoria por idade</li>
              <li>✓ Aposentadoria por tempo</li>
              <li>✓ Auxílio-doença</li>
              <li>✓ Salário-maternidade</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lead Capture — contador orçamento */}
      <LeadCaptureForm
        source="mei-vs-me"
        contextMessage="Na dúvida entre MEI, Simples ou ME? Receba orçamento de contadores e tome a melhor decisão para seu negócio."
      />

      <div className="bg-surface-alt dark:bg-accent-soft/30 border border-border rounded-lg p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">Próximos Passos</h3>
        <p className="text-foreground mb-4">
          Agora que você conhece os regimes, confira:
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="/calculadora/das" className="text-accent font-semibold hover:underline text-sm">
            → Calcular DAS
          </a>
          <a href="/guias/mei-vs-autonomo" className="text-accent font-semibold hover:underline text-sm">
            → MEI vs Autônomo
          </a>
          <a href="/melhores/melhores-contas-pj-mei" className="text-accent font-semibold hover:underline text-sm">
            → Melhores Contas PJ
          </a>
        </div>
      </div>
    </div>
  );
}
