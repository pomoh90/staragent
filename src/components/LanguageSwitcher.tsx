'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { getPathWithoutLocale, getLocaleFromPath } from '@/i18n/config'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  ]

  const currentLocale = getLocaleFromPath(pathname)
  const currentLanguage = languages.find((lang) => lang.code === currentLocale) || languages[0]

  const handleLanguageChange = (code: string) => {
    const pathWithoutLocale = getPathWithoutLocale(pathname)
    const newPath = `/${code}${pathWithoutLocale}`
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <motion.button
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <GlobeAltIcon className="w-5 h-5" />
        <span>{currentLanguage.flag}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-48 rounded-lg bg-white shadow-lg py-2"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                  currentLanguage.code === lang.code ? 'bg-gray-100' : ''
                }`}
                onClick={() => handleLanguageChange(lang.code)}
                whileHover={{ x: 5 }}
              >
                <span className="mr-2">{lang.flag}</span>
                {lang.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 