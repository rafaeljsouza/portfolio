'use client'

// Describes the "About me" section with translated texts.

import { useTranslations } from 'next-intl'

export function About() {
  const t = useTranslations('about')

  return (
    <section className="bg-zinc-950 text-white px-6 py-12 max-w-6xl mx-auto m-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">{t('title')}</h2>

        <p className="text-lg text-zinc-300 leading-relaxed text-center">
          {t('description')}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-zinc-200 max-w-2xl mx-auto list-disc list-inside">
          <li>{t('point1')}</li>
          <li>{t('point2')}</li>
          <li>{t('point3')}</li>
          <li>{t('point4')}</li>
        </ul>
      </div>
    </section>
  )
}
