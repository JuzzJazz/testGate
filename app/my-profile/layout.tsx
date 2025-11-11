import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Profile - Ad1Gate',
  description: 'User Profile Management - Ad1Gate',
}

export default function MyProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
