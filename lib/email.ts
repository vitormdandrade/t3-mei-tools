import { Resend } from "resend";

/**
 * Get Resend client lazily — only created when actually sending emails.
 * This avoids build errors when RESEND_API_KEY is not yet configured.
 */
function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

interface SendKitEmailParams {
  to: string;
  name: string;
  downloadUrl: string;
}

/**
 * Send Kit MEI delivery email via Resend
 */
export async function sendKitDeliveryEmail({
  to,
  name,
  downloadUrl,
}: SendKitEmailParams): Promise<void> {
  const resend = getResend();

  const firstName = name.split(" ")[0] || "Empreendedor";

  const { data, error } = await resend.emails.send({
    from: "Oraculo do MEI <kit@oraculodomei.com.br>",
    to: [to],
    subject: "🎉 Seu Kit MEI está pronto!",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #1a1a2e; line-height: 1.6; }
          .container { max-width: 520px; margin: 0 auto; padding: 24px; }
          .header { text-align: center; padding: 32px 0; }
          .header h1 { color: #2563eb; font-size: 24px; margin: 0; }
          .content { background: #f8fafc; border-radius: 12px; padding: 24px; margin: 16px 0; }
          .button { display: inline-block; background: #2563eb; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; margin: 16px 0; }
          .docs { margin: 16px 0; padding-left: 20px; }
          .docs li { margin: 8px 0; }
          .footer { text-align: center; color: #64748b; font-size: 13px; margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Kit MEI Pronto!</h1>
          </div>
          <div class="content">
            <p>Olá ${firstName},</p>
            <p>Seu <strong>Kit MEI — Pacote de Documentos</strong> está pronto para download!</p>

            <p><strong>📦 O que está incluído:</strong></p>
            <ul class="docs">
              <li>Contrato de Prestação de Serviços</li>
              <li>Modelo de Nota Fiscal (RPA)</li>
              <li>Recibo de Pagamento</li>
              <li>Termo de Responsabilidade</li>
            </ul>

            <p>Os 4 documentos vêm em PDF (ZIP único), prontos para preencher com seus dados e usar imediatamente.</p>

            <div style="text-align: center;">
              <a href="${downloadUrl}" class="button">📥 Baixar Kit MEI</a>
            </div>

            <p style="font-size: 13px; color: #64748b;">
              ⚠️ Este link expira em <strong>48 horas</strong>. Depois disso, entre em contato para reenvio.
            </p>
          </div>

          <div class="footer">
            <p>Oraculo do MEI — Ferramentas e documentos para microempreendedores</p>
            <p>oraculodomei.com.br</p>
          </div>
        </div>
      </body>
      </html>
    `,
  });

  if (error) {
    console.error("Resend email failed:", error);
    throw error;
  }

  console.log(`Kit MEI email sent to ${to} (Resend ID: ${data?.id})`);
}

interface SendTemplateEmailParams {
  to: string;
  name: string;
  downloadUrl: string;
  templateName: string;
}

/**
 * Send individual template delivery email via Resend
 */
export async function sendTemplateDeliveryEmail({
  to,
  name,
  downloadUrl,
  templateName,
}: SendTemplateEmailParams): Promise<void> {
  const resend = getResend();

  const firstName = name.split(" ")[0] || "Empreendedor";

  const { data, error } = await resend.emails.send({
    from: "Oraculo do MEI <kit@oraculodomei.com.br>",
    to: [to],
    subject: `📋 Seu ${templateName} está pronto!`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #1a1a2e; line-height: 1.6; }
          .container { max-width: 520px; margin: 0 auto; padding: 24px; }
          .header { text-align: center; padding: 32px 0; }
          .header h1 { color: #2563eb; font-size: 24px; margin: 0; }
          .content { background: #f8fafc; border-radius: 12px; padding: 24px; margin: 16px 0; }
          .button { display: inline-block; background: #2563eb; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; margin: 16px 0; }
          .footer { text-align: center; color: #64748b; font-size: 13px; margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📋 Template Pronto!</h1>
          </div>
          <div class="content">
            <p>Olá ${firstName},</p>
            <p>Seu template <strong>${templateName}</strong> está pronto para download!</p>

            <p>O documento vem em PDF, pronto para preencher com seus dados e usar imediatamente.</p>

            <div style="text-align: center;">
              <a href="${downloadUrl}" class="button">📥 Baixar ${templateName}</a>
            </div>

            <p style="font-size: 13px; color: #64748b;">
              ⚠️ Este link expira em <strong>48 horas</strong>. Depois disso, entre em contato para reenvio.
            </p>

            <p style="font-size: 13px; color: #64748b; margin-top: 16px;">
              💡 Precisa de mais documentos? Confira nossos outros templates em <a href="https://oraculodomei.com.br/kit-mei" style="color: #2563eb;">oraculodomei.com.br/kit-mei</a>
            </p>
          </div>

          <div class="footer">
            <p>Oraculo do MEI — Ferramentas e documentos para microempreendedores</p>
            <p>oraculodomei.com.br</p>
          </div>
        </div>
      </body>
      </html>
    `,
  });

  if (error) {
    console.error("Resend email failed:", error);
    throw error;
  }

  console.log(`Template email sent to ${to} (Resend ID: ${data?.id})`);
}
