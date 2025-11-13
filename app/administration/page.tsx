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
  Download,
  Plus,
  Edit,
  Trash2,
  Lock,
  Unlock,
  Users,
  Shield,
  Key,
  AlertCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function AdministrationPage() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('byuser')
  const [searchTerm, setSearchTerm] = useState('')
  const [showEntries, setShowEntries] = useState('10')
  const [currentPage, setCurrentPage] = useState(1)
  
  // Monitoring Bukti Potong Pajak states
  const [selectedMonth, setSelectedMonth] = useState('january')
  const [selectedYear, setSelectedYear] = useState('2025')
  const [remark, setRemark] = useState('')

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
    { id: 'byuser', label: 'By User ID', icon: User },
    { id: 'alldealer', label: 'All Dealer Budira', icon: Users },
    { id: 'monitoring', label: 'Monitoring Bukti Potong Pajak', icon: Shield },
    { id: 'rolegroup', label: 'Role Group Bisnis', icon: Key },
    { id: 'emergency', label: 'Emergency Button', icon: AlertCircle },
  ]

  // Sample data
  const users = [
    {
      no: 1,
      name: '',
      email: 'Budira.motornew@ad1gate.com',
      type: 'Sub Group Dealer',
      status: 'Unchanged Password',
      created: '19 Aug 2025 17:36:15:270',
      updated: ''
    },
    {
      no: 2,
      name: 'POC PENTEST',
      email: 'boem.G00902@ad1gate.com',
      type: 'Group Dealer',
      status: 'Active',
      created: '14 Aug 2025 15:08:53:387',
      updated: '03 Nov 2025 14:42:35:757'
    },
    {
      no: 3,
      name: 'ASTRA',
      email: 'astra.npwpmobil@ad1gate.com',
      type: 'Sub Group Dealer',
      status: 'Active',
      created: '13 Aug 2025 14:47:59:760',
      updated: '13 Aug 2025 14:51:08:207'
    },
    {
      no: 4,
      name: '',
      email: 'astra.npwp@ad1gate.com',
      type: 'Sub Group Dealer',
      status: 'Unchanged Password',
      created: '11 Aug 2025 15:17:47:843',
      updated: ''
    },
    {
      no: 5,
      name: '',
      email: 'astra.motor@ad1gate.com',
      type: 'Sub Group Dealer',
      status: 'Unchanged Password',
      created: '11 Aug 2025 14:51:37:553',
      updated: ''
    },
    {
      no: 6,
      name: 'uatepks.dukacpil03@ad1gate.com',
      email: 'uatepks.dukacpil03@ad1gate.com',
      type: 'Operator',
      status: 'Locked',
      created: '07 Aug 2025 14:00:33:337',
      updated: ''
    },
    {
      no: 7,
      name: 'uatepks.dukacpil02@ad1gate.com',
      email: 'uatepks.dukacpil02@ad1gate.com',
      type: 'Operator',
      status: 'Active',
      created: '07 Aug 2025 13:58:58:043',
      updated: ''
    },
    {
      no: 8,
      name: 'uatepks.dukacpil01@ad1gate.com',
      email: 'uatepks.dukacpil01@ad1gate.com',
      type: 'Operator',
      status: 'Active',
      created: '07 Aug 2025 13:57:59:647',
      updated: ''
    },
    {
      no: 9,
      name: 'uat.dukacpil01@ad1gate.com',
      email: 'uat.dukacpil01@ad1gate.com',
      type: 'Operator',
      status: 'Locked',
      created: '07 Aug 2025 13:56:50:037',
      updated: ''
    },
    {
      no: 10,
      name: 'IDK',
      email: 'itcrims.indako@ad1gate.com',
      type: 'Operator Dealer Admin',
      status: 'Active',
      created: '06 Aug 2025 13:54:49:027',
      updated: ''
    }
  ]

  // Sample data untuk All Dealer Budira
  const dealers = [
    {
      no: 1,
      dealerId: '049562',
      namaDealer: 'BERKAH JAYA MBLNDO-RINAN ILYAS',
      alamat: 'JL RINAN ILYAS 1 NO 22',
      telepon: '081808183785'
    }
  ]

  // Sample data untuk Role Group Bisnis
  const roleGroups = [
    {
      no: 1,
      groupCode: 'G00830',
      groupName: 'ZAHIRA MOTOR',
      tglCreate: '5/15/2023 9:56:20 PM',
      lastUpdate: '5/15/2023 9:56:20 PM'
    },
    {
      no: 2,
      groupCode: 'G00802',
      groupName: 'Yusvic Mitra',
      tglCreate: '5/15/2023 9:56:15 PM',
      lastUpdate: '5/15/2023 9:56:15 PM'
    },
    {
      no: 3,
      groupCode: 'G00217',
      groupName: 'YUDISTIRA',
      tglCreate: '12/2/2019 10:08:12 AM',
      lastUpdate: '12/2/2019 10:08:12 AM'
    },
    {
      no: 4,
      groupCode: 'G00249',
      groupName: 'YEFTA',
      tglCreate: '12/2/2019 10:08:12 AM',
      lastUpdate: '12/2/2019 10:08:12 AM'
    },
    {
      no: 5,
      groupCode: 'G00412',
      groupName: 'YASIN MOTOR',
      tglCreate: '5/15/2023 9:42:09 PM',
      lastUpdate: '5/15/2023 9:42:09 PM'
    },
    {
      no: 6,
      groupCode: 'G00671',
      groupName: 'YANK',
      tglCreate: '5/15/2023 9:52:44 PM',
      lastUpdate: '5/15/2023 9:52:44 PM'
    },
    {
      no: 7,
      groupCode: 'G00558',
      groupName: 'YAMAHA JATIROGO',
      tglCreate: '5/15/2023 9:48:51 PM',
      lastUpdate: '5/15/2023 9:48:51 PM'
    },
    {
      no: 8,
      groupCode: 'G00293',
      groupName: 'YAMAHA ANUGRAH MOTOR',
      tglCreate: '2/13/2020 2:21:06 PM',
      lastUpdate: '2/13/2020 2:21:06 PM'
    },
    {
      no: 9,
      groupCode: 'G00261',
      groupName: 'YAMAHA AGUNG',
      tglCreate: '12/2/2019 10:08:12 AM',
      lastUpdate: '12/2/2019 10:08:12 AM'
    },
    {
      no: 10,
      groupCode: 'G00126',
      groupName: 'WULAN JAYA',
      tglCreate: '12/2/2019 10:08:12 AM',
      lastUpdate: '12/2/2019 10:08:12 AM'
    }
  ]

  const totalRoleGroups = 890

  // Sample data untuk Emergency Button
  const emergencyMenus = [
    { no: 1, menu: 'Tracking Order', status: true },
    { no: 2, menu: 'Submit Order', status: true },
    { no: 3, menu: 'Informasi - Pajak', status: true },
    { no: 4, menu: 'Informasi - Transfer Pembayaran', status: true },
    { no: 5, menu: 'Informasi - Prepayment', status: true },
    { no: 6, menu: 'Informasi - Cancel PPD', status: true },
    { no: 7, menu: 'Informasi - BPKB', status: true },
    { no: 8, menu: 'Under Maintenance', status: false },
    { no: 9, menu: 'Masa berlaku Reset Password', status: false }
  ]

  const [menuStatuses, setMenuStatuses] = useState<{[key: number]: boolean}>(
    emergencyMenus.reduce((acc, menu) => ({ ...acc, [menu.no]: menu.status }), {})
  )

  const toggleMenuStatus = (menuNo: number) => {
    setMenuStatuses(prev => ({
      ...prev,
      [menuNo]: !prev[menuNo]
    }))
  }

  const totalEntries = 4368
  const totalPages = Math.ceil(totalEntries / parseInt(showEntries))

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'text-green-700 bg-green-50 border-green-200'
      case 'locked':
        return 'text-red-700 bg-red-50 border-red-200'
      case 'unchanged password':
        return 'text-yellow-700 bg-yellow-50 border-yellow-200'
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200'
    }
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
              const isAdministration = item.label === 'Administration'
              
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
                    isAdministration
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold shadow-md'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${isAdministration ? 'text-gray-900' : ''}`} />
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
          <div className="p-3 sm:p-4 lg:p-6 max-w-[1600px] mx-auto">
            {/* Breadcrumb */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <span>Home</span>
                <ChevronRight className="h-4 w-4" />
                <span className="text-gray-900 font-medium">Administration</span>
              </div>
            </div>

            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Administration</h1>
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
                        className={`flex items-center gap-2 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                          activeTab === tab.id
                            ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <TabIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="hidden md:inline">{tab.label}</span>
                        <span className="md:hidden">{tab.label.split(' ')[0]}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-4 sm:p-6">
                {activeTab === 'byuser' && (
                  <div className="space-y-4">
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 text-sm">
                        <Plus className="h-4 w-4" />
                        Buat Akun
                      </button>
                      <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 text-sm">
                        <Download className="h-4 w-4" />
                        Download List User
                      </button>
                    </div>

                    {/* Total and Controls */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold">Total:</span> {totalEntries.toLocaleString()}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <div className="flex items-center gap-2">
                          <label className="text-sm text-gray-700">Show</label>
                          <select
                            value={showEntries}
                            onChange={(e) => setShowEntries(e.target.value)}
                            className="px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>
                          <span className="text-sm text-gray-700">entries</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="text-sm text-gray-700">Search:</label>
                          <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            className="px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm w-full sm:w-48"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto rounded-lg border border-gray-200">
                      <table className="w-full">
                        <thead className="bg-gradient-to-r from-yellow-400 to-yellow-500">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">No</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Nama</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">E-mail</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Type</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Status</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Tgl Create</th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Last Update</th>
                            <th className="px-4 py-3 text-center text-sm font-bold text-gray-900">Action</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {users.map((user) => (
                            <tr key={user.no} className="hover:bg-gray-50 transition-colors">
                              <td className="px-4 py-3 text-sm text-gray-900">{user.no}</td>
                              <td className="px-4 py-3 text-sm text-gray-900">{user.name || '-'}</td>
                              <td className="px-4 py-3 text-sm text-gray-700">{user.email}</td>
                              <td className="px-4 py-3 text-sm text-gray-700">{user.type}</td>
                              <td className="px-4 py-3">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border ${getStatusColor(user.status)}`}>
                                  {user.status}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-700">{user.created}</td>
                              <td className="px-4 py-3 text-sm text-gray-700">{user.updated || '-'}</td>
                              <td className="px-4 py-3 text-center">
                                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:shadow-md transition-all duration-200 flex items-center gap-1 mx-auto">
                                  <Edit className="h-3.5 w-3.5" />
                                  Open
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4">
                      <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 text-sm">
                        <Download className="h-4 w-4" />
                        Download List User
                      </button>
                      <div className="flex items-center gap-2">
                        <button 
                          disabled={currentPage === 1}
                          onClick={() => setCurrentPage(currentPage - 1)}
                          className="px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        >
                          Prev
                        </button>
                        <input
                          type="number"
                          value={currentPage}
                          onChange={(e) => setCurrentPage(parseInt(e.target.value) || 1)}
                          className="w-16 px-2 py-1.5 border border-gray-300 rounded-lg text-center text-sm"
                        />
                        <span className="text-sm text-gray-700">Of {totalPages.toLocaleString()}</span>
                        <button 
                          disabled={currentPage === totalPages}
                          onClick={() => setCurrentPage(currentPage + 1)}
                          className="px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* All Dealer Budira Tab */}
                {activeTab === 'alldealer' && (
                  <div className="space-y-6">
                    {/* Total Info */}
                    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500 shadow-sm">
                      <p className="text-sm sm:text-base font-semibold text-gray-900">
                        Total : <span className="text-blue-600">{dealers.length}</span>
                      </p>
                    </div>

                    {/* Controls */}
                    <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-4 shadow-lg">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        {/* Show Entries */}
                        <div className="flex items-center gap-2">
                          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:shadow-md transition-all duration-200 flex items-center gap-1.5">
                            <span>Show</span>
                            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                          </button>
                        </div>

                        {/* Search */}
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          <label className="text-xs sm:text-sm text-white font-medium whitespace-nowrap">Search:</label>
                          <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            className="px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm w-full sm:w-64"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
                      <table className="w-full min-w-max">
                        <thead className="bg-gradient-to-r from-yellow-400 to-yellow-500">
                          <tr>
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">
                              No
                            </th>
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">
                              <div className="flex items-center gap-1">
                                <span>Dealer ID</span>
                                <div className="flex flex-col">
                                  <ChevronRight className="h-3 w-3 rotate-[-90deg]" />
                                  <ChevronRight className="h-3 w-3 rotate-90 -mt-1" />
                                </div>
                              </div>
                            </th>
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">
                              <div className="flex items-center gap-1">
                                <span>Nama Dealer</span>
                                <div className="flex flex-col">
                                  <ChevronRight className="h-3 w-3 rotate-[-90deg]" />
                                  <ChevronRight className="h-3 w-3 rotate-90 -mt-1" />
                                </div>
                              </div>
                            </th>
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">
                              <div className="flex items-center gap-1">
                                <span>Alamat</span>
                                <div className="flex flex-col">
                                  <ChevronRight className="h-3 w-3 rotate-[-90deg]" />
                                  <ChevronRight className="h-3 w-3 rotate-90 -mt-1" />
                                </div>
                              </div>
                            </th>
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900">
                              <div className="flex items-center gap-1">
                                <span>Telepon</span>
                                <div className="flex flex-col">
                                  <ChevronRight className="h-3 w-3 rotate-[-90deg]" />
                                  <ChevronRight className="h-3 w-3 rotate-90 -mt-1" />
                                </div>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {dealers.map((dealer, index) => (
                            <tr key={dealer.no} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                              <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900 font-medium">
                                {dealer.no}
                              </td>
                              <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900">
                                {dealer.dealerId}
                              </td>
                              <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900">
                                {dealer.namaDealer}
                              </td>
                              <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-700">
                                {dealer.alamat}
                              </td>
                              <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-700">
                                {dealer.telepon}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination & Actions */}
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-3 sm:p-4 shadow-lg">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm">
                            <Edit className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            Edit
                          </button>
                          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm">
                            <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            Simpan
                          </button>
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
                          <button 
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm font-medium shadow-sm transition-all"
                          >
                            Prev
                          </button>
                          <input
                            type="number"
                            value={currentPage}
                            onChange={(e) => setCurrentPage(parseInt(e.target.value) || 1)}
                            className="w-12 sm:w-16 px-2 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-center text-xs sm:text-sm font-medium bg-white shadow-sm"
                          />
                          <span className="text-xs sm:text-sm font-medium text-gray-900">Of 1</span>
                          <button 
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm font-medium shadow-sm transition-all"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Monitoring Bukti Potong Pajak Tab */}
                {activeTab === 'monitoring' && (
                  <div className="space-y-6">
                    {/* Header Card */}
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 shadow-lg">
                      <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                        <Shield className="h-6 w-6 sm:h-8 sm:w-8" />
                        Monitoring Bukti Potong Pajak
                      </h2>
                      <p className="text-purple-100 mt-2 text-sm sm:text-base">
                        Kelola dan monitor bukti potong pajak periode
                      </p>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                      {/* Form Header */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                          Form Input Periode
                        </h3>
                      </div>

                      {/* Form Body */}
                      <div className="p-4 sm:p-6 space-y-6">
                        {/* Periode Section */}
                        <div className="space-y-4">
                          <label className="block text-sm sm:text-base font-semibold text-gray-900">
                            Periode <span className="text-red-500">*</span>
                          </label>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Month Selector */}
                            <div className="space-y-2">
                              <label className="block text-xs sm:text-sm font-medium text-gray-700">
                                Bulan
                              </label>
                              <div className="relative">
                                <select
                                  value={selectedMonth}
                                  onChange={(e) => setSelectedMonth(e.target.value)}
                                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm sm:text-base font-medium text-gray-900 shadow-sm hover:border-purple-400 transition-all appearance-none cursor-pointer"
                                >
                                  <option value="january">January</option>
                                  <option value="february">February</option>
                                  <option value="march">March</option>
                                  <option value="april">April</option>
                                  <option value="may">May</option>
                                  <option value="june">June</option>
                                  <option value="july">July</option>
                                  <option value="august">August</option>
                                  <option value="september">September</option>
                                  <option value="october">October</option>
                                  <option value="november">November</option>
                                  <option value="december">December</option>
                                </select>
                                <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none rotate-90" />
                              </div>
                            </div>

                            {/* Year Selector */}
                            <div className="space-y-2">
                              <label className="block text-xs sm:text-sm font-medium text-gray-700">
                                Tahun
                              </label>
                              <div className="relative">
                                <select
                                  value={selectedYear}
                                  onChange={(e) => setSelectedYear(e.target.value)}
                                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm sm:text-base font-medium text-gray-900 shadow-sm hover:border-purple-400 transition-all appearance-none cursor-pointer"
                                >
                                  <option value="2023">2023</option>
                                  <option value="2024">2024</option>
                                  <option value="2025">2025</option>
                                  <option value="2026">2026</option>
                                  <option value="2027">2027</option>
                                </select>
                                <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none rotate-90" />
                              </div>
                            </div>
                          </div>

                          {/* Info Alert */}
                          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-3 sm:p-4 flex gap-3">
                            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div className="text-xs sm:text-sm text-blue-900">
                              <p className="font-semibold mb-1">Informasi Periode</p>
                              <p className="text-blue-800">
                                Pilih bulan dan tahun untuk periode monitoring bukti potong pajak yang akan dikelola.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Remark Section */}
                        <div className="space-y-2">
                          <label className="block text-sm sm:text-base font-semibold text-gray-900">
                            Remark
                          </label>
                          <textarea
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
                            placeholder="Masukkan catatan atau keterangan tambahan..."
                            rows={4}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm sm:text-base text-gray-900 placeholder-gray-400 shadow-sm hover:border-purple-400 transition-all resize-none"
                          />
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            Catatan bersifat opsional
                          </p>
                        </div>

                        {/* Action Button */}
                        <div className="pt-4 border-t border-gray-200">
                          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center gap-2 text-sm sm:text-base group">
                            <Trash2 className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                            Delete
                            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Additional Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* Card 1 */}
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          <div className="bg-purple-500 rounded-lg p-2">
                            <Shield className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">Status Monitoring</h4>
                            <p className="text-xs text-gray-600">Aktif dan terkelola</p>
                          </div>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-500 rounded-lg p-2">
                            <AlertCircle className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">Periode Terpilih</h4>
                            <p className="text-xs text-gray-600 capitalize">{selectedMonth} {selectedYear}</p>
                          </div>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                        <div className="flex items-start gap-3">
                          <div className="bg-green-500 rounded-lg p-2">
                            <Users className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">Total Data</h4>
                            <p className="text-xs text-gray-600">Siap dikelola</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Role Group Bisnis Tab */}
                {activeTab === 'rolegroup' && (
                  <div className="space-y-6">
                    {/* Header Section with Buat Group Button */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg p-4 sm:p-5 shadow-lg flex-1">
                        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                          <Key className="h-6 w-6 sm:h-8 sm:w-8" />
                          Role Group Bisnis Management
                        </h2>
                        <p className="text-emerald-100 mt-2 text-sm sm:text-base">
                          Kelola grup bisnis dan akses pengguna
                        </p>
                      </div>
                      
                      <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg font-bold shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center gap-2 text-sm sm:text-base group whitespace-nowrap">
                        <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                        Buat Group
                      </button>
                    </div>

                    {/* Total Info */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-600 shadow-md">
                      <p className="text-sm sm:text-base font-bold text-gray-900">
                        Total : <span className="text-blue-700 text-lg sm:text-xl">{totalRoleGroups}</span>
                        <span className="text-gray-600 text-xs sm:text-sm ml-2 font-normal">role groups terdaftar</span>
                      </p>
                    </div>

                    {/* Controls */}
                    <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-4 shadow-lg">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        {/* Show Entries */}
                        <div className="flex items-center gap-2">
                          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:shadow-md transition-all duration-200 flex items-center gap-1.5">
                            <span>Show</span>
                            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 rotate-90" />
                          </button>
                        </div>

                        {/* Search */}
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          <label className="text-xs sm:text-sm text-white font-medium whitespace-nowrap">Search:</label>
                          <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Cari group code, nama..."
                            className="px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm w-full sm:w-64"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
                      <table className="w-full min-w-max">
                        <thead className="bg-gradient-to-r from-yellow-400 to-yellow-500">
                          <tr>
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">
                              No
                            </th>
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">
                              <div className="flex items-center gap-1">
                                <span>Group Code</span>
                                <div className="flex flex-col">
                                  <ChevronRight className="h-3 w-3 rotate-[-90deg]" />
                                  <ChevronRight className="h-3 w-3 rotate-90 -mt-1" />
                                </div>
                              </div>
                            </th>
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">
                              <div className="flex items-center gap-1">
                                <span>Group Name</span>
                                <div className="flex flex-col">
                                  <ChevronRight className="h-3 w-3 rotate-[-90deg]" />
                                  <ChevronRight className="h-3 w-3 rotate-90 -mt-1" />
                                </div>
                              </div>
                            </th>
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">
                              <div className="flex items-center gap-1">
                                <span>Tgl Create</span>
                                <div className="flex flex-col">
                                  <ChevronRight className="h-3 w-3 rotate-[-90deg]" />
                                  <ChevronRight className="h-3 w-3 rotate-90 -mt-1" />
                                </div>
                              </div>
                            </th>
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900">
                              <div className="flex items-center gap-1">
                                <span>Last Update</span>
                                <div className="flex flex-col">
                                  <ChevronRight className="h-3 w-3 rotate-[-90deg]" />
                                  <ChevronRight className="h-3 w-3 rotate-90 -mt-1" />
                                </div>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {roleGroups.map((group, index) => (
                            <tr key={group.no} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-emerald-50 transition-colors`}>
                              <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900 font-medium">
                                {group.no}
                              </td>
                              <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900 font-semibold">
                                {group.groupCode}
                              </td>
                              <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900">
                                {group.groupName}
                              </td>
                              <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-700">
                                {group.tglCreate}
                              </td>
                              <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-700">
                                {group.lastUpdate}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination & Download */}
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-3 sm:p-4 shadow-lg">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        {/* Download Button */}
                        <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 text-xs sm:text-sm group w-full sm:w-auto justify-center">
                          <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-y-0.5 transition-transform" />
                          Download List Group
                          <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4 rotate-45" />
                        </button>

                        {/* Pagination */}
                        <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
                          <button 
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm font-medium shadow-sm transition-all"
                          >
                            Prev
                          </button>
                          <input
                            type="number"
                            value={currentPage}
                            onChange={(e) => setCurrentPage(parseInt(e.target.value) || 1)}
                            className="w-12 sm:w-16 px-2 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-center text-xs sm:text-sm font-medium bg-white shadow-sm"
                          />
                          <span className="text-xs sm:text-sm font-medium text-gray-900">Of 89</span>
                          <button 
                            disabled={currentPage === 89}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm font-medium shadow-sm transition-all"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Card 1 - Active Groups */}
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border-l-4 border-green-500 shadow-sm hover:shadow-md transition-all hover:scale-105">
                        <div className="flex items-start gap-3">
                          <div className="bg-green-500 rounded-lg p-2">
                            <Shield className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">Active Groups</h4>
                            <p className="text-xl font-bold text-green-700">{roleGroups.length}</p>
                          </div>
                        </div>
                      </div>

                      {/* Card 2 - Total Records */}
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-all hover:scale-105">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-500 rounded-lg p-2">
                            <Key className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">Total Records</h4>
                            <p className="text-xl font-bold text-blue-700">{totalRoleGroups}</p>
                          </div>
                        </div>
                      </div>

                      {/* Card 3 - Pages */}
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-all hover:scale-105">
                        <div className="flex items-start gap-3">
                          <div className="bg-purple-500 rounded-lg p-2">
                            <AlertCircle className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">Total Pages</h4>
                            <p className="text-xl font-bold text-purple-700">89</p>
                          </div>
                        </div>
                      </div>

                      {/* Card 4 - Last Updated */}
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border-l-4 border-orange-500 shadow-sm hover:shadow-md transition-all hover:scale-105">
                        <div className="flex items-start gap-3">
                          <div className="bg-orange-500 rounded-lg p-2">
                            <Users className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">Management</h4>
                            <p className="text-xs text-orange-700 font-medium">Fully Controlled</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Emergency Button Tab */}
                {activeTab === 'emergency' && (
                  <div className="space-y-6">
                    {/* Header Section */}
                    <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-4 sm:p-5 shadow-lg">
                      <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                        <AlertCircle className="h-6 w-6 sm:h-8 sm:w-8" />
                        Emergency Button Control
                      </h2>
                      <p className="text-red-100 mt-2 text-sm sm:text-base">
                        Kontrol akses menu sistem secara real-time untuk maintenance atau emergency
                      </p>
                    </div>

                    {/* Total Info */}
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4 border-l-4 border-orange-600 shadow-md">
                      <p className="text-sm sm:text-base font-bold text-gray-900">
                        Total : <span className="text-orange-700 text-lg sm:text-xl">{emergencyMenus.length}</span>
                        <span className="text-gray-600 text-xs sm:text-sm ml-2 font-normal">menu terdaftar dalam sistem</span>
                      </p>
                    </div>

                    {/* Controls */}
                    <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-4 shadow-lg">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        {/* Show Entries */}
                        <div className="flex items-center gap-2">
                          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:shadow-md transition-all duration-200 flex items-center gap-1.5">
                            <span>Show</span>
                            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 rotate-90" />
                          </button>
                        </div>

                        {/* Search */}
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          <label className="text-xs sm:text-sm text-white font-medium whitespace-nowrap">Search:</label>
                          <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Cari menu..."
                            className="px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm w-full sm:w-64"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Emergency Info Alert */}
                    <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 flex gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-red-900">
                        <p className="font-bold mb-1">⚠️ Perhatian!</p>
                        <p className="text-red-800">
                          Menonaktifkan menu akan membuat fitur tidak dapat diakses oleh seluruh pengguna. 
                          Pastikan untuk mengaktifkan kembali setelah maintenance selesai.
                        </p>
                      </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
                      <table className="w-full min-w-max">
                        <thead className="bg-gradient-to-r from-yellow-400 to-yellow-500">
                          <tr>
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600 w-16 sm:w-20">
                              No
                            </th>
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900 border-r border-yellow-600">
                              <div className="flex items-center gap-1">
                                <span>Menu</span>
                                <div className="flex flex-col">
                                  <ChevronRight className="h-3 w-3 rotate-[-90deg]" />
                                  <ChevronRight className="h-3 w-3 rotate-90 -mt-1" />
                                </div>
                              </div>
                            </th>
                            <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900">
                              <div className="flex items-center gap-1">
                                <span>Status</span>
                                <div className="flex flex-col">
                                  <ChevronRight className="h-3 w-3 rotate-[-90deg]" />
                                  <ChevronRight className="h-3 w-3 rotate-90 -mt-1" />
                                </div>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {emergencyMenus.map((item, index) => (
                            <tr key={item.no} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-yellow-50 transition-colors`}>
                              <td className="px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 font-medium">
                                {item.no}
                              </td>
                              <td className="px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm text-gray-900">
                                {item.menu}
                              </td>
                              <td className="px-3 sm:px-4 py-3 sm:py-4">
                                {/* Toggle Switch */}
                                <button
                                  onClick={() => toggleMenuStatus(item.no)}
                                  className={`relative inline-flex h-7 sm:h-8 w-14 sm:w-16 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                    menuStatuses[item.no]
                                      ? 'bg-green-500 focus:ring-green-500 shadow-lg shadow-green-500/50'
                                      : 'bg-red-500 focus:ring-red-500 shadow-lg shadow-red-500/50'
                                  }`}
                                >
                                  <span
                                    className={`inline-block h-5 sm:h-6 w-5 sm:w-6 transform rounded-full bg-white transition-transform duration-300 shadow-md ${
                                      menuStatuses[item.no] ? 'translate-x-8 sm:translate-x-9' : 'translate-x-1'
                                    }`}
                                  />
                                </button>
                                <span className={`ml-3 text-xs sm:text-sm font-semibold ${
                                  menuStatuses[item.no] ? 'text-green-700' : 'text-red-700'
                                }`}>
                                  {menuStatuses[item.no] ? 'Active' : 'Inactive'}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination */}
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-3 sm:p-4 shadow-lg">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        {/* Status Summary */}
                        <div className="flex flex-wrap gap-2 sm:gap-4">
                          <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                            <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs sm:text-sm font-semibold text-gray-900">
                              Active: {Object.values(menuStatuses).filter(s => s).length}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-lg shadow-sm">
                            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                            <span className="text-xs sm:text-sm font-semibold text-gray-900">
                              Inactive: {Object.values(menuStatuses).filter(s => !s).length}
                            </span>
                          </div>
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
                          <button 
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm font-medium shadow-sm transition-all"
                          >
                            Prev
                          </button>
                          <input
                            type="number"
                            value={currentPage}
                            onChange={(e) => setCurrentPage(parseInt(e.target.value) || 1)}
                            className="w-12 sm:w-16 px-2 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-center text-xs sm:text-sm font-medium bg-white shadow-sm"
                          />
                          <span className="text-xs sm:text-sm font-medium text-gray-900">Of 1</span>
                          <button 
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm font-medium shadow-sm transition-all"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Action Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* Quick Actions Card */}
                      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4 sm:p-5 border-l-4 border-red-500 shadow-md hover:shadow-lg transition-all hover:scale-105">
                        <div className="flex items-start gap-3">
                          <div className="bg-red-500 rounded-lg p-2.5">
                            <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Emergency Control</h4>
                            <p className="text-xs sm:text-sm text-red-700 font-medium">
                              {Object.values(menuStatuses).filter(s => !s).length} menu disabled
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* System Status Card */}
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 sm:p-5 border-l-4 border-green-500 shadow-md hover:shadow-lg transition-all hover:scale-105">
                        <div className="flex items-start gap-3">
                          <div className="bg-green-500 rounded-lg p-2.5">
                            <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1">System Status</h4>
                            <p className="text-xs sm:text-sm text-green-700 font-medium">
                              {Object.values(menuStatuses).filter(s => s).length} menu active
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Total Menus Card */}
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 sm:p-5 border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-all hover:scale-105 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-500 rounded-lg p-2.5">
                            <Settings className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1">Total Menus</h4>
                            <p className="text-xs sm:text-sm text-blue-700 font-medium">
                              {emergencyMenus.length} items managed
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab !== 'byuser' && activeTab !== 'alldealer' && activeTab !== 'monitoring' && activeTab !== 'rolegroup' && activeTab !== 'emergency' && (
                  <div className="text-center py-12">
                    <Settings className="h-20 w-20 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{tabs.find(t => t.id === activeTab)?.label}</h3>
                    <p className="text-gray-500">This section is under development</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
