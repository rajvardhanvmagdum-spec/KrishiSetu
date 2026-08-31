import React, { createContext, useContext, useState, useEffect } from 'react';
import hi from '../locales/hi.json';
import en from '../locales/en.json';
import mr from '../locales/mr.json';
import gu from '../locales/gu.json';
import te from '../locales/te.json';

const translations = { hi, en, mr, gu, te };

export const LANGUAGES = [
  { code: 'hi', label: 'हिंदी', nativeName: 'हिंदी', flag: '🇮🇳' },
  { code: 'en', label: 'English', nativeName: 'English', flag: '🌐' },
  { code: 'mr', label: 'मराठी', nativeName: 'मराठी', flag: '🇮🇳' },
  { code: 'gu', label: 'ગુજરાતી', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'te', label: 'తెలుగు', nativeName: 'తెలుగు', flag: '🇮🇳' },
];

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('krishi_lang') || 'hi';
  });

  useEffect(() => {
    localStorage.setItem('krishi_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (langCode) => {
    if (translations[langCode]) {
      setLanguage(langCode);
    }
  };

  /**
   * Translate key with fallback and parameter interpolation
   * e.g., t('home.heroTitle') or t('auth.otpSubtitle', { phone: '9876543210' })
   */
  const t = (key, params = {}) => {
    const keys = key.split('.');
    let current = translations[language] || translations['hi'];

    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        // Fallback to Hindi or key itself
        let fallback = translations['hi'];
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            return key;
          }
        }
        current = fallback;
        break;
      }
    }

    if (typeof current === 'string') {
      let result = current;
      Object.keys(params).forEach((paramKey) => {
        result = result.replace(new RegExp(`{{${paramKey}}}`, 'g'), params[paramKey]);
      });
      return result;
    }

    return current || key;
  };

  const currentLanguageInfo = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <I18nContext.Provider value={{ language, changeLanguage, t, languages: LANGUAGES, currentLanguageInfo }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
