'use client'

import { useState } from 'react'

interface Subscriber {
  id: number
  phone: string
  das_due_day: number
  stripe_subscription_id: string | null
  subscription_status: string
  trial_ends_at: string | null
  created_at: string
}

const STATUS_LABELS: Record<string, string> = {
  trialing: 'Trial (2 meses grátis)',
  active: 'Ativo',
  past_due: 'Pagamento atrasado',
  canceled: 'Cancelado',
  unpaid: 'Não pago',
  incomplete: 'Incompleto',
  incomplete_expired: 'Expirado',
}

const STATUS_COLORS: Record<string, string> = {
  trialing: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  active: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  past_due: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  canceled: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
  unpaid: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
  incomplete: 'bg-gray-100 text-gray-800 dark:bg-gray-900/40 dark:text-gray-300',
  incomplete_expired: 'bg-gray-100 text-gray-800 dark:bg-gray-900/40 dark:text-gray-300',
}

export default function AdminDasSubscribersPage() {
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchSubscribers = async (token: string) => {
    setLoading(true)
    setError('')

    try {
      const res = await fetch(`/api/das-subscribers?token=${encodeURIComponent(token)}`)

      if (res.status === 401) {
        setError('Senha incorreta.')
        setAuthenticated(false)
        return
      }

      const data = await res.json()

      if (data.error) {
        setError(data.error)
        return
      }

      setSubscribers(data.subscribers || [])
      setAuthenticated(true)
    } catch (err) {
      setError('Erro ao carregar assinantes.')
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    fetchSubscribers(password)
  }

  const formatPhone = (phone: string) => {
    if (phone.length === 13) {
      return `+${phone.slice(0, 2)} (${phone.slice(2, 4)}) ${phone.slice(4, 9)}-${phone.slice(9)}`
    }
    return phone
  }

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return '-'
    return new Date(dateStr).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (!authenticated) {
    return (
      <div className="max-w-md mx-auto mt-20">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Admin — DAS Subscribers
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Digite a senha para acessar os assinantes do DAS Alert Bot.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-accent"
            autoFocus
          />
          {error && (
            <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-lg p-3 text-sm text-red-800 dark:text-red-300">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-white font-bold py-3 rounded-lg hover:bg-accent-hover transition disabled:opacity-50"
          >
            {loading ? 'Carregando...' : 'Acessar'}
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            DAS Alert Bot — Assinantes
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {subscribers.length} assinante{subscribers.length !== 1 ? 's' : ''} encontrado{subscribers.length !== 1 ? 's' : ''}
          </p>
        </div>
        <button
          onClick={() => fetchSubscribers(password)}
          className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover transition"
        >
          🔄 Atualizar
        </button>
      </div>

      {subscribers.length === 0 ? (
        <div className="text-center py-16 text-gray-500 dark:text-gray-400">
          Nenhum assinante encontrado.
        </div>
      ) : (
        <div className="overflow-x-auto border dark:border-gray-700 rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-700">
              <tr>
                <th className="px-4 py-3 text-left font-bold">ID</th>
                <th className="px-4 py-3 text-left font-bold">WhatsApp</th>
                <th className="px-4 py-3 text-left font-bold">Venc. DAS</th>
                <th className="px-4 py-3 text-left font-bold">Stripe Sub</th>
                <th className="px-4 py-3 text-left font-bold">Status</th>
                <th className="px-4 py-3 text-left font-bold">Fim Trial</th>
                <th className="px-4 py-3 text-left font-bold">Criado em</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((sub) => (
                <tr
                  key={sub.id}
                  className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <td className="px-4 py-3 font-mono text-xs">{sub.id}</td>
                  <td className="px-4 py-3 font-mono">{formatPhone(sub.phone)}</td>
                  <td className="px-4 py-3">
                    <span className="bg-accent-soft text-accent px-2 py-1 rounded-full text-xs font-semibold">
                      Dia {sub.das_due_day}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs">
                    {sub.stripe_subscription_id ? (
                      <span className="text-accent">
                        {sub.stripe_subscription_id.slice(0, 14)}...
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        STATUS_COLORS[sub.subscription_status] || 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {STATUS_LABELS[sub.subscription_status] || sub.subscription_status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                    {formatDate(sub.trial_ends_at)}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                    {formatDate(sub.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
