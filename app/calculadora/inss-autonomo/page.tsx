import type { Metadata } from 'next';
import INSSAutonomoCalculator from './Client';

export const metadata: Metadata = {
  title: 'Calculadora INSS Autônomo e Freelancer 2026 — Quanto Pagar',
  description:
    'Calcule quanto pagar de INSS como autônomo ou freelancer em 2026. Compare as alíquotas de 11% e 20% e veja o valor da contribuição sobre seu rendimento. Gratuito.',
  keywords:
    'calculadora INSS autônomo, INSS freelancer 2026, contribuição INSS 11% 20%, carnê-leão, aposentadoria autônomo',
  alternates: { canonical: '/calculadora/inss-autonomo' },
};

export default function Page() {
  return <INSSAutonomoCalculator />;
}
