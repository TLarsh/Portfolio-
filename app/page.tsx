"use client"

import { useEffect, useState } from "react"
import { motion, useScroll } from "framer-motion"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import TimelineSection from "@/components/timeline-section"
import ContactSection from "@/components/contact-section"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      <Navigation />

      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  )
}
