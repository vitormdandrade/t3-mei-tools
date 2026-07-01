import type { Metadata } from 'next';
import DASCalculator from './Client';

export const metadata: Metadata = {
  title: 'Calculadora DAS MEI 2026 — Simule o Valor do Seu DAS',
  description:
    'Calcule o valor do DAS MEI 2026 por categoria (comércio, serviços ou indústria). Veja o quanto pagar de imposto mensal e as datas de vencimento. Gratuito, sem cadastro.',
  keywords:
    'calculadora DAS MEI, valor DAS 2026, DAS MEI comércio serviços indústria, imposto MEI mensal, vencimento DAS',
  alternates: { canonical: '/calculadora/das' },
};

export default function Page() {
  return <DASCalculator />;
}
