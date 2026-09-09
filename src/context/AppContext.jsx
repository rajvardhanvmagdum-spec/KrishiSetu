import React, { createContext, useContext, useState } from 'react';
import { CROPS } from '../data/crops';
import { MANDIS_DATABASE, calculateMandiEconomics } from '../data/mandiData';
import { LOCATIONS } from '../data/locations';
import { getFilteredBuyers } from '../data/buyersData';

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

  // Geographic Filter (Default 120 km radius directly on Farmer Home)
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

  // Selected Buyer for Buyer Details page
  const [selectedBuyerId, setSelectedBuyerId] = useState(null);

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

  // Get current farmer GPS coordinates from selected district
  const getCurrentFarmerCoordinates = () => {
    const stateObj = LOCATIONS.find((l) => l.state === location.state) || LOCATIONS[0];
    const distObj = stateObj.districts.find((d) => d.id === location.district) || stateObj.districts[0];
    return {
      lat: distObj?.lat || 18.5204,
      lng: distObj?.lng || 73.8567,
      districtName: distObj?.name || 'Pune',
    };
  };

  // Unit conversion helper to get standardized kilograms
  const getQuantityInKg = () => {
    if (unit === 'kg') return quantity;
    if (unit === 'ton') return quantity * 1000;
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

  // Dynamic Buyer Marketplace calculations
  const farmerCoords = getCurrentFarmerCoordinates();
  const filteredBuyers = getFilteredBuyers({
    crop: selectedCrop,
    farmerLat: farmerCoords.lat,
    farmerLng: farmerCoords.lng,
    radiusKm: location.radiusKm,
  });

  const selectedBuyerData =
    filteredBuyers.find((b) => b.id === selectedBuyerId) ||
    filteredBuyers[0] ||
    null;

  const handleApplyBuyer = (buyer, e) => {
    if (e) e.stopPropagation();
    showToast(`Application sent successfully (${buyer.name})`, 'success', 3500);
  };

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
        getCurrentFarmerCoordinates,
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
        filteredBuyers,
        selectedBuyerId,
        setSelectedBuyerId,
        selectedBuyerData,
        handleApplyBuyer,
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
