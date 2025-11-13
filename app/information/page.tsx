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
  Filter,
  Download,
  FileText,
  Clock,
  TrendingUp,
  DollarSign,
  Percent,
  Building2,
  AlertCircle,
  ChevronRight
} from 'lucide-react'

export default function InformationPage() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('transfer')
  const [trackingType, setTrackingType] = useState('bulanan')
  const [dealerCode, setDealerCode] = useState('000195')
  const [selectedMonth, setSelectedMonth] = useState('May')
  const [selectedYear, setSelectedYear] = useState('2025')
  const [selectedDay, setSelectedDay] = useState('1')
  const [selectedEndDay, setSelectedEndDay] = useState('31')
  const [selectedEndMonth, setSelectedEndMonth] = useState('May')
  const [selectedEndYear, setSelectedEndYear] = useState('2025')
  const [rekening, setRekening] = useState('ALL')
  const [showTable, setShowTable] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showBuktiTable, setShowBuktiTable] = useState(false)
  const [selectedBuktiMonth, setSelectedBuktiMonth] = useState('October')
  const [selectedBuktiYear, setSelectedBuktiYear] = useState('2025')
  const [showMutasiTable, setShowMutasiTable] = useState(false)
  const [jenisMutasi, setJenisMutasi] = useState('Pre Payment')
  const [mutasiTrackingType, setMutasiTrackingType] = useState('bulanan')
  const [selectedMutasiMonth, setSelectedMutasiMonth] = useState('October')
  const [selectedMutasiYear, setSelectedMutasiYear] = useState('2025')
  const [selectedMutasiDay, setSelectedMutasiDay] = useState('1')
  const [selectedMutasiEndDay, setSelectedMutasiEndDay] = useState('31')
  const [selectedMutasiEndMonth, setSelectedMutasiEndMonth] = useState('October')
  const [selectedMutasiEndYear, setSelectedMutasiEndYear] = useState('2025')
  const [nomorRegister, setNomorRegister] = useState('')
  const [showBpkbTable, setShowBpkbTable] = useState(false)
  const [bpkbDealerCode, setBpkbDealerCode] = useState('000095')
  const [showMutasiFilterModal, setShowMutasiFilterModal] = useState(false)

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

  const tabs = [
    { id: 'transfer', label: 'Transfer Pembayaran', icon: DollarSign },
    { id: 'bukti', label: 'Bukti Potong Pajak', icon: FileText },
    { id: 'mutasi', label: 'Mutasi', icon: TrendingUp },
    { id: 'bpkb', label: 'BPKB', icon: Building2 },
  ]

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const years = ['2023', '2024', '2025', '2026']
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString())

  // Sample data untuk tabel
  const transferData = [
    { no: 1, tanggal: '30-SEP-2025', jenisPembayaran: 'PRODUCT', noReferensi: '2005286481', bank: 'BCA', accountNo: '8100317002', accountName: 'Amarta Sayap Merah PT', unit: 2, jumlah: '41,200,000', status: 'Berhasil' },
    { no: 2, tanggal: '30-SEP-2025', jenisPembayaran: 'KML', noReferensi: '2005316228', bank: 'BCA', accountNo: '8100315565', accountName: 'AMARTA SAYAP MERAH PT', unit: 0, jumlah: '1,914,865', status: 'Berhasil' },
    { no: 3, tanggal: '30-SEP-2025', jenisPembayaran: 'PRODUCT', noReferensi: '2005315796', bank: 'BCA', accountNo: '8100317002', accountName: 'Amarta Sayap Merah PT', unit: 2, jumlah: '37,225,000', status: 'Berhasil' },
    { no: 4, tanggal: '30-SEP-2025', jenisPembayaran: 'KML', noReferensi: '2005315105', bank: 'BCA', accountNo: '8100315565', accountName: 'AMARTA SAYAP MERAH PT', unit: 0, jumlah: '981,982', status: 'Berhasil' },
    { no: 5, tanggal: '30-SEP-2025', jenisPembayaran: 'PRODUCT', noReferensi: '2005314747', bank: 'BCA', accountNo: '8100317002', accountName: 'Amarta Sayap Merah PT', unit: 2, jumlah: '33,875,000', status: 'Berhasil' },
    { no: 6, tanggal: '30-SEP-2025', jenisPembayaran: 'KML', noReferensi: '2005287044', bank: 'BCA', accountNo: '8100315565', accountName: 'AMARTA SAYAP MERAH PT', unit: 0, jumlah: '1,571,172', status: 'Berhasil' },
    { no: 7, tanggal: '29-SEP-2025', jenisPembayaran: 'PRODUCT', noReferensi: '2005236544', bank: 'BCA', accountNo: '8100317002', accountName: 'Amarta Sayap Merah PT', unit: 10, jumlah: '224,825,000', status: 'Berhasil' },
    { no: 8, tanggal: '29-SEP-2025', jenisPembayaran: 'KML', noReferensi: '2005237678', bank: 'BCA', accountNo: '8100315565', accountName: 'AMARTA SAYAP MERAH PT', unit: 0, jumlah: '7,954,056', status: 'Berhasil' },
    { no: 9, tanggal: '26-SEP-2025', jenisPembayaran: 'KOMISI', noReferensi: '2005232047', bank: 'BCA', accountNo: '8100315565', accountName: 'AMARTA SAYAP MERAH PT', unit: 70, jumlah: '27,078,537', status: 'Berhasil' },
    { no: 10, tanggal: '26-SEP-2025', jenisPembayaran: 'PRODUCT', noReferensi: '2005233187', bank: 'BCA', accountNo: '8100317002', accountName: 'Amarta Sayap Merah PT', unit: 1, jumlah: '28,450,000', status: 'Berhasil' },
  ]

  // Sample data untuk Bukti Potong Pajak
  const buktiPotongData = [
    { no: 1, npwpDealer: '0033326646421000', noBpNpwp: '100099104', namaDealer: 'AMARTA SAYAP MERAH', alamatDealer: 'INDONESIA', jenisPph: '23', jenisKomisi: 'LANGSUNG', action: 'Cetak' },
    { no: 2, npwpDealer: '0033326646421000', noBpNpwp: '100099104', namaDealer: 'AMARTA SAYAP MERAH', alamatDealer: 'INDONESIA', jenisPph: '23', jenisKomisi: 'REGULER', action: 'Cetak' },
  ]

  // Sample data untuk Mutasi
  const mutasiSummaryData = [
    { label: 'Saldo Awal', value: '0' },
    { label: 'Total Credits', value: '0' },
    { label: 'Total Debits', value: '0' },
    { label: 'Saldo Akhir', value: '0' },
    { label: 'Tagihan Belum Terbayar', value: '0' },
    { label: 'Saldo Akhir Prediksi', value: '0' },
  ]

  const jenisMutasiOptions = [
    'Pre Payment',
    'Post Payment',
    'Commission',
    'Refund',
    'Other'
  ]

  // Sample data untuk BPKB
  const bpkbData = [
    { no: 1, surat: 'SIT II BPKB', dlc: '000095', namaDealer: 'AMARTA SAYAP MERAH-MOCH TOHA', noSurat: '02001125001961/ADMF-BANDUNG AREA/SIT 2-BPKB/11/2025' },
    { no: 2, surat: 'SIT I BPKB', dlc: '000095', namaDealer: 'AMARTA SAYAP MERAH-MOCH TOHA', noSurat: '02001125001966/ADMF-BANDUNG AREA/SIT 1-BPKB/11/2025' },
  ]

  const bpkbDetailData = [
    { status: 'OVERDUE > 3 TAHUN', jumlah: 0, konfirmasi: 0 },
    { status: 'OVERDUE 2 TAHUN', jumlah: 0, konfirmasi: 0 },
    { status: 'OVERDUE 1 TAHUN', jumlah: 1, konfirmasi: 0 },
    { status: 'OVERDUE 180 HARI', jumlah: 21, konfirmasi: 0 },
    { status: 'OVERDUE 60 HARI', jumlah: 12, konfirmasi: 0 },
    { status: 'OVERDUE 30 HARI', jumlah: 63, konfirmasi: 0 },
    { status: 'OUTSTANDING', jumlah: 355, konfirmasi: 0 },
    { status: 'TOTAL', jumlah: 452, konfirmasi: 0, isTotal: true },
  ]

  const handleBuktiSearch = () => {
    setShowBuktiTable(true)
  }

  const handleMutasiSearch = () => {
    setShowMutasiTable(true)
  }

  const handleBpkbSearch = () => {
    setShowBpkbTable(true)
  }

  const handleSearch = () => {
    console.log('Searching...', {
      trackingType,
      dealerCode,
      selectedMonth,
      selectedYear,
      selectedDay,
      selectedEndDay,
      selectedEndMonth,
      selectedEndYear,
      rekening
    })
    setShowTable(true)
    setCurrentPage(1)
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
              const isInformation = item.label === 'Information'
              
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
                    isInformation
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold shadow-md'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${isInformation ? 'text-gray-900' : ''}`} />
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
                <span className="text-gray-900 font-medium">Information</span>
              </div>
            </div>

            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Information</h1>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="flex overflow-x-auto">
                  {tabs.map((tab) => {
                    const TabIcon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                          activeTab === tab.id
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <TabIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="hidden sm:inline">{tab.label}</span>
                        <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                {activeTab === 'transfer' && (
                  <div className="space-y-6">
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

                    {/* Simple Search Bar with Filter */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1 relative">
                        <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Cari berdasarkan No Referensi, Bank, atau Account..."
                          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-gray-900 bg-white"
                        />
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <button
                          onClick={() => setShowFilterModal(true)}
                          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                          <span className="text-xs sm:text-sm font-medium text-gray-700">Filter</span>
                        </button>
                        <button
                          onClick={handleSearch}
                          className="flex-1 sm:flex-none bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                        >
                          <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="text-xs sm:text-sm">Cari</span>
                        </button>
                      </div>
                    </div>

                    {/* Info Notes */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <p className="text-sm text-blue-900">
                            - Tracking harian maksimum 31 hari yang lalu
                          </p>
                          <p className="text-sm text-blue-900">
                            - Tracking bulanan menampilkan status tracking 1 bulan lalu sampai 6 bulan lalu
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Date Range Display */}
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Calendar className="h-5 w-5 text-purple-600" />
                        <span className="font-medium">Informasi Transfer Pembayaran</span>
                        <span className="text-gray-600">1/9/2025 s/d 30/9/2025</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Total: 83</p>
                    </div>

                    {/* Table Display */}
                    {showTable && (
                      <div className="space-y-4">
                        {/* Show Entries */}
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">Show</span>
                          <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                          </select>
                          <span className="text-sm text-gray-600">entries</span>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto border border-gray-200 rounded-lg">
                          <table className="w-full min-w-max">
                            <thead className="bg-gradient-to-r from-yellow-400 to-yellow-500">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">No.</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">Tanggal</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">Jenis Pembayaran</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">No Referensi</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">Bank</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">Account No</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">Account A/N</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">Unit</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">Jumlah</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Status Transfer</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              {transferData.map((item, index) => (
                                <tr key={item.no} className={index % 2 === 0 ? 'bg-yellow-50' : 'bg-white'}>
                                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200">{item.no}</td>
                                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200">{item.tanggal}</td>
                                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200">{item.jenisPembayaran}</td>
                                  <td className="px-4 py-3 text-sm text-blue-600 hover:underline cursor-pointer border-r border-gray-200">{item.noReferensi}</td>
                                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200">{item.bank}</td>
                                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200">{item.accountNo}</td>
                                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200">{item.accountName}</td>
                                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200">{item.unit}</td>
                                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-200">{item.jumlah}</td>
                                  <td className="px-4 py-3 text-sm">
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                      {item.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-between bg-yellow-400 rounded-lg px-4 py-3">
                          <button className="px-4 py-2 bg-white text-gray-700 rounded hover:bg-gray-100 text-sm font-medium">
                            Prev
                          </button>
                          <div className="flex items-center gap-2">
                            <button className="w-8 h-8 bg-white rounded flex items-center justify-center text-sm font-medium">
                              1
                            </button>
                            <span className="text-sm text-gray-900">of 9</span>
                          </div>
                          <button className="px-4 py-2 bg-white text-gray-700 rounded hover:bg-gray-100 text-sm font-medium">
                            Next
                          </button>
                        </div>

                        {/* Download Button */}
                        <div>
                          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                            <Download className="h-5 w-5" />
                            Download List Transfer
                          </button>
                        </div>
                      </div>
                    )}

                    {/* No Data Message - Only show when table is not shown */}
                    {!showTable && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                        <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-3" />
                        <p className="text-red-800 font-semibold">Data tidak Ditemukan</p>
                        <p className="text-red-600 text-sm mt-1">Silakan ubah kriteria pencarian Anda</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'bukti' && (
                  <div className="space-y-6">
                    {/* Filter Section */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 sm:p-6 border border-gray-200">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Dealer Code */}
                        <div className="space-y-2">
                          <label className="block text-xs sm:text-sm font-medium text-gray-700">
                            Dealer Code
                          </label>
                          <div className="relative">
                            <select
                              value={dealerCode}
                              onChange={(e) => setDealerCode(e.target.value)}
                              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-gray-900 bg-white appearance-none"
                            >
                              <option value="000095">000095</option>
                              <option value="000195">000195</option>
                              <option value="000196">000196</option>
                            </select>
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 pointer-events-none" />
                          </div>
                        </div>

                        {/* Bulan */}
                        <div className="space-y-2">
                          <label className="block text-xs sm:text-sm font-medium text-gray-700">
                            Bulan :
                          </label>
                          <select
                            value={selectedBuktiMonth}
                            onChange={(e) => setSelectedBuktiMonth(e.target.value)}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-gray-900 bg-white"
                          >
                            {months.map((month) => (
                              <option key={month} value={month}>{month}</option>
                            ))}
                          </select>
                        </div>

                        {/* Tahun */}
                        <div className="space-y-2">
                          <label className="block text-xs sm:text-sm font-medium text-gray-700">
                            Tahun :
                          </label>
                          <select
                            value={selectedBuktiYear}
                            onChange={(e) => setSelectedBuktiYear(e.target.value)}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-gray-900 bg-white"
                          >
                            {years.map((year) => (
                              <option key={year} value={year}>{year}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Info Notes */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="space-y-2">
                        <p className="text-xs sm:text-sm text-blue-900">
                          - Bukti Potong Pajak diterbitkan setiap tanggal 9
                        </p>
                        <p className="text-xs sm:text-sm text-blue-900">
                          - Bukti Potong pajak maksimal untuk menampilkan tahun ini dan tahun lalu
                        </p>
                        <p className="text-xs sm:text-sm text-blue-900">
                          - Bukti Potong pajak yang dicetak otomatis dari system aplikasi Ad1Gate dianggap sah oleh PT. Adira Dinamika Multi Finance
                        </p>
                        <p className="text-xs sm:text-sm text-blue-900">
                          - Laporkan Bukti Potong Pajak yang sudah dicetak melalui Ad1Gate dengan cara{' '}
                          <button className="text-blue-600 hover:text-blue-800 underline font-medium">
                            klik disini
                          </button>
                        </p>
                        <p className="text-xs sm:text-sm text-blue-900 font-semibold">
                          - Terdapat keterlambatan penerbitan bukti potong pajak tahun 2025 yang disebabkan tidak stabilnya penerbitan dan pelaporan bukti potong melalui Sistem Inti Administrasi Perpajakan CoreTax.
                        </p>
                      </div>
                    </div>

                    {/* Search Button */}
                    <div className="flex justify-center">
                      <button
                        onClick={handleBuktiSearch}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                      >
                        <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="text-sm sm:text-base">Cari</span>
                      </button>
                    </div>

                    {/* Results Display */}
                    {showBuktiTable && (
                      <div className="space-y-4">
                        {/* Total Info */}
                        <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
                          <p className="text-xs sm:text-sm text-gray-700">
                            <span className="font-semibold">Total :</span> 2
                          </p>
                        </div>

                        {/* Show Entries */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm text-gray-600">Show</span>
                          <select className="border border-gray-300 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm bg-white">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                          </select>
                          <span className="text-xs sm:text-sm text-gray-600">entries</span>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-md">
                          <table className="w-full min-w-max">
                            <thead className="bg-gradient-to-r from-yellow-400 to-yellow-500">
                              <tr>
                                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">No.</th>
                                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">NPWP Dealer</th>
                                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">No BP NPWP</th>
                                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">Nama NPWP Dealer</th>
                                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">Alamat NPWP Dealer</th>
                                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">Jenis PPH</th>
                                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">Jenis Komisi</th>
                                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-900">Action</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              {buktiPotongData.map((item, index) => (
                                <tr key={item.no} className={index % 2 === 0 ? 'bg-yellow-50' : 'bg-white'}>
                                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 border-r border-gray-200">{item.no}</td>
                                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 border-r border-gray-200">{item.npwpDealer}</td>
                                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 border-r border-gray-200">{item.noBpNpwp}</td>
                                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 border-r border-gray-200">{item.namaDealer}</td>
                                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 border-r border-gray-200">{item.alamatDealer}</td>
                                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 border-r border-gray-200">{item.jenisPph}</td>
                                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 border-r border-gray-200">{item.jenisKomisi}</td>
                                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">
                                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded text-xs sm:text-sm font-medium transition-colors">
                                      *{item.action}
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Pagination */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-yellow-400 rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                          <button className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-gray-700 rounded hover:bg-gray-100 text-xs sm:text-sm font-medium transition-colors">
                            Prev
                          </button>
                          <div className="flex items-center gap-2">
                            <button className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded flex items-center justify-center text-xs sm:text-sm font-medium">
                              1
                            </button>
                            <span className="text-xs sm:text-sm text-gray-900 font-medium">Of 1</span>
                          </div>
                          <button className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-gray-700 rounded hover:bg-gray-100 text-xs sm:text-sm font-medium transition-colors">
                            Next
                          </button>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                            <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                            <span className="text-xs sm:text-sm">Download List Pajak</span>
                          </button>
                          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                            <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                            <span className="text-xs sm:text-sm">Cetak Semua</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'mutasi' && (
                  <div className="space-y-6">
                    {/* Simple Search Bar with Filter */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1 relative">
                        <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                        <input
                          type="text"
                          value={nomorRegister}
                          onChange={(e) => setNomorRegister(e.target.value)}
                          placeholder="Cari berdasarkan Nomor Registrasi..."
                          className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-gray-900 bg-white"
                        />
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <button
                          onClick={() => setShowMutasiFilterModal(true)}
                          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                          <span className="text-xs sm:text-sm font-medium text-gray-700">Filter</span>
                        </button>
                        <button
                          onClick={handleMutasiSearch}
                          className="flex-1 sm:flex-none bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                        >
                          <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="text-xs sm:text-sm">Cari</span>
                        </button>
                      </div>
                    </div>

                    {/* Info Notes */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="space-y-2">
                        <p className="text-xs sm:text-sm text-blue-900">
                          - Tracking harian maksimum 31 hari yang lalu
                        </p>
                        <p className="text-xs sm:text-sm text-blue-900">
                          - Tracking bulanan menampilkan status tracking 1 bulan lalu dan 2 bulan lalu
                        </p>
                      </div>
                    </div>

                    {/* Results Display */}
                    {showMutasiTable && (
                      <div className="space-y-4">
                        {/* Header Info */}
                        <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
                          <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                            Data Transaksi Mutasi Pembayaran Pre Payment :
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-700 mt-1">
                            Periode : 1/10/2025 s/d 31/10/2025
                          </p>
                          <p className="text-xs sm:text-sm text-gray-700">
                            Plafond Maksimal Pre Payment : Rp. 0
                          </p>
                        </div>

                        {/* Summary Table */}
                        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-400 rounded-lg p-4 sm:p-6 shadow-lg">
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead className="bg-gradient-to-r from-yellow-400 to-yellow-500">
                                <tr>
                                  <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">Tgl.</th>
                                  <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">Keterangan</th>
                                  <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">DLC</th>
                                  <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">Nama Nasabah</th>
                                  <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">Nama BPKB</th>
                                  <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">Nomor Mesin</th>
                                  <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">Nomor Register</th>
                                  <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">Mutasi</th>
                                  <th className="px-3 sm:px-4 py-2 text-left text-xs sm:text-sm font-bold text-gray-900">Balance</th>
                                </tr>
                              </thead>
                              <tbody className="bg-white">
                                {mutasiSummaryData.map((item, index) => (
                                  <tr key={index} className="border-b border-gray-200">
                                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-900 font-medium border-r border-gray-200" colSpan={2}>
                                      {item.label}
                                    </td>
                                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-900 border-r border-gray-200">:</td>
                                    <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-900 font-semibold" colSpan={6}>
                                      {item.value}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Download Button */}
                        <div>
                          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                            <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                            <span className="text-xs sm:text-sm">Download List Mutasi</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'bpkb' && (
                  <div className="space-y-6">
                    {/* Filter Section */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 sm:p-6 border border-gray-200">
                      <div className="space-y-2">
                        <label className="block text-xs sm:text-sm font-medium text-gray-700">
                          Dealer Code
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={bpkbDealerCode}
                            onChange={(e) => setBpkbDealerCode(e.target.value)}
                            placeholder="000095"
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-gray-900 bg-white"
                          />
                          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Info Notes */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="space-y-2">
                        <p className="text-xs sm:text-sm text-blue-900">
                          - Surat Informasi Tagihan BPKB diterbitkan setiap bulan
                        </p>
                        <p className="text-xs sm:text-sm text-blue-900">
                          - Diwajibkan Dealer untuk mengisi konfirmasi BPKB
                        </p>
                      </div>
                    </div>

                    {/* Search Button */}
                    <div className="flex justify-center">
                      <button
                        onClick={handleBpkbSearch}
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                      >
                        <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="text-sm sm:text-base">Cari</span>
                      </button>
                    </div>

                    {/* Results Display */}
                    {showBpkbTable && (
                      <div className="space-y-4">
                        {/* Show Entries */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm text-gray-600">Show</span>
                          <select className="border border-gray-300 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm bg-white">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                          </select>
                          <span className="text-xs sm:text-sm text-gray-600">entries</span>
                        </div>

                        {/* Main BPKB Table */}
                        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-md">
                          <table className="w-full min-w-max">
                            <thead className="bg-gradient-to-r from-yellow-400 to-yellow-500">
                              <tr>
                                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">No.</th>
                                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">Surat</th>
                                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">DLC</th>
                                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-900 border-r border-yellow-600">Nama Dealer</th>
                                <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-gray-900">No. Surat</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              {bpkbData.map((item, index) => (
                                <tr key={item.no} className={index % 2 === 0 ? 'bg-yellow-50' : 'bg-white'}>
                                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 border-r border-gray-200">{item.no}</td>
                                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm border-r border-gray-200">
                                    <button className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                                      {item.surat}
                                    </button>
                                  </td>
                                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 border-r border-gray-200">{item.dlc}</td>
                                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 border-r border-gray-200">{item.namaDealer}</td>
                                  <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900">{item.noSurat}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Detail Information Section */}
                        <div className="space-y-3">
                          <h3 className="text-sm sm:text-base font-bold text-gray-900">
                            Detail Informasi BPKB :
                          </h3>

                          {/* Detail Table */}
                          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-400 rounded-lg overflow-hidden shadow-lg max-w-2xl">
                            <table className="w-full">
                              <thead className="bg-gradient-to-r from-yellow-400 to-yellow-500">
                                <tr>
                                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">
                                    Status BPKB
                                  </th>
                                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">
                                    Jumlah
                                  </th>
                                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900">
                                    Konfirmasi
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                {bpkbDetailData.map((item, index) => (
                                  <tr 
                                    key={index} 
                                    className={`
                                      ${item.isTotal ? 'bg-yellow-100 font-bold' : index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                                      ${item.jumlah > 0 && !item.isTotal ? 'hover:bg-blue-50' : ''}
                                      transition-colors
                                    `}
                                  >
                                    <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900 border-r border-gray-200">
                                      {item.status}
                                    </td>
                                    <td className={`px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm border-r border-gray-200 ${
                                      item.jumlah > 0 ? 'text-blue-600 font-semibold' : 'text-gray-900'
                                    }`}>
                                      {item.jumlah}
                                    </td>
                                    <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900">
                                      {item.konfirmasi}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Filter Modal */}
      {showFilterModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-lg sm:rounded-xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between rounded-t-lg sm:rounded-t-xl z-10">
              <div className="flex items-center gap-2 sm:gap-3">
                <Filter className="h-5 w-5 sm:h-6 sm:w-6" />
                <h3 className="text-base sm:text-xl font-bold">Filter Pencarian</h3>
              </div>
              <button
                onClick={() => setShowFilterModal(false)}
                className="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Dealer Code */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">
                  Dealer Code
                </label>
                <div className="relative">
                  <select
                    value={dealerCode}
                    onChange={(e) => setDealerCode(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-gray-900 bg-white appearance-none"
                  >
                    <option value="000195">000195</option>
                    <option value="000196">000196</option>
                    <option value="000197">000197</option>
                  </select>
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Date Range */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Start Date */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Tanggal Mulai
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Tanggal</label>
                      <select
                        value={selectedDay}
                        onChange={(e) => setSelectedDay(e.target.value)}
                        className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm text-gray-900 bg-white"
                      >
                        {days.map((day) => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Bulan</label>
                      <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm text-gray-900 bg-white"
                      >
                        {months.map((month) => (
                          <option key={month} value={month}>{month.substring(0, 3)}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Tahun</label>
                      <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm text-gray-900 bg-white"
                      >
                        {years.map((year) => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* End Date */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Tanggal Akhir
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Tanggal</label>
                      <select
                        value={selectedEndDay}
                        onChange={(e) => setSelectedEndDay(e.target.value)}
                        className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm text-gray-900 bg-white"
                      >
                        {days.map((day) => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Bulan</label>
                      <select
                        value={selectedEndMonth}
                        onChange={(e) => setSelectedEndMonth(e.target.value)}
                        className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm text-gray-900 bg-white"
                      >
                        {months.map((month) => (
                          <option key={month} value={month}>{month.substring(0, 3)}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Tahun</label>
                      <select
                        value={selectedEndYear}
                        onChange={(e) => setSelectedEndYear(e.target.value)}
                        className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm text-gray-900 bg-white"
                      >
                        {years.map((year) => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rekening */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">
                  Rekening
                </label>
                <select
                  value={rekening}
                  onChange={(e) => setRekening(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base text-gray-900 bg-white"
                >
                  <option value="ALL">ALL</option>
                  <option value="BCA">BCA</option>
                  <option value="MANDIRI">MANDIRI</option>
                  <option value="BNI">BNI</option>
                </select>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 rounded-b-lg sm:rounded-b-xl border-t">
              <button
                onClick={() => {
                  setDealerCode('000195')
                  setSelectedDay('1')
                  setSelectedMonth('May')
                  setSelectedYear('2025')
                  setSelectedEndDay('31')
                  setSelectedEndMonth('May')
                  setSelectedEndYear('2025')
                  setRekening('ALL')
                }}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 border border-gray-300 rounded-lg text-sm sm:text-base text-gray-700 font-medium hover:bg-gray-100 transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setShowFilterModal(false)}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 border border-gray-300 rounded-lg text-sm sm:text-base text-gray-700 font-medium hover:bg-gray-100 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  setShowFilterModal(false)
                  handleSearch()
                }}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Terapkan Filter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mutasi Filter Modal */}
      {showMutasiFilterModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-lg sm:rounded-xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between rounded-t-lg sm:rounded-t-xl z-10">
              <div className="flex items-center gap-2 sm:gap-3">
                <Filter className="h-5 w-5 sm:h-6 sm:w-6" />
                <h3 className="text-base sm:text-xl font-bold">Filter Mutasi</h3>
              </div>
              <button
                onClick={() => setShowMutasiFilterModal(false)}
                className="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Dealer Code */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">
                  Dealer Code
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={dealerCode}
                    onChange={(e) => setDealerCode(e.target.value)}
                    placeholder="000095"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base text-gray-900 bg-white"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Jenis Mutasi */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">
                  Jenis Mutasi
                </label>
                <select
                  value={jenisMutasi}
                  onChange={(e) => setJenisMutasi(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base text-gray-900 bg-white"
                >
                  {jenisMutasiOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Tracking Type */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">
                  Tipe Tracking
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="mutasiTracking"
                      value="harian"
                      checked={mutasiTrackingType === 'harian'}
                      onChange={(e) => setMutasiTrackingType(e.target.value)}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 focus:ring-2 focus:ring-purple-500"
                    />
                    <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900">Tracking Harian</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="mutasiTracking"
                      value="bulanan"
                      checked={mutasiTrackingType === 'bulanan'}
                      onChange={(e) => setMutasiTrackingType(e.target.value)}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 focus:ring-2 focus:ring-purple-500"
                    />
                    <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900">Tracking Bulanan</span>
                  </label>
                </div>
              </div>

              {/* Date Range */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Start Date */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Tanggal Mulai
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Tanggal</label>
                      <select
                        value={selectedMutasiDay}
                        onChange={(e) => setSelectedMutasiDay(e.target.value)}
                        className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-xs sm:text-sm text-gray-900 bg-white"
                      >
                        {days.map((day) => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Bulan</label>
                      <select
                        value={selectedMutasiMonth}
                        onChange={(e) => setSelectedMutasiMonth(e.target.value)}
                        className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-xs sm:text-sm text-gray-900 bg-white"
                      >
                        {months.map((month) => (
                          <option key={month} value={month}>{month.substring(0, 3)}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Tahun</label>
                      <select
                        value={selectedMutasiYear}
                        onChange={(e) => setSelectedMutasiYear(e.target.value)}
                        className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-xs sm:text-sm text-gray-900 bg-white"
                      >
                        {years.map((year) => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* End Date */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="block text-xs sm:text-sm font-medium text-gray-700">
                    Tanggal Akhir
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Tanggal</label>
                      <select
                        value={selectedMutasiEndDay}
                        onChange={(e) => setSelectedMutasiEndDay(e.target.value)}
                        className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-xs sm:text-sm text-gray-900 bg-white"
                      >
                        {days.map((day) => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Bulan</label>
                      <select
                        value={selectedMutasiEndMonth}
                        onChange={(e) => setSelectedMutasiEndMonth(e.target.value)}
                        className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-xs sm:text-sm text-gray-900 bg-white"
                      >
                        {months.map((month) => (
                          <option key={month} value={month}>{month.substring(0, 3)}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Tahun</label>
                      <select
                        value={selectedMutasiEndYear}
                        onChange={(e) => setSelectedMutasiEndYear(e.target.value)}
                        className="w-full px-2 sm:px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-xs sm:text-sm text-gray-900 bg-white"
                      >
                        {years.map((year) => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Month Selector for Bulanan */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">
                  Bulan (untuk Tracking Bulanan)
                </label>
                <select
                  value={selectedMutasiMonth}
                  onChange={(e) => setSelectedMutasiMonth(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-sm sm:text-base text-gray-900 bg-white"
                >
                  {months.map((month) => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 rounded-b-lg sm:rounded-b-xl border-t">
              <button
                onClick={() => {
                  setDealerCode('000095')
                  setJenisMutasi('Pre Payment')
                  setMutasiTrackingType('bulanan')
                  setSelectedMutasiDay('1')
                  setSelectedMutasiMonth('October')
                  setSelectedMutasiYear('2025')
                  setSelectedMutasiEndDay('31')
                  setSelectedMutasiEndMonth('October')
                  setSelectedMutasiEndYear('2025')
                }}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 border border-gray-300 rounded-lg text-sm sm:text-base text-gray-700 font-medium hover:bg-gray-100 transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setShowMutasiFilterModal(false)}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 border border-gray-300 rounded-lg text-sm sm:text-base text-gray-700 font-medium hover:bg-gray-100 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  setShowMutasiFilterModal(false)
                  handleMutasiSearch()
                }}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Terapkan Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
