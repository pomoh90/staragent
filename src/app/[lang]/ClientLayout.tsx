'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Providers } from '@/app/providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Locale } from '@/i18n/locales'
import { usePathname } from 'next/navigation'

export default function ClientLayout({
  children,
  lang,
  messages,
}: {
  children: React.ReactNode
  lang: string
  messages: any
}) {
  const pathname = usePathname()

  return (
    <Providers locale={lang as Locale} messages={messages}>
      <Navbar />
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
      <Footer />
    </Providers>
  )
} 