import PDFDocument from "pdfkit";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PDFDocumentInstance = InstanceType<typeof PDFDocument>;

type CustomerData = {
  nome?: string;
  email?: string;
  nomeEmpresa?: string;
  cnpj?: string;
};

function createBaseDocument(): PDFDocumentInstance {
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 60, bottom: 60, left: 60, right: 60 },
    // Required so addFooter() can switchToPage() across all pages at the end
    bufferPages: true,
    info: {
      Creator: "Oraculo do MEI",
      Producer: "Oraculo do MEI - Kit MEI",
    },
  });
  return doc;
}

function addHeader(doc: PDFDocumentInstance, title: string) {
  doc
    .fontSize(10)
    .font("Helvetica")
    .fillColor("#666666")
    .text("Kit MEI - Oraculo do MEI", { align: "right" })
    .moveDown(0.5);

  doc
    .fontSize(18)
    .font("Helvetica-Bold")
    .fillColor("#1a1a1a")
    .text(title, { align: "center" })
    .moveDown(1);
}

function addFooter(doc: PDFDocumentInstance) {
  const pages = doc.bufferedPageRange();
  for (let i = 0; i < pages.count; i++) {
    doc.switchToPage(i);
    // The footer sits inside the bottom margin; zero it out while writing so
    // pdfkit doesn't auto-append a blank page, then restore it.
    const bottomMargin = doc.page.margins.bottom;
    doc.page.margins.bottom = 0;
    doc
      .fontSize(8)
      .fillColor("#999999")
      .text(
        `Pagina ${i + 1} de ${pages.count} - Gerado por oraculodomei.com.br`,
        60,
        doc.page.height - 50,
        { align: "center", width: doc.page.width - 120, lineBreak: false }
      );
    doc.page.margins.bottom = bottomMargin;
  }
}

export function generateContratoPrestacaoServicos(data: CustomerData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = createBaseDocument();
    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    addHeader(doc, "CONTRATO DE PRESTACAO DE SERVICOS");

    // Contract body
    const today = new Date().toLocaleDateString("pt-BR");

    doc
      .fontSize(11)
      .font("Helvetica")
      .fillColor("#333333")
      .text(
        `Pelo presente instrumento particular de Contrato de Prestacao de Servicos, as partes abaixo qualificadas tem entre si justo e acordado o seguinte:`,
        { align: "justify" }
      )
      .moveDown(1);

    // Section 1 - Partes
    doc
      .fontSize(13)
      .font("Helvetica-Bold")
      .text("1. DAS PARTES")
      .moveDown(0.5);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text("CONTRATANTE: __________________________________________")
      .text("CPF/CNPJ: _____________________________________________")
      .text("Endereco: _____________________________________________")
      .text("Telefone: _____________________________________________")
      .text("E-mail: _______________________________________________")
      .moveDown(0.5);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text("CONTRATADO(A): ________________________________________")
      .text(`CNPJ (MEI): ${data.cnpj || "________________________________"}`)
      .text("Endereco: _____________________________________________")
      .text("Telefone: _____________________________________________")
      .text("E-mail: _______________________________________________")
      .moveDown(1);

    // Section 2 - Objeto
    doc
      .fontSize(13)
      .font("Helvetica-Bold")
      .text("2. DO OBJETO")
      .moveDown(0.5);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text(
        "O presente contrato tem por objeto a prestacao dos seguintes servicos:",
        { align: "justify" }
      )
      .moveDown(0.5)
      .text(
        "_______________________________________________________________________"
      )
      .text(
        "_______________________________________________________________________"
      )
      .text(
        "_______________________________________________________________________"
      )
      .moveDown(1);

    // Section 3 - Valor e Pagamento
    doc
      .fontSize(13)
      .font("Helvetica-Bold")
      .text("3. DO VALOR E FORMA DE PAGAMENTO")
      .moveDown(0.5);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text(
        "3.1. O valor total pelos servicos prestados sera de R$ _______________ (_______________________).",
        { align: "justify" }
      )
      .text(
        "3.2. O pagamento sera efetuado da seguinte forma: ____________________.",
        { align: "justify" }
      )
      .text(
        "3.3. Em caso de atraso no pagamento, incidira multa de 2% e juros de 1% ao mes.",
        { align: "justify" }
      )
      .moveDown(1);

    // Section 4 - Prazo
    doc
      .fontSize(13)
      .font("Helvetica-Bold")
      .text("4. DO PRAZO")
      .moveDown(0.5);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text(
        "4.1. O presente contrato tera vigencia a partir de ___/___/______, podendo ser renovado mediante acordo entre as partes.",
        { align: "justify" }
      )
      .moveDown(1);

    // Section 5 - Obrigacoes
    doc
      .fontSize(13)
      .font("Helvetica-Bold")
      .text("5. DAS OBRIGACOES DAS PARTES")
      .moveDown(0.5);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text("5.1. Sao obrigacoes do CONTRATANTE:", { align: "justify" })
      .text(
        "   a) Fornecer todas as informacoes necessarias para a execucao dos servicos;"
      )
      .text("   b) Efetuar o pagamento nos prazos estabelecidos;")
      .text(
        "   c) Manter ambiente adequado para a realizacao dos servicos (quando aplicavel)."
      )
      .moveDown(0.5);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text("5.2. Sao obrigacoes do CONTRATADO(A):", { align: "justify" })
      .text(
        "   a) Executar os servicos com zelo, diligencia e qualidade tecnica;"
      )
      .text("   b) Cumprir os prazos acordados para entrega;")
      .text("   c) Emitir nota fiscal ou recibo de pagamento quando solicitado;")
      .text(
        "   d) Manter sigilo sobre informacoes confidenciais do contratante."
      )
      .moveDown(1);

    // Section 6 - Rescisao
    doc
      .fontSize(13)
      .font("Helvetica-Bold")
      .text("6. DA RESCISAO")
      .moveDown(0.5);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text(
        "6.1. Qualquer das partes podera rescindir este contrato mediante aviso previo de 30 (trinta) dias.",
        { align: "justify" }
      )
      .text(
        "6.2. Em caso de descumprimento de qualquer clausula contratual, a parte lesada podera rescindir o contrato imediatamente.",
        { align: "justify" }
      )
      .moveDown(1);

    // Section 7 - Foro
    doc
      .fontSize(13)
      .font("Helvetica-Bold")
      .text("7. DO FORO")
      .moveDown(0.5);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text(
        "As partes elegem o foro da Comarca de ___________________ para dirimir quaisquer duvidas ou litigios decorrentes deste contrato, com renuncia de qualquer outro, por mais privilegiado que seja.",
        { align: "justify" }
      )
      .moveDown(2);

    // Signatures
    doc
      .fontSize(11)
      .font("Helvetica")
      .text(`__________________________, ${today}.`, { align: "center" })
      .moveDown(2);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text("_________________________________________", { align: "center" })
      .text("CONTRATANTE", { align: "center" })
      .moveDown(2);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text("_________________________________________", { align: "center" })
      .text("CONTRATADO(A)", { align: "center" });

    addFooter(doc);
    doc.end();
  });
}

