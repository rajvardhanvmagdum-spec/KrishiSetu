import React, { useState, useRef, useEffect } from 'react';
import { useI18n } from '../context/I18nContext';
import { Globe, ChevronDown, Check } from 'lucide-react';

export function HeaderLanguageDropdown() {
  const { language, changeLanguage, languages, currentLanguageInfo } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Pill Button matching Image 1 Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm border border-gray-200/90 rounded-full shadow-sm hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-xs font-semibold text-gray-800"
        aria-label="Select Language"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 text-emerald-700" />
        <span className="text-gray-900">{currentLanguageInfo.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-emerald-700' : ''
          }`}
        />
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-50 animate-fade-in divide-y divide-gray-50">
          <div className="px-3 py-1.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
            भाषा चुनें / Language
          </div>
          <div className="py-1">
            {languages.map((lang) => {
              const isSelected = lang.code === language;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    changeLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2 text-xs text-left transition-colors ${
                    isSelected
                      ? 'bg-emerald-50 text-emerald-800 font-bold'
                      : 'text-gray-700 hover:bg-gray-50 font-medium'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm">{lang.flag}</span>
                    <span>{lang.nativeName}</span>
                  </span>
                  {isSelected && <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function OnboardingLanguageList({ selectedLang, onSelect }) {
  const { languages } = useI18n();

  return (
    <div className="space-y-3 w-full max-w-sm mx-auto">
      {languages.map((lang) => {
        const isSelected = selectedLang === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => onSelect(lang.code)}
            className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border-2 transition-all duration-200 ${
              isSelected
                ? 'border-emerald-700 bg-emerald-700 text-white shadow-md'
                : 'border-gray-200 bg-white text-gray-800 hover:border-gray-300 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{lang.flag}</span>
              <div className="text-left">
                <div className="text-base font-bold leading-tight">{lang.nativeName}</div>
                {lang.code !== 'en' && (
                  <div
                    className={`text-xs mt-0.5 ${
                      isSelected ? 'text-emerald-100' : 'text-gray-400'
                    }`}
                  >
                    {lang.label}
                  </div>
                )}
              </div>
            </div>

            {isSelected ? (
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <Check className="w-4 h-4 text-emerald-700 stroke-[3]" />
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full border border-gray-300" />
            )}
          </button>
        );
      })}
    </div>
  );
}
