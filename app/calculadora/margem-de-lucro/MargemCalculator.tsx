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

  return (
    <div className="space-y-8">
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
    </div>
  );
}
