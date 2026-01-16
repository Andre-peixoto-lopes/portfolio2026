import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Copy, Check, Globe, Code2 } from 'lucide-react'
import { useLanguage, Language } from '../contexts/LanguageContext'

type LocalizedText = Record<Language, string>

interface WebProject {
  id: string
  title: LocalizedText
  description: LocalizedText
  image: string
  url: string
  github: string
  tags: string[]
}

interface PythonScript {
  id: string
  title: LocalizedText
  description: LocalizedText
  code: string
  tags: string[]
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState<'web' | 'python'>('web')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const { t, language } = useLanguage()

  const webProjects: WebProject[] = [
    {
      id: 'portfolio',
      title: {
        pt: 'Portfólio Pessoal',
        en: 'Personal Portfolio',
        es: 'Portafolio Personal',
      },
      description: {
        pt: 'Este portfólio desenvolvido com React, TypeScript, Tailwind CSS e Framer Motion. Design mobile-first com suporte a múltiplos idiomas e temas.',
        en: 'This portfolio developed with React, TypeScript, Tailwind CSS and Framer Motion. Mobile-first design with multi-language and theme support.',
        es: 'Este portafolio desarrollado con React, TypeScript, Tailwind CSS y Framer Motion. Diseño mobile-first con soporte multi-idioma y temas.',
      },
      image: '💼',
      url: '#',
      tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      github: '#',
    },
    {
      id: 'landing1',
      title: {
        pt: 'Landing Page Corporativa',
        en: 'Corporate Landing Page',
        es: 'Landing Page Corporativa',
      },
      description: {
        pt: 'Landing page moderna para empresa de tecnologia com foco em conversão e performance.',
        en: 'Modern landing page for tech company focused on conversion and performance.',
        es: 'Landing page moderna para empresa de tecnología con foco en conversión y rendimiento.',
      },
      image: '🏢',
      url: '#',
      tags: ['React', 'Next.js', 'Tailwind'],
      github: '#',
    },
    {
      id: 'ecommerce',
      title: {
        pt: 'E-commerce Dashboard',
        en: 'E-commerce Dashboard',
        es: 'Dashboard E-commerce',
      },
      description: {
        pt: 'Dashboard administrativo para gerenciamento de e-commerce com gráficos e relatórios.',
        en: 'Administrative dashboard for e-commerce management with charts and reports.',
        es: 'Dashboard administrativo para gestión de e-commerce con gráficos e informes.',
      },
      image: '📊',
      url: '#',
      tags: ['React', 'TypeScript', 'Chart.js'],
      github: '#',
    },
  ]

