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
  Users,
  Building2,
  Briefcase,
  Clock,
  Calendar,
  MapPin,
  ChevronRight
} from 'lucide-react'

export default function ILinksysPage() {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState('mapping')
  const [searchCabang, setSearchCabang] = useState('0103 - JAKSEL 2 CAR-PONDOK INDAH')
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
    { id: 'mapping', label: 'Mapping Employee', icon: Users },
    { id: 'dedicated', label: 'Dedicated Employee', icon: User },
    { id: 'area', label: 'Area Kerja', icon: MapPin },
    { id: 'overtime', label: 'Employee Overtime', icon: Clock },
    { id: 'offwork', label: 'Employee OffWork', icon: Calendar },
    { id: 'holiday', label: 'Holiday Branch', icon: Building2 },
  ]

  // Sample employee data
  const employees = [
    {
      no: 1,
      nik: '10022846',
      name: 'Tri Rosiadi',
      object: 'Otomotif, NDS, Durable',
      jobCode: 'CMO'
    },
    {
      no: 2,
      nik: '10086132',
      name: 'Nur Antin Al Azis',
      object: 'Otomotif, NDS, Durable',
      jobCode: 'CMO'
    },
    {
      no: 3,
      nik: '10092560',
      name: 'Madyani',
      object: 'Otomotif, NDS, Durable',
      jobCode: 'CMO'
    },
    {
      no: 4,
      nik: '10089892',
      name: 'Icmar Yudha Mukti',
      object: 'Otomotif, NDS, Durable',
      jobCode: 'CMO'
    },
    {
      no: 5,
      nik: '10071764',
      name: 'Hanang Prabowo',
      object: 'Otomotif, NDS, Durable',
      jobCode: 'CMO'
    },
    {
      no: 6,
      nik: '10090859',
      name: 'Angga Arya Swasta',
      object: 'Otomotif, NDS, Durable',
      jobCode: 'CMO'
    },
    {
      no: 7,
      nik: '10048029',
      name: 'Ahmad Sudarjat',
      object: 'Otomotif, NDS, Durable',
      jobCode: 'CMO'
    }
  ]

  const totalEntries = 7
  const totalPages = 1

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
              const isILinksys = item.label === 'i-Linksys'
              
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
                    isILinksys
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold shadow-md'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${isILinksys ? 'text-gray-900' : ''}`} />
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
          <div className="p-3 sm:p-4 lg:p-6 w-full max-w-full overflow-hidden">
            {/* Breadcrumb */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <span>Home</span>
                <ChevronRight className="h-4 w-4" />
                <span className="text-gray-900 font-medium">Employee</span>
              </div>
            </div>

            {/* Page Header */}
            <div className="mb-4 sm:mb-6">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">i-Linksys</h1>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Employee Management System</p>
            </div>

            {/* Search Cabang Card */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="w-full">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Cabang
                  </label>
                  <input
                    type="text"
                    value={searchCabang}
                    onChange={(e) => setSearchCabang(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm sm:text-base text-gray-900 shadow-sm transition-all"
                    placeholder="Enter branch code"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Cari</span>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden w-full">
              {/* Tabs Navigation - Scrollable */}
              <div className="border-b border-gray-200 overflow-x-auto scrollbar-hide">
                <div className="flex w-max sm:w-full">
                  {tabs.map((tab) => {
                    const TabIcon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 text-[10px] sm:text-sm font-semibold transition-all whitespace-nowrap ${
                          activeTab === tab.id
                            ? 'text-green-600 border-b-2 sm:border-b-3 border-green-500 bg-green-50'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <TabIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 flex-shrink-0" />
                        <span className="text-center leading-tight">{tab.label.split(' ')[0]}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-3 sm:p-6 lg:p-8">
                {activeTab === 'mapping' && (
                  <div className="space-y-4 sm:space-y-6">
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center">
                        <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                        Register Employee
                      </button>
                    </div>

                    {/* Controls Section */}
                    <div className="flex flex-col gap-3 sm:gap-4 bg-gradient-to-r from-gray-50 to-gray-100 p-3 sm:p-5 rounded-xl border border-gray-200">
                      <div className="text-xs sm:text-sm text-gray-700">
                        <span className="font-semibold">Total:</span> <span className="text-green-600 font-bold">{totalEntries}</span> employees
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 w-full">
                        <div className="flex items-center gap-2">
                          <label className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">Show</label>
                          <select
                            value={showEntries}
                            onChange={(e) => setShowEntries(e.target.value)}
                            className="px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-xs sm:text-sm bg-white shadow-sm flex-1 sm:flex-initial"
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>
                          <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">entries</span>
                        </div>
                        <div className="flex items-center gap-2 flex-1">
                          <label className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">Search:</label>
                          <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-xs sm:text-sm flex-1 shadow-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Desktop Table - Hidden on Mobile */}
                    <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                      <table className="w-full">
                        <thead className="bg-gradient-to-r from-yellow-400 to-yellow-500">
                          <tr>
                            <th className="px-4 py-4 text-left text-sm font-bold text-gray-900">No</th>
                            <th className="px-4 py-4 text-left text-sm font-bold text-gray-900">NIK</th>
                            <th className="px-4 py-4 text-left text-sm font-bold text-gray-900">Employee Name</th>
                            <th className="px-4 py-4 text-left text-sm font-bold text-gray-900">Objek Pembiayaan</th>
                            <th className="px-4 py-4 text-left text-sm font-bold text-gray-900">Job Code</th>
                            <th className="px-4 py-4 text-center text-sm font-bold text-gray-900">Action</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {employees.map((employee) => (
                            <tr key={employee.no} className="hover:bg-gray-50 transition-colors">
                              <td className="px-4 py-4 text-sm text-gray-900 font-medium">{employee.no}</td>
                              <td className="px-4 py-4 text-sm text-gray-900">{employee.nik}</td>
                              <td className="px-4 py-4 text-sm text-gray-900 font-medium">{employee.name}</td>
                              <td className="px-4 py-4 text-sm text-gray-700">{employee.object}</td>
                              <td className="px-4 py-4 text-sm text-gray-700">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">{employee.jobCode}</span>
                              </td>
                              <td className="px-4 py-4 text-center">
                                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:shadow-md transition-all duration-200">
                                  Open
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile Cards - Visible only on Mobile */}
                    <div className="md:hidden space-y-3 sm:space-y-4">
                      {employees.map((employee) => (
                        <div key={employee.no} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-semibold text-gray-500">#{employee.no}</span>
                                <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">{employee.jobCode}</span>
                              </div>
                              <h3 className="text-sm font-bold text-gray-900 mb-1">{employee.name}</h3>
                              <p className="text-xs text-gray-600">NIK: {employee.nik}</p>
                            </div>
                          </div>
                          <div className="mb-3 pb-3 border-b border-gray-100">
                            <div className="flex items-start gap-2">
                              <Briefcase className="h-3.5 w-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-xs font-medium text-gray-500 mb-0.5">Objek Pembiayaan</p>
                                <p className="text-xs text-gray-900">{employee.object}</p>
                              </div>
                            </div>
                          </div>
                          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                            <span>Open Details</span>
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-4 border-t border-gray-200">
                      <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
                        Showing {((currentPage - 1) * parseInt(showEntries)) + 1} to {Math.min(currentPage * parseInt(showEntries), totalEntries)} of {totalEntries}
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <button 
                          disabled={currentPage === 1}
                          onClick={() => setCurrentPage(currentPage - 1)}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm font-medium transition-colors"
                        >
                          Prev
                        </button>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <input
                            type="number"
                            value={currentPage}
                            onChange={(e) => setCurrentPage(Math.min(Math.max(1, parseInt(e.target.value) || 1), totalPages))}
                            className="w-12 sm:w-16 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-center text-xs sm:text-sm font-medium"
                            min="1"
                            max={totalPages}
                          />
                          <span className="text-xs sm:text-sm text-gray-600">of <span className="font-semibold">{totalPages}</span></span>
                        </div>
                        <button 
                          disabled={currentPage === totalPages}
                          onClick={() => setCurrentPage(currentPage + 1)}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm font-medium transition-colors"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab !== 'mapping' && (
                  <div className="text-center py-16">
                    <div className="mb-6 inline-flex p-6 bg-gray-100 rounded-full">
                      <Briefcase className="h-16 w-16 text-gray-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">{tabs.find(t => t.id === activeTab)?.label}</h3>
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
