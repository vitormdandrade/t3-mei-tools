import { Metadata } from 'next';
import PontoEquilibrioCalculator from './PontoEquilibrioCalculator';

export const metadata: Metadata = {
  title: 'Calculadora de Ponto de Equilíbrio MEI 2026 — Quantas Vendas para Quebrar',
  description:
    'Descubra quantas unidades e quanto de faturamento você precisa para cobrir todos os custos fixos do seu MEI. Resultado na hora, gratuito, sem cadastro.',
  keywords:
    'calculadora ponto de equilibrio MEI, break even MEI, quantas vendas cobrir custos, margem de contribuição MEI, calcular ponto de equilibrio',
};

export default function PontoEquilibrioPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Calculadora de Ponto de Equilíbrio MEI
      </h1>
      <p className="text-gray-600 mb-8">
        Quantas unidades você precisa vender por mês para cobrir todos os
        custos fixos e não ficar no vermelho. Resultado instantâneo — sem
        cadastro, sem limite de cálculos.
      </p>
      <PontoEquilibrioCalculator />
    </div>
  );
}
