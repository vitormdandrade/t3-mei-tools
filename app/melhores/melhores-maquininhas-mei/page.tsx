'use client';

import { AffiliateCta } from '@/components/AffiliateCta';
import { buildAffiliateUrl } from '@/config/affiliates';

const MAQUININHAS = [
  {
    id: 'stone',
    name: 'Stone',
    description: 'Líder de mercado em Brasil com maior cobertura de MEI.',
    taxas: { debito: '1,69% a 1,99%', credito: '2,69% a 3,99%', aluguel: 'R$ 79-99/mês', liquidacao: 'D+1' },
    highlights: ['Maior rede de suporte', 'Equipamentos modernos', 'Integração com diversos sistemas'],
    affiliate_url: '#',
  },
  {
    id: 'mercado-pago',
    name: 'Mercado Pago',
    description: 'Integrada ao Mercado Livre com excelente experiência de uso.',
    taxas: { debito: '1,69% a 1,99%', credito: '2,69% a 3,99%', aluguel: 'Grátis ou baixo', liquidacao: 'D+1' },
    highlights: ['Integração Mercado Livre', 'Avançado antecipação', 'App simples'],
    affiliate_url: '#',
  },
  {
    id: 'sumup',
    name: 'SumUp',
    description: 'Maquininha portátil ideal para atendimento ambulante.',
    taxas: { debito: '1,69%', credito: '2,49% a 2,99%', aluguel: 'Grátis', liquidacao: 'D+1' },
    highlights: ['Equipamento portátil', 'Sem aluguel', 'Suporte 24/7'],
    affiliate_url: '#',
  },
  {
    id: 'infinitepay',
    name: 'InfinitePay',
    description: 'Focada em antecipação de recebíveis para MEI.',
    taxas: { debito: '1,99%', credito: '2,99%', aluguel: 'Grátis', liquidacao: '24h' },
    highlights: ['Antecipação automática', 'Taxa competitiva', 'Sem aluguel'],
    affiliate_url: '#',
  },
];

export default function MelhoresMaquininhas() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Melhores Máquinas de Pagamento para MEI 2026</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Compare as melhores maquininhas de cartão para MEI. Taxas, características e recomendações.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-900 dark:text-blue-200">
          <strong>O que observar:</strong> Taxa de transação, taxa de aluguel, liquidação rápida, e compatibilidade com seu negócio.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Principais Fornecedoras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MAQUININHAS.map((m) => (
            <div key={m.id} className="border dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{m.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{m.description}</p>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                <p><strong>Taxa Débito:</strong> {m.taxas.debito}</p>
                <p><strong>Taxa Crédito:</strong> {m.taxas.credito}</p>
                <p><strong>Aluguel:</strong> {m.taxas.aluguel}</p>
                <p><strong>Liquidação:</strong> {m.taxas.liquidacao}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded text-sm text-gray-700 dark:text-gray-300 mb-4">
                <p><strong>Destaques:</strong></p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {m.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
              <AffiliateCta
                href={buildAffiliateUrl(m.id, m.affiliate_url)}
                partner={m.id}
                page="melhores-maquininhas-mei"
                className="inline-block w-full text-center bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 text-sm"
              >
                Conhecer {m.name} →
              </AffiliateCta>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border-2 border-yellow-400 dark:border-yellow-700 rounded-lg p-6 bg-yellow-50 dark:bg-yellow-950/40">
          <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-200 mb-3">Melhor Custo</h3>
          <p className="text-yellow-900 dark:text-yellow-200 text-sm">
            <strong>SumUp:</strong> Sem aluguel e taxa competitiva de 2,49%.
          </p>
        </div>

        <div className="border-2 border-green-400 dark:border-green-700 rounded-lg p-6 bg-green-50 dark:bg-green-950/40">
          <h3 className="text-lg font-bold text-green-900 dark:text-green-200 mb-3">Melhor Antecipação</h3>
          <p className="text-green-900 dark:text-green-200 text-sm">
            <strong>InfinitePay:</strong> Antecipação em 24h com taxa transparente.
          </p>
        </div>

        <div className="border-2 border-blue-400 dark:border-blue-700 rounded-lg p-6 bg-blue-50 dark:bg-blue-950/40">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-200 mb-3">Melhor Portabilidade</h3>
          <p className="text-blue-900 dark:text-blue-200 text-sm">
            <strong>SumUp:</strong> Equipamento compacto para trabalho ambulante.
          </p>
        </div>
      </section>

      <section className="border dark:border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Como Escolher</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Se você trabalha...</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              <li><strong>Presencialmente fixo:</strong> Stone (melhor suporte)</li>
              <li><strong>Ambulante:</strong> SumUp (portátil)</li>
              <li><strong>Online + Presencial:</strong> Mercado Pago</li>
              <li><strong>Precisa antecipação:</strong> InfinitePay</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Observe também:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
              <li>Compatibilidade com seu sistema PDV</li>
              <li>Atendimento e suporte técnico</li>
              <li>Velocidade de liquidação</li>
              <li>Relatórios e analytics</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-200 mb-4">Próximos Passos</h2>
        <ul className="space-y-2 text-green-900 dark:text-green-200">
          <li>✓ <a href="/melhores/melhores-contas-pj-mei" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">Ver melhores contas PJ</a></li>
          <li>✓ <a href="/calculadora/das" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">Calcular DAS mensal</a></li>
          <li>✓ Escolha a maquininha ideal para seu negócio</li>
        </ul>
      </div>
    </div>
  );
}
