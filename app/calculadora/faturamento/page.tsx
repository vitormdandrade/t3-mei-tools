import type { Metadata } from 'next';
import RevenueCalculator from './Client';

export const metadata: Metadata = {
  title: 'Calculadora de Faturamento MEI 2026 — Controle o Limite Anual',
  description:
    'Acompanhe seu faturamento MEI e saiba quanto falta para o limite anual de R$ 81.000. Descubra se está perto de desenquadrar e planeje suas vendas. Gratuito, sem cadastro.',
  keywords:
    'calculadora faturamento MEI, limite faturamento MEI 2026, R$ 81 mil MEI, desenquadramento MEI, controle faturamento',
  alternates: { canonical: '/calculadora/faturamento' },
};

export default function Page() {
  return <RevenueCalculator />;
}
