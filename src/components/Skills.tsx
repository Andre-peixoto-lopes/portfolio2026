import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { 
  SiPython, 
  SiNodedotjs, 
  SiApacheairflow, 
  SiDatabricks, 
  SiApachespark,
  SiDatadog,
  SiGit,
  SiDocker,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiOpenai,
  SiPostgresql
} from 'react-icons/si'
import { FaRobot, FaCode, FaRocket} from 'react-icons/fa'
import { HiOutlineRefresh } from 'react-icons/hi'
import { BsGraphUp } from 'react-icons/bs'
import { VscAzure, VscVscode } from 'react-icons/vsc'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('all')
  const { t } = useLanguage()

  const categories = [
    { id: 'all', name: t.skills.all },
    { id: 'backend', name: t.skills.backend },
    { id: 'data', name: t.skills.data },
    { id: 'cloud', name: t.skills.cloud },
    { id: 'frontend', name: t.skills.frontend },
    { id: 'tools', name: t.skills.tools },
  ]

  const skills = [
    // Backend
    { name: 'Python', category: 'backend', icon: SiPython, color: '#3776AB' },
    { name: 'APIs REST', category: 'backend', icon: FaCode, color: '#10B981' },
    { name: 'SQL', category: 'backend', icon: SiPostgresql, color: '#336791' },
    { name: 'Node.js', category: 'backend', icon: SiNodedotjs, color: '#339933' },
    
    // Data Engineering
    { name: 'Apache Airflow', category: 'data', icon: SiApacheairflow, color: '#017CEE' },
    { name: 'Databricks', category: 'data', icon: SiDatabricks, color: '#FF3621' },
    { name: 'ETL/ELT', category: 'data', icon: HiOutlineRefresh, color: '#8B5CF6' },
    { name: 'Data Pipelines', category: 'data', icon: BsGraphUp, color: '#F59E0B' },
    { name: 'Spark', category: 'data', icon: SiApachespark, color: '#E25A1C' },
    
    // Cloud & DevOps
    { name: 'Azure', category: 'cloud', icon: VscAzure, color: '#0078D4' },
    { name: 'DataDog', category: 'cloud', icon: SiDatadog, color: '#632CA6' },
    { name: 'Git', category: 'cloud', icon: SiGit, color: '#F05032' },
    { name: 'Docker', category: 'cloud', icon: SiDocker, color: '#2496ED' },
    { name: 'CI/CD', category: 'cloud', icon: FaRocket, color: '#06B6D4' },
    
    // Frontend
    { name: 'React', category: 'frontend', icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', category: 'frontend', icon: SiTypescript, color: '#3178C6' },
    { name: 'HTML/CSS', category: 'frontend', icon: SiHtml5, color: '#E34F26' },
    { name: 'Tailwind CSS', category: 'frontend', icon: SiTailwindcss, color: '#06B6D4' },
    
    // Tools
    { name: 'IAs Generativas', category: 'tools', icon: FaRobot, color: '#10B981' },
    { name: 'Claude/Copilot', category: 'tools', icon: SiOpenai, color: '#412991' },
    { name: 'VS Code', category: 'tools', icon: VscVscode, color: '#007ACC' },
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full glass text-primary-500 text-sm font-medium mb-4"
            >
              {t.skills.title}
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-dark-900 dark:text-dark-50">
              {t.skills.subtitle.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-gradient">{t.skills.subtitle.split(' ').slice(-1)}</span>
            </h2>
            <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto">
              {t.skills.description}
            </p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-primary text-white shadow-lg shadow-primary-500/30'
                    : 'glass text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredSkills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 + index * 0.03, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-2xl p-6 text-center glass-hover cursor-default group"
                >
                  <div 
                    className="mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ color: skill.color }}
                  >
                    <IconComponent size={40} />
                  </div>
                  <h3 className="font-semibold text-dark-800 dark:text-white text-sm">
                    {skill.name}
                  </h3>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
