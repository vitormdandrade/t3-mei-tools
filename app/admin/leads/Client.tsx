'use client'

import { useState, useCallback } from 'react'

interface Lead {
  id: number
  site: string
  lead_type: string
  name: string
  email: string
  phone: string
  data: Record<string, any>
  status: string
  created_at: string
}

const REVENUE_LABELS: Record<string, string> = {
  'ate-5k': 'Até R$ 5.000',
  '5k-10k': 'R$ 5k-10k',
  '10k-20k': 'R$ 10k-20k',
  '20k-50k': 'R$ 20k-50k',
  'acima-50k': 'Acima R$ 50k',
}

const SOURCE_LABELS: Record<string, string> = {
  das: 'Calculadora DAS',
  faturamento: 'Calculadora Faturamento',
  'mei-vs-me': 'MEI vs ME',
  inss: 'Calculadora INSS',
  unknown: 'Desconhecido',
}

const STATUS_LABELS: Record<string, string> = {
  new: 'Novo',
  contacted: 'Contatado',
  qualified: 'Qualificado',
  converted: 'Convertido',
  rejected: 'Rejeitado',
}

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  contacted: 'bg-accent-soft text-accent  ',
  qualified: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
  converted: 'bg-accent-soft text-success  ',
  rejected: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
}

export default function AdminLeadsPage() {
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const fetchLeads = useCallback(async (token: string) => {
    setLoading(true)
    setError('')

    try {
      const res = await fetch(`/api/leads?token=${encodeURIComponent(token)}`)

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

      setLeads(data.leads || [])
      setAuthenticated(true)
    } catch (err) {
      setError('Erro ao carregar leads.')
    } finally {
      setLoading(false)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    fetchLeads(password)
  }

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const exportCSV = () => {
    const headers = ['Nome', 'E-mail', 'Telefone', 'CNPJ', 'Cidade', 'Faturamento', 'Fonte', 'Status', 'Data']
    const rows = leads.map((l) => {
      const d = l.data || {}
      return [
        l.name,
        l.email,
        l.phone,
        d.cnpj || '',
        d.city || '',
        REVENUE_LABELS[d.revenue_range || ''] || d.revenue_range || '',
        SOURCE_LABELS[l.lead_type] || l.lead_type,
        STATUS_LABELS[l.status] || l.status,
        new Date(l.created_at).toLocaleDateString('pt-BR'),
      ]
    })

    const csv = [headers, ...rows].map((r) => r.join(',')).join('\n')
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `leads-mei-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!authenticated) {
    return (
      <div className="max-w-md mx-auto mt-20">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Admin - Leads</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Digite a senha para acessar os leads capturados.</p>

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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Leads Capturados</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            {leads.length} lead{leads.length !== 1 ? 's' : ''} encontrado{leads.length !== 1 ? 's' : ''}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={exportCSV}
            className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover transition"
          >
            📥 Exportar CSV
          </button>
          <button
            onClick={() => fetchLeads(password)}
            className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover transition"
          >
            🔄 Atualizar
          </button>
        </div>
      </div>

      {leads.length === 0 ? (
        <div className="text-center py-16 text-gray-500 dark:text-gray-400">
          Nenhum lead capturado ainda.
        </div>
      ) : (
        <div className="overflow-x-auto border dark:border-gray-700 rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-700">
              <tr>
                <th className="px-4 py-3 text-left font-bold">Nome</th>
                <th className="px-4 py-3 text-left font-bold">E-mail</th>
                <th className="px-4 py-3 text-left font-bold">Telefone</th>
                <th className="px-4 py-3 text-left font-bold">Cidade</th>
                <th className="px-4 py-3 text-left font-bold">CNPJ</th>
                <th className="px-4 py-3 text-left font-bold">Faturamento</th>
                <th className="px-4 py-3 text-left font-bold">Fonte</th>
                <th className="px-4 py-3 text-left font-bold">Status</th>
                <th className="px-4 py-3 text-left font-bold">Data</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => {
                const d = lead.data || {}
                return (
                  <tr key={lead.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="px-4 py-3 font-medium">{lead.name}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => copyToClipboard(lead.email, lead.id)}
                        className="text-accent hover:underline cursor-pointer"
                        title="Copiar e-mail"
                      >
                        {lead.email}
                        {copiedId === lead.id && (
                          <span className="ml-1 text-accent text-xs">✓</span>
                        )}
                      </button>
                    </td>
                    <td className="px-4 py-3">{lead.phone}</td>
                    <td className="px-4 py-3">{d.city || '-'}</td>
                    <td className="px-4 py-3 font-mono text-xs">
                      {d.cnpj || '-'}
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-accent-soft text-accent px-2 py-1 rounded-full text-xs">
                        {REVENUE_LABELS[d.revenue_range || ''] || d.revenue_range || '-'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full text-xs">
                        {SOURCE_LABELS[lead.lead_type] || lead.lead_type}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[lead.status] || 'bg-gray-100 text-gray-800'}`}>
                        {STATUS_LABELS[lead.status] || lead.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
                      {new Date(lead.created_at).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
