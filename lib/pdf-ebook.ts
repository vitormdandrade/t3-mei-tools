import PDFDocument from "pdfkit";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PDFDocumentInstance = InstanceType<typeof PDFDocument>;

type CustomerData = {
  nome?: string;
  email?: string;
  nomeEmpresa?: string;
  cnpj?: string;
};

const NAVY = "#0f2557";
const GOLD = "#d4a12a";
const TEXT = "#333333";
const MUTED = "#666666";

function createEbookDocument(): PDFDocumentInstance {
  return new PDFDocument({
    size: "A4",
    margins: { top: 60, bottom: 60, left: 60, right: 60 },
    bufferPages: true,
    info: {
      Title: "Guia Completo do MEI 2026",
      Creator: "Oraculo do MEI",
      Producer: "Oraculo do MEI - oraculodomei.com.br",
    },
  });
}

function addEbookFooter(doc: PDFDocumentInstance) {
  const pages = doc.bufferedPageRange();
  // Skip the cover (page 0)
  for (let i = 1; i < pages.count; i++) {
    doc.switchToPage(i);
    const bottomMargin = doc.page.margins.bottom;
    doc.page.margins.bottom = 0;
    doc
      .fontSize(8)
      .fillColor("#999999")
      .text(
        `Guia Completo do MEI 2026 - Pagina ${i} de ${pages.count - 1} - oraculodomei.com.br`,
        60,
        doc.page.height - 50,
        { align: "center", width: doc.page.width - 120, lineBreak: false }
      );
    doc.page.margins.bottom = bottomMargin;
  }
}

function chapterTitle(doc: PDFDocumentInstance, num: string, title: string) {
  doc.addPage();
  doc
    .fontSize(10)
    .font("Helvetica")
    .fillColor(GOLD)
    .text(`CAPITULO ${num}`, { characterSpacing: 1 })
    .moveDown(0.3);
  doc.fontSize(20).font("Helvetica-Bold").fillColor(NAVY).text(title).moveDown(0.3);
  doc
    .moveTo(60, doc.y)
    .lineTo(doc.page.width - 60, doc.y)
    .lineWidth(1)
    .strokeColor(GOLD)
    .stroke();
  doc.moveDown(1);
}

function sectionHead(doc: PDFDocumentInstance, text: string) {
  doc.moveDown(0.5);
  doc.fontSize(13).font("Helvetica-Bold").fillColor(NAVY).text(text).moveDown(0.4);
}

function para(doc: PDFDocumentInstance, text: string) {
  doc
    .fontSize(11)
    .font("Helvetica")
    .fillColor(TEXT)
    .text(text, { align: "justify", lineGap: 2 })
    .moveDown(0.6);
}

function bullets(doc: PDFDocumentInstance, items: string[]) {
  for (const item of items) {
    doc
      .fontSize(11)
      .font("Helvetica")
      .fillColor(TEXT)
      .text(`•  ${item}`, { indent: 10, align: "left", lineGap: 2 });
  }
  doc.moveDown(0.6);
}

function tipBox(doc: PDFDocumentInstance, title: string, text: string) {
  const boxTop = doc.y;
  const boxWidth = doc.page.width - 120;
  // Measure text height first
  doc.fontSize(10).font("Helvetica");
  const textHeight = doc.heightOfString(text, { width: boxWidth - 30, lineGap: 2 });
  const boxHeight = textHeight + 44;
  if (boxTop + boxHeight > doc.page.height - 80) {
    doc.addPage();
  }
  const top = doc.y;
  doc.rect(60, top, boxWidth, boxHeight).fillColor("#fdf6e3").fill();
  doc.rect(60, top, 4, boxHeight).fillColor(GOLD).fill();
  doc
    .fontSize(10)
    .font("Helvetica-Bold")
    .fillColor("#8a6d1d")
    .text(title, 78, top + 12, { width: boxWidth - 30 });
  doc
    .fontSize(10)
    .font("Helvetica")
    .fillColor("#5c4a13")
    .text(text, 78, doc.y + 4, { width: boxWidth - 30, lineGap: 2 });
  doc.y = top + boxHeight + 14;
  doc.x = 60;
}

