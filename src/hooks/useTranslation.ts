import { useLocale } from '../lib/i18n'
import en from '../locales/en.json'
import ru from '../locales/ru.json'

type TranslationKey = string
type TranslationValue = string | { [key: string]: TranslationValue } | TranslationValue[]

const translations = {
  en,
  ru,
}

export function useTranslation() {
  const locale = useLocale()

  const t = (key: TranslationKey): string => {
    try {
      const keys = key.split('.')
      let value: TranslationValue = translations[locale]

      for (const k of keys) {
        if (Array.isArray(value)) {
          const index = parseInt(k, 10)
          if (!isNaN(index) && index >= 0 && index < value.length) {
            value = value[index]
          } else {
            console.warn(`Invalid array index: ${k}`)
            return key
          }
        } else if (typeof value === 'object' && value !== null && k in value) {
          value = value[k]
        } else {
          console.warn(`Translation key not found: ${key}`)
          return key
        }
      }

      if (typeof value === 'string') {
        return value
      }

      console.warn(`Invalid translation value for key: ${key}`)
      return key
    } catch (error) {
      console.error(`Translation error for key ${key}:`, error)
      return key
    }
  }

  return { t, locale }
}
