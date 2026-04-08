'use client';

import { useState, useActionState } from 'react';
import { login } from '@/app/actions/auth';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function StaffLoginPage() {
  const [state, formAction, pending] = useActionState(login, undefined);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-20 px-4">
        <div className="max-w-xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-black uppercase text-center mb-16 tracking-wide">
            Staff Portal
          </h1>

          {/* Login Form */}
          <form action={formAction} className="space-y-6">
            {/* Error Message */}
            {state?.error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-sm text-center">
                {state.error}
              </div>
            )}

            {/* Username / Email */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Username or Email{' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                autoComplete="username"
                className="w-full bg-white text-black px-4 py-3 rounded-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#0096C7] focus:border-[#0096C7] transition-all text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Password{' '}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  className="w-full bg-white text-black px-4 py-3 pr-12 rounded-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#0096C7] focus:border-[#0096C7] transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 hover:text-black/70 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-white/30 bg-white/10 text-[#0096C7] focus:ring-[#0096C7]"
                />
                <span className="text-sm text-white/70">Remember Me</span>
              </label>
              <span
                className="text-sm text-[#0096C7] cursor-default"
                title="Contact your administrator"
              >
                Forgot password?
              </span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={pending}
              className="w-full bg-[#0096C7] hover:bg-[#0077A8] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-sm transition-colors duration-200 text-sm uppercase tracking-widest"
            >
              {pending ? 'Logging in...' : 'Login'}
            </button>

            {/* Register Link (decorative) */}
            <p className="text-center text-sm">
              <span
                className="text-[#0096C7] cursor-default"
                title="Contact your administrator"
              >
                Not a member yet? Register now.
              </span>
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
