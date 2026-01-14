import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Sparkles } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  const highlights = [
    {
      icon: Database,
      title: t.about.highlights.dataEngineering.title,
      description: t.about.highlights.dataEngineering.description,
    },
    {
      icon: Code2,
      title: t.about.highlights.python.title,
      description: t.about.highlights.python.description,
    },
    {
      icon: Cloud,
      title: t.about.highlights.cloud.title,
      description: t.about.highlights.cloud.description,
    },
    {
      icon: Sparkles,
      title: t.about.highlights.automation.title,
      description: t.about.highlights.automation.description,
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32">
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
              {t.about.subtitle}
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-dark-50">
              {t.about.title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                {t.about.paragraph1}
              </p>
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                {t.about.paragraph2}
              </p>
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
                {t.about.paragraph3}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl glass p-4 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src="/profile.jpg" 
                  alt="André - Desenvolvedor Back-End @ AbInbev"
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4 z-20">
                  <div className="text-4xl font-bold text-gradient mb-1">3+</div>
                  <p className="text-dark-500 dark:text-dark-400 text-sm">{t.about.yearsExperience}</p>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-50" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-primary rounded-full blur-2xl opacity-30" />
              </div>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass glass-hover rounded-xl p-6 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-dark-500 dark:text-dark-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
