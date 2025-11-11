import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Administration - Ad1Gate',
  description: 'Ad1Gate Administration Panel',
}

export default function AdministrationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
