import type { Metadata } from 'next';
import KitMEIPage from './Client';

export const metadata: Metadata = {
  title: 'Kit MEI — 4 Modelos Profissionais em PDF por R$ 29,90',
  description:
    'Kit MEI completo: contrato de prestação de serviços, recibo, proposta comercial e controle financeiro. 4 modelos editáveis em PDF prontos para usar. Compra única, acesso imediato.',
  keywords:
    'kit MEI, modelo contrato MEI, recibo MEI PDF, proposta comercial MEI, controle financeiro MEI, documentos MEI',
  alternates: { canonical: '/kit-mei' },
  openGraph: {
    title: 'Kit MEI — 4 Modelos Profissionais em PDF',
    description:
      'Contrato, recibo, proposta comercial e controle financeiro. 4 modelos editáveis prontos para o seu MEI.',
    type: 'website',
    url: '/kit-mei',
  },
};

export default function Page() {
  return <KitMEIPage />;
}
