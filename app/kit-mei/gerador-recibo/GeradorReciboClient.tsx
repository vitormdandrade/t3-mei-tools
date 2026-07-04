"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

interface GeradorReciboClientProps {
  crossSells: { slug: string; name: string; price: number; emoji: string }[];
}

interface FormData {
  nome: string;
  cnpj: string;
  endereco: string;
  telefone: string;
  email: string;
  tomadorNome: string;
  tomadorCpfCnpj: string;
  tomadorEndereco: string;
  servicoDescricao: string;
  servicoValor: string;
  servicoData: string;
  reciboNumero: string;
}

function defaultReciboNumero(): string {
  const now = new Date();
  return `${String(now.getDate()).padStart(2, "0")}${String(now.getMonth() + 1).padStart(2, "0")}-${now.getFullYear()}`;
}

const emptyForm: FormData = {
  nome: "",
  cnpj: "",
  endereco: "",
  telefone: "",
  email: "",
  tomadorNome: "",
  tomadorCpfCnpj: "",
  tomadorEndereco: "",
  servicoDescricao: "",
  servicoValor: "",
  servicoData: new Date().toISOString().slice(0, 10),
  reciboNumero: defaultReciboNumero(),
};

function formatPrice(price: number): string {
  return `R$ ${price.toFixed(2).replace(".", ",")}`;
}

