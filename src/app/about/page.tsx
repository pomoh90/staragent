'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Button from '@/components/Button'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      bio: 'With over 15 years of experience in digital marketing, Alex leads our team with a vision for innovation and excellence.',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Maria Garcia',
      role: 'Creative Director',
      bio: 'Maria brings a unique blend of creativity and strategic thinking to every project, ensuring our designs tell compelling stories.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'James Wilson',
      role: 'Head of Digital',
      bio: 'James specializes in data-driven marketing strategies and has helped numerous clients achieve exceptional ROI.',
      image: '/images/photo-1507003211169-0a1dd7228f2d.jpg?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Sophie Chen',
      role: 'Content Strategist',
      bio: 'Sophie crafts engaging content that resonates with target audiences and drives meaningful engagement.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly explore new ideas and technologies to stay ahead of the curve.',
      icon: '💡',
    },
    {
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering exceptional results.',
      icon: '⭐',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong partnerships.',
      icon: '🤝',
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency.',
      icon: '🔒',
    },
  ]

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/photo-1522071820081-009f0129c71c.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="About us background"
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
            About Our Agency
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90"
          >
            We are a team of passionate marketers dedicated to helping businesses succeed
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              Founded in 2010, our agency started with a simple mission: to help businesses thrive in the digital age.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Over the years, we&apos;ve grown into a full-service marketing agency, working with clients across various industries.
              Our success is built on a foundation of innovation, creativity, and a deep understanding of our clients&apos; needs.
            </p>
            <Button variant="outline">Learn More</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-96"
          >
            <Image
              src="/images/photo-1522071820081-009f0129c71c.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Our story"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-gray-600">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">
            The talented individuals behind our success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-600 mb-4">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8">
            We&apos;re always looking for talented individuals to join our growing team.
          </p>
          <Button variant="secondary" size="lg">
            View Open Positions
          </Button>
        </div>
      </section>
    </div>
  )
}