export function generateModeloNotaFiscal(data: CustomerData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = createBaseDocument();
    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    addHeader(doc, "MODELO DE NOTA FISCAL DE SERVICOS (RPA)");
    doc
      .fontSize(10)
      .font("Helvetica")
      .fillColor("#666666")
      .text("Recibo de Pagamento a Autonomo - Modelo para MEI", { align: "center" })
      .moveDown(1);

    // Header info
    doc
      .fontSize(11)
      .font("Helvetica-Bold")
      .fillColor("#333333")
      .text("DADOS DO PRESTADOR DE SERVICOS")
      .moveDown(0.3);

    doc
      .fontSize(10)
      .font("Helvetica")
      .fillColor("#333333")
      .text(`Nome / Razao Social: ${data.nomeEmpresa || "________________________________"}`)
      .text(`CNPJ (MEI): ${data.cnpj || "________________________________"}`)
      .text("Endereco: _________________________________________________________________")
      .text("Telefone: __________________________ E-mail: ______________________________")
      .moveDown(0.8);

    doc
      .fontSize(11)
      .font("Helvetica-Bold")
      .text("DADOS DO TOMADOR DE SERVICOS (CLIENTE)")
      .moveDown(0.3);

    doc
      .fontSize(10)
      .font("Helvetica")
      .text("Nome / Razao Social: _____________________________________________________")
      .text("CPF/CNPJ: ________________________________________________________________")
      .text("Endereco: _________________________________________________________________")
      .text("Telefone: __________________________ E-mail: ______________________________")
      .moveDown(0.8);

    // Discriminacao
    doc
      .fontSize(11)
      .font("Helvetica-Bold")
      .text("DISCRIMINACAO DOS SERVICOS")
      .moveDown(0.3);

    // Table header
    const tableTop = doc.y;
    const col1 = 60;
    const col2 = 300;
    const col3 = 400;
    const col4 = 470;

    doc
      .fontSize(9)
      .font("Helvetica-Bold")
      .text("Descricao do Servico", col1, tableTop)
      .text("Quant.", col2, tableTop)
      .text("Valor Unit.", col3, tableTop)
      .text("Total", col4, tableTop);

    // Draw line
    doc
      .moveTo(col1, doc.y + 2)
      .lineTo(doc.page.width - 60, doc.y + 2)
      .strokeColor("#cccccc")
      .stroke();

    doc.moveDown(0.5);

    // Service lines
    for (let i = 0; i < 5; i++) {
      const y = doc.y;
      doc
        .fontSize(9)
        .font("Helvetica")
        .text(
          "__________________________________________________",
          col1,
          y,
          { width: col2 - col1 - 10 }
        )
        .text("_______", col2, y)
        .text("R$ ________", col3, y)
        .text("R$ ________", col4, y);
      doc.moveDown(0.3);
    }

    // Total line
    doc
      .moveTo(col1, doc.y + 2)
      .lineTo(doc.page.width - 60, doc.y + 2)
      .strokeColor("#cccccc")
      .stroke();

    doc.moveDown(0.5);
    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .text(
        "VALOR TOTAL DOS SERVICOS:   R$ ________________________________________",
        { align: "right" }
      )
      .moveDown(1.5);

    // Info
    doc
      .fontSize(9)
      .font("Helvetica")
      .fillColor("#666666")
      .text(
        "Observacoes:",
        { align: "left" }
      )
      .text(
        "- MEI e isento de IRRF sobre servicos prestados (conforme Lei Complementar 123/2006).",
        { align: "left" }
      )
      .text(
        "- O MEI deve emitir NFSe quando exigido pelo municipio. Este modelo RPA e valido como recibo para pessoa fisica.",
        { align: "left" }
      )
      .text(
        "- Consulte seu contador sobre obrigacoes fiscais especificas do seu municipio.",
        { align: "left" }
      )
      .moveDown(1);

    const today = new Date().toLocaleDateString("pt-BR");
    doc
      .fontSize(10)
      .font("Helvetica")
      .fillColor("#333333")
      .text(`__________________________, ${today}.`, { align: "center" })
      .moveDown(1.5);

    doc
      .fontSize(10)
      .font("Helvetica")
      .text("_________________________________________", { align: "center" })
      .text("Assinatura do Prestador de Servicos", { align: "center" });

    addFooter(doc);
    doc.end();
  });
}

export function generateReciboPagamento(data: CustomerData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = createBaseDocument();
    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    addHeader(doc, "RECIBO DE PAGAMENTO");

    const today = new Date().toLocaleDateString("pt-BR");

    doc
      .fontSize(11)
      .font("Helvetica")
      .fillColor("#333333")
      .text(
        `Eu, ${data.nomeEmpresa || "__________________________________________"}, inscrito(a) no CNPJ nº ${data.cnpj || "____________________"}, recebi de __________________________________________, CPF/CNPJ ____________________, a quantia de R$ _______________ (_______________________), referente a:`,
        { align: "justify" }
      )
      .moveDown(0.5)
      .text(
        "_______________________________________________________________________"
      )
      .text(
        "_______________________________________________________________________"
      )
      .text(
        "_______________________________________________________________________"
      )
      .moveDown(1);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text("Forma de pagamento: ___________________________________________________")
      .moveDown(0.5);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text(
        "Para maior clareza, firmo o presente recibo dando plena e geral quitacao."
      )
      .moveDown(2);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text(`__________________________, ${today}.`, { align: "center" })
      .moveDown(2);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text("_________________________________________", { align: "center" })
      .text("EMITENTE", { align: "center" })
      .moveDown(1.5);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text("_________________________________________", { align: "center" })
      .text("RECEBEDOR", { align: "center" });

    addFooter(doc);
    doc.end();
  });
}

