import type { Metadata } from "next";
import GeradorReciboClient from "./GeradorReciboClient";

export const metadata: Metadata = {
  title: "Gerador de Recibo MEI — Preencha e Baixe PDF | R$39,90",
  description:
    "Gerador de recibo MEI online. Preencha os dados do prestador, tomador e serviço e receba seu recibo de prestação de serviço profissional em PDF, com valor por extenso. Modelo recibo online pronto para enviar ao cliente.",
  keywords:
    "gerador de recibo MEI, recibo prestação serviço, modelo recibo online, recibo MEI PDF, gerar recibo online, recibo de serviço preenchido, recibo profissional MEI",
  alternates: { canonical: "/kit-mei/gerador-recibo" },
  openGraph: {
    title: "Gerador de Recibo MEI — Preencha e Baixe PDF",
    description:
      "Preencha os dados e gere seu Recibo MEI profissional automaticamente. PDF preenchido com valor por extenso, download imediato.",
    type: "website",
    url: "/kit-mei/gerador-recibo",
  },
};

const crossSells = [
  {
    slug: "contrato-prestacao",
    name: "Contrato de Prestação de Serviços",
    price: 49.9,
    emoji: "📋",
  },
  {
    slug: "recibo-autonomo",
    name: "Recibo de Autônomo (RPA)",
    price: 19.9,
    emoji: "🧾",
  },
  {
    slug: "dasn-simei",
    name: "Declaração Anual MEI (DASN)",
    price: 29.9,
    emoji: "📊",
  },
  {
    slug: "nota-fiscal-avulsa",
    name: "Nota Fiscal de Serviço Avulsa",
    price: 19.9,
    emoji: "📄",
  },
  {
    slug: "termo-rescisao",
    name: "Termo de Rescisão de Contrato",
    price: 39.9,
    emoji: "📝",
  },
];

export default function Page() {
  return <GeradorReciboClient crossSells={crossSells} />;
}
