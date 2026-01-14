import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Linkedin, Github, MessageCircle } from 'lucide-react'
import { useState, FormEvent } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const YOUR_EMAIL = 'andrepeixotocontato@hotmail.com'

const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    // Abre o cliente de email com os dados preenchidos
    const subject = encodeURIComponent(`Contato do Portfólio - ${formData.name}`)
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    )
    window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'andrepeixotocontato@hotmail.com',
      href: 'mailto:andrepeixotocontato@hotmail.com',
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: 'Jundiaí, Brasil',
      href: null,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/andré-peixoto-lopes',
      href: 'https://www.linkedin.com/in/andr%C3%A9-peixoto-lopes',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@Andre-peixoto-lopes',
      href: 'https://github.com/Andre-peixoto-lopes',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full glass text-primary-500 text-sm font-medium mb-4"
            >
              {t.contact.subtitle}
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-dark-50 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="text-primary-500" size={28} />
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-50">
                    {t.contact.letsConnect}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-lg glass flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                        <info.icon className="text-primary-500" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-dark-400">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-700 dark:text-dark-200 hover:text-primary-500 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-dark-700 dark:text-dark-200">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-dark-800/50 border border-dark-200 dark:border-dark-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-dark-900 dark:text-dark-100"
                      placeholder={t.contact.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-dark-800/50 border border-dark-200 dark:border-dark-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-dark-900 dark:text-dark-100"
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-dark-800/50 border border-dark-200 dark:border-dark-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none text-dark-900 dark:text-dark-100"
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-lg bg-gradient-primary text-white font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-500/30"
                >
                  {t.contact.form.send}
                  <Send size={18} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