export function generateTermoResponsabilidade(data: CustomerData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = createBaseDocument();
    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    addHeader(doc, "TERMO DE RESPONSABILIDADE");

    const today = new Date().toLocaleDateString("pt-BR");

    doc
      .fontSize(11)
      .font("Helvetica")
      .fillColor("#333333")
      .text(
        `Eu, ${data.nomeEmpresa || "__________________________________________"}, portador(a) do CNPJ (MEI) nº ${data.cnpj || "____________________"}, residente e domiciliado(a) em ___________________________________________________, declaro para os devidos fins que:`,
        { align: "justify" }
      )
      .moveDown(1);

    doc
      .fontSize(11)
      .font("Helvetica-Bold")
      .text("1. ")
      .font("Helvetica")
      .text(
        "Assumo total responsabilidade pela execucao dos servicos contratados, comprometendo-me a realiza-los com qualidade, pontualidade e em conformidade com as normas tecnicas aplicaveis."
      )
      .moveDown(0.5);

    doc
      .fontSize(11)
      .font("Helvetica-Bold")
      .text("2. ")
      .font("Helvetica")
      .text(
        "Declaro estar em dia com minhas obrigacoes fiscais como Microempreendedor Individual (MEI), incluindo o pagamento mensal do DAS e a entrega da Declaracao Anual do Simples Nacional (DASN-SIMEI)."
      )
      .moveDown(0.5);

    doc
      .fontSize(11)
      .font("Helvetica-Bold")
      .text("3. ")
      .font("Helvetica")
      .text(
        "Comprometo-me a manter sigilo absoluto sobre todas as informacoes confidenciais do contratante as quais tiver acesso durante a prestacao dos servicos."
      )
      .moveDown(0.5);

    doc
      .fontSize(11)
      .font("Helvetica-Bold")
      .text("4. ")
      .font("Helvetica")
      .text(
        "Declaro que possuo os equipamentos, ferramentas e conhecimentos tecnicos necessarios para a adequada execucao dos servicos contratados."
      )
      .moveDown(0.5);

    doc
      .fontSize(11)
      .font("Helvetica-Bold")
      .text("5. ")
      .font("Helvetica")
      .text(
        "Comprometo-me a emitir nota fiscal ou recibo sempre que solicitado pelo contratante, conforme legislacao vigente."
      )
      .moveDown(0.5);

    doc
      .fontSize(11)
      .font("Helvetica-Bold")
      .text("6. ")
      .font("Helvetica")
      .text(
        "Reconheco que a falsidade das declaracoes aqui prestadas implica em responsabilidade civil e criminal, nos termos da lei."
      )
      .moveDown(2);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text(
        "Por ser expressao da verdade, firmo o presente termo em uma via, para que produza seus juridicos e legais efeitos.",
        { align: "justify" }
      )
      .moveDown(2);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text(`__________________________, ${today}.`, { align: "center" })
      .moveDown(2);

    doc
      .fontSize(11)
      .font("Helvetica")
      .text("_________________________________________", { align: "center" })
      .text("DECLARANTE", { align: "center" });

    addFooter(doc);
    doc.end();
  });
}

// ─── 5 NEW TEMPLATE PACKS ────────────────────────────────────────────────────

/** Contrato de Prestação de Serviços — design gráfico, TI, fotografia */
export function generateContratoPrestacaoDetalhado(data: CustomerData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = createBaseDocument();
    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    addHeader(doc, "CONTRATO DE PRESTAÇÃO DE SERVIÇOS");
    const today = new Date().toLocaleDateString("pt-BR");

    doc
      .fontSize(10)
      .font("Helvetica")
      .fillColor("#666666")
      .text("Modelo profissional para MEI — Design Gráfico, TI, Fotografia e Serviços", { align: "center" })
      .moveDown(1);

    doc
      .fontSize(11)
      .font("Helvetica")
      .fillColor("#333333")
      .text("Pelo presente instrumento particular de Contrato de Prestação de Serviços, as partes abaixo qualificadas têm entre si justo e acordado o seguinte:")
      .moveDown(1);

    // CLÁUSULA 1 — PARTES
    doc.fontSize(13).font("Helvetica-Bold").text("CLÁUSULA 1 — DAS PARTES").moveDown(0.5);
    doc.fontSize(11).font("Helvetica-Bold").text("CONTRATANTE:").moveDown(0.3);
    doc.fontSize(11).font("Helvetica")
      .text("Nome/Razão Social: _______________________________________________________")
      .text("CPF/CNPJ: ________________________________________________________________")
      .text("Endereço: _________________________________________________________________")
      .text("Telefone: _________________________ E-mail: _______________________________")
      .moveDown(0.5);
    doc.font("Helvetica-Bold").text("CONTRATADO(A) — MEI:").moveDown(0.3);
    doc.font("Helvetica")
      .text(`Nome: ${data.nomeEmpresa || "_________________________________________"}`)
      .text(`CNPJ (MEI): ${data.cnpj || "_____________________________________________"}`)
      .text("Inscrição Municipal: ______________________________________________________")
      .text("Endereço Comercial: _______________________________________________________")
      .text("Telefone: _________________________ E-mail: _______________________________")
      .moveDown(1);

    // CLÁUSULA 2 — OBJETO
    doc.fontSize(13).font("Helvetica-Bold").text("CLÁUSULA 2 — DO OBJETO").moveDown(0.5);
    doc.fontSize(11).font("Helvetica")
      .text("2.1. O presente contrato tem por objeto a prestação dos seguintes serviços profissionais:")
      .moveDown(0.3)
      .text("___________________________________________________________________________")
      .text("___________________________________________________________________________")
      .text("___________________________________________________________________________")
      .moveDown(0.3)
      .text("2.2. Área de atuação (design gráfico, TI, fotografia, consultoria, etc.):")
      .text("___________________________________________________________________________")
      .moveDown(0.3)
      .text("2.3. Escopo detalhado e entregáveis:")
      .text("___________________________________________________________________________")
      .text("___________________________________________________________________________")
      .text("___________________________________________________________________________")
      .moveDown(1);

    // CLÁUSULA 3 — VALOR
    doc.fontSize(13).font("Helvetica-Bold").text("CLÁUSULA 3 — DO VALOR E PAGAMENTO").moveDown(0.5);
    doc.fontSize(11).font("Helvetica")
      .text("3.1. O valor total pelos serviços é de R$ _________________ (_________________________).")
      .text("3.2. Forma de pagamento: ( ) À vista  ( ) Parcelado em ____ vezes  ( ) Por entrega")
      .text("3.3. Em caso de atraso, multa de 2% + juros de 1% ao mês + correção monetária.")
      .moveDown(1);

    // CLÁUSULA 4 — PRAZO
    doc.fontSize(13).font("Helvetica-Bold").text("CLÁUSULA 4 — DO PRAZO").moveDown(0.5);
    doc.fontSize(11).font("Helvetica")
      .text("4.1. Prazo de execução: ____ dias úteis a partir da assinatura.")
      .text("4.2. Vigência: de ___/___/______ até ___/___/______, podendo ser renovado.")
      .moveDown(1);

    // CLÁUSULA 5 — OBRIGAÇÕES
    doc.fontSize(13).font("Helvetica-Bold").text("CLÁUSULA 5 — DAS OBRIGAÇÕES").moveDown(0.5);
    doc.fontSize(11).font("Helvetica-Bold").text("5.1. Do CONTRATANTE:").moveDown(0.3);
    doc.font("Helvetica")
      .text("a) Fornecer briefings, materiais e informações necessárias;")
      .text("b) Efetuar pagamentos nos prazos acordados;")
      .text("c) Respeitar prazos de aprovação e feedback.")
      .moveDown(0.5);
    doc.font("Helvetica-Bold").text("5.2. Do CONTRATADO(A):").moveDown(0.3);
    doc.font("Helvetica")
      .text("a) Executar serviços com qualidade técnica e profissionalismo;")
      .text("b) Cumprir prazos acordados, comunicando eventuais atrasos;")
      .text("c) Manter sigilo sobre informações confidenciais;")
      .text("d) Emitir nota fiscal/recibo quando solicitado;")
      .text("e) Respeitar direitos autorais e de propriedade intelectual.")
      .moveDown(1);

    // CLÁUSULA 6 — PROPRIEDADE INTELECTUAL
    doc.fontSize(13).font("Helvetica-Bold").text("CLÁUSULA 6 — DA PROPRIEDADE INTELECTUAL").moveDown(0.5);
    doc.fontSize(11).font("Helvetica")
      .text("6.1. Os direitos de uso dos materiais produzidos serão transferidos ao CONTRATANTE após quitação total.")
      .text("6.2. O CONTRATADO(A) poderá utilizar os trabalhos em portfólio, salvo acordo contrário.")
      .moveDown(1);

    // CLÁUSULA 7 — RESCISÃO
    doc.fontSize(13).font("Helvetica-Bold").text("CLÁUSULA 7 — DA RESCISÃO").moveDown(0.5);
    doc.fontSize(11).font("Helvetica")
      .text("7.1. Qualquer parte pode rescindir com aviso prévio de 15 dias.")
      .text("7.2. Rescisão sem justa causa pelo CONTRATANTE: pagamento de 30% do valor restante.")
      .text("7.3. Rescisão por descumprimento: a parte lesada pode rescindir imediatamente.")
      .moveDown(1);

    // CLÁUSULA 8 — FORO
    doc.fontSize(13).font("Helvetica-Bold").text("CLÁUSULA 8 — DO FORO").moveDown(0.5);
    doc.fontSize(11).font("Helvetica")
      .text("Fica eleito o foro da Comarca de ___________________ para dirimir dúvidas deste contrato.")
      .moveDown(2);

    // SIGNATURES
    doc.text(`__________________________, ${today}.`, { align: "center" }).moveDown(2);
    doc.text("_________________________________________", { align: "center" });
    doc.text("CONTRATANTE", { align: "center" }).moveDown(2);
    doc.text("_________________________________________", { align: "center" });
    doc.text("CONTRATADO(A) — MEI", { align: "center" }).moveDown(1);
    doc.fontSize(9).fillColor("#999999")
      .text("Testemunhas (opcional):", { align: "left" })
      .text("1. ______________________________  2. ______________________________");

    addFooter(doc);
    doc.end();
  });
}

