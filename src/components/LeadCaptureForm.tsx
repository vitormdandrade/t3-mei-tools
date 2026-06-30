'use client'

import { useState, type FormEvent } from 'react'
import { supabase } from '@/lib/supabase'
import { track } from '@vercel/analytics'

interface LeadCaptureFormProps {
  /** Which calculator page this form is on (for analytics) */
  source: 'das' | 'faturamento' | 'mei-vs-me' | 'inss'
  /** Optional contextual message above the form */
  contextMessage?: string
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
}: LeadCaptureFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [city, setCity] = useState('')
  const [revenueRange, setRevenueRange] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

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
        const { error } = await supabase.from('leads').insert([payload])

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

  if (status === 'success') {
    return (
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-6 text-white text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold mb-2">Solicitação enviada com sucesso!</h3>
        <p className="text-green-100 text-sm">
          Em breve você receberá orçamentos de contadores especializados em MEI no seu e-mail.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
      <h3 className="text-xl font-bold mb-2">
        📋 Receba orçamento de 3 contadores para seu MEI
      </h3>
      <p className="text-blue-100 text-sm mb-5">
        Preencha o formulário e receba propostas de contadores verificados.
        Sem compromisso, gratuito.
      </p>

      {contextMessage && (
        <p className="text-blue-200 text-xs mb-4 italic">💡 {contextMessage}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Nome completo *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2.5 rounded-lg bg-white text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="email"
            placeholder="E-mail *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2.5 rounded-lg bg-white text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="tel"
            placeholder="WhatsApp / Telefone *"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            required
            className="w-full px-3 py-2.5 rounded-lg bg-white text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="text"
            placeholder="CNPJ (opcional)"
            value={cnpj}
            onChange={(e) => setCnpj(formatCnpj(e.target.value))}
            className="w-full px-3 py-2.5 rounded-lg bg-white text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-amber-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg bg-white text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-amber-400"
          />
          <select
            value={revenueRange}
            onChange={(e) => setRevenueRange(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-amber-400"
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
          className="w-full bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
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

        <p className="text-xs text-blue-200 text-center mt-2">
          Seus dados estão seguros. Não compartilhamos com terceiros sem sua autorização.
        </p>
      </form>
    </div>
  )
}
