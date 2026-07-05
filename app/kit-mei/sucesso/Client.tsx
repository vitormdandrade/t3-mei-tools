"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { track } from "@vercel/analytics";

const PRODUCT_NAMES: Record<string, string> = {
  "contrato-prestacao": "Contrato de Prestação de Serviços",
  "recibo-autonomo": "Recibo de Autônomo (RPA)",
  "dasn-simei": "Declaração Anual MEI (DASN-SIMEI)",
  "nota-fiscal-avulsa": "Nota Fiscal de Serviço Avulsa",
  "termo-rescisao": "Termo de Rescisão de Contrato",
  "gerador-recibo": "Recibo MEI",
};

function SucessoContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const product = searchParams.get("product");
  const [status, setStatus] = useState<"loading" | "ready" | "expired" | "error">("loading");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");

  const isTemplate = !!product && product !== "kit-mei";
  const productName = product ? PRODUCT_NAMES[product] || "Template" : null;

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      setError("Sessão não encontrada. Por favor, entre em contato com suporte.");
      return;
    }

    async function checkSession() {
      try {
        const res = await fetch(`/api/download?session_id=${sessionId}`);
        const data = await res.json();

        if (data.ready) {
          setStatus("ready");
          setDownloadUrl(`/api/download?session_id=${sessionId}&download=1`);
          track("purchase", { product: product || "kit-mei" });
        } else if (data.status === "pending") {
          setTimeout(checkSession, 3000);
        } else if (data.status === "expired") {
          setStatus("expired");
        } else {
          setStatus("error");
          setError(data.error || "Erro ao verificar pagamento.");
        }
      } catch {
        setStatus("error");
        setError("Erro ao conectar ao servidor. Tente novamente.");
      }
    }

    checkSession();
  }, [sessionId]);

  if (status === "loading") {
    return (
      <div className="text-center py-16">
        <div className="animate-spin w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Confirmando pagamento...
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Aguarde um momento enquanto verificamos seu pagamento.
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">❌</div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Algo deu errado
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
        <a
          href="/kit-mei"
          className="text-amber-600 dark:text-amber-400 font-semibold hover:underline"
        >
          ← Voltar para o Kit MEI
        </a>
      </div>
    );
  }

  if (status === "expired") {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">⏰</div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Link expirado
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          O link de download expirou após 24 horas. Entre em contato para
          reenviarmos.
        </p>
        <a
          href="/kit-mei"
          className="text-amber-600 dark:text-amber-400 font-semibold hover:underline"
        >
          ← Voltar para o Kit MEI
        </a>
      </div>
    );
  }

  return (
    <div className="text-center py-16">
      <div className="text-5xl mb-4">🎉</div>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        Pagamento confirmado!
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {isTemplate
          ? `Seu template "${productName}" está pronto. Clique no botão abaixo para baixar.`
          : "Seu Kit MEI está pronto. Clique no botão abaixo para baixar."}
      </p>
      <a
        href={downloadUrl}
        className="inline-block bg-accent text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-accent-hover transition shadow-lg"
      >
        {isTemplate ? `📥 Baixar ${productName} (PDF)` : "📥 Baixar Kit MEI (ZIP)"}
      </a>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        {isTemplate
          ? `Arquivo PDF · ${productName} · Preenchível`
          : "Arquivo ZIP com 4 PDFs · Contrato · Nota Fiscal · Recibo · Termo de Responsabilidade"}
      </p>
      <div className="mt-8">
        <a
          href={isTemplate ? `/kit-mei/${product}` : "/kit-mei"}
          className="text-amber-600 dark:text-amber-400 font-semibold hover:underline"
        >
          ← Voltar{isTemplate ? ` para ${productName}` : " para o Kit MEI"}
        </a>
      </div>
    </div>
  );
}

export default function SucessoPage() {
  return (
    <Suspense
      fallback={
        <div className="text-center py-16">
          <div className="animate-spin w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Carregando...</p>
        </div>
      }
    >
      <SucessoContent />
    </Suspense>
  );
}