/** Recibo de Autônomo (RPA) — preenchível */
export function generateReciboAutonomoRPA(data: CustomerData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = createBaseDocument();
    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    addHeader(doc, "RECIBO DE PAGAMENTO A AUTÔNOMO (RPA)");
    const today = new Date().toLocaleDateString("pt-BR");

    doc.fontSize(10).font("Helvetica").fillColor("#666666")
      .text("Documento válido como comprovante de pagamento para pessoa física e MEI", { align: "center" })
      .moveDown(1);

    doc.fontSize(12).font("Helvetica-Bold").fillColor("#333333")
      .text("RPA Nº: ________/________", { align: "right" })
      .moveDown(0.5);

    doc.fontSize(12).font("Helvetica-Bold").fillColor("#1a1a1a")
      .text("DADOS DO PRESTADOR DE SERVIÇOS").moveDown(0.3);
    doc.fontSize(10).font("Helvetica")
      .text(`Nome: ${data.nomeEmpresa || "_________________________________________________________________"}`)
      .text(`CNPJ/CPF: ${data.cnpj || "______________________________"}  Insc. Municipal: ___________________`)
      .text("Endereço: ____________________________________________________________________________")
      .text("Cidade/UF: __________________________________  CEP: ___________________")
      .text("Telefone: _________________________  E-mail: ___________________________________________")
      .moveDown(0.8);

    doc.fontSize(12).font("Helvetica-Bold").text("DADOS DO TOMADOR DE SERVIÇOS").moveDown(0.3);
    doc.fontSize(10).font("Helvetica")
      .text("Nome/Razão Social: ____________________________________________________________________")
      .text("CPF/CNPJ: _____________________________________________________________________________")
      .text("Endereço: ____________________________________________________________________________")
      .text("Cidade/UF: __________________________________  CEP: ___________________")
      .text("Telefone: _________________________  E-mail: ___________________________________________")
      .moveDown(0.8);

    doc.fontSize(12).font("Helvetica-Bold").text("DISCRIMINAÇÃO DOS SERVIÇOS PRESTADOS").moveDown(0.3);

    const tableY = doc.y;
    doc.fontSize(9).font("Helvetica-Bold");
    doc.text("Descrição do Serviço", 60, tableY, { width: 240 });
    doc.text("Valor (R$)", 310, tableY, { width: 100 });

    doc.moveTo(60, doc.y + 2).lineTo(500, doc.y + 2).strokeColor("#cccccc").stroke();
    doc.moveDown(0.5);

    for (let i = 0; i < 6; i++) {
      const y = doc.y;
      doc.fontSize(9).font("Helvetica")
        .text("_______________________________________________________________", 60, y, { width: 240 })
        .text("___________________", 310, y, { width: 100 });
      doc.moveDown(0.4);
    }

    doc.moveTo(60, doc.y + 2).lineTo(500, doc.y + 2).strokeColor("#333333").stroke();
    doc.moveDown(0.5);

    doc.fontSize(10).font("Helvetica-Bold")
      .text("VALOR TOTAL:  R$ ___________________________________________", { align: "right" })
      .moveDown(1);

    doc.fontSize(12).font("Helvetica-Bold").text("RETENÇÕES E DESCONTOS").moveDown(0.3);
    doc.fontSize(10).font("Helvetica")
      .text("INSS (11%): R$ ____________________   IRRF: R$ ____________________")
      .text("ISS: R$ ____________________          Outros: R$ ____________________")
      .text("VALOR LÍQUIDO A RECEBER: R$ ________________________________________________")
      .moveDown(1);

    doc.fontSize(10).font("Helvetica-Oblique").fillColor("#666666")
      .text("Observações:")
      .text("• MEI é isento de IRRF conforme Lei Complementar 123/2006")
      .text("• Para serviços prestados a pessoa jurídica, pode haver retenção de INSS (11%) e ISS conforme município")
      .text("• Consulte seu contador sobre obrigações fiscais específicas")
      .moveDown(1);

    doc.fontSize(10).font("Helvetica").fillColor("#333333")
      .text(`__________________________, ${today}.`, { align: "center" }).moveDown(1.5);
    doc.text("_________________________________________", { align: "center" });
    doc.font("Helvetica-Bold").text("PRESTADOR DE SERVIÇOS", { align: "center" }).moveDown(1.5);
    doc.font("Helvetica").text("_________________________________________", { align: "center" });
    doc.font("Helvetica-Bold").text("TOMADOR DE SERVIÇOS", { align: "center" });

    addFooter(doc);
    doc.end();
  });
}

