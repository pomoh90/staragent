import createMiddleware from 'next-intl/middleware'
import { locales } from './i18n/locales'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/favicon.ico') {
    return NextResponse.redirect(new URL('/images/favicon.png', request.url))
  }
  return createMiddleware({
    locales,
    defaultLocale: 'en',
    localePrefix: 'always'
  })(request)
}

export const config = {
  matcher: ['/', '/(ru|en)/:path*', '/favicon.ico']
}

export const faviconConfig = {
  matcher: '/favicon.ico',
}
