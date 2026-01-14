import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon, Languages } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage, Language } from '../contexts/LanguageContext'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ]

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold text-gradient"
        >
          &lt;André /&gt;
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                className="text-dark-600 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="p-2 rounded-lg glass text-dark-600 dark:text-dark-300 hover:text-primary-500 transition-colors"
            >
              <Languages size={20} />
            </motion.button>
            {showLangMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 w-40 glass rounded-xl overflow-hidden shadow-xl"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setShowLangMenu(false)
                    }}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                      language === lang.code
                        ? 'bg-primary-500/20 text-primary-500'
                        : 'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg glass text-dark-600 dark:text-dark-300 hover:text-primary-500 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          {/* Contact Button (Desktop) */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-4 py-2 rounded-lg bg-gradient-primary text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            {t.nav.contact}
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-dark-600 dark:text-dark-300 hover:text-primary-500 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        className="lg:hidden overflow-hidden glass"
      >
        <ul className="container mx-auto px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-dark-600 dark:text-dark-300 hover:text-primary-500 transition-colors duration-300 text-base font-medium py-2"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  )
}

export default Header
