'use client';

import { useState } from 'react';

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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Comparar: MEI vs ME vs Simples Nacional</h1>
        <p className="text-gray-600">
          Compare impostos, custos e benefícios dos três regimes para escolher o melhor para seu negócio.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>Dica:</strong> Esta calculadora usa estimativas. Consulte um contador para situações específicas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 p-6 rounded-lg">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Faturamento Mensal
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2 text-gray-600">R$</span>
            <input
              type="number"
              value={monthlyRevenue}
              onChange={(e) => setMonthlyRevenue(parseInt(e.target.value) || 0)}
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              min="0"
              step="500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Categoria
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as 'commerce' | 'services')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="commerce">Comércio</option>
            <option value="services">Serviços</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Funcionários
          </label>
          <select
            value={employees}
            onChange={(e) => setEmployees(parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value={0}>0 (apenas você)</option>
            <option value={1}>1 funcionário</option>
            <option value={2}>2 funcionários</option>
            <option value={3}>3+ funcionários</option>
          </select>
        </div>
      </div>

      {/* Main Comparison Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3 text-left font-bold text-gray-900">Aspecto</th>
              <th className="px-4 py-3 text-center font-bold text-green-600">MEI</th>
              <th className="px-4 py-3 text-center font-bold text-blue-600">Simples Nacional</th>
              <th className="px-4 py-3 text-center font-bold text-purple-600">Microempresa (ME)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3 font-semibold text-gray-900">Limite Anual</td>
              <td className="px-4 py-3 text-center">R$ 85.000</td>
              <td className="px-4 py-3 text-center">R$ 360.000</td>
              <td className="px-4 py-3 text-center">R$ 360.000</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-3 font-semibold text-gray-900">Funcionários</td>
              <td className="px-4 py-3 text-center">Máx 1</td>
              <td className="px-4 py-3 text-center">Ilimitado</td>
              <td className="px-4 py-3 text-center">Ilimitado</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3 font-semibold text-gray-900">DAS/Impostos Mensais</td>
              <td className="px-4 py-3 text-center font-bold text-green-600">{formatCurrency(meiMonthlyTotal)}</td>
              <td className="px-4 py-3 text-center font-bold text-blue-600">{formatCurrency(simplesMonthlyTotal)}</td>
              <td className="px-4 py-3 text-center font-bold text-purple-600">{formatCurrency(meMonthlyTotal)}</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-3 font-semibold text-gray-900">DAS/Impostos Anuais</td>
              <td className="px-4 py-3 text-center font-bold text-green-600">{formatCurrency(meiAnnualDas)}</td>
              <td className="px-4 py-3 text-center font-bold text-blue-600">{formatCurrency(simplesAnnualTax)}</td>
              <td className="px-4 py-3 text-center font-bold text-purple-600">{formatCurrency(meAnnualTax)}</td>
            </tr>
            {employees > 0 && (
              <>
                <tr className="border-b">
                  <td className="px-4 py-3 font-semibold text-gray-900 text-red-600">Custo Funcionários/mês</td>
                  <td className="px-4 py-3 text-center text-red-600">Não permitido</td>
                  <td className="px-4 py-3 text-center font-bold text-blue-600">{formatCurrency(employeeMonthly)}</td>
                  <td className="px-4 py-3 text-center font-bold text-purple-600">{formatCurrency(employeeMonthly)}</td>
                </tr>
                <tr className="border-b bg-yellow-50">
                  <td className="px-4 py-3 font-semibold text-gray-900">Total Mensal (com funcionários)</td>
                  <td className="px-4 py-3 text-center text-red-600 font-bold">Não permitido</td>
                  <td className="px-4 py-3 text-center font-bold text-blue-600">{formatCurrency(simplesWithEmployeeMonthly)}</td>
                  <td className="px-4 py-3 text-center font-bold text-purple-600">{formatCurrency(meWithEmployeeMonthly)}</td>
                </tr>
              </>
            )}
            <tr className="border-b">
              <td className="px-4 py-3 font-semibold text-gray-900">Nota Fiscal</td>
              <td className="px-4 py-3 text-center">Limitada</td>
              <td className="px-4 py-3 text-center">Sim</td>
              <td className="px-4 py-3 text-center">Sim</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-3 font-semibold text-gray-900">Acesso a Crédito</td>
              <td className="px-4 py-3 text-center">Limitado</td>
              <td className="px-4 py-3 text-center">Melhor</td>
              <td className="px-4 py-3 text-center">Melhor</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3 font-semibold text-gray-900">CNPJ</td>
              <td className="px-4 py-3 text-center">Sim</td>
              <td className="px-4 py-3 text-center">Sim</td>
              <td className="px-4 py-3 text-center">Sim</td>
            </tr>
            <tr className="border-b bg-gray-50">
              <td className="px-4 py-3 font-semibold text-gray-900">Complexidade Contábil</td>
              <td className="px-4 py-3 text-center">Muito baixa</td>
              <td className="px-4 py-3 text-center">Média</td>
              <td className="px-4 py-3 text-center">Alta</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Recommendation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border-2 border-green-400 rounded-lg p-6 bg-green-50">
          <h3 className="text-xl font-bold text-green-900 mb-4">MEI é Ideal Se</h3>
          <ul className="space-y-2 text-green-900 text-sm">
            <li>✓ Você fatura até R$ 85 mil/ano</li>
            <li>✓ Trabalha sozinho ou tem apenas 1 funcionário</li>
            <li>✓ Quer simplicidade e menos burocracia</li>
            <li>✓ Quer o menor custo de impostos</li>
            <li>✓ Está começando seu negócio</li>
          </ul>
        </div>

        <div className="border-2 border-blue-400 rounded-lg p-6 bg-blue-50">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Simples Nacional é Ideal Se</h3>
          <ul className="space-y-2 text-blue-900 text-sm">
            <li>✓ Você fatura entre R$ 85k e R$ 360k/ano</li>
            <li>✓ Precisa contratar funcionários</li>
            <li>✓ Quer economia nos impostos</li>
            <li>✓ Precisa de flexibilidade</li>
            <li>✓ Quer fácil acesso a crédito</li>
          </ul>
        </div>

        <div className="border-2 border-purple-400 rounded-lg p-6 bg-purple-50">
          <h3 className="text-xl font-bold text-purple-900 mb-4">ME é Necessária Se</h3>
          <ul className="space-y-2 text-purple-900 text-sm">
            <li>✓ Você fatura acima de R$ 360k/ano</li>
            <li>✓ Atua em setores específicos</li>
            <li>✓ Precisa de estrutura empresarial</li>
            <li>✓ Quer máxima credibilidade</li>
            <li>✓ Busca acesso a grandes contratos</li>
          </ul>
        </div>
      </div>

      {/* Benefits Comparison */}
      <div className="border rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefícios Sociais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-bold text-green-600 mb-3">MEI</h4>
            <ul className="space-y-1 text-gray-700">
              <li>✓ Aposentadoria por idade</li>
              <li>✓ Auxílio-doença</li>
              <li>✓ Salário-maternidade</li>
              <li>✗ Auxílio desemprego</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-blue-600 mb-3">Simples Nacional</h4>
            <ul className="space-y-1 text-gray-700">
              <li>✓ Aposentadoria por idade</li>
              <li>✓ Aposentadoria por tempo</li>
              <li>✓ Auxílio-doença</li>
              <li>✓ Salário-maternidade</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-purple-600 mb-3">ME</h4>
            <ul className="space-y-1 text-gray-700">
              <li>✓ Aposentadoria por idade</li>
              <li>✓ Aposentadoria por tempo</li>
              <li>✓ Auxílio-doença</li>
              <li>✓ Salário-maternidade</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-green-900 mb-2">Próximos Passos</h3>
        <p className="text-green-800 mb-4">
          Agora que você conhece os regimes, confira:
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="/calculadora/das" className="text-blue-600 font-semibold hover:underline text-sm">
            → Calcular DAS
          </a>
          <a href="/guias/mei-vs-autonomo" className="text-blue-600 font-semibold hover:underline text-sm">
            → MEI vs Autônomo
          </a>
          <a href="/melhores/melhores-contas-pj-mei" className="text-blue-600 font-semibold hover:underline text-sm">
            → Melhores Contas PJ
          </a>
        </div>
      </div>
    </div>
  );
}
