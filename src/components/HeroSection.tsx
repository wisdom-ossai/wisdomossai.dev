import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'

export default function HeroSection() {
  const [text, setText] = useState('')
  const fullText = 'Frontend Developer'
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <section
      aria-label="Introduction – Wisdom Ossai, Senior Frontend Developer"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]"
    >
      {/* linear orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] animate-pulse" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse"
        style={{ animationDelay: '1s' }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.02)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg mb-4 tracking-widest uppercase"
            aria-hidden="true"
          >
            Hello, I'm
          </motion.p>

          {/* Name — h1: only one per page, contains the primary keyword */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight"
          >
            Wisdom
            <span className="bg-linear-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              {' '}
              Ossai
            </span>
          </motion.h1>

          {/* Typewriter role — visually animated, static text for crawlers via aria-label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="h-12 mb-8"
            role="text"
            aria-label="Senior Frontend Developer"
          >
            <span
              className="text-2xl md:text-3xl text-gray-300 font-light"
              aria-hidden="true"
            >
              {text}
              <span className="animate-pulse text-violet-400">|</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Crafting pixel-perfect, accessible, and performant web experiences.
            Passionate about design systems, animations, and pushing the
            boundaries of the web.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#projects"
              aria-label="View Wisdom Ossai's featured projects"
              className="group relative px-8 py-4 bg-linear-to-r from-violet-600 to-cyan-500 rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
            >
              <span className="relative z-10 text-primary-foreground group-hover:text-primary">
                View My Work
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#contact"
              aria-label="Contact Wisdom Ossai"
              className="px-8 py-4 border border-gray-700 rounded-full text-white font-medium hover:border-violet-500 hover:text-violet-400 transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex items-center justify-center gap-6"
            aria-label="Social media profiles"
          >
            {[
              {
                icon: Github,
                href: 'https://github.com/wisdomossai',
                label: "Wisdom Ossai's GitHub profile",
              },
              {
                icon: Linkedin,
                href: 'https://linkedin.com/in/wisdomossai',
                label: "Wisdom Ossai's LinkedIn profile",
              },
              {
                icon: Twitter,
                href: 'https://twitter.com/wisdomossaidev',
                label: "Wisdom Ossai's Twitter profile",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                rel="noopener noreferrer me"
                target="_blank"
                className="p-3 text-gray-500 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </motion.nav>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-600"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
