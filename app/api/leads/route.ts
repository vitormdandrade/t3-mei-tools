import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { name, email, phone, cnpj, city, revenue_range, source, user_agent } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Nome, e-mail e telefone são obrigatórios.' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'E-mail inválido.' },
        { status: 400 }
      )
    }

    // Basic phone validation (minimum 10 digits after strip)
    if (phone.replace(/\D/g, '').length < 10) {
      return NextResponse.json(
        { error: 'Telefone inválido.' },
        { status: 400 }
      )
    }

    const supabase = getSupabaseAdmin()

    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.replace(/\D/g, ''),
          cnpj: cnpj ? cnpj.replace(/\D/g, '') : null,
          city: city ? city.trim() : null,
          revenue_range: revenue_range || null,
          source: source || 'unknown',
          user_agent: user_agent || req.headers.get('user-agent') || null,
        },
      ])
      .select('id')
      .single()

    return NextResponse.json({ success: true, id: data?.id }, { status: 201 })
  } catch (error: any) {
    console.error('Lead API error:', error)
    return NextResponse.json(
      { error: 'Erro interno ao processar lead.' },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest) {
  try {
    // Simple password check via query param or Authorization header
    const url = new URL(req.url)
    const token = url.searchParams.get('token')
    const authHeader = req.headers.get('authorization')

    const adminPassword = process.env.ADMIN_PASSWORD || 'meitools2026'

    const providedToken = token || (authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null)

    if (providedToken !== adminPassword) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = getSupabaseAdmin()

    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200)

    if (error) {
      throw new Error(error.message)
    }

    return NextResponse.json({ leads: data })
  } catch (error: any) {
    console.error('Leads fetch error:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar leads.' },
      { status: 500 }
    )
  }
}
