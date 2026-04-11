import { Metadata } from 'next';
import PrecoPorHoraCalculator from './PrecoPorHoraCalculator';

export const metadata: Metadata = {
  title: 'Calculadora Preço por Hora MEI 2026 — Quanto Cobrar por Hora',
  description:
    'Descubra quanto cobrar por hora como MEI ou freelancer. Calcule seu valor mínimo e recomendado baseado no salário desejado, horas trabalhadas e despesas. Gratuito, sem cadastro.',
  keywords:
    'calculadora preço por hora MEI, quanto cobrar por hora freelancer, valor hora freelancer, preço hora MEI 2026, como precificar serviço MEI',
};

export default function PrecoPorHoraPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Calculadora de Preço por Hora MEI
      </h1>
      <p className="text-gray-600 mb-8">
        Descubra quanto você precisa cobrar por hora para atingir o salário que deseja —
        já considerando DAS, despesas e dias de férias. Resultado instantâneo, sem cadastro.
      </p>
      <PrecoPorHoraCalculator />
    </div>
  );
}
