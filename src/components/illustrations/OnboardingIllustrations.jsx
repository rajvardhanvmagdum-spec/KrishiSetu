import React from 'react';

export function FarmerAvatar({ className = 'w-24 h-24' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Glow */}
      <circle cx="60" cy="60" r="54" fill="#E8F5E9" />
      
      {/* Pagri (Turban) */}
      <path d="M36 44 C36 26, 84 26, 84 44 C88 48, 86 54, 80 54 L40 54 C34 54, 32 48, 36 44 Z" fill="#FFA726" />
      <path d="M42 36 C52 24, 76 28, 80 38" stroke="#FB8C00" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M38 46 C48 40, 72 40, 82 46" stroke="#F57C00" strokeWidth="2" strokeLinecap="round" />

      {/* Face */}
      <ellipse cx="60" cy="56" rx="18" ry="19" fill="#FFCC80" />
      
      {/* Hair & Ears */}
      <circle cx="41" cy="56" r="4.5" fill="#FFB74D" />
      <circle cx="79" cy="56" r="4.5" fill="#FFB74D" />
      
      {/* Eyes & Eyebrows */}
      <circle cx="53" cy="52" r="2.2" fill="#3E2723" />
      <circle cx="67" cy="52" r="2.2" fill="#3E2723" />
      <path d="M49 47 Q53 45 57 47" stroke="#4E342E" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M63 47 Q67 45 71 47" stroke="#4E342E" strokeWidth="1.5" strokeLinecap="round" />

      {/* Moustache */}
      <path d="M50 62 Q60 59 70 62 Q65 67 60 64 Q55 67 50 62 Z" fill="#3E2723" />
      {/* Smile */}
      <path d="M54 66 Q60 70 66 66" stroke="#BF360C" strokeWidth="1.5" strokeLinecap="round" />

      {/* Kurta & Shoulders */}
      <path d="M32 98 C32 78, 88 78, 88 98 L88 114 L32 114 Z" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="1" />
      <path d="M52 78 L52 92 L68 92 L68 78" fill="#FFF3E0" />
      {/* Gamcha / Scarf */}
      <path d="M36 82 C42 80, 52 86, 52 98 L44 114 L34 114 Z" fill="#E53935" />
      <path d="M36 88 L50 88" stroke="#FFFFFF" strokeWidth="1.5" />

      {/* Golden Wheat Stalk in Hand */}
      <g transform="translate(76, 56) rotate(15)">
        <line x1="10" y1="45" x2="10" y2="5" stroke="#F57F17" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="6" cy="12" rx="3.5" ry="6" fill="#FBC02D" transform="rotate(-30 6 12)" />
        <ellipse cx="14" cy="12" rx="3.5" ry="6" fill="#FBC02D" transform="rotate(30 14 12)" />
        <ellipse cx="6" cy="22" rx="3.5" ry="6" fill="#FBC02D" transform="rotate(-30 6 22)" />
        <ellipse cx="14" cy="22" rx="3.5" ry="6" fill="#FBC02D" transform="rotate(30 14 22)" />
        <ellipse cx="10" cy="5" rx="3.5" ry="6" fill="#FBC02D" />
      </g>
    </svg>
  );
}

export function BuyerAvatar({ className = 'w-24 h-24' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Glow */}
      <circle cx="60" cy="60" r="54" fill="#FFF3E0" />

      {/* Shop Canopy / Awning */}
      <path d="M26 44 L94 44 L88 30 L32 30 Z" fill="#E65100" />
      {/* Stripes */}
      <path d="M34 44 L42 44 L40 30 L34 30 Z" fill="#FFFFFF" />
      <path d="M50 44 L58 44 L56 30 L50 30 Z" fill="#FFFFFF" />
      <path d="M66 44 L74 44 L72 30 L66 30 Z" fill="#FFFFFF" />
      <path d="M82 44 L90 44 L86 30 L82 30 Z" fill="#FFFFFF" />

      {/* Store Building */}
      <rect x="32" y="44" width="56" height="50" rx="3" fill="#FFE0B2" stroke="#FFB74D" strokeWidth="1.5" />
      
      {/* Store Window / Counter */}
      <rect x="40" y="52" width="40" height="26" rx="2" fill="#795548" />
      <rect x="42" y="54" width="36" height="22" rx="1" fill="#4E342E" />
      
      {/* Fruit/Veg Crates in Shop */}
      <rect x="44" y="64" width="14" height="10" rx="1" fill="#FF7043" />
      <rect x="62" y="64" width="14" height="10" rx="1" fill="#66BB6A" />

      {/* Front Entrance / Step */}
      <rect x="30" y="94" width="60" height="6" rx="2" fill="#BDBDBD" />
      <circle cx="60" cy="38" r="4" fill="#FFA726" />
    </svg>
  );
}

export function LocationMapIllustration({ className = 'w-36 h-36' }) {
  return (
    <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft circular background map */}
      <circle cx="80" cy="80" r="72" fill="#E8F5E9" stroke="#C8E6C9" strokeWidth="2" />

      {/* Grid Lines & Roads */}
      <path d="M30 65 Q80 85 130 55" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
      <path d="M45 125 Q75 60 115 35" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
      <path d="M70 135 Q100 110 135 115" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />

      {/* Road Dashes */}
      <path d="M30 65 Q80 85 130 55" stroke="#A5D6A7" strokeWidth="2" strokeDasharray="5 4" fill="none" />
      <path d="M45 125 Q75 60 115 35" stroke="#A5D6A7" strokeWidth="2" strokeDasharray="5 4" fill="none" />

      {/* Mini Trees / Fields */}
      <circle cx="50" cy="45" r="7" fill="#81C784" />
      <circle cx="115" cy="90" r="8" fill="#81C784" />
      <circle cx="55" cy="100" r="6" fill="#A5D6A7" />

      {/* Big Green Location Marker Pin */}
      <g transform="translate(80, 74)">
        {/* Pin Shadow */}
        <ellipse cx="0" cy="18" rx="14" ry="5" fill="#000000" fillOpacity="0.15" />
        
        {/* Pin Body */}
        <path
          d="M0 16 C-14 2, -18 -12, -18 -22 C-18 -32, -10 -40, 0 -40 C10 -40, 18 -32, 18 -22 C18 -12, 14 2, 0 16 Z"
          fill="#2E7D32"
        />
        {/* Inner Circle */}
        <circle cx="0" cy="-22" r="7" fill="#FFFFFF" />
        <circle cx="0" cy="-22" r="3.5" fill="#1B5E20" />
      </g>
    </svg>
  );
}

export function HappyFarmerBadge({ className = 'w-12 h-12' }) {
  return (
    <div className={`relative flex items-center justify-center flex-shrink-0 ${className}`}>
      <FarmerAvatar className="w-full h-full" />
    </div>
  );
}
