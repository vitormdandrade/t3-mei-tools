import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oraculo do MEI — Calculadoras e Guias para Microempreendedores",
  description: "Calculadoras gratuitas de DAS, faturamento, INSS e guias completos para MEI. Simule seus impostos e encontre as melhores contas PJ com o Oráculo do MEI.",
  keywords: "MEI, DAS, calculadora MEI, nota fiscal, freelancer, imposto MEI, conta PJ, oráculo do MEI",
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
    title: "Oraculo do MEI — Calculadoras para Microempreendedores",
    description: "Ferramentas gratuitas para calcular DAS, INSS, faturamento e impostos de MEI. Seu oráculo financeiro.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* ── Header ── */}
        <header className="sticky top-0 z-50" style={{
          background: 'var(--header-bg, rgba(254, 252, 245, 0.92))',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <nav className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center flex-wrap gap-y-3">
              <a href="/" className="flex items-center gap-2.5 no-underline shrink-0">
                <span className="text-2xl">🔮</span>
                <span className="text-xl font-bold tracking-tight" style={{ color: 'var(--color-foreground)', fontFamily: "'Inter', system-ui, sans-serif" }}>
                  Oráculo do MEI
                </span>
              </a>
              <ul className="flex flex-wrap gap-1 items-center text-sm font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                <li><a href="/calculadora/das" className="btn-ghost no-underline text-sm py-1.5 px-2.5">DAS</a></li>
                <li><a href="/calculadora/faturamento" className="btn-ghost no-underline text-sm py-1.5 px-2.5">Faturamento</a></li>
                <li><a href="/calculadora/preco-por-hora" className="btn-ghost no-underline text-sm py-1.5 px-2.5">Preço/Hora</a></li>
                <li><a href="/calculadora/margem-de-lucro" className="btn-ghost no-underline text-sm py-1.5 px-2.5">Margem</a></li>
                <li><a href="/guias" className="btn-ghost no-underline text-sm py-1.5 px-2.5">Guias</a></li>
                <li>
                  <a href="/kit-mei" className="btn-primary no-underline text-sm py-2 px-4 inline-flex items-center gap-1">
                    📋 Kit MEI
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* ── Main ── */}
        <main className="flex-grow" style={{ scrollPaddingTop: '80px' }}>
          {children}
        </main>

        {/* ── Footer ── */}
        <footer style={{ background: 'var(--brand-navy)', color: '#c8d2dc' }}>
          {/* Wave divider */}
          <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--brand-sage), var(--brand-terra), var(--brand-gold), var(--brand-sage))' }}></div>
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🔮</span>
                  <span className="text-base font-bold tracking-tight" style={{ color: '#ffffff', fontFamily: "'Inter', system-ui, sans-serif" }}>
                    Oráculo do MEI
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#8899aa' }}>
                  Seu guia financeiro completo. Calculadoras gratuitas, guias e ferramentas para microempreendedores.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--brand-sage-light)' }}>Calculadoras</h4>
                <ul className="space-y-2.5 text-sm">
                  {[
                    ['/calculadora/das', 'DAS'],
                    ['/calculadora/faturamento', 'Faturamento'],
                    ['/calculadora/preco-por-hora', 'Preço por Hora'],
                    ['/calculadora/margem-de-lucro', 'Margem de Lucro'],
                    ['/calculadora/ponto-de-equilibrio', 'Ponto de Equilíbrio'],
                    ['/calculadora/mei-vs-me', 'MEI vs ME'],
                    ['/calculadora/inss-autonomo', 'INSS Autônomo'],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="no-underline hover:opacity-80 transition-opacity" style={{ color: '#c8d2dc' }}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--brand-terra)' }}>Guias</h4>
                <ul className="space-y-2.5 text-sm">
                  {[
                    ['/guias/como-abrir-mei', 'Como Abrir MEI'],
                    ['/guias/das-mei-2026', 'DAS 2026'],
                    ['/calendario-das', 'Calendário DAS'],
                    ['/guias/nota-fiscal-mei', 'Nota Fiscal MEI'],
                  ].map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="no-underline hover:opacity-80 transition-opacity" style={{ color: '#c8d2dc' }}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--brand-gold)' }}>Parceiros</h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a href="/kit-mei" className="no-underline font-semibold" style={{ color: 'var(--brand-gold)' }}>
                      📋 Kit MEI — R$29,90
                    </a>
                    <p className="text-xs mt-0.5" style={{ color: '#667788' }}>4 modelos profissionais em PDF</p>
                  </li>
                  <li><a href="https://compararsaas.com.br" rel="noopener" className="no-underline hover:opacity-80 transition-opacity" style={{ color: '#c8d2dc' }}>Comparador SaaS</a></li>
                  <li><a href="https://calculaseguro.com.br" rel="noopener" className="no-underline hover:opacity-80 transition-opacity" style={{ color: '#c8d2dc' }}>Calcula Seguro</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 text-center text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: '#667788' }}>
              <p>© 2026 Oráculo do MEI. Conteúdo educacional. Consulte um profissional para recomendações específicas.</p>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
