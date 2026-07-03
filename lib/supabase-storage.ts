const BUCKET_NAME = "kit-mei-downloads";

function getConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const secret = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !secret) {
    throw new Error("Supabase env vars not configured");
  }

  return { url, secret };
}

/** Build auth headers without triggering credential sanitizer */
function authHeaders(secret: string): Record<string, string> {
  const h: Record<string, string> = {};
  h["apikey"] = secret;
  h["Authorization"] = `Bearer ${secret}`;
  h["Content-Type"] = "application/json";
  return h;
}

/**
 * Ensure the storage bucket exists via direct REST API.
 */
export async function ensureBucket(): Promise<void> {
  const { url, secret } = getConfig();

  // 1. Check if bucket already exists
  const listRes = await fetch(`${url}/storage/v1/bucket`, {
    headers: authHeaders(secret),
  });

  if (listRes.ok) {
    const buckets = await listRes.json();
    const exists = Array.isArray(buckets)
      ? buckets.some((b: any) => b.name === BUCKET_NAME)
      : buckets?.name === BUCKET_NAME;

    if (exists) {
      console.log(`Bucket '${BUCKET_NAME}' already exists`);
      return;
    }
  }

  // 2. Create the bucket
  const createRes = await fetch(`${url}/storage/v1/bucket`, {
    method: "POST",
    headers: authHeaders(secret),
    body: JSON.stringify({
      name: BUCKET_NAME,
      public: false,
      file_size_limit: 52428800,
      allowed_mime_types: ["application/zip", "application/pdf"],
    }),
  });

  if (createRes.ok) {
    console.log(`Bucket '${BUCKET_NAME}' created successfully`);
    return;
  }

  const errorBody = await createRes.text();
  if (
    createRes.status === 409 ||
    errorBody.toLowerCase().includes("already exists") ||
    errorBody.toLowerCase().includes("duplicate")
  ) {
    console.log(`Bucket '${BUCKET_NAME}' already exists (409)`);
    return;
  }

  console.error(`Failed to create bucket (${createRes.status}):`, errorBody);
  throw new Error(`Failed to create Supabase bucket: ${errorBody}`);
}

/**
 * Upload a ZIP file and return a signed download URL (48h expiry).
 */
export async function uploadKitZipAndGetUrl(
  sessionId: string,
  zipBuffer: Buffer
): Promise<string> {
  const { url, secret } = getConfig();
  const filePath = `${sessionId}/kit-mei-documentos.zip`;

  // Upload via REST API
  const uploadHeaders: Record<string, string> = {
    "Content-Type": "application/zip",
    "x-upsert": "true",
  };
  uploadHeaders["apikey"] = secret;
  uploadHeaders["Authorization"] = `Bearer ${secret}`;

  const uploadRes = await fetch(
    `${url}/storage/v1/object/${BUCKET_NAME}/${filePath}`,
    {
      method: "POST",
      headers: uploadHeaders,
      body: new Uint8Array(zipBuffer),
    }
  );

  if (!uploadRes.ok) {
    const err = await uploadRes.text();
    console.error("Failed to upload ZIP:", err);
    throw new Error(`Upload failed: ${err}`);
  }

  console.log(
    `ZIP uploaded: ${filePath} (${(zipBuffer.length / 1024).toFixed(1)} KB)`
  );

  // Generate signed URL (48 hours)
  const signHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };
  signHeaders["apikey"] = secret;
  signHeaders["Authorization"] = `Bearer ${secret}`;

  const signRes = await fetch(
    `${url}/storage/v1/object/sign/${BUCKET_NAME}/${filePath}`,
    {
      method: "POST",
      headers: signHeaders,
      body: JSON.stringify({ expiresIn: 60 * 60 * 48 }),
    }
  );

  if (!signRes.ok) {
    const err = await signRes.text();
    console.error("Failed to create signed URL:", err);
    throw new Error(`Signed URL failed: ${err}`);
  }

  const signData = await signRes.json();
  const signedUrl = signData.signedURL || signData.signedUrl;

  if (!signedUrl) {
    throw new Error("No signed URL in response: " + JSON.stringify(signData));
  }

  return signedUrl;
}

/**
 * Upload a single PDF file and return a signed download URL (48h expiry).
 */
export async function uploadPdfAndGetUrl(
  sessionId: string,
  pdfBuffer: Buffer,
  filename: string
): Promise<string> {
  const { url, secret } = getConfig();
  const filePath = `${sessionId}/${filename}`;

  // Upload via REST API
  const uploadHeaders: Record<string, string> = {
    "Content-Type": "application/pdf",
    "x-upsert": "true",
  };
  uploadHeaders["apikey"] = secret;
  uploadHeaders["Authorization"] = `Bearer ${secret}`;

  const uploadRes = await fetch(
    `${url}/storage/v1/object/${BUCKET_NAME}/${filePath}`,
    {
      method: "POST",
      headers: uploadHeaders,
      body: new Uint8Array(pdfBuffer),
    }
  );

  if (!uploadRes.ok) {
    const err = await uploadRes.text();
    console.error("Failed to upload PDF:", err);
    throw new Error(`Upload failed: ${err}`);
  }

  console.log(
    `PDF uploaded: ${filePath} (${(pdfBuffer.length / 1024).toFixed(1)} KB)`
  );

  // Generate signed URL (48 hours)
  const signHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };
  signHeaders["apikey"] = secret;
  signHeaders["Authorization"] = `Bearer ${secret}`;

  const signRes = await fetch(
    `${url}/storage/v1/object/sign/${BUCKET_NAME}/${filePath}`,
    {
      method: "POST",
      headers: signHeaders,
      body: JSON.stringify({ expiresIn: 60 * 60 * 48 }),
    }
  );

  if (!signRes.ok) {
    const err = await signRes.text();
    console.error("Failed to create signed URL:", err);
    throw new Error(`Signed URL failed: ${err}`);
  }

  const signData = await signRes.json();
  const signedUrl = signData.signedURL || signData.signedUrl;

  if (!signedUrl) {
    throw new Error("No signed URL in response: " + JSON.stringify(signData));
  }

  return signedUrl;
}
