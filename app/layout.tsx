import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEI Tools - Calculadoras e Guias para Microempreendedores",
  description: "Calculadoras de DAS, faturamento, INSS e guias completos para MEI e freelancers. Simule seus impostos e encontre as melhores contas PJ para seu negócio.",
  keywords: "MEI, DAS, calculadora MEI, nota fiscal, freelancer, imposto MEI, conta PJ",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://oraculodomei.com.br'),
  alternates: {
    languages: {
      'pt-BR': 'https://oraculodomei.com.br',
      'en': 'https://oraculodomei.com.br/en',
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "MEI Tools - Calculadoras para Microempreendedores",
    description: "Ferramentas gratuitas para calcular DAS, INSS, faturamento e impostos de MEI",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://oraculodomei.com.br',
  },
  verification: {
    google: 'kfvkSIgbGEoQ2KFb_TYGCd2hvd8o71OKrr9wryOkfpQ',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Site-specific accent: Emerald — financial trust */}
        <style>{`
          :root {
            --site-accent: #0a6e4e;
            --site-accent-hover: #065f3a;
            --site-accent-soft: #e6f4ec;
            --site-accent-dark: #22c55e;
            --site-accent-hover-dark: #4ade80;
            --site-accent-soft-dark: rgba(34, 197, 94, 0.12);
          }
        `}</style>
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b" style={{
          background: 'var(--color-background)',
          borderColor: 'var(--color-border)',
          boxShadow: 'var(--shadow-ring)',
        }}>
          <nav className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <a href="/" className="flex items-center gap-2 text-lg font-semibold no-underline" style={{ color: 'var(--color-foreground)', letterSpacing: '-0.02em' }}>
                <img src="/logo-white.svg" alt="MEI Tools" className="h-7 w-auto" />
              </a>
              <ul className="flex gap-5 items-center text-sm font-medium">
                <li><a href="/calculadora/das" className="no-underline hover:opacity-70 transition-opacity" style={{ color: 'var(--color-muted)' }}>DAS</a></li>
                <li><a href="/calculadora/faturamento" className="no-underline hover:opacity-70 transition-opacity" style={{ color: 'var(--color-muted)' }}>Faturamento</a></li>
                <li><a href="/calculadora/preco-por-hora" className="no-underline hover:opacity-70 transition-opacity" style={{ color: 'var(--color-muted)' }}>Preço/Hora</a></li>
                <li><a href="/calculadora/margem-de-lucro" className="no-underline hover:opacity-70 transition-opacity" style={{ color: 'var(--color-muted)' }}>Margem</a></li>
                <li><a href="/calculadora/mei-vs-me" className="no-underline hover:opacity-70 transition-opacity" style={{ color: 'var(--color-muted)' }}>MEI vs ME</a></li>
                <li><a href="/calculadora/cnae" className="no-underline hover:opacity-70 transition-opacity" style={{ color: 'var(--color-muted)' }}>CNAEs</a></li>
                <li><a href="/guias" className="no-underline hover:opacity-70 transition-opacity" style={{ color: 'var(--color-muted)' }}>Guias</a></li>
                <li><a href="/kit-mei" className="pill no-underline font-semibold">Kit MEI</a></li>
              </ul>
            </div>
          </nav>
        </header>

        <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* Footer */}
        <footer style={{ background: 'var(--color-foreground)', color: 'var(--color-muted-soft)' }}>
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
              <div>
                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--color-background)' }}>Calculadoras</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/calculadora/das" className="no-underline hover:opacity-80 transition-opacity" style={{ color: 'var(--color-muted-soft)' }}>DAS</a></li>
                  <li><a href="/calculadora/faturamento" className="no-underline hover:opacity-80 transition-opacity" style={{ color: 'var(--color-muted-soft)' }}>Faturamento</a></li>
                  <li><a href="/calculadora/preco-por-hora" className="no-underline hover:opacity-80 transition-opacity" style={{ color: 'var(--color-muted-soft)' }}>Preço por Hora</a></li>
                  <li><a href="/calculadora/margem-de-lucro" className="no-underline hover:opacity-80 transition-opacity" style={{ color: 'var(--color-muted-soft)' }}>Margem de Lucro</a></li>
                  <li><a href="/calculadora/ponto-de-equilibrio" className="no-underline hover:opacity-80 transition-opacity" style={{ color: 'var(--color-muted-soft)' }}>Ponto de Equilíbrio</a></li>
                  <li><a href="/calculadora/mei-vs-me" className="no-underline hover:opacity-80 transition-opacity" style={{ color: 'var(--color-muted-soft)' }}>MEI vs ME</a></li>
                  <li><a href="/calculadora/inss-autonomo" className="no-underline hover:opacity-80 transition-opacity" style={{ color: 'var(--color-muted-soft)' }}>INSS Autônomo</a></li>
                  <li><a href="/calculadora/cnae" className="no-underline hover:opacity-80 transition-opacity" style={{ color: 'var(--color-muted-soft)' }}>CNAEs Permitidos</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--color-background)' }}>Guias</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/guias/como-abrir-mei" className="no-underline hover:opacity-80 transition-opacity" style={{ color: 'var(--color-muted-soft)' }}>Como Abrir MEI</a></li>
                  <li><a href="/guias/das-mei-2026" className="no-underline hover:opacity-80 transition-opacity" style={{ color: 'var(--color-muted-soft)' }}>DAS 2026</a></li>
                  <li><a href="/calendario-das" className="no-underline hover:opacity-80 transition-opacity" style={{ color: 'var(--color-muted-soft)' }}>Calendário DAS 2026</a></li>
                  <li><a href="/guias/nota-fiscal-mei" className="no-underline hover:opacity-80 transition-opacity" style={{ color: 'var(--color-muted-soft)' }}>Nota Fiscal</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--color-background)' }}>Melhores Contas</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/melhores/melhores-contas-pj-mei" className="no-underline hover:opacity-80 transition-opacity" style={{ color: 'var(--color-muted-soft)' }}>Contas PJ</a></li>
                  <li><a href="/melhores/melhores-maquininhas-mei" className="no-underline hover:opacity-80 transition-opacity" style={{ color: 'var(--color-muted-soft)' }}>Maquininhas</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--color-background)' }}>Recursos Parceiros</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="/kit-mei" className="font-semibold no-underline" style={{ color: 'var(--color-accent)' }}>📋 Kit MEI — Documentos</a>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--color-muted-soft)' }}>4 modelos profissionais em PDF por R$ 29,90</p>
                  </li>
                  <li>
                    <a href="https://compararsaas.com.br" rel="noopener" className="no-underline hover:opacity-80 transition-opacity" style={{ color: 'var(--color-muted-soft)' }}>Comparador SaaS Brasil</a>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--color-muted-soft)' }}>Softwares para MEI e pequena empresa</p>
                  </li>
                  <li>
                    <a href="https://calculaseguro.com.br" rel="noopener" className="no-underline hover:opacity-80 transition-opacity" style={{ color: 'var(--color-muted-soft)' }}>Calcula Seguro</a>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--color-muted-soft)' }}>Simuladores de seguro por estado</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 text-center text-xs" style={{ borderTop: '1px solid var(--color-border-strong)' }}>
              <p>© 2026 MEI Tools. Informações educacionais. Consulte um profissional para recomendações específicas.</p>
            </div>
          </div>
        </footer>
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MEI Tools',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://oraculodomei.com.br',
              description:
                'Ferramentas gratuitas para microempreendedores: calculadoras de DAS, faturamento, INSS, margem de lucro e guias completos para MEI.',
              sameAs: [
                'https://compararsaas.com.br',
                'https://calculaseguro.com.br',
              ],
            }),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
