import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import AppShell from '../components/AppShell';
import { OnboardingLanguageList } from '../components/LanguageSelector';
import { ArrowRight } from 'lucide-react';

export default function LanguageSelection() {
  const { navigateTo } = useApp();
  const { language, changeLanguage, t } = useI18n();
  const [selected, setSelected] = useState(language);

  const handleSelect = (langCode) => {
    setSelected(langCode);
    changeLanguage(langCode);
  };

  const handleProceed = () => {
    changeLanguage(selected);
    navigateTo('userType');
  };

  return (
    <AppShell showHeader={true} showBackground={true}>
      <div className="flex-1 flex flex-col justify-between px-5 pt-3 pb-8">
        {/* Title Header (Matches Image 2 Screen 2) */}
        <div>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-extrabold text-gray-900">
              {t('language.title')}
            </h1>
            <p className="text-sm font-medium text-gray-500 mt-1">
              {t('language.subtitle')}
            </p>
            <div className="w-12 h-1 bg-[#2E7D32] rounded-full mx-auto mt-2" />
          </div>

          {/* Language Cards List */}
          <OnboardingLanguageList
            selectedLang={selected}
            onSelect={handleSelect}
          />
        </div>

        {/* Primary CTA */}
        <div className="w-full max-w-sm mx-auto mt-8">
          <button
            type="button"
            onClick={handleProceed}
            className="w-full py-4 px-6 bg-[#20603D] hover:bg-[#1B5E20] active:scale-[0.99] text-white font-bold text-base rounded-2xl shadow-cta flex items-center justify-center gap-2 transition-all"
          >
            <span>{t('nav.next')}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </AppShell>
  );
}
