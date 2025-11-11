import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'i-Booking - Ad1Gate',
  description: 'Ad1Gate Booking Management',
}

export default function IBookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
