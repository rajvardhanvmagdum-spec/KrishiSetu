import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import AppShell from '../components/AppShell';
import { FarmerAvatar, BuyerAvatar } from '../components/illustrations/OnboardingIllustrations';
import { ArrowRight, CheckCircle2, Sparkles, Store, UserCheck } from 'lucide-react';

export default function UserType() {
  const { userType, setUserType, navigateTo } = useApp();
  const { t } = useI18n();
  const [selectedRole, setSelectedRole] = useState(userType || 'farmer');

  const handleSelectRole = (role) => {
    setSelectedRole(role);
    setUserType(role);
  };

  const handleProceed = () => {
    setUserType(selectedRole);
    navigateTo('farmerLogin');
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

          {/* 2 Role Selection Cards (Requirement 19: Polished & Modern) */}
          <div className="space-y-4 max-w-sm mx-auto">
            {/* Farmer Card */}
            <div
              onClick={() => handleSelectRole('farmer')}
              className={`cursor-pointer rounded-3xl p-5 border-2 transition-all duration-200 flex items-center justify-between shadow-card relative overflow-hidden ${
                selectedRole === 'farmer'
                  ? 'border-[#2E7D32] bg-gradient-to-r from-[#F0FDF4] to-[#E8F5E9] ring-2 ring-[#2E7D32]/20 scale-[1.01]'
                  : 'border-gray-100 bg-white hover:border-gray-300 hover:shadow-card-hover'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <FarmerAvatar className="w-20 h-20 drop-shadow-sm" />
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#2E7D32] text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                    🌾
                  </span>
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xl font-extrabold text-gray-900">
                      {t('userType.farmer')}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mt-1">
                    {t('userType.farmerEn')}
                  </span>
                  <p className="text-[11px] text-gray-500 mt-1 font-medium">
                    फसल बेचें, मंडी भाव जानें
                  </p>
                </div>
              </div>

              {selectedRole === 'farmer' ? (
                <CheckCircle2 className="w-6 h-6 text-[#2E7D32] fill-emerald-100 flex-shrink-0" />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-gray-200 flex-shrink-0" />
              )}
            </div>

            {/* Buyer Card */}
            <div
              onClick={() => handleSelectRole('buyer')}
              className={`cursor-pointer rounded-3xl p-5 border-2 transition-all duration-200 flex items-center justify-between shadow-card relative overflow-hidden ${
                selectedRole === 'buyer'
                  ? 'border-[#2E7D32] bg-gradient-to-r from-[#F0FDF4] to-[#E8F5E9] ring-2 ring-[#2E7D32]/20 scale-[1.01]'
                  : 'border-gray-100 bg-white hover:border-gray-300 hover:shadow-card-hover'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <BuyerAvatar className="w-20 h-20 drop-shadow-sm" />
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-amber-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                    🏪
                  </span>
                </div>

                <div className="text-left">
                  <h3 className="text-base sm:text-lg font-extrabold text-gray-900 leading-tight">
                    Buyer / Wholesaler
                  </h3>
                  <span className="text-xs font-medium text-gray-500 block mt-0.5">
                    {t('userType.buyerSub')}
                  </span>
                  <span className="text-[10px] font-extrabold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded-full inline-block mt-1">
                    मार्केटप्लेस उपलब्ध • Active
                  </span>
                </div>
              </div>

              {selectedRole === 'buyer' ? (
                <CheckCircle2 className="w-6 h-6 text-[#2E7D32] fill-emerald-100 flex-shrink-0" />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-gray-200 flex-shrink-0" />
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
