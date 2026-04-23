import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'ossaiwisdom48@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Lagos Nigeria' },
    { icon: Phone, label: 'Phone', value: '+234 806 748 0053' },
  ]

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-32 bg-[#0a0a0a] relative"
    >
      {/* Background linear */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-150 h-150 bg-violet-600/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
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
            Get In Touch
          </p>
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Let's Work
            <span className="bg-linear-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              {' '}
              Together
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Drop me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {contactInfo.map(({ icon: Icon, label, value }, idx) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="p-4 bg-gray-900 rounded-xl border border-gray-800 group-hover:border-violet-500/50 transition-all duration-300">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{label}</p>
                  <p className="text-white font-medium">{value}</p>
                </div>
              </motion.div>
            ))}

            {/* Decorative element */}
            <div className="pt-8">
              <p className="text-gray-500 text-sm mb-4">
                Currently available for
              </p>
              <div className="flex flex-wrap gap-2">
                {['Freelance', 'Full-time', 'Contract'].map((type) => (
                  <span
                    key={type}
                    className="px-4 py-2 bg-gray-900 text-gray-300 text-sm rounded-full border border-gray-800"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-label="Contact Wisdom Ossai"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-gray-400 text-sm mb-2 block"
                  >
                    Your Name
                  </label>
                  <Input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    required
                    aria-required="true"
                    className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-600 focus:border-violet-500 h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-gray-400 text-sm mb-2 block"
                  >
                    Your Email
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    required
                    aria-required="true"
                    className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-600 focus:border-violet-500 h-12"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="text-gray-400 text-sm mb-2 block"
                >
                  Your Message
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  required
                  aria-required="true"
                  rows={6}
                  className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-600 focus:border-violet-500 resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-linear-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
