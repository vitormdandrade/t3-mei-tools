"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

export default function KitMEIPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBuy = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }

      const stripe = await stripePromise;
      if (!stripe) {
        setError("Erro ao carregar Stripe. Tente novamente.");
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch (err) {
      setError("Erro ao processar pagamento. Tente novamente.");
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Hero */}
      <section className="text-center py-10 bg-gradient-to-r from-amber-50 dark:from-amber-950/40 to-orange-50 dark:to-orange-950/40 rounded-lg p-8 border border-amber-200 dark:border-amber-800">
        <div className="inline-block bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          🎯 Novo — Kit de Documentos para MEI
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Kit MEI: Modelos de Documentos{" "}
          <span className="text-amber-600 dark:text-amber-400">Prontos para Usar</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
          4 templates profissionais em PDF que todo MEI precisa. Preencha e use
          em minutos.
        </p>
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          R$ 29,90
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Pagamento único · Download imediato · Atualizações gratuitas
        </p>
        <button
          onClick={handleBuy}
          disabled={loading}
          className="bg-amber-600 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg hover:shadow-xl"
        >
          {loading ? "Redirecionando..." : "Comprar Kit MEI — R$ 29,90"}
        </button>
        {error && (
          <p className="text-red-600 dark:text-red-400 mt-3 text-sm">{error}</p>
        )}
        <div className="flex gap-3 justify-center flex-wrap mt-4 text-sm">
          <span className="bg-white dark:bg-gray-900 border border-border text-foreground px-3 py-1 rounded-full">
            🔒 Pagamento seguro via Stripe
          </span>
          <span className="bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">
            📥 Download imediato em ZIP
          </span>
          <span className="bg-white dark:bg-gray-900 border border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full">
            📝 4 PDFs editáveis
          </span>
        </div>
      </section>

      {/* What's Included */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          O que está incluído
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition bg-white dark:bg-gray-900">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Contrato de Prestação de Serviços
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Contrato profissional com cláusulas de objeto, valor, prazo,
              obrigações e rescisão. Ideal para formalizar serviços com
              clientes.
            </p>
          </div>

          <div className="border dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition bg-white dark:bg-gray-900">
            <div className="text-3xl mb-3">🧾</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Modelo de Nota Fiscal (RPA)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Recibo de Pagamento a Autônomo formatado como nota fiscal.
              Discriminação de serviços, valores e dados do prestador.
            </p>
          </div>

          <div className="border dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition bg-white dark:bg-gray-900">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Recibo de Pagamento
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Recibo simples e profissional para comprovar pagamentos recebidos.
              Com campos para valor, descrição e forma de pagamento.
            </p>
          </div>

          <div className="border dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition bg-white dark:bg-gray-900">
            <div className="text-3xl mb-3">✍️</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Termo de Responsabilidade
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Documento que formaliza responsabilidades do MEI perante o
              cliente. Cobre sigilo, obrigações fiscais e qualidade do serviço.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Por que comprar o Kit MEI?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-2">1.</div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
              Economize tempo
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Não perca horas criando documentos do zero. Nossos modelos estão
              prontos, testados e formatados.
            </p>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-2">2.</div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
              Profissionalismo
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Transmita confiança e seriedade com documentos bem estruturados,
              seguindo as melhores práticas.
            </p>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-2">3.</div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">
              Segurança jurídica
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Contratos e termos que protegem você e seu cliente, reduzindo
              riscos de mal-entendidos.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Como funciona
        </h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100">Clique em Comprar</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Pagamento seguro via cartão de crédito processado pelo Stripe.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100">
                Download imediato
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Após a confirmação do pagamento, você recebe um arquivo ZIP com
                os 4 PDFs.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100">
                Preencha e use
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Abra os PDFs, preencha com seus dados e os do cliente. Pronto
                para usar!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Dúvidas Frequentes
        </h2>
        <div className="space-y-4">
          <details className="border dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
              Os documentos são válidos juridicamente?
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Sim. Os modelos seguem a legislação brasileira e as práticas
              contábeis para MEI. Recomendamos que um contador revise os
              documentos preenchidos para seu caso específico.
            </p>
          </details>
          <details className="border dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
              Posso editar os documentos?
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Sim! Os PDFs possuem campos para preenchimento. Você pode
              preencher digitalmente (com qualquer leitor de PDF) ou imprimir e
              preencher à mão.
            </p>
          </details>
          <details className="border dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
              Recebo atualizações?
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Sim! Se houver mudanças na legislação que afetem os modelos,
              enviaremos a versão atualizada gratuitamente para seu e-mail.
            </p>
          </details>
          <details className="border dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
              Como recebo os arquivos?
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Após o pagamento confirmado, você é redirecionado para a página
              de sucesso onde pode baixar o arquivo ZIP com todos os 4 PDFs
              imediatamente.
            </p>
          </details>
          <details className="border dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
              Posso pagar com PIX?
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              No momento, aceitamos apenas cartão de crédito. O Stripe (nosso
              processador de pagamentos) oferece suporte a PIX e em breve
              adicionaremos essa opção.
            </p>
          </details>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para profissionalizar seu MEI?
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Junte-se a centenas de MEIs que já usam documentos profissionais
        </p>
        <button
          onClick={handleBuy}
          disabled={loading}
          className="bg-white text-amber-700 px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 disabled:opacity-50 transition"
        >
          {loading ? "Redirecionando..." : "Comprar por R$ 29,90"}
        </button>
      </section>
    </div>
  );
}
