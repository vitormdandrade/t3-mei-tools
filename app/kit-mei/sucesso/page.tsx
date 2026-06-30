"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SucessoContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<"loading" | "ready" | "expired" | "error">("loading");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [error, setError] = useState("");

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
        } else if (data.status === "pending") {
          // Payment still processing, retry in 3 seconds
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Confirmando pagamento...
        </h2>
        <p className="text-gray-600">
          Aguarde um momento enquanto verificamos seu pagamento.
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">❌</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Algo deu errado
        </h2>
        <p className="text-gray-600 mb-4">{error}</p>
        <a
          href="/kit-mei"
          className="text-amber-600 font-semibold hover:underline"
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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Link expirado
        </h2>
        <p className="text-gray-600 mb-4">
          O link de download expirou após 24 horas. Entre em contato para
          reenviarmos.
        </p>
        <a
          href="/kit-mei"
          className="text-amber-600 font-semibold hover:underline"
        >
          ← Voltar para o Kit MEI
        </a>
      </div>
    );
  }

  return (
    <div className="text-center py-16">
      <div className="text-5xl mb-4">🎉</div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Pagamento confirmado!
      </h2>
      <p className="text-gray-600 mb-8">
        Seu Kit MEI está pronto. Clique no botão abaixo para baixar.
      </p>
      <a
        href={downloadUrl}
        className="inline-block bg-green-600 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-green-700 transition shadow-lg"
      >
        📥 Baixar Kit MEI (ZIP)
      </a>
      <p className="text-sm text-gray-500 mt-4">
        Arquivo ZIP com 4 PDFs · Contrato · Nota Fiscal · Recibo · Termo de
        Responsabilidade
      </p>
      <div className="mt-8">
        <a
          href="/kit-mei"
          className="text-amber-600 font-semibold hover:underline"
        >
          ← Voltar para o Kit MEI
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
          <p className="text-gray-600">Carregando...</p>
        </div>
      }
    >
      <SucessoContent />
    </Suspense>
  );
}
