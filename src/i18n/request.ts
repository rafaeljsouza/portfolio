import pt from '../../messages/pt.json'
import en from '../../messages/en.json'
import { getRequestConfig } from 'next-intl/server'
import { Locale } from '@/services/locale'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale: Locale = (await requestLocale) as Locale
  if (!['pt', 'en'].includes(locale)) locale = 'pt'
  const messages = locale === 'pt' ? pt : en
  return { locale, messages }
})