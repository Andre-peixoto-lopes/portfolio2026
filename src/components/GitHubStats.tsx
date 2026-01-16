import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Github, Eye, Users, BookOpen } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

interface GitHubUser {
  public_repos: number
  followers: number
  following: number
  created_at: string
}

const GitHubStats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { language } = useLanguage()
  const [visitors, setVisitors] = useState(0)
  const [githubData, setGithubData] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState(true)

  const GITHUB_USERNAME = 'Andre-peixoto-lopes'

  // Buscar dados reais do GitHub
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        if (response.ok) {
          const data = await response.json()
          setGithubData(data)
        }
      } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  // Contador de visitantes REAL usando API externa
  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // Usando CountAPI - serviço gratuito de contador
        const response = await fetch('https://api.countapi.xyz/hit/andrepeixoto-portfolio/visits')
        const data = await response.json()
        setVisitors(data.value)
      } catch (error) {
        console.error('Erro ao buscar contador:', error)
        // Fallback para localStorage se a API falhar
        const storedCount = localStorage.getItem('portfolio_visitors')
        const hasVisited = sessionStorage.getItem('portfolio_visited')
        let count = storedCount ? parseInt(storedCount) : 1
        if (!hasVisited) {
          count += 1
          localStorage.setItem('portfolio_visitors', count.toString())
          sessionStorage.setItem('portfolio_visited', 'true')
        }
        setVisitors(count)
      }
    }
    fetchVisitorCount()
  }, [])

  const translations = {
    pt: {
      title: 'Estatísticas GitHub',
      subtitle: 'Minha atividade no GitHub em 2025',
      repos: 'Repositórios Públicos',
      followers: 'Seguidores',
      visitors: 'Visitantes do Portfólio',
      contributions: 'Contribuições',
      viewProfile: 'Ver Perfil Completo',
    },
    en: {
      title: 'GitHub Stats',
      subtitle: 'My GitHub Activity in 2025',
      repos: 'Public Repositories',
      followers: 'Followers',
      visitors: 'Portfolio Visitors',
      contributions: 'Contributions',
      viewProfile: 'View Full Profile',
    },
    es: {
      title: 'Estadísticas GitHub',
      subtitle: 'Mi actividad en GitHub en 2025',
      repos: 'Repositorios Públicos',
      followers: 'Seguidores',
      visitors: 'Visitantes del Portafolio',
      contributions: 'Contribuciones',
      viewProfile: 'Ver Perfil Completo',
    },
  }

  const t = translations[language]

  const stats = [
    {
      icon: BookOpen,
      value: loading ? '...' : githubData?.public_repos?.toString() || '0',
      label: t.repos,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      value: loading ? '...' : githubData?.followers?.toString() || '0',
      label: t.followers,
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Eye,
      value: visitors.toString(),
      label: t.visitors,
      color: 'from-blue-500 to-cyan-500',
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full glass text-primary-500 text-sm font-medium mb-4"
            >
              {t.title}
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-dark-50">
              {t.subtitle}
            </h2>
          </div>

          {/* GitHub Contribution Graph - Usando imagem real do GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass rounded-2xl p-6 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Github className="text-dark-700 dark:text-dark-300" size={24} />
                <span className="font-semibold text-dark-900 dark:text-white">
                  {t.contributions}
                </span>
              </div>
              <motion.a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-gradient-primary text-white text-sm font-medium"
              >
                {t.viewProfile}
              </motion.a>
            </div>

            {/* GitHub Contribution Chart - Imagem real */}
            <div className="flex justify-center">
              <img 
                src={`https://ghchart.rshah.org/22c55e/${GITHUB_USERNAME}`}
                alt="GitHub Contributions"
                className="w-full max-w-4xl rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default GitHubStats
