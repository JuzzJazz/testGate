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
      created: '16 May 2025 14:52:42:587',
      updated: '18 Jul 2025 17:48:10:923'
    }
  ]

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

                {activeTab !== 'byuser' && (
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
