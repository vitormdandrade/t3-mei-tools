import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Expose server-side env vars to API routes
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },
};

export default nextConfig;
