import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { useI18n } from '../context/I18nContext';
import AppShell from '../components/AppShell';
import { CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';

export default function OTPVerification() {
  const { userPhone, otp, setOtp, navigateTo, showToast } = useApp();
  const { t } = useI18n();
  const [digits, setDigits] = useState(['2', '4', '7', '1', '8', '6']);
  const [timer, setTimer] = useState(25);
  const [isVerified, setIsVerified] = useState(true);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    const char = value.slice(-1);
    const newDigits = [...digits];
    newDigits[index] = char;
    setDigits(newDigits);
    setOtp(newDigits);

    if (char && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newDigits.join('').length === 6) {
      setIsVerified(true);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setTimer(30);
    showToast('नया OTP भेजा गया!', 'success');
  };

  const handleProceed = () => {
    navigateTo('locationPermission');
  };

  return (
    <AppShell showHeader={true} showBackground={true}>
      <div className="flex-1 flex flex-col justify-between px-5 pt-3 pb-8 max-w-sm mx-auto w-full">
        <div>
          {/* Header Title (Matches Image 2 Screen 5) */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-extrabold text-gray-900">
              {t('auth.otpTitle')}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">
              {t('auth.otpSubtitle', { phone: userPhone || '9876543210' })}
            </p>
            <div className="w-12 h-1 bg-[#2E7D32] rounded-full mx-auto mt-2" />
          </div>

          {/* 6 OTP Input Boxes */}
          <div className="flex items-center justify-between gap-2 mb-6">
            {digits.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => (inputRefs.current[idx] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                className="w-12 h-14 text-center text-xl font-black text-gray-900 bg-white border-2 border-emerald-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            ))}
          </div>

          {/* Resend Timer */}
          <div className="text-center mb-5">
            {timer > 0 ? (
              <span className="text-xs font-semibold text-gray-500">
                00:{timer < 10 ? `0${timer}` : timer} {t('auth.resendTimer', { seconds: '' })}
              </span>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E5128] hover:underline"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t('auth.resendNow')}</span>
              </button>
            )}
          </div>

          {/* Verified Status Banner */}
          {isVerified && (
            <div className="bg-[#EBF7EE] border border-[#D5E8D8] text-[#1E5128] rounded-2xl py-2.5 px-4 flex items-center justify-center gap-2 text-xs font-bold shadow-sm animate-fade-in mb-6">
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
              <span>{t('auth.otpVerified')}</span>
            </div>
          )}
        </div>

        {/* Primary CTA */}
        <div className="w-full mt-6">
          <button
            type="button"
            onClick={handleProceed}
            className="w-full py-4 px-6 bg-[#20603D] hover:bg-[#1B5E20] active:scale-[0.99] text-white font-bold text-base rounded-2xl shadow-cta flex items-center justify-center gap-2 transition-all"
          >
            <span>{t('auth.proceed')}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </AppShell>
  );
}
