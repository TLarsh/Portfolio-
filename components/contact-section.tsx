"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Message sent successfully!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'd love
                to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-sm text-gray-400">john.doe@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-sm text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-sm text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/10"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 space-y-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Send Message</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