/** Declaração Anual MEI (DASN-SIMEI) — preenchível */
export function generateDASN_SIMEI(data: CustomerData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = createBaseDocument();
    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    addHeader(doc, "DECLARAÇÃO ANUAL DO SIMPLES NACIONAL");
    const today = new Date().toLocaleDateString("pt-BR");
    doc.fontSize(10).font("Helvetica").fillColor("#666666")
      .text("DASN-SIMEI — Modelo Preenchível para Microempreendedor Individual", { align: "center" })
      .moveDown(1);

    doc.fontSize(13).font("Helvetica-Bold").fillColor("#1a1a1a")
      .text("1. IDENTIFICAÇÃO DO MEI").moveDown(0.5);
    doc.fontSize(10).font("Helvetica")
      .text(`Nome Empresarial: ${data.nomeEmpresa || "_________________________________________________________________"}`)
      .text(`CNPJ: ${data.cnpj || "______________________________"}  Nome Fantasia: ____________________________`)
      .text("Endereço Comercial: _____________________________________________________________________")
      .text("Município/UF: ______________________________  CEP: ___________________")
      .text("Natureza Jurídica: 213-5 — Microempreendedor Individual")
      .moveDown(0.8);

    doc.fontSize(13).font("Helvetica-Bold").text("2. ANO-CALENDÁRIO DA DECLARAÇÃO").moveDown(0.5);
    doc.fontSize(10).font("Helvetica")
      .text("Ano-calendário: ________  (exercício ________)")
      .text("Data de abertura do MEI: ___/___/______")
      .text("MEI permaneceu ativo durante todo o ano-calendário?  ( ) SIM  ( ) NÃO")
      .text("Se NÃO, data de baixa: ___/___/______")
      .moveDown(0.8);

    doc.fontSize(13).font("Helvetica-Bold").text("3. RECEITA BRUTA TOTAL").moveDown(0.5);
    doc.fontSize(10).font("Helvetica")
      .text("3.1. Receita Bruta de Comércio e Indústria:")
      .text("     Janeiro: R$ ___________  Fevereiro: R$ ___________  Março: R$ ___________")
      .text("     Abril:   R$ ___________  Maio:      R$ ___________  Junho: R$ ___________")
      .text("     Julho:   R$ ___________  Agosto:    R$ ___________  Setembro: R$ ___________")
      .text("     Outubro: R$ ___________  Novembro:  R$ ___________  Dezembro: R$ ___________")
      .text("     TOTAL COMÉRCIO/INDÚSTRIA: R$ ________________________________________________").moveDown(0.5);
    doc.text("3.2. Receita Bruta de Serviços:")
      .text("     Janeiro: R$ ___________  Fevereiro: R$ ___________  Março: R$ ___________")
      .text("     Abril:   R$ ___________  Maio:      R$ ___________  Junho: R$ ___________")
      .text("     Julho:   R$ ___________  Agosto:    R$ ___________  Setembro: R$ ___________")
      .text("     Outubro: R$ ___________  Novembro:  R$ ___________  Dezembro: R$ ___________")
      .text("     TOTAL SERVIÇOS: R$ __________________________________________________________").moveDown(0.5);
    doc.text("3.3. RECEITA BRUTA TOTAL (Comércio + Serviços): R$ _________________________________")
      .moveDown(0.5);
    doc.fontSize(10).font("Helvetica-Bold").fillColor("#1a1a1a")
      .text("Limite MEI 2026: R$ 81.000,00").moveDown(0.3);
    doc.fontSize(10).font("Helvetica")
      .text("( ) Receita dentro do limite  ( ) Receita excedeu o limite — obrigatório desenquadramento")
      .moveDown(0.8);

    doc.fontSize(13).font("Helvetica-Bold").text("4. EMPREGADO").moveDown(0.5);
    doc.fontSize(10).font("Helvetica")
      .text("Possuiu empregado no ano-calendário?  ( ) SIM  ( ) NÃO")
      .text("Se SIM, quantidade de meses com empregado: ____ meses")
      .text("Nome do empregado: ___________________________________________________________________")
      .text("CPF: _______________________________  Salário: R$ ___________________")
      .moveDown(0.8);

    doc.fontSize(13).font("Helvetica-Bold").text("5. NOTAS FISCAIS EMITIDAS").moveDown(0.5);
    doc.fontSize(10).font("Helvetica")
      .text("Quantidade de notas fiscais emitidas no ano: ______")
      .text("Valor total de notas fiscais emitidas: R$ _____________________________________________")
      .moveDown(0.8);

    doc.fontSize(13).font("Helvetica-Bold").fillColor("#1a1a1a").text("6. DECLARAÇÃO").moveDown(0.5);
    doc.fontSize(10).font("Helvetica")
      .text("Declaro, sob as penas da lei, que as informações prestadas nesta declaração são")
      .text("verdadeiras e correspondem à realidade dos fatos.")
      .moveDown(2);

    doc.text(`__________________________, ${today}.`, { align: "center" }).moveDown(2);
    doc.text("_________________________________________", { align: "center" });
    doc.font("Helvetica-Bold").text("ASSINATURA DO MEI OU REPRESENTANTE LEGAL", { align: "center" });

    addFooter(doc);
    doc.end();
  });
}

