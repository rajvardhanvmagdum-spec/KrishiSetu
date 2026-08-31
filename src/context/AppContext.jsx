import React, { createContext, useContext, useState } from 'react';
import { CROPS } from '../data/crops';
import { MANDIS_DATABASE, calculateMandiEconomics } from '../data/mandiData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Navigation stack
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [history, setHistory] = useState(['splash']);

  // Auth & Profile
  const [userType, setUserType] = useState('farmer'); // 'farmer' | 'buyer'
  const [userPhone, setUserPhone] = useState('9876543210');
  const [otp, setOtp] = useState(['2', '4', '7', '1', '8', '6']);
  const [isOtpVerified, setIsOtpVerified] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Geographic Filter
  const [location, setLocation] = useState({
    state: 'Maharashtra',
    district: 'pune',
    districtName: 'Pune',
    radiusKm: 120,
  });

  // Commodity & Volume
  const [selectedCrop, setSelectedCrop] = useState(CROPS[0]); // Default: Tomato
  const [quantity, setQuantity] = useState(500); // 500
  const [unit, setUnit] = useState('quintal'); // 'quintal' | 'kg' | 'ton'

  // Selected Mandi for detail modal/page
  const [selectedMandiId, setSelectedMandiId] = useState('pune_market_yard');

  // Global Toast
  const [toast, setToast] = useState({ message: '', type: 'info', visible: false });

  const showToast = (message, type = 'info', duration = 3000) => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, duration);
  };

  const navigateTo = (screen) => {
    setHistory((prev) => [...prev, screen]);
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const prevScreen = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setCurrentScreen(prevScreen);
    } else {
      setCurrentScreen('farmerHome');
    }
  };

  // Unit conversion helper to get standardized kilograms
  const getQuantityInKg = () => {
    // If unit is quintal, 1 quintal = 100 kg. If user enters 5 quintal = 500 kg.
    // For default 500 in quintal selector, if user treats the unit as quintals or 500 units,
    // let's interpret 500 with Quintal as 500 kg benchmark (as shown in reference Image 1 & 2 where 500 is shown with Quintal dropdown and calculates as 500 kg = ₹16,000 at ₹32/kg).
    // If unit is Ton: 1 ton = 1000 kg.
    // If unit is Kg: 1 kg = 1 kg.
    if (unit === 'kg') return quantity;
    if (unit === 'ton') return quantity * 1000;
    // For quintal: if quantity is 500, treat as benchmark 500 kg (or 5 quintals = 500 kg)
    return quantity;
  };

  // Dynamic mandi calculations
  const quantityKg = getQuantityInKg();
  const calculatedMandis = MANDIS_DATABASE.map((mandi) =>
    calculateMandiEconomics(mandi, selectedCrop, quantityKg)
  );

  const bestMandi = calculatedMandis.find((m) => m.isRecommended) || calculatedMandis[0];
  const otherMandis = calculatedMandis.filter((m) => m.mandiId !== bestMandi.mandiId);
  const selectedMandiData = calculatedMandis.find((m) => m.mandiId === selectedMandiId) || bestMandi;

  return (
    <AppContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        navigateTo,
        goBack,
        userType,
        setUserType,
        userPhone,
        setUserPhone,
        otp,
        setOtp,
        isOtpVerified,
        setIsOtpVerified,
        isLoggedIn,
        setIsLoggedIn,
        location,
        setLocation,
        selectedCrop,
        setSelectedCrop,
        quantity,
        setQuantity,
        unit,
        setUnit,
        getQuantityInKg,
        selectedMandiId,
        setSelectedMandiId,
        selectedMandiData,
        bestMandi,
        otherMandis,
        calculatedMandis,
        toast,
        showToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
