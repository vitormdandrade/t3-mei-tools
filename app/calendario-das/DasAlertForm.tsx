'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function DasAlertForm() {
  const searchParams = useSearchParams()
  const subscribed = searchParams.get('subscribed')
  const trial = searchParams.get('trial')

  const [phone, setPhone] = useState('')
  const [dueDay, setDueDay] = useState('20')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const formatPhone = (value: string) => {
    // Strip non-digits
    const digits = value.replace(/\D/g, '')

    // Auto-detect Brazil (+55)
    if (digits.length <= 2) {
      return digits ? `+${digits}` : ''
    }
    if (digits.length <= 4) {
      return `+${digits.slice(0, 2)} ${digits.slice(2)}`
    }
    if (digits.length <= 9) {
      return `+${digits.slice(0, 2)} ${digits.slice(2, 4)} ${digits.slice(4)}`
    }
    // Full format: +55 XX XXXXX-XXXX
    return `+${digits.slice(0, 2)} ${digits.slice(2, 4)} ${digits.slice(4, 9)}-${digits.slice(9, 13)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Allow user to type with or without formatting
    if (value.startsWith('+') || /^\d+$/.test(value)) {
      setPhone(formatPhone(value))
    } else {
      setPhone(formatPhone(value.replace(/[^\d+]/g, '')))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/das-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: phone,
          das_due_day: parseInt(dueDay, 10),
        }),
      })

      const data = await res.json()

      if (data.error) {
        setError(data.error)
        setLoading(false)
        return
      }

      if (data.url) {
        window.location.href = data.url
      } else {
        setError('Erro ao redirecionar para o checkout.')
        setLoading(false)
      }
    } catch (err) {
      setError('Erro de conexão. Tente novamente.')
      setLoading(false)
    }
  }

  // Success state after Stripe redirect
  if (subscribed === 'true') {
    return (
      <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-6 mb-8 text-white shadow-lg">
        <div className="text-center">
          <div className="text-4xl mb-3">🎉</div>
          <h2 className="text-2xl font-bold mb-2">Inscrição confirmada!</h2>
          <p className="text-white/90 text-sm mb-2">
            Você receberá lembretes via WhatsApp 3 dias antes do vencimento do seu DAS.
          </p>
          {trial === 'true' && (
            <p className="bg-white/20 rounded-lg px-4 py-2 text-sm inline-block">
              ✅ <strong>2 meses grátis</strong> ativados. Depois, R$4,90/mês.
            </p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div
      id="das-alert"
      className="bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] rounded-xl p-6 mb-8 text-white shadow-lg"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">
            🔔 Alerta de Vencimento DAS no WhatsApp
          </h2>
          <p className="text-white/90 text-sm mb-3">
            Receba um lembrete automático no WhatsApp <strong>3 dias antes</strong> do
            vencimento do seu DAS MEI. Nunca mais pague com multa!
          </p>
          <ul className="text-white/80 text-sm space-y-1 mb-3">
            <li>✅ 2 meses grátis</li>
            <li>✅ Depois R$4,90/mês</li>
            <li>✅ Cancele quando quiser</li>
          </ul>
        </div>

        {/* Right: Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Phone input */}
            <div>
              <label
                htmlFor="das-phone"
                className="block text-sm font-semibold text-white/90 mb-1"
              >
                Seu WhatsApp
              </label>
              <input
                id="das-phone"
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="+55 11 99999-8888"
                className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white border-0 focus:ring-2 focus:ring-green-300 placeholder-gray-400"
                required
              />
            </div>

            {/* Due day selector */}
            <div>
              <label
                htmlFor="das-due-day"
                className="block text-sm font-semibold text-white/90 mb-1"
              >
                Seu DAS vence dia
              </label>
              <select
                id="das-due-day"
                value={dueDay}
                onChange={(e) => setDueDay(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white border-0 focus:ring-2 focus:ring-green-300"
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    Dia {day} de cada mês
                  </option>
                ))}
              </select>
              <p className="text-white/70 text-xs mt-1">
                A maioria dos MEIs vence dia 20. Confira no calendário acima.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-100 border border-red-300 rounded-lg p-3 text-sm text-red-800">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-[#1b4332] font-bold py-3 rounded-lg hover:bg-[#f5f2ea] transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Redirecionando...' : '🔔 Ativar Lembrete no WhatsApp'}
            </button>

            <p className="text-white/60 text-xs text-center">
              Pagamento seguro via Stripe. 2 meses grátis, depois R$4,90/mês.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
