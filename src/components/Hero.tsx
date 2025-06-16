'use client'

// Landing section with greeting and call to action.

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import profilePic from '../../public/images/profile.jpg' // adicione sua foto em public/images

export function Hero() {
  const t = useTranslations('hero')

  return (
<section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:grid md:grid-cols-[1fr_auto] items-center gap-10">
  <div className="text-center md:text-left space-y-6">
    <h1 className="text-4xl md:text-5xl font-bold">
      {t('greeting')}
    </h1>
    <p className="text-lg text-zinc-300">{t('subtitle')}</p>
    <a
      href={t('ctaLink')}
      className="inline-block mt-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
    >
      {t('ctaText')}
    </a>
  </div>

  <div className="w-40 h-40 md:w-52 md:h-52 relative mt-10 md:mt-0">
    <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
      <Image
        src={profilePic}
        alt="Rafael"
        fill
        className="object-cover"
        priority
      />
    </div>
  </div>
</section>


  )
}
