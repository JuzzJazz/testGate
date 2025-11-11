'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Home, 
  ShoppingCart, 
  Info, 
  Settings, 
  Link as LinkIcon, 
  BookOpen, 
  User, 
  LogOut, 
  Phone, 
  AlertTriangle,
  Menu,
  X,
  Bell,
  Search,
  ChevronRight,
  Mail,
  Smartphone,
  MessageCircle,
  Lock,
  Calendar,
  MapPin,
  Save,
  Eye,
  EyeOff
} from 'lucide-react'

export default function MyProfilePage() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Form states
  const [formData, setFormData] = useState({
    userId: 'ronny.suhermawan@Budira.co.id',
    namaPengguna: 'RONNY SUHERMAWAN',
    tempatLahir: 'TANGERANG',
    tanggalLahir: '30',
    bulanLahir: 'January',
    tahunLahir: '1985',
    emailAlternatif: 'ronny.suhermawan@Budira.co.id',
    noHandphone: '085716098866',
    noWhatsapp: '',
    mpin: '',
    ulangMpin: '',
    password: '',
    ulangPassword: ''
  })

  const menuItems = [
    { icon: Home, label: 'Home', href: '/dashboard' },
    { icon: ShoppingCart, label: 'Order', href: '/order' },
    { icon: Info, label: 'Information', href: '/information' },
    { icon: Settings, label: 'Administration', href: '/administration' },
    { icon: LinkIcon, label: 'i-Linksys', href: '/i-linksys' },
    { icon: BookOpen, label: 'i-Booking', href: '/i-booking' },
    { icon: User, label: 'My Profile', href: '/my-profile' },
    { icon: LogOut, label: 'Sign Out', href: '/' },
    { icon: Phone, label: 'Hubungi Kami', href: '#' },
    { icon: AlertTriangle, label: 'Disclaimer', href: '#' },
  ]

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString())
  const years = Array.from({ length: 100 }, (_, i) => (new Date().getFullYear() - i).toString())

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Profile updated:', formData)
    // Add your update logic here
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg fixed top-0 left-0 right-0 z-40">
        <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
            <h1 className="text-xl sm:text-2xl font-bold">
              <span className="text-white">Ad1</span>
              <span className="text-yellow-400">Gate</span>
            </h1>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-gray-300 text-sm"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-300" />
            </div>
            <button className="relative p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
              <div className="text-right hidden xl:block">
                <p className="text-xs sm:text-sm font-semibold">RONNY SUHERMAWAN</p>
                <p className="text-xs text-gray-300">ronny.suhermawan@Budira.co.id</p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-xs sm:text-sm">
                RS
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-14 sm:pt-16">
        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-14 sm:top-16 bottom-0 bg-white shadow-xl transition-all duration-300 z-30 ${
            sidebarOpen ? 'w-56 sm:w-64' : 'w-0 lg:w-0'
          } overflow-hidden`}
        >
          <nav className="p-3 sm:p-4 space-y-1 overflow-y-auto h-full pb-20">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              const isMyProfile = item.label === 'My Profile'
              
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (item.href && item.href !== '#') {
                      router.push(item.href)
                    }
                    if (window.innerWidth < 1024) {
                      setSidebarOpen(false)
                    }
                  }}
                  className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200 ${
                    isMyProfile
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold shadow-md'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${isMyProfile ? 'text-gray-900' : ''}`} />
                  <span className="text-xs sm:text-sm truncate">{item.label}</span>
                </button>
              )
            })}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gray-50 border-t">
            <p className="text-xs text-gray-500 text-center">
              2025 © PT Budira Dinamika Multi Finance Tbk.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? 'lg:ml-64 ml-0' : 'ml-0'
          }`}
        >
          <div className="p-3 sm:p-4 lg:p-6 max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <span>Home</span>
                <ChevronRight className="h-4 w-4" />
                <span className="text-gray-900 font-medium">My Profile</span>
              </div>
            </div>

            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
            </div>

            {/* Profile Tab */}
            <div className="mb-6">
              <div className="inline-block bg-white rounded-t-lg border-b-4 border-blue-500 px-6 py-3 shadow-sm">
                <span className="font-semibold text-gray-900">Profile</span>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* User ID Section */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-500 rounded-lg">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <label className="text-sm font-semibold text-gray-900">User ID :</label>
                    </div>
                    <input
                      type="text"
                      name="userId"
                      value={formData.userId}
                      readOnly
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 cursor-not-allowed"
                    />
                  </div>

                  {/* Informasi User Section */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-green-500 rounded-lg">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <h2 className="text-lg font-bold text-gray-900">Informasi User</h2>
                    </div>

                    <div className="space-y-5">
                      {/* Nama Pengguna */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <label className="text-sm font-medium text-gray-700 md:text-right">Nama Pengguna :</label>
                        <div className="md:col-span-3">
                          <input
                            type="text"
                            name="namaPengguna"
                            value={formData.namaPengguna}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white shadow-sm"
                            required
                          />
                          <span className="text-red-500 text-sm">*</span>
                        </div>
                      </div>

                      {/* Tempat & Tanggal Lahir */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
                        <label className="text-sm font-medium text-gray-700 md:text-right md:pt-3">Tempat & Tanggal Lahir :</label>
                        <div className="md:col-span-3 space-y-3">
                          <div>
                            <input
                              type="text"
                              name="tempatLahir"
                              value={formData.tempatLahir}
                              onChange={handleInputChange}
                              placeholder="Tempat Lahir"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white shadow-sm"
                              required
                            />
                            <span className="text-red-500 text-sm">*</span>
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            <div>
                              <select
                                name="tanggalLahir"
                                value={formData.tanggalLahir}
                                onChange={handleInputChange}
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white shadow-sm"
                                required
                              >
                                {days.map(day => (
                                  <option key={day} value={day}>{day}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <select
                                name="bulanLahir"
                                value={formData.bulanLahir}
                                onChange={handleInputChange}
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white shadow-sm"
                                required
                              >
                                {months.map(month => (
                                  <option key={month} value={month}>{month}</option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <select
                                name="tahunLahir"
                                value={formData.tahunLahir}
                                onChange={handleInputChange}
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white shadow-sm"
                                required
                              >
                                {years.map(year => (
                                  <option key={year} value={year}>{year}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <span className="text-red-500 text-sm">*</span>
                        </div>
                      </div>

                      {/* Email Alternatif */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <label className="text-sm font-medium text-gray-700 md:text-right">Email Alternatif :</label>
                        <div className="md:col-span-3">
                          <div className="relative">
                            <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                            <input
                              type="email"
                              name="emailAlternatif"
                              value={formData.emailAlternatif}
                              onChange={handleInputChange}
                              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white shadow-sm"
                              required
                            />
                          </div>
                          <span className="text-red-500 text-sm">*</span>
                        </div>
                      </div>

                      {/* No. Handphone */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <label className="text-sm font-medium text-gray-700 md:text-right">No. Handphone :</label>
                        <div className="md:col-span-3">
                          <div className="relative">
                            <Smartphone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                            <input
                              type="tel"
                              name="noHandphone"
                              value={formData.noHandphone}
                              onChange={handleInputChange}
                              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white shadow-sm"
                              required
                            />
                          </div>
                          <span className="text-red-500 text-sm">*</span>
                        </div>
                      </div>

                      {/* No. WhatsApp */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <label className="text-sm font-medium text-gray-700 md:text-right">No. WhatsApp :</label>
                        <div className="md:col-span-3">
                          <div className="relative">
                            <MessageCircle className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                            <input
                              type="tel"
                              name="noWhatsapp"
                              value={formData.noWhatsapp}
                              onChange={handleInputChange}
                              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white shadow-sm"
                            />
                          </div>
                        </div>
                      </div>

                      {/* MPIN */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <label className="text-sm font-medium text-gray-700 md:text-right">MPIN :</label>
                        <div className="md:col-span-3">
                          <input
                            type="password"
                            name="mpin"
                            value={formData.mpin}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white shadow-sm"
                          />
                        </div>
                      </div>

                      {/* Ulangi MPIN */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <label className="text-sm font-medium text-gray-700 md:text-right">Ulangi MPIN :</label>
                        <div className="md:col-span-3">
                          <input
                            type="password"
                            name="ulangMpin"
                            value={formData.ulangMpin}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white shadow-sm"
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <label className="text-sm font-medium text-gray-700 md:text-right">Password :</label>
                        <div className="md:col-span-3">
                          <div className="relative">
                            <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              value={formData.password}
                              onChange={handleInputChange}
                              className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white shadow-sm"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                            >
                              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Ulangi Password */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <label className="text-sm font-medium text-gray-700 md:text-right">Ulangi Password :</label>
                        <div className="md:col-span-3">
                          <div className="relative">
                            <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              name="ulangPassword"
                              value={formData.ulangPassword}
                              onChange={handleInputChange}
                              className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 bg-white shadow-sm"
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                            >
                              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-12 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 flex items-center gap-3"
                    >
                      <Save className="h-6 w-6" />
                      Edit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
