'use client';

import { useState, useMemo } from 'react';
import fintechs from '@/data/fintechs.json';
import { AffiliateCta } from '@/components/AffiliateCta';
import { buildAffiliateUrl } from '@/config/affiliates';

type SortMode = 'default' | 'rating' | 'fee';

function sortFintechs(list: typeof fintechs.fintechs, mode: SortMode) {
  const sorted = [...list];
  switch (mode) {
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'fee':
      return sorted.sort((a, b) => a.monthly_fee_brl - b.monthly_fee_brl);
    default:
      return sorted;
  }
}

export default function MelhoresContasPJ() {
  const [sortMode, setSortMode] = useState<SortMode>('default');
  const sorted = useMemo(() => sortFintechs(fintechs.fintechs, sortMode), [sortMode]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Melhores Contas PJ para MEI 2026</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Compare as melhores contas bancárias PJ/MEI do mercado. Taxas, benefícios e comparativo.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-900 dark:text-blue-200">
          <strong>Dica:</strong> A melhor conta para você depende de suas necessidades. Analise transferências, cartão, antecipação de recebíveis e atendimento.
        </p>
      </div>

      {/* Sort Controls */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm text-gray-500 dark:text-gray-400">Ordenar por:</span>
        <select
          value={sortMode}
          onChange={(e) => setSortMode(e.target.value as SortMode)}
          className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm font-medium bg-white dark:bg-gray-800 dark:text-gray-100 hover:border-green-400 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
        >
          <option value="default">Padrão</option>
          <option value="rating">⭐ Melhor Avaliados</option>
          <option value="fee">💰 Menor Taxa</option>
        </select>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto border dark:border-gray-700 rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left font-bold">Banco</th>
              <th className="px-4 py-3 text-center font-bold">Taxa Mensal</th>
              <th className="px-4 py-3 text-center font-bold">Transferências</th>
              <th className="px-4 py-3 text-center font-bold">Maquininha</th>
              <th className="px-4 py-3 text-center font-bold">Cartão</th>
              <th className="px-4 py-3 text-center font-bold">Rating</th>
              <th className="px-4 py-3 text-center font-bold">Ação</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((f, idx) => (
              <tr key={f.id} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-900'}>
                <td className="px-4 py-3 font-bold text-gray-900 dark:text-gray-100">{f.name}</td>
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
                <td className="px-4 py-3 text-center">
                  <AffiliateCta
                    href={buildAffiliateUrl(f.id, f.affiliate_url)}
                    partner={f.id}
                    page="melhores-contas-pj-mei"
                    className="inline-block bg-green-600 text-white text-xs px-3 py-1.5 rounded font-semibold hover:bg-green-700 whitespace-nowrap"
                  >
                    Conhecer →
                  </AffiliateCta>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detailed Cards */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Detalhes de Cada Conta</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sorted.map((f) => (
            <div key={f.id} className="border dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{f.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{f.best_for}</p>
                </div>
                <div className="text-2xl font-bold text-yellow-500 dark:text-yellow-400">{f.rating}★</div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{f.description_pt}</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Destaques:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  {f.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 pt-4 border-t dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Taxa Mensal:</strong>{' '}
                  {f.monthly_fee_brl === 0 ? 'Gratuito' : `R$ ${f.monthly_fee_brl}/mês`}
                </p>
              </div>

              <AffiliateCta
                href={buildAffiliateUrl(f.id, f.affiliate_url)}
                partner={f.id}
                page="melhores-contas-pj-mei"
                className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 text-sm"
              >
                Conhecer Mais
              </AffiliateCta>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border-2 border-yellow-400 dark:border-yellow-700 rounded-lg p-6 bg-yellow-50 dark:bg-yellow-950/40">
          <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-200 mb-3">Melhor Custo-Benefício</h3>
          <p className="text-yellow-900 dark:text-yellow-200 mb-3">
            <strong>Neon PJ ou Nubank PJ</strong> - Sem taxa mensal, transferências ilimitadas e interface mobile excelente.
          </p>
        </div>

        <div className="border-2 border-green-400 dark:border-green-700 rounded-lg p-6 bg-green-50 dark:bg-green-950/40">
          <h3 className="text-lg font-bold text-green-900 dark:text-green-200 mb-3">Melhor para Crédito</h3>
          <p className="text-green-900 dark:text-green-200 mb-3">
            <strong>Inter Empresas ou C6 PJ</strong> - Oferecem crédito pré-aprovado e limite automático.
          </p>
        </div>

        <div className="border-2 border-blue-400 dark:border-blue-700 rounded-lg p-6 bg-blue-50 dark:bg-blue-950/40">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-200 mb-3">Melhor para Comércio</h3>
          <p className="text-blue-900 dark:text-blue-200 mb-3">
            <strong>Stone ou InfinitePay</strong> - Maquininha com taxa competitiva e liquidação rápida.
          </p>
        </div>
      </section>

      {/* Comparison Criteria */}
      <section className="border dark:border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Critérios de Escolha</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Taxa Mensal</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Quanto você paga mensalmente pela conta. Algumas são gratuitas.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Transferências</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Não pague por cada TED. Muitos bancos agora oferecem ilimitadas.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Maquininha</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Se aceita cartão, escolha um banco com maquininha integrada.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Crédito</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Limite automático e pré-aprovado facilita empréstimos e antecipação.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-200 mb-4">Próximos Passos</h2>
        <ul className="space-y-2 text-green-900 dark:text-green-200">
          <li>✓ <a href="/guias/abrir-conta-pj-mei" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">Leia nosso guia de abertura de conta</a></li>
          <li>✓ <a href="/calculadora/das" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">Calcule seu DAS mensal</a></li>
          <li>✓ Compare e escolha a melhor opção para seu negócio</li>
        </ul>
      </div>

      {/* Social Proof Banner */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-6 text-center">
        <p className="text-lg font-bold mb-1">
          🔥 Mais de 5.000 MEIs já compararam contas PJ este mês
        </p>
        <p className="text-green-100 text-sm">
          Escolha a conta ideal e abra em minutos — sem burocracia e sem tarifa escondida
        </p>
      </div>

      {/* Trust Badges */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: '🔒', label: 'Links Seguros' },
          { icon: '⭐', label: 'Avaliações Reais' },
          { icon: '✓', label: 'Sem Tarifa Oculta' },
          { icon: '⚡', label: 'Abertura Rápida' },
        ].map((badge) => (
          <div key={badge.label} className="border dark:border-gray-700 rounded-lg p-3 text-center bg-white dark:bg-gray-900 hover:shadow-md transition">
            <div className="text-2xl mb-1">{badge.icon}</div>
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">{badge.label}</p>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="border dark:border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Perguntas Frequentes</h2>
        <div className="space-y-4">
          <details className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
            <summary className="font-bold cursor-pointer text-gray-900 dark:text-gray-100">
              Preciso ter CNPJ MEI para abrir uma conta PJ?
            </summary>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Sim. Todas as contas listadas exigem CNPJ ativo. Se você ainda não tem MEI,
              confira nosso <a href="/guias/como-abrir-mei" className="text-blue-600 dark:text-blue-400 hover:underline">guia de abertura de MEI</a>.
            </p>
          </details>
          <details className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
            <summary className="font-bold cursor-pointer text-gray-900 dark:text-gray-100">
              Qual a diferença entre conta PJ digital e banco tradicional?
            </summary>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Contas digitais (Neon PJ, Nubank PJ) oferecem abertura 100% online, menos burocracia
              e tarifas reduzidas. Bancos tradicionais podem ter mais serviços mas cobram taxas mais altas.
            </p>
          </details>
          <details className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
            <summary className="font-bold cursor-pointer text-gray-900 dark:text-gray-100">
              Posso usar conta de pessoa física como MEI?
            </summary>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Não recomendamos. Misturar contas PF e PJ dificulta a contabilidade e pode gerar
              problemas com a Receita Federal. Abra uma conta PJ separada — muitas são gratuitas.
            </p>
          </details>
          <details className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
            <summary className="font-bold cursor-pointer text-gray-900 dark:text-gray-100">
              Quanto tempo leva para abrir uma conta PJ?
            </summary>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Contas digitais como Neon PJ e Nubank PJ podem ser abertas em menos de 24 horas.
              Bancos tradicionais podem levar de 3 a 10 dias úteis.
            </p>
          </details>
        </div>
      </section>

      {/* FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Preciso ter CNPJ MEI para abrir uma conta PJ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sim. Todas as contas listadas exigem CNPJ ativo. Se você ainda não tem MEI, confira nosso guia de abertura de MEI.',
                },
              },
              {
                '@type': 'Question',
                name: 'Qual a diferença entre conta PJ digital e banco tradicional?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Contas digitais (Neon PJ, Nubank PJ) oferecem abertura 100% online, menos burocracia e tarifas reduzidas. Bancos tradicionais podem ter mais serviços mas cobram taxas mais altas.',
                },
              },
              {
                '@type': 'Question',
                name: 'Posso usar conta de pessoa física como MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Não recomendamos. Misturar contas PF e PJ dificulta a contabilidade e pode gerar problemas com a Receita Federal. Abra uma conta PJ separada — muitas são gratuitas.',
                },
              },
              {
                '@type': 'Question',
                name: 'Quanto tempo leva para abrir uma conta PJ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Contas digitais como Neon PJ e Nubank PJ podem ser abertas em menos de 24 horas. Bancos tradicionais podem levar de 3 a 10 dias úteis.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
