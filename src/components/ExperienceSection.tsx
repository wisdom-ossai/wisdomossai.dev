import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'TechNova Inc.',
    period: '2022 - Present',
    description:
      'Leading frontend architecture for enterprise SaaS products. Implemented design systems that reduced development time by 40%.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Storybook'],
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'DigitalCraft Studio',
    period: '2020 - 2022',
    description:
      'Built responsive web applications for diverse clients including e-commerce, fintech, and healthcare sectors.',
    technologies: ['Vue.js', 'Nuxt', 'Sass', 'Firebase'],
  },
  {
    id: 3,
    role: 'Junior Developer',
    company: 'StartupHub',
    period: '2019 - 2020',
    description:
      'Developed MVPs for early-stage startups. Collaborated closely with designers to deliver pixel-perfect interfaces.',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
  },
  {
    id: 4,
    role: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2018 - 2019',
    description:
      'Built custom websites and web applications for small businesses and individual clients.',
    technologies: ['HTML/CSS', 'JavaScript', 'WordPress', 'PHP'],
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-32 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-800 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p
            className="text-violet-400 text-sm tracking-widest uppercase mb-4 block"
            aria-hidden="true"
          >
            Career Path
          </p>
          <h2
            id="experience-heading"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Work
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              {' '}
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <ol
          className="max-w-4xl mx-auto relative"
          aria-label="Work experience timeline"
        >
          {experiences.map((exp, idx) => (
            <motion.li
              key={exp.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative flex items-center mb-12 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full z-10 hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full animate-ping opacity-20" />
              </div>

              {/* Card */}
              <div
                className={`w-full md:w-[calc(50%-40px)] ${idx % 2 === 0 ? 'md:pr-0' : 'md:pl-0'}`}
              >
                <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-violet-500/50 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-violet-500/10 rounded-xl">
                      <Briefcase className="w-5 h-5 text-violet-400" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-violet-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-violet-400 text-sm mb-4">
                    <span className="sr-only">Company: </span>
                    {exp.company}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul
                    className="flex flex-wrap gap-2"
                    aria-label={`Technologies used at ${exp.company}`}
                  >
                    {exp.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full list-none"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
