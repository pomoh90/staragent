'use client'

import { NextIntlClientProvider } from 'next-intl'
import { type Locale } from '@/i18n/locales'

export function Providers({
  children,
  locale,
  messages
}: {
  children: React.ReactNode
  locale: Locale
  messages: any
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
} 