  const pythonScripts: PythonScript[] = [
    {
      id: 'ftp-ingestion',
      title: {
        pt: 'Ingestão Automática FTP',
        en: 'Automatic FTP Ingestion',
        es: 'Ingestión Automática FTP',
      },
      description: {
        pt: 'Script para ingestão automática do último arquivo inserido em um servidor FTP.',
        en: 'Script for automatic ingestion of the last file inserted in an FTP server.',
        es: 'Script para ingestión automática del último archivo insertado en un servidor FTP.',
      },
      code: `from ftplib import FTP
from datetime import datetime

def get_latest_file(ftp_host, ftp_user, ftp_pass, remote_path):
    """Obtém o arquivo mais recente de um diretório FTP."""
    
    with FTP(ftp_host) as ftp:
        ftp.login(ftp_user, ftp_pass)
        ftp.cwd(remote_path)
        
        files = []
        ftp.dir(lambda x: files.append(x))
        
        # Parse e ordena por data
        parsed_files = []
        for f in files:
            parts = f.split()
            if len(parts) >= 9:
                filename = " ".join(parts[8:])
                parsed_files.append({
                    "name": filename,
                    "raw": f
                })
        
        if parsed_files:
            latest = parsed_files[-1]["name"]
            print(f"Último arquivo: {latest}")
            return latest
    
    return None`,
      tags: ['Python', 'FTP', 'Automation'],
    },
    {
      id: 'gzip-handler',
      title: {
        pt: 'Handler de Arquivos GZIP',
        en: 'GZIP File Handler',
        es: 'Manejador de Archivos GZIP',
      },
      description: {
        pt: 'Módulo para processamento de arquivos GZIP no Azure Blob Storage.',
        en: 'Module for processing GZIP files in Azure Blob Storage.',
        es: 'Módulo para procesamiento de archivos GZIP en Azure Blob Storage.',
      },
      code: `import gzip
import io
from azure.storage.blob import BlobServiceClient

def read_gzip_from_blob(connection_string, container, blob_name):
    """Lê e descompacta arquivo GZIP do Azure Blob."""
    
    blob_service = BlobServiceClient.from_connection_string(
        connection_string
    )
    blob_client = blob_service.get_blob_client(
        container=container,
        blob=blob_name
    )
    
    # Download do blob
    blob_data = blob_client.download_blob().readall()
    
    # Descompacta GZIP
    with gzip.GzipFile(fileobj=io.BytesIO(blob_data)) as f:
        content = f.read().decode('utf-8')
    
    return content

# Exemplo de uso
if __name__ == "__main__":
    data = read_gzip_from_blob(
        connection_string="your_connection_string",
        container="data-lake",
        blob_name="raw/file.csv.gz"
    )
    print(f"Linhas: {len(data.splitlines())}")`,
      tags: ['Python', 'Azure', 'GZIP'],
    },
    {
      id: 'dag-monitor',
      title: {
        pt: 'Monitoramento de DAGs',
        en: 'DAG Monitoring',
        es: 'Monitoreo de DAGs',
      },
      description: {
        pt: 'Sistema de monitoramento automático das DAGs do Airflow com alertas via Teams.',
        en: 'Automatic monitoring system for Airflow DAGs with Teams alerts.',
        es: 'Sistema de monitoreo automático de DAGs de Airflow con alertas vía Teams.',
      },
      code: `import requests
from datadog import initialize, api

# Configuração DataDog
initialize(api_key="YOUR_API_KEY", app_key="YOUR_APP_KEY")

def check_dag_status(dag_id: str) -> dict:
    """Verifica status de uma DAG no Airflow."""
    
    response = api.Monitor.get_all()
    
    for monitor in response:
        if dag_id in monitor.get("name", ""):
            return {
                "dag_id": dag_id,
                "status": monitor.get("overall_state"),
                "last_triggered": monitor.get("modified")
            }
    
    return {"dag_id": dag_id, "status": "not_found"}

def send_teams_alert(webhook_url: str, dag_info: dict):
    """Envia alerta para Microsoft Teams."""
    
    payload = {
        "@type": "MessageCard",
        "themeColor": "FF0000",
        "summary": f"DAG Alert: {dag_info['dag_id']}",
        "sections": [{
            "activityTitle": f"⚠️ DAG Failed: {dag_info['dag_id']}",
            "facts": [
                {"name": "Status", "value": dag_info["status"]},
                {"name": "Time", "value": dag_info["last_triggered"]}
            ]
        }]
    }
    
    requests.post(webhook_url, json=payload)
    print(f"Alerta enviado para {dag_info['dag_id']}")`,
      tags: ['Python', 'DataDog', 'Teams API', 'Airflow'],
    },
    {
      id: 'encryption',
      title: {
        pt: 'Criptografia de Dados',
        en: 'Data Encryption',
        es: 'Cifrado de Datos',
      },
      description: {
        pt: 'Módulo de criptografia para dados sensíveis na camada bronze do data lake.',
        en: 'Encryption module for sensitive data in the bronze layer of the data lake.',
        es: 'Módulo de cifrado para datos sensibles en la capa bronze del data lake.',
      },
      code: `from cryptography.fernet import Fernet
from typing import List
import pandas as pd

class DataEncryptor:
    """Classe para criptografia de colunas sensíveis."""
    
    def __init__(self, key: bytes = None):
        self.key = key or Fernet.generate_key()
        self.cipher = Fernet(self.key)
    
    def encrypt_column(self, df: pd.DataFrame, column: str) -> pd.DataFrame:
        """Criptografa uma coluna do DataFrame."""
        
        df = df.copy()
        df[column] = df[column].apply(
            lambda x: self.cipher.encrypt(
                str(x).encode()
            ).decode() if pd.notna(x) else x
        )
        return df
    
    def decrypt_column(self, df: pd.DataFrame, column: str) -> pd.DataFrame:
        """Descriptografa uma coluna do DataFrame."""
        
        df = df.copy()
        df[column] = df[column].apply(
            lambda x: self.cipher.decrypt(
                x.encode()
            ).decode() if pd.notna(x) else x
        )
        return df

# Exemplo de uso
if __name__ == "__main__":
    encryptor = DataEncryptor()
    
    df = pd.DataFrame({"cpf": ["123.456.789-00", "987.654.321-00"]})
    encrypted_df = encryptor.encrypt_column(df, "cpf")
    print(encrypted_df)`,
      tags: ['Python', 'Cryptography', 'Pandas', 'Security'],
    },
  ]

