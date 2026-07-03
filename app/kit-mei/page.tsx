import type { Metadata } from 'next';
import KitMEIPage from './Client';

export const metadata: Metadata = {
  title: 'Kit MEI — Modelos Profissionais em PDF | Templates Individuais a partir de R$19,90',
  description:
    'Kit MEI completo com modelos de documentos profissionais. Templates individuais: contrato, recibo RPA, DASN-SIMEI, nota fiscal avulsa e termo de rescisão. Download imediato.',
  keywords:
    'kit MEI, modelo contrato MEI, recibo MEI PDF, DASN-SIMEI preenchível, nota fiscal MEI, termo rescisão MEI, documentos MEI, templates MEI',
  alternates: { canonical: '/kit-mei' },
  openGraph: {
    title: 'Kit MEI — Modelos de Documentos Profissionais em PDF',
    description:
      'Templates individuais para MEI: contrato, recibo RPA, DASN, nota fiscal e termo de rescisão. A partir de R$19,90.',
    type: 'website',
    url: '/kit-mei',
  },
};

export default function Page() {
  return <KitMEIPage />;
}
