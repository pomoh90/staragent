'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  speed: number
  direction: number
  pulsePhase: number
}

interface ParticleAnimationProps {
  className?: string
}

export default function ParticleAnimation({ className = '' }: ParticleAnimationProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const colors = [
      '#60A5FA', // Light blue
      '#93C5FD', // Lighter blue
      '#BFDBFE', // Very light blue
      '#3B82F6', // Blue
      '#2563EB', // Darker blue
    ]

    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Percentage-based positioning
      y: Math.random() * 100,
      size: Math.random() * 4 + 3, // Slightly larger particles
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 15 + 10,
      direction: Math.random() * Math.PI * 2,
      pulsePhase: Math.random() * Math.PI * 2
    }))

    setParticles(newParticles)
  }, [])

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            backgroundColor: particle.color,
            filter: `blur(${particle.size / 2}px)`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [
              `${Math.cos(particle.direction) * particle.speed}vw`,
              `${Math.cos(particle.direction + Math.PI) * particle.speed}vw`,
              `${Math.cos(particle.direction) * particle.speed}vw`
            ],
            y: [
              `${Math.sin(particle.direction) * particle.speed}vh`,
              `${Math.sin(particle.direction + Math.PI) * particle.speed}vh`,
              `${Math.sin(particle.direction) * particle.speed}vh`
            ],
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.5, 1]
          }}
        />
      ))}
    </div>
  )
} 