import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "../../../lib/stripe";
import {
  generateContratoPrestacaoServicos,
  generateModeloNotaFiscal,
  generateReciboPagamento,
  generateTermoResponsabilidade,
} from "../../../lib/pdf-templates";

// Dynamic import for archiver (CJS/ESM interop with Turbopack)
async function createZip(pdfs: { name: string; data: Buffer }[]): Promise<Buffer> {
  const archiverMod = await import("archiver");
  const ArchiverClass = (archiverMod as any).default?.Archiver || (archiverMod as any).Archiver;

  return new Promise((resolve, reject) => {
    const archive = new ArchiverClass("zip", { zlib: { level: 9 } });
    const chunks: Buffer[] = [];

    archive.on("data", (chunk: Buffer) => chunks.push(chunk));
    archive.on("end", () => resolve(Buffer.concat(chunks)));
    archive.on("error", reject);

    for (const pdf of pdfs) {
      archive.append(pdf.data, { name: pdf.name });
    }

    archive.finalize();
  });
}

async function generateKitZip(customerName: string, customerEmail: string): Promise<Buffer> {
  const data = {
    nome: customerName || "",
    email: customerEmail,
    nomeEmpresa: customerName || "",
  };

  const [contrato, notaFiscal, recibo, termo] = await Promise.all([
    generateContratoPrestacaoServicos(data),
    generateModeloNotaFiscal(data),
    generateReciboPagamento(data),
    generateTermoResponsabilidade(data),
  ]);

  return createZip([
    { name: "01-Contrato-Prestacao-Servicos.pdf", data: contrato },
    { name: "02-Modelo-Nota-Fiscal-RPA.pdf", data: notaFiscal },
    { name: "03-Recibo-Pagamento.pdf", data: recibo },
    { name: "04-Termo-Responsabilidade.pdf", data: termo },
  ]);
}

function getMemoryStore(): Map<string, { buffer: Buffer; email: string; createdAt: number }> {
  if (!(globalThis as any).__kitMeiZips) {
    (globalThis as any).__kitMeiZips = new Map();
  }
  return (globalThis as any).__kitMeiZips;
}

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id");
  const download = req.nextUrl.searchParams.get("download");

  if (!sessionId) {
    return NextResponse.json(
      { error: "session_id é obrigatório" },
      { status: 400 }
    );
  }

  try {
    // Check memory store for pre-generated ZIP (fast path)
    const store = getMemoryStore();
    const entry = store.get(sessionId);

    if (entry) {
      // Check expiry (24 hours)
      if (Date.now() - entry.createdAt > 24 * 60 * 60 * 1000) {
        store.delete(sessionId);
        return NextResponse.json({ ready: false, status: "expired" });
      }

      if (download === "1") {
        return new NextResponse(new Uint8Array(entry.buffer), {
          headers: {
            "Content-Type": "application/zip",
            "Content-Disposition": 'attachment; filename="kit-mei-documentos.zip"',
            "Content-Length": entry.buffer.length.toString(),
          },
        });
      }

      return NextResponse.json({ ready: true });
    }

    // Check Stripe session status
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      // Payment confirmed but ZIP not pre-generated (different Lambda instance, or webhook still processing)
      // Generate the ZIP on-demand as a fallback
      const customerEmail = session.customer_details?.email;
      const customerName = session.customer_details?.name;

      if (!customerEmail) {
        return NextResponse.json(
          { ready: false, error: "Dados do cliente não encontrados na sessão" },
          { status: 400 }
        );
      }

      console.log(`Generating Kit MEI on-demand for ${customerEmail} (fallback)`);

      const zipBuffer = await generateKitZip(customerName || "", customerEmail);

      // Cache in memory for subsequent requests
      store.set(sessionId, {
        buffer: zipBuffer,
        email: customerEmail,
        createdAt: Date.now(),
      });

      // Cleanup old entries
      const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
      store.forEach((val, key) => {
        if (val.createdAt < oneDayAgo) {
          store.delete(key);
        }
      });

      if (download === "1") {
        return new NextResponse(new Uint8Array(zipBuffer), {
          headers: {
            "Content-Type": "application/zip",
            "Content-Disposition": 'attachment; filename="kit-mei-documentos.zip"',
            "Content-Length": zipBuffer.length.toString(),
          },
        });
      }

      return NextResponse.json({ ready: true });
    }

    if (session.status === "expired") {
      return NextResponse.json({ ready: false, status: "expired" });
    }

    // Payment not completed
    return NextResponse.json({
      ready: false,
      status: session.payment_status,
    });
  } catch (error) {
    console.error("Download check error:", error);
    return NextResponse.json(
      { ready: false, error: "Erro ao verificar pagamento" },
      { status: 500 }
    );
  }
}
