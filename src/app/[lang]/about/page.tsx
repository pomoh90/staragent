'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'
import { type Locale } from '@/i18n/locales'

export default function About() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: valuesRef, inView: valuesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { t } = useTranslation()

  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: '/images/photo-1560250097-0b93528c311a.jpg?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: '/images/photo-1494790108377-be9c29b29330.jpg?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      image: '/images/photo-1519244703995-f4e0f30006d5.jpg?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Lead',
      image: '/images/photo-1506794778202-cad84cf45f1d.jpg?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]

  const values = [
    {
      title: t('about.values.items.innovation.title'),
      description: t('about.values.items.innovation.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: t('about.values.items.excellence.title'),
      description: t('about.values.items.excellence.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: t('about.values.items.collaboration.title'),
      description: t('about.values.items.collaboration.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: t('about.values.items.transparency.title'),
      description: t('about.values.items.transparency.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="bg-[rgb(59,130,246,0.5)] space-y-16 md:space-y-32">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/photo-1522071820081-009f0129c71c.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="About Us"
            fill
            sizes="100vw"
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            {t('about.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="relative">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.mission.title')}</h2>
              <p className="text-base md:text-lg text-white/90 mb-4">
                {t('about.mission.content')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-64 md:h-96 w-full"
            >
              <Image
                src="/images/photo-1522071820081-009f0129c71c.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Mission"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="relative">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t('about.values.title')}</h2>
            <p className="text-lg md:text-xl text-white/90">
              {t('about.values.subtitle')}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg"
              >
                <div className="text-white mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                <p className="text-white/90">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="relative">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t('about.team.title')}</h2>
            <p className="text-lg md:text-xl text-white/90">
              {t('about.team.subtitle')}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 192px) 192px, 192px"
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                <p className="text-white/90">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
