import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guia Completo DAS MEI 2026 - Valores, Prazos e Pagamento",
  description: "Entenda tudo sobre DAS MEI 2026: valores atualizados, como pagar, prazos e penalidades.",
  alternates: { canonical: '/guias/das-mei-2026' },
  openGraph: {
    title: "Guia Completo DAS MEI 2026 — Valores Atualizados",
    description: "DAS MEI 2026: tabela atualizada com INSS, ICMS e ISS. Como pagar, prazos e multas por atraso.",
    type: 'article',
  },
};

export default function DasMei2026() {
  return (
      <article className="prose-guide max-w-3xl mx-auto">
        <header className="mb-10">
          <span className="text-label">Guia</span>
          <h1 className="text-hero mt-2 mb-4">Guia Completo: DAS MEI 2026</h1>
          <p className="text-body-lg">
            Tudo que você precisa saber sobre o Documento de Arrecadação do Simples Nacional (DAS) para MEI em 2026.
          </p>
        </header>

      <h2>O que é DAS?</h2>
      <p>
        O DAS é a contribuição mensal que todo MEI precisa pagar à Prefeitura e ao INSS. É o &quot;imposto&quot; do MEI, mas bem mais simples e barato que outros regimes.
      </p>

      <h2>Valores DAS 2026</h2>
      <p>Com o salário mínimo em R$ 1.518, os valores de DAS para 2026 são:</p>
      <div className="overflow-x-auto my-6">
        <table className="table-compare">
          <thead>
            <tr>
              <th>Categoria</th>
              <th>INSS</th>
              <th>Taxa Municipal</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Comércio</td>
              <td>R$ 75,90</td>
              <td>R$ 1,00</td>
              <td><strong>R$ 76,90</strong></td>
            </tr>
            <tr>
              <td>Serviços</td>
              <td>R$ 75,90</td>
              <td>R$ 5,00</td>
              <td><strong>R$ 80,90</strong></td>
            </tr>
            <tr>
              <td>Indústria</td>
              <td>R$ 75,90</td>
              <td>R$ 1,00</td>
              <td><strong>R$ 76,90</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Como Pagar DAS</h2>
      <div className="callout callout-info my-6">
        <p className="callout-title">Opções de Pagamento</p>
        <ul>
          <li><strong>Banco:</strong> Todos os bancos recebem boleto do DAS</li>
          <li><strong>Lotérica:</strong> Rápido e fácil</li>
          <li><strong>Prefeitura:</strong> Direto na secretaria de finanças</li>
          <li><strong>App MEI:</strong> Pagamento online via aplicativo oficial</li>
          <li><strong>Internet Banking:</strong> Alguns bancos permitem boleto pelo app</li>
        </ul>
      </div>

      <h2>Prazos</h2>
      <ul>
        <li><strong>Vencimento:</strong> dia 20 do mês seguinte ao mês de referência. Ex: o DAS de Janeiro/2026 vence em 20 de Fevereiro de 2026.</li>
        <li><strong>Fim de semana ou feriado:</strong> se o dia 20 cair em sábado, domingo ou feriado nacional, o vencimento é transferido para o próximo dia útil, sem multa.</li>
        <li><strong>Tolerância:</strong> o DAS atrasado pode ser pago, mas gera multa de 0,33% ao dia (limitada a 20%) + juros Selic.</li>
        <li><strong>Bloqueio CNPJ:</strong> pode ocorrer após 180 dias de atraso.</li>
      </ul>
      <p>
        Veja as 12 datas de 2026, já ajustadas, no{' '}
        <a href="/calendario-das">Calendário DAS 2026</a>
        {' '}— você pode baixar o arquivo .ics para importar no Google Calendar ou Apple Calendar.
      </p>

      <h2>O que Acontece se Não Pagar o DAS?</h2>
      <p>
        Deixar de pagar o DAS gera consequências progressivas que podem levar ao cancelamento do seu CNPJ MEI. Entenda cada etapa:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="table-compare">
          <thead>
            <tr>
              <th>Tempo de Atraso</th>
              <th>Consequência</th>
              <th>Como Resolver</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1-30 dias</td>
              <td>Multa de 0,33% ao dia (limitada a 20%) + juros Selic</td>
              <td>Emitir DAS em atraso pelo PGMEI e pagar com acréscimos</td>
            </tr>
            <tr>
              <td>31-90 dias</td>
              <td>Multa atinge 20% + juros acumulados. Nome inscrito na Dívida Ativa da União</td>
              <td>Parcelar débito no Portal do Simples Nacional (até 60x)</td>
            </tr>
            <tr>
              <td>91-180 dias</td>
              <td>Dívida Ativa consolidada. Restrição no CPF (Serasa, SPC)</td>
              <td>Negociar parcelamento ou pagamento à vista com desconto de juros</td>
            </tr>
            <tr>
              <td>Mais de 180 dias</td>
              <td>CNPJ pode ser declarado inapto. Perda de benefícios previdenciários (INSS)</td>
              <td>Regularizar todos os débitos e solicitar reativação na Receita Federal</td>
            </tr>
            <tr>
              <td>Mais de 2 anos sem pagamento</td>
              <td>CNPJ cancelado definitivamente. Perda do direito ao MEI</td>
              <td>Abrir novo CNPJ (se elegível) ou migrar para ME/EPP</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="callout callout-warning my-6">
        <p className="callout-title">⚠️ Atenção aos Benefícios do INSS</p>
        <p>
          Ao deixar de pagar o DAS por mais de 12 meses consecutivos, você <strong>perde o direito a benefícios previdenciários</strong> como auxílio-doença, salário-maternidade e aposentadoria. Para recuperar, é necessário pagar todos os débitos em atraso e cumprir nova carência.
        </p>
      </div>

      <h2>Como Regularizar DAS Atrasado</h2>
      <ol>
        <li>Acesse o <strong>PGMEI</strong> (Programa Gerador do DAS para MEI) no portal do Simples Nacional</li>
        <li>Selecione o ano-calendário com débitos pendentes</li>
        <li>O sistema calcula automaticamente multa e juros</li>
        <li>Emita o DAS atualizado e pague no banco ou internet banking</li>
        <li>Guarde o comprovante — a baixa no sistema leva até 48h</li>
      </ol>
      <p>
        Para parcelamento, acesse o <strong>Portal do Simples Nacional</strong> → "Parcelamento" → "Parcelamento de Débitos do MEI". O valor mínimo da parcela é R$ 50,00 e o prazo máximo é de 60 meses.
      </p>

      <div className="callout callout-accent my-8">
        <p className="callout-title">Use Nossa Calculadora</p>
        <p className="mb-4">Saiba exatamente quanto você pagará de DAS:</p>
        <a href="/calculadora/das" className="btn-primary no-underline inline-flex">
          Calcular DAS 2026
        </a>
      </div>

      {/* Kit MEI CTA */}
      <div className="callout callout-accent my-8">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <p className="callout-title">
              📋 Já é MEI? Precisa de documentos!
            </p>
            <p>
              Contrato de prestação de serviços, nota fiscal, recibos — tudo que você precisa para trabalhar como MEI. Nosso Kit inclui 4 modelos profissionais em PDF prontos para usar.
            </p>
          </div>
          <a
            href="/kit-mei"
            className="btn-primary no-underline inline-flex whitespace-nowrap"
          >
            Comprar Kit MEI — R$ 29,90
          </a>
        </div>
      </div>

      <h2>Conteúdo Relacionado</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          ['/guias/como-abrir-mei', 'Como Abrir MEI', 'Guia passo a passo para registrar seu MEI gratuitamente'],
          ['/calendario-das', 'Calendário DAS 2026', 'Datas de vencimento para download (.ics)'],
          ['/guias/limite-faturamento-mei', 'Limite de Faturamento MEI', 'Entenda o teto de R$ 81 mil e o que fazer se ultrapassar'],
          ['/guias/abrir-conta-pj-mei', 'Abrir Conta PJ para MEI', 'Compare as melhores contas PJ gratuitas para seu CNPJ'],
        ].map(([href, title, desc]) => (
          <a key={href} href={href} className="card card-hover no-underline p-4 flex flex-col gap-1">
            <span className="font-semibold" style={{ color: 'var(--color-foreground)' }}>{title} →</span>
            <span className="text-caption">{desc}</span>
          </a>
        ))}
      </div>

      {/* Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Guia Completo DAS MEI 2026 — Valores, Prazos e Pagamento',
            description:
              'Tudo sobre o DAS MEI 2026: valores atualizados com o novo salário mínimo, tabela por categoria, como pagar, prazos, multas e consequências do não pagamento.',
            author: {
              '@type': 'Organization',
              name: 'Oráculo do MEI',
              url: 'https://oraculodomei.com.br',
            },
            datePublished: '2025-01-01',
            dateModified: '2026-07-16',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://oraculodomei.com.br/guias/das-mei-2026',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Oráculo do MEI',
              url: 'https://oraculodomei.com.br',
            },
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
                name: 'Guias',
                item: 'https://oraculodomei.com.br/guias',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'DAS MEI 2026',
              },
            ],
          }),
        }}
      />
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
                name: 'Qual o valor do DAS MEI em 2026?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Com o salário mínimo em R$ 1.518, o DAS para comércio é R$ 76,90, para serviços é R$ 80,90, e para indústria é R$ 76,90. Inclui INSS (5% do salário mínimo) mais taxa municipal.',
                },
              },
              {
                '@type': 'Question',
                name: 'Quando vence o DAS MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'O DAS vence no dia 20 do mês seguinte ao mês de referência. Se o dia 20 cair em sábado, domingo ou feriado nacional, o vencimento é transferido para o próximo dia útil, sem multa.',
                },
              },
              {
                '@type': 'Question',
                name: 'Como pagar o DAS MEI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Pode ser pago via boleto em qualquer banco, casa lotérica, app MEI, internet banking ou direto na prefeitura.',
                },
              },
              {
                '@type': 'Question',
                name: 'O que acontece se eu não pagar o DAS?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'O atraso gera multa de 0,33% ao dia (limitada a 20%) mais juros Selic. Após 180 dias de atraso, o CNPJ pode ser bloqueado e o MEI perde benefícios previdenciários.',
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
