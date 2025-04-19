import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { locales } from '@/i18n/config'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

export default async function LangLayout({
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
  )
}
