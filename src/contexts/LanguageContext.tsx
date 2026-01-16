import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type Language = 'pt' | 'en' | 'es'

interface Translations {
  nav: {
    home: string
    about: string
    experience: string
    skills: string
    projects: string
    contact: string
  }
  hero: {
    welcome: string
    greeting: string
    role: string
    description: string
    viewProjects: string
    getInTouch: string
  }
  about: {
    title: string
    subtitle: string
    paragraph1: string
    paragraph2: string
    paragraph3: string
    yearsExperience: string
    highlights: {
      dataEngineering: { title: string; description: string }
      python: { title: string; description: string }
      cloud: { title: string; description: string }
      automation: { title: string; description: string }
    }
  }
  experience: {
    title: string
    subtitle: string
    current: string
    previous: string
    freelance: string
    fullTime: string
  }
  skills: {
    title: string
    subtitle: string
    description: string
    all: string
    backend: string
    data: string
    cloud: string
    frontend: string
    tools: string
  }
  projects: {
    title: string
    subtitle: string
    description: string
    web: string
    python: string
    copyCode: string
    copied: string
    viewSite: string
    viewGithub: string
    viewCode: string
    corporate: string
  }
  contact: {
    title: string
    subtitle: string
    description: string
    letsConnect: string
    location: string
    form: {
      name: string
      namePlaceholder: string
      email: string
      emailPlaceholder: string
      message: string
      messagePlaceholder: string
      send: string
      sending: string
      sent: string
    }
  }
  footer: {
    madeWith: string
    by: string
    rights: string
  }
}

