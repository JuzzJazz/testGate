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
  Info as InfoIcon,
  Filter,
  SlidersHorizontal,
  Download,
  ArrowLeft,
  Calendar,
  Building2,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  FilePlus,
  Send,
  FileX,
  FileCheck,
  TrendingUp,
  Eye,
  CalendarDays
} from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function OrderPage() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('tracking')
  const [filterModalOpen, setFilterModalOpen] = useState(false)
  const [trackingType, setTrackingType] = useState('harian')
  const [selectedDealer, setSelectedDealer] = useState('')
  const [dealerCode, setDealerCode] = useState('')
  const [selectedBranch, setSelectedBranch] = useState('Cabang Budira')
  const [startDate, setStartDate] = useState('2024-11-07')
  const [endDate, setEndDate] = useState('2024-11-07')
  const [isDateRange, setIsDateRange] = useState(false)
  const [selectedTrackingStatus, setSelectedTrackingStatus] = useState('')
  const [selectedOrderStatus, setSelectedOrderStatus] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [showDetailTable, setShowDetailTable] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  
  // Dokumen Susulan states
  const [dokumenFilterOpen, setDokumenFilterOpen] = useState(false)
  const [dokumenDealer, setDokumenDealer] = useState('')
  const [dokumenDealerCode, setDokumenDealerCode] = useState('000195')
  const [dokumenTrackingType, setDokumenTrackingType] = useState('harian')
  const [dokumenStartDate, setDokumenStartDate] = useState('2024-11-01')
  const [dokumenEndDate, setDokumenEndDate] = useState('2024-11-30')
  const [isDokumenDateRange, setIsDokumenDateRange] = useState(true)
  const [dokumenBranch, setDokumenBranch] = useState('All Cabang')
  const [dokumenStatus, setDokumenStatus] = useState('Semua Status')
  const [showDokumenResults, setShowDokumenResults] = useState(false)
  const [showDokumenDetailTable, setShowDokumenDetailTable] = useState(false)
  const [selectedDokumenStatus, setSelectedDokumenStatus] = useState('')

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

  // Mock data untuk summary order dengan icon
  const summaryData = [
    { status: 'Proses Verifikasi', jumlah: 1, color: 'bg-blue-500', bgGradient: 'from-blue-500 to-blue-600', icon: Clock, lightBg: 'bg-blue-50', textColor: 'text-blue-700', borderColor: 'border-blue-200' },
    { status: 'Proses Survey', jumlah: 0, color: 'bg-purple-500', bgGradient: 'from-purple-500 to-purple-600', icon: Eye, lightBg: 'bg-purple-50', textColor: 'text-purple-700', borderColor: 'border-purple-200' },
    { status: 'Proses Approval', jumlah: 1, color: 'bg-orange-500', bgGradient: 'from-orange-500 to-orange-600', icon: AlertCircle, lightBg: 'bg-orange-50', textColor: 'text-orange-700', borderColor: 'border-orange-200' },
    { status: 'Reject', jumlah: 0, color: 'bg-red-500', bgGradient: 'from-red-500 to-red-600', icon: XCircle, lightBg: 'bg-red-50', textColor: 'text-red-700', borderColor: 'border-red-200' },
    { status: 'Proses Pemenuhan Persyaratan Kredit', jumlah: 0, color: 'bg-yellow-500', bgGradient: 'from-yellow-500 to-yellow-600', icon: FilePlus, lightBg: 'bg-yellow-50', textColor: 'text-yellow-700', borderColor: 'border-yellow-200' },
    { status: 'Approved & Cetak PO', jumlah: 2, color: 'bg-green-500', bgGradient: 'from-green-500 to-green-600', icon: CheckCircle, lightBg: 'bg-green-50', textColor: 'text-green-700', borderColor: 'border-green-200' },
    { status: 'Sudah Kirim Invoice', jumlah: 1, color: 'bg-teal-500', bgGradient: 'from-teal-500 to-teal-600', icon: Send, lightBg: 'bg-teal-50', textColor: 'text-teal-700', borderColor: 'border-teal-200' },
    { status: 'Cancel Order', jumlah: 4, color: 'bg-gray-500', bgGradient: 'from-gray-500 to-gray-600', icon: FileX, lightBg: 'bg-gray-50', textColor: 'text-gray-700', borderColor: 'border-gray-200' },
    { status: 'Cancel PO', jumlah: 0, color: 'bg-gray-600', bgGradient: 'from-gray-600 to-gray-700', icon: XCircle, lightBg: 'bg-gray-50', textColor: 'text-gray-700', borderColor: 'border-gray-200' },
    { status: 'Tagihan Terverifikasi', jumlah: 3, color: 'bg-indigo-500', bgGradient: 'from-indigo-500 to-indigo-600', icon: FileCheck, lightBg: 'bg-indigo-50', textColor: 'text-indigo-700', borderColor: 'border-indigo-200' },
    { status: 'Sudah PPD', jumlah: 0, color: 'bg-pink-500', bgGradient: 'from-pink-500 to-pink-600', icon: TrendingUp, lightBg: 'bg-pink-50', textColor: 'text-pink-700', borderColor: 'border-pink-200' },
    { status: 'Sudah Pembayaran Produk', jumlah: 0, color: 'bg-cyan-500', bgGradient: 'from-cyan-500 to-cyan-600', icon: CheckCircle, lightBg: 'bg-cyan-50', textColor: 'text-cyan-700', borderColor: 'border-cyan-200' },
  ]

  // Mock data untuk detail table
  const detailTableData = [
    {
      no: 1,
      tanggalOrder: '2024-11-28 17:49:40',
      noAplikasi: '000024012601691',
      tanggalAplikasi: '2024-11-28 17:49:40',
      cabang: '0126-TANGERANG 2 CAR-ALAM SUTERA',
      namaPemohon: 'PEGASUS PPD',
      namaPadaBPKB: '',
      status: 'Proses Verifikasi',
      tanggalStatus: '2025-10-08 14:29:10'
    }
  ]

  // Mock data untuk dokumen susulan summary dengan icon dan styling
  const dokumenSummaryData = [
    { status: 'Dokumen Susulan', jumlah: 0, color: 'bg-orange-500', bgGradient: 'from-orange-500 to-orange-600', icon: FileText, lightBg: 'bg-orange-50', textColor: 'text-orange-700', borderColor: 'border-orange-200' },
    { status: 'Sudah Kirim Dokumen', jumlah: 0, color: 'bg-blue-500', bgGradient: 'from-blue-500 to-blue-600', icon: Send, lightBg: 'bg-blue-50', textColor: 'text-blue-700', borderColor: 'border-blue-200' },
  ]

  const handleSearch = () => {
    console.log('Searching...', {
      trackingType,
      selectedDealer,
      dealerCode,
      selectedBranch,
      startDate,
      endDate,
      isDateRange
    })
    setShowResults(true)
    setShowDetailTable(false)
    setFilterModalOpen(false) // Close modal after search
  }

  const applyFilters = () => {
    handleSearch()
  }

  const resetFilters = () => {
    setSelectedDealer('')
    setDealerCode('')
    setSelectedBranch('Cabang Budira')
    setStartDate('2024-11-07')
    setEndDate('2024-11-07')
    setIsDateRange(false)
    setSelectedTrackingStatus('')
    setSelectedOrderStatus('')
  }

  const handleStatusClick = (status: string) => {
    setSelectedStatus(status)
    setShowDetailTable(true)
  }

  const handleBackToSummary = () => {
    setShowDetailTable(false)
    setSelectedStatus('')
  }

  const downloadExcel = () => {
    console.log('Downloading Excel...')
  }

  const handleDokumenSearch = () => {
    console.log('Searching Dokumen Susulan...', {
      dokumenDealer,
      dokumenDealerCode,
      dokumenBranch,
      dokumenStatus
    })
    setShowDokumenResults(true)
    setShowDokumenDetailTable(false)
    setDokumenFilterOpen(false)
  }

  const applyDokumenFilters = () => {
    handleDokumenSearch()
  }

  const resetDokumenFilters = () => {
    setDokumenDealer('')
    setDokumenDealerCode('000195')
    setDokumenTrackingType('harian')
    setDokumenStartDate('2024-11-01')
    setDokumenEndDate('2024-11-30')
    setIsDokumenDateRange(true)
    setDokumenBranch('All Cabang')
    setDokumenStatus('Semua Status')
  }

  const handleDokumenStatusClick = (status: string) => {
    setSelectedDokumenStatus(status)
    setShowDokumenDetailTable(true)
  }

  const handleBackToDokumenSummary = () => {
    setShowDokumenDetailTable(false)
    setSelectedDokumenStatus('')
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
                {/* Simple Search Bar with Filter Button */}
                <div className="p-4 sm:p-5 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        placeholder="Search orders, dealers, tracking..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900"
                      />
                      <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    </div>
                    <button
                      onClick={() => setFilterModalOpen(true)}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors border border-gray-300"
                    >
                      <SlidersHorizontal className="h-5 w-5" />
                      <span>Filter</span>
                    </button>
                    <button
                      onClick={handleSearch}
                      className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      <Search className="h-5 w-5" />
                      <span>Cari</span>
                    </button>
                  </div>

                  {/* Active Filters Display */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {trackingType && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        Tracking: {trackingType === 'harian' ? 'Harian' : 'Bulanan'}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setTrackingType('')} />
                      </span>
                    )}
                    {selectedDealer && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        Dealer: {selectedDealer}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedDealer('')} />
                      </span>
                    )}
                    {selectedBranch && selectedBranch !== 'Cabang Budira' && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                        Cabang: {selectedBranch}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedBranch('')} />
                      </span>
                    )}
                  </div>
                </div>

                {/* Filter Modal/Popup */}
                {filterModalOpen && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 bg-black/50 z-50 transition-opacity"
                      onClick={() => setFilterModalOpen(false)}
                    />
                    
                    {/* Modal */}
                    <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-2xl lg:max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl z-50 overflow-hidden">
                      {/* Modal Header */}
                      <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <SlidersHorizontal className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">Filter Options</h3>
                            <p className="text-xs text-gray-500">Customize your search criteria</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setFilterModalOpen(false)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <X className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>

                      {/* Modal Body - Scrollable */}
                      <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
                        {/* Filter Fields */}
                        <div className="space-y-4">
                          {/* Row 1: Dealer & Dealer Code */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Dealer</label>
                              <select
                                value={selectedDealer}
                                onChange={(e) => setSelectedDealer(e.target.value)}
                                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 bg-white"
                              >
                                {dealers.map((dealer) => (
                                  <option key={dealer} value={dealer}>{dealer}</option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Dealer Code</label>
                              <div className="relative">
                                <input
                                  type="text"
                                  value={dealerCode}
                                  onChange={(e) => setDealerCode(e.target.value)}
                                  placeholder="Enter dealer code"
                                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900"
                                />
                                <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                              </div>
                            </div>
                          </div>

                          {/* Date Range Toggle */}
                          <div className="mb-4">
                            <div className="flex items-center gap-4">
                              <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                  type="checkbox"
                                  checked={isDateRange}
                                  onChange={(e) => setIsDateRange(e.target.checked)}
                                  className="w-4 h-4 text-green-600 focus:ring-2 focus:ring-green-500 rounded cursor-pointer"
                                />
                                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                  Gunakan Range Tanggal
                                </span>
                              </label>
                            </div>
                          </div>

                          {/* Date Picker Section */}
                          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4 border-2 border-green-200">
                            <div className="flex items-center gap-2 mb-3">
                              <CalendarDays className="h-5 w-5 text-green-600" />
                              <h4 className="text-sm font-semibold text-gray-900">
                                {isDateRange ? 'Pilih Range Tanggal' : 'Pilih Tanggal'}
                              </h4>
                            </div>
                            
                            <div className={`grid ${isDateRange ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-4`}>
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                  {isDateRange ? 'Tanggal Mulai' : 'Tanggal'}
                                </label>
                                <input
                                  type="date"
                                  value={startDate}
                                  onChange={(e) => setStartDate(e.target.value)}
                                  className="w-full px-4 py-3 text-sm border-2 border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 bg-white font-medium shadow-sm hover:border-green-400 transition-colors"
                                />
                              </div>

                              {isDateRange && (
                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Tanggal Akhir
                                  </label>
                                  <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    min={startDate}
                                    className="w-full px-4 py-3 text-sm border-2 border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 bg-white font-medium shadow-sm hover:border-green-400 transition-colors"
                                  />
                                </div>
                              )}
                            </div>

                            {/* Date Info Display */}
                            <div className="mt-3 p-3 bg-white/70 rounded-lg border border-green-200">
                              <p className="text-xs text-gray-600">
                                <span className="font-semibold text-green-700">Periode yang dipilih:</span>
                                {isDateRange ? (
                                  <span className="ml-2 font-medium text-gray-900">
                                    {new Date(startDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })} 
                                    {' - '} 
                                    {new Date(endDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}
                                  </span>
                                ) : (
                                  <span className="ml-2 font-medium text-gray-900">
                                    {new Date(startDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}
                                  </span>
                                )}
                              </p>
                            </div>
                          </div>

                          {/* Row 3: Branch */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Cabang</label>
                            <input
                              type="text"
                              value={selectedBranch}
                              onChange={(e) => setSelectedBranch(e.target.value)}
                              className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 bg-white"
                            />
                          </div>

                          {/* Row 4: Status Fields */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Tracking Status</label>
                              <select
                                value={selectedTrackingStatus}
                                onChange={(e) => setSelectedTrackingStatus(e.target.value)}
                                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 bg-white"
                              >
                                {trackingStatuses.map((status) => (
                                  <option key={status} value={status}>{status}</option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Status Order</label>
                              <select
                                value={selectedOrderStatus}
                                onChange={(e) => setSelectedOrderStatus(e.target.value)}
                                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-900 bg-white"
                              >
                                {orderStatuses.map((status) => (
                                  <option key={status} value={status}>{status}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          {/* Info Box */}
                          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-3 mt-4">
                            <div className="flex gap-2">
                              <InfoIcon className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <div className="text-xs text-blue-900 space-y-0.5">
                                <p>• Tracking harian maksimum 31 hari yang lalu</p>
                                <p>• Tracking bulanan menampilkan status tracking 1 bulan lalu sampai 6 bulan lalu</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Modal Footer */}
                      <div className="flex items-center justify-between gap-3 p-4 sm:p-5 border-t border-gray-200 bg-gray-50">
                        <button
                          onClick={resetFilters}
                          className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Reset Filter
                        </button>
                        <div className="flex gap-3">
                          <button
                            onClick={() => setFilterModalOpen(false)}
                            className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            Batal
                          </button>
                          <button
                            onClick={applyFilters}
                            className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-lg shadow-md hover:shadow-lg transition-all"
                          >
                            Terapkan Filter
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Results Section */}
                {showResults ? (
                  showDetailTable ? (
                    /* Detail Table View */
                    <div className="bg-white border-t border-gray-200">
                      {/* Header with back button */}
                      <div className="p-4 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 via-white to-green-50">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                          <button
                            onClick={handleBackToSummary}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm w-full sm:w-auto justify-center sm:justify-start"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            <span>Kembali ke Summary</span>
                          </button>
                          <button
                            onClick={downloadExcel}
                            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-lg transition-all shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
                          >
                            <Download className="h-4 w-4" />
                            <span>Download List Order</span>
                          </button>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-3 bg-green-100 rounded-lg">
                            <FileText className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Detail Order - {selectedStatus}</h3>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                Periode: 01/11/2024 - 30/11/2024
                              </span>
                              <span className="flex items-center gap-1">
                                <Package className="h-4 w-4" />
                                Total: {detailTableData.length} order
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Table Controls */}
                      <div className="p-4 bg-gradient-to-r from-gray-700 to-gray-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <label className="text-white text-sm font-medium">Show:</label>
                          <select className="px-3 py-2 text-sm bg-gray-600 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                          </select>
                          <span className="text-white text-sm">entries</span>
                        </div>
                        <div className="flex items-center gap-2 flex-1 sm:flex-initial">
                          <label className="text-white text-sm font-medium whitespace-nowrap">Search:</label>
                          <input
                            type="text"
                            placeholder="Cari..."
                            className="flex-1 sm:w-64 px-3 py-2 text-sm border border-gray-500 rounded-lg bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                      </div>

                      {/* Detail Table - Desktop */}
                      <div className="hidden lg:block overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                            <tr>
                              <th className="px-4 py-4 text-left text-sm font-bold border-r border-green-400">
                                <div className="flex items-center gap-1">
                                  No.
                                </div>
                              </th>
                              <th className="px-4 py-4 text-left text-sm font-bold border-r border-green-400">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-green-100">
                                  Tanggal Order
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </th>
                              <th className="px-4 py-4 text-left text-sm font-bold border-r border-green-400">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-green-100">
                                  No. Aplikasi
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </th>
                              <th className="px-4 py-4 text-left text-sm font-bold border-r border-green-400">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-green-100">
                                  Tanggal Aplikasi
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </th>
                              <th className="px-4 py-4 text-left text-sm font-bold border-r border-green-400">Cabang</th>
                              <th className="px-4 py-4 text-left text-sm font-bold border-r border-green-400">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-green-100">
                                  Nama Pemohon
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </th>
                              <th className="px-4 py-4 text-left text-sm font-bold border-r border-green-400">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-green-100">
                                  Nama Pada BPKB
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </th>
                              <th className="px-4 py-4 text-left text-sm font-bold border-r border-green-400">Status</th>
                              <th className="px-4 py-4 text-left text-sm font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-green-100">
                                  Tanggal Status
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {detailTableData.map((row, index) => (
                              <tr key={index} className={`${index % 2 === 0 ? 'bg-green-50/30' : 'bg-white'} hover:bg-green-100/50 transition-colors`}>
                                <td className="px-4 py-4 text-sm border-r border-gray-200 font-semibold text-gray-700">{row.no}</td>
                                <td className="px-4 py-4 text-sm border-r border-gray-200 text-gray-600">{row.tanggalOrder}</td>
                                <td className="px-4 py-4 text-sm border-r border-gray-200">
                                  <button className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-colors">
                                    {row.noAplikasi}
                                  </button>
                                </td>
                                <td className="px-4 py-4 text-sm border-r border-gray-200 text-gray-600">{row.tanggalAplikasi}</td>
                                <td className="px-4 py-4 text-sm border-r border-gray-200 text-gray-900 font-medium">{row.cabang}</td>
                                <td className="px-4 py-4 text-sm border-r border-gray-200 text-gray-900 font-medium">{row.namaPemohon}</td>
                                <td className="px-4 py-4 text-sm border-r border-gray-200 text-gray-600">{row.namaPadaBPKB || '-'}</td>
                                <td className="px-4 py-4 text-sm border-r border-gray-200">
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                                    {row.status}
                                  </span>
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-600">{row.tanggalStatus}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Detail Table - Mobile/Tablet Card View */}
                      <div className="lg:hidden p-4 space-y-4">
                        {detailTableData.map((row, index) => (
                          <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg transition-all hover:border-green-300">
                            <div className="flex items-start justify-between mb-4 pb-4 border-b-2 border-gray-100">
                              <div className="flex-1">
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">No. Aplikasi</span>
                                <button className="text-base font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                                  {row.noAplikasi}
                                </button>
                              </div>
                              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-green-500 to-green-600 text-white shadow-sm">
                                #{row.no}
                              </span>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 rounded-lg p-3">
                                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Tanggal Order</span>
                                  <p className="text-sm font-semibold text-gray-900">{row.tanggalOrder}</p>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-3">
                                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Tanggal Aplikasi</span>
                                  <p className="text-sm font-semibold text-gray-900">{row.tanggalAplikasi}</p>
                                </div>
                              </div>
                              
                              <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide block mb-1">Cabang</span>
                                <p className="text-sm font-semibold text-gray-900">{row.cabang}</p>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 rounded-lg p-3">
                                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Nama Pemohon</span>
                                  <p className="text-sm font-semibold text-gray-900">{row.namaPemohon}</p>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-3">
                                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Nama BPKB</span>
                                  <p className="text-sm font-semibold text-gray-900">{row.namaPadaBPKB || '-'}</p>
                                </div>
                              </div>
                              
                              <div className="pt-3 border-t-2 border-gray-100 grid grid-cols-2 gap-4">
                                <div>
                                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Status</span>
                                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">
                                    {row.status}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Tanggal Status</span>
                                  <p className="text-sm font-semibold text-gray-900">{row.tanggalStatus}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Pagination */}
                      <div className="p-3 sm:p-4 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                          Showing 1 to 1 of 1 entries
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            disabled
                            className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm border border-gray-300 rounded bg-white text-gray-400 cursor-not-allowed"
                          >
                            Prev
                          </button>
                          <button className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm border border-blue-500 rounded bg-blue-500 text-white">
                            1
                          </button>
                          <span className="text-xs sm:text-sm text-gray-600">Of 1</span>
                          <button 
                            disabled
                            className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm border border-gray-300 rounded bg-white text-gray-400 cursor-not-allowed"
                          >
                            Next
                          </button>
                        </div>
                      </div>

                      {/* Bottom Buttons */}
                      <div className="p-3 sm:p-4 bg-white border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={downloadExcel}
                          className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors shadow-md w-full sm:w-auto"
                        >
                          <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="hidden sm:inline">Download List Order</span>
                          <span className="sm:hidden">Download</span>
                        </button>
                        <button
                          onClick={handleBackToSummary}
                          className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors shadow-md w-full sm:w-auto"
                        >
                          Summary
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Summary View */
                    <div className="bg-white border-t border-gray-200">
                      {/* Summary Header */}
                      <div className="p-3 sm:p-4 lg:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                          <div className="flex items-start gap-2 sm:gap-3 w-full sm:w-auto">
                            <div className="p-1.5 sm:p-2 bg-green-100 rounded-lg flex-shrink-0">
                              <Package className="h-4 w-4 sm:h-6 sm:w-6 text-green-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 break-words">
                                Summary Order di cabang Adira
                              </h3>
                              <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-1 sm:gap-2 mt-1">
                                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                <span className="break-words">Periode 01/11/2024 s/d 30/11/2024</span>
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={downloadExcel}
                            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors shadow-md hover:shadow-lg w-full sm:w-auto flex-shrink-0"
                          >
                            <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden sm:inline">Download List Order</span>
                            <span className="sm:hidden">Download</span>
                          </button>
                        </div>
                      </div>

                      {/* Summary Cards Grid - Modern Layout */}
                      <div className="p-4 sm:p-6">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                          {summaryData.map((item, index) => {
                            const Icon = item.icon
                            return (
                              <div
                                key={index}
                                onClick={() => item.jumlah > 0 && handleStatusClick(item.status)}
                                className={`relative group overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                                  item.jumlah > 0 
                                    ? `${item.borderColor} hover:shadow-xl hover:scale-105 cursor-pointer` 
                                    : 'border-gray-200 opacity-60'
                                }`}
                              >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.lightBg} opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                                
                                {/* Content */}
                                <div className="relative p-4">
                                  <div className="flex items-start justify-between mb-3">
                                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${item.bgGradient} shadow-md`}>
                                      <Icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-xl font-bold ${
                                      item.jumlah > 0 ? `${item.color} text-white shadow-md` : 'bg-gray-200 text-gray-500'
                                    }`}>
                                      {item.jumlah}
                                    </div>
                                  </div>
                                  <h4 className={`text-sm font-semibold leading-tight min-h-[40px] ${item.textColor}`}>
                                    {item.status}
                                  </h4>
                                  {item.jumlah > 0 && (
                                    <div className="mt-2 flex items-center gap-1 text-xs font-medium text-gray-600 group-hover:text-gray-900">
                                      <span>Lihat Detail</span>
                                      <ChevronRight className="h-3 w-3" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            )
                          })}
                        </div>

                        {/* Total Summary Card */}
                        <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-xl p-6 shadow-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                                <Package className="h-8 w-8 text-white" />
                              </div>
                              <div>
                                <p className="text-white/90 text-sm font-medium mb-1">Total Semua Order</p>
                                <p className="text-white text-3xl font-bold">
                                  {summaryData.reduce((sum, item) => sum + item.jumlah, 0)}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-white/90 text-xs mb-1">Periode</p>
                              <p className="text-white text-sm font-semibold">Nov 2024</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Download Button at Bottom */}
                      <div className="p-3 sm:p-4 lg:p-5 bg-gray-50 border-t border-gray-200">
                        <button
                          onClick={downloadExcel}
                          className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors shadow-md hover:shadow-lg w-full sm:w-auto"
                        >
                          <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="hidden sm:inline">Download List Order</span>
                          <span className="sm:hidden">Download</span>
                        </button>
                      </div>
                    </div>
                  )
                ) : (
                  /* No Results State */
                  <div className="bg-gray-50 border-t border-gray-200 p-4 sm:p-8 lg:p-12">
                    <div className="flex flex-col items-center justify-center py-8 sm:py-12">
                      <div className="mb-4 sm:mb-6 p-4 sm:p-6 bg-white rounded-full shadow-md">
                        <svg className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-700 mb-2">No orders found</h3>
                      <p className="text-xs sm:text-sm text-gray-500 text-center max-w-md px-4">
                        Please select your filter criteria and click the &quot;Cari&quot; button to search for orders
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Dokumen Susulan Tab */
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Simple Search Bar with Filter Button */}
                <div className="p-4 sm:p-5 border-b border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        placeholder="Search dokumen susulan..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      />
                      <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    </div>
                    <button
                      onClick={() => setDokumenFilterOpen(true)}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors border border-gray-300"
                    >
                      <SlidersHorizontal className="h-5 w-5" />
                      <span>Filter</span>
                    </button>
                    <button
                      onClick={handleDokumenSearch}
                      className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      <Search className="h-5 w-5" />
                      <span>Cari</span>
                    </button>
                  </div>

                  {/* Active Filters Display */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {dokumenDealerCode && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        Dealer: {dokumenDealerCode}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setDokumenDealerCode('')} />
                      </span>
                    )}
                    {dokumenBranch && dokumenBranch !== 'All Cabang' && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                        Cabang: {dokumenBranch}
                        <X className="h-3 w-3 cursor-pointer" onClick={() => setDokumenBranch('All Cabang')} />
                      </span>
                    )}
                  </div>
                </div>

                {/* Filter Modal/Popup */}
                {dokumenFilterOpen && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 bg-black/50 z-50 transition-opacity"
                      onClick={() => setDokumenFilterOpen(false)}
                    />
                    
                    {/* Modal */}
                    <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-2xl lg:max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl z-50 overflow-hidden">
                      {/* Modal Header */}
                      <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <SlidersHorizontal className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">Filter Dokumen Susulan</h3>
                            <p className="text-xs text-gray-500">Customize your search criteria</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setDokumenFilterOpen(false)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <X className="h-5 w-5 text-gray-500" />
                        </button>
                      </div>

                      {/* Modal Body - Scrollable */}
                      <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
                        {/* Tracking Type Radio Buttons */}
                        <div className="mb-5">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">Jenis Tracking</label>
                          <div className="flex flex-wrap gap-4">
                            <label className="flex items-center gap-2 cursor-pointer group">
                              <input
                                type="radio"
                                name="dokumenTracking"
                                value="harian"
                                checked={dokumenTrackingType === 'harian'}
                                onChange={(e) => setDokumenTrackingType(e.target.value)}
                                className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                              />
                              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tracking Harian</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer group">
                              <input
                                type="radio"
                                name="dokumenTracking"
                                value="bulanan"
                                checked={dokumenTrackingType === 'bulanan'}
                                onChange={(e) => setDokumenTrackingType(e.target.value)}
                                className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                              />
                              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tracking Bulanan</span>
                            </label>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-200 mb-5"></div>

                        {/* Filter Fields */}
                        <div className="space-y-4">
                          {/* Row 1: Dealer & Dealer Code */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Dealer</label>
                              <select
                                value={dokumenDealer}
                                onChange={(e) => setDokumenDealer(e.target.value)}
                                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                              >
                                <option value="">Select Dealer</option>
                                {dealers.map((dealer) => (
                                  <option key={dealer} value={dealer}>{dealer}</option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Dealer Code</label>
                              <div className="relative">
                                <input
                                  type="text"
                                  value={dokumenDealerCode}
                                  onChange={(e) => setDokumenDealerCode(e.target.value)}
                                  placeholder="000195"
                                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                />
                                <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                              </div>
                            </div>
                          </div>

                          {/* Date Range Toggle for Dokumen */}
                          <div className="mb-4">
                            <div className="flex items-center gap-4">
                              <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                  type="checkbox"
                                  checked={isDokumenDateRange}
                                  onChange={(e) => setIsDokumenDateRange(e.target.checked)}
                                  className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500 rounded cursor-pointer"
                                />
                                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                  Gunakan Range Tanggal
                                </span>
                              </label>
                            </div>
                          </div>

                          {/* Date Picker Section for Dokumen */}
                          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border-2 border-blue-200">
                            <div className="flex items-center gap-2 mb-3">
                              <CalendarDays className="h-5 w-5 text-blue-600" />
                              <h4 className="text-sm font-semibold text-gray-900">
                                {isDokumenDateRange ? 'Pilih Range Tanggal' : 'Pilih Tanggal'}
                              </h4>
                            </div>
                            
                            <div className={`grid ${isDokumenDateRange ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-4`}>
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                  {isDokumenDateRange ? 'Tanggal Mulai' : 'Tanggal'}
                                </label>
                                <input
                                  type="date"
                                  value={dokumenStartDate}
                                  onChange={(e) => setDokumenStartDate(e.target.value)}
                                  className="w-full px-4 py-3 text-sm border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white font-medium shadow-sm hover:border-blue-400 transition-colors"
                                />
                              </div>

                              {isDokumenDateRange && (
                                <div>
                                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Tanggal Akhir
                                  </label>
                                  <input
                                    type="date"
                                    value={dokumenEndDate}
                                    onChange={(e) => setDokumenEndDate(e.target.value)}
                                    min={dokumenStartDate}
                                    className="w-full px-4 py-3 text-sm border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white font-medium shadow-sm hover:border-blue-400 transition-colors"
                                  />
                                </div>
                              )}
                            </div>

                            {/* Date Info Display */}
                            <div className="mt-3 p-3 bg-white/70 rounded-lg border border-blue-200">
                              <p className="text-xs text-gray-600">
                                <span className="font-semibold text-blue-700">Periode yang dipilih:</span>
                                {isDokumenDateRange ? (
                                  <span className="ml-2 font-medium text-gray-900">
                                    {new Date(dokumenStartDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })} 
                                    {' - '} 
                                    {new Date(dokumenEndDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}
                                  </span>
                                ) : (
                                  <span className="ml-2 font-medium text-gray-900">
                                    {new Date(dokumenStartDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}
                                  </span>
                                )}
                              </p>
                            </div>
                          </div>

                          {/* Row 4: Cabang */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Cabang Adira</label>
                            <div className="relative">
                              <input
                                type="text"
                                value={dokumenBranch}
                                onChange={(e) => setDokumenBranch(e.target.value)}
                                placeholder="All Cabang"
                                className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                              />
                              <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                            </div>
                          </div>

                          {/* Row 5: Status Order */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Status Order</label>
                            <select
                              value={dokumenStatus}
                              onChange={(e) => setDokumenStatus(e.target.value)}
                              className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                            >
                              {orderStatuses.map((status) => (
                                <option key={status} value={status}>{status}</option>
                              ))}
                            </select>
                          </div>

                          {/* Info Box */}
                          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-3 mt-4">
                            <div className="flex gap-2">
                              <InfoIcon className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              <div className="text-xs text-blue-900 space-y-0.5">
                                <p>• Tracking harian maksimum 31 hari yang lalu</p>
                                <p>• Tracking bulanan menampilkan status tracking 1 bulan lalu sampai 6 bulan lalu</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Modal Footer */}
                      <div className="flex items-center justify-between gap-3 p-4 sm:p-5 border-t border-gray-200 bg-gray-50">
                        <button
                          onClick={resetDokumenFilters}
                          className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Reset Filter
                        </button>
                        <div className="flex gap-3">
                          <button
                            onClick={() => setDokumenFilterOpen(false)}
                            className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            Batal
                          </button>
                          <button
                            onClick={applyDokumenFilters}
                            className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg shadow-md hover:shadow-lg transition-all"
                          >
                            Terapkan Filter
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Results Section */}
                {showDokumenResults ? (
                  showDokumenDetailTable ? (
                    /* Detail Table View */
                    <div className="bg-white border-t border-gray-200">
                      {/* Header with back button */}
                      <div className="p-4 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 via-white to-blue-50">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                          <button
                            onClick={handleBackToDokumenSummary}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm w-full sm:w-auto justify-center sm:justify-start"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            <span>Kembali ke Summary</span>
                          </button>
                          <button
                            onClick={downloadExcel}
                            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg transition-all shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
                          >
                            <Download className="h-4 w-4" />
                            <span>Download List Order</span>
                          </button>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <FileText className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Detail Order - {selectedDokumenStatus}</h3>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                Periode: {new Date(dokumenStartDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}
                                {isDokumenDateRange && ` - ${new Date(dokumenEndDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}`}
                              </span>
                              <span className="flex items-center gap-1">
                                <Package className="h-4 w-4" />
                                Total: 0 order
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Table Controls */}
                      <div className="p-4 bg-gradient-to-r from-gray-700 to-gray-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <label className="text-white text-sm font-medium">Show:</label>
                          <select className="px-3 py-2 text-sm bg-gray-600 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                          </select>
                          <span className="text-white text-sm">entries</span>
                        </div>
                        <div className="flex items-center gap-2 flex-1 sm:flex-initial">
                          <label className="text-white text-sm font-medium whitespace-nowrap">Search:</label>
                          <input
                            type="text"
                            placeholder="Cari..."
                            className="flex-1 sm:w-64 px-3 py-2 text-sm border border-gray-500 rounded-lg bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      {/* Detail Table - Desktop */}
                      <div className="hidden lg:block overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                            <tr>
                              <th className="px-4 py-4 text-left text-sm font-bold border-r border-blue-400">
                                <div className="flex items-center gap-1">
                                  No.
                                </div>
                              </th>
                              <th className="px-4 py-4 text-left text-sm font-bold border-r border-blue-400">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-100">
                                  Tanggal Order
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </th>
                              <th className="px-4 py-4 text-left text-sm font-bold border-r border-blue-400">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-100">
                                  No. Aplikasi
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </th>
                              <th className="px-4 py-4 text-left text-sm font-bold border-r border-blue-400">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-100">
                                  Tanggal Aplikasi
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </th>
                              <th className="px-4 py-4 text-left text-sm font-bold border-r border-blue-400">Cabang</th>
                              <th className="px-4 py-4 text-left text-sm font-bold border-r border-blue-400">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-100">
                                  Nama Pemohon
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </th>
                              <th className="px-4 py-4 text-left text-sm font-bold border-r border-blue-400">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-100">
                                  Nama Pada BPKB
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </th>
                              <th className="px-4 py-4 text-left text-sm font-bold border-r border-blue-400">Status</th>
                              <th className="px-4 py-4 text-left text-sm font-bold">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-100">
                                  Tanggal Status
                                  <ChevronDown className="h-4 w-4" />
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-blue-50/30 hover:bg-blue-100/50">
                              <td colSpan={9} className="px-4 py-12 text-center">
                                <div className="flex flex-col items-center justify-center">
                                  <div className="p-4 bg-blue-100 rounded-full mb-3">
                                    <FileText className="h-8 w-8 text-blue-400" />
                                  </div>
                                  <p className="text-sm font-semibold text-gray-700 mb-1">Tidak ada data</p>
                                  <p className="text-xs text-gray-500">Belum ada dokumen susulan untuk periode ini</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Detail Table - Mobile/Tablet Card View */}
                      <div className="lg:hidden p-4">
                        <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-6 text-center shadow-md">
                          <div className="flex flex-col items-center justify-center">
                            <div className="p-4 bg-blue-100 rounded-full mb-3">
                              <FileText className="h-8 w-8 text-blue-400" />
                            </div>
                            <p className="text-sm font-semibold text-gray-700 mb-1">Tidak ada data</p>
                            <p className="text-xs text-gray-500">Belum ada dokumen susulan untuk periode ini</p>
                          </div>
                        </div>
                      </div>

                      {/* Pagination */}
                      <div className="p-3 sm:p-4 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                          Showing 0 to 0 of 0 entries
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            disabled
                            className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm border border-gray-300 rounded bg-white text-gray-400 cursor-not-allowed"
                          >
                            Prev
                          </button>
                          <button className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm border border-blue-500 rounded bg-blue-500 text-white">
                            1
                          </button>
                          <span className="text-xs sm:text-sm text-gray-600">Of 1</span>
                          <button 
                            disabled
                            className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm border border-gray-300 rounded bg-white text-gray-400 cursor-not-allowed"
                          >
                            Next
                          </button>
                        </div>
                      </div>

                      {/* Bottom Buttons */}
                      <div className="p-3 sm:p-4 bg-white border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={downloadExcel}
                          className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors shadow-md w-full sm:w-auto"
                        >
                          <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="hidden sm:inline">Download List Order</span>
                          <span className="sm:hidden">Download</span>
                        </button>
                        <button
                          onClick={handleBackToDokumenSummary}
                          className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors shadow-md w-full sm:w-auto"
                        >
                          Summary
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Summary View */
                    <div className="bg-white border-t border-gray-200">
                      {/* Summary Header */}
                      <div className="p-3 sm:p-4 lg:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                          <div className="flex items-start gap-2 sm:gap-3 w-full sm:w-auto">
                            <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg flex-shrink-0">
                              <FileText className="h-4 w-4 sm:h-6 sm:w-6 text-blue-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 break-words">
                                Summary Order Dlc {dokumenDealerCode}
                              </h3>
                              <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-1 sm:gap-2 mt-1">
                                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                <span className="break-words">
                                  Periode: {new Date(dokumenStartDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}
                                  {isDokumenDateRange && ` s/d ${new Date(dokumenEndDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}`}
                                </span>
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={downloadExcel}
                            className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors shadow-md hover:shadow-lg w-full sm:w-auto flex-shrink-0"
                          >
                            <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden sm:inline">Download List Order</span>
                            <span className="sm:hidden">Download</span>
                          </button>
                        </div>
                      </div>

                      {/* Summary Cards Grid - Modern Layout */}
                      <div className="p-4 sm:p-6">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          {dokumenSummaryData.map((item, index) => {
                            const Icon = item.icon
                            return (
                              <div
                                key={index}
                                onClick={() => item.jumlah > 0 && handleDokumenStatusClick(item.status)}
                                className={`relative group overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                                  item.jumlah > 0 
                                    ? `${item.borderColor} hover:shadow-xl hover:scale-105 cursor-pointer` 
                                    : 'border-gray-200 opacity-60'
                                }`}
                              >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.lightBg} opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                                
                                {/* Content */}
                                <div className="relative p-6">
                                  <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-lg bg-gradient-to-br ${item.bgGradient} shadow-md`}>
                                      <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div className={`px-4 py-2 rounded-full text-2xl font-bold ${
                                      item.jumlah > 0 ? `${item.color} text-white shadow-md` : 'bg-gray-200 text-gray-500'
                                    }`}>
                                      {item.jumlah}
                                    </div>
                                  </div>
                                  <h4 className={`text-base font-semibold leading-tight ${item.textColor}`}>
                                    {item.status}
                                  </h4>
                                  {item.jumlah > 0 && (
                                    <div className="mt-3 flex items-center gap-1 text-sm font-medium text-gray-600 group-hover:text-gray-900">
                                      <span>Lihat Detail</span>
                                      <ChevronRight className="h-4 w-4" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            )
                          })}
                        </div>

                        {/* Total Summary Card */}
                        <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 rounded-xl p-6 shadow-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                                <FileText className="h-8 w-8 text-white" />
                              </div>
                              <div>
                                <p className="text-white/90 text-sm font-medium mb-1">Total Dokumen Susulan</p>
                                <p className="text-white text-3xl font-bold">
                                  {dokumenSummaryData.reduce((sum, item) => sum + item.jumlah, 0)}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-white/90 text-xs mb-1">Periode</p>
                              <p className="text-white text-sm font-semibold">
                                {new Date(dokumenStartDate).toLocaleDateString('id-ID', { month: 'short', year: 'numeric' })}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Download Button at Bottom */}
                      <div className="p-3 sm:p-4 lg:p-5 bg-gray-50 border-t border-gray-200">
                        <button
                          onClick={downloadExcel}
                          className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors shadow-md hover:shadow-lg w-full sm:w-auto"
                        >
                          <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="hidden sm:inline">Download List Order</span>
                          <span className="sm:hidden">Download</span>
                        </button>
                      </div>
                    </div>
                  )
                ) : (
                  /* No Results State */
                  <div className="bg-gray-50 border-t border-gray-200 p-4 sm:p-8 lg:p-12">
                    <div className="flex flex-col items-center justify-center py-8 sm:py-12">
                      <div className="mb-4 sm:mb-6 p-4 sm:p-6 bg-white rounded-full shadow-md">
                        <FileText className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-gray-300" />
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-700 mb-2">No documents found</h3>
                      <p className="text-xs sm:text-sm text-gray-500 text-center max-w-md px-4">
                        Please select your filter criteria and click the &quot;Cari&quot; button to search for documents
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
