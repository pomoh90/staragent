'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  color: string
}

interface TextParticleAnimationProps {
  text: string
  fontSize?: number
  particleSize?: number
  color?: string
  className?: string
  href?: string
}

const TextParticleAnimation = ({
  text,
  fontSize = 24,
  particleSize = 1,
  color = '#2563EB',
  className = '',
  href = '/',
}: TextParticleAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isExploding, setIsExploding] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const router = useRouter()

  const createParticles = (ctx: CanvasRenderingContext2D) => {
    const tempCanvas = document.createElement('canvas')
    const tempCtx = tempCanvas.getContext('2d')
    if (!tempCtx) return []

    tempCanvas.width = ctx.canvas.width
    tempCanvas.height = ctx.canvas.height

    tempCtx.font = `${fontSize}px sans-serif`
    tempCtx.fillStyle = color
    tempCtx.textAlign = 'center'
    tempCtx.textBaseline = 'middle'
    tempCtx.fillText(text, tempCanvas.width / 2, tempCanvas.height / 2)

    const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height)
    const pixels = imageData.data
    const newParticles: Particle[] = []

    for (let y = 0; y < tempCanvas.height; y += particleSize) {
      for (let x = 0; x < tempCanvas.width; x += particleSize) {
        const i = (y * tempCanvas.width + x) * 4
        if (pixels[i + 3] > 128) {
          const particle: Particle = {
            x,
            y,
            vx: (Math.random() - 0.5) * 10,
            vy: (Math.random() - 0.5) * 10 - 5,
            life: 1,
            maxLife: 100 + Math.random() * 50,
            size: particleSize,
            color
          }
          newParticles.push(particle)
        }
      }
    }

    return newParticles
  }

  const animate = (ctx: CanvasRenderingContext2D, particles: Particle[]) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    if (!isExploding) {
      ctx.font = `${fontSize}px sans-serif`
      ctx.fillStyle = color
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(text, ctx.canvas.width / 2, ctx.canvas.height / 2)
      return
    }

    const updatedParticles = particles.filter(particle => particle.life > 0)

    updatedParticles.forEach(particle => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.vy += 0.1 // gravity
      particle.life -= 1

      const alpha = particle.life / particle.maxLife
      ctx.fillStyle = `${color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()
    })

    setParticles(updatedParticles)

    if (updatedParticles.length === 0 && href) {
      router.push(href)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    if (!isExploding) {
      const newParticles = createParticles(ctx)
      setParticles(newParticles)
    }

    let animationId: number
    const animationLoop = () => {
      animate(ctx, particles)
      animationId = requestAnimationFrame(animationLoop)
    }
    animationId = requestAnimationFrame(animationLoop)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [isExploding, particles, text, fontSize, color, particleSize])

  const handleClick = () => {
    if (href) {
      setIsExploding(true)
    }
  }

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full cursor-pointer ${className}`}
      onClick={handleClick}
    />
  )
}

export default TextParticleAnimation 