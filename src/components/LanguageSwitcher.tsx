'use client'

import { usePathname, useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const switchTo = (locale: string) => {
    Cookies.set('NEXT_LOCALE', locale)
    router.refresh()
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchTo('pt')}
        className="text-sm hover:underline"
      >
        PT
      </button>
      <button
        onClick={() => switchTo('en')}
        className="text-sm hover:underline"
      >
        EN
      </button>
    </div>
  )
}
