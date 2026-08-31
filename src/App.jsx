import React, { useState } from 'react';
import { useApp } from './context/AppContext';
import Splash from './pages/Splash';
import LanguageSelection from './pages/LanguageSelection';
import UserType from './pages/UserType';
import FarmerLogin from './pages/FarmerLogin';
import OTPVerification from './pages/OTPVerification';
import LocationPermission from './pages/LocationPermission';
import FarmerHome from './pages/FarmerHome';
import MarketAnalysis from './pages/MarketAnalysis';
import MandiDetails from './pages/MandiDetails';
import { Layers, ChevronUp, ChevronDown } from 'lucide-react';

export default function App() {
  const { currentScreen, setCurrentScreen } = useApp();
  const [showNavPill, setShowNavPill] = useState(false);

  const screens = [
    { id: 'splash', label: '1. Splash' },
    { id: 'language', label: '2. Language' },
    { id: 'userType', label: '3. User Type' },
    { id: 'farmerLogin', label: '4. Login' },
    { id: 'otpVerification', label: '5. OTP' },
    { id: 'locationPermission', label: '6. Location' },
    { id: 'farmerHome', label: '7. Farmer Home (Image 1)' },
    { id: 'marketAnalysis', label: '8. Market Analysis' },
    { id: 'mandiDetails', label: '9. Mandi Details' },
  ];

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <Splash />;
      case 'language':
        return <LanguageSelection />;
      case 'userType':
        return <UserType />;
      case 'farmerLogin':
        return <FarmerLogin />;
      case 'otpVerification':
        return <OTPVerification />;
      case 'locationPermission':
        return <LocationPermission />;
      case 'farmerHome':
        return <FarmerHome />;
      case 'marketAnalysis':
        return <MarketAnalysis />;
      case 'mandiDetails':
        return <MandiDetails />;
      default:
        return <FarmerHome />;
    }
  };

  return (
    <div className="relative min-h-screen">
      {renderScreen()}

      {/* Screen Switcher Floating Bar for quick navigation & review */}
      <div className="fixed bottom-3 right-3 z-50 print:hidden">
        {showNavPill ? (
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-emerald-200 p-3 w-64 animate-fade-in text-left">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100 mb-2">
              <span className="text-[11px] font-bold text-[#1E5128] uppercase tracking-wider flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" /> Flow Navigation
              </span>
              <button
                type="button"
                onClick={() => setShowNavPill(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-1 max-h-60 overflow-y-auto custom-scrollbar pr-1">
              {screens.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setCurrentScreen(s.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                    currentScreen === s.id
                      ? 'bg-[#1E5128] text-white shadow-xs font-bold'
                      : 'text-gray-700 hover:bg-emerald-50'
                  }`}
                >
                  <span>{s.label}</span>
                  {currentScreen === s.id && <span className="text-[10px] opacity-80">●</span>}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowNavPill(true)}
            className="flex items-center gap-1.5 px-3 py-2 bg-white/90 hover:bg-white text-[#1E5128] border border-emerald-200 shadow-md rounded-full text-xs font-bold transition-all active:scale-95"
            title="Switch Screens"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span className="hidden sm:inline">Screen Flow</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
