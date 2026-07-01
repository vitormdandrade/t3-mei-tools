'use client'

import { useState, type FormEvent } from 'react'
import { supabase } from '@/lib/supabase'
import { track } from '@vercel/analytics'

interface LeadCaptureFormProps {
  /** Which calculator page this form is on (for analytics) */
  source: 'das' | 'faturamento' | 'mei-vs-me' | 'inss'
  /** Optional contextual message above the form */
  contextMessage?: string
  /** Controls whether the form starts visible or dismissed */
  initiallyDismissed?: boolean
}

const REVENUE_RANGES = [
  { value: '', label: 'Selecione...' },
  { value: 'ate-5k', label: 'Até R$ 5.000/mês' },
  { value: '5k-10k', label: 'R$ 5.000 a R$ 10.000/mês' },
  { value: '10k-20k', label: 'R$ 10.000 a R$ 20.000/mês' },
  { value: '20k-50k', label: 'R$ 20.000 a R$ 50.000/mês' },
  { value: 'acima-50k', label: 'Acima de R$ 50.000/mês' },
]

export default function LeadCaptureForm({
  source,
  contextMessage,
  initiallyDismissed = false,
}: LeadCaptureFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [city, setCity] = useState('')
  const [revenueRange, setRevenueRange] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [dismissed, setDismissed] = useState(initiallyDismissed)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const payload = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.replace(/\D/g, ''),
        cnpj: cnpj.replace(/\D/g, '') || null,
        city: city.trim() || null,
        revenue_range: revenueRange || null,
        source,
        user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
      }

      if (!supabase) {
        // Fallback: post to API route
        const res = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })

        if (!res.ok) {
          const data = await res.json()
          throw new Error(data.error || 'Erro ao enviar')
        }
      } else {
        const { error } = await supabase.from('leads').insert({
          site: 'oraculo-do-mei',
          lead_type: source,
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          data: {
            cnpj: payload.cnpj,
            city: payload.city,
            revenue_range: payload.revenue_range,
            source: payload.source,
            user_agent: payload.user_agent,
          },
        })

        if (error) {
          throw new Error(error.message)
        }
      }

      track('lead_captured', { source })
      setStatus('success')
    } catch (err: any) {
      console.error('Lead capture error:', err)
      setErrorMsg(err.message || 'Erro ao enviar. Tente novamente.')
      setStatus('error')
    }
  }

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 2) return digits
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  const formatCnpj = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 14)
    if (digits.length <= 2) return digits
    if (digits.length <= 5) return `${digits.slice(0, 2)}.${digits.slice(2)}`
    if (digits.length <= 8)
      return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`
    if (digits.length <= 12)
      return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8)}`
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12)}`
  }

  if (dismissed) {
    return null
  }

  if (status === 'success') {
    return (
      <div
        className="rounded-2xl p-8 text-center relative"
        style={{ background: 'linear-gradient(135deg, var(--brand-sage) 0%, var(--brand-sage-dark) 100%)', color: '#ffffff' }}
      >
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-2xl font-bold mb-2">Solicitação enviada com sucesso!</h3>
        <p className="text-base" style={{ color: 'rgba(255,255,255,0.85)' }}>
          Em breve você receberá orçamentos de contadores especializados em MEI no seu e-mail.
        </p>
      </div>
    )
  }

  return (
    <div
      className="rounded-2xl p-6 sm:p-8 relative"
      style={{ background: 'linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-navy-light) 100%)', color: '#ffffff' }}
    >
      {/* Dismiss button */}
      <button
        onClick={() => setDismissed(true)}
        className="absolute top-3 right-3 text-white/50 hover:text-white/80 transition p-1 rounded-full hover:bg-white/10"
        aria-label="Fechar formulário"
        title="Fechar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Merriweather', Georgia, serif" }}>
        📋 Receba orçamento de 3 contadores para seu MEI
      </h3>
      <p className="text-base mb-5" style={{ color: '#c8d2dc' }}>
        Preencha o formulário e receba propostas de contadores verificados.
        Sem compromisso, gratuito.
      </p>

      {contextMessage && (
        <p className="text-sm mb-4 italic" style={{ color: '#a3b1c0' }}>💡 {contextMessage}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Nome completo *"
            aria-label="Nome completo"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3.5 py-2.5 rounded-lg bg-white text-[#1a2744] placeholder-gray-500 border-0 outline-none focus:ring-2 focus:ring-[#fbbf24]"
          />
          <input
            type="email"
            placeholder="E-mail *"
            aria-label="E-mail"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3.5 py-2.5 rounded-lg bg-white text-[#1a2744] placeholder-gray-500 border-0 outline-none focus:ring-2 focus:ring-[#fbbf24]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="tel"
            placeholder="WhatsApp / Telefone *"
            aria-label="WhatsApp ou telefone"
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            required
            className="w-full px-3.5 py-2.5 rounded-lg bg-white text-[#1a2744] placeholder-gray-500 border-0 outline-none focus:ring-2 focus:ring-[#fbbf24]"
          />
          <input
            type="text"
            placeholder="CNPJ (opcional)"
            aria-label="CNPJ (opcional)"
            inputMode="numeric"
            value={cnpj}
            onChange={(e) => setCnpj(formatCnpj(e.target.value))}
            className="w-full px-3.5 py-2.5 rounded-lg bg-white text-[#1a2744] placeholder-gray-500 border-0 outline-none focus:ring-2 focus:ring-[#fbbf24]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Cidade"
            aria-label="Cidade"
            autoComplete="address-level2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg bg-white text-[#1a2744] placeholder-gray-500 border-0 outline-none focus:ring-2 focus:ring-[#fbbf24]"
          />
          <select
            value={revenueRange}
            aria-label="Faixa de faturamento mensal"
            onChange={(e) => setRevenueRange(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg bg-white text-[#1a2744] border-0 outline-none focus:ring-2 focus:ring-[#fbbf24]"
          >
            {REVENUE_RANGES.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>

        {errorMsg && (
          <div className="bg-red-500/20 border border-red-400 rounded-lg p-3 text-sm">
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-gold btn-block w-full py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Enviando...
            </span>
          ) : (
            'Quero receber orçamentos grátis →'
          )}
        </button>

        <p className="text-xs text-center mt-2" style={{ color: '#a3b1c0' }}>
          Seus dados estão seguros. Não compartilhamos com terceiros sem sua autorização.
        </p>
      </form>
    </div>
  )
}
