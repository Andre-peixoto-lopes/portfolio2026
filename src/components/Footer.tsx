import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-dark-200 dark:border-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-dark-500 dark:text-dark-400">
            <span className="text-primary-500">&lt;</span>
            <span className="font-semibold text-primary-500">André</span>
            <span className="text-primary-500">/&gt;</span>
          </div>
          
          <div className="text-dark-500 dark:text-dark-400 text-sm">
            © {currentYear} André. {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
