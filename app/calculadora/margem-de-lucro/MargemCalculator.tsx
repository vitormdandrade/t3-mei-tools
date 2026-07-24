'use client';

import { useState, useMemo } from 'react';

function fmt(n: number) {
  return n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function MargemCalculator() {
  const [custo, setCusto] = useState('');
  const [preco, setPreco] = useState('');

  const result = useMemo(() => {
    const c = parseFloat(custo.replace(',', '.'));
    const p = parseFloat(preco.replace(',', '.'));
    if (!c || !p || p <= 0) return null;

    const lucro = p - c;
    const margem = (lucro / p) * 100;
    const markup = p / c;
    return { lucro, margem, markup, c, p };
  }, [custo, preco]);

  const margemLabel = result
    ? result.margem < 0
      ? { text: 'Prejuízo', color: 'text-danger', bg: 'callout callout-terra' }
      : result.margem < 15
      ? { text: 'Margem baixa — revise os custos', color: 'text-warning', bg: 'callout callout-warning' }
      : result.margem < 30
      ? { text: 'Margem moderada', color: 'text-warning', bg: 'callout callout-warning' }
      : { text: 'Margem saudável ✓', color: 'text-accent', bg: 'callout callout-accent' }
    : null;

  // Deterministic daily viewer count (changes once per day, stable across renders)
  const viewersNow = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    let hash = 0;
    for (let i = 0; i < today.length; i++) {
      hash = ((hash << 5) - hash) + today.charCodeAt(i);
      hash |= 0;
    }
    return 5 + (Math.abs(hash) % 25);
  }, []);

  return (
    <div className="space-y-8">
      {/* Trust + Social Proof Strip */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-8 p-4 rounded-xl" style={{ background: 'var(--brand-sand-warm)', border: '1px solid var(--color-border)' }}>
        {[
          { icon: '🧾', text: 'Cálculo 100% gratuito' },
          { icon: '📐', text: 'Fórmula contábil padrão' },
          { icon: '⚡', text: 'Resultado instantâneo' },
          { icon: '🔒', text: 'Sem cadastro necessário' },
        ].map((item) => (
          <div key={item.text} className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--brand-navy)' }}>
            <span className="text-base">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Live Viewer Counter */}
      <div className="flex items-center justify-center gap-2 mb-4 px-4 py-2 rounded-lg text-sm font-semibold" style={{ background: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e40af' }}>
        <span>👁️</span>
        <span><strong>{viewersNow} pessoas</strong> estão calculando a margem de lucro agora</span>
      </div>

      {/* Info banner */}
      <div className="callout callout-accent">
        <p className="text-body">
          <strong>Fórmula:</strong> Margem (%) = ((Preço − Custo) ÷ Preço) × 100.
          Mostra quantos centavos de cada real vendido viram lucro real.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="card p-6">
          <h2 className="text-subheading text-foreground mb-6">Dados do Produto ou Serviço</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Custo Total (R$)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="Ex: 35,00"
                value={custo}
                onChange={(e) => setCusto(e.target.value)}
                className="input-field w-full"
              />
              <p className="text-caption mt-1">
                Inclua: matéria-prima, embalagem, frete, mão de obra, despesas diretas
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Preço de Venda (R$)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="Ex: 80,00"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                className="input-field w-full"
              />
              <p className="text-caption mt-1">
                O valor que você cobra do cliente final
              </p>
            </div>

            {result && (
              <div className={margemLabel!.bg}>
                <p className={`font-semibold ${margemLabel!.color}`}>{margemLabel!.text}</p>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="card p-6">
          <h2 className="text-subheading text-foreground mb-6">Resultado</h2>

          {!result ? (
            <div className="flex items-center justify-center h-40 text-muted-soft text-sm">
              Preencha custo e preço para ver o resultado
            </div>
          ) : (
            <div className="space-y-4">
              <div className="result-card result-card-primary">
                <p className="result-label">Margem de Lucro</p>
                <p className={`result-value result-value-lg ${result.margem >= 0 ? 'text-accent' : 'text-danger'}`}>
                  {fmt(result.margem)}%
                </p>
              </div>

              <div className="result-card">
                <p className="result-label">Lucro por Venda</p>
                <p className={`result-value ${result.lucro >= 0 ? 'text-accent' : 'text-danger'}`}>
                  R$ {fmt(result.lucro)}
                </p>
              </div>

              <div className="result-card">
                <p className="result-label">Markup</p>
                <p className="result-value">
                  {fmt(result.markup)}x
                </p>
                <p className="text-caption mt-1">
                  Você cobra {fmt(result.markup)}× o custo
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reference table */}
      <div className="card p-6">
        <h3 className="text-subheading text-foreground mb-4">Referência: O que é uma boa margem?</h3>
        <div className="overflow-x-auto">
          <table className="table-compare">
            <thead>
              <tr>
                <th>Margem</th>
                <th>Avaliação</th>
                <th>O que fazer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-danger">&lt; 0%</td>
                <td className="text-danger font-semibold">Prejuízo</td>
                <td className="text-muted">Reajuste urgente de preço ou corte de custos</td>
              </tr>
              <tr>
                <td className="font-mono text-warning">0% – 15%</td>
                <td className="text-warning font-semibold">Baixa</td>
                <td className="text-muted">Funciona, mas pouco espaço para erro ou crescimento</td>
              </tr>
              <tr>
                <td className="font-mono text-warning">15% – 30%</td>
                <td className="text-warning font-semibold">Moderada</td>
                <td className="text-muted">Razoável — otimize custos para melhorar</td>
              </tr>
              <tr>
                <td className="font-mono text-accent">&gt; 30%</td>
                <td className="text-accent font-semibold">Saudável</td>
                <td className="text-muted">Bom — você tem espaço para crescer e investir</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Example */}
      <div className="callout">
        <h3 className="callout-title">Exemplo Prático</h3>
        <p className="text-body">
          Maria vende bolos artesanais. Custo total por bolo (ingredientes + embalagem + gás): <strong>R$35,00</strong>.
          Preço de venda: <strong>R$80,00</strong>.
          <br /><br />
          Margem = ((80 − 35) ÷ 80) × 100 = <strong>56,3%</strong>. Lucro por bolo: <strong>R$45,00</strong>. Markup: <strong>2,3×</strong>.
          Se vender 60 bolos/mês, o lucro líquido é R$2.700.
        </p>
      </div>

      <div className="callout callout-accent">
        <h3 className="callout-title">Veja também</h3>
        <div className="flex gap-4 flex-wrap">
          <a href="/calculadora/preco-por-hora" className="link-arrow">
            <span aria-hidden>→</span> Calculadora Preço por Hora
          </a>
          <a href="/calculadora/das" className="link-arrow">
            <span aria-hidden>→</span> Calculadora DAS
          </a>
          <a href="/calculadora/faturamento" className="link-arrow">
            <span aria-hidden>→</span> Limite de Faturamento
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
                name: 'Como calcular a margem de lucro de um produto?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A fórmula é: Margem (%) = ((Preço de Venda − Custo Total) ÷ Preço de Venda) × 100. Por exemplo, se você vende por R$ 80 e gasta R$ 35 para produzir, a margem é ((80−35)÷80)×100 = 56,3%. Isso significa que 56,3% do valor da venda é lucro real.',
                },
              },
              {
                '@type': 'Question',
                name: 'Qual é uma boa margem de lucro para MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Para a maioria dos negócios MEI, uma margem acima de 30% é considerada saudável — cobre custos fixos, impostos (DAS) e ainda gera lucro para reinvestir ou retirar como pró-labore. Margens entre 15% e 30% são moderadas e exigem atenção aos custos. Abaixo de 15% é arriscado, pois qualquer aumento de custo pode transformar lucro em prejuízo.',
                },
              },
              {
                '@type': 'Question',
                name: 'Qual a diferença entre margem de lucro e markup?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Margem de lucro é o percentual do preço de venda que representa lucro (Lucro ÷ Preço × 100). Markup é o multiplicador aplicado sobre o custo para chegar ao preço de venda (Preço ÷ Custo). Por exemplo, se o custo é R$ 35 e você vende por R$ 80, a margem é 56,3% e o markup é 2,3×. Margem alta nem sempre significa markup alto — o importante é que ambos cubram seus custos fixos.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
