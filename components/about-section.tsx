"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "React", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "Python", level: 88 },
  { name: "Django", level: 85 },
  { name: "FastAPI", level: 82 },
  { name: "MongoDB", level: 80 },
  { name: "PostgreSQL", level: 85 },
  { name: "Docker", level: 78 },
]

const techStack = ["React", "Node.js", "Python", "Django", "FastAPI", "MongoDB", "PostgreSQL", "Docker"]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Professional Background</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              With over 5 years of experience in software development, I specialize in creating robust, scalable
              applications using modern technologies. My expertise spans both frontend and backend development, with a
              strong focus on user experience and system architecture.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm passionate about writing clean, maintainable code and staying current with industry best practices. My
              approach combines technical excellence with practical problem-solving to deliver solutions that meet both
              user needs and business objectives.
            </p>

            {/* Tech Stack */}
            <div className="mt-8">
              <h4 className="text-lg font-medium text-white mb-4">Technologies I Work With</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-600/30"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
          >
            <h3 className="text-xl font-semibold text-white mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
