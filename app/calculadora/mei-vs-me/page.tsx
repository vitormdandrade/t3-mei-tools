import type { Metadata } from 'next';
import MeiVsMeCalculator from './Client';

export const metadata: Metadata = {
  title: 'MEI vs ME vs Simples Nacional — Compare Impostos 2026',
  description:
    'Compare a carga tributária entre MEI, ME e Simples Nacional em 2026. Descubra qual regime paga menos imposto conforme o seu faturamento. Simulação gratuita, sem cadastro.',
  keywords:
    'MEI vs ME, MEI ou Simples Nacional, comparar regime tributário, migrar de MEI para ME, imposto ME 2026',
  alternates: { canonical: '/calculadora/mei-vs-me' },
};

export default function Page() {
  return <MeiVsMeCalculator />;
}
