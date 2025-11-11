'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { User, Lock, Eye, EyeOff, Mail, Phone } from 'lucide-react'

export default function Home() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login API call
    setTimeout(() => {
      console.log('Login attempt:', { userId, password, rememberMe })
      // Redirect to dashboard
      router.push('/dashboard')
    }, 1000)
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-48 h-48 md:w-72 md:h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-0 -right-4 w-48 h-48 md:w-72 md:h-72 bg-accent-yellow/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-48 h-48 md:w-72 md:h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 sm:px-8 py-8 sm:py-10 text-center">
              <div className="inline-block">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                  <span className="text-white">Ad1</span>
                  <span className="text-accent-yellow">Gate</span>
                </h1>
                <div className="h-1 bg-gradient-to-r from-primary via-accent-yellow to-primary rounded-full"></div>
              </div>
            </div>

            {/* Form Section */}
            <div className="px-6 sm:px-8 py-8 sm:py-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 text-center">
                Welcome Back
              </h2>
              <p className="text-sm sm:text-base text-gray-500 text-center mb-6 sm:mb-8">Login to your account</p>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* User ID Input */}
                <div className="space-y-2">
                  <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
                    User ID
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="userId"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none text-gray-900"
                      placeholder="Enter your User ID"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none text-gray-900"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded cursor-pointer"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                    Remember Me
                  </label>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Logging in...
                    </span>
                  ) : (
                    'Login'
                  )}
                </button>
              </form>

              {/* Links */}
              <div className="mt-6 space-y-2 sm:space-y-3 text-center text-xs sm:text-sm">
                <a href="#" className="block text-primary hover:text-primary-dark transition-colors duration-200 font-medium">
                  Lupa password?
                </a>
                <a href="#" className="block text-gray-600 hover:text-primary transition-colors duration-200">
                  Hubungi Kami
                </a>
                <a href="#" className="block text-gray-600 hover:text-primary transition-colors duration-200">
                  Daftar Mitra
                </a>
                <a href="#" className="block text-gray-500 hover:text-primary transition-colors duration-200 text-xs">
                  Disclaimer
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 border-t border-gray-100">
              <p className="text-center text-xs text-gray-500">
                2025 © PT Budira Dinamika Multi Finance Tbk
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-white/80 text-xs sm:text-sm">
              Need help? Contact our support team
            </p>
            <div className="flex justify-center gap-3 sm:gap-4 mt-2 sm:mt-3">
              <a href="mailto:support@ad1gate.com" className="flex items-center gap-1.5 sm:gap-2 text-white/70 hover:text-white transition-colors">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">Email</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-1.5 sm:gap-2 text-white/70 hover:text-white transition-colors">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">Phone</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