function simpleTable(
  doc: PDFDocumentInstance,
  headers: string[],
  rows: string[][],
  colWidths: number[]
) {
  const startX = 60;
  const rowHeight = 24;
  const tableWidth = colWidths.reduce((a, b) => a + b, 0);

  const drawRow = (cells: string[], y: number, isHeader: boolean, zebra: boolean) => {
    if (isHeader) {
      doc.rect(startX, y, tableWidth, rowHeight).fillColor(NAVY).fill();
    } else if (zebra) {
      doc.rect(startX, y, tableWidth, rowHeight).fillColor("#f3f4f6").fill();
    }
    let x = startX;
    cells.forEach((cell, i) => {
      doc
        .fontSize(10)
        .font(isHeader ? "Helvetica-Bold" : "Helvetica")
        .fillColor(isHeader ? "#ffffff" : TEXT)
        .text(cell, x + 8, y + 7, { width: colWidths[i] - 16, lineBreak: false });
      x += colWidths[i];
    });
  };

  if (doc.y + rowHeight * (rows.length + 1) > doc.page.height - 80) {
    doc.addPage();
  }
  let y = doc.y;
  drawRow(headers, y, true, false);
  y += rowHeight;
  rows.forEach((row, idx) => {
    if (y + rowHeight > doc.page.height - 80) {
      doc.addPage();
      y = doc.y;
      drawRow(headers, y, true, false);
      y += rowHeight;
    }
    drawRow(row, y, false, idx % 2 === 1);
    y += rowHeight;
  });
  doc.rect(startX, doc.y - 1, 0, 0); // reset path state
  doc.y = y + 12;
  doc.x = 60;
}

