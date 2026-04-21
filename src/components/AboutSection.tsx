import { motion } from 'framer-motion'
import { Code2, Palette, Zap, Users } from 'lucide-react'

const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Next.js', level: 88 },
  { name: 'Angular', level: 89 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Node.js', level: 75 },
  { name: 'Figma', level: 80 },
]

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable code',
  },
  {
    icon: Palette,
    title: 'Design Focus',
    desc: 'Pixel-perfect implementations',
  },
  { icon: Zap, title: 'Performance', desc: 'Optimized for speed & UX' },
  { icon: Users, title: 'Collaboration', desc: 'Team player & communicator' },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-32 bg-[#0a0a0a] relative"
    >
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-violet-950/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-violet-400 text-sm tracking-widest uppercase mb-4 block"
              aria-hidden="true"
            >
              About Me
            </motion.p>
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Turning Ideas Into
              <span className="bg-linear-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                {' '}
                Reality
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image & highlights */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Profile image placeholder with linear border */}
                <div className="relative w-72 h-72 mx-auto mb-12">
                  <div className="absolute inset-0 bg-linear-to-r from-violet-600 to-cyan-500 rounded-2xl rotate-6 opacity-20" />
                  <div className="absolute inset-0 bg-linear-to-r from-violet-600 to-cyan-500 rounded-2xl -rotate-3 opacity-40" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-800">
                    <img
                      src="/profile.png"
                      alt="Wisdom Ossai – Senior Frontend Developer based in San Francisco"
                      width="288"
                      height="288"
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Highlight cards */}
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map(({ icon: Icon, title, desc }, idx) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-violet-500/50 transition-all duration-300 group"
                    >
                      <Icon className="w-6 h-6 text-violet-400 mb-2 group-hover:scale-110 transition-transform" />
                      <h4 className="text-white font-medium text-sm">
                        {title}
                      </h4>
                      <p className="text-gray-500 text-xs mt-1">{desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Bio & skills */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6 text-gray-400 leading-relaxed mb-10">
                <p className="text-lg">
                  With <span className="text-white font-medium">5+ years</span>{' '}
                  of experience in frontend development, I specialize in
                  building modern web applications that combine beautiful design
                  with exceptional performance.
                </p>
                <p>
                  My journey started with a curiosity for how websites work,
                  which evolved into a passion for creating intuitive user
                  experiences. I've had the privilege of working with startups
                  and established companies, helping them bring their digital
                  visions to life.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design
                  trends, contributing to open-source projects, or sharing
                  knowledge through tech blogs and mentorship.
                </p>
              </div>

              {/* Skills */}
              <div
                className="space-y-4"
                role="list"
                aria-labelledby="skills-heading"
              >
                <h3
                  className="text-white font-semibold mb-6"
                  id="skills-heading"
                >
                  Core Skills
                </h3>
                {skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    role="listitem"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 bg-gray-800 rounded-full overflow-hidden"
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full bg-linear-to-r from-violet-600 to-cyan-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
