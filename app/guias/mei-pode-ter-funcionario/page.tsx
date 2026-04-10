export const metadata = {
  title: "MEI Pode Ter Funcionário? Regras 2026",
  description: "Saiba se MEI pode ter funcionário, como contratar e quando você é obrigado a virar ME.",
};

export default function MEIPodeSerFuncionario() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">MEI Pode Ter Funcionário em 2026?</h1>
        <p className="text-gray-600 text-lg">Regras, limitações e o que você precisa saber antes de contratar.</p>
      </div>

      <section className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Resposta Curta</h2>
        <p className="text-green-900 text-lg">
          <strong>SIM!</strong> MEI pode ter 1 funcionário. Não pode contratar mais de um.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Regras para Contratar Funcionário</h2>
        <div className="space-y-3">
          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">✓ Você Pode:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Contratar 1 funcionário com registro em CTPS</li>
              <li>Pagar salário compatível com o mercado</li>
              <li>Descontar INSS e IRRF do funcionário</li>
              <li>Pagar encargos sociais e 13º</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 bg-red-50">
            <h3 className="font-bold text-red-900 mb-2">✗ Você NÃO Pode:</h3>
            <ul className="list-disc list-inside space-y-1 text-red-900">
              <li>Contratar 2 ou mais funcionários</li>
              <li>Ter estagiários sem registro</li>
              <li>Ter prestadores de serviço sem nota fiscal</li>
              <li>Pagar trabalhador sem vínculo formal</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Custos de Contratar um Funcionário</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <p className="text-yellow-900 mb-4">
            Exemplo: Funcionário com salário de R$ 1.500/mês (salário mínimo)
          </p>
          <div className="space-y-2 text-yellow-900 text-sm">
            <div className="flex justify-between">
              <span>Salário:</span>
              <strong>R$ 1.500,00</strong>
            </div>
            <div className="flex justify-between">
              <span>INSS (11%):</span>
              <strong>R$ 165,00</strong>
            </div>
            <div className="flex justify-between">
              <span>IRRF (se houver):</span>
              <strong>R$ 0,00 (mínimo)</strong>
            </div>
            <div className="border-t border-yellow-400 my-2"></div>
            <div className="flex justify-between text-lg">
              <span><strong>Custo Mensal Total:</strong></span>
              <strong>~R$ 1.800-2.000</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Como Contratar Funcionário</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li><strong>Entrevista e seleção</strong> - Escolha o melhor candidato</li>
          <li><strong>CTPS</strong> - O funcionário precisará levar a Carteira de Trabalho</li>
          <li><strong>Registro na CTPS</strong> - Você registra dados do emprego</li>
          <li><strong>Filiação ao INSS</strong> - Como empregador (você já está)</li>
          <li><strong>Documento de Saúde</strong> - ASO (Atestado de Saúde Ocupacional)</li>
          <li><strong>Folha de Pagamento</strong> - Registre os salários e descontos</li>
          <li><strong>Repasse ao INSS</strong> - Até o 15º dia do mês seguinte</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">O que Acontece se Contratar Mais de 1?</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-red-900 mb-4">
            Se você contratar 2 ou mais funcionários, é obrigado a migrar para Microempresa (ME) ou outra modalidade:
          </p>
          <ul className="list-disc list-inside space-y-2 text-red-900">
            <li>Você será reclassificado administrativamente</li>
            <li>Terá que cumprir obrigações de ME</li>
            <li>Impostos serão maiores</li>
            <li>Pode sofrer multas se descoberto</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Alternativas a Contratar</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Pessoa Jurídica (PJ):</strong> Contratar outra empresa ou autônomo sem vinculo</li>
          <li><strong>Terceirizar:</strong> Contratar serviços especializados</li>
          <li><strong>Família:</strong> Pode ser contra-produtivo (risco fiscal)</li>
          <li><strong>Virar ME:</strong> Se crescimento justificar</li>
        </ul>
      </section>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Saiba Mais</h2>
        <a href="/calculadora/mei-vs-me" className="inline-block text-blue-600 font-semibold hover:underline mb-4">
          → Comparar MEI vs ME
        </a>
      </div>
    </div>
  );
}
