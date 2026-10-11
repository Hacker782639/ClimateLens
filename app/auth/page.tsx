'use client'

import { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

type Mode = 'signup' | 'login' | 'reset'

export default function AuthPage() {
  const searchParams = useSearchParams()
  const nextParam = searchParams.get('next')
  const safeNext =
    nextParam &&
    nextParam.startsWith('/') &&
    !nextParam.startsWith('//') &&
    !nextParam.startsWith('/\\')
      ? nextParam
      : '/profile'

  const [mode, setMode] = useState<Mode>(nextParam ? 'login' : 'signup')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (searchParams.has('error')) {
      setError('Email confirmation failed. Request a new confirmation email.')
    }
  }, [searchParams])

  function changeMode(value: Mode) {
    setMode(value)
    setError('')
    setMessage('')
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setBusy(true)
    setError('')
    setMessage('')

    try {
      const sb = createClient()

      if (mode === 'signup') {
        const { data, error } = await sb.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: { display_name: name.trim() },
            emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(safeNext)}`,
          },
        })

        if (error) throw error

        if (data.session) {
          window.location.replace(safeNext)
          return
        }

        setMessage(
          'Account created. Check your email for the confirmation link. After confirming, return here and sign in.'
        )
        setMode('login')
      } else if (mode === 'login') {
        const { error } = await sb.auth.signInWithPassword({
          email: email.trim(),
          password,
        })

        if (error) throw error

        window.location.replace(safeNext)
        return
      } else {
        const { error } = await sb.auth.resetPasswordForEmail(email.trim(), {
          redirectTo: `${window.location.origin}/auth/reset-password`,
        })

        if (error) throw error

        setMessage(
          'If this email is registered, a password reset link will arrive shortly.'
        )
      }
    } catch (e) {
      setError(
        e instanceof Error ? e.message : 'Something went wrong. Please try again.'
      )
    } finally {
      setBusy(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F8F3] px-4 py-8 text-[#103D2B] sm:py-12">
      <div className="mx-auto max-w-md">
        <Link href="/" className="mb-7 inline-flex items-center gap-2 font-bold">
          <span className="text-2xl">🌿</span>
          <span>ClimateLens <span className="text-[#679344]">AFRICA</span></span>
        </Link>

        <section className="rounded-3xl border border-[#E0E9DD] bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#679344]">
            Climate knowledge. Real action.
          </p>

          <h1 className="text-3xl font-bold tracking-tight">
            {mode === 'signup'
              ? 'Create your account'
              : mode === 'login'
                ? 'Welcome back'
                : 'Reset your password'}
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            Sign in to save your projects and record environmental activities.
          </p>

          <div className="my-6 grid grid-cols-3 gap-1 rounded-xl bg-[#F1F5EF] p-1">
            {(['signup', 'login', 'reset'] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => changeMode(item)}
                className={`rounded-lg px-2 py-3 text-sm font-semibold transition ${
                  mode === item
                    ? 'bg-white text-[#206344] shadow-sm'
                    : 'text-gray-500 hover:text-[#206344]'
                }`}
              >
                {item === 'signup' ? 'Sign up' : item === 'login' ? 'Sign in' : 'Reset'}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="space-y-4">
            {mode === 'signup' && (
              <label className="block text-sm font-semibold">
                Full name
                <input
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none focus:border-[#206344] focus:ring-2 focus:ring-[#206344]/10"
                />
              </label>
            )}

            <label className="block text-sm font-semibold">
              Email address
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none focus:border-[#206344] focus:ring-2 focus:ring-[#206344]/10"
              />
            </label>

            {mode !== 'reset' && (
              <label className="block text-sm font-semibold">
                Password
                <input
                  required
                  type="password"
                  minLength={mode === 'signup' ? 8 : undefined}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                  placeholder={mode === 'signup' ? 'At least 8 characters' : 'Enter your password'}
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-normal outline-none focus:border-[#206344] focus:ring-2 focus:ring-[#206344]/10"
                />
              </label>
            )}

            {error && (
              <p role="alert" className="rounded-xl border border-red-100 bg-red-50 p-3 text-sm text-red-700">
                {error}
              </p>
            )}

            {message && (
              <p role="status" className="rounded-xl border border-green-100 bg-green-50 p-3 text-sm leading-6 text-green-800">
                {message}
              </p>
            )}

            <button
              disabled={busy}
              className="w-full rounded-xl bg-[#206344] px-4 py-3.5 font-semibold text-white transition hover:bg-[#174B32] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {busy
                ? 'Please wait…'
                : mode === 'signup'
                  ? 'Create account'
                  : mode === 'login'
                    ? 'Sign in'
                    : 'Send reset link'}
            </button>
          </form>

          {mode === 'login' && (
            <button
              type="button"
              onClick={() => changeMode('reset')}
              className="mt-4 w-full text-center text-sm font-medium text-[#206344] hover:underline"
            >
              Forgot your password?
            </button>
          )}

          <p className="mt-6 text-center text-sm text-gray-600">
            {mode === 'signup' ? 'Already have an account?' : 'New to ClimateLens Africa?'}{' '}
            <button
              type="button"
              onClick={() => changeMode(mode === 'signup' ? 'login' : 'signup')}
              className="font-semibold text-[#206344] hover:underline"
            >
              {mode === 'signup' ? 'Sign in' : 'Create account'}
            </button>
          </p>
        </section>

        <p className="mt-5 text-center text-sm">
          <Link href="/" className="text-[#206344] hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  )
}
