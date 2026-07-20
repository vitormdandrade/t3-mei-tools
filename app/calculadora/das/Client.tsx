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

      {/* Trust + Social Proof Strip */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-8 p-4 rounded-xl" style={{ background: 'var(--brand-sand-warm)', border: '1px solid var(--color-border)' }}>
        {[
          { icon: '🧾', text: 'Cálculo 100% gratuito' },
          { icon: '📊', text: 'Dados oficiais da Receita Federal' },
          { icon: '⚡', text: 'Resultado instantâneo' },
          { icon: '🔒', text: 'Sem cadastro necessário' },
        ].map((item) => (
          <div key={item.text} className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--brand-navy)' }}>
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

            {/* Inline CTA inside results card */}
            <a
              href="/melhores/melhores-contas-pj-mei"
              className="mt-3 flex items-center justify-between gap-3 no-underline rounded-xl p-3 transition-all hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, var(--brand-teal), #0d9488)', color: '#fff' }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">💳</span>
                <span className="text-sm font-bold">Abra sua conta PJ gratuita para pagar o DAS</span>
              </div>
              <span className="text-sm font-bold whitespace-nowrap">Comparar Contas →</span>
            </a>

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

      {/* Urgency Banner — Próximo vencimento DAS */}
      <div className="rounded-2xl p-5 mb-6" style={{ background: '#fef3c7', border: '2px solid #f59e0b' }}>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⏰</span>
            <div>
              <p className="text-sm font-extrabold" style={{ color: '#92400e' }}>
                Próximo vencimento do DAS: dia {(() => { const today = new Date(); const year = today.getFullYear(); const month = today.getMonth(); const dueDate = new Date(year, month + 1, 20); const diffDays = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)); return diffDays > 0 ? `${diffDays} dias (${dueDate.toLocaleDateString('pt-BR')})` : 'HOJE!'; })()}
              </p>
              <p className="text-xs" style={{ color: '#a16207' }}>
                Não perca o prazo — organize seu pagamento agora com uma conta PJ gratuita
              </p>
            </div>
          </div>
          <a
            href="/melhores/melhores-contas-pj-mei"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold no-underline whitespace-nowrap"
            style={{ background: '#f59e0b', color: '#78350f' }}
          >
            Abrir Conta PJ Grátis →
          </a>
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

      {/* Sticky Mobile CTA — Melhores Contas PJ */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-3 z-50 shadow-lg">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 dark:text-gray-400">Abra sua conta PJ:</p>
            <p className="text-sm font-bold text-gray-900 dark:text-gray-100 truncate">
              Melhores Contas PJ para MEI 2026
            </p>
            <p className="text-xs text-green-600 dark:text-green-400">
              ✓ Grátis · ✓ Pix ilimitado · ✓ Cartão sem anuidade
            </p>
          </div>
          <a
            href="/melhores/melhores-contas-pj-mei"
            className="flex-shrink-0 bg-accent text-white text-sm px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover whitespace-nowrap no-underline"
          >
            Comparar Contas →
          </a>
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
        </div>
      </div>

      {/* Artigos Relacionados — cross-linking for SEO internal link graph */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <a
          href="/melhores/melhores-contas-pj-mei"
          className="card p-5 no-underline hover:shadow-md transition group border border-border rounded-xl"
        >
          <h3 className="text-subheading group-hover:text-accent transition-colors">💳 Melhores Contas PJ MEI</h3>
          <p className="text-body mt-1">Compare contas digitais gratuitas para pagar seu DAS sem tarifas — Pix ilimitado, cartão sem anuidade e abertura em minutos.</p>
        </a>
        <a
          href="/guias/abrir-conta-pj-mei"
          className="card p-5 no-underline hover:shadow-md transition group border border-border rounded-xl"
        >
          <h3 className="text-subheading group-hover:text-accent transition-colors">📋 Guia: Abrir Conta PJ MEI</h3>
          <p className="text-body mt-1">Passo a passo completo para abrir sua conta PJ gratuita e organizar as finanças do seu MEI.</p>
        </a>
        <a
          href="/calculadora/mei-vs-me"
          className="card p-5 no-underline hover:shadow-md transition group border border-border rounded-xl"
        >
          <h3 className="text-subheading group-hover:text-accent transition-colors">⚖️ MEI vs ME: Qual escolher?</h3>
          <p className="text-body mt-1">Compare cargas tributárias, obrigações e descubra se já é hora de migrar para ME.</p>
        </a>
        <a
          href="/calculadora/inss-autonomo"
          className="card p-5 no-underline hover:shadow-md transition group border border-border rounded-xl"
        >
          <h3 className="text-subheading group-hover:text-accent transition-colors">🧮 Calculadora INSS Autônomo</h3>
          <p className="text-body mt-1">Compare quanto você pagaria de INSS como autônomo vs. MEI e veja qual vale mais a pena.</p>
        </a>
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
      {/* Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Oráculo do MEI',
            url: 'https://oraculodomei.com.br',
            description: 'Calculadoras, guias e comparativos gratuitos para MEI. DAS, contas PJ, maquininhas e tudo que o microempreendedor individual precisa.',
            sameAs: [
              'https://oraculodomei.com.br',
            ],
          }),
        }}
      />
      {/* BreadcrumbList Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Início',
                item: 'https://oraculodomei.com.br',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Calculadoras',
                item: 'https://oraculodomei.com.br/calculadora',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Calculadora DAS MEI',
                item: 'https://oraculodomei.com.br/calculadora/das',
              },
            ],
          }),
        }}
      />
    </div>
  );
}
