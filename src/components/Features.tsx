'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const features = [
  {
    title: 'digital_marketing.title',
    description: 'digital_marketing.description',
    icon: '/icons/digital-marketing.svg',
  },
  {
    title: 'analytics_seo.title',
    description: 'analytics_seo.description',
    icon: '/icons/seo.svg',
  },
  {
    title: 'social_media.title',
    description: 'social_media.description',
    icon: '/icons/social-media.svg',
  },
  {
    title: 'content_creation.title',
    description: 'content_creation.description',
    icon: '/icons/content.svg',
  },
]

export function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const t = useTranslations('services')

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src={feature.icon}
                  alt={t(feature.title)}
                  fill
                  sizes="(max-width: 64px) 64px, 64px"
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t(feature.title)}
              </h3>
              <p className="text-gray-600">{t(feature.description)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