/** Nota Fiscal de Serviço Avulsa */
export function generateNotaFiscalAvulsa(data: CustomerData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = createBaseDocument();
    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    addHeader(doc, "NOTA FISCAL DE SERVIÇO AVULSA");
    doc.fontSize(10).font("Helvetica").fillColor("#666666")
      .text("Documento Fiscal para Prestação de Serviços — Pessoa Física e MEI", { align: "center" })
      .moveDown(1);

    doc.fontSize(11).font("Helvetica-Bold").fillColor("#333333")
      .text("NFS-e Nº: ____________  ", { continued: true })
      .font("Helvetica").text(`Data de Emissão: ${new Date().toLocaleDateString("pt-BR")}`)
      .moveDown(0.8);

    doc.fontSize(12).font("Helvetica-Bold").fillColor("#1a1a1a")
      .text("PRESTADOR DE SERVIÇOS").moveDown(0.3);
    doc.fontSize(10).font("Helvetica")
      .text(`Nome/Razão Social: ${data.nomeEmpresa || "_________________________________________________________________"}`)
      .text(`CNPJ/CPF: ${data.cnpj || "______________________________"}  Insc. Municipal: ___________________`)
      .text("Endereço: ____________________________________________________________________________")
      .text("Município/UF: __________________________  CEP: ___________________")
      .text("Telefone: _________________________  E-mail: ___________________________________________")
      .moveDown(0.8);

    doc.fontSize(12).font("Helvetica-Bold").text("TOMADOR DE SERVIÇOS").moveDown(0.3);
    doc.fontSize(10).font("Helvetica")
      .text("Nome/Razão Social: ____________________________________________________________________")
      .text("CPF/CNPJ: _____________________________________________________________________________")
      .text("Endereço: ____________________________________________________________________________")
      .text("Município/UF: __________________________  CEP: ___________________")
      .text("Telefone: _________________________  E-mail: ___________________________________________")
      .moveDown(0.8);

    doc.fontSize(12).font("Helvetica-Bold").text("DISCRIMINAÇÃO DOS SERVIÇOS").moveDown(0.3);
    doc.fontSize(10).font("Helvetica")
      .text("1. ________________________________________________________________________________")
      .text("2. ________________________________________________________________________________")
      .text("3. ________________________________________________________________________________")
      .text("4. ________________________________________________________________________________")
      .text("5. ________________________________________________________________________________")
      .moveDown(0.5);
    doc.text("CNAE Principal: ____________________  Código do Serviço (LC 116): ____________________")
      .moveDown(0.8);

    doc.fontSize(12).font("Helvetica-Bold").text("VALORES").moveDown(0.3);
    doc.fontSize(10).font("Helvetica")
      .text("Valor dos Serviços:                         R$ _________________________________________")
      .text("Desconto (se houver):                       R$ _________________________________________")
      .text("Base de Cálculo:                            R$ _________________________________________")
      .text("Alíquota ISS (%):                           ______%")
      .text("ISS Retido:                                 R$ _________________________________________")
      .text("PIS:                                        R$ _________________________________________")
      .text("COFINS:                                     R$ _________________________________________")
      .text("IRRF:                                       R$ _________________________________________")
      .text("INSS:                                       R$ _________________________________________")
      .moveDown(0.3);
    doc.font("Helvetica-Bold")
      .text("VALOR LÍQUIDO:                              R$ _________________________________________", { align: "right" })
      .moveDown(0.8);

    doc.fontSize(9).font("Helvetica-Oblique").fillColor("#666666")
      .text("Observações:")
      .text("• Este documento é um modelo. Para NFS-e oficial, utilize o sistema da prefeitura do seu município.")
      .text("• MEI é isento de PIS, COFINS e IRRF (LC 123/2006). Consulte seu contador.")
      .text("• ISS: alíquota varia conforme município (geralmente 2% a 5% para MEI).")
      .moveDown(1);

    const today2 = new Date().toLocaleDateString("pt-BR");
    doc.fontSize(10).font("Helvetica").fillColor("#333333")
      .text(`__________________________, ${today2}.`, { align: "center" }).moveDown(1.5);
    doc.text("_________________________________________", { align: "center" });
    doc.font("Helvetica-Bold").text("PRESTADOR DE SERVIÇOS", { align: "center" });

    addFooter(doc);
    doc.end();
  });
}

