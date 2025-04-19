'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export default function AnimatedTitle({ title, subtitle, className = '' }: AnimatedTitleProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const subtitleVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`text-center ${className}`}
    >
      <motion.h1
        variants={titleVariants}
        className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-300"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          variants={subtitleVariants}
          className="text-lg md:text-xl text-gray-300"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
} 