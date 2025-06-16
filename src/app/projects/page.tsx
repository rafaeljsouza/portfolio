import { ProjectCard } from '@/components/ProjectCard'
import { getTranslations } from 'next-intl/server'
import { getUserLocale, Locale } from '@/services/locale'

type Project = {
  title: Record<Locale, string>
  description: Record<Locale, string>
  image: string
  siteLink: string
  repoLink: string
}

const projects: Project[] = [
  {
    title: { pt: 'Treino Calistenia', en: 'Calisthenics Training' },
    description: {
      pt: 'Site/app para treinos de calistenia com planos e vídeos.',
      en: 'Site/app for calisthenics workouts with plans and videos.',
    },
    image: '/images/calisthenics.png',
    siteLink: 'https://treinodalena.netlify.app/',
    repoLink: 'https://github.com/rafaeljsouza/calisthenics-site',
  },
  {
    title: { pt: 'Calculadora 5/3/1', en: '5/3/1 Calculator' },
    description: {
      pt: 'Web app para calcular cargas do método 5/3/1 de força.',
      en: 'Web app to calculate lifts for the 5/3/1 strength program.',
    },
    image: '/images/calculadora-531.png',
    siteLink: 'https://calculadora531.netlify.app/',
    repoLink: 'https://github.com/rafaeljsouza/calculadora-531',
  },
]

export default async function ProjectsPage() {
  const t = await getTranslations()
  const locale: Locale = await getUserLocale()

  return (
    <main className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-10">{t('projects.title')}</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title[locale]}
            description={project.description[locale]}
            image={project.image}
            siteLink={project.siteLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </main>
  )
}
