import { useLanguage } from '@/contexts/LanguageContext';
import { t, type Language } from '@/lib/i18n';
import type { TranslationKey } from '@shared/translations';

export function useTranslate() {
  const { language } = useLanguage();

  return {
    t: (key: TranslationKey) => t(key, language as Language),
    language,
  };
}
