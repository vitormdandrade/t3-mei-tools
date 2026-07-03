"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

interface TemplatePageClientProps {
  slug: string;
  title: string;
  subtitle: string;
  price: number; // in reais (e.g., 49.90)
  emoji: string;
  description: string;
  features: string[];
  idealFor: string;
  crossSells: { slug: string; name: string; price: number; emoji: string }[];
}

function formatPrice(price: number): string {
  return `R$ ${price.toFixed(2).replace(".", ",")}`;
}

export default function TemplatePageClient({
  slug,
  title,
  subtitle,
  price,
  emoji,
  description,
  features,
  idealFor,
  crossSells,
}: TemplatePageClientProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBuy = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: slug }),
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
          📋 Template Profissional para MEI
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {title}{" "}
          <span className="text-amber-600 dark:text-amber-400">{emoji}</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
          {subtitle}
        </p>
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {formatPrice(price)}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Pagamento único · Download imediato · PDF preenchível
        </p>
        <button
          onClick={handleBuy}
          disabled={loading}
          className="bg-amber-600 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg hover:shadow-xl"
        >
          {loading ? "Redirecionando..." : `Comprar — ${formatPrice(price)}`}
        </button>
        {error && (
          <p className="text-red-600 dark:text-red-400 mt-3 text-sm">{error}</p>
        )}
        <div className="flex gap-3 justify-center flex-wrap mt-4 text-sm">
          <span className="bg-white dark:bg-gray-900 border border-border text-foreground px-3 py-1 rounded-full">
            🔒 Pagamento seguro via Stripe
          </span>
          <span className="bg-white dark:bg-gray-900 border border-accent text-accent px-3 py-1 rounded-full">
            📥 Download imediato
          </span>
          <span className="bg-white dark:bg-gray-900 border border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full">
            📝 PDF preenchível
          </span>
        </div>
      </section>

      {/* Description */}
      <section className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Sobre este template
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">
            💡 Ideal para:
          </p>
          <p className="text-sm text-amber-700 dark:text-amber-400">{idealFor}</p>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          O que este template oferece
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex gap-3 items-start bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg p-4"
            >
              <span className="text-amber-600 dark:text-amber-400 text-lg shrink-0 mt-0.5">
                ✅
              </span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Como funciona
        </h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100">
                Clique em Comprar
              </h3>
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
                Após a confirmação do pagamento, você recebe o PDF imediatamente.
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
                Abra o PDF, preencha com seus dados e use imediatamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-sell CTAs */}
      <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          📦 Complete seu kit de documentos
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Aproveite e confira outros templates profissionais disponíveis:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {crossSells.map((cs) => (
            <a
              key={cs.slug}
              href={`/kit-mei/${cs.slug}`}
              className="border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-4 hover:shadow-lg transition hover:border-amber-400 dark:hover:border-amber-600 no-underline"
            >
              <div className="text-2xl mb-2">{cs.emoji}</div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">
                {cs.name}
              </h3>
              <p className="text-amber-600 dark:text-amber-400 font-bold text-sm">
                {formatPrice(cs.price)}
              </p>
            </a>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a
            href="/kit-mei"
            className="text-amber-600 dark:text-amber-400 font-semibold hover:underline text-sm"
          >
            ← Ver todos os templates e o Kit MEI completo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Dúvidas Frequentes
        </h2>
        <div className="space-y-4">
          <details className="border dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
              O template é preenchível digitalmente?
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Sim! O PDF possui campos para preenchimento. Você pode preencher
              digitalmente com qualquer leitor de PDF (Adobe Acrobat, Preview no
              Mac, etc.) ou imprimir e preencher à mão.
            </p>
          </details>
          <details className="border dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
              Como recebo o arquivo?
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Após o pagamento confirmado, você é redirecionado para a página de
              sucesso onde pode baixar o PDF imediatamente. Também enviamos o
              link por e-mail.
            </p>
          </details>
          <details className="border dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
              Posso editar o conteúdo do PDF?
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Os PDFs possuem campos para preenchimento dos dados específicos
              (nome, valores, datas). O layout e texto fixo não são editáveis
              para manter a formatação profissional.
            </p>
          </details>
          <details className="border dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
              Recebo atualizações se a legislação mudar?
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Sim! Se houver mudanças relevantes na legislação que afetem o
              template, enviaremos a versão atualizada gratuitamente para seu
              e-mail.
            </p>
          </details>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para usar um template profissional?
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Compre agora e tenha seu {title.toLowerCase()} em minutos
        </p>
        <button
          onClick={handleBuy}
          disabled={loading}
          className="bg-white text-amber-700 px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 disabled:opacity-50 transition"
        >
          {loading ? "Redirecionando..." : `Comprar por ${formatPrice(price)}`}
        </button>
      </section>
    </div>
  );
}