export default function GeradorReciboClient({
  crossSells,
}: GeradorReciboClientProps) {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product: "gerador-recibo",
          form_nome: form.nome,
          form_cnpj: form.cnpj,
          form_endereco: form.endereco,
          form_telefone: form.telefone,
          form_email: form.email,
          form_tomador_nome: form.tomadorNome,
          form_tomador_cpfcnpj: form.tomadorCpfCnpj,
          form_tomador_endereco: form.tomadorEndereco,
          form_servico_descricao: form.servicoDescricao,
          form_servico_valor: form.servicoValor,
          form_servico_data: form.servicoData,
          form_recibo_numero: form.reciboNumero,
        }),
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
    } catch {
      setError("Erro ao processar pagamento. Tente novamente.");
      setLoading(false);
    }
  };

  // Preview calculation
  const valorPreview = (() => {
    if (!form.servicoValor) return null;
    const clean = form.servicoValor.replace(/[^\d,.]/g, "");
    let num: number;
    if (clean.includes(",")) {
      num = parseFloat(clean.replace(/\./g, "").replace(",", "."));
    } else if (/^\d{1,3}(\.\d{3})+$/.test(clean)) {
      num = parseFloat(clean.replace(/\./g, ""));
    } else {
      num = parseFloat(clean);
    }
    if (isNaN(num)) return null;
    return num.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  })();

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Hero */}
      <section className="text-center py-10 bg-gradient-to-r from-emerald-50 dark:from-emerald-950/40 to-teal-50 dark:to-teal-950/40 rounded-lg p-8 border border-emerald-200 dark:border-emerald-800">
        <div className="inline-block bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
          🧾 Gerador Interativo
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Gerador de Recibo MEI{" "}
          <span className="text-emerald-600 dark:text-emerald-400">🧾</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
          Preencha os dados do prestador, tomador e serviço. Gere seu recibo de
          prestação de serviço profissional em PDF, com valor por extenso.
        </p>
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          R$ 39,90
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Pagamento único · PDF preenchido automaticamente · Download imediato
        </p>
        <div className="flex gap-3 justify-center flex-wrap text-sm">
          <span className="bg-white dark:bg-gray-900 border border-border text-foreground px-3 py-1 rounded-full">
            🔒 Pagamento seguro via Stripe
          </span>
          <span className="bg-white dark:bg-gray-900 border border-accent text-accent px-3 py-1 rounded-full">
            📥 Download imediato do PDF
          </span>
          <span className="bg-white dark:bg-gray-900 border border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full">
            📝 Preenchimento automático
          </span>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Preencha os dados do seu Recibo
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* PRESTADOR */}
          <fieldset className="border dark:border-gray-700 rounded-lg p-6">
            <legend className="text-lg font-bold text-gray-900 dark:text-gray-100 px-2">
              🧑‍💼 Dados do Prestador (MEI)
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nome completo *
                </label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => updateField("nome", e.target.value)}
                  className="w-full border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  CPF/CNPJ *
                </label>
                <input
                  type="text"
                  required
                  value={form.cnpj}
                  onChange={(e) => updateField("cnpj", e.target.value)}
                  className="w-full border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="XXX.XXX.XXX-XX ou XX.XXX.XXX/0001-XX"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Endereço
                </label>
                <input
                  type="text"
                  value={form.endereco}
                  onChange={(e) => updateField("endereco", e.target.value)}
                  className="w-full border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Rua, nº, bairro, cidade - UF"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  value={form.telefone}
                  onChange={(e) => updateField("telefone", e.target.value)}
                  className="w-full border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
          </fieldset>

          {/* TOMADOR */}
          <fieldset className="border dark:border-gray-700 rounded-lg p-6">
            <legend className="text-lg font-bold text-gray-900 dark:text-gray-100 px-2">
              🏢 Dados do Tomador (Cliente)
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nome / Razão Social *
                </label>
                <input
                  type="text"
                  required
                  value={form.tomadorNome}
                  onChange={(e) => updateField("tomadorNome", e.target.value)}
                  className="w-full border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Nome do cliente"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  CPF/CNPJ *
                </label>
                <input
                  type="text"
                  required
                  value={form.tomadorCpfCnpj}
                  onChange={(e) =>
                    updateField("tomadorCpfCnpj", e.target.value)
                  }
                  className="w-full border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="XXX.XXX.XXX-XX ou XX.XXX.XXX/0001-XX"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Endereço
                </label>
                <input
                  type="text"
                  value={form.tomadorEndereco}
                  onChange={(e) =>
                    updateField("tomadorEndereco", e.target.value)
                  }
                  className="w-full border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Rua, nº, bairro, cidade - UF"
                />
              </div>
            </div>
          </fieldset>

          {/* SERVIÇO */}
          <fieldset className="border dark:border-gray-700 rounded-lg p-6">
            <legend className="text-lg font-bold text-gray-900 dark:text-gray-100 px-2">
              🔧 Dados do Serviço
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Descrição do Serviço *
                </label>
                <textarea
                  required
                  rows={3}
                  value={form.servicoDescricao}
                  onChange={(e) =>
                    updateField("servicoDescricao", e.target.value)
                  }
                  className="w-full border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Descreva o serviço prestado. Ex: Desenvolvimento de website institucional com 5 páginas"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Valor do Serviço (R$) *
                </label>
                <input
                  type="text"
                  required
                  value={form.servicoValor}
                  onChange={(e) =>
                    updateField("servicoValor", e.target.value)
                  }
                  className="w-full border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="1.500,00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Data do Serviço
                </label>
                <input
                  type="date"
                  value={form.servicoData}
                  onChange={(e) =>
                    updateField("servicoData", e.target.value)
                  }
                  className="w-full border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Número do Recibo
                </label>
                <input
                  type="text"
                  value={form.reciboNumero}
                  onChange={(e) =>
                    updateField("reciboNumero", e.target.value)
                  }
                  className="w-full border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Gerado automaticamente — edite se quiser"
                />
              </div>
            </div>
          </fieldset>

          {/* Legal Disclaimer */}
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">
              ⚠️ Aviso Legal
            </p>
            <p className="text-sm text-amber-700 dark:text-amber-400">
              Este recibo é um documento particular e não substitui nota
              fiscal. A emissão de NFS-e deve ser feita no portal da prefeitura
              quando aplicável.
            </p>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-600 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-lg hover:shadow-xl"
            >
              {loading
                ? "Redirecionando para pagamento..."
                : "Gerar Recibo — R$ 39,90"}
            </button>
            {error && (
              <p className="text-red-600 dark:text-red-400 mt-3 text-sm">
                {error}
              </p>
            )}
          </div>
        </form>
      </section>

      {/* Preview */}
      <section className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          👁️ Pré-visualização
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
          Veja como seu recibo ficará no PDF. Preencha os campos acima para
          atualizar a pré-visualização.
        </p>

        <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border-b dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-right">
              Kit MEI - Oraculo do MEI
            </p>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 text-center">
              RECIBO DE PRESTAÇÃO DE SERVIÇOS
            </h3>
            <p className="text-xs italic text-gray-500 dark:text-gray-400 text-center mt-1">
              Documento particular — não substitui nota fiscal
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-right mt-2">
              <strong>Recibo Nº: {form.reciboNumero || "—"}</strong>
              {" · Data: "}
              {form.servicoData
                ? new Date(form.servicoData + "T00:00:00").toLocaleDateString(
                    "pt-BR"
                  )
                : "—"}
            </p>
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-2 divide-x dark:divide-gray-700">
            <div className="p-4">
              <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-2">
                PRESTADOR DE SERVIÇOS
              </h4>
              <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <p>
                  <strong>Nome:</strong> {form.nome || "—"}
                </p>
                <p>
                  <strong>CPF/CNPJ:</strong> {form.cnpj || "—"}
                </p>
                <p>
                  <strong>Endereço:</strong> {form.endereco || "—"}
                </p>
                <p>
                  <strong>Telefone:</strong> {form.telefone || "—"}
                </p>
                <p>
                  <strong>E-mail:</strong> {form.email || "—"}
                </p>
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-2">
                TOMADOR DE SERVIÇOS
              </h4>
              <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <p>
                  <strong>Nome:</strong> {form.tomadorNome || "—"}
                </p>
                <p>
                  <strong>CPF/CNPJ:</strong> {form.tomadorCpfCnpj || "—"}
                </p>
                <p>
                  <strong>Endereço:</strong> {form.tomadorEndereco || "—"}
                </p>
              </div>
            </div>
          </div>

          {/* Services table */}
          <div className="px-6 py-4 border-t dark:border-gray-700">
            <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 mb-2">
              DISCRIMINAÇÃO DOS SERVIÇOS
            </h4>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b dark:border-gray-700 text-left">
                  <th className="py-1 font-bold text-gray-700 dark:text-gray-300">
                    Descrição do Serviço
                  </th>
                  <th className="py-1 font-bold text-gray-700 dark:text-gray-300 text-right w-32">
                    Valor (R$)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1 text-gray-600 dark:text-gray-400">
                    {form.servicoDescricao || "—"}
                  </td>
                  <td className="py-1 text-right font-bold text-gray-900 dark:text-gray-100">
                    {valorPreview ? `R$ ${valorPreview}` : "—"}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-right mt-2 text-sm font-bold text-gray-900 dark:text-gray-100">
              VALOR TOTAL: {valorPreview ? `R$ ${valorPreview}` : "—"}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              O PDF inclui o valor por extenso e a declaração de quitação
              (&quot;Recebi(emos) de ... a importância de ...&quot;).
            </p>
          </div>

          {/* Footer info */}
          <div className="px-6 py-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <em>
                • Este recibo é um documento particular e não substitui nota
                fiscal
                <br />• A emissão de NFS-e deve ser feita no portal da
                prefeitura quando aplicável
                <br />• Consulte seu contador sobre obrigações fiscais
                específicas
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Como funciona
        </h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100">
                Preencha os dados
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Informe os dados do prestador (MEI), tomador (cliente) e do
                serviço prestado.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100">
                Pague com segurança
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Pagamento único de R$39,90 via cartão de crédito processado
                pelo Stripe.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100">
                Receba o PDF preenchido
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Após a confirmação do pagamento, você recebe o PDF do Recibo
                MEI com todos os dados preenchidos, incluindo o valor por
                extenso.
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
              className="border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-4 hover:shadow-lg transition hover:border-emerald-400 dark:hover:border-emerald-600 no-underline"
            >
              <div className="text-2xl mb-2">{cs.emoji}</div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">
                {cs.name}
              </h3>
              <p className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                {formatPrice(cs.price)}
              </p>
            </a>
          ))}
        </div>
        <div className="mt-6 text-center">
          <a
            href="/kit-mei"
            className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline text-sm"
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
          <details className="border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
              Este recibo substitui a nota fiscal?
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Não. O recibo é um documento particular, legítimo como
              comprovante de pagamento entre as partes, mas não substitui a
              nota fiscal. Quando a NFS-e for exigida, a emissão deve ser feita
              no portal da prefeitura do seu município.
            </p>
          </details>
          <details className="border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
              Posso editar o PDF depois de gerado?
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              O PDF gerado contém os dados que você preencheu no formulário.
              Não é editável após a geração, mas você pode gerar um novo PDF
              corrigindo os dados no formulário.
            </p>
          </details>
          <details className="border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
              Como recebo o arquivo?
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              Após o pagamento confirmado, você é redirecionado para a página
              de sucesso onde pode baixar o PDF imediatamente. Também enviamos
              o link por e-mail.
            </p>
          </details>
          <details className="border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-4">
            <summary className="font-semibold text-gray-900 dark:text-gray-100 cursor-pointer">
              Posso pagar com PIX?
            </summary>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              No momento, aceitamos apenas cartão de crédito via Stripe. Em
              breve adicionaremos PIX como opção de pagamento.
            </p>
          </details>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para gerar seu Recibo MEI?
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Preencha o formulário acima e receba seu PDF preenchido em minutos
        </p>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-white text-emerald-700 px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 disabled:opacity-50 transition"
        >
          {loading ? "Redirecionando..." : "Gerar Recibo — R$ 39,90"}
        </button>
      </section>
    </div>
  );
}
