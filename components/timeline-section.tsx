"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading development of scalable web applications and mentoring junior developers.",
    achievements: [
      "Increased application performance by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "InnovateLab",
    location: "Austin, TX",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects using modern web technologies.",
    achievements: [
      "Delivered 15+ successful projects",
      "Reduced deployment time by 60%",
      "Improved code coverage to 95%",
    ],
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "DataFlow Systems",
    location: "Remote",
    period: "2019 - 2020",
    description: "Built robust APIs and data processing pipelines for enterprise clients.",
    achievements: [
      "Processed 1M+ daily transactions",
      "Reduced API response time by 50%",
      "Implemented real-time data streaming",
    ],
  },
]

export default function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Experience</h2>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>

              {/* Content Card */}
              <div
                className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
              >
                <motion.div
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-1">{exp.title}</h3>

                  <div className="flex items-center gap-2 text-gray-300 mb-2">
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <MapPin size={16} />
                    <span className="text-sm">{exp.location}</span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <div>
                    <h4 className="text-sm font-medium text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
