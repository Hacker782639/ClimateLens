import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const next = url.searchParams.get('next')
  const destination =
    next && next.startsWith('/') && !next.startsWith('//') && !next.startsWith('/\\')
      ? next
      : '/profile'

  if (code) {
    const sb = await createClient()
    const { error } = await sb.auth.exchangeCodeForSession(code)

    if (!error) {
      return NextResponse.redirect(new URL(destination, url.origin))
    }
  }

  return NextResponse.redirect(
    new URL('/auth?error=confirmation_failed', url.origin)
  )
}
