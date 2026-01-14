import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-primary-500 text-sm font-medium">
              {t.hero.welcome}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-dark-900 dark:text-dark-50"
          >
            {t.hero.greeting}{' '}
            <span className="text-gradient">André</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-dark-500 dark:text-dark-400 mb-4 font-light"
          >
            {t.hero.role}{' '}
            <span className="text-primary-500 font-medium">@AbInbev</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-dark-500 dark:text-dark-400 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto px-4"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-gradient-primary text-white font-medium hover:opacity-90 transition-all hover:scale-105 transform shadow-lg shadow-primary-500/30"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg glass glass-hover text-dark-700 dark:text-dark-200 font-medium"
            >
              {t.hero.getInTouch}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com/Andre-peixoto-lopes', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/andr%C3%A9-peixoto-lopes', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:andrepeixotocontato@hotmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg glass glass-hover text-dark-500 dark:text-dark-400 hover:text-primary-500"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-dark-400 hover:text-primary-500 transition-colors"
        >
          <ChevronDown size={32} />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
