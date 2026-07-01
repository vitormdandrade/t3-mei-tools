import { NextResponse } from "next/server";
import { ensureBucket } from "../../../lib/supabase-storage";

/**
 * One-time setup endpoint to create the Supabase Storage bucket.
 * GET /api/setup — creates the kit-mei-downloads bucket if it doesn't exist.
 * Safe to call multiple times (idempotent).
 */
export async function GET() {
  try {
    await ensureBucket();
    return NextResponse.json({
      success: true,
      message: "Bucket 'kit-mei-downloads' is ready",
    });
  } catch (error: any) {
    console.error("Setup error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to create bucket",
        hint: "You may need to create the bucket manually in Supabase Dashboard → Storage",
      },
      { status: 500 }
    );
  }
}