/** Termo de Rescisão de Contrato */
export function generateTermoRescisaoContrato(data: CustomerData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = createBaseDocument();
    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    addHeader(doc, "TERMO DE RESCISÃO DE CONTRATO");
    const today = new Date().toLocaleDateString("pt-BR");

    doc.fontSize(10).font("Helvetica").fillColor("#666666")
      .text("Documento formal para distrato de contrato de prestação de serviços", { align: "center" })
      .moveDown(1);

    doc.fontSize(13).font("Helvetica-Bold").fillColor("#1a1a1a")
      .text("1. DAS PARTES").moveDown(0.5);
    doc.fontSize(11).font("Helvetica")
      .text("CONTRATANTE: ____________________________________________________________________")
      .text("CPF/CNPJ: ________________________________________________________________________")
      .text("Endereço: ________________________________________________________________________")
      .moveDown(0.5);
    doc.text(`CONTRATADO(A): ${data.nomeEmpresa || "_________________________________________________________________"}`)
      .text(`CNPJ (MEI): ${data.cnpj || "_________________________________________________________________"}`)
      .text("Endereço: ________________________________________________________________________")
      .moveDown(1);

    doc.fontSize(13).font("Helvetica-Bold").text("2. DO CONTRATO RESCINDIDO").moveDown(0.5);
    doc.fontSize(11).font("Helvetica")
      .text("As partes celebram o presente TERMO DE RESCISÃO referente ao Contrato de Prestação")
      .text("de Serviços firmado em ___/___/______, cujo objeto era:")
      .moveDown(0.3)
      .text("___________________________________________________________________________")
      .text("___________________________________________________________________________")
      .text("___________________________________________________________________________")
      .moveDown(1);

    doc.fontSize(13).font("Helvetica-Bold").text("3. DO MOTIVO DA RESCISÃO").moveDown(0.5);
    doc.fontSize(11).font("Helvetica")
      .text("3.1. O presente contrato é rescindido pelo seguinte motivo:")
      .moveDown(0.3)
      .text("( ) Término do prazo contratual")
      .text("( ) Conclusão do objeto contratado")
      .text("( ) Acordo entre as partes")
      .text("( ) Rescisão unilateral por parte do CONTRATANTE")
      .text("( ) Rescisão unilateral por parte do CONTRATADO(A)")
      .text("( ) Outro: ___________________________________________________________________")
      .moveDown(0.5);
    doc.text("3.2. A data de efeito da rescisão é: ___/___/______")
      .moveDown(1);

    doc.fontSize(13).font("Helvetica-Bold").text("4. DO ACERTO FINANCEIRO").moveDown(0.5);
    doc.fontSize(11).font("Helvetica")
      .text("4.1. Valores pagos até a presente data: R$ _________________________________________")
      .text("4.2. Valores pendentes de pagamento: R$ ___________________________________________")
      .text("4.3. Multa rescisória (se aplicável): R$ ___________________________________________")
      .text("4.4. Valor total do acerto: R$ ____________________________________________________")
      .text("4.5. Forma de pagamento do acerto: ________________________________________________")
      .text("4.6. Prazo para pagamento: até ___/___/______")
      .moveDown(0.5);
    doc.fontSize(10).font("Helvetica-Oblique").fillColor("#666666")
      .text("( ) As partes declaram que não há valores pendentes — QUITAÇÃO TOTAL E IRRESTRITA.")
      .moveDown(1);

    doc.fontSize(13).font("Helvetica-Bold").fillColor("#1a1a1a")
      .text("5. DAS OBRIGAÇÕES PÓS-RESCISÃO").moveDown(0.5);
    doc.fontSize(11).font("Helvetica")
      .text("5.1. O CONTRATADO(A) se compromete a:")
      .text("    a) Entregar todos os materiais, arquivos e documentos pendentes em até ____ dias;")
      .text("    b) Manter sigilo sobre informações confidenciais por ____ meses;")
      .text("    c) Fornecer suporte de transição por ____ dias (se aplicável).")
      .moveDown(0.5);
    doc.text("5.2. O CONTRATANTE se compromete a:")
      .text("    a) Efetuar o pagamento do acerto financeiro no prazo estabelecido;")
      .text("    b) Devolver equipamentos/materiais do CONTRATADO(A), se houver.")
      .moveDown(1);

    doc.fontSize(13).font("Helvetica-Bold").text("6. DA QUITAÇÃO GERAL").moveDown(0.5);
    doc.fontSize(11).font("Helvetica")
      .text("As partes declaram, para todos os fins de direito, que dão plena, rasa e geral quitação")
      .text("uma à outra em relação ao contrato rescindido, nada mais tendo a reclamar, seja a que")
      .text("título for, renunciando a qualquer ação judicial ou extrajudicial relativa ao contrato.")
      .moveDown(2);

    doc.text(`__________________________, ${today}.`, { align: "center" }).moveDown(2);
    doc.text("_________________________________________", { align: "center" });
    doc.font("Helvetica-Bold").text("CONTRATANTE", { align: "center" }).moveDown(2);
    doc.text("_________________________________________", { align: "center" });
    doc.font("Helvetica-Bold").text("CONTRATADO(A) — MEI", { align: "center" }).moveDown(1);
    addFooter(doc);
    doc.end();
  });
}

/** Converte um valor em reais para extenso em português (até centenas de milhões). */
export function valorPorExtenso(valor: number): string {
  const unidades = [
    "", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove",
    "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis",
    "dezessete", "dezoito", "dezenove",
  ];
  const dezenas = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];
  const centenas = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];

  function ateMil(n: number): string {
    if (n === 0) return "";
    if (n === 100) return "cem";
    const partes: string[] = [];
    const c = Math.floor(n / 100);
    const resto = n % 100;
    if (c > 0) partes.push(centenas[c]);
    if (resto > 0) {
      if (resto < 20) {
        partes.push(unidades[resto]);
      } else {
        const d = Math.floor(resto / 10);
        const u = resto % 10;
        partes.push(u > 0 ? `${dezenas[d]} e ${unidades[u]}` : dezenas[d]);
      }
    }
    return partes.join(" e ");
  }

  function inteiroPorExtenso(n: number): string {
    if (n === 0) return "zero";
    const milhoes = Math.floor(n / 1_000_000);
    const milhares = Math.floor((n % 1_000_000) / 1000);
    const resto = n % 1000;
    const partes: string[] = [];
    if (milhoes > 0) partes.push(milhoes === 1 ? "um milhão" : `${ateMil(milhoes)} milhões`);
    if (milhares > 0) partes.push(milhares === 1 ? "mil" : `${ateMil(milhares)} mil`);
    if (resto > 0) partes.push(ateMil(resto));
    // "e" antes do último grupo quando ele é < 100 ou centena exata (ex: "mil e cem", "dois mil e trinta")
    if (partes.length > 1 && resto > 0 && (resto < 100 || resto % 100 === 0)) {
      const ultima = partes.pop() as string;
      return `${partes.join(" ")} e ${ultima}`;
    }
    return partes.join(" ");
  }

  const reais = Math.floor(valor);
  const centavos = Math.round((valor - reais) * 100);
  const partes: string[] = [];
  if (reais > 0) {
    const sufixo = reais === 1 ? "real" : reais % 1_000_000 === 0 ? "de reais" : "reais";
    partes.push(`${inteiroPorExtenso(reais)} ${sufixo}`);
  }
  if (centavos > 0) {
    partes.push(`${inteiroPorExtenso(centavos)} ${centavos === 1 ? "centavo" : "centavos"}`);
  }
  if (partes.length === 0) return "zero reais";
  return partes.join(" e ");
}

/** Converte string de valor em formato brasileiro ("1.500,00") ou simples ("1500.00") para número. */
function parseValorBR(str: string): number {
  const clean = (str || "").replace(/[^\d,.]/g, "");
  if (!clean) return NaN;
  if (clean.includes(",")) {
    return parseFloat(clean.replace(/\./g, "").replace(",", "."));
  }
  if (/^\d{1,3}(\.\d{3})+$/.test(clean)) {
    return parseFloat(clean.replace(/\./g, ""));
  }
  return parseFloat(clean);
}

/** Gerador de Recibo MEI — preenchido com dados do usuário */
export type ReciboMEIData = {
  nome: string;
  cnpj: string;
  endereco: string;
  telefone: string;
  email: string;
  tomadorNome: string;
  tomadorCpfCnpj: string;
  tomadorEndereco: string;
  servicoDescricao: string;
  servicoValor: string;
  servicoData: string;
  reciboNumero: string;
};

