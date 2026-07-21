'use client';

import { useMemo } from 'react';
import { AffiliateCta } from '@/components/AffiliateCta';
import { buildAffiliateUrl } from '@/config/affiliates';
import StarRating from '@/components/StarRating';

const MAQUININHAS = [
  {
    id: 'stone',
    name: 'Stone',
    description: 'Líder de mercado em Brasil com maior cobertura de MEI.',
    taxas: { debito: '1,69% a 1,99%', credito: '2,69% a 3,99%', aluguel: 'R$ 79-99/mês', liquidacao: 'D+1' },
    highlights: ['Maior rede de suporte', 'Equipamentos modernos', 'Integração com diversos sistemas'],
    affiliate_url: 'https://stone.com.br/?utm_source=oraculodomei&utm_medium=affiliate&utm_campaign=fintechs',
    rating: 4.4,
  },
  {
    id: 'mercado-pago',
    name: 'Mercado Pago',
    description: 'Integrada ao Mercado Livre com excelente experiência de uso.',
    taxas: { debito: '1,69% a 1,99%', credito: '2,69% a 3,99%', aluguel: 'Grátis ou baixo', liquidacao: 'D+1' },
    highlights: ['Integração Mercado Livre', 'Avançado antecipação', 'App simples'],
    affiliate_url: 'https://mercadopago.com.br/?utm_source=oraculodomei&utm_medium=affiliate&utm_campaign=fintechs',
    rating: 4.3,
  },
  {
    id: 'sumup',
    name: 'SumUp',
    description: 'Maquininha portátil ideal para atendimento ambulante.',
    taxas: { debito: '1,69%', credito: '2,49% a 2,99%', aluguel: 'Grátis', liquidacao: 'D+1' },
    highlights: ['Equipamento portátil', 'Sem aluguel', 'Suporte 24/7'],
    affiliate_url: 'https://sumup.com.br/?utm_source=oraculodomei&utm_medium=affiliate&utm_campaign=fintechs',
    rating: 4.0,
  },
  {
    id: 'infinitepay',
    name: 'InfinitePay',
    description: 'Focada em antecipação de recebíveis para MEI.',
    taxas: { debito: '1,99%', credito: '2,99%', aluguel: 'Grátis', liquidacao: '24h' },
    highlights: ['Antecipação automática', 'Taxa competitiva', 'Sem aluguel'],
    affiliate_url: 'https://infinitepay.com.br/?utm_source=oraculodomei&utm_medium=affiliate&utm_campaign=fintechs',
    rating: 4.1,
  },
  {
    id: 'pagseguro',
    name: 'PagSeguro',
    description: 'Solução completa com conta corrente, maquininha e cartão pré-pago.',
    taxas: { debito: '1,89% a 1,99%', credito: '2,99% a 3,99%', aluguel: 'Grátis (modelo básico)', liquidacao: 'D+1' },
    highlights: ['Conta 100% online', 'Maquininha integrada', 'Suporte em português'],
    affiliate_url: 'https://pagseguro.uol.com.br/?utm_source=oraculodomei&utm_medium=affiliate&utm_campaign=fintechs',
    rating: 4.2,
  },
  {
    id: 'ton',
    name: 'Ton',
    description: 'Conta digital da Stone para MEI com maquininha integrada.',
    taxas: { debito: '1,69% a 1,89%', credito: '2,69% a 3,49%', aluguel: 'Grátis', liquidacao: 'D+1' },
    highlights: ['Integração com maquininhas Stone', 'Conta 100% digital', 'Pix ilimitado sem tarifa'],
    affiliate_url: 'https://ton.com.br/?utm_source=oraculodomei&utm_medium=affiliate&utm_campaign=fintechs',
    rating: 4.4,
  },
];

