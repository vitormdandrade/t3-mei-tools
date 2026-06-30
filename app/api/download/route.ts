import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "../../../lib/stripe";

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
    // Check memory store for pre-generated ZIP
    const store = (globalThis as any).__kitMeiZips;
    const entry = store?.get(sessionId);

    if (entry) {
      // Check expiry (24 hours)
      if (Date.now() - entry.createdAt > 24 * 60 * 60 * 1000) {
        store.delete(sessionId);
        return NextResponse.json({ ready: false, status: "expired" });
      }

      if (download === "1") {
        return new NextResponse(entry.buffer, {
          headers: {
            "Content-Type": "application/zip",
            "Content-Disposition": 'attachment; filename="kit-mei-documentos.zip"',
            "Content-Length": entry.buffer.length.toString(),
          },
        });
      }

      return NextResponse.json({ ready: true });
    }

    // If not in memory, check Stripe session status
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent"],
    });

    if (session.payment_status === "paid") {
      // Payment confirmed but ZIP not yet generated (webhook may still be processing)
      // Return pending to trigger retry on client
      return NextResponse.json({ ready: false, status: "pending" });
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
