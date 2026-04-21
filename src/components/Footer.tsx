import { Link } from '@tanstack/react-router'
import { Github, Linkedin, Twitter, Heart } from 'lucide-react'

const socialLinks = [
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
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="py-12 bg-[#050505] border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Brand */}
          <Link
            to="/"
            aria-label="Wisdom Ossai – back to top"
            className="text-2xl font-bold"
          >
            <span className="text-white">A</span>
            <span className="bg-linear-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              C
            </span>
          </Link>

          {/* Quick nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-gray-500 text-sm flex items-center gap-1">
            <span>© {currentYear} Wisdom Ossai. Built with</span>
            <Heart
              className="w-4 h-4 text-red-500 fill-red-500"
              aria-label="love"
            />
            <span>and lots of coffee.</span>
          </p>

          {/* Social links */}
          <nav aria-label="Social media links">
            <ul className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    rel="noopener noreferrer me"
                    target="_blank"
                    aria-label={label}
                    className="p-2 text-gray-500 hover:text-white transition-colors block"
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