  const copyToClipboard = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative">
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
              {t.projects.title}
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-dark-900 dark:text-dark-50">
              {t.projects.subtitle.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-gradient">{t.projects.subtitle.split(' ').slice(-1)}</span>
            </h2>
            <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto">
              {t.projects.description}
            </p>
          </div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-2 mb-12"
          >
            <button
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === 'web'
                  ? 'bg-gradient-primary text-white shadow-lg shadow-primary-500/30'
                  : 'glass text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white'
              }`}
            >
              <Globe size={18} />
              {t.projects.web}
            </button>
            <button
              onClick={() => setActiveTab('python')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === 'python'
                  ? 'bg-gradient-primary text-white shadow-lg shadow-primary-500/30'
                  : 'glass text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white'
              }`}
            >
              <Code2 size={18} />
              {t.projects.python}
            </button>
          </motion.div>

          {/* Web Projects Grid */}
          {activeTab === 'web' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="group glass rounded-2xl overflow-hidden glass-hover"
                >
                  <div className="p-6">
                    <div className="text-5xl mb-4">{project.image}</div>
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                      {project.title[language]}
                    </h3>
                    <p className="text-dark-500 dark:text-dark-400 text-sm mb-4">
                      {project.description[language]}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-md bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-white text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      {t.projects.viewSite}
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-white text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      {t.projects.viewGithub}
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Python Scripts - Full Screen Horizontal Scroll */}
          {activeTab === 'python' && (
            <div className="relative -mx-4 md:-mx-6 lg:-mx-8">
              {/* Scroll hint gradient */}
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-dark-950 to-transparent pointer-events-none z-10" />
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-dark-950 to-transparent pointer-events-none z-10" />
              
              <div className="flex gap-8 overflow-x-auto px-4 md:px-6 lg:px-8 pb-6 snap-x snap-mandatory scrollbar-thin">
                {pythonScripts.map((script, index) => (
                  <motion.div
                    key={script.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="glass rounded-2xl overflow-hidden flex-shrink-0 w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[70vw] snap-center"
                  >
                    <div className="p-6 border-b border-dark-200 dark:border-dark-700">
                      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                        {script.title[language]}
                      </h3>
                      <p className="text-dark-500 dark:text-dark-400 text-sm mb-4">
                        {script.description[language]}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {script.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-md bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Code Block */}
                    <div className="relative">
                      <div className="flex items-center justify-between px-4 py-2 bg-dark-100 dark:bg-dark-900 border-b border-dark-200 dark:border-dark-700">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          </div>
                          <span className="text-dark-500 dark:text-dark-400 text-xs font-mono ml-2">
                            {script.id}.py
                          </span>
                        </div>
                        <motion.button
                          onClick={() => copyToClipboard(script.code, script.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-1 px-3 py-1 rounded-md bg-dark-200 dark:bg-dark-700 text-dark-600 dark:text-dark-300 text-xs font-medium hover:bg-dark-300 dark:hover:bg-dark-600 transition-colors"
                        >
                          {copiedId === script.id ? (
                            <>
                              <Check size={14} className="text-green-500" />
                              {t.projects.copied}
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              {t.projects.copyCode}
                            </>
                          )}
                        </motion.button>
                      </div>
                      <pre className="p-4 md:p-6 bg-dark-50 dark:bg-dark-950 overflow-x-auto overflow-y-auto max-h-[60vh]">
                        <code className="text-sm md:text-base font-mono text-dark-800 dark:text-dark-200 leading-relaxed whitespace-pre">
                          {script.code}
                        </code>
                      </pre>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Scroll indicator with swipe hint */}
              <div className="flex flex-col items-center gap-2 mt-6">
                <p className="text-dark-400 text-xs">← Arraste para ver mais →</p>
                <div className="flex gap-2">
                  {pythonScripts.map((script) => (
                    <div
                      key={script.id}
                      className="w-2 h-2 rounded-full bg-dark-300 dark:bg-dark-600"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
