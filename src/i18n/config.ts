import { locales, defaultLocale, type Locale } from './locales'
import { Pathnames } from 'next-intl/navigation'
import { getRequestConfig } from 'next-intl/server'

export { locales, defaultLocale, type Locale }

export function getLocaleFromPath(path: string): Locale {
  const pathSegments = path.split('/')
  const potentialLocale = pathSegments[1]
  return locales.includes(potentialLocale as Locale) ? (potentialLocale as Locale) : defaultLocale
}

export function getLocalizedPath(path: string, locale: Locale): string {
  // Remove any existing locale prefix
  const pathWithoutLocale = path.replace(/^\/(en|ru)/, '')

  // If the path is just '/', return the localized root path
  if (pathWithoutLocale === '/') {
    return `/${locale}`
  }

  // Otherwise, prepend the locale to the path
  return `/${locale}${pathWithoutLocale}`
}

export async function getStaticProps({ locale }: { locale: Locale }) {
  const messages = await import(`@/locales/${locale}.json`)
  return {
    props: {
      messages: messages.default,
    },
  }
}

export function getStaticPaths() {
  return {
    paths: locales.map((locale) => ({
      params: { locale },
    })),
    fallback: 'blocking',
  }
}

export function getPathWithoutLocale(path: string): string {
  const pathLocale = path.split('/')[1]
  if (locales.includes(pathLocale as Locale)) {
    return path.replace(`/${pathLocale}`, '') || '/'
  }
  return path
}

export function isLocalePath(path: string): boolean {
  const pathLocale = path.split('/')[1]
  return locales.includes(pathLocale as Locale)
}

export function getLocaleFromUrl(url: string): Locale {
  try {
    const pathname = new URL(url).pathname
    return getLocaleFromPath(pathname)
  } catch {
    return defaultLocale
  }
}

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/services': '/services',
  '/portfolio': '/portfolio',
  '/contact': '/contact',
} satisfies Pathnames<typeof locales>

export const localePrefix = 'always'

export const timeZone = 'Europe/London'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    locale = defaultLocale
  }

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
    timeZone: 'Europe/London'
  }
})
