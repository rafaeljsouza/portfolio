'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import profilePic from '../../public/images/profile.jpg' // adicione sua foto em public/images

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 max-w-6xl mx-auto">
      <div className="text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          {t('greeting', { name: 'Rafael' })}
        </h1>
        <p className="text-lg text-zinc-300">{t('subtitle')}</p>
        <a
          href={t('ctaLink')}
          className="inline-block mt-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
        >
          {t('ctaText')}
        </a>
      </div>

      <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
        <Image
          src={profilePic}
          alt="Rafael"
          height={256}
          width={256}
          className="object-cover"
        />
      </div>
    </section>
  )
}