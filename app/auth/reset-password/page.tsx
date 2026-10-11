'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [updated, setUpdated] = useState(false)

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setMessage('')

    if (password.length < 8) {
      setError('Your password must contain at least 8 characters.')
      return
    }

    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }

    setBusy(true)

    try {
      const sb = createClient()
      const { data: { user } } = await sb.auth.getUser()

      if (!user) {
        throw new Error('Your reset session has expired. Request a new password reset link.')
      }

      const { error } = await sb.auth.updateUser({ password })
      if (error) throw error

      await sb.auth.signOut()
      setUpdated(true)
      setMessage('Password changed successfully. Sign in with your new password.')
      setPassword('')
      setConfirm('')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not update your password.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F8F3] px-4 py-10 text-[#103D2B]">
      <section className="mx-auto mt-8 max-w-md rounded-3xl border border-[#E0E9DD] bg-white p-6 shadow-sm sm:mt-16 sm:p-8">
        <Link href="/" className="font-bold">
          🌿 ClimateLens <span className="text-[#679344]">AFRICA</span>
        </Link>

        <h1 className="mt-7 text-3xl font-bold">Choose a new password</h1>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Use at least 8 characters and keep your password private.
        </p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <label className="block text-sm font-semibold">
            New password
            <input
              required
              minLength={8}
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="mt-2 w-full rounded-xl border border-gray-200 p-3 font-normal outline-none focus:border-[#206344]"
            />
          </label>

          <label className="block text-sm font-semibold">
            Confirm new password
            <input
              required
              minLength={8}
              type="password"
              autoComplete="new-password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Enter password again"
              className="mt-2 w-full rounded-xl border border-gray-200 p-3 font-normal outline-none focus:border-[#206344]"
            />
          </label>

          {error && (
            <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
              {error}
            </p>
          )}

          {message && (
            <p role="status" className="rounded-xl bg-green-50 p-3 text-sm text-green-800">
              {message}
            </p>
          )}

          {!updated && (
            <button
              disabled={busy}
              className="w-full rounded-xl bg-[#206344] p-3.5 font-semibold text-white disabled:opacity-60"
            >
              {busy ? 'Updating…' : 'Update password'}
            </button>
          )}

          {updated && (
            <Link
              href="/auth"
              className="block rounded-xl bg-[#206344] p-3.5 text-center font-semibold text-white"
            >
              Go to sign in
            </Link>
          )}
        </form>

        {!updated && (
          <Link href="/auth" className="mt-5 block text-center text-sm text-[#206344]">
            Return to sign in
          </Link>
        )}
      </section>
    </main>
  )
}
