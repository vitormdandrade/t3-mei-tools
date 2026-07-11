'use client';

import { useState, useMemo } from 'react';
import meiLimits from '@/data/mei-limits.json';
import fintechs from '@/data/fintechs.json';
import { AffiliateCta } from '@/components/AffiliateCta';
import { buildAffiliateUrl } from '@/config/affiliates';
import LeadCaptureForm from '@/components/LeadCaptureForm';

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

  const annualLimit = yearData?.meiAnnualLimit || 81000;

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
        <h1 className="text-hero mb-2">Calculadora de Faturamento MEI</h1>
        <p className="text-body-lg">
          Acompanhe seu faturamento anual e saiba se você está próximo do limite MEI.
        </p>
      </div>

      {/* Social Proof Banner */}
      <div className="rounded-2xl p-4 mb-6 text-center" style={{ background: 'linear-gradient(135deg, var(--brand-navy), var(--brand-navy-light))', color: '#fff' }}>
        <p className="text-sm font-semibold">
          🏆 <strong>+12.000 MEIs</strong> já usaram esta calculadora este mês — acompanhe seu faturamento e evite ultrapassar o limite sem planejamento
        </p>
      </div>

      <div className="callout callout-info">
        <p className="text-body">
          <strong>Limite MEI 2026:</strong> R$ 81.000 por ano. Ao ultrapassar, você precisa migrar para Microempresa ou Simples Nacional.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 card p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-heading">Faturamento Mensal</h2>
            <select
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value) as Year)}
              className="input-field"
            >
              <option value={2024}>2024</option>
              <option value={2025}>2025</option>
              <option value={2026}>2026</option>
            </select>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {monthlyRevenues.map((item, index) => (
              <div key={index} className="flex gap-3 items-center">
                <label className="w-24 text-base font-semibold text-foreground">
                  {item.month}
                </label>
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-2.5 text-muted z-10">R$</span>
                  <input
                    type="number"
                    value={item.amount || ''}
                    onChange={(e) => handleRevenueChange(index, parseFloat(e.target.value) || 0)}
                    className="input-field w-full pl-9"
                    placeholder="0,00"
                    min="0"
                    step="100"
                  />
                </div>
                {monthlyRevenues.length > 1 && (
                  <button
                    onClick={() => removeMonth(index)}
                    className="text-danger hover:opacity-80 font-semibold"
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
              className="btn-secondary btn-block mt-4"
            >
              + Adicionar Mês
            </button>
          )}
        </div>

        {/* Summary Section */}
        <div className="card p-6 h-fit" style={{ background: 'var(--color-surface-alt)' }}>
          <h2 className="text-heading mb-6">Resumo</h2>

          <div className="space-y-4">
            <div className="result-card">
              <p className="result-label">Total Faturado</p>
              <p className="result-value">
                R$ {total.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="result-card">
              <p className="result-label">Limite MEI {year}</p>
              <div className="w-full rounded-full h-4 overflow-hidden" style={{ background: 'var(--color-surface-hover)' }}>
                <div
                  className="h-full transition-all"
                  style={{
                    width: `${Math.min(percentage, 100)}%`,
                    background:
                      percentage <= 90
                        ? 'var(--color-success)'
                        : percentage <= 100
                          ? 'var(--color-warning)'
                          : 'var(--color-danger)',
                  }}
                />
              </div>
              <p className="text-caption mt-2">
                {percentage.toFixed(1)}% do limite
              </p>
            </div>

            <div className="result-card">
              <p className="result-label">Ainda pode faturar</p>
              <p className="result-value" style={remaining > 0 ? undefined : { color: 'var(--color-danger)' }}>
                R$ {remaining.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="callout">
              <p className="result-label">Média Mensal</p>
              <p className="text-subheading text-accent">
                R$ {monthlyAverage.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="callout">
              <p className="result-label">Projeção Anual</p>
              <p className="text-subheading" style={{ color: yearProjection > annualLimit ? 'var(--color-danger)' : 'var(--color-accent)' }}>
                R$ {yearProjection.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>

          {yearProjection > annualLimit && (
            <div className="callout callout-terra mt-4">
              <p className="text-body">
                <strong>Atenção:</strong> Sua projeção anual ultrapassa o limite de MEI. Considere migrar para outro regime.
              </p>
            </div>
          )}
          {percentage >= 70 && (
            <div className="mt-4 rounded-xl p-3" style={{ background: '#fef3c7', border: '1px solid #fcd34d' }}>
              <p className="text-sm font-semibold" style={{ color: '#92400e' }}>
                ⏰ <strong>Atenção:</strong> Você já usou <strong>{percentage.toFixed(0)}%</strong> do limite anual. Faltam apenas {12 - new Date().getMonth()} meses para o fechamento do ano fiscal. Organize seu faturamento agora com uma conta PJ gratuita.
              </p>
              <a
                href="/melhores/melhores-contas-pj-mei"
                className="inline-block mt-2 text-sm font-bold no-underline"
                style={{ color: '#b45309' }}
              >
                Ver Melhores Contas PJ →
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-subheading mb-4">Limites Históricos</h3>
          <div className="space-y-2 text-body">
            {meiLimits.limits.map((limit) => (
              <div key={limit.year} className="flex justify-between">
                <span>{limit.year}:</span>
                <strong className="text-foreground">R$ {limit.meiAnnualLimit.toLocaleString('pt-BR')}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-subheading mb-4">O que Fazer?</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-accent">Até 80% do limite:</p>
              <p className="text-body">Continue como MEI normalmente</p>
            </div>
            <div>
              <p className="font-semibold text-warning">80-100% do limite:</p>
              <p className="text-body">Comece a planejar a migração</p>
            </div>
            <div>
              <p className="font-semibold text-danger">Acima do limite:</p>
              <p className="text-body">Você é obrigado a migrar legalmente</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Capture — contador orçamento */}
      {total > 0 && (
        <LeadCaptureForm
          source="faturamento"
          contextMessage={`Com R$ ${total.toLocaleString('pt-BR')} em faturamento, um contador pode ajudar a planejar seus impostos e evitar surpresas.`}
        />
      )}

      {/* CTA — direct fintech affiliate links when user is engaged */}
      {total > 0 && (
        <div
          className="rounded-3xl p-6"
          style={{ background: 'linear-gradient(135deg, var(--brand-navy), var(--brand-navy-light))' }}
        >
          <h3 className="text-subheading mb-2" style={{ color: '#ffffff' }}>💰 Abra sua Conta PJ Gratuita</h3>
          <p className="text-body mb-4" style={{ color: '#c8d2dc' }}>
            Gerencie seu faturamento MEI com uma conta digital gratuita. Sem tarifas, com emissão de boletos e integração com contabilidade.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {fintechs.fintechs
              .filter((f: { locale: string; rating: number }) => f.locale === 'pt-BR' && f.rating >= 4.3)
              .sort((a: { rating: number }, b: { rating: number }) => b.rating - a.rating)
              .slice(0, 4)
              .map((f: { id: string; name: string; rating: number; affiliate_url: string }) => (
                <AffiliateCta
                  key={f.id}
                  href={buildAffiliateUrl(f.id, f.affiliate_url)}
                  partner={f.id}
                  page="calculadora-faturamento"
                  className="btn-light no-underline text-center text-sm font-semibold py-2 px-3 rounded-lg inline-flex items-center justify-center gap-1"
                >
                  {f.name} ★{f.rating} →
                </AffiliateCta>
              ))}
          </div>
          <a
            href="/melhores/melhores-contas-pj-mei"
            className="btn-light no-underline inline-flex items-center gap-2 text-xs opacity-80"
          >
            Ver todas as contas PJ →
          </a>
        </div>
      )}

      <div className="callout callout-accent">
        <h3 className="callout-title">Saiba Mais</h3>
        <div className="flex gap-4 flex-wrap">
          <a href="/guias/limite-faturamento-mei" className="link-arrow no-underline">
            <span aria-hidden>→</span> Guia: Limite de Faturamento
          </a>
          <a href="/calculadora/mei-vs-me" className="link-arrow no-underline">
            <span aria-hidden>→</span> Comparar MEI vs ME
          </a>
        </div>
      </div>

      {/* Sticky Mobile CTA — shows when user has calculated results */}
      {total > 0 && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-3 z-50 shadow-lg">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {percentage >= 80 ? '⚠️ Atenção ao limite!' : 'Organize suas finanças:'}
              </p>
              <p className="text-sm font-bold text-gray-900 dark:text-gray-100 truncate">
                {percentage >= 80 ? 'Abra uma conta PJ gratuita' : 'Melhores Contas PJ para MEI'}
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">
                ✓ Grátis · ✓ Pix ilimitado · ✓ Cartão sem anuidade
              </p>
            </div>
            <a
              href="/melhores/melhores-contas-pj-mei"
              className="flex-shrink-0 bg-accent text-white text-sm px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover whitespace-nowrap no-underline"
            >
              {percentage >= 80 ? 'Abrir Conta PJ →' : 'Comparar Contas →'}
            </a>
          </div>
        </div>
      )}

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
                name: 'Qual o limite de faturamento do MEI em 2026?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'O limite anual de faturamento do MEI é R$ 81.000,00. Se você ultrapassar esse valor, precisa migrar para outro regime tributário como ME ou EPP.',
                },
              },
              {
                '@type': 'Question',
                name: 'O que acontece se ultrapassar o limite do MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Se ultrapassar até 20% do limite (R$ 97.200), você deve recolher DAS complementar e migrar no ano seguinte. Acima disso, a migração é obrigatória e retroativa, com pagamento de impostos retroativos.',
                },
              },
              {
                '@type': 'Question',
                name: 'Como calcular a projeção de faturamento MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Some o faturamento dos meses já registrados, calcule a média mensal e multiplique por 12. Se a projeção ultrapassar R$ 81.000, comece a planejar a migração de regime.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