export function generateReciboMEI(data: ReciboMEIData): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = createBaseDocument();
    const chunks: Buffer[] = [];
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    addHeader(doc, "RECIBO DE PRESTAÇÃO DE SERVIÇOS");

    // Disclaimer
    doc
      .fontSize(9)
      .font("Helvetica-Oblique")
      .fillColor("#666666")
      .text("Documento particular — não substitui nota fiscal", {
        align: "center",
      })
      .moveDown(0.8);

    // Recibo number and date
    const emissaoData = /^\d{4}-\d{2}-\d{2}$/.test(data.servicoData)
      ? new Date(data.servicoData + "T00:00:00").toLocaleDateString("pt-BR")
      : data.servicoData || new Date().toLocaleDateString("pt-BR");
    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .fillColor("#333333")
      .text(`Recibo Nº: ${data.reciboNumero || "—"}`, { align: "right" })
      .font("Helvetica")
      .text(`Data: ${emissaoData}`, { align: "right" });
    doc.moveDown(0.8);

    // ── Two-column layout: Prestador (left) | Tomador (right) ──
    const colLeft = 60;
    const colRight = 310;
    const colWidth = 220;
    const startY = doc.y;

    // Left: PRESTADOR
    doc
      .fontSize(11)
      .font("Helvetica-Bold")
      .fillColor("#1a1a1a")
      .text("PRESTADOR DE SERVIÇOS", colLeft, startY, { width: colWidth });
    doc.moveDown(0.3);

    const prestadorY = doc.y;
    doc
      .fontSize(9)
      .font("Helvetica")
      .fillColor("#333333")
      .text(`Nome: ${data.nome || "—"}`, colLeft, prestadorY, { width: colWidth })
      .text(`CPF/CNPJ: ${data.cnpj || "—"}`, { width: colWidth })
      .text(`Endereço: ${data.endereco || "—"}`, { width: colWidth })
      .text(`Telefone: ${data.telefone || "—"}`, { width: colWidth })
      .text(`E-mail: ${data.email || "—"}`, { width: colWidth });

    // Right: TOMADOR
    doc
      .fontSize(11)
      .font("Helvetica-Bold")
      .fillColor("#1a1a1a")
      .text("TOMADOR DE SERVIÇOS", colRight, startY, { width: colWidth });
    doc.moveDown(0.3);

    const tomadorY = doc.y;
    doc
      .fontSize(9)
      .font("Helvetica")
      .fillColor("#333333")
      .text(`Nome: ${data.tomadorNome || "—"}`, colRight, tomadorY, { width: colWidth })
      .text(`CPF/CNPJ: ${data.tomadorCpfCnpj || "—"}`, { width: colWidth })
      .text(`Endereço: ${data.tomadorEndereco || "—"}`, { width: colWidth });

    // Move past both columns
    doc.y = Math.max(doc.y, prestadorY + 110);

    // Vertical divider line
    doc
      .moveTo(295, startY)
      .lineTo(295, doc.y)
      .strokeColor("#cccccc")
      .stroke();

    doc.moveDown(1);
    // Reset cursor to the left margin — the tomador column moved doc.x to 310
    doc.x = colLeft;

    // ── SERVICES TABLE ──
    doc
      .fontSize(12)
      .font("Helvetica-Bold")
      .fillColor("#1a1a1a")
      .text("DISCRIMINAÇÃO DOS SERVIÇOS")
      .moveDown(0.5);

    // Table header
    const tableTop = doc.y;
    const colDesc = 60;
    const colVal = 420;

    doc
      .fontSize(9)
      .font("Helvetica-Bold")
      .fillColor("#333333")
      .text("Descrição do Serviço", colDesc, tableTop, { width: 330 })
      .text("Valor (R$)", colVal, tableTop, { width: 80 });

    // Header line
    doc
      .moveTo(colDesc, doc.y + 2)
      .lineTo(500, doc.y + 2)
      .strokeColor("#333333")
      .stroke();
    doc.moveDown(0.5);

    // Service row
    const serviceY = doc.y;
    doc
      .fontSize(10)
      .font("Helvetica")
      .fillColor("#1a1a1a")
      .text(data.servicoDescricao || "—", colDesc, serviceY, { width: 330 });

    const valorNum = parseValorBR(data.servicoValor);
    const valorStr = !isNaN(valorNum)
      ? `R$ ${valorNum.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      : "—";

    doc
      .fontSize(10)
      .font("Helvetica-Bold")
      .text(valorStr, colVal, serviceY, { width: 80 });

    // Bottom line
    doc
      .moveTo(colDesc, doc.y + 4)
      .lineTo(500, doc.y + 4)
      .strokeColor("#333333")
      .stroke();
    doc.moveDown(0.8);
    // Reset cursor to the left margin — the table cells above moved doc.x to 420
    doc.x = colDesc;

    // Total
    doc
      .fontSize(11)
      .font("Helvetica-Bold")
      .fillColor("#1a1a1a")
      .text(`VALOR TOTAL:  ${valorStr}`, { align: "right" })
      .moveDown(0.8);

    // Valor por extenso + declaração de recebimento
    if (!isNaN(valorNum)) {
      doc
        .fontSize(10)
        .font("Helvetica")
        .fillColor("#333333")
        .text(
          `Recebi(emos) de ${data.tomadorNome || "____________________"} a importância de ${valorStr} (${valorPorExtenso(valorNum)}), referente aos serviços acima discriminados, pelos quais dou(damos) plena e geral quitação.`,
          { align: "justify" }
        )
        .moveDown(1.5);
    } else {
      doc.moveDown(0.7);
    }

    // ── FOOTER INFO ──
    doc
      .fontSize(9)
      .font("Helvetica-Oblique")
      .fillColor("#666666")
      .text("Informações Importantes:")
      .text("• Este recibo é um documento particular e não substitui nota fiscal.")
      .text("• A emissão de NFS-e deve ser feita no portal da prefeitura quando aplicável.")
      .text("• MEI é isento de PIS, COFINS, IPI, IRRF e CSLL conforme Lei Complementar 123/2006.")
      .text("• Consulte seu contador sobre as obrigações fiscais específicas do seu município.")
      .moveDown(1.5);

    // Signature block
    doc
      .fontSize(10)
      .font("Helvetica")
      .fillColor("#333333")
      .text(`__________________________________________, ${emissaoData}.`, { align: "center" })
      .moveDown(1.5);

    doc
      .fontSize(10)
      .font("Helvetica")
      .text("_________________________________________", { align: "center" })
      .font("Helvetica-Bold")
      .text(data.nome ? data.nome.toUpperCase() : "PRESTADOR DE SERVIÇOS — MEI", { align: "center" })
      .font("Helvetica")
      .fontSize(9)
      .fillColor("#666666")
      .text(`Recibo Nº ${data.reciboNumero || "—"}`, { align: "center" });

    addFooter(doc);
    doc.end();
  });
}
