"use client"

import { motion } from "framer-motion"
import { ChevronDown, Download, Mail } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional tech background image */}
      <div className="absolute inset-0">
        <img src="/images/hero-tech-bg.jpg" alt="Technology background" className="w-full h-full object-cover" />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-gray-900/80 to-slate-800/85"></div>

        {/* Additional warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 via-transparent to-blue-900/10"></div>
      </div>

      {/* Subtle animated elements */}
      <div className="absolute inset-0">
        {/* Soft gradient overlays */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.15)_0%,transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.15)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1)_0%,transparent_50%)]"></div>
        </div>

        {/* Floating code elements with warm colors */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="code-float code-float-1 text-orange-300/30">{"{ }"}</div>
          <div className="code-float code-float-2 text-blue-300/30">{"< />"}</div>
          <div className="code-float code-float-3 text-amber-300/30">{"( )"}</div>
          <div className="code-float code-float-4 text-purple-300/30">{"[ ]"}</div>
          <div className="code-float code-float-5 text-cyan-300/30">{"=> "}</div>
          <div className="code-float code-float-6 text-rose-300/30">{"&&"}</div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animate-grid-move"></div>
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            John Doe
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-6 drop-shadow-md"
          >
            Full Stack Software Developer
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-sm"
          >
            Passionate about creating efficient, scalable solutions and bringing innovative ideas to life through clean,
            maintainable code.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </motion.button>

          <motion.button
            className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Download CV
          </motion.button>

          <motion.button
            className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail size={18} />
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-gray-300 cursor-pointer hover:text-white transition-colors duration-300 drop-shadow-md"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
