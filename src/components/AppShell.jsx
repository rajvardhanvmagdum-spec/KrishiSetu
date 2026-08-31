import React from 'react';
import Header from './Header';
import FarmlandIllustration from './illustrations/FarmlandIllustration';
import Toast from './Toast';

export default function AppShell({
  children,
  showHeader = true,
  showBackground = true,
  maxWidth = 'max-w-xl',
  className = '',
}) {
  return (
    <div className="min-h-screen bg-[#F4F8F3] text-gray-900 flex flex-col items-center justify-start relative overflow-x-hidden font-sans">
      {/* Toast Notification */}
      <Toast />

      {/* Persistent Farmland Illustration Theme Background (Change 5) */}
      {showBackground && (
        <div className="absolute top-0 left-0 right-0 w-full h-80 sm:h-96 z-0 pointer-events-none opacity-90 overflow-hidden">
          <FarmlandIllustration className="w-full h-full" />
        </div>
      )}

      {/* Main Container Wrapper */}
      <div className={`relative z-10 w-full ${maxWidth} mx-auto flex flex-col min-h-screen ${className}`}>
        {showHeader && <Header />}
        
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}
