import { cookies } from 'next/headers'

// Helpers to read the language preference stored in cookies.

export type Locale = 'pt' | 'en'

export async function getUserLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  return (cookieStore.get('NEXT_LOCALE')?.value as Locale) || 'pt'
}
