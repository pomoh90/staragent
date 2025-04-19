'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Button from '@/components/Button'

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to increase your online visibility and drive growth.',
      icon: '📱',
      features: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click Advertising',
        'Social Media Marketing',
        'Email Marketing',
        'Content Marketing',
      ],
      image: '/images/photo-1551434678-e076c223a692.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      title: 'Brand Strategy',
      description: 'Develop a strong brand identity that resonates with your target audience.',
      icon: '🎯',
      features: [
        'Brand Positioning',
        'Brand Messaging',
        'Visual Identity',
        'Brand Guidelines',
        'Competitor Analysis',
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      title: 'Content Creation',
      description: 'Engaging content that tells your brand story and connects with your audience.',
      icon: '✍️',
      features: [
        'Blog Writing',
        'Video Production',
        'Graphic Design',
        'Copywriting',
        'Content Strategy',
      ],
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      title: 'Social Media',
      description: 'Build and maintain a strong social media presence across platforms.',
      icon: '📱',
      features: [
        'Social Media Strategy',
        'Community Management',
        'Influencer Marketing',
        'Social Media Advertising',
        'Analytics & Reporting',
      ],
      image: '/images/photo-1611162617213-7d7a39e9b1d7.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive websites that deliver exceptional user experiences.',
      icon: '💻',
      features: [
        'Website Design',
        'E-commerce Solutions',
        'Mobile Optimization',
        'Performance Optimization',
        'Maintenance & Support',
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      title: 'Analytics & SEO',
      description: 'Data-driven insights to optimize your online presence and performance.',
      icon: '📊',
      features: [
        'SEO Audit',
        'Keyword Research',
        'Technical SEO',
        'Analytics Setup',
        'Performance Tracking',
      ],
      image: '/images/photo-1551288049-bebda4e38f71.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
  ]

  const stats = [
    { label: 'Clients Served', value: '500+' },
    { label: 'Projects Completed', value: '1000+' },
    { label: 'Team Members', value: '50+' },
    { label: 'Years Experience', value: '10+' },
  ]

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/photo-1551434678-e076c223a692.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Services background"
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Comprehensive marketing solutions to help your business grow
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline">Learn More</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let&apos;s work together to create a marketing strategy that drives results.
        </p>
        <Button variant="primary" size="lg">
          Contact Us
        </Button>
      </section>
    </div>
  )
}