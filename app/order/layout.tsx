import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order - Ad1Gate',
  description: 'Ad1Gate Order Management',
}

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
