import { getRequestConfig } from 'next-intl/server'
import { locales, defaultLocale } from './i18n/config'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    locale = defaultLocale
  }

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
    timeZone: 'Europe/London'
  }
})
