import '../globals.css'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { locales } from '@/i18n/config'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Marketing Agency',
  description: 'Your trusted partner in digital marketing',
}

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  if (!locales.includes(lang as any)) notFound()

  let messages;
  try {
    messages = (await import(`../../locales/${lang}.json`)).default;
  } catch (error) {
    notFound()
  }

  return (
    <html lang={lang}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter">
        <NextIntlClientProvider
          locale={lang}
          messages={messages}
          timeZone="Europe/London"
          now={new Date()}
        >
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
