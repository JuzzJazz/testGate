import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard - Ad1Gate',
  description: 'Ad1Gate Dashboard',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
