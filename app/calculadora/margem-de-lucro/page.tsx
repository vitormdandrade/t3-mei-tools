import { Metadata } from 'next';
import MargemCalculator from './MargemCalculator';

export const metadata: Metadata = {
  title: 'Calculadora de Margem de Lucro MEI 2026 — Resultado na Hora',
  description:
    'Calcule a margem de lucro do seu produto ou serviço como MEI. Descubra quanto você lucra por venda, o markup e se seu preço cobre os custos. Gratuito, sem cadastro.',
  keywords:
    'calculadora margem de lucro MEI, margem lucro percentual, markup MEI, preço de venda MEI, lucro por venda',
};

export default function MargemPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-hero mb-2">
        Calculadora de Margem de Lucro MEI
      </h1>
      <p className="text-body-lg mb-8">
        Descubra se seu preço cobre os custos e gera lucro real. Resultado
        instantâneo — sem cadastro, sem limite de cálculos.
      </p>
      <MargemCalculator />
    </div>
  );
}
