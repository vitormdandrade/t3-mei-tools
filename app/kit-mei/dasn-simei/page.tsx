import type { Metadata } from "next";
import TemplatePageClient from "../components/TemplatePageClient";

export const metadata: Metadata = {
  title: "Declaração Anual MEI (DASN-SIMEI) — Modelo Preenchível PDF | R$29,90",
  description:
    "Modelo preenchível da Declaração Anual do Simples Nacional (DASN-SIMEI) para MEI. Tabelas mensais de receita, cálculo de limite, dados do empregado. Baixe e preencha.",
  keywords:
    "DASN-SIMEI modelo PDF, declaração anual MEI preenchível, DASN MEI 2026, declaração simples nacional MEI, como preencher DASN MEI",
  alternates: { canonical: "/kit-mei/dasn-simei" },
  openGraph: {
    title: "Declaração Anual MEI (DASN-SIMEI) — Modelo PDF Preenchível",
    description:
      "Modelo preenchível da DASN-SIMEI com tabelas mensais, limite de faturamento e dados do empregado. Para MEI.",
    type: "website",
    url: "/kit-mei/dasn-simei",
  },
};

const crossSells = [
  { slug: "contrato-prestacao", name: "Contrato de Prestação de Serviços", price: 49.9, emoji: "📋" },
  { slug: "recibo-autonomo", name: "Recibo de Autônomo (RPA)", price: 19.9, emoji: "🧾" },
  { slug: "nota-fiscal-avulsa", name: "Nota Fiscal de Serviço Avulsa", price: 19.9, emoji: "📄" },
  { slug: "gerador-recibo", name: "Gerador de Recibo MEI", price: 39.9, emoji: "🧾" },
];

export default function Page() {
  return (
    <TemplatePageClient
      slug="dasn-simei"
      title="Declaração Anual MEI (DASN-SIMEI)"
      subtitle="Modelo preenchível da Declaração Anual do Simples Nacional para MEI. Tabelas mensais de receita bruta, verificação de limite e dados do empregado."
      price={29.9}
      emoji="📊"
      description="Modelo preenchível da Declaração Anual do Simples Nacional para Microempreendedor Individual (DASN-SIMEI). Este template é um guia completo para organizar e preparar sua declaração anual, com tabelas mensais para receita bruta de comércio/indústria e serviços, verificação do limite de faturamento (R$ 81.000 em 2026), dados de empregado (se houver), controle de notas fiscais emitidas e declaração de veracidade. Ideal para se organizar antes de fazer a declaração oficial no Portal do Empreendedor."
      features={[
        "Seção completa de identificação do MEI (CNPJ, endereço, natureza jurídica)",
        "Tabelas mensais (jan-dez) para receita de comércio/indústria",
        "Tabelas mensais (jan-dez) para receita de serviços",
        "Cálculo automático dos totais parciais e receita bruta total",
        "Verificação do limite MEI (R$ 81.000 em 2026)",
        "Seção de empregado — nome, CPF, salário, meses",
        "Controle de notas fiscais emitidas no ano",
        "Declaração de veracidade padrão DASN-SIMEI",
        "PDF preenchível — 3-4 páginas com formatação clara",
        "Atualizações gratuitas quando o limite MEI for reajustado",
      ]}
      idealFor="Todo MEI que precisa entregar a DASN-SIMEI anualmente. Use como rascunho para organizar seus números antes de preencher a declaração oficial no Portal do Empreendedor. Também útil para contadores que atendem MEIs."
      crossSells={crossSells}
    />
  );
}
