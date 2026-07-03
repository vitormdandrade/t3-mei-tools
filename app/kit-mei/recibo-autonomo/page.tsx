import type { Metadata } from "next";
import TemplatePageClient from "../components/TemplatePageClient";

export const metadata: Metadata = {
  title: "Recibo de Autônomo (RPA) MEI — Modelo Preenchível PDF | R$19,90",
  description:
    "Recibo de Pagamento a Autônomo (RPA) preenchível para MEI. Tabela de serviços, retenções de INSS/ISS/IRRF, formatação profissional. Download imediato.",
  keywords:
    "recibo autônomo RPA MEI, recibo pagamento MEI PDF, modelo RPA MEI, recibo prestação serviços, comprovante pagamento MEI",
  alternates: { canonical: "/kit-mei/recibo-autonomo" },
  openGraph: {
    title: "Recibo de Autônomo (RPA) MEI — Modelo PDF Preenchível",
    description:
      "Recibo de Pagamento a Autônomo com tabela de serviços e campos para retenções. Ideal para MEI.",
    type: "website",
    url: "/kit-mei/recibo-autonomo",
  },
};

const crossSells = [
  { slug: "contrato-prestacao", name: "Contrato de Prestação de Serviços", price: 49.9, emoji: "📋" },
  { slug: "nota-fiscal-avulsa", name: "Nota Fiscal de Serviço Avulsa", price: 19.9, emoji: "📄" },
  { slug: "dasn-simei", name: "Declaração Anual MEI (DASN)", price: 29.9, emoji: "📊" },
];

export default function Page() {
  return (
    <TemplatePageClient
      slug="recibo-autonomo"
      title="Recibo de Autônomo (RPA)"
      subtitle="Recibo de Pagamento a Autônomo preenchível para MEI. Tabela de discriminação de serviços, campos para retenções e formatação profissional."
      price={19.9}
      emoji="🧾"
      description="Recibo de Pagamento a Autônomo (RPA) em formato profissional, ideal para MEIs que precisam emitir comprovantes de pagamento pelos serviços prestados. O template inclui campos completos para dados do prestador, tomador de serviços, tabela de discriminação de serviços com 6 linhas, seção de retenções (INSS, IRRF, ISS) e cálculo do valor líquido. Perfeito para formalizar pagamentos recebidos de clientes pessoa física ou jurídica."
      features={[
        "Formato RPA profissional com todos os campos obrigatórios",
        "Número do RPA para controle e organização",
        "Dados completos do prestador (MEI) e tomador",
        "Tabela de discriminação com 6 linhas para serviços",
        "Seção de retenções: INSS (11%), IRRF e ISS",
        "Cálculo do valor líquido a receber",
        "Observações fiscais para MEI (isenção IRRF)",
        "Espaço para assinatura do prestador e tomador",
        "PDF preenchível — edite digitalmente ou imprima",
        "Formatação A4 limpa e profissional",
      ]}
      idealFor="MEIs de todas as atividades que precisam emitir recibos para comprovar pagamentos recebidos. Especialmente útil para serviços prestados a pessoas jurídicas que exigem RPA formal."
      crossSells={crossSells}
    />
  );
}
