import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'i-Linksys - Ad1Gate',
  description: 'Ad1Gate Employee Management',
}

export default function ILinksysLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
