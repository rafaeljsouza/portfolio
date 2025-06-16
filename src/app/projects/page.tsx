import { ProjectCard } from '@/components/ProjectCard'
import { getTranslations } from 'next-intl/server'
import { getUserLocale, Locale } from '@/services/locale'
import { projects } from '@/lib/data'

export default async function ProjectsPage() {
  const t = await getTranslations()
  const locale: Locale = await getUserLocale()

  return (
    <main className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-10">
        {t('projects.title')}
      </h1>

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
