import type { Metadata } from 'next';
import MelhoresMaquininhas from './Client';

export const metadata: Metadata = {
  title: 'Melhores Maquininhas para MEI 2026 — Taxas Comparadas',
  description:
    'Compare as melhores maquininhas de cartão para MEI em 2026: taxas de débito e crédito, prazo de recebimento, aluguel e sem aluguel. Escolha a que cobra menos por venda.',
  keywords:
    'melhor maquininha MEI, taxa maquininha cartão, maquininha sem aluguel, maquininha MEI 2026, comparar maquininhas',
  alternates: { canonical: '/melhores/melhores-maquininhas-mei' },
};

export default function Page() {
  return <MelhoresMaquininhas />;
}