const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      experience: 'Experiência',
      skills: 'Skills',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      welcome: '👋 Bem-vindo ao meu portfólio',
      greeting: 'Olá, sou',
      role: 'Desenvolvedor Back-End',
      description: 'Desenvolvedor full stack, atualmente atuando com a stack Python, Data Engineering and AI. Contribuindo para a plataforma global de ingestão e transformação de dados da AB InBev.',
      viewProjects: 'Ver Projetos',
      getInTouch: 'Entre em Contato',
    },
    about: {
      title: 'Sobre Mim',
      subtitle: 'Conheça um pouco mais sobre mim',
      paragraph1: 'Sou estudante de Ciência da Computação na Universidade Padre José de Anchieta em Jundiaí, atualmente no 7º semestre. Minha jornada na tecnologia começou com curiosidade e se transformou em paixão.',
      paragraph2: 'Atualmente trabalho na AbInbev como desenvolvedor back-end, onde utilizo Python para desenvolver e manter a plataforma global de ingestão e transformação de dados da empresa.',
      paragraph3: 'Minha experiência inclui desenvolvimento em Python e ferramentas adjacentes e experiência com Apache Airflow, Azure, Databricks e DataDog, além de conhecimento em IAs generativas e automação de processos.',
      yearsExperience: 'Anos de Experiência',
      highlights: {
        dataEngineering: { 
          title: 'Data Engineering', 
          description: 'Pipelines de dados robustos e escaláveis com Airflow e Databricks' 
        },
        python: { 
          title: 'Python', 
          description: 'Desenvolvimento de soluções backend e automações complexas' 
        },
        cloud: { 
          title: 'Cloud Computing', 
          description: 'Arquiteturas em Azure com foco em performance e custos' 
        },
        automation: { 
          title: 'Automação', 
          description: 'Processos automatizados com IAs generativas e scripts' 
        },
      },
    },
    experience: {
      title: 'Experiência Profissional',
      subtitle: 'Minha Trajetória',
      current: 'Atual',
      previous: 'Janeiro 2024 - Janeiro 2025',
      freelance: 'Freelance',
      fullTime: 'Tempo Integral',
      internship: 'Estágio',
    },
    skills: {
      title: 'Habilidades Técnicas',
      subtitle: 'Minhas Skills',
      description: 'Tecnologias e ferramentas que utilizo para criar soluções robustas e escaláveis',
      all: 'Todas',
      backend: 'Back-End',
      data: 'Data Engineering',
      cloud: 'Cloud & DevOps',
      frontend: 'Front-End',
      tools: 'Ferramentas',
    },
    projects: {
      title: 'Portfólio',
      subtitle: 'Meus Projetos',
      description: 'Uma seleção dos projetos mais relevantes que desenvolvi',
      web: 'Projetos Web',
      python: 'Scripts Python',
      copyCode: 'Copiar código',
      copied: 'Copiado!',
      viewGithub: 'GitHub',
      viewSite: 'Ver Site',
      viewCode: 'Ver Código',
      corporate: 'Projeto Corporativo',
    },
    contact: {
      title: 'Contato',
      subtitle: 'Vamos Conversar',
      description: 'Tem um projeto em mente ou quer trocar uma ideia? Entre em contato!',
      letsConnect: 'Vamos nos conectar',
      location: 'Localização',
      form: {
        name: 'Nome',
        namePlaceholder: 'Seu nome',
        email: 'Email',
        emailPlaceholder: 'seu@email.com',
        message: 'Mensagem',
        messagePlaceholder: 'Como posso ajudar?',
        send: 'Enviar Mensagem',
        sending: 'Enviando...',
        sent: 'Mensagem Enviada!',
      },
    },
    footer: {
      madeWith: '',
      by: '<André/>',
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      welcome: '👋 Welcome to my portfolio',
      greeting: "Hi, I'm",
      role: 'Back-End Developer',
      description: 'Full stack developer, currently working with Python stack, Data Engineering and AI. Contributing to AB InBev\'s global data ingestion and transformation platform.',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
    },
    about: {
      title: 'About Me',
      subtitle: 'Get to know me better',
      paragraph1: "I'm a Computer Science student at Padre José de Anchieta University in Jundiaí, currently in my 7th semester. My journey in technology started with curiosity and became a passion.",
      paragraph2: 'I currently work at AbInbev as a back-end developer, where I use Python to develop and maintain the global data ingestion and transformation platform.',
      paragraph3: 'My experience includes Python development and adjacent tools, with experience in Apache Airflow, Azure, Databricks and DataDog, plus knowledge in generative AIs and process automation.',
      yearsExperience: 'Years of Experience',
      highlights: {
        dataEngineering: { 
          title: 'Data Engineering', 
          description: 'Robust and scalable data pipelines with Airflow and Databricks' 
        },
        python: { 
          title: 'Python', 
          description: 'Backend solutions development and complex automations' 
        },
        cloud: { 
          title: 'Cloud Computing', 
          description: 'Azure architectures focused on performance and costs' 
        },
        automation: { 
          title: 'Automation', 
          description: 'Automated processes with generative AIs and scripts' 
        },
      },
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'My Journey',
      current: 'Current',
      previous: 'January 2024 - January 2025',
      freelance: 'Freelance',
      fullTime: 'Full Time',
      internship: 'Internship',
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'My Skills',
      description: 'Technologies and tools I use to create robust and scalable solutions',
      all: 'All',
      backend: 'Back-End',
      data: 'Data Engineering',
      cloud: 'Cloud & DevOps',
      frontend: 'Front-End',
      tools: 'Tools',
    },
    projects: {
      title: 'Portfolio',
      subtitle: 'My Projects',
      description: 'A selection of the most relevant projects I developed',
      web: 'Web Projects',
      python: 'Python Scripts',
      copyCode: 'Copy code',
      copied: 'Copied!',
      viewSite: 'View Site',
      viewGithub: 'GitHub',
      viewCode: 'View Code',
      corporate: 'Corporate Project',
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's Talk",
      description: 'Have a project in mind or want to chat? Get in touch!',
      letsConnect: "Let's connect",
      location: 'Location',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'Message',
        messagePlaceholder: 'How can I help?',
        send: 'Send Message',
        sending: 'Sending...',
        sent: 'Message Sent!',
      },
    },
    footer: {
      madeWith: '',
      by: '<André/>',
      rights: 'All rights reserved.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre',
      experience: 'Experiencia',
      skills: 'Skills',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      welcome: '👋 Bienvenido a mi portafolio',
      greeting: 'Hola, soy',
      role: 'Desarrollador Back-End',
      description: 'Desarrollador full stack, actualmente trabajando con stack Python, Data Engineering y AI. Contribuyendo a la plataforma global de ingestión y transformación de datos de AB InBev.',
      viewProjects: 'Ver Proyectos',
      getInTouch: 'Contáctame',
    },
    about: {
      title: 'Sobre Mí',
      subtitle: 'Conóceme un poco más',
      paragraph1: 'Soy estudiante de Ciencias de la Computación en la Universidad Padre José de Anchieta en Jundiaí, actualmente en el 7º semestre. Mi viaje en tecnología comenzó con curiosidad y se convirtió en pasión.',
      paragraph2: 'Actualmente trabajo en AbInbev como desarrollador back-end, donde utilizo Python para desarrollar y mantener la plataforma global de ingestión y transformación de datos.',
      paragraph3: 'Mi experiencia incluye desarrollo en Python y herramientas adyacentes, con experiencia en Apache Airflow, Azure, Databricks y DataDog, además de conocimiento en IAs generativas y automatización de procesos.',
      yearsExperience: 'Años de Experiencia',
      highlights: {
        dataEngineering: { 
          title: 'Data Engineering', 
          description: 'Pipelines de datos robustos y escalables con Airflow y Databricks' 
        },
        python: { 
          title: 'Python', 
          description: 'Desarrollo de soluciones backend y automatizaciones complejas' 
        },
        cloud: { 
          title: 'Cloud Computing', 
          description: 'Arquitecturas en Azure enfocadas en rendimiento y costos' 
        },
        automation: { 
          title: 'Automatización', 
          description: 'Procesos automatizados con IAs generativas y scripts' 
        },
      },
    },
    experience: {
      title: 'Experiencia Profesional',
      subtitle: 'Mi Trayectoria',
      current: 'Actual',
      previous: 'Enero 2024 - Enero 2025',
      freelance: 'Freelance',
      fullTime: 'Tiempo Completo',
      internship: 'Prácticas',
    },
    skills: {
      title: 'Habilidades Técnicas',
      subtitle: 'Mis Skills',
      description: 'Tecnologías y herramientas que utilizo para crear soluciones robustas y escalables',
      all: 'Todas',
      backend: 'Back-End',
      data: 'Data Engineering',
      cloud: 'Cloud & DevOps',
      frontend: 'Front-End',
      tools: 'Herramientas',
    },
    projects: {
      title: 'Portafolio',
      subtitle: 'Mis Proyectos',
      description: 'Una selección de los proyectos más relevantes que desarrollé',
      web: 'Proyectos Web',
      python: 'Scripts Python',
      copyCode: 'Copiar código',
      copied: '¡Copiado!',
      viewSite: 'Ver Sitio',
      viewGithub: 'GitHub',
      viewCode: 'Ver Código',
      corporate: 'Proyecto Corporativo',
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Hablemos',
      description: '¿Tienes un proyecto en mente o quieres charlar? ¡Contáctame!',
      letsConnect: 'Conectémonos',
      location: 'Ubicación',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        email: 'Email',
        emailPlaceholder: 'tu@email.com',
        message: 'Mensaje',
        messagePlaceholder: '¿Cómo puedo ayudar?',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
        sent: '¡Mensaje Enviado!',
      },
    },
    footer: {
      madeWith: '',
      by: '<André/>',
      rights: 'Todos los derechos reservados.',
    },
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language
      if (saved && ['pt', 'en', 'es'].includes(saved)) return saved
      const browserLang = navigator.language.slice(0, 2)
      if (browserLang === 'pt') return 'pt'
      if (browserLang === 'es') return 'es'
      return 'en'
    }
    return 'pt'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
