'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import Image from 'next/image'
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import { getLocalizedPath, getLocaleFromPath } from '@/i18n/config'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95
  }
}

export default function Footer() {
  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const t = useTranslations('footer')
  const pathname = usePathname()
  const currentLocale = getLocaleFromPath(pathname)

  const socialLinks = [
    {
      name: t('social_items.facebook'),
      href: '#',
      icon: FacebookIcon,
    },
    {
      name: t('social_items.twitter'),
      href: '#',
      icon: TwitterIcon,
    },
    {
      name: t('social_items.instagram'),
      href: '#',
      icon: InstagramIcon,
    },
    {
      name: t('social_items.linkedin'),
      href: '#',
      icon: LinkedInIcon,
    },
  ]

  const quickLinks = [
    { name: t('quick_links_items.home'), href: '/' },
    { name: t('quick_links_items.about'), href: '/about' },
    { name: t('quick_links_items.services'), href: '/services' },
    { name: t('quick_links_items.portfolio'), href: '/portfolio' },
    { name: t('quick_links_items.contact'), href: '/contact' },
  ]

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: t('title'),
    url: 'https://yourdomain.com',
    logo: 'https://yourdomain.com/logo.png',
    sameAs: socialLinks.map(link => link.href),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: t('contact.phone'),
      contactType: 'customer service',
    },
  }

  return (
    <>
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <motion.footer
        ref={footerRef}
        variants={containerVariants}
        initial="hidden"
        animate={footerInView ? "visible" : "hidden"}
        className="bg-gray-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={footerInView ? { scale: 1, opacity: 0.1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            {/* <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
              alt="Footer background"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: 'transparent'
              }}
            /> */}
            <div className="absolute inset-0 bg-gray-900 opacity-90" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold">{t('title')}</h3>
              <p className="text-gray-400">{t('description')}</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold">{t('quick_links')}</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={getLocalizedPath(link.href, currentLocale)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold">{t('contact.title')}</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <span className="block text-white">{t('contact.address_label')}</span>
                  {t('contact.address')}
                </li>
                <li className="text-gray-400">
                  <span className="block text-white">{t('contact.phone_label')}</span>
                  {t('contact.phone')}
                </li>
                <li className="text-gray-400">
                  <span className="block text-white">{t('contact.email_label')}</span>
                  {t('contact.email')}
                </li>
                <li className="text-gray-400">
                  {t('contact.hours')}
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold">{t('social')}</h3>
              <ul className="space-y-2">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                    >
                      <social.icon className="h-5 w-5" />
                      <span>{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
          >
            <p>{t('rights')}</p>
          </motion.div>
        </div>
      </motion.footer>
    </>
  )
}