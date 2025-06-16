'use server'

// Stores the selected locale in a cookie so it persists between requests.

import { cookies } from 'next/headers'
import { Locale } from '@/services/locale'

export async function setUserLocale(locale: Locale) {
  const cookieStore = await cookies()
  cookieStore.set('NEXT_LOCALE', locale)
}
