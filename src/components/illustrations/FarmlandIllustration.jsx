import React from 'react';

export default function FarmlandIllustration({ className = '' }) {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 1200 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover object-top"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EBF7ED" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#F5FAF5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="farHillGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A7D7A9" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#8AC68E" stopOpacity="0.45" />
          </linearGradient>

          <linearGradient id="midHillGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#81C784" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#4CAF50" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="frontHillGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#66BB6A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#388E3C" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="bottomFadeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Sky Background */}
        <rect width="1200" height="420" fill="url(#skyGrad)" />

        {/* Soft Sun/Halo glow */}
        <circle cx="950" cy="110" r="140" fill="#FFFBEB" fillOpacity="0.6" />

        {/* Soft Far Clouds */}
        <path
          d="M720 70 C740 50, 780 50, 800 70 C820 60, 850 75, 850 90 C850 105, 820 110, 720 110 Z"
          fill="#FFFFFF"
          fillOpacity="0.7"
        />
        <path
          d="M920 50 C940 35, 970 35, 990 50 C1010 40, 1030 55, 1030 70 C1030 80, 1000 85, 920 85 Z"
          fill="#FFFFFF"
          fillOpacity="0.5"
        />

        {/* Far Background Mountain Ridge */}
        <path
          d="M0 240 Q300 130 650 180 T1200 140 L1200 420 L0 420 Z"
          fill="url(#farHillGrad)"
        />

        {/* Mid Farmland Hills with Contour Lines */}
        <path
          d="M380 200 Q600 120 900 170 Q1050 190 1200 150 L1200 420 L380 420 Z"
          fill="url(#midHillGrad)"
        />

        {/* Field Terraces / Contour Curves */}
        <path
          d="M480 230 Q720 160 1020 200"
          stroke="#A5D6A7"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M560 265 Q800 195 1120 230"
          stroke="#C8E6C9"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M620 300 Q880 230 1200 260"
          stroke="#E8F5E9"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M700 340 Q950 265 1200 295"
          stroke="#E8F5E9"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />

        {/* Farmhouse & Silo on the right hill (exactly as in Image 1) */}
        <g transform="translate(940, 135) scale(0.95)">
          {/* Silo */}
          <rect x="105" y="15" width="22" height="42" rx="4" fill="#B0BEC5" />
          <path d="M105 15 C105 5, 127 5, 127 15 Z" fill="#90A4AE" />
          <line x1="105" y1="28" x2="127" y2="28" stroke="#78909C" strokeWidth="1" />
          <line x1="105" y1="40" x2="127" y2="40" stroke="#78909C" strokeWidth="1" />

          {/* Farm House Body */}
          <polygon points="10,35 55,5 100,35 100,60 10,60" fill="#EFEBE9" />
          {/* Roof */}
          <polygon points="5,37 55,3 105,37 98,39 55,9 12,39" fill="#8D6E63" />
          <polygon points="10,35 55,5 100,35 90,35 55,12 20,35" fill="#6D4C41" />
          {/* Door & Window */}
          <rect x="44" y="38" width="18" height="22" rx="2" fill="#4E342E" />
          <circle cx="55" cy="24" r="6" fill="#D7CCC8" stroke="#8D6E63" strokeWidth="1.5" />
          <line x1="49" y1="24" x2="61" y2="24" stroke="#8D6E63" strokeWidth="1.5" />
          <line x1="55" y1="18" x2="55" y2="30" stroke="#8D6E63" strokeWidth="1.5" />

          {/* Farm Trees */}
          <circle cx="5" cy="45" r="14" fill="#2E7D32" opacity="0.9" />
          <circle cx="12" cy="48" r="11" fill="#388E3C" />
          <circle cx="-6" cy="50" r="9" fill="#1B5E20" />
          <rect x="3" y="55" width="4" height="8" fill="#5D4037" />

          <circle cx="138" cy="48" r="12" fill="#2E7D32" />
          <circle cx="146" cy="50" r="9" fill="#388E3C" />
          <rect x="136" y="56" width="3.5" height="7" fill="#5D4037" />
        </g>

        {/* Foreground rolling lush slope */}
        <path
          d="M0 320 Q450 220 900 270 Q1050 285 1200 250 L1200 420 L0 420 Z"
          fill="url(#frontHillGrad)"
          opacity="0.35"
        />

        {/* Bottom smooth white gradient fade */}
        <rect y="180" width="1200" height="240" fill="url(#bottomFadeGrad)" />
      </svg>
    </div>
  );
}
