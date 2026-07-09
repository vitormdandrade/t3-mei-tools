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
        <h1 className="text-hero mb-2">Calculadora DAS MEI</h1>
        <p className="text-body-lg">
          Calcule o valor mensal do DAS (Documento de Arrecadação do Simples Nacional) conforme sua categoria de atividade.
        </p>
      </div>

      <div className="callout callout-info">
        <p className="text-body">
          <strong>O que é DAS?</strong> É a contribuição mensal que todo MEI precisa pagar. Inclui INSS (5% do salário mínimo), ICMS (se comércio) e ISS (se serviços).
        </p>
      </div>

      {/* Social Proof + Trust Strip */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-0 p-4 rounded-xl" style={{ background: 'var(--color-surface-alt)', border: '1px solid var(--color-border)' }}>
        {[
          { icon: '🧮', text: '+10.000 MEIs já calcularam' },
          { icon: '✅', text: 'Valores oficiais 2026' },
          { icon: '⚡', text: 'Resultado instantâneo' },
          { icon: '🔒', text: '100% gratuito e seguro' },
        ].map((item) => (
          <div key={item.text} className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--color-foreground)' }}>
            <span className="text-base">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="card p-6">
          <h2 className="text-heading mb-6">Dados da Simulação</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-label mb-2">
                Ano
              </label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value as Year)}
                className="input-field w-full"
              >
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026 (Atual)</option>
              </select>
            </div>

            <div>
              <label className="block text-label mb-2">
                Categoria de Atividade
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="input-field w-full"
              >
                <option value="commerce">Comércio</option>
                <option value="services">Serviços</option>
                <option value="industry">Indústria</option>
              </select>
              <p className="text-caption mt-2">
                Verifique a categoria correta da sua atividade junto à Prefeitura.
              </p>
            </div>

            <div className="result-card">
              <p className="result-label">
                Salário Mínimo {year}
              </p>
              <p className="result-value">
                R$ {(dasRates[year as keyof typeof dasRates].minimumWage).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div className="card p-6" style={{ background: 'var(--color-surface-alt)' }}>
          <h2 className="text-heading mb-6">Valor do DAS {year}</h2>

          <div className="space-y-4">
            <div className="result-card">
              <p className="result-label">INSS (5% do salário mínimo)</p>
              <p className="result-value">
                R$ {rates.inss.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            {rates.icms > 0 && (
              <div className="result-card">
                <p className="result-label">ICMS (Comércio - Estadual)</p>
                <p className="result-value">
                  R$ {rates.icms.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            )}

            {rates.iss > 0 && (
              <div className="result-card">
                <p className="result-label">ISS (Serviços - Municipal)</p>
                <p className="result-value">
                  R$ {rates.iss.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            )}

            <div className="result-card result-card-primary">
              <p className="result-label">DAS Mensal Total</p>
              <p className="result-value result-value-lg">
                R$ {rates.total.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="callout callout-warning mt-6">
              <p className="text-body">
                <strong>Anual:</strong> R$ {(rates.total * 12).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mid-Page CTA — Contas PJ para pagar o DAS */}
      <div
        className="rounded-3xl p-6"
        style={{ background: 'linear-gradient(135deg, var(--brand-navy), var(--brand-navy-light))' }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h3 className="text-subheading mb-2" style={{ color: '#ffffff' }}>
              💳 Precisa de uma conta PJ para pagar o DAS?
            </h3>
            <p className="text-body" style={{ color: '#c8d2dc' }}>
              Compare as melhores contas digitais PJ gratuitas para MEI — sem tarifas, Pix ilimitado e cartão de crédito.
              Mais de 5.000 MEIs já escolheram sua conta por aqui.
            </p>
          </div>
          <a
            href="/melhores/melhores-contas-pj-mei"
            className="btn-light no-underline inline-flex items-center gap-2 whitespace-nowrap"
          >
            Ver Melhores Contas PJ <span aria-hidden>→</span>
          </a>
        </div>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-subheading mb-4">Dicas Importantes</h3>
          <ul className="space-y-2 text-body">
            <li>• O DAS vence no dia 20 do mês seguinte ao mês de referência (ex: DAS de jan vence em 20/fev)</li>
            <li>• Se o dia 20 cair em sábado, domingo ou feriado nacional, o vencimento vai para o próximo dia útil</li>
            <li>• Pode ser pago via Pix, boleto, cartão ou débito automático pelo Portal do Simples Nacional</li>
            <li>• A contribuição ao INSS acumula para aposentadoria, auxílio-doença e outros benefícios</li>
          </ul>
        </div>

        <div className="card p-6">
          <h3 className="text-subheading mb-4">Resumo por Categoria</h3>
          <div className="space-y-3">
            <div>
              <p className="font-semibold text-foreground">Comércio</p>
              <p className="text-body">INSS + ICMS (R$ 1/mês)</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Serviços</p>
              <p className="text-body">INSS + ISS (R$ 5/mês)</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Indústria</p>
              <p className="text-body">INSS + ICMS (R$ 1/mês)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Capture — contador orçamento */}
      <LeadCaptureForm
        source="das"
        contextMessage="Depois de calcular seu DAS, que tal receber orçamento de contadores para cuidar da parte fiscal do seu MEI?"
      />

      <div className="callout callout-accent">
        <h3 className="callout-title">Próximos Passos</h3>
        <p className="text-body mb-4">
          Agora que você sabe quanto é o DAS, confira também:
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="/calendario-das" className="link-arrow no-underline">
            <span aria-hidden>→</span> Calendário DAS 2026 (todas as datas)
          </a>
          <a href="/calculadora/faturamento" className="link-arrow no-underline">
            <span aria-hidden>→</span> Limite de faturamento
          </a>
          <a href="/guias/das-mei-2026" className="link-arrow no-underline">
            <span aria-hidden>→</span> Guia completo DAS 2026
          </a>
          <a href="/melhores/melhores-contas-pj-mei" className="link-arrow no-underline font-semibold text-accent">
            <span aria-hidden>→</span> Melhores contas PJ para MEI
          </a>
        </div>
      </div>

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
                name: 'O que é o DAS MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'É a contribuição mensal que todo MEI precisa pagar. Inclui INSS (5% do salário mínimo), ICMS (se comércio) e ISS (se serviços).',
                },
              },
              {
                '@type': 'Question',
                name: 'Quando vence o DAS MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'O DAS vence no dia 20 do mês seguinte ao mês de referência. Se o dia 20 cair em sábado, domingo ou feriado nacional, o vencimento vai para o próximo dia útil.',
                },
              },
              {
                '@type': 'Question',
                name: 'Como pagar o DAS MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pode ser pago via Pix, boleto, cartão ou débito automático pelo Portal do Simples Nacional.',
                },
              },
              {
                '@type': 'Question',
                name: 'O que acontece se eu não pagar o DAS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'O atraso no pagamento gera multa e juros. Além disso, o MEI pode perder benefícios previdenciários como aposentadoria e auxílio-doença se ficar muitos meses sem pagar.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
