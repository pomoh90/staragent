'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'
import BackgroundCanvas from '@/components/BackgroundCanvas'
import AnimatedText from '@/components/AnimatedText'
import ParticleAnimation from '@/components/ParticleAnimation'
import AnimatedTitle from '@/components/AnimatedTitle'

const PortfolioPage = () => {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')
  const filterRef = useRef(null)

  const [introRef, introInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categories = [
    { id: 'all', label: t('portfolio.filters.all') },
    { id: 'branding', label: t('portfolio.filters.branding') },
    { id: 'marketing', label: t('portfolio.filters.marketing') },
    { id: 'video', label: t('portfolio.filters.video') },
  ]

  const projects = [
    {
      id: 'ecommerce',
      title: t('portfolio.projects.ecommerce.title'),
      description: t('portfolio.projects.ecommerce.description'),
      category: 'marketing',
      image: '/images/photo-1556741533-6e6a62bd8b49.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      client: t('portfolio.projects.ecommerce.client'),
      results: t('portfolio.projects.ecommerce.results'),
    },
    {
      id: 'branding',
      title: t('portfolio.projects.branding.title'),
      description: t('portfolio.projects.branding.description'),
      category: 'branding',
      image: '/images/photo-1561070791-2526d30994b5.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      client: t('portfolio.projects.branding.client'),
      results: t('portfolio.projects.branding.results'),
    },
    {
      id: 'social',
      title: t('portfolio.projects.social.title'),
      description: t('portfolio.projects.social.description'),
      category: 'marketing',
      image: '/images/photo-1611162617213-7d7a39e9b1d7.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      client: t('portfolio.projects.social.client'),
      results: t('portfolio.projects.social.results'),
    },
    {
      id: 'corporate',
      title: t('portfolio.projects.corporate.title'),
      description: t('portfolio.projects.corporate.description'),
      category: 'branding',
      image: '/images/ux-indonesia-qC2n6RQU4Vw-unsplash.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      client: t('portfolio.projects.corporate.client'),
      results: t('portfolio.projects.corporate.results'),
    },
    {
      id: 'packaging',
      title: t('portfolio.projects.packaging.title'),
      description: t('portfolio.projects.packaging.description'),
      category: 'branding',
      image: '/images/photo-1607082348824-0a96f2a4b9da.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      client: t('portfolio.projects.packaging.client'),
      results: t('portfolio.projects.packaging.results'),
    },
    {
      id: 'video-campaign',
      title: t('portfolio.projects.video.title'),
      description: t('portfolio.projects.video.description'),
      category: 'video',
      image: '/images/photo-1574717024653-61fd2cf4d44d.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      client: t('portfolio.projects.video.client'),
      results: t('portfolio.projects.video.results'),
    },
    {
      id: 'fitness-app',
      title: 'Fitness App Development',
      description: 'Modern fitness tracking application with AI-powered workout recommendations',
      category: 'marketing',
      image: '/images/photo-1571019613454-1cb2f99b2d8b.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      client: 'FitLife',
      results: '500K+ downloads, 4.8/5 app store rating',
    },
    {
      id: 'luxury-branding',
      title: 'Luxury Brand Identity',
      description: 'Complete brand identity development for high-end fashion label',
      category: 'branding',
      image: '/images/photo-1445205170230-053b83016050.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      client: 'Elegance Couture',
      results: '200% increase in brand recognition',
    },
    {
      id: 'seo-campaign',
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategy implementation for e-commerce platform',
      category: 'marketing',
      image: '/images/photo-1551288049-bebda4e38f71.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      client: 'ShopSmart',
      results: '300% increase in organic traffic',
    },
    {
      id: 'product-video',
      title: 'Product Launch Video',
      description: 'Creative video campaign for innovative tech product launch',
      category: 'video',
      image: '/images/photo-1579546929518-9e396f3cc809.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      client: 'TechInnovate',
      results: '2M+ views, 500% increase in product inquiries',
    },
    {
      id: 'ui-redesign',
      title: 'UI/UX Redesign',
      description: 'Complete redesign of financial application interface',
      category: 'branding',
      image: '/images/photo-1551434678-e076c223a692.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      client: 'FinTech Pro',
      results: '65% increase in user retention',
    }
  ]

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Top Section with Particles */}
      <div className="relative">
        <div className="absolute inset-0">
          <ParticleAnimation />
        </div>

        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <BackgroundCanvas />
          <div className="relative z-20 text-center text-white max-w-3xl mx-auto px-4">
            <AnimatedTitle
              title={t('portfolio.title')}
              subtitle={t('portfolio.subtitle')}
              className="relative z-20"
            />
          </div>
        </section>
      </div>

      {/* Category Filters */}
      <div
        ref={filterRef}
        className="w-full bg-black relative z-30"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="sticky top-0 z-50 bg-black py-4 border-y-2 border-primary-500/50"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-full transition-colors duration-300 font-medium text-base select-none
                    ${activeCategory === category.id
                      ? 'bg-primary-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:shadow-[0_0_20px_rgba(245,158,11,0.7)] hover:bg-primary-600 active:bg-primary-700'
                      : 'bg-white text-gray-900 hover:bg-gray-100 active:bg-gray-200 shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                    }
                    active:transform active:scale-95 active:shadow-inner
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-black
                    cursor-pointer touch-manipulation
                  `}
                >
                  <span className="relative z-10">{category.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Portfolio Grid */}
      <motion.section
        ref={gridRef}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={gridInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-lg bg-gray-800 shadow-xl"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-sm mb-4 text-gray-200">{project.description}</p>
                      <p className="text-xs text-primary-300 font-medium">{project.results}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gray-800/80 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-primary-300 font-medium">{project.client}</span>
                    <span className="text-sm text-gray-400">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}

export default PortfolioPage
