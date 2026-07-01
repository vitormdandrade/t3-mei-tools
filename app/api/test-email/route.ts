import { NextRequest, NextResponse } from "next/server";
import { sendKitDeliveryEmail } from "../../../lib/email";

/**
 * Test endpoint: send a Kit MEI test email.
 * POST /api/test-email
 * Body: { to: "email@example.com" }
 */
export async function POST(req: NextRequest) {
  try {
    const { to } = await req.json();

    if (!to) {
      return NextResponse.json({ error: "Missing 'to' field" }, { status: 400 });
    }

    await sendKitDeliveryEmail({
      to,
      name: "Teste Empreendedor",
      downloadUrl: "https://oraculodomei.com.br/kit-mei/sucesso?test=1",
    });

    return NextResponse.json({ success: true, message: `Test email sent to ${to}` });
  } catch (error: any) {
    console.error("Test email error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
