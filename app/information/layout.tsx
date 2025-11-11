import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Information - Ad1Gate',
  description: 'Ad1Gate Information Center',
}

export default function InformationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
