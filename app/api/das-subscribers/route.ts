import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url)
    const token = url.searchParams.get('token')

    const adminPassword = process.env.ADMIN_PASSWORD || 'meitools2026'
    if (token !== adminPassword) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = getSupabaseAdmin()

    const { data, error } = await supabase
      .from('das_subscribers')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200)

    if (error) {
      throw new Error(error.message)
    }

    return NextResponse.json({ subscribers: data })
  } catch (error: any) {
    console.error('DAS subscribers fetch error:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar assinantes.' },
      { status: 500 }
    )
  }
}
