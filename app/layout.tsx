import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MEI Tools - Calculadoras e Guias para Microempreendedores",
  description: "Calculadoras de DAS, faturamento, INSS e guias completos para MEI e freelancers. Simule seus impostos e encontre as melhores contas PJ para seu negócio.",
  keywords: "MEI, DAS, calculadora MEI, nota fiscal, freelancer, imposto MEI, conta PJ",
  openGraph: {
    title: "MEI Tools - Calculadoras para Microempreendedores",
    description: "Ferramentas gratuitas para calcular DAS, INSS, faturamento e impostos de MEI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-full flex flex-col antialiased`}>
        <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <a href="/" className="text-2xl font-bold">MEI Tools</a>
              <ul className="flex gap-6">
                <li><a href="/calculadora/das" className="hover:opacity-80">Calculadora DAS</a></li>
                <li><a href="/calculadora/faturamento" className="hover:opacity-80">Faturamento</a></li>
                <li><a href="/calculadora/mei-vs-me" className="hover:opacity-80">MEI vs ME</a></li>
                <li><a href="/guias" className="hover:opacity-80">Guias</a></li>
              </ul>
            </div>
          </nav>
        </header>

        <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>

        <footer className="bg-gray-900 text-gray-300 mt-16">
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold mb-4">Calculadoras</h3>
                <ul className="space-y-2">
                  <li><a href="/calculadora/das" className="hover:text-white">DAS</a></li>
                  <li><a href="/calculadora/faturamento" className="hover:text-white">Faturamento</a></li>
                  <li><a href="/calculadora/mei-vs-me" className="hover:text-white">MEI vs ME</a></li>
                  <li><a href="/calculadora/inss-autonomo" className="hover:text-white">INSS Autônomo</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Guias</h3>
                <ul className="space-y-2">
                  <li><a href="/guias/como-abrir-mei" className="hover:text-white">Como Abrir MEI</a></li>
                  <li><a href="/guias/das-mei-2026" className="hover:text-white">DAS 2026</a></li>
                  <li><a href="/guias/nota-fiscal-mei" className="hover:text-white">Nota Fiscal</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Melhores Contas</h3>
                <ul className="space-y-2">
                  <li><a href="/melhores/melhores-contas-pj-mei" className="hover:text-white">Contas PJ</a></li>
                  <li><a href="/melhores/melhores-maquininhas-mei" className="hover:text-white">Maquininhas</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-center text-gray-400 text-sm">
                © 2026 MEI Tools. Informações educacionais. Consulte um profissional para recomendações específicas.
              </p>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
