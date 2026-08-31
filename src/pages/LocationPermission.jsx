import React from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import AppShell from '../components/AppShell';
import { LocationMapIllustration } from '../components/illustrations/OnboardingIllustrations';
import { ArrowRight, MapPin } from 'lucide-react';

export default function LocationPermission() {
  const { navigateTo, showToast } = useApp();
  const { t } = useI18n();

  const handleAllow = () => {
    showToast('स्थान सफलतापूर्वक प्राप्त हुआ (पुणे, महाराष्ट्र)', 'success');
    navigateTo('farmerHome');
  };

  const handleSkip = () => {
    navigateTo('farmerHome');
  };

  return (
    <AppShell showHeader={true} showBackground={true}>
      <div className="flex-1 flex flex-col justify-between px-5 pt-3 pb-8 max-w-sm mx-auto w-full text-center">
        <div>
          {/* Map Illustration (Matches Image 2 Screen 7) */}
          <div className="flex justify-center my-6">
            <LocationMapIllustration className="w-44 h-44 drop-shadow-md" />
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-extrabold text-gray-900 leading-snug">
            {t('location.permissionTitle')}
          </h1>
          <p className="text-sm font-medium text-gray-600 mt-2 max-w-xs mx-auto leading-relaxed">
            {t('location.permissionSubtitle')}
          </p>
          <div className="w-12 h-1 bg-[#2E7D32] rounded-full mx-auto mt-3" />
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 w-full mt-8">
          <button
            type="button"
            onClick={handleAllow}
            className="w-full py-4 px-6 bg-[#20603D] hover:bg-[#1B5E20] active:scale-[0.99] text-white font-bold text-base rounded-2xl shadow-cta flex items-center justify-center gap-2 transition-all"
          >
            <MapPin className="w-5 h-5" />
            <span>{t('location.allow')}</span>
          </button>

          <button
            type="button"
            onClick={handleSkip}
            className="w-full py-3.5 px-6 bg-white hover:bg-gray-50 active:scale-[0.99] text-gray-700 font-bold text-sm rounded-2xl border border-gray-200 shadow-sm transition-all"
          >
            <span>{t('location.later')}</span>
          </button>
        </div>
      </div>
    </AppShell>
  );
}
