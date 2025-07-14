"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A comprehensive e-commerce solution featuring user authentication, payment processing, inventory management, and an intuitive admin dashboard. Built with modern web technologies for optimal performance.",
    image: "/images/ecommerce-dashboard.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative project management platform with real-time updates, file sharing, team communication, and advanced analytics. Designed for modern remote teams.",
    image: "/images/task-management.png",
    technologies: ["React", "Django", "PostgreSQL", "WebSocket"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "A comprehensive data visualization platform featuring interactive charts, real-time metrics, custom reporting, and advanced filtering capabilities for business intelligence.",
    image: "/images/analytics-dashboard.png",
    technologies: ["React", "Python", "FastAPI", "Chart.js"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media App",
    description:
      "A mobile-first social networking platform with user profiles, real-time messaging, content sharing, and advanced privacy controls. Built for seamless user engagement.",
    image: "/images/social-media-app.png",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Learning Management System",
    description:
      "An educational platform with course creation tools, progress tracking, interactive quizzes, and video streaming capabilities. Designed for online education providers.",
    image: "/images/learning-platform.png",
    technologies: ["React", "Django", "PostgreSQL", "AWS"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Financial Dashboard",
    description:
      "A sophisticated financial tracking application with portfolio management, real-time market data, automated reporting, and risk analysis tools for investment professionals.",
    image: "/images/financial-dashboard.png",
    technologies: ["React", "Node.js", "PostgreSQL", "D3.js"],
    github: "#",
    live: "#",
    featured: false,
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-8"></div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {["all", "featured"].map((filterType) => (
              <motion.button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter === filterType
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Project type badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}

                {/* Overlay with links on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-sm border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
