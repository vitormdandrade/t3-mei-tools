import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página não encontrada — Oráculo do MEI',
  description: 'A página que você procura não existe ou foi movida.',
};

const POPULAR = [
  ['/calculadora/das', 'Calculadora DAS'],
  ['/calculadora/faturamento', 'Limite de Faturamento'],
  ['/guias', 'Guias para MEI'],
  ['/melhores/melhores-contas-pj-mei', 'Melhores Contas PJ'],
];

export default function NotFound() {
  return (
    <div className="text-center py-16 sm:py-24">
      <p className="text-6xl mb-4">🔮</p>
      <p
        className="text-sm font-bold uppercase tracking-widest mb-2"
        style={{ color: 'var(--color-accent)' }}
      >
        Erro 404
      </p>
      <h1
        className="text-3xl sm:text-4xl font-bold mb-4"
        style={{ color: 'var(--color-foreground)', fontFamily: "'Merriweather', Georgia, serif" }}
      >
        Página não encontrada
      </h1>
      <p
        className="text-base sm:text-lg mb-8 max-w-md mx-auto"
        style={{ color: 'var(--color-muted)' }}
      >
        O oráculo não encontrou o que você procura. A página pode ter sido movida ou nunca existiu.
      </p>

      <a
        href="/"
        className="btn-primary no-underline inline-flex items-center gap-2"
      >
        ← Voltar para a página inicial
      </a>

      <div className="mt-12">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: 'var(--color-muted-soft)' }}
        >
          Páginas populares
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {POPULAR.map(([href, label]) => (
            <a key={href} href={href} className="pill no-underline">
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
