import { usePathname } from 'next/navigation'
import { locales, defaultLocale } from '../i18n/config'

export function useLocale() {
  const pathname = usePathname()
  try {
    const locale = pathname.split('/')[1] as typeof locales[number]
    return locales.includes(locale) ? locale : defaultLocale
  } catch (error) {
    console.error('Error getting locale from pathname:', error)
    return defaultLocale
  }
}

export function getLocaleFromPath(path: string) {
  try {
    const locale = path.split('/')[1] as typeof locales[number]
    return locales.includes(locale) ? locale : defaultLocale
  } catch (error) {
    console.error('Error getting locale from path:', error)
    return defaultLocale
  }
}

export function getPathWithoutLocale(path: string) {
  try {
    const locale = getLocaleFromPath(path)
    const pathWithoutLocale = path.replace(`/${locale}`, '')
    return pathWithoutLocale || '/'
  } catch (error) {
    console.error('Error getting path without locale:', error)
    return '/'
  }
}

export function getLocalizedPath(path: string, locale: string) {
  try {
    const pathWithoutLocale = getPathWithoutLocale(path)
    return locale === defaultLocale ? pathWithoutLocale : `/${locale}${pathWithoutLocale}`
  } catch (error) {
    console.error('Error getting localized path:', error)
    return '/'
  }
} 