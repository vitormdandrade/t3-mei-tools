import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['default', 'pt-BR', 'en', 'es'],
    defaultLocale: 'pt-BR',
    localeDetection: false,
  },
};

export default nextConfig;
