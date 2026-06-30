'use client';

import { useState } from 'react';

const navLinks = [
  { href: '/calculadora/das', label: 'DAS' },
  { href: '/calculadora/faturamento', label: 'Faturamento' },
  { href: '/calculadora/preco-por-hora', label: 'Preço/Hora' },
  { href: '/calculadora/margem-de-lucro', label: 'Margem' },
  { href: '/guias', label: 'Guias' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button — visible on mobile only */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
        style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          color: 'var(--color-foreground)',
          fontSize: '1.25rem',
          cursor: 'pointer',
        }}
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
      >
        {open ? '✕' : '☰'}
      </button>

      {/* Desktop nav — always visible on md+ */}
      <ul className="hidden md:flex gap-1 items-center text-sm font-medium" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="btn-ghost no-underline text-sm py-1.5 px-2.5">{label}</a>
          </li>
        ))}
        <li>
          <a href="/kit-mei" className="btn-primary no-underline text-sm py-2 px-4 inline-flex items-center gap-1">
            📋 Kit MEI
          </a>
        </li>
      </ul>

      {/* Mobile overlay menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50" style={{ top: '60px' }}>
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(0,0,0,0.5)' }}
            onClick={() => setOpen(false)}
          />
          {/* Menu panel */}
          <nav
            className="absolute top-0 left-0 right-0 py-4 px-4"
            style={{
              background: 'var(--color-background)',
              borderBottom: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block py-3 px-4 rounded-lg text-base font-medium no-underline"
                    style={{ color: 'var(--color-foreground)' }}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/kit-mei"
                  className="btn-primary no-underline text-sm py-3 px-4 inline-flex items-center justify-center gap-1 w-full"
                  onClick={() => setOpen(false)}
                >
                  📋 Kit MEI
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
