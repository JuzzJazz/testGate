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
  TrendingUp,
  FileText,
  Clock,
  CheckCircle
} from 'lucide-react'

export default function Dashboard() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeMenu, setActiveMenu] = useState('Home')

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

  const stats = [
    { label: 'Total Penjualan Bulan Ini', value: 'Rp 2.5M', icon: TrendingUp, color: 'bg-green-500' },
    { label: 'Unit Terjual Bulan Ini', value: '18', icon: CheckCircle, color: 'bg-blue-500' },
    { label: 'Order Baru', value: '12', icon: ShoppingCart, color: 'bg-yellow-500' },
    { label: 'Proses Pencairan Adira', value: '6', icon: Clock, color: 'bg-purple-500' },
  ]

  // Data penjualan per bulan (contoh data)
  const monthlySales = [
    { bulan: 'Januari', amount: 3200000, count: 22 },
    { bulan: 'Februari', amount: 2800000, count: 19 },
    { bulan: 'Maret', amount: 3500000, count: 24 },
    { bulan: 'April', amount: 2900000, count: 20 },
    { bulan: 'Mei', amount: 3100000, count: 21 },
    { bulan: 'Juni', amount: 2700000, count: 18 },
    { bulan: 'Juli', amount: 3300000, count: 23 },
    { bulan: 'Agustus', amount: 2950000, count: 20 },
    { bulan: 'September', amount: 3400000, count: 25 },
    { bulan: 'Oktober', amount: 3150000, count: 22 },
    { bulan: 'November', amount: 2500000, count: 18 },
  ]

  // Data order list
  const orderList = [
    { 
      id: 'ORD-001', 
      customer: 'Budi Santoso', 
      kendaraan: 'Honda Beat 2024', 
      type: 'Motor Baru',
      harga: 18500000, 
      status: 'Order Baru',
      tanggal: '15 Nov 2024',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    { 
      id: 'ORD-002', 
      customer: 'Siti Nurhaliza', 
      kendaraan: 'Toyota Avanza 2024', 
      type: 'Mobil Baru',
      harga: 245000000, 
      status: 'Pencairan Adira',
      tanggal: '14 Nov 2024',
      statusColor: 'bg-purple-100 text-purple-800'
    },
    { 
      id: 'ORD-003', 
      customer: 'Ahmad Yani', 
      kendaraan: 'Yamaha NMAX 2023', 
      type: 'Motor Bekas',
      harga: 24500000, 
      status: 'Order Baru',
      tanggal: '14 Nov 2024',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    { 
      id: 'ORD-004', 
      customer: 'Dewi Lestari', 
      kendaraan: 'Honda Jazz 2022', 
      type: 'Mobil Bekas',
      harga: 235000000, 
      status: 'Pencairan Adira',
      tanggal: '13 Nov 2024',
      statusColor: 'bg-purple-100 text-purple-800'
    },
    { 
      id: 'ORD-005', 
      customer: 'Rudi Hermawan', 
      kendaraan: 'Suzuki Satria 2024', 
      type: 'Motor Baru',
      harga: 22000000, 
      status: 'Order Baru',
      tanggal: '13 Nov 2024',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    { 
      id: 'ORD-006', 
      customer: 'Maya Sari', 
      kendaraan: 'Daihatsu Xenia 2024', 
      type: 'Mobil Baru',
      harga: 215000000, 
      status: 'Pencairan Adira',
      tanggal: '12 Nov 2024',
      statusColor: 'bg-purple-100 text-purple-800'
    },
  ]

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount)
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
              const isActive = activeMenu === item.label
              const isHome = item.label === 'Home'
              
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveMenu(item.label)
                    if (item.href && item.href !== '#') {
                      router.push(item.href)
                    }
                    // Close sidebar on mobile when item is clicked
                    if (window.innerWidth < 1024) {
                      setSidebarOpen(false)
                    }
                  }}
                  className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200 ${
                    isHome
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold shadow-md'
                      : isActive
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${isHome ? 'text-gray-900' : ''}`} />
                  <span className="text-xs sm:text-sm truncate">{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Sidebar Footer */}
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
                <span>›</span>
                <span className="text-gray-900 font-medium">Home</span>
              </div>
            </div>

            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 break-words">
                    Selamat Datang di Dashboard Dealer Kendaraan
                  </h2>
                  <p className="text-xs sm:text-sm text-green-100 flex items-center gap-1 sm:gap-2">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="truncate">Pembiayaan bekerja sama dengan PT Adira Dinamika Multi Finance Tbk.</span>
                  </p>
                </div>
                <div className="hidden lg:block ml-4 flex-shrink-0">
                  <div className="w-24 h-24 xl:w-32 xl:h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <ShoppingCart className="h-12 w-12 xl:h-16 xl:w-16 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-600 text-xs sm:text-sm mb-1 truncate">{stat.label}</p>
                        <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`${stat.color} p-2.5 sm:p-4 rounded-lg sm:rounded-xl flex-shrink-0`}>
                        <Icon className="h-5 w-5 sm:h-8 sm:w-8 text-white" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {/* Tabel Penjualan Bulanan */}
              <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Penjualan Per Bulan (2024)</h3>
                  <button className="text-green-600 hover:text-green-700 text-xs sm:text-sm font-medium">
                    Download Report
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bulan</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total Penjualan</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah Unit</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Rata-rata/Unit</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {monthlySales.map((sale, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">{sale.bulan}</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-900 font-semibold">{formatRupiah(sale.amount)}</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-600">{sale.count} unit</td>
                          <td className="px-4 py-3 text-sm text-right text-gray-600">{formatRupiah(sale.amount / sale.count)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-gray-100">
                      <tr className="font-bold">
                        <td className="px-4 py-3 text-sm text-gray-900">Total YTD</td>
                        <td className="px-4 py-3 text-sm text-right text-green-600">
                          {formatRupiah(monthlySales.reduce((sum, sale) => sum + sale.amount, 0))}
                        </td>
                        <td className="px-4 py-3 text-sm text-right text-gray-900">
                          {monthlySales.reduce((sum, sale) => sum + sale.count, 0)} unit
                        </td>
                        <td className="px-4 py-3 text-sm text-right text-gray-600">
                          {formatRupiah(
                            monthlySales.reduce((sum, sale) => sum + sale.amount, 0) / 
                            monthlySales.reduce((sum, sale) => sum + sale.count, 0)
                          )}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* Tabel Order List */}
              <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Daftar Order Terbaru</h3>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-xs sm:text-sm bg-yellow-100 text-yellow-800 rounded-lg font-medium hover:bg-yellow-200">
                      Order Baru ({orderList.filter(o => o.status === 'Order Baru').length})
                    </button>
                    <button className="px-3 py-1.5 text-xs sm:text-sm bg-purple-100 text-purple-800 rounded-lg font-medium hover:bg-purple-200">
                      Pencairan ({orderList.filter(o => o.status === 'Pencairan Adira').length})
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kendaraan</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipe</th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orderList.map((order, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm font-medium text-blue-600">{order.id}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{order.tanggal}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{order.customer}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{order.kendaraan}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              order.type.includes('Motor') ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                            }`}>
                              {order.type}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-right font-semibold text-gray-900">{formatRupiah(order.harga)}</td>
                          <td className="px-4 py-3 text-sm text-center">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.statusColor}`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
                  <h4 className="text-sm font-medium mb-2 opacity-90">Motor Baru Terjual</h4>
                  <p className="text-3xl font-bold mb-1">8 Unit</p>
                  <p className="text-sm opacity-75">November 2024</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
                  <h4 className="text-sm font-medium mb-2 opacity-90">Mobil Baru Terjual</h4>
                  <p className="text-3xl font-bold mb-1">6 Unit</p>
                  <p className="text-sm opacity-75">November 2024</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
                  <h4 className="text-sm font-medium mb-2 opacity-90">Kendaraan Bekas Terjual</h4>
                  <p className="text-3xl font-bold mb-1">4 Unit</p>
                  <p className="text-sm opacity-75">November 2024</p>
                </div>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="mt-4 sm:mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-blue-500 rounded-lg flex-shrink-0">
                  <Info className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Informasi Penting</h4>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    Sistem pembiayaan terintegrasi dengan PT Adira Dinamika Multi Finance Tbk. 
                    Pastikan semua dokumen order sudah lengkap untuk proses pencairan yang lebih cepat. 
                    Untuk bantuan, hubungi tim support kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