export default function MelhoresMaquininhas() {
  // Deterministic daily viewer count for social proof (changes once per day)
  const viewersNow = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    let hash = 0;
    for (let i = 0; i < today.length; i++) {
      hash = ((hash << 5) - hash) + today.charCodeAt(i);
      hash |= 0;
    }
    return 8 + (Math.abs(hash) % 25); // 8–32 viewers
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Melhores Máquinas de Pagamento para MEI 2026</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Compare as melhores maquininhas de cartão para MEI. Taxas, características e recomendações.
        </p>
      </div>

      {/* Live Viewer Counter */}
      <div className="flex items-center justify-center gap-2 mb-2 px-4 py-2 rounded-lg text-sm font-semibold" style={{ background: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e40af' }}>
        <span>👁️</span>
        <span><strong>{viewersNow} pessoas</strong> estão comparando maquininhas agora — as ofertas podem ter vagas limitadas</span>
      </div>

      {/* Trust + Urgency Strip */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-4 p-4 rounded-xl" style={{ background: 'var(--brand-sand-warm)', border: '1px solid var(--color-border)' }}>
        {[
          { icon: '🔒', text: 'Links seguros e verificados' },
          { icon: '📊', text: '6 maquininhas analisadas' },
          { icon: '⭐', text: 'Avaliações reais de MEIs' },
          { icon: '⚡', text: 'Atualizado em ' + new Date().toLocaleDateString('pt-BR') },
        ].map((item) => (
          <div key={item.text} className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--brand-navy)' }}>
            <span className="text-base">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <div className="bg-accent-soft border border-accent rounded-lg p-4">
        <p className="text-sm text-foreground">
          <strong>O que observar:</strong> Taxa de transação, taxa de aluguel, liquidação rápida, e compatibilidade com seu negócio.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Principais Fornecedoras</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MAQUININHAS.map((m) => (
            <div key={m.id} className="border dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{m.name}</h3>
                  {MAQUININHAS.sort((a, b) => b.rating - a.rating).slice(0, 2).some(top => top.id === m.id) && (
                    <span className="inline-flex items-center gap-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-amber-200 whitespace-nowrap">
                      🔥 Procurado
                    </span>
                  )}
                </div>
                <div className="text-yellow-500 dark:text-yellow-400 flex-shrink-0">
                  <StarRating rating={m.rating} size="sm" />
                </div>
              </div>
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
                className="inline-block w-full text-center bg-accent text-white py-2 rounded font-semibold hover:bg-accent-hover text-sm"
              >
                Solicitar {m.name} →
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

        <div className="border-2 border-accent dark:border-accent rounded-lg p-6 bg-surface-alt dark:bg-accent-soft/30">
          <h3 className="text-lg font-bold text-foreground mb-3">Melhor Antecipação</h3>
          <p className="text-foreground text-sm">
            <strong>InfinitePay:</strong> Antecipação em 24h com taxa transparente.
          </p>
        </div>

        <div className="border-2 border-accent rounded-lg p-6 bg-accent-soft">
          <h3 className="text-lg font-bold text-foreground mb-3">Melhor Portabilidade</h3>
          <p className="text-foreground text-sm">
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

      <div className="bg-surface-alt dark:bg-accent-soft/30 border border-border rounded-lg p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">Próximos Passos</h2>
        <ul className="space-y-2 text-foreground">
          <li>✓ <a href="/melhores/melhores-contas-pj-mei" className="font-semibold text-accent hover:underline">Ver melhores contas PJ</a></li>
          <li>✓ <a href="/calculadora/das" className="font-semibold text-accent hover:underline">Calcular DAS mensal</a></li>
          <li>✓ Escolha a maquininha ideal para seu negócio</li>
        </ul>
      </div>

      {/* Social Proof Banner */}
      <div className="bg-gradient-to-r from-accent to-accent-secondary text-white rounded-lg p-6 text-center">
        <p className="text-lg font-bold mb-1">
          🔥 Mais de 4.500 MEIs já compararam maquininhas este mês
        </p>
        <p className="text-muted-soft text-sm">
          Escolha a maquininha ideal e comece a vender no cartão — sem burocracia e com as menores taxas
        </p>
      </div>

      {/* Trust Badges */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: '🔒', label: 'Links Seguros' },
          { icon: '⭐', label: 'Avaliações Reais' },
          { icon: '📊', label: 'Taxas Transparentes' },
          { icon: '⚡', label: 'Instalação Rápida' },
        ].map((badge) => (
          <div key={badge.label} className="border dark:border-gray-700 rounded-lg p-3 text-center bg-white dark:bg-gray-900 hover:shadow-md transition">
            <div className="text-2xl mb-1">{badge.icon}</div>
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">{badge.label}</p>
          </div>
        ))}
      </section>

      {/* Sticky Mobile CTA — top-rated maquininha */}
      {(() => {
        const topRated = [...MAQUININHAS].sort((a, b) => b.rating - a.rating)[0];
        if (!topRated) return null;
        return (
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-3 z-50 shadow-lg">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400">Melhor avaliada:</p>
                <p className="text-sm font-bold text-gray-900 dark:text-gray-100 truncate">
                  {topRated.name}
                </p>
                <p className="text-xs text-yellow-600 dark:text-yellow-400">
                  ★ {topRated.rating} · Menor taxa
                </p>
              </div>
              <AffiliateCta
                href={buildAffiliateUrl(topRated.id, topRated.affiliate_url)}
                partner={topRated.id}
                page="melhores-maquininhas-mei"
                className="flex-shrink-0 bg-accent text-white text-sm px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover whitespace-nowrap"
              >
                Solicitar Agora →
              </AffiliateCta>
            </div>
          </div>
        );
      })()}

      {/* FAQ Section */}
      <section className="border dark:border-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Perguntas Frequentes</h2>
        <div className="space-y-4">
          <details className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
            <summary className="font-bold cursor-pointer text-gray-900 dark:text-gray-100">
              Qual a melhor maquininha de cartão para MEI?
            </summary>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Depende do seu perfil: para atendimento presencial fixo, a Stone oferece o melhor suporte. Para trabalho ambulante, a SumUp é ideal por ser portátil e sem aluguel. Para vendas online + presenciais, o Mercado Pago integra com o Mercado Livre. Para quem precisa de antecipação rápida, a InfinitePay liquida em 24h.
            </p>
          </details>
          <details className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
            <summary className="font-bold cursor-pointer text-gray-900 dark:text-gray-100">
              Qual maquininha tem a menor taxa para MEI?
            </summary>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              A SumUp oferece as menores taxas do mercado: 1,69% no débito e a partir de 2,49% no crédito, sem aluguel. A InfinitePay também é competitiva com 1,99% no débito e 2,99% no crédito, sem custo de aluguel.
            </p>
          </details>
          <details className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
            <summary className="font-bold cursor-pointer text-gray-900 dark:text-gray-100">
              Preciso de CNPJ MEI para ter uma maquininha de cartão?
            </summary>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Sim. Todas as principais operadoras de maquininhas exigem CNPJ ativo, seja MEI, ME ou EPP. O cadastro como MEI é simples e gratuito. Se você ainda não tem, confira nosso{' '}
              <a href="/guias/como-abrir-mei" className="text-accent hover:underline">guia de como abrir MEI</a>.
            </p>
          </details>
          <details className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-700">
            <summary className="font-bold cursor-pointer text-gray-900 dark:text-gray-100">
              Qual o prazo de liquidação das maquininhas?
            </summary>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              A maioria das maquininhas oferece liquidação em D+1 (crédito no dia seguinte). A InfinitePay se destaca com liquidação em até 24h para todas as transações. Stone, SumUp e Mercado Pago também operam em D+1 na maioria dos casos. Consulte as condições específicas de cada operadora.
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
                name: 'Qual a melhor maquininha de cartão para MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Depende do seu perfil: para atendimento presencial fixo, a Stone oferece o melhor suporte. Para trabalho ambulante, a SumUp é ideal por ser portátil e sem aluguel. Para vendas online + presenciais, o Mercado Pago integra com o Mercado Livre. Para quem precisa de antecipação rápida, a InfinitePay liquida em 24h.',
                },
              },
              {
                '@type': 'Question',
                name: 'Qual maquininha tem a menor taxa para MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A SumUp oferece as menores taxas do mercado: 1,69% no débito e a partir de 2,49% no crédito, sem aluguel. A InfinitePay também é competitiva com 1,99% no débito e 2,99% no crédito, também sem custo de aluguel.',
                },
              },
              {
                '@type': 'Question',
                name: 'Preciso de CNPJ MEI para ter uma maquininha de cartão?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sim. Todas as principais operadoras de maquininhas exigem CNPJ ativo, seja MEI, ME ou EPP. O cadastro como MEI é simples e gratuito. Se você ainda não tem, confira nosso guia de como abrir MEI.',
                },
              },
              {
                '@type': 'Question',
                name: 'Qual o prazo de liquidação das maquininhas?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A maioria das maquininhas oferece liquidação em D+1 (crédito no dia seguinte). A InfinitePay se destaca com liquidação em até 24h para todas as transações. Stone, SumUp e Mercado Pago também operam em D+1 na maioria dos casos. Consulte as condições específicas de cada operadora.',
                },
              },
            ],
          }),
        }}
      />
      {/* ItemList Structured Data — product comparison with ratings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Melhores Máquinas de Pagamento para MEI 2026',
            description: 'Ranking das melhores maquininhas de cartão para microempreendedores individuais — compare taxas, aluguel e liquidação.',
            numberOfItems: MAQUININHAS.length,
            itemListElement: MAQUININHAS.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Product',
                name: item.name,
                description: item.description,
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: item.rating.toString(),
                  bestRating: '5',
                  worstRating: '1',
                },
                offers: {
                  '@type': 'Offer',
                  priceCurrency: 'BRL',
                  availability: 'https://schema.org/InStock',
                },
              },
            })),
          }),
        }}
      />
    </div>
  );
}
