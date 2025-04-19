'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import { useRef } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { type Locale } from '@/i18n/locales'
import Navbar from '@/components/Navbar'
import ParticleAnimation from '@/components/ParticleAnimation'

interface HomeContentProps {
  lang: Locale
}

export default function HomeContent({ lang }: HomeContentProps) {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const { t } = useTranslation()

  const features = [
    {
      title: 'Strategic Planning',
      description: 'We develop comprehensive marketing strategies tailored to your business goals and target audience.',
      icon: '🎯',
    },
    {
      title: 'Creative Design',
      description: 'Our team of designers creates stunning visuals that capture your brand essence and engage your audience.',
      icon: '🎨',
    },
    {
      title: 'Digital Marketing',
      description: 'From SEO to social media, we help you reach and engage with your target audience online.',
      icon: '📱',
    },
    {
      title: 'Analytics & Reporting',
      description: 'We track and analyze your marketing performance to ensure continuous improvement and ROI.',
      icon: '📊',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Working with this agency transformed our online presence. Their strategic approach and creative solutions helped us achieve remarkable growth.',
      image: '/images/photo-1494790108377-be9c29b29330.jpg?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, Global Corp',
      content: 'The team\'s expertise in digital marketing and their data-driven approach have been invaluable to our success.',
      image: '/images/photo-1519244703995-f4e0f30006d5.jpg?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, EcoLife',
      content: 'Their creative solutions and attention to detail helped us establish a strong brand identity in a competitive market.',
      image: '/images/photo-1506794778202-cad84cf45f1d.jpg?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]

  return (
    <>
      <Navbar />
      <div className="space-y-16 md:space-y-32" ref={containerRef}>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/images/photo-1497366754035-f200968a6e72.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <ParticleAnimation className="absolute inset-0" />
          </motion.div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8">
              {t('home.hero.subtitle')}
            </p>
            <Link href={`/${lang}/contact`}>
              <Button
                variant="primary"
                size="lg"
                className="relative z-20"
              >
                {t('common.getStarted')}
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.services.title')}</h2>
            <p className="text-lg md:text-xl text-gray-600">
              {t('home.services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.title')}</h2>
              <p className="text-base md:text-lg text-gray-600 mb-4">
                {t('about.subtitle')}
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                {t('about.mission.content')}
              </p>
              <Link href={`/${lang}/about`}>
                <Button variant="outline">{t('common.learnMore')}</Button>
              </Link>
            </div>
            <div className="relative h-64 md:h-96 w-full">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Team working"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section ref={testimonialsRef} className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.testimonials.title')}</h2>
            <p className="text-lg md:text-xl text-gray-600">
              {t('home.testimonials.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              {t('contact.subtitle')}
            </p>
            <Link href={`/${lang}/contact`}>
              <Button
                variant="primary"
                size="lg"
                className="relative z-20"
              >
                {t('common.contactUs')}
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}