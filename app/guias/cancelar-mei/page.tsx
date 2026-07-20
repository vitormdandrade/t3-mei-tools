export const metadata = {
  title: "Como Cancelar MEI (Dar Baixa) — Guia 2026",
  description: "Passo a passo completo para cancelar seu MEI, baixa no CNPJ, débitos pendentes e o que fazer antes de dar baixa. Guia atualizado 2026.",
  alternates: { canonical: '/guias/cancelar-mei' },
};

export default function CancelarMEI() {
  return (
    <article className="prose-guide max-w-3xl mx-auto">
      <header className="mb-10">
        <span className="text-label">Guia</span>
        <h1 className="text-hero mt-2 mb-4">Como Cancelar MEI (Dar Baixa) em 2026</h1>
        <p className="text-body-lg">Passo a passo para encerrar seu MEI corretamente, regularizar débitos e evitar multas futuras.</p>
      </header>

      <div className="callout callout-warning my-6">
        <p className="callout-title">⚠️ Atenção</p>
        <p>Cancelar o MEI <strong>não elimina dívidas</strong>. Todos os débitos pendentes (DAS, multas) continuam em seu CPF mesmo após a baixa.</p>
      </div>

      <h2>Quando Vale a Pena Cancelar o MEI?</h2>
      <p>O cancelamento do MEI (baixa) é recomendado quando:</p>
      <ul>
        <li><strong>Você não exerce mais a atividade</strong> — fechou o negócio, mudou de área ou conseguiu um emprego CLT</li>
        <li><strong>Faturamento zerado ou muito baixo</strong> — o custo do DAS mensal (R$ 71 a R$ 76) não compensa</li>
        <li><strong>Migração para ME (Microempresa)</strong> — seu faturamento ultrapassou R$ 81 mil/ano e você precisa migrar</li>
        <li><strong>Mudança para outro regime</strong> — vai abrir uma empresa maior (Ltda, Eireli, etc.)</li>
      </ul>

      <h2>Pré-Requisitos Antes de Cancelar</h2>
      <p>Antes de solicitar a baixa, verifique estes itens:</p>
      <ol>
        <li><strong>DAS em dia:</strong> Todos os boletos DAS devem estar pagos ou parcelados</li>
        <li><strong>DASN-SIMEI entregue:</strong> Declaração Anual dos últimos anos deve estar em dia</li>
        <li><strong>Sem débitos municipais/estaduais:</strong> Verifique se há taxas ou ISS pendentes na prefeitura</li>
        <li><strong>Notas fiscais emitidas:</strong> Todas as NFs-e do período devem estar emitidas e corretas</li>
      </ol>

      <div className="callout callout-info my-6">
        <p className="callout-title">💡 Dica</p>
        <p>Consulte sua situação fiscal completa no <strong>Portal do Simples Nacional</strong> (consulta optantes) e no <strong>Portal do Empreendedor</strong> antes de prosseguir.</p>
      </div>

      <h2>Passo a Passo para Dar Baixa no MEI</h2>

      <h3>Passo 1: Acesse o Portal do Empreendedor</h3>
      <p>Acesse <strong>gov.br/mei</strong> e faça login com sua conta gov.br (nível prata ou ouro).</p>

      <h3>Passo 2: Solicite a Baixa</h3>
      <p>No menu principal, clique em <strong>"Baixa de MEI"</strong> ou <strong>"Encerrar MEI"</strong>. O sistema verificará automaticamente seus débitos.</p>

      <h3>Passo 3: Confirme os Dados</h3>
      <p>Revise seus dados cadastrais: nome empresarial, CNAE, endereço. Confirme que todas as informações estão corretas.</p>

      <h3>Passo 4: Declaração de Baixa</h3>
      <p>Você precisará declarar que:</p>
      <ul>
        <li>Não possui débitos com a União, Estado ou Município</li>
        <li>Não possui empregados ativos (ou já fez a rescisão)</li>
        <li>Não possui pendências trabalhistas</li>
      </ul>

      <h3>Passo 5: Emita o Certificado de Baixa</h3>
      <p>Após a confirmação, o sistema emitirá o <strong>Certificado de Baixa de MEI</strong>. Guarde este documento — ele comprova o encerramento do CNPJ.</p>

      <h2>O que Acontece com os Débitos Após a Baixa?</h2>
      <p>Débitos de DAS e multas <strong>são transferidos para seu CPF</strong> após a baixa do CNPJ. Eles continuam existindo e podem ser cobrados pela Receita Federal. Você pode:</p>
      <ul>
        <li><strong>Parcelar:</strong> Parcelamento simplificado pelo Portal do Simples Nacional (até 60 meses)</li>
        <li><strong>Pagar à vista:</strong> Com desconto de até 50% em multas e juros (programa de regularização)</li>
        <li><strong>Continuar devendo:</strong> Os débitos acumulam juros Selic e podem gerar inscrição em Dívida Ativa</li>
      </ul>

      <h2>Quanto Tempo Leva para Cancelar?</h2>
      <div className="overflow-x-auto my-6">
        <table className="table-compare">
          <thead>
            <tr>
              <th>Etapa</th>
              <th>Prazo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Solicitação online</td>
              <td>Imediato (mesmo dia)</td>
            </tr>
            <tr>
              <td>Baixa no CNPJ</td>
              <td>Até 5 dias úteis</td>
            </tr>
            <tr>
              <td>Certificado disponível</td>
              <td>Imediato após aprovação</td>
            </tr>
            <tr>
              <td>Regularização de débitos</td>
              <td>Parcelamento em até 60 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Cancelamento com Débitos: É Possível?</h2>
      <p><strong>Sim.</strong> O sistema permite a baixa mesmo com débitos pendentes. Eles são automaticamente transferidos para seu CPF. Porém, é altamente recomendado regularizar antes da baixa para evitar:</p>
      <ul>
        <li>Inscrição em Dívida Ativa da União</li>
        <li>Protesto em cartório</li>
        <li>Restrição no CPF (nome sujo)</li>
        <li>Impedimento de abrir nova empresa</li>
      </ul>

      <h2>Posso Reabrir o MEI Depois?</h2>
      <p>Após a baixa, você pode abrir um novo MEI a qualquer momento, desde que:</p>
      <ul>
        <li>Não tenha débitos pendentes do MEI anterior (mesmo CPF)</li>
        <li>A atividade esteja na lista de CNAEs permitidos</li>
        <li>Não tenha participação em outra empresa como sócio ou administrador</li>
      </ul>

      <div className="callout callout-info my-6">
        <p className="callout-title">📋 Resumo</p>
        <ul>
          <li>✅ Baixa é gratuita e 100% online pelo gov.br/mei</li>
          <li>✅ Débitos são transferidos para o CPF — regularize antes</li>
          <li>✅ DASN-SIMEI precisa estar em dia</li>
          <li>✅ Guarde o Certificado de Baixa como comprovante</li>
          <li>✅ Você pode abrir novo MEI no futuro se estiver regular</li>
        </ul>
      </div>
    </article>
  );
}
