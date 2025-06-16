import { cookies } from 'next/headers'

export type Locale = 'pt' | 'en'

export async function getUserLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  return (cookieStore.get('NEXT_LOCALE')?.value as Locale) || 'pt'
}
