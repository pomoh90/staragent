'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface AnimatedLogoProps {
  text: string
  href: string
  color: string
}

export default function AnimatedLogo({ text, href, color }: AnimatedLogoProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(href)
  }

  return (
    <motion.div 
      className="relative h-12 cursor-pointer overflow-visible"
      onClick={handleClick}
      style={{ width: text.length * 16 }}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 flex items-center justify-start">
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className="text-2xl font-bold transition-colors duration-300"
            style={{ color }}
          >
            {letter}
          </span>
        ))}
      </div>
    </motion.div>
  )
} 