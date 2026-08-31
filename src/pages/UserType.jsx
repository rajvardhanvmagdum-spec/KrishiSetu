import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import AppShell from '../components/AppShell';
import { FarmerAvatar, BuyerAvatar } from '../components/illustrations/OnboardingIllustrations';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function UserType() {
  const { userType, setUserType, navigateTo, showToast } = useApp();
  const { t } = useI18n();
  const [selectedRole, setSelectedRole] = useState(userType || 'farmer');

  const handleSelectRole = (role) => {
    setSelectedRole(role);
    setUserType(role);
  };

  const handleProceed = () => {
    if (selectedRole === 'buyer') {
      showToast(t('userType.comingSoonTitle') + ' - ' + t('userType.comingSoonDesc'), 'info', 4000);
      setUserType('farmer');
      navigateTo('farmerLogin');
    } else {
      setUserType('farmer');
      navigateTo('farmerLogin');
    }
  };

  return (
    <AppShell showHeader={true} showBackground={true}>
      <div className="flex-1 flex flex-col justify-between px-5 pt-3 pb-8">
        <div>
          {/* Header Title (Matches Image 2 Screen 3) */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-extrabold text-gray-900">
              {t('userType.title')}
            </h1>
            <p className="text-sm font-medium text-gray-500 mt-1">
              {t('userType.subtitle')}
            </p>
            <div className="w-12 h-1 bg-[#2E7D32] rounded-full mx-auto mt-2" />
          </div>

          {/* 2 Role Selection Cards */}
          <div className="space-y-4 max-w-sm mx-auto">
            {/* Farmer Card */}
            <div
              onClick={() => handleSelectRole('farmer')}
              className={`cursor-pointer rounded-3xl p-5 border-2 transition-all duration-200 flex items-center justify-between shadow-card ${
                selectedRole === 'farmer'
                  ? 'border-[#2E7D32] bg-[#F0FDF4] ring-2 ring-[#2E7D32]/20'
                  : 'border-gray-100 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <FarmerAvatar className="w-20 h-20" />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">
                    {t('userType.farmer')}
                  </h3>
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-full inline-block mt-1">
                    {t('userType.farmerEn')}
                  </span>
                </div>
              </div>

              {selectedRole === 'farmer' && (
                <CheckCircle2 className="w-6 h-6 text-[#2E7D32] fill-emerald-100" />
              )}
            </div>

            {/* Buyer Card */}
            <div
              onClick={() => handleSelectRole('buyer')}
              className={`cursor-pointer rounded-3xl p-5 border-2 transition-all duration-200 flex items-center justify-between shadow-card ${
                selectedRole === 'buyer'
                  ? 'border-[#2E7D32] bg-[#F0FDF4] ring-2 ring-[#2E7D32]/20'
                  : 'border-gray-100 bg-white hover:border-gray-300 opacity-90'
              }`}
            >
              <div className="flex items-center gap-4">
                <BuyerAvatar className="w-20 h-20" />
                <div className="text-left">
                  <h3 className="text-lg font-bold text-gray-900">
                    Buyer / Wholesaler
                  </h3>
                  <span className="text-xs font-medium text-gray-500 block mt-0.5">
                    {t('userType.buyerSub')}
                  </span>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full inline-block mt-1">
                    जल्द उपलब्ध / Soon
                  </span>
                </div>
              </div>

              {selectedRole === 'buyer' && (
                <CheckCircle2 className="w-6 h-6 text-[#2E7D32] fill-emerald-100" />
              )}
            </div>
          </div>
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
