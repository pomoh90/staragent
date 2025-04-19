'use client'

import { NextIntlClientProvider } from 'next-intl'
import { useMessages } from 'next-intl'

export function Providers({ children, locale }: { children: React.ReactNode; locale: string }) {
  const messages = useMessages()

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="Europe/London"
    >
      {children}
    </NextIntlClientProvider>
  )
}
