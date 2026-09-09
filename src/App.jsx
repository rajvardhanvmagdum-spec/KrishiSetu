import React from 'react';
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
import BuyerMarketplace from './pages/BuyerMarketplace';
import BuyerDetails from './pages/BuyerDetails';

export default function App() {
  const { currentScreen } = useApp();

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
      case 'buyerMarketplace':
        return <BuyerMarketplace />;
      case 'buyerDetails':
        return <BuyerDetails />;
      default:
        return <FarmerHome />;
    }
  };

  return (
    <div className="relative min-h-screen">
      {renderScreen()}
    </div>
  );
}
