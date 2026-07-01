import { NextRequest, NextResponse } from "next/server";

function getMemoryStore(): Map<string, { buffer: Buffer; email: string; downloadUrl?: string; createdAt: number }> {
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
    // Check memory store (from webhook processing)
    const store = getMemoryStore();
    const entry = store.get(sessionId);

    if (entry) {
      // Check expiry (24 hours)
      if (Date.now() - entry.createdAt > 24 * 60 * 60 * 1000) {
        store.delete(sessionId);
        return NextResponse.json({ ready: false, status: "expired" });
      }

      // If we have a Supabase download URL, redirect there
      if (entry.downloadUrl && download === "1") {
        return NextResponse.redirect(entry.downloadUrl);
      }

      // If we have the buffer in memory (backward compat), stream it
      if (download === "1" && entry.buffer) {
        return new NextResponse(new Uint8Array(entry.buffer), {
          headers: {
            "Content-Type": "application/zip",
            "Content-Disposition":
              'attachment; filename="kit-mei-documentos.zip"',
            "Content-Length": entry.buffer.length.toString(),
          },
        });
      }

      return NextResponse.json({ ready: true, email: entry.email });
    }

    // No memory entry — check if Supabase has it
    // For now, return not-ready; the success page will poll
    return NextResponse.json({ ready: false, status: "generating" });
  } catch (error) {
    console.error("Download check error:", error);
    return NextResponse.json(
      { ready: false, error: "Erro ao verificar download" },
      { status: 500 }
    );
  }
}
