'use client';

import { useState, useMemo } from 'react';

function fmt(n: number) {
  return n.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function fmtInt(n: number) {
  return Math.ceil(n).toLocaleString('pt-BR');
}

export default function PontoEquilibrioCalculator() {
  const [custosFixos, setCustosFixos] = useState('');
  const [preco, setPreco] = useState('');
  const [custoVariavel, setCustoVariavel] = useState('');

  const result = useMemo(() => {
    const cf = parseFloat(custosFixos.replace(',', '.'));
    const p = parseFloat(preco.replace(',', '.'));
    const cv = parseFloat(custoVariavel.replace(',', '.'));
    if (!cf || !p || cv === undefined || isNaN(cv) || p <= 0) return null;

    const margemContribUnitaria = p - cv;
    if (margemContribUnitaria <= 0) {
      return {
        invalid: true as const,
        margemContribUnitaria,
      };
    }

    const margemContribPct = (margemContribUnitaria / p) * 100;
    const unidades = cf / margemContribUnitaria;
    const faturamento = unidades * p;

    return {
      invalid: false as const,
      margemContribUnitaria,
      margemContribPct,
      unidades,
      faturamento,
      cf,
      p,
      cv,
    };
  }, [custosFixos, preco, custoVariavel]);

  return (
    <div className="space-y-8">
      {/* Info banner */}
      <div className="bg-accent-soft border border-accent rounded-lg p-4">
        <p className="text-sm text-foreground">
          <strong>Fórmula:</strong> Ponto de Equilíbrio (unidades) = Custos Fixos
          ÷ (Preço − Custo Variável por unidade). É a quantidade mínima que
          cobre todas as suas contas mensais — abaixo disso, você está no
          prejuízo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="border dark:border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Seus Números</h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Custos Fixos Mensais (R$)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="Ex: 3.500,00"
                value={custosFixos}
                onChange={(e) => setCustosFixos(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 rounded-lg text-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Aluguel, DAS, internet, telefone, contador, pró-labore, software
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Preço de Venda Unitário (R$)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="Ex: 80,00"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 rounded-lg text-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Valor que você cobra por produto ou serviço
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Custo Variável por Unidade (R$)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="Ex: 35,00"
                value={custoVariavel}
                onChange={(e) => setCustoVariavel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 rounded-lg text-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Matéria-prima, embalagem, frete — só o que varia por venda
              </p>
            </div>

            {result?.invalid && (
              <div className="rounded-lg p-4 border dark:border-gray-700 bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800">
                <p className="font-semibold text-red-700 dark:text-red-300 text-sm">
                  Custo variável maior ou igual ao preço — impossível cobrir
                  os fixos. Reajuste o preço ou reduza o custo variável antes
                  de continuar.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="border dark:border-gray-700 rounded-lg p-6 bg-accent-soft">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Resultado</h2>

          {!result ? (
            <div className="flex items-center justify-center h-40 text-gray-400 dark:text-gray-400 text-sm text-center">
              Preencha custos fixos, preço e custo variável para ver o resultado
            </div>
          ) : result.invalid ? (
            <div className="flex items-center justify-center h-40 text-red-500 dark:text-red-400 text-sm text-center px-4">
              Preço precisa ser maior que o custo variável
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-accent">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Unidades por mês</p>
                <p className="text-4xl font-bold text-accent">
                  {fmtInt(result.unidades)}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-400 mt-1">
                  Mínimo de vendas para não ter prejuízo
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-accent">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Faturamento mínimo mensal</p>
                <p className="text-3xl font-bold text-accent">
                  R$ {fmt(result.faturamento)}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Margem de contribuição
                </p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {fmt(result.margemContribPct)}%
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-400 mt-1">
                  R$ {fmt(result.margemContribUnitaria)} por unidade vendida
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Explanation */}
      <div className="border dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
          O que são custos fixos e variáveis?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Custos Fixos (não dependem do volume)
            </h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-400 list-disc list-inside">
              <li>Aluguel do ponto comercial</li>
              <li>DAS MEI (R$ 71,10 a R$ 77,10 em 2026)</li>
              <li>Internet, telefone, energia base</li>
              <li>Contador, software, assinaturas</li>
              <li>Pró-labore (seu salário)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Custos Variáveis (dependem de cada venda)
            </h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-400 list-disc list-inside">
              <li>Matéria-prima por unidade</li>
              <li>Embalagem</li>
              <li>Frete de cada pedido</li>
              <li>Taxa da maquininha de cartão (%)</li>
              <li>Comissão por venda</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Example */}
      <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">Exemplo Prático</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm">
          Ana tem uma confeitaria MEI. Custos fixos mensais:{' '}
          <strong>R$ 3.500</strong> (aluguel R$ 1.500 + DAS R$ 71 + internet R$
          120 + contador R$ 150 + gás/energia base R$ 300 + pró-labore R$
          1.359). Cada bolo vende por <strong>R$ 80</strong> e custa{' '}
          <strong>R$ 35</strong> em ingredientes e embalagem.
          <br />
          <br />
          Margem de contribuição = R$ 80 − R$ 35 ={' '}
          <strong>R$ 45 por bolo</strong>. Ponto de equilíbrio = R$ 3.500 ÷ R$
          45 = <strong>78 bolos/mês</strong> (≈ R$ 6.240 de faturamento). A
          partir do bolo 79, cada R$ 45 de margem vira lucro real.
        </p>
      </div>

      {/* Tips */}
      <div className="bg-yellow-50 dark:bg-yellow-950/40 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
        <h3 className="text-base font-bold text-yellow-900 dark:text-yellow-200 mb-3">
          Como usar esse número
        </h3>
        <ul className="space-y-2 text-sm text-yellow-900 dark:text-yellow-200 list-disc list-inside">
          <li>
            <strong>Meta mínima:</strong> se está faturando abaixo disso, você
            está consumindo caixa — ajuste preço, corte custo fixo ou aumente
            volume rapidamente.
          </li>
          <li>
            <strong>Preço de liquidação:</strong> nunca venda abaixo do custo
            variável em promoção — você perde dinheiro em cada unidade, não só
            deixa de lucrar.
          </li>
          <li>
            <strong>Decisão de investir:</strong> antes de assumir um custo
            fixo novo (equipamento, aluguel maior), recalcule o ponto de
            equilíbrio com o custo novo.
          </li>
          <li>
            <strong>Atenção MEI:</strong> lembre-se do limite de R$ 81.000/ano
            (R$ 6.750/mês em média). Se seu ponto de equilíbrio estiver perto
            disso, considere migrar para ME.
          </li>
        </ul>
      </div>

      <div className="bg-accent-soft border border-accent rounded-lg p-6">
        <h3 className="text-base font-bold text-foreground mb-3">Veja também</h3>
        <div className="flex gap-4 flex-wrap">
          <a
            href="/calculadora/margem-de-lucro"
            className="text-accent font-semibold hover:underline text-sm"
          >
            → Margem de Lucro
          </a>
          <a
            href="/calculadora/preco-por-hora"
            className="text-accent font-semibold hover:underline text-sm"
          >
            → Preço por Hora
          </a>
          <a
            href="/calculadora/faturamento"
            className="text-accent font-semibold hover:underline text-sm"
          >
            → Limite de Faturamento
          </a>
          <a
            href="/calculadora/mei-vs-me"
            className="text-accent font-semibold hover:underline text-sm"
          >
            → MEI vs ME
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
                name: 'Como calcular o ponto de equilíbrio do MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Divida seus custos fixos mensais pela margem de contribuição unitária (preço de venda menos custo variável por unidade). O resultado é o número mínimo de vendas para cobrir todas as despesas. Exemplo: custos fixos de R$ 3.500, preço de R$ 80 e custo variável de R$ 35 → margem de R$ 45 → ponto de equilíbrio de 78 unidades/mês.',
                },
              },
              {
                '@type': 'Question',
                name: 'Qual a diferença entre ponto de equilíbrio e lucro?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'O ponto de equilíbrio é o volume de vendas onde receita total iguala custo total — você não tem lucro nem prejuízo. Abaixo dele, você está no vermelho. Acima, cada venda adicional gera lucro igual à margem de contribuição. Para o MEI, conhecer esse número é essencial para definir metas mínimas de faturamento.',
                },
              },
              {
                '@type': 'Question',
                name: 'O limite de faturamento do MEI afeta o ponto de equilíbrio?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sim. O MEI tem limite de R$ 81.000/ano (média de R$ 6.750/mês). Se o seu ponto de equilíbrio estiver próximo desse valor, você tem pouca margem para lucro real. Considere migrar para ME se o faturamento projetado ultrapassar consistentemente o teto do MEI.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
