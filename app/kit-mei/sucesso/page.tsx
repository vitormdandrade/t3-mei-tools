import type { Metadata } from 'next';
import SucessoPage from './Client';

export const metadata: Metadata = {
  title: 'Compra Confirmada — Kit MEI',
  description: 'Pagamento confirmado. Acesse os arquivos do seu Kit MEI.',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <SucessoPage />;
}
