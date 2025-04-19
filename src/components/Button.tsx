'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-300'

const variantStyles = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600',
  secondary: 'bg-white text-gray-900 hover:bg-gray-100',
  outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick
}: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </motion.div>
  )
} 