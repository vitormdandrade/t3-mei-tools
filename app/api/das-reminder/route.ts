import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

/**
 * GET /api/das-reminder
 *
 * Cron-compatible endpoint that checks all active/trialing DAS subscribers
 * and sends WhatsApp reminders 3 days before their DAS due date.
 *
 * For now, logs to console + stores in das_reminders table.
 * Actual WhatsApp sending can be wired later via ZAPI/WhatsApp Business API.
 *
 * Query params:
 *   ?token=<ADMIN_PASSWORD>  — required for authorization
 *   ?dry-run=true            — simulate without storing/logging reminders
 */
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const token = url.searchParams.get("token");
    const dryRun = url.searchParams.get("dry-run") === "true";

    // Auth check (same pattern as leads API)
    const adminPassword = process.env.ADMIN_PASSWORD || "meitools2026";
    if (token !== adminPassword) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = getSupabaseAdmin();

    // Get today's date components in BRT (UTC-3)
    const now = new Date();
    const brtOffset = -3 * 60 * 60 * 1000;
    const brtNow = new Date(now.getTime() + brtOffset);
    const todayDay = brtNow.getUTCDate();
    const todayMonth = brtNow.getUTCMonth(); // 0-indexed
    const todayYear = brtNow.getUTCFullYear();

    // Calculate the target date (3 days from now)
    const targetDate = new Date(brtNow);
    targetDate.setUTCDate(todayDay + 3);
    const targetDay = targetDate.getUTCDate();
    const targetMonth = targetDate.getUTCMonth();
    const targetYear = targetDate.getUTCFullYear();

    // Build the DAS due date: 20th of next month (from ref month)
    // The DAS for month M is due on the 20th of month M+1
    // We check: if subscriber's das_due_day == targetDay, then today is 3 days before
    // Wait — actually the spec says "3 days before their DAS due date"
    // So we find subscribers where das_due_day == (today + 3 days).day

    console.log(
      `[DAS Reminder] Running for target due day=${targetDay} (3 days from now: ${targetDate.toISOString().split("T")[0]})`
    );

    // Fetch all active subscribers whose DAS due day matches
    const { data: subscribers, error: fetchError } = await supabase
      .from("das_subscribers")
      .select("*")
      .in("subscription_status", ["trialing", "active"])
      .eq("das_due_day", targetDay);

    if (fetchError) {
      console.error("[DAS Reminder] Failed to fetch subscribers:", fetchError);
      return NextResponse.json(
        { error: "Failed to fetch subscribers" },
        { status: 500 }
      );
    }

    if (!subscribers || subscribers.length === 0) {
      console.log(
        `[DAS Reminder] No subscribers with DAS due day ${targetDay}. Nothing to send.`
      );
      return NextResponse.json({
        success: true,
        reminders_sent: 0,
        target_due_day: targetDay,
        dry_run: dryRun,
      });
    }

    console.log(
      `[DAS Reminder] Found ${subscribers.length} subscriber(s) with due day ${targetDay}`
    );

    // Calculate the DAS due date (the actual date 3 days from now)
    const dasDueDateStr = `${targetYear}-${String(targetMonth + 1).padStart(2, "0")}-${String(targetDay).padStart(2, "0")}`;
    const reminderDateStr = `${todayYear}-${String(todayMonth + 1).padStart(2, "0")}-${String(todayDay).padStart(2, "0")}`;

    let sentCount = 0;
    const reminders: any[] = [];

    for (const sub of subscribers) {
      // Format phone for display: +55 XX XXXXX-XXXX
      const phoneDisplay =
        sub.phone.length === 13
          ? `+${sub.phone.slice(0, 2)} ${sub.phone.slice(2, 4)} ${sub.phone.slice(4, 9)}-${sub.phone.slice(9)}`
          : sub.phone;

      console.log(
        `[DAS Reminder] Would send WhatsApp to ${phoneDisplay} — DAS vence dia ${sub.das_due_day} (em ${dasDueDateStr})`
      );

      // Store reminder log
      const reminder: {
        subscriber_id: number;
        phone: string;
        das_due_day: number;
        reminder_date: string;
        das_due_date: string;
        success: boolean;
        error_message: string | null;
      } = {
        subscriber_id: sub.id,
        phone: sub.phone,
        das_due_day: sub.das_due_day,
        reminder_date: reminderDateStr,
        das_due_date: dasDueDateStr,
        success: true,
        error_message: null,
      };

      if (!dryRun) {
        const { error: insertError } = await supabase
          .from("das_reminders")
          .insert(reminder);

        if (insertError) {
          console.error(
            `[DAS Reminder] Failed to log reminder for subscriber ${sub.id}:`,
            insertError
          );
          reminder.success = false;
          reminder.error_message = insertError.message;
        }
      }

      reminders.push({
        subscriber_id: sub.id,
        phone: phoneDisplay,
        das_due_day: sub.das_due_day,
        das_due_date: dasDueDateStr,
        status: sub.subscription_status,
      });
      sentCount++;
    }

    console.log(
      `[DAS Reminder] Done. ${sentCount} reminder(s) processed (dry_run=${dryRun}).`
    );

    return NextResponse.json({
      success: true,
      reminders_sent: sentCount,
      target_due_day: targetDay,
      das_due_date: dasDueDateStr,
      dry_run: dryRun,
      reminders,
    });
  } catch (error: any) {
    console.error("[DAS Reminder] Error:", error);
    return NextResponse.json(
      { error: `Erro ao processar lembretes: ${error?.message || String(error)}` },
      { status: 500 }
    );
  }
}
