import { translations, type TranslationKey } from '@shared/translations';
import { LANGUAGES, DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY } from '@shared/const';

export type Language = keyof typeof translations;

export function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE as Language;
  
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored === LANGUAGES.EN || stored === LANGUAGES.ES) {
    return stored as Language;
  }
  return DEFAULT_LANGUAGE as Language;
}

export function setStoredLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  }
}

export function t(key: TranslationKey, language: Language): string {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

export function useTranslation(language: Language) {
  return {
    t: (key: TranslationKey) => t(key, language),
    language,
  };
}
