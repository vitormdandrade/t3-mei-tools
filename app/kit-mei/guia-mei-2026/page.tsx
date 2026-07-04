import type { Metadata } from "next";
import TemplatePageClient from "../components/TemplatePageClient";

export const metadata: Metadata = {
  title: "Guia Completo do MEI 2026 — Ebook em PDF | R$19,90",
  description:
    "Ebook completo do MEI 2026: como abrir, DAS, limite de faturamento, nota fiscal NFS-e, DASN-SIMEI, INSS, funcionário, finanças e calendário de obrigações. Download imediato.",
  keywords:
    "guia MEI 2026, ebook MEI, manual MEI PDF, como abrir MEI 2026, DAS MEI 2026, DASN-SIMEI, limite faturamento MEI, nota fiscal MEI",
  alternates: { canonical: "/kit-mei/guia-mei-2026" },
  openGraph: {
    title: "Guia Completo do MEI 2026 — Ebook em PDF",
    description:
      "Tudo sobre o MEI em 2026 em um único PDF: abertura, impostos, nota fiscal, declaração anual, INSS e finanças.",
    type: "website",
    url: "/kit-mei/guia-mei-2026",
  },
};

const crossSells = [
  { slug: "gerador-recibo", name: "Gerador de Recibo MEI", price: 39.9, emoji: "🧾" },
  { slug: "contrato-prestacao", name: "Contrato de Prestação de Serviços", price: 49.9, emoji: "📋" },
  { slug: "dasn-simei", name: "Declaração Anual MEI (DASN)", price: 29.9, emoji: "📊" },
  { slug: "recibo-autonomo", name: "Recibo de Autônomo (RPA)", price: 19.9, emoji: "🧾" },
];

export default function Page() {
  return (
    <TemplatePageClient
      slug="guia-mei-2026"
      title="Guia Completo do MEI 2026"
      subtitle="Ebook em PDF com tudo o que você precisa saber para abrir, manter e fazer crescer o seu MEI — em linguagem simples, sem juridiquês."
      price={19.9}
      emoji="📘"
      description="Um manual prático de 9 capítulos que reúne, em um único PDF, todas as regras essenciais do MEI em 2026: abertura gratuita passo a passo, valores atualizados do DAS, limite de faturamento e o que fazer se ultrapassar, emissão de nota fiscal pela NFS-e nacional, entrega da DASN-SIMEI, contratação de funcionário, benefícios do INSS, organização financeira e o calendário completo de obrigações do ano. Chega de garimpar informação espalhada em dezenas de sites."
      features={[
        "9 capítulos objetivos, do registro ao imposto de renda",
        "Valores do DAS 2026 atualizados em tabela",
        "Passo a passo de abertura 100% gratuita no gov.br",
        "Regras do limite de R$ 81.000 e como agir se ultrapassar",
        "Como emitir nota fiscal pela NFS-e nacional",
        "Guia da DASN-SIMEI com prazo, multas e retificação",
        "Direitos do INSS: aposentadoria, auxílio-doença e maternidade",
        "Rotina financeira mínima + como acessar crédito PJ",
        "Calendário de obrigações 2026 + checklist mensal",
        "Leitura em qualquer dispositivo — PDF de alta qualidade",
      ]}
      idealFor="Quem está pensando em abrir um MEI, quem acabou de abrir e não sabe por onde começar, e MEIs ativos que querem parar de pagar multas por esquecer prazos e obrigações."
      crossSells={crossSells}
    />
  );
}
