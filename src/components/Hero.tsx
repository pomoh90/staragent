'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getLocaleFromPath } from '@/i18n/config'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Particle {
  id: number;
  left: string;
  top: string;
  xMovement: number[];
  yMovement: number[];
  duration: number;
  delay: number;
}

export function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const t = useTranslations('home')
  const pathname = usePathname()
  const currentLocale = getLocaleFromPath(pathname)

  const [bgNeurons, setBgNeurons] = useState<Particle[]>([])
  const [protons, setProtons] = useState<Particle[]>([])
  const [textNeurons, setTextNeurons] = useState<Particle[]>([])
  const [btnParticles, setBtnParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate background neurons
    setBgNeurons(Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 200 - 50}%`,
      top: `${Math.random() * 200 - 50}%`,
      xMovement: [
        Math.random() * 300 - 150,
        Math.random() * 300 - 150,
        Math.random() * 300 - 150
      ],
      yMovement: [
        Math.random() * 300 - 150,
        Math.random() * 300 - 150,
        Math.random() * 300 - 150
      ],
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 3
    })))

    // Generate protons
    setProtons(Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 200 - 50}%`,
      top: `${Math.random() * 200 - 50}%`,
      xMovement: [
        Math.random() * 400 - 200,
        Math.random() * 400 - 200,
        Math.random() * 400 - 200
      ],
      yMovement: [
        Math.random() * 400 - 200,
        Math.random() * 400 - 200,
        Math.random() * 400 - 200
      ],
      duration: Math.random() * 3 + 3,
      delay: Math.random() * 2
    })))

    // Generate text neurons
    setTextNeurons(Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 150 - 25}%`,
      top: `${Math.random() * 150 - 25}%`,
      xMovement: [
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
        Math.random() * 200 - 100
      ],
      yMovement: [
        Math.random() * 200 - 100,
        Math.random() * 200 - 100,
        Math.random() * 200 - 100
      ],
      duration: Math.random() * 2 + 2,
      delay: Math.random() * 1
    })))

    // Generate button particles
    setBtnParticles(Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 160 - 30}%`,
      top: `${Math.random() * 160 - 30}%`,
      xMovement: [
        Math.random() * 80 - 40,
        Math.random() * 80 - 40,
        Math.random() * 80 - 40
      ],
      yMovement: [
        Math.random() * 80 - 40,
        Math.random() * 80 - 40,
        Math.random() * 80 - 40
      ],
      duration: Math.random() * 2 + 1.5,
      delay: Math.random() * 1
    })))
  }, [])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/photo-1497366754035-f200968a6e72.jpg"
            alt="Hero background"
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
            quality={75}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.6 } : {}}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-black backdrop-blur-sm"
          />
        </motion.div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="relative">
          {/* Background neurons */}
          {bgNeurons.map((particle) => (
            <motion.div
              key={`bg-neuron-${particle.id}`}
              className="neuron absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                x: particle.xMovement,
                y: particle.yMovement,
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
                times: [0, 0.5, 1]
              }}
            />
          ))}

          {/* Protons */}
          {protons.map((particle) => (
            <motion.div
              key={`proton-${particle.id}`}
              className="proton absolute w-1.5 h-1.5 bg-blue-500 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                x: particle.xMovement,
                y: particle.yMovement,
                scale: [0.6, 1, 0.6],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
                times: [0, 0.5, 1]
              }}
            />
          ))}

          {/* Text neurons */}
          {textNeurons.map((particle) => (
            <motion.div
              key={`text-neuron-${particle.id}`}
              className="neuron absolute w-1 h-1 bg-blue-300 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                x: particle.xMovement,
                y: particle.yMovement,
                scale: [0.8, 1.1, 0.8],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
                times: [0, 0.5, 1]
              }}
            />
          ))}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 relative"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto relative"
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="relative"
        >
          {/* Button particles */}
          {btnParticles.map((particle) => (
            <motion.div
              key={`btn-particle-${particle.id}`}
              className="neuron absolute w-1 h-1 bg-blue-300 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                x: particle.xMovement,
                y: particle.yMovement,
                scale: [0.8, 1.1, 0.8],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
                times: [0, 0.5, 1]
              }}
            />
          ))}
          <Link
            href={`/${currentLocale}/contact`}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            {t('hero.cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
