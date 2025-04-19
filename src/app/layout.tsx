import './globals.css'
import { Metadata, Viewport } from 'next'
import { inter } from './font'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://starzdustagency.com'),
  title: 'Marketing Agency',
  description: 'Your trusted partner in digital marketing',
  icons: {
    icon: [
      { url: '/images/favicon.png', type: 'image/png' }
    ],
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: 'Marketing Agency',
    description: 'Your trusted partner in digital marketing',
    images: [
      {
        url: '/images/pr.jpg',
        width: 1200,
        height: 630,
        alt: 'Marketing Agency',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marketing Agency',
    description: 'Your trusted partner in digital marketing',
    images: ['/images/pr.jpg'],
  },
  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:type': 'image/jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
