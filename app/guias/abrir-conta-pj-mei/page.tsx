export const metadata = {
  title: "Como Abrir Conta PJ para MEI - Guia Completo",
  description: "Guia passo a passo para abrir conta bancária PJ/MEI. Documentos, bancos e taxas.",
};

export default function AbrirContaPJMEI() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Como Abrir Conta PJ para MEI</h1>
        <p className="text-gray-600 text-lg">Guia completo para abrir uma conta bancária PJ/MEI com documentação necessária.</p>
      </div>

      <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Por que Abrir Conta PJ?</h2>
        <ul className="list-disc list-inside space-y-1 text-blue-900 text-sm">
          <li>Separação de finanças pessoais e empresariais</li>
          <li>Documentação de fluxo de caixa</li>
          <li>Facilita negociações e crédito</li>
          <li>Exigido por muitos clientes</li>
          <li>Melhor organização fiscal</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Documentos Necessários</h2>
        <div className="space-y-3">
          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">Documentos da Empresa (MEI)</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>CNPJ (Comprovante de Inscrição)</li>
              <li>Recibo de Inscrição do MEI (RPA)</li>
              <li>Contrato Social ou Ato Constitutivo</li>
              <li>Comprovante de endereço comercial</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-gray-900 mb-2">Documentos Pessoais (Sócio/Proprietário)</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Documento de identidade (RG ou CNH)</li>
              <li>CPF</li>
              <li>Comprovante de endereço residencial</li>
              <li>Comprovante de renda (declaração ou extrato)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Passo a Passo</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li><strong>Pesquise bancos:</strong> Compare taxas, tarifas e serviços</li>
          <li><strong>Agende atendimento:</strong> Presencial ou digital (a maioria oferece online)</li>
          <li><strong>Prepare documentos:</strong> Tenha tudo em mãos</li>
          <li><strong>Preencha formulários:</strong> Dados da empresa e do proprietário</li>
          <li><strong>Aprove análise:</strong> O banco analisará seu perfil</li>
          <li><strong>Ative a conta:</strong> Pode levar de 1 a 7 dias úteis</li>
          <li><strong>Receba dados:</strong> Agência, conta e senha</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Melhores Bancos para MEI</h2>
        <p className="text-gray-700 mb-4">Confira nosso comparativo completo:</p>
        <a href="/melhores/melhores-contas-pj-mei" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
          Ver Comparativo de Contas PJ
        </a>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Custos Típicos</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-left font-bold">Serviço</th>
                <th className="border px-4 py-2 text-center font-bold">Custo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Abertura da conta</td>
                <td className="border px-4 py-2 text-center">Gratuito</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-2">Manutenção mensal</td>
                <td className="border px-4 py-2 text-center">Gratuito - R$ 30/mês</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Transferência (TED)</td>
                <td className="border px-4 py-2 text-center">Gratuito - R$ 15</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-2">Boleto bancário</td>
                <td className="border px-4 py-2 text-center">Gratuito - R$ 5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">Dicas Importantes</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Abra a conta no mesmo banco onde tem conta pessoal (mais fácil)</li>
          <li>Compare tarifas - algumas são gratuitas para MEI</li>
          <li>Separe SEMPRE suas finanças pessoais da empresa</li>
          <li>Guarde todos os extratos (obrigação fiscal)</li>
          <li>Não se atrasse em pagamentos (afeta sua reputação)</li>
        </ul>
      </section>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Saiba Mais</h2>
        <a href="/calculadora/das" className="inline-block text-blue-600 font-semibold hover:underline">
          → Calcular DAS
        </a>
      </div>
    </div>
  );
}
