import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { findBestLanguageTag } from 'react-native-localize';
import en from './locales/en.json';
import ar from './locales/ar.json';
import { LanguageDetectorAsyncModule } from 'i18next';

// Define the resource structure for TypeScript
const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

// Define the language detector with proper typing
const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (callback: (lang: string) => void) => {
    const bestLanguage = findBestLanguageTag(['ar', 'ar']);
    callback(bestLanguage?.languageTag || 'ar'); // Default to 'en' if no match
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

// Initialize i18n with the language detector and resources
i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',  // Default language
    resources,
    react: {
      useSuspense: false,  // Disable suspense for react-i18next
    },
  });

export default i18n;
