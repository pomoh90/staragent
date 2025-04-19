import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Agency',
  description: 'Your trusted partner in digital marketing',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter">
        {children}
      </body>
    </html>
  )
}
