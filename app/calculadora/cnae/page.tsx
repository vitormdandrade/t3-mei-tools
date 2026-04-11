import { Metadata } from 'next';
import CnaeTool from './CnaeTool';

export const metadata: Metadata = {
  title: 'CNAE para MEI 2026 — Consulta de Atividades Permitidas',
  description:
    'Pesquise as 88 atividades permitidas para MEI. Veja o código CNAE, se emite nota fiscal, qual imposto incide no DAS e se é uma atividade popular entre MEIs.',
  keywords:
    'CNAE MEI, atividades MEI permitidas, código CNAE MEI, CNAE 2026, DAS por atividade',
};

export default function CnaePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Consulta de CNAE para MEI
      </h1>
      <p className="text-gray-600 mb-8">
        Pesquise entre as 88 atividades permitidas para MEI. Veja se sua
        atividade permite Nota Fiscal, qual imposto incide e se é popular entre
        microempreendedores.
      </p>
      <CnaeTool />
    </div>
  );
}
