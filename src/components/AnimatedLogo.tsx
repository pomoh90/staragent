'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface AnimatedLogoProps {
  href: string
}

export default function AnimatedLogo({ href }: AnimatedLogoProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(href)
  }

  return (
    <motion.div
      className="relative h-20 w-32 cursor-pointer overflow-visible flex items-center"
      onClick={handleClick}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-full flex items-center">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={128}
          height={48}
          className="object-contain"
          style={{ marginTop: '20px' }}
        />
      </div>
    </motion.div>
  )
}
