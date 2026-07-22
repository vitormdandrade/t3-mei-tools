import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desenquadramento MEI 2026 — Como Migrar para ME ou Simples Nacional",
  description: "Guia completo sobre desenquadramento MEI: quando é obrigatório, como migrar para ME ou Simples Nacional e evitar multas da Receita Federal.",
  alternates: {
    canonical: '/guias/desenquadramento-mei',
    languages: {
      'pt-BR': 'https://oraculodomei.com.br/guias/desenquadramento-mei',
      'en': 'https://oraculodomei.com.br/en/guias/desenquadramento-mei',
    },
  },
  openGraph: {
    title: "Desenquadramento MEI 2026 — Guia Completo de Migração",
    description: "Quando e como migrar de MEI para ME ou Simples Nacional: regras 2026, prazos e penalidades da Receita Federal.",
    type: 'article',
  },
};

export default function DesenquadramentoMEI() {
  return (
    <article className="prose-guide max-w-3xl mx-auto">
      <header className="mb-10">
        <span className="text-label">Guia</span>
        <h1 className="text-hero mt-2 mb-4">Desenquadramento MEI 2026: Como Migrar para ME ou Simples Nacional</h1>
        <p className="text-body-lg">
          Quando seu faturamento ultrapassa o limite do MEI, você precisa migrar para outro regime tributário. Entenda o processo completo.
        </p>
      </header>

      <div className="callout callout-warning my-6">
        <p className="callout-title">⚠️ Atenção</p>
        <p>O desenquadramento não é opcional. Ultrapassou R$ 81.000 no ano? A migração é <strong>obrigatória</strong> no ano seguinte.</p>
      </div>

      <h2>O Que é o Desenquadramento MEI?</h2>
      <p>
        O desenquadramento é o processo de migração do regime MEI (Microempreendedor Individual) para ME (Microempresa) 
        ou para o Simples Nacional. Ele acontece quando o faturamento anual ultrapassa o limite legal de R$ 81.000 — ou 
        quando a atividade exercida deixa de se enquadrar nas categorias permitidas para MEI.
      </p>

      <h2>Quando o Desenquadramento é Obrigatório?</h2>
      <p>Existem duas situações que obrigam o desenquadramento:</p>

      <div className="overflow-x-auto my-6">
        <table className="table-compare">
          <thead>
            <tr>
              <th>Situação</th>
              <th>Gatilho</th>
              <th>Prazo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Excesso de faturamento</strong></td>
              <td>Receita bruta anual &gt; R$ 81.000</td>
              <td>Até o último dia útil de janeiro do ano seguinte</td>
            </tr>
            <tr>
              <td><strong>Atividade não permitida</strong></td>
              <td>Exercício de CNAE fora da lista MEI</td>
              <td>Imediato — 30 dias após início da nova atividade</td>
            </tr>
            <tr>
              <td><strong>Abertura de filial</strong></td>
              <td>Segundo estabelecimento</td>
              <td>Imediato — MEI não pode ter filial</td>
            </tr>
            <tr>
              <td><strong>Sócio em outra empresa</strong></td>
              <td>Participação como sócio ou administrador</td>
              <td>Na data do registro na Junta Comercial</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Excesso de Faturamento: Regras Detalhadas</h2>
      <h3>Até 20% acima do limite (R$ 81.000 a R$ 97.200)</h3>
      <p>
        Se você faturou entre R$ 81.000,01 e R$ 97.200 no ano, o <strong>desenquadramento só vale para o ano seguinte</strong>. 
        Você continua como MEI até 31 de dezembro e paga DAS complementar sobre o excedente (recolhimento em guia avulsa).
      </p>
      <div className="callout callout-info my-6">
        <p className="callout-title">DAS Complementar</p>
        <p>O excedente paga INSS patronal (20%) + imposto conforme atividade (ISS/ICMS). A guia é gerada no Portal do Simples Nacional.</p>
      </div>

      <h3>Acima de 20% do limite (&gt; R$ 97.200)</h3>
      <p>
        Se você ultrapassou <strong>mais de 20%</strong> do limite (acima de R$ 97.200), o desenquadramento é 
        <strong> retroativo a janeiro do ano do excesso</strong>. Você precisará retificar todas as declarações e 
        recolher tributos retroativos como ME ou Simples Nacional.
      </p>
      <div className="callout callout-warning my-6">
        <p className="callout-title">⚠️ Penalidade</p>
        <p>Multa de 2% ao mês sobre tributos não recolhidos, limitada a 20%, mais juros Selic. Não ignore esse prazo.</p>
      </div>

      <h2>Passo a Passo: Como Fazer o Desenquadramento</h2>
      <ol className="space-y-4">
        <li>
          <strong>1. Acesse o Portal do Simples Nacional</strong><br />
          Vá para <a href="https://www8.receita.fazenda.gov.br/SimplesNacional/" target="_blank" rel="noopener">Simples Nacional</a> e faça login com certificado digital ou código de acesso.
        </li>
        <li>
          <strong>2. Solicite o Desenquadramento</strong><br />
          No menu "Simples — Serviços", clique em "Desenquadramento do MEI". Informe o motivo (excesso de receita, atividade impeditiva, etc.).
        </li>
        <li>
          <strong>3. Escolha o Novo Regime</strong><br />
          Você pode optar por ME (Microempresa) no Simples Nacional ou outro regime (Lucro Presumido, Lucro Real). Para a maioria, o Simples é o mais vantajoso.
        </li>
        <li>
          <strong>4. Emita o DAS Complementar (se aplicável)</strong><br />
          Se houve excesso de faturamento, gere a guia DAS Complementar no PGMEI e pague o valor devido.
        </li>
        <li>
          <strong>5. Atualize o Cadastro na Junta Comercial</strong><br />
          Após o desenquadramento, você precisa alterar seu registro empresarial de MEI para ME na Junta Comercial do seu estado.
        </li>
        <li>
          <strong>6. Contrate um Contador</strong><br />
          Como ME/Simples Nacional, a contabilidade é obrigatória. Encontre um contador de confiança (estimativa: R$ 200-500/mês).
        </li>
      </ol>

      <h2>MEI para ME: O Que Muda?</h2>
      <div className="overflow-x-auto my-6">
        <table className="table-compare">
          <thead>
            <tr>
              <th>Aspecto</th>
              <th>MEI</th>
              <th>ME (Simples Nacional)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Faturamento anual</td>
              <td>Até R$ 81.000</td>
              <td>Até R$ 360.000 (ME) / R$ 4,8 MM (EPP)</td>
            </tr>
            <tr>
              <td>Tributação mensal</td>
              <td>Fixa: R$ 70,60 a R$ 76,60 (DAS)</td>
              <td>Variável: 4% a 33% sobre faturamento</td>
            </tr>
            <tr>
              <td>Funcionários</td>
              <td>Máximo 1 com salário mínimo</td>
              <td>Até 9 (comércio/serviço) ou 19 (indústria)</td>
            </tr>
            <tr>
              <td>Contabilidade</td>
              <td>Dispensada (opcional)</td>
              <td>Obrigatória</td>
            </tr>
            <tr>
              <td>Nota Fiscal</td>
              <td>NF-e ou NFS-e (simplificada)</td>
              <td>NF-e obrigatória para todas as operações</td>
            </tr>
            <tr>
              <td>Declaração anual</td>
              <td>DASN-SIMEI</td>
              <td>DEFIS + ECD/ECF</td>
            </tr>
            <tr>
              <td>CNAEs permitidos</td>
              <td>Lista restrita (~467 ocupações)</td>
              <td>Todos, exceto atividades vedadas ao Simples</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Como Evitar Multas e Problemas</h2>
      <div className="callout callout-terra my-6">
        <p className="callout-title">✅ Checklist de Regularidade</p>
        <ul>
          <li>Monitore o faturamento mensalmente — não espere o fim do ano</li>
          <li>Pague o DAS complementar assim que detectar o excesso</li>
          <li>Faça o desenquadramento no prazo (até janeiro do ano seguinte)</li>
          <li>Atualize o cadastro na Junta Comercial imediatamente após o desenquadramento</li>
          <li>Guarde os comprovantes de pagamento do DAS complementar por 5 anos</li>
          <li>Contrate um contador antes do desenquadramento para planejar a transição</li>
        </ul>
      </div>

      <div className="callout callout-info my-6">
        <p className="callout-title">📊 Planeje sua Migração</p>
        <p>
          Use nossa <a href="/calculadora/faturamento" className="link-primary">Calculadora de Faturamento MEI</a> para 
          simular quando você atingirá o limite e quanto pagará como ME/Simples Nacional.
        </p>
      </div>

      <h2>Perguntas Frequentes sobre Desenquadramento MEI</h2>
      
      <h3>Posso voltar a ser MEI depois do desenquadramento?</h3>
      <p>
        Sim, mas você precisa aguardar o período de 3 anos após o desenquadramento e seu faturamento deve 
        estar abaixo de R$ 81.000/ano. A solicitação é feita através de nova inscrição no Portal do Empreendedor.
      </p>

      <h3>O que acontece se eu não fizer o desenquadramento?</h3>
      <p>
        A Receita Federal pode fazer o desenquadramento de ofício, retroagindo a janeiro do ano do excesso, 
        com cobrança de todos os tributos devidos acrescidos de multa (até 20%) e juros Selic.
      </p>

      <h3>Preciso de um CNPJ novo ao migrar para ME?</h3>
      <p>
        Não. O CNPJ permanece o mesmo — apenas a natureza jurídica é alterada de "MEI" para "ME". 
        O processo é feito na Junta Comercial como uma alteração cadastral.
      </p>

      <h3>Posso me desenquadrar voluntariamente mesmo sem excesso?</h3>
      <p>
        Sim. Se você quer expandir seu negócio, contratar mais funcionários ou operar com CNAEs 
        não permitidos ao MEI, pode solicitar o desenquadramento voluntário a qualquer momento.
      </p>

      <div className="cta-banner my-10">
        <h3 className="text-subheading" style={{ color: 'var(--color-foreground)' }}>📋 Precisa de ajuda com o desenquadramento?</h3>
        <p className="text-body">
          O <strong>Kit MEI</strong> inclui modelos de documentos e checklists para facilitar sua migração 
          de MEI para ME, com guias detalhados e planilha de planejamento tributário.
        </p>
        <a href="/kit-mei" className="btn-primary no-underline">Conhecer o Kit MEI →</a>
      </div>
    </article>
  );
}
