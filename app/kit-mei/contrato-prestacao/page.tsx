import type { Metadata } from "next";
import TemplatePageClient from "../components/TemplatePageClient";

export const metadata: Metadata = {
  title:
    "Contrato de Prestação de Serviços MEI — Modelo PDF Preenchível | R$49,90",
  description:
    "Contrato profissional para MEI prestadores de serviços. Ideal para design gráfico, TI, fotografia, consultoria. 8 cláusulas completas, pronto para preencher e usar.",
  keywords:
    "contrato prestação serviços MEI, modelo contrato MEI PDF, contrato designer MEI, contrato freelancer MEI, contrato TI MEI, contrato fotógrafo MEI",
  alternates: { canonical: "/kit-mei/contrato-prestacao" },
  openGraph: {
    title: "Contrato de Prestação de Serviços MEI — Modelo PDF",
    description:
      "Contrato profissional com 8 cláusulas completas para MEI. Ideal para design, TI, fotografia e serviços.",
    type: "website",
    url: "/kit-mei/contrato-prestacao",
  },
};

const crossSells = [
  { slug: "recibo-autonomo", name: "Recibo de Autônomo (RPA)", price: 19.9, emoji: "🧾" },
  { slug: "nota-fiscal-avulsa", name: "Nota Fiscal de Serviço Avulsa", price: 19.9, emoji: "📄" },
  { slug: "gerador-recibo", name: "Gerador de Recibo MEI", price: 39.9, emoji: "🧾" },
  { slug: "termo-rescisao", name: "Termo de Rescisão de Contrato", price: 39.9, emoji: "📝" },
];

export default function Page() {
  return (
    <TemplatePageClient
      slug="contrato-prestacao"
      title="Contrato de Prestação de Serviços"
      subtitle="Contrato profissional para MEI com 8 cláusulas completas. Ideal para design gráfico, TI, fotografia, consultoria e outros serviços."
      price={49.9}
      emoji="📋"
      description="Contrato de Prestação de Serviços completo e profissional, desenvolvido especialmente para Microempreendedores Individuais (MEI) que prestam serviços nas áreas de design gráfico, tecnologia da informação, fotografia, consultoria e outras atividades. O template inclui 8 cláusulas detalhadas cobrindo partes, objeto, valor, prazo, obrigações, propriedade intelectual, rescisão e foro. Basta preencher os campos e usar."
      features={[
        "8 cláusulas completas e juridicamente embasadas",
        "Campos para dados do contratante e contratado (MEI)",
        "Cláusula de propriedade intelectual — essencial para criativos",
        "Seção de obrigações detalhadas para ambas as partes",
        "Cláusula de rescisão com regras de aviso prévio e multa",
        "Espaço para assinaturas e testemunhas",
        "Formatação A4 profissional com cabeçalho e rodapé",
        "PDF preenchível — edite digitalmente ou imprima",
        "2-3 páginas com formatação limpa e profissional",
        "Atualizações gratuitas se a legislação mudar",
      ]}
      idealFor="Designers gráficos, fotógrafos, desenvolvedores, consultores, redatores, social media e qualquer MEI que preste serviços para clientes pessoa física ou jurídica."
      crossSells={crossSells}
    />
  );
}
