import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Agency',
  description: 'Your trusted partner in digital marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
