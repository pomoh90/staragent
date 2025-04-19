'use client'

import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { About } from '@/components/About'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('home')

  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <CTA />
    </main>
  )
} 