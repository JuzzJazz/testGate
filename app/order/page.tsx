'use client'

import { useState } from 'react'
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
  FileText,
  Package,
  Info as InfoIcon
} from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function OrderPage() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('tracking')
  const [trackingType, setTrackingType] = useState('harian')
  const [selectedDealer, setSelectedDealer] = useState('')
  const [dealerCode, setDealerCode] = useState('')
  const [selectedBranch, setSelectedBranch] = useState('Cabang Budira')
  const [selectedMonth, setSelectedMonth] = useState('November')
  const [selectedYear, setSelectedYear] = useState('2025')
  const [selectedDay, setSelectedDay] = useState('7')
  const [selectedTrackingStatus, setSelectedTrackingStatus] = useState('')
  const [selectedOrderStatus, setSelectedOrderStatus] = useState('')

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

  const dealers = ['Select Dealer', 'Dealer 1', 'Dealer 2', 'Dealer 3']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const years = ['2023', '2024', '2025', '2026']
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString())

  const trackingStatuses = [
    'Select Tracking Status',
    'Pending',
    'In Progress',
    'Survey Scheduled',
    'Completed',
    'Rejected'
  ]

  const orderStatuses = [
    'Semua Status',
    'Menunggu Persetujuan',
    'Disetujui',
    'Dalam Proses',
    'Selesai',
    'Dibatalkan'
  ]

  const handleSearch = () => {
    console.log('Searching...', {
      trackingType,
      selectedDealer,
      dealerCode,
      selectedBranch,
      selectedMonth,
      selectedYear,
      selectedDay
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
              const isOrder = item.label === 'Order'
              
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
                    isOrder
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold shadow-md'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${isOrder ? 'text-gray-900' : ''}`} />
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
                <span className="text-gray-900 font-medium">Order</span>
              </div>
            </div>

            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Order Management</h1>
              <p className="text-gray-600 text-sm sm:text-base">Track and manage your orders</p>
            </div>

            {/* Tabs */}
            <div className="mb-6 border-b border-gray-200 bg-white rounded-t-xl shadow-sm">
              <div className="flex gap-1 overflow-x-auto px-2">
                <button
                  onClick={() => setActiveTab('tracking')}
                  className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all whitespace-nowrap ${
                    activeTab === 'tracking'
                      ? 'border-b-3 border-green-500 text-green-600 bg-green-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Package className="h-5 w-5" />
                  Tracking Order
                </button>
                <button
                  onClick={() => setActiveTab('dokumen')}
                  className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all whitespace-nowrap ${
                    activeTab === 'dokumen'
                      ? 'border-b-3 border-green-500 text-green-600 bg-green-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <FileText className="h-5 w-5" />
                  Dokumen Susulan
                </button>
              </div>
            </div>

            {/* Content */}
            {activeTab === 'tracking' ? (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Filter Section */}
                <div className="p-6 sm:p-8">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Pilih Jenis Tracking</h2>
                  
                  {/* Tracking Type Radio Buttons */}
                  <div className="flex flex-wrap gap-8 mb-8 pb-6 border-b border-gray-200">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="tracking"
                        value="harian"
                        checked={trackingType === 'harian'}
                        onChange={(e) => setTrackingType(e.target.value)}
                        className="w-5 h-5 text-green-600 focus:ring-2 focus:ring-green-500 cursor-pointer"
                      />
                      <span className="text-base font-medium text-gray-700 group-hover:text-gray-900">Tracking Harian</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="tracking"
                        value="bulanan"
                        checked={trackingType === 'bulanan'}
                        onChange={(e) => setTrackingType(e.target.value)}
                        className="w-5 h-5 text-green-600 focus:ring-2 focus:ring-green-500 cursor-pointer"
                      />
                      <span className="text-base font-medium text-gray-700 group-hover:text-gray-900">Tracking Bulanan</span>
                    </label>
                  </div>

                  {/* Form Grid - Cleaner Layout */}
                  <div className="space-y-6">
                    {/* Row 1: Dealer, Dealer Code, Hari */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Dealer</label>
                        <select
                          value={selectedDealer}
                          onChange={(e) => setSelectedDealer(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 bg-white shadow-sm transition-all"
                        >
                          {dealers.map((dealer) => (
                            <option key={dealer} value={dealer}>{dealer}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Dealer Code</label>
                        <div className="relative">
                          <input
                            type="text"
                            value={dealerCode}
                            onChange={(e) => setDealerCode(e.target.value)}
                            placeholder="Enter dealer code"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 shadow-sm transition-all"
                          />
                          <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Hari</label>
                        <select
                          value={selectedDay}
                          onChange={(e) => setSelectedDay(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 bg-white shadow-sm transition-all"
                        >
                          {days.map((day) => (
                            <option key={day} value={day}>{day}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 2: Bulan, Tahun, Cabang */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Bulan</label>
                        <select
                          value={selectedMonth}
                          onChange={(e) => setSelectedMonth(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 bg-white shadow-sm transition-all"
                        >
                          {months.map((month) => (
                            <option key={month} value={month}>{month}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Tahun</label>
                        <select
                          value={selectedYear}
                          onChange={(e) => setSelectedYear(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 bg-white shadow-sm transition-all"
                        >
                          {years.map((year) => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Cabang</label>
                        <input
                          type="text"
                          value={selectedBranch}
                          onChange={(e) => setSelectedBranch(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 bg-white shadow-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Tracking & Status Order */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Tracking</label>
                        <select
                          value={selectedTrackingStatus}
                          onChange={(e) => setSelectedTrackingStatus(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 bg-white shadow-sm transition-all"
                        >
                          {trackingStatuses.map((status) => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Status Order</label>
                        <select
                          value={selectedOrderStatus}
                          onChange={(e) => setSelectedOrderStatus(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 bg-white shadow-sm transition-all"
                        >
                          {orderStatuses.map((status) => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Info Box */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5">
                      <div className="flex gap-3">
                        <InfoIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-blue-900 space-y-1">
                          <p>- Tracking harian maksimum 31 hari yang lalu</p>
                          <p>- Tracking bulanan menampilkan status tracking 1 bulan lalu sampai 6 bulan lalu</p>
                        </div>
                      </div>
                    </div>

                    {/* Search Button */}
                    <div className="flex justify-center pt-4">
                      <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-16 py-4 rounded-lg font-bold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3">
                        <Search className="h-5 w-5" />
                        Cari
                      </button>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="bg-gray-50 border-t border-gray-200 p-8 sm:p-12">
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="mb-6 p-6 bg-white rounded-full shadow-md">
                      <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">No orders found</h3>
                    <p className="text-gray-500 text-center max-w-md">
                      Please select your filter criteria and click the &quot;Cari&quot; button to search for orders
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-16 text-center">
                  <div className="mb-6 inline-flex p-6 bg-gray-100 rounded-full">
                    <FileText className="h-20 w-20 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-3">Dokumen Susulan</h3>
                  <p className="text-gray-500 mb-8 max-w-md mx-auto">Upload dan kelola dokumen susulan Anda untuk melengkapi persyaratan order</p>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
                    Upload Dokumen
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
