import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import FarmlandIllustration from '../components/illustrations/FarmlandIllustration';
import KrishiSetuLogo from '../components/illustrations/KrishiSetuLogo';
import { ArrowRight } from 'lucide-react';

export default function Splash() {
  const { navigateTo } = useApp();
  const { t } = useI18n();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigateTo('language');
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F5E9] via-[#F1F8F2] to-[#FFFFFF] flex flex-col items-center justify-between p-6 relative overflow-hidden">
      {/* Background Farmland Illustration */}
      <div className="absolute inset-x-0 bottom-0 h-96 pointer-events-none opacity-80">
        <FarmlandIllustration className="w-full h-full" />
      </div>

      {/* Top spacer */}
      <div className="w-full pt-8 flex justify-end">
        <button
          type="button"
          onClick={() => navigateTo('language')}
          className="text-xs font-bold text-[#1E5128] bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-emerald-200 hover:bg-white shadow-sm"
        >
          Skip →
        </button>
      </div>

      {/* Center Branding (Matches Image 2 Screen 1) */}
      <div className="relative z-10 flex flex-col items-center text-center my-auto animate-fade-in">
        <KrishiSetuLogo variant="splash" />
        
        <p className="text-base sm:text-lg font-bold text-[#1E5128] mt-6 max-w-xs">
          {t('appFullTagline')}
        </p>
        
        <div className="w-20 h-1 bg-[#2E7D32] rounded-full mt-3" />

        <div className="flex items-center gap-2 mt-8">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-bounce" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-bounce delay-150" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-bounce delay-300" />
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="relative z-10 w-full max-w-sm pb-6">
        <button
          type="button"
          onClick={() => navigateTo('language')}
          className="w-full py-4 px-6 bg-[#20603D] hover:bg-[#1B5E20] active:scale-[0.99] text-white font-bold text-base rounded-2xl shadow-cta flex items-center justify-center gap-2 transition-all"
        >
          <span>शुरू करें / Get Started</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
