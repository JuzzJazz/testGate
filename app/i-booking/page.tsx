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
  Calendar,
  AlertCircle,
  ChevronRight
} from 'lucide-react'

export default function IBookingPage() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [trackingType, setTrackingType] = useState('bulanan')
  const [cabang, setCabang] = useState('0102 - JAKBAR 2 CAR-LATUMENTEN')
  const [selectedDay, setSelectedDay] = useState('1')
  const [selectedMonth, setSelectedMonth] = useState('October')
  const [selectedYear, setSelectedYear] = useState('2025')
  const [selectedEndDay, setSelectedEndDay] = useState('31')
  const [selectedEndMonth, setSelectedEndMonth] = useState('October')
  const [selectedEndYear, setSelectedEndYear] = useState('2025')
  const [selectedMonthOnly, setSelectedMonthOnly] = useState('October')
  const [searchTerm, setSearchTerm] = useState('')

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
  const years = ['2023', '2024', '2025', '2026']
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString())

  const handleSearch = () => {
    console.log('Searching...', {
      trackingType,
      cabang,
      selectedDay,
      selectedMonth,
      selectedYear,
      selectedEndDay,
      selectedEndMonth,
      selectedEndYear
    })
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
              const isIBooking = item.label === 'i-Booking'
              
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
                    isIBooking
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold shadow-md'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${isIBooking ? 'text-gray-900' : ''}`} />
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
                <span className="text-gray-900 font-medium">I-Booking</span>
              </div>
            </div>

            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">I-Booking</h1>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="space-y-6">
                  {/* Cabang Search */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Cabang
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={cabang}
                        onChange={(e) => setCabang(e.target.value)}
                        placeholder="Enter branch code"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      />
                      <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Tracking Type Selection */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 sm:p-6 border border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="tracking"
                          value="harian"
                          checked={trackingType === 'harian'}
                          onChange={(e) => setTrackingType(e.target.value)}
                          className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm sm:text-base font-medium text-gray-700 group-hover:text-gray-900">Tracking Harian</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="tracking"
                          value="bulanan"
                          checked={trackingType === 'bulanan'}
                          onChange={(e) => setTrackingType(e.target.value)}
                          className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm sm:text-base font-medium text-gray-700 group-hover:text-gray-900">Tracking Bulanan</span>
                      </label>
                    </div>
                  </div>

                  {/* Date Range Selectors */}
                  {trackingType === 'harian' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Start Date */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">Start Date</h3>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Day</label>
                            <select
                              value={selectedDay}
                              onChange={(e) => setSelectedDay(e.target.value)}
                              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                            >
                              {days.map((day) => (
                                <option key={day} value={day}>{day}</option>
                              ))}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Month</label>
                            <select
                              value={selectedMonth}
                              onChange={(e) => setSelectedMonth(e.target.value)}
                              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                            >
                              {months.map((month) => (
                                <option key={month} value={month}>{month}</option>
                              ))}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Year</label>
                            <select
                              value={selectedYear}
                              onChange={(e) => setSelectedYear(e.target.value)}
                              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                            >
                              {years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* End Date */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900">End Date</h3>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Day</label>
                            <select
                              value={selectedEndDay}
                              onChange={(e) => setSelectedEndDay(e.target.value)}
                              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                            >
                              {days.map((day) => (
                                <option key={day} value={day}>{day}</option>
                              ))}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Month</label>
                            <select
                              value={selectedEndMonth}
                              onChange={(e) => setSelectedEndMonth(e.target.value)}
                              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                            >
                              {months.map((month) => (
                                <option key={month} value={month}>{month}</option>
                              ))}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Year</label>
                            <select
                              value={selectedEndYear}
                              onChange={(e) => setSelectedEndYear(e.target.value)}
                              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                            >
                              {years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">Select Month</label>
                      <select
                        value={selectedMonthOnly}
                        onChange={(e) => setSelectedMonthOnly(e.target.value)}
                        className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                      >
                        {months.map((month) => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Search Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      onClick={handleSearch}
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                    >
                      <Search className="h-5 w-5" />
                      Cari
                    </button>
                  </div>

                  {/* No Data Message */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-6">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                      <p className="text-red-800 font-semibold">Data tidak Ditemukan</p>
                    </div>
                  </div>

                  {/* Warning Message */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800 text-sm">
                      <span className="font-semibold">*</span>Send Order yang anda cari saat ini belum tersedia
                    </p>
                  </div>

                  {/* Table Header (Empty State) */}
                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <label className="text-sm text-gray-700">Show</label>
                      <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm">
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                      </select>
                      <span className="text-sm text-gray-700">entries</span>
                      <div className="flex-1"></div>
                      <div className="flex items-center gap-2">
                        <label className="text-sm text-gray-700">Search:</label>
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm w-48"
                        />
                      </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                      <table className="w-full">
                        <thead className="bg-gradient-to-r from-yellow-400 to-yellow-500">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">No</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Tanggal Order</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Nama Customer</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">No Telepon</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Nomor Order ID</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">DLC</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Cabang Budira</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Sales Officer</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Tanggal & Jam Survey</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Status Aplikasi</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">PIC Branch CO</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr>
                            <td colSpan={11} className="px-4 py-12 text-center text-gray-500">
                              No data available
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
