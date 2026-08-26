export const metadata = {
  title: "CNAEs Permitidos para MEI 2026 - Lista Completa Atualizada",
  description: "Lista completa de CNAEs permitidos para MEI em 2026. Veja todas as atividades econômicas autorizadas, ocupações permitidas e o que não pode ser MEI.",
  alternates: { canonical: '/guias/cnaes-permitidos-mei' },
};

export default function CnaesMEI() {
  return (
    <article className="prose-guide max-w-3xl mx-auto">
      <header className="mb-10">
        <span className="text-label">Guia</span>
        <h1 className="text-hero mt-2 mb-4">CNAEs Permitidos para MEI em 2026</h1>
        <p className="text-body-lg">Lista completa de atividades econômicas autorizadas para Microempreendedor Individual.</p>
      </header>

      <div className="callout callout-warning my-6">
        <p className="callout-title">⚠️ Atenção</p>
        <p>O CNAE (Classificação Nacional de Atividades Econômicas) define quais atividades seu MEI pode exercer. Escolher o CNAE errado pode gerar multas e até o cancelamento do seu CNPJ.</p>
      </div>

      <h2>O que é o CNAE MEI?</h2>
      <p>
        O CNAE é um código de 7 dígitos que identifica a atividade econômica da sua empresa. 
        Para o MEI, existe uma lista específica de CNAEs permitidos — nem todas as atividades 
        podem ser exercidas como Microempreendedor Individual. A lista é definida pelo 
        Comitê Gestor do Simples Nacional (CGSN) e atualizada periodicamente.
      </p>

      <h2>Quantos CNAEs o MEI pode ter?</h2>
      <p>
        O MEI pode registrar <strong>1 atividade principal + até 15 atividades secundárias</strong>, 
        totalizando 16 CNAEs no máximo. Cada CNAE adicional deve ser de uma ocupação permitida 
        para o MEI. Importante: todas as atividades secundárias precisam estar na lista de 
        ocupações autorizadas.
      </p>

      <h2>Categorias de CNAEs Permitidos</h2>

      <h3>1. Comércio Varejista</h3>
      <p>Inclui lojas de roupas, calçados, artigos de papelaria, produtos alimentícios, bebidas, cosméticos, entre outros.</p>
      <ul>
        <li><strong>CNAE 4781-4/00</strong> — Comércio varejista de artigos de vestuário e acessórios</li>
        <li><strong>CNAE 4721-1/02</strong> — Comércio varejista de produtos de padaria e confeitaria</li>
        <li><strong>CNAE 4771-7/01</strong> — Comércio varejista de produtos farmacêuticos (sem manipulação)</li>
        <li><strong>CNAE 4751-2/01</strong> — Comércio varejista de equipamentos de informática</li>
      </ul>

      <h3>2. Serviços em Geral</h3>
      <p>A maior categoria do MEI. Abrange desde profissionais de beleza até programadores:</p>
      <ul>
        <li><strong>CNAE 6201-5/01</strong> — Desenvolvimento de sistemas e software sob encomenda</li>
        <li><strong>CNAE 9602-5/01</strong> — Cabeleireiros, manicure e pedicure</li>
        <li><strong>CNAE 8599-6/99</strong> — Outras atividades de ensino não especificadas</li>
        <li><strong>CNAE 8211-3/00</strong> — Serviços de escritório e apoio administrativo</li>
        <li><strong>CNAE 7319-0/02</strong> — Promoção de vendas e marketing direto</li>
      </ul>

      <h3>3. Indústria e Fabricação</h3>
      <p>Pequenas produções e fabricações artesanais:</p>
      <ul>
        <li><strong>CNAE 1412-6/01</strong> — Confecção de peças de vestuário sob medida</li>
        <li><strong>CNAE 1091-1/01</strong> — Fabricação de produtos de panificação</li>
        <li><strong>CNAE 1629-3/01</strong> — Fabricação de artefatos de madeira para uso doméstico</li>
      </ul>

      <h3>4. Construção Civil</h3>
      <ul>
        <li><strong>CNAE 4330-4/99</strong> — Outras obras de acabamento da construção</li>
        <li><strong>CNAE 4322-3/01</strong> — Instalações hidráulicas, sanitárias e de gás</li>
        <li><strong>CNAE 4321-5/00</strong> — Instalação e manutenção elétrica</li>
      </ul>

      <h3>5. Transporte</h3>
      <ul>
        <li><strong>CNAE 4930-2/02</strong> — Transporte rodoviário de carga (exceto produtos perigosos)</li>
        <li><strong>CNAE 4923-0/01</strong> — Serviço de táxi</li>
        <li><strong>CNAE 4929-9/99</strong> — Outros transportes rodoviários de passageiros</li>
      </ul>

      <h2>Atividades que NÃO podem ser MEI</h2>
      <div className="callout callout-info my-6">
        <p className="callout-title">Profissões Regulamentadas</p>
        <p>Várias profissões que exigem registro em conselho de classe (CREA, CRM, OAB, CRC, etc.) não podem ser MEI. Isso inclui engenheiros, médicos, advogados, contadores, arquitetos e outros profissionais de nível superior regulamentado.</p>
      </div>
      <ul>
        <li>Profissões regulamentadas com exigência de formação superior</li>
        <li>Atividades financeiras e de seguros (bancos, corretoras)</li>
        <li>Produção e venda de armas e munições</li>
        <li>Extração de minerais</li>
        <li>Serviços de transporte intermunicipal e interestadual</li>
        <li>Atividades que gerem poluição ou degradação ambiental em escala industrial</li>
      </ul>

      <h2>Como Escolher o CNAE Correto</h2>
      <div className="callout callout-info my-6">
        <p className="callout-title">💡 Dica</p>
        <p>
          Use a nossa <a href="/calculadora/cnae">calculadora de CNAE</a> para descobrir o código
          ideal para a sua atividade em segundos — gratuita e sem cadastro.
        </p>
      </div>
      <ol>
        <li><strong>Identifique sua atividade principal:</strong> o que você realmente faz no dia a dia?</li>
        <li><strong>Consulte a tabela CNAE oficial</strong> no site do <a href="https://concla.ibge.gov.br/busca-online-cnae.html" target="_blank" rel="noopener">CONCLA/IBGE</a></li>
        <li><strong>Verifique se a ocupação é permitida</strong> para MEI no Portal do Empreendedor</li>
        <li><strong>Adicione CNAEs secundários</strong> para atividades complementares que você exerce</li>
        <li><strong>Evite excessos:</strong> muitos CNAEs secundários podem chamar atenção da fiscalização</li>
      </ol>

      <h2>Mudança de CNAE</h2>
      <p>
        Se você já tem MEI e precisa alterar o CNAE (mudou de atividade ou quer adicionar 
        novas ocupações), o processo é gratuito e feito pelo Portal do Empreendedor. 
        Acesse a opção "Alteração de Dados" e atualize seus CNAEs. Não há limite de 
        alterações por ano, mas cada mudança deve refletir suas atividades reais.
      </p>

      <h2>CNAEs Mais Procurados em 2026</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-3">CNAE</th>
              <th className="text-left py-2 px-3">Atividade</th>
              <th className="text-left py-2 px-3">Categoria</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["4781-4/00", "Comércio de vestuário e acessórios", "Comércio"],
              ["9602-5/01", "Cabeleireiros e manicure", "Serviços"],
              ["6201-5/01", "Desenvolvimento de software", "Serviços"],
              ["4330-4/99", "Obras de acabamento da construção", "Construção"],
              ["7319-0/02", "Marketing direto e promoção de vendas", "Serviços"],
              ["1091-1/01", "Fabricação de produtos de panificação", "Indústria"],
              ["4930-2/02", "Transporte rodoviário de carga", "Transporte"],
              ["8211-3/00", "Serviços de escritório e administrativo", "Serviços"],
            ].map(([cnae, atividade, categoria]) => (
              <tr key={cnae} className="border-b">
                <td className="py-2 px-3 font-mono text-xs">{cnae}</td>
                <td className="py-2 px-3">{atividade}</td>
                <td className="py-2 px-3"><span className="pill">{categoria}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Conteúdo Relacionado</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {[
          ['/guias/como-abrir-mei', 'Como Abrir MEI', 'Passo a passo completo para abrir seu MEI grátis em 2026'],
          ['/guias/das-mei-2026', 'DAS MEI 2026', 'Valores atualizados, prazos e como pagar o DAS'],
          ['/guias/limite-faturamento-mei', 'Limite de Faturamento MEI', 'Entenda o teto de R$ 81 mil e o que fazer se ultrapassar'],
          ['/guias/desenquadramento-mei', 'Desenquadramento MEI', 'Como migrar para ME quando o faturamento crescer'],
        ].map(([href, title, desc]) => (
          <a key={href} href={href} className="card card-hover no-underline p-4 flex flex-col gap-1">
            <span className="font-semibold" style={{ color: 'var(--color-foreground)' }}>{title} →</span>
            <span className="text-caption">{desc}</span>
          </a>
        ))}
      </div>
    </article>
  );
}
