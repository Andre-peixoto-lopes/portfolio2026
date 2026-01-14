import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Calendar } from 'lucide-react'
import { useLanguage, Language } from '../contexts/LanguageContext'

type LocalizedText = Record<Language, string>

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { t, language } = useLanguage()

  interface ExperienceItem {
    company: string
    role: LocalizedText
    period: string
    type: string
    description: LocalizedText
    technologies: string[]
    color: string
  }

  const experiences: ExperienceItem[] = [
    {
      company: 'AbInbev',
      role: {
        pt: 'Desenvolvedor Back-End',
        en: 'Back-End Developer',
        es: 'Desarrollador Back-End',
      },
      period: t.experience.current,
      type: t.experience.fullTime,
      description: {
        pt: 'Desenvolvimento e manutenção da plataforma global de ingestão e transformação de dados utilizando Python. Responsável por criar e otimizar pipelines de dados no Apache Airflow, gerenciar ambientes Azure e Databricks, implementar monitoramento com DataDog e criar integrações via APIs REST. Trabalho em equipe global seguindo metodologias ágeis.',
        en: 'Development and maintenance of the global data ingestion and transformation platform using Python. Responsible for creating and optimizing data pipelines in Apache Airflow, managing Azure and Databricks environments, implementing monitoring with DataDog and creating integrations via REST APIs. Working in a global team following agile methodologies.',
        es: 'Desarrollo y mantenimiento de la plataforma global de ingestión y transformación de datos utilizando Python. Responsable de crear y optimizar pipelines de datos en Apache Airflow, gestionar entornos Azure y Databricks, implementar monitoreo con DataDog y crear integraciones vía APIs REST. Trabajo en equipo global siguiendo metodologías ágiles.',
      },
      technologies: ['Python', 'Apache Airflow', 'Azure', 'Databricks', 'DataDog', 'APIs REST'],
      color: 'from-primary-500 to-primary-600',
    },
    {
      company: 'Faculdade de Medicina de Jundiaí',
      role: {
        pt: 'Especialista de TI',
        en: 'IT Specialist',
        es: 'Especialista de TI',
      },
      period: t.experience.previous,
      type: t.experience.fullTime,
      description: {
        pt: 'Gestão completa da infraestrutura de TI da instituição, incluindo administração de redes, servidores e sistemas. Suporte técnico especializado para corpo docente e administrativo. Manutenção preventiva e corretiva de equipamentos e sistemas internos.',
        en: 'Complete management of the institution\'s IT infrastructure, including network, server and system administration. Specialized technical support for faculty and administrative staff. Preventive and corrective maintenance of equipment and internal systems.',
        es: 'Gestión completa de la infraestructura de TI de la institución, incluyendo administración de redes, servidores y sistemas. Soporte técnico especializado para docentes y personal administrativo. Mantenimiento preventivo y correctivo de equipos y sistemas internos.',
      },
      technologies: ['Redes', 'Infraestrutura', 'Windows Server', 'Suporte Técnico'],
      color: 'from-dark-600 to-dark-700',
    },
    {
      company: 'Freelancer',
      role: {
        pt: 'Desenvolvedor Web',
        en: 'Web Developer',
        es: 'Desarrollador Web',
      },
      period: t.experience.freelance,
      type: t.experience.freelance,
      description: {
        pt: 'Desenvolvimento de projetos web personalizados para diversos clientes. Criação de websites responsivos, landing pages otimizadas para conversão e sistemas web customizados. Foco em performance, SEO e experiência do usuário.',
        en: 'Development of custom web projects for various clients. Creation of responsive websites, conversion-optimized landing pages and custom web systems. Focus on performance, SEO and user experience.',
        es: 'Desarrollo de proyectos web personalizados para diversos clientes. Creación de sitios web responsivos, landing pages optimizadas para conversión y sistemas web personalizados. Enfoque en rendimiento, SEO y experiencia del usuario.',
      },
      technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      color: 'from-dark-500 to-dark-600',
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full glass text-primary-500 text-sm font-medium mb-4"
            >
              {t.experience.title}
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-dark-900 dark:text-dark-50">
              {t.experience.subtitle.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-gradient">{t.experience.subtitle.split(' ').slice(-1)}</span>
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="glass rounded-2xl p-6 md:p-8 glass-hover"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} shrink-0`}>
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                            {exp.role[language]}
                          </h3>
                          <p className="text-primary-500 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-dark-500 dark:text-dark-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                          <span className="px-2 py-0.5 rounded-full bg-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
                    {exp.description[language]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
