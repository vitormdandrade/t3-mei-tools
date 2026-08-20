import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: legacy `i18n` config is unsupported in App Router and broke every
  // production build since 2026-07-21 (b5846d9) — prerender error on
  // /pt-BR/404 (Cannot find module for page: /_document). Locales are
  // directory-based (/en, /es) in App Router; do NOT re-add the i18n block.
};

export default nextConfig;
