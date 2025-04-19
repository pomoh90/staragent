'use client'

import { motion } from 'framer-motion'
import { textContainer, textVariant } from '@/lib/animations'

interface AnimatedHeadingProps {
  title: string
  className?: string
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function AnimatedHeading({ 
  title, 
  className = '', 
  variant = 'h1' 
}: AnimatedHeadingProps) {
  const words = title.split(' ')

  return (
    <motion.div
      variants={textContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={textVariant}
          className="inline-block"
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.div>
  )
} 