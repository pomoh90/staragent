import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from './locales'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    locale: locale as string,
    messages: (await import(`../locales/${locale}.json`)).default
  }
})