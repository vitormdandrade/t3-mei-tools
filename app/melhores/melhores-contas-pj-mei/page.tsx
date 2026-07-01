import type { Metadata } from 'next';
import MelhoresContasPJ from './Client';

export const metadata: Metadata = {
  title: 'Melhores Contas PJ para MEI 2026 — Comparativo Gratuito',
  description:
    'Comparamos as melhores contas PJ gratuitas para MEI em 2026: tarifas, Pix, maquininha, rendimento e atendimento. Encontre a conta digital ideal para o seu negócio.',
  keywords:
    'melhor conta PJ MEI, conta digital MEI grátis, conta PJ sem tarifa, banco para MEI 2026, abrir conta PJ MEI',
  alternates: { canonical: '/melhores/melhores-contas-pj-mei' },
};

export default function Page() {
  return <MelhoresContasPJ />;
}
