'use client'

export const dynamic = 'force-dynamic'

import { motion, useScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from '@/hooks/useTranslation'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const CursorPage = () => {
  const { t } = useTranslation()
  const { scrollYProgress } = useScroll()

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="relative">
      <motion.section
        ref={headerRef}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 to-black"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t('cursor.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {t('cursor.description')}
          </p>
        </motion.div>
      </motion.section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{t('cursor.services.title')}</h2>
            <p className="text-xl text-gray-600">{t('cursor.services.description')}</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CursorPage
