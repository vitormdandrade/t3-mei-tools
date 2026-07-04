import type { Metadata } from "next";
import TemplatePageClient from "../components/TemplatePageClient";

export const metadata: Metadata = {
  title: "Termo de Rescisão de Contrato MEI — Modelo PDF Preenchível | R$39,90",
  description:
    "Termo de rescisão (distrato) de contrato de prestação de serviços para MEI. Cláusulas de acerto financeiro, quitação, obrigações pós-rescisão. Download imediato.",
  keywords:
    "termo rescisão contrato MEI, distrato prestação serviços, modelo rescisão contratual MEI, encerramento contrato MEI, quitação contrato PDF",
  alternates: { canonical: "/kit-mei/termo-rescisao" },
  openGraph: {
    title: "Termo de Rescisão de Contrato MEI — Modelo PDF",
    description:
      "Termo de rescisão contratual com cláusulas de acerto financeiro, quitação e obrigações pós-rescisão. Para MEI.",
    type: "website",
    url: "/kit-mei/termo-rescisao",
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
      slug="termo-rescisao"
      title="Termo de Rescisão de Contrato"
      subtitle="Documento formal para distrato de contrato de prestação de serviços. Cláusulas de acerto financeiro, quitação geral e obrigações pós-rescisão."
      price={39.9}
      emoji="📝"
      description="Termo de Rescisão de Contrato (Distrato) formal e completo, desenvolvido para MEIs que precisam encerrar contratos de prestação de serviços de forma profissional e juridicamente segura. O template inclui 6 seções detalhadas: identificação das partes, dados do contrato rescindido, motivo da rescisão (com checkbox para opções), acerto financeiro completo (valores pagos, pendentes, multa, forma de pagamento), obrigações pós-rescisão para ambas as partes e quitação geral. Perfeito para formalizar o encerramento e evitar disputas futuras."
      features={[
        "6 seções completas cobrindo todo o processo de distrato",
        "Identificação detalhada das partes e do contrato original",
        "Checkbox para motivo da rescisão (6 opções + campo aberto)",
        "Acerto financeiro: valores pagos, pendentes, multa e forma de pgto",
        "Opção de quitação total e irrestrita",
        "Obrigações pós-rescisão para contratante e contratado",
        "Cláusula de quitação geral — segurança jurídica",
        "Espaço para assinaturas e testemunhas",
        "PDF preenchível com 2-3 páginas",
        "Linguagem jurídica clara e objetiva",
      ]}
      idealFor="MEIs que precisam formalizar o encerramento de contratos de prestação de serviços. Essencial quando o contrato chega ao fim, seja por conclusão, acordo ou rescisão unilateral. Protege ambas as partes com quitação formal."
      crossSells={crossSells}
    />
  );
}
