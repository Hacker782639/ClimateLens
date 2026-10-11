import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const protectedRoutes = [
  '/dashboard',
  '/profile',
  '/project-builder',
  '/actions',
  '/admin',
]

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    (
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
    )!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet: { name: string; value: string; options: any }[]) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value)
          })

          response = NextResponse.next({ request })

          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  const { data: { user }, error } = await supabase.auth.getUser()
  const path = request.nextUrl.pathname

  const isProtected = protectedRoutes.some(
    route => path === route || path.startsWith(`${route}/`)
  )

  if (isProtected && (error || !user)) {
    const loginUrl = new URL('/auth', request.url)
    loginUrl.searchParams.set('next', path + request.nextUrl.search)
    return NextResponse.redirect(loginUrl)
  }

  if (path === '/auth' && user && !request.nextUrl.searchParams.has('error')) {
    const next = request.nextUrl.searchParams.get('next') || '/profile'
    const safeNext =
      next.startsWith('/') &&
      !next.startsWith('//') &&
      !next.startsWith('/\\')
        ? next
        : '/profile'

    return NextResponse.redirect(new URL(safeNext, request.url))
  }

  return response
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/project-builder/:path*',
    '/actions/:path*',
    '/admin/:path*',
    '/auth',
  ],
}