export function generateGuiaCompletoMEI2026(data: CustomerData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = createEbookDocument();
    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    // ─── Cover ───
    doc.rect(0, 0, doc.page.width, doc.page.height).fillColor(NAVY).fill();
    doc.rect(0, 180, doc.page.width, 4).fillColor(GOLD).fill();
    doc
      .fontSize(12)
      .font("Helvetica")
      .fillColor(GOLD)
      .text("ORACULO DO MEI", 60, 220, { align: "center", width: doc.page.width - 120, characterSpacing: 2 });
    doc
      .fontSize(34)
      .font("Helvetica-Bold")
      .fillColor("#ffffff")
      .text("Guia Completo\ndo MEI 2026", 60, 260, { align: "center", width: doc.page.width - 120 });
    doc
      .fontSize(13)
      .font("Helvetica")
      .fillColor("#c9d4ea")
      .text(
        "Tudo o que voce precisa saber para abrir, manter\ne fazer crescer o seu MEI - do registro ao imposto de renda.",
        60,
        390,
        { align: "center", width: doc.page.width - 120, lineGap: 3 }
      );
    doc.rect(0, 470, doc.page.width, 4).fillColor(GOLD).fill();
    if (data.nome) {
      doc
        .fontSize(10)
        .fillColor("#8fa3c8")
        .text(`Edicao preparada para: ${data.nome}`, 60, 700, {
          align: "center",
          width: doc.page.width - 120,
        });
    }
    doc
      .fontSize(10)
      .fillColor("#8fa3c8")
      .text("oraculodomei.com.br", 60, 720, { align: "center", width: doc.page.width - 120 });

    // ─── Sumario ───
    doc.addPage();
    doc.fontSize(22).font("Helvetica-Bold").fillColor(NAVY).text("Sumario").moveDown(1);
    const toc: [string, string][] = [
      ["1", "O que e o MEI e quem pode ser"],
      ["2", "Como abrir o seu MEI passo a passo (gratis)"],
      ["3", "DAS: o imposto mensal do MEI em 2026"],
      ["4", "Limite de faturamento: regras e o que fazer se ultrapassar"],
      ["5", "Nota fiscal: quando emitir e como usar a NFS-e nacional"],
      ["6", "DASN-SIMEI: a declaracao anual sem misterio"],
      ["7", "Funcionario, INSS e seus direitos previdenciarios"],
      ["8", "Conta PJ, credito e financas do MEI"],
      ["9", "Calendario de obrigacoes 2026 + checklist mensal"],
    ];
    for (const [num, title] of toc) {
      doc
        .fontSize(12)
        .font("Helvetica-Bold")
        .fillColor(GOLD)
        .text(`${num}. `, { continued: true })
        .font("Helvetica")
        .fillColor(TEXT)
        .text(title)
        .moveDown(0.5);
    }
    doc.moveDown(1.5);
    tipBox(
      doc,
      "Como usar este guia",
      "Cada capitulo e independente: voce pode ler na ordem ou ir direto ao tema que precisa agora. Os valores citados usam o salario minimo de R$ 1.518 e as regras vigentes na data de publicacao. Este material tem carater educativo e nao substitui a orientacao de um contador."
    );

    // ─── Capitulo 1 ───
    chapterTitle(doc, "1", "O que e o MEI e quem pode ser");
    para(
      doc,
      "O Microempreendedor Individual (MEI) e o formato juridico mais simples do Brasil para quem trabalha por conta propria. Criado para tirar milhoes de trabalhadores da informalidade, ele oferece CNPJ, emissao de nota fiscal e cobertura previdenciaria em troca de um imposto mensal fixo de valor baixo."
    );
    sectionHead(doc, "Requisitos para ser MEI");
    bullets(doc, [
      "Faturar ate R$ 81.000,00 por ano (proporcional no ano de abertura);",
      "Nao ser socio, titular ou administrador de outra empresa;",
      "Ter no maximo 1 (um) empregado contratado;",
      "Exercer uma das atividades permitidas na lista oficial de ocupacoes do MEI (sao mais de 450 CNAEs);",
      "Nao ser servidor publico federal em atividade.",
    ]);
    sectionHead(doc, "Principais vantagens");
    bullets(doc, [
      "CNPJ gratuito e aberto em minutos, 100% online;",
      "Imposto fixo mensal (DAS) a partir de R$ 76,90;",
      "Aposentadoria por idade, auxilio-doenca e salario-maternidade;",
      "Acesso a conta bancaria PJ, maquininhas e credito com juros menores;",
      "Emissao de nota fiscal para vender a empresas e ao governo;",
      "Dispensa de contabilidade formal e de alvara (autodeclaracao).",
    ]);
    tipBox(
      doc,
      "Atencao",
      "Nem toda profissao pode ser MEI. Atividades regulamentadas de natureza intelectual, como medicos, advogados, engenheiros e psicologos, nao entram na lista. Consulte sempre a lista oficial de CNAEs permitidos antes de abrir."
    );

    // ─── Capitulo 2 ───
    chapterTitle(doc, "2", "Como abrir o seu MEI passo a passo (gratis)");
    para(
      doc,
      "Abrir um MEI e gratuito e leva menos de 30 minutos. Todo o processo acontece no Portal do Empreendedor (gov.br/mei). Desconfie de qualquer site que cobre para fazer o registro: a inscricao oficial nao tem custo algum."
    );
    sectionHead(doc, "Passo a passo");
    bullets(doc, [
      "1. Crie ou acesse sua conta gov.br (nivel prata ou ouro);",
      "2. Entre no Portal do Empreendedor e clique em 'Quero ser MEI' > 'Formalize-se';",
      "3. Informe seus dados pessoais, RG, titulo de eleitor ou recibo do IR;",
      "4. Escolha o nome fantasia e ate 16 atividades (1 principal + 15 secundarias);",
      "5. Informe o endereco comercial (pode ser sua residencia);",
      "6. Confira as declaracoes, envie e pronto: o CNPJ sai na hora.",
    ]);
    sectionHead(doc, "Depois de abrir");
    bullets(doc, [
      "Guarde o Certificado da Condicao de Microempreendedor Individual (CCMEI);",
      "Verifique na prefeitura se a atividade exige inscricao municipal;",
      "Comece a pagar o DAS no mes seguinte ao da abertura;",
      "Abra uma conta PJ para separar as financas (veja o Capitulo 8).",
    ]);
    tipBox(
      doc,
      "Dica do Oraculo",
      "Escolha os CNAEs com calma: eles determinam se voce paga ICMS (comercio/industria), ISS (servicos) ou ambos, e se pode emitir nota fiscal para o que pretende vender. Alterar depois e possivel e gratuito, tambem pelo Portal do Empreendedor."
    );

    // ─── Capitulo 3 ───
    chapterTitle(doc, "3", "DAS: o imposto mensal do MEI em 2026");
    para(
      doc,
      "O DAS (Documento de Arrecadacao do Simples Nacional) e o unico imposto fixo do MEI. Ele reune a contribuicao ao INSS (5% do salario minimo) e os tributos estaduais e municipais em uma guia unica com vencimento todo dia 20."
    );
    sectionHead(doc, "Valores do DAS com salario minimo de R$ 1.518");
    simpleTable(
      doc,
      ["Atividade", "INSS", "ICMS/ISS", "Total mensal"],
      [
        ["Comercio e industria", "R$ 75,90", "R$ 1,00", "R$ 76,90"],
        ["Servicos", "R$ 75,90", "R$ 5,00", "R$ 80,90"],
        ["Comercio + servicos", "R$ 75,90", "R$ 6,00", "R$ 81,90"],
      ],
      [180, 90, 90, 115]
    );
    sectionHead(doc, "Como emitir e pagar");
    bullets(doc, [
      "Acesse o PGMEI (Programa Gerador do DAS) no site da Receita Federal ou o app MEI;",
      "Informe o CNPJ, escolha o mes e gere o boleto ou pague via Pix;",
      "Programe o debito automatico para nunca esquecer;",
      "O DAS e devido mesmo em meses sem faturamento.",
    ]);
    sectionHead(doc, "O que acontece se atrasar");
    para(
      doc,
      "O DAS em atraso sofre multa de 0,33% por dia (limitada a 20%) mais juros pela taxa Selic. Pior que a multa: meses em aberto nao contam para a aposentadoria e demais beneficios do INSS, e dividas acumuladas podem levar ao cancelamento do CNPJ e a inscricao em Divida Ativa."
    );

    // ─── Capitulo 4 ───
    chapterTitle(doc, "4", "Limite de faturamento: regras e o que fazer se ultrapassar");
    para(
      doc,
      "O teto do MEI e de R$ 81.000,00 por ano-calendario, o que equivale a uma media de R$ 6.750,00 por mes. No ano de abertura o limite e proporcional: R$ 6.750,00 multiplicados pelo numero de meses entre a abertura e dezembro."
    );
    sectionHead(doc, "Ultrapassei o limite. E agora?");
    simpleTable(
      doc,
      ["Situacao", "Consequencia"],
      [
        ["Ate 20% acima (ate R$ 97.200)", "Paga DAS complementar e vira ME em janeiro"],
        ["Mais de 20% acima", "Desenquadramento retroativo + impostos como ME"],
      ],
      [230, 245]
    );
    para(
      doc,
      "No primeiro caso, voce recolhe um DAS complementar sobre o excedente e passa a ser Microempresa (ME) no Simples Nacional a partir de 1o de janeiro do ano seguinte. No segundo, o desenquadramento retroage ao inicio do ano (ou ao mes da abertura), com todos os impostos recalculados como ME - por isso e essencial acompanhar o faturamento mes a mes."
    );
    tipBox(
      doc,
      "Dica do Oraculo",
      "Crescer nao e problema - e o objetivo. Se o seu faturamento esta se aproximando do teto, procure um contador com antecedencia para planejar a migracao para ME. Como ME no Simples, o imposto comeca em 4% a 6% do faturamento, e voce pode continuar crescendo sem risco fiscal."
    );

    // ─── Capitulo 5 ───
    chapterTitle(doc, "5", "Nota fiscal: quando emitir e como usar a NFS-e nacional");
    para(
      doc,
      "A regra e simples: vendendo ou prestando servico para outra empresa (CNPJ), a emissao de nota fiscal e obrigatoria. Para consumidor pessoa fisica, e facultativa - a menos que o cliente peca."
    );
    sectionHead(doc, "NFS-e nacional: o emissor gratuito do governo");
    bullets(doc, [
      "Cadastre-se no Emissor Nacional de NFS-e (nfse.gov.br) com sua conta gov.br;",
      "Configure uma unica vez os dados do seu MEI e dos servicos que presta;",
      "Emita pelo site ou pelo aplicativo NFS-e Movel em menos de 1 minuto;",
      "A nota vale em todo o Brasil - nao depende mais do sistema da prefeitura.",
    ]);
    sectionHead(doc, "Boas praticas");
    bullets(doc, [
      "Emita a nota na data da venda ou da conclusao do servico;",
      "Guarde todas as notas emitidas e recebidas por 5 anos;",
      "Some as notas todo mes: e a forma mais facil de controlar o limite de faturamento;",
      "Para comercio (ICMS), verifique na Secretaria da Fazenda do seu estado o emissor de NF-e ou NFC-e.",
    ]);

    // ─── Capitulo 6 ───
    chapterTitle(doc, "6", "DASN-SIMEI: a declaracao anual sem misterio");
    para(
      doc,
      "A DASN-SIMEI e a unica declaracao obrigatoria do MEI. Nela voce informa quanto faturou no ano anterior e se teve empregado. O prazo vai ate 31 de maio, e a entrega e gratuita, feita no proprio site do Simples Nacional."
    );
    sectionHead(doc, "Passo a passo da entrega");
    bullets(doc, [
      "1. Some todo o faturamento do ano anterior (com e sem nota fiscal);",
      "2. Separe o total em comercio/industria (ICMS) e servicos (ISS);",
      "3. Acesse o portal do Simples Nacional > DASN-SIMEI;",
      "4. Informe o CNPJ, os valores e se teve empregado no periodo;",
      "5. Transmita e guarde o recibo em PDF.",
    ]);
    sectionHead(doc, "Se perder o prazo");
    para(
      doc,
      "A multa minima e de R$ 50,00 (reduzida a R$ 25,00 se paga em ate 30 dias) e o CNPJ fica pendente, o que bloqueia certidoes negativas, emissao de algumas notas e acesso a credito. Declarou errado? E possivel retificar sem custo pelo mesmo sistema."
    );
    tipBox(
      doc,
      "Importante",
      "Mesmo quem faturou zero no ano precisa entregar a DASN-SIMEI. E mesmo quem encerrou o CNPJ deve enviar a declaracao de extincao. Nao existe dispensa."
    );

    // ─── Capitulo 7 ───
    chapterTitle(doc, "7", "Funcionario, INSS e seus direitos previdenciarios");
    sectionHead(doc, "Contratando o seu (unico) funcionario");
    para(
      doc,
      "O MEI pode ter 1 empregado, que deve receber o salario minimo ou o piso da categoria. O custo para o empregador e de aproximadamente 11% do salario: 3% de INSS patronal e 8% de FGTS, alem de ferias, 13o e demais direitos da CLT. O registro e feito no eSocial."
    );
    sectionHead(doc, "O que o INSS do MEI garante");
    simpleTable(
      doc,
      ["Beneficio", "Carencia minima"],
      [
        ["Aposentadoria por idade", "180 meses de contribuicao"],
        ["Auxilio-doenca", "12 meses"],
        ["Salario-maternidade", "10 meses"],
        ["Pensao por morte / auxilio-reclusao", "Sem carencia (para dependentes)"],
      ],
      [240, 235]
    );
    para(
      doc,
      "A contribuicao de 5% do salario minimo garante aposentadoria por idade no valor de 1 salario minimo. Quem quiser contar o tempo para aposentadoria por tempo de contribuicao ou aumentar o valor pode complementar com mais 15% sobre o salario minimo por meio de GPS com o codigo 1910."
    );

    // ─── Capitulo 8 ───
    chapterTitle(doc, "8", "Conta PJ, credito e financas do MEI");
    sectionHead(doc, "Separe o CPF do CNPJ");
    para(
      doc,
      "O erro numero 1 do MEI iniciante e misturar as contas. Abra uma conta PJ (a maioria das fintechs oferece conta gratuita para MEI), receba tudo dos clientes nela, e pague-se um 'salario' mensal fixo para a conta pessoal. Isso simplifica o controle do faturamento, a DASN e o imposto de renda da pessoa fisica."
    );
    sectionHead(doc, "Rotina financeira minima (30 minutos por semana)");
    bullets(doc, [
      "Registre todas as entradas e saidas (planilha ou app gratuito);",
      "Reserve o valor do DAS assim que receber - nunca no dia 20;",
      "Guarde 10% a 15% do faturamento como reserva de emergencia do negocio;",
      "Feche o mes somando o faturamento e comparando com o teto anual;",
      "Guarde notas e comprovantes por 5 anos.",
    ]);
    sectionHead(doc, "Credito para MEI");
    para(
      doc,
      "Com CNPJ ativo e DAS em dia, o MEI acessa linhas de microcredito e capital de giro com juros bem menores que os do cartao pessoal. Bancos publicos, cooperativas e fintechs oferecem valores iniciais de R$ 1.000 a R$ 20.000. Compare sempre o CET (Custo Efetivo Total), nao apenas a taxa mensal."
    );

    // ─── Capitulo 9 ───
    chapterTitle(doc, "9", "Calendario de obrigacoes 2026 + checklist mensal");
    sectionHead(doc, "Datas que nao podem passar em branco");
    simpleTable(
      doc,
      ["Quando", "Obrigacao"],
      [
        ["Todo dia 20", "Pagamento do DAS mensal"],
        ["Ate 31 de maio", "Entrega da DASN-SIMEI (ano-base 2025)"],
        ["Ate o ultimo dia util de abril", "IRPF pessoa fisica (se obrigado a declarar)"],
        ["Dia 7 de cada mes", "FGTS e eSocial (apenas se tiver funcionario)"],
        ["Dezembro", "Conferir faturamento anual x teto de R$ 81.000"],
      ],
      [200, 275]
    );
    sectionHead(doc, "Checklist mensal do MEI organizado");
    bullets(doc, [
      "[  ] Pagar o DAS ate o dia 20 (ou conferir o debito automatico);",
      "[  ] Emitir e arquivar as notas fiscais do mes;",
      "[  ] Registrar receitas e despesas no controle financeiro;",
      "[  ] Somar o faturamento acumulado do ano e comparar com o teto;",
      "[  ] Guardar comprovantes de compras de fornecedores;",
      "[  ] Reservar o valor do proximo DAS.",
    ]);
    doc.moveDown(1);
    tipBox(
      doc,
      "Ferramentas gratuitas",
      "No oraculodomei.com.br voce encontra calculadoras gratuitas de DAS, limite de faturamento, precificacao e mais - alem do Kit MEI com modelos prontos de contrato, recibo e nota fiscal para profissionalizar seu atendimento."
    );

    // ─── Encerramento / disclaimer ───
    doc.addPage();
    doc.fontSize(20).font("Helvetica-Bold").fillColor(NAVY).text("Obrigado pela leitura!").moveDown(0.8);
    para(
      doc,
      "Este guia foi criado pelo Oraculo do MEI para colocar todas as regras essenciais do MEI em um unico lugar, em linguagem simples. Se ele economizou o seu tempo, compartilhe o site com outros empreendedores."
    );
    sectionHead(doc, "Proximos passos");
    bullets(doc, [
      "Calculadoras gratuitas: oraculodomei.com.br/calculadora",
      "Guias completos e atualizados: oraculodomei.com.br/guias",
      "Modelos de documentos profissionais: oraculodomei.com.br/kit-mei",
    ]);
    doc.moveDown(1);
    doc
      .fontSize(9)
      .font("Helvetica")
      .fillColor(MUTED)
      .text(
        "AVISO LEGAL: Este material tem carater exclusivamente educativo e informativo. Ele nao constitui assessoria contabil, juridica ou tributaria, nem substitui a orientacao de um contador ou advogado habilitado. Os valores e regras citados refletem a legislacao vigente na data de publicacao e podem ser alterados pelo governo a qualquer momento. Verifique sempre as fontes oficiais (gov.br, Receita Federal e Simples Nacional) antes de tomar decisoes.",
        { align: "justify", lineGap: 2 }
      );

    addEbookFooter(doc);
    doc.end();
  });
}
