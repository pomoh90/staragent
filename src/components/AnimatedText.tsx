'use client'

import { motion } from 'framer-motion'

interface AnimatedTextProps {
  title: string
  subtitle: string
}

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

const titleVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
}

const subtitleVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
      delay: 0.2
    }
  }
}

const gradientVariants = {
  hidden: { 
    backgroundPosition: '0% 50%'
  },
  visible: {
    backgroundPosition: '100% 50%',
    transition: {
      duration: 3,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse' as const
    }
  }
}

export default function AnimatedText({ title, subtitle }: AnimatedTextProps) {
  return (
    <motion.div
      className="text-center space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold"
        variants={titleVariants}
      >
        <motion.span
          className="bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600 bg-clip-text text-transparent bg-[length:200%_auto]"
          variants={gradientVariants}
        >
          {title}
        </motion.span>
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-gray-600"
        variants={subtitleVariants}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  )
} 