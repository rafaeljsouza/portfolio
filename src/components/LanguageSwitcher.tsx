'use client'

// Switches the interface language by updating the locale cookie.

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const router = useRouter()
  const locale = useLocale()

  const switchTo = (lang: string) => {
    Cookies.set('NEXT_LOCALE', lang)
    router.refresh()
  }

  return (
    <div className="flex items-center gap-2 text-sm text-white">
      <Globe size={18} className="text-zinc-300" />
      {['pt', 'en'].map((lang) => (
        <button
          key={lang}
          onClick={() => switchTo(lang)}
          className={`hover:text-blue-300 transition font-medium ${
            locale === lang ? 'text-blue-400 underline' : 'text-white'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
