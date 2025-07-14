"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  trail: { x: number; y: number }[]
  pulse: number
  rotation: number
  rotationSpeed: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 8000))

      const colors = ["#00ffff", "#ff00ff", "#ffff00", "#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"]

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          trail: [],
          pulse: Math.random() * Math.PI * 2,
          rotation: 0,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
        })
      }

      particlesRef.current = particles
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      // Create trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, index) => {
        // Update trail
        particle.trail.push({ x: particle.x, y: particle.y })
        if (particle.trail.length > 10) {
          particle.trail.shift()
        }

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const force = (150 - distance) / 150
          particle.vx += (dx / distance) * force * 0.1
          particle.vy += (dy / distance) * force * 0.1
        }

        // Update position with some randomness
        particle.x += particle.vx + Math.sin(Date.now() * 0.001 + index) * 0.5
        particle.y += particle.vy + Math.cos(Date.now() * 0.001 + index) * 0.5

        // Update pulse and rotation
        particle.pulse += 0.1
        particle.rotation += particle.rotationSpeed

        // Bounce off edges with energy
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }

        // Add some friction
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Draw trail
        particle.trail.forEach((point, trailIndex) => {
          const trailOpacity = (trailIndex / particle.trail.length) * particle.opacity * 0.3
          ctx.beginPath()
          ctx.arc(point.x, point.y, particle.size * 0.3, 0, Math.PI * 2)
          ctx.fillStyle = `${particle.color}${Math.floor(trailOpacity * 255)
            .toString(16)
            .padStart(2, "0")}`
          ctx.fill()
        })

        // Draw main particle with pulsing effect
        const pulseSize = particle.size + Math.sin(particle.pulse) * 2

        // Outer glow
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, pulseSize * 3)
        gradient.addColorStop(
          0,
          `${particle.color}${Math.floor(particle.opacity * 255)
            .toString(16)
            .padStart(2, "0")}`,
        )
        gradient.addColorStop(1, `${particle.color}00`)

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Main particle
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation)

        ctx.beginPath()
        ctx.arc(0, 0, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        // Inner sparkle
        ctx.beginPath()
        ctx.arc(0, 0, pulseSize * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `#ffffff${Math.floor(particle.opacity * 128)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        ctx.restore()

        // Draw dynamic connections
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 120) {
              const opacity = (1 - distance / 120) * 0.4

              // Create animated gradient line
              const gradient = ctx.createLinearGradient(particle.x, particle.y, otherParticle.x, otherParticle.y)
              gradient.addColorStop(
                0,
                `${particle.color}${Math.floor(opacity * 255)
                  .toString(16)
                  .padStart(2, "0")}`,
              )
              gradient.addColorStop(
                0.5,
                `#ffffff${Math.floor(opacity * 128)
                  .toString(16)
                  .padStart(2, "0")}`,
              )
              gradient.addColorStop(
                1,
                `${otherParticle.color}${Math.floor(opacity * 255)
                  .toString(16)
                  .padStart(2, "0")}`,
              )

              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = gradient
              ctx.lineWidth = 2
              ctx.stroke()
            }
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
