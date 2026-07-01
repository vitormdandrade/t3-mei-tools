import { createClient } from "@supabase/supabase-js";

const BUCKET_NAME = "kit-mei-downloads";

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("Supabase env vars not configured");
  }

  return createClient(url, key);
}

/**
 * Ensure the storage bucket exists (idempotent).
 * If creation fails (e.g., bucket already exists), we handle gracefully.
 */
export async function ensureBucket(): Promise<void> {
  const supabase = getSupabaseAdmin();

  const { data: buckets, error: listError } = await supabase.storage.listBuckets();

  if (listError) {
    console.error("Failed to list buckets:", listError);
    throw listError;
  }

  const existing = buckets?.find((b) => b.name === BUCKET_NAME);
  if (existing) return;

  const { error: createError } = await supabase.storage.createBucket(BUCKET_NAME, {
    public: false,
    fileSizeLimit: 52428800, // 50MB
  });

  if (createError && !createError.message?.includes("already exists")) {
    console.error("Failed to create bucket:", createError);
    throw createError;
  }

  console.log(`Bucket '${BUCKET_NAME}' ready`);
}

/**
 * Upload a ZIP file to Supabase Storage and return a signed download URL.
 * URL expires in 48 hours.
 */
export async function uploadKitZipAndGetUrl(
  sessionId: string,
  zipBuffer: Buffer
): Promise<string> {
  const supabase = getSupabaseAdmin();
  const filePath = `${sessionId}/kit-mei-documentos.zip`;

  // Upload
  const { error: uploadError } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, zipBuffer, {
      contentType: "application/zip",
      upsert: true,
      cacheControl: "3600",
    });

  if (uploadError) {
    console.error("Failed to upload ZIP:", uploadError);
    throw uploadError;
  }

  console.log(
    `ZIP uploaded: ${filePath} (${(zipBuffer.length / 1024).toFixed(1)} KB)`
  );

  // Generate signed URL (48 hours)
  const { data, error: urlError } = await supabase.storage
    .from(BUCKET_NAME)
    .createSignedUrl(filePath, 60 * 60 * 48);

  if (urlError || !data?.signedUrl) {
    console.error("Failed to create signed URL:", urlError);
    throw urlError || new Error("Failed to create signed URL");
  }

  return data.signedUrl;
}
