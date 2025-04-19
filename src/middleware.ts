import createMiddleware from 'next-intl/middleware'
import { locales } from './i18n'

export default createMiddleware({
  locales: ['en', 'ru'],
  defaultLocale: 'en',
  localePrefix: 'always'
})

export const config = {
  matcher: ['/', '/(ru|en)/:path*']
}
