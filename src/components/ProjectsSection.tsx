import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Nebula Dashboard',
    category: 'Web App',
    description:
      'A modern analytics dashboard with real-time data visualization, dark mode, and customizable widgets.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    tags: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    color: 'from-violet-600 to-purple-600',
    live: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Bloom E-Commerce',
    category: 'E-Commerce',
    description:
      'Full-featured online store with cart management, Stripe payments, and inventory tracking.',
    image:
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop',
    tags: ['Next.js', 'Prisma', 'Stripe', 'PostgreSQL'],
    color: 'from-cyan-500 to-blue-600',
    live: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Pulse Social',
    category: 'Social Media',
    description:
      'A real-time social platform with instant messaging, stories, and content sharing features.',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop',
    tags: ['React', 'Socket.io', 'MongoDB', 'Redis'],
    color: 'from-pink-500 to-rose-600',
    live: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Zenith Landing',
    category: 'Marketing',
    description:
      'High-converting SaaS landing page with smooth animations and optimized performance.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    tags: ['Next.js', 'Framer Motion', 'GSAP', 'Vercel'],
    color: 'from-amber-500 to-orange-600',
    live: '#',
    github: '#',
  },
]

const categories = ['All', 'Web App', 'E-Commerce', 'Social Media', 'Marketing']

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-32 bg-[#0a0a0a] relative"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p
            className="text-violet-400 text-sm tracking-widest uppercase mb-4 block"
            aria-hidden="true"
          >
            Portfolio
          </p>
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Featured
            <span className="bg-linear-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              {' '}
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills in building modern,
            responsive, and user-friendly web applications.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-linear-to-r from-violet-600 to-cyan-500 text-white'
                  : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800 hover:border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          role="list"
          aria-label="Featured projects"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                role="listitem"
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                aria-label={`Project: ${project.title}`}
                className="group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} – ${project.category} project screenshot`}
                    width="800"
                    height="500"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-t ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                  />

                  {/* Overlay links */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    aria-hidden="true"
                  >
                    <a
                      href={project.live}
                      aria-label={`View live demo of ${project.title}`}
                      rel="noopener noreferrer"
                      target="_blank"
                      tabIndex={-1}
                      className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      aria-label={`View ${project.title} source code on GitHub`}
                      rel="noopener noreferrer"
                      target="_blank"
                      tabIndex={-1}
                      className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-violet-400 tracking-wider uppercase">
                      {project.category}
                    </span>
                    <ArrowUpRight
                      className={`w-5 h-5 text-gray-600 transition-all duration-300 ${
                        hoveredId === project.id
                          ? 'text-violet-400 translate-x-1 -translate-y-1'
                          : ''
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-400 transition-colors">
                    <a
                      href={project.live}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="focus:outline-none focus:underline focus:text-violet-400"
                      aria-label={`${project.title} – ${project.description}`}
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <ul
                    className="flex flex-wrap gap-2"
                    aria-label={`Technologies used in ${project.title}`}
                  >
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full list-none"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
