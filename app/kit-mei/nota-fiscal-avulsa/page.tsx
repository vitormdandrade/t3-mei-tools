import type { Metadata } from "next";
import TemplatePageClient from "../components/TemplatePageClient";

export const metadata: Metadata = {
  title: "Nota Fiscal de Serviço Avulsa MEI — Modelo PDF Preenchível | R$19,90",
  description:
    "Modelo de nota fiscal avulsa para prestação de serviços MEI. Campos para prestador, tomador, discriminação, valores, ISS, PIS, COFINS. PDF pronto para usar.",
  keywords:
    "nota fiscal serviço avulsa MEI, modelo NFS-e MEI, nota fiscal prestação serviços PDF, nota fiscal autônomo, nota fiscal freelancer MEI",
  alternates: { canonical: "/kit-mei/nota-fiscal-avulsa" },
  openGraph: {
    title: "Nota Fiscal de Serviço Avulsa MEI — Modelo PDF",
    description:
      "Modelo de nota fiscal avulsa para MEI com campos fiscais completos. Ideal para prestadores de serviços.",
    type: "website",
    url: "/kit-mei/nota-fiscal-avulsa",
  },
};

const crossSells = [
  { slug: "contrato-prestacao", name: "Contrato de Prestação de Serviços", price: 49.9, emoji: "📋" },
  { slug: "recibo-autonomo", name: "Recibo de Autônomo (RPA)", price: 19.9, emoji: "🧾" },
  { slug: "gerador-recibo", name: "Gerador de Recibo MEI", price: 39.9, emoji: "🧾" },
  { slug: "termo-rescisao", name: "Termo de Rescisão de Contrato", price: 39.9, emoji: "📝" },
];

export default function Page() {
  return (
    <TemplatePageClient
      slug="nota-fiscal-avulsa"
      title="Nota Fiscal de Serviço Avulsa"
      subtitle="Modelo de nota fiscal para prestação de serviços MEI. Campos completos para prestador, tomador, discriminação de serviços e valores fiscais."
      price={19.9}
      emoji="📄"
      description="Modelo de Nota Fiscal de Serviço Avulsa profissional para MEI e autônomos. O template inclui todos os campos obrigatórios de uma NFS-e: dados do prestador (MEI) com CNPJ e inscrição municipal, dados do tomador de serviços, discriminação detalhada dos serviços prestados, campo para código CNAE e LC 116, e cálculo completo de valores incluindo ISS, PIS, COFINS, IRRF e INSS. Com formatação limpa e profissional, é ideal para uso interno, organização ou como rascunho antes da emissão oficial."
      features={[
        "Campos completos para NFS-e: número, data de emissão",
        "Dados do prestador (MEI): CNPJ, inscrição municipal, endereço",
        "Dados do tomador: nome, CPF/CNPJ, endereço completo",
        "Discriminação dos serviços com 5 linhas",
        "Campo para código CNAE e código LC 116",
        "Cálculo de valores: bruto, desconto, base de cálculo",
        "Campos para impostos: ISS, PIS, COFINS, IRRF, INSS",
        "Cálculo do valor líquido",
        "Observações fiscais importantes para MEI",
        "PDF preenchível com 2-3 páginas",
      ]}
      idealFor="MEIs prestadores de serviços que precisam de um modelo profissional para organizar suas notas fiscais. Use como rascunho antes da emissão oficial no sistema da prefeitura, ou como nota fiscal interna para controle financeiro."
      crossSells={crossSells}
    />
  );
}
