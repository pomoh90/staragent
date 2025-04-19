'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Button from '@/components/Button'
import { useState } from 'react'

export default function Portfolio() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Design' },
    { id: 'branding', name: 'Branding' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'app', name: 'App Design' },
  ]

  const projects = [
    {
      title: 'E-commerce Redesign',
      category: 'web',
      image: '/images/photo-1556741533-6e6a62bd8b49.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Complete redesign of an e-commerce platform resulting in a 40% increase in conversion rates.',
      client: 'Fashion Forward',
      year: '2023',
    },
    {
      title: 'Brand Identity',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Development of a comprehensive brand identity system for a tech startup.',
      client: 'TechVision',
      year: '2023',
    },
    {
      title: 'Social Media Campaign',
      category: 'marketing',
      image: '/images/photo-1611162617213-7d7a39e9b1d7.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Viral social media campaign that increased brand awareness by 200%.',
      client: 'GreenLife',
      year: '2022',
    },
    {
      title: 'Mobile App Design',
      category: 'app',
      image: '/images/photo-1551434678-e076c223a692.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'User-centered mobile app design for a fitness tracking application.',
      client: 'FitTrack',
      year: '2022',
    },
    {
      title: 'Corporate Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Modern corporate website with integrated CMS and analytics.',
      client: 'Global Corp',
      year: '2022',
    },
    {
      title: 'Product Packaging',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      description: 'Sustainable packaging design for an organic skincare line.',
      client: 'Nature&apos;s Touch',
      year: '2021',
    },
  ]

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/photo-1551434678-e076c223a692.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Portfolio background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Discover our latest projects and success stories
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Client: {project.client}</span>
                  <Button variant="outline" size="sm">
                    View Case Study
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">
            Let&apos;s create something amazing together.
          </p>
          <Button variant="secondary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  )
}
