'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from '@/hooks/useTranslation'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

const CursorPage = () => {
  const { t } = useTranslation()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [portfolioRef, portfolioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: t('services.digital_marketing.title'),
      description: t('services.digital_marketing.description'),
      icon: '/icons/marketing.svg',
    },
    {
      title: t('services.brand_strategy.title'),
      description: t('services.brand_strategy.description'),
      icon: '/icons/branding.svg',
    },
    {
      title: t('services.web_development.title'),
      description: t('services.web_development.description'),
      icon: '/icons/web.svg',
    },
  ]

  const features = [
    {
      title: 'Expert Team',
      description: 'Our team consists of industry experts with years of experience.',
      icon: '/icons/team.svg',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your business never stops.',
      icon: '/icons/support.svg',
    },
    {
      title: 'Innovative Solutions',
      description: 'We stay ahead of the curve with cutting-edge technologies.',
      icon: '/icons/innovation.svg',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <motion.section
        ref={headerRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          </Canvas>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-4">{t('cursor.title')}</h1>
          <p className="text-xl mb-8">{t('cursor.subtitle')}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-8 py-3 rounded-lg"
          >
            {t('cursor.cta')}
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl font-bold text-center mb-12"
          >
            {t('cursor.services.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="w-16 h-16 mb-4">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl font-bold text-center mb-12"
          >
            {t('cursor.features.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={80}
                    height={80}
                    className="hover:rotate-12 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        ref={portfolioRef}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl font-bold text-center mb-12"
          >
            {t('cursor.portfolio.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <Image
                  src={`/portfolio/${item}.jpg`}
                  alt={`Portfolio item ${item}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                    <p className="text-sm">Click to view details</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        className="py-20 relative"
      >
        <div className="absolute inset-0">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          </Canvas>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              {t('cursor.contact.title')}
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  {t('cursor.contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  {t('cursor.contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  {t('cursor.contact.message')}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-primary-500"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary-600 text-white py-3 rounded-lg"
              >
                {t('cursor.contact.submit')}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default CursorPage 