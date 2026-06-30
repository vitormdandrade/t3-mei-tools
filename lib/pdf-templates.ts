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
    doc
      .fontSize(8)
      .fillColor("#999999")
      .text(
        `Pagina ${i + 1} de ${pages.count} - Gerado por oraculodomei.com.br`,
        60,
        doc.page.height - 50,
        { align: "center", width: doc.page.width - 120 }
      );
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
