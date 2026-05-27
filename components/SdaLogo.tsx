import React from 'react';

interface SdaLogoProps {
  className?: string;
  showSlogan?: boolean;
  theme?: 'dark' | 'light';
}

const SdaLogo: React.FC<SdaLogoProps> = ({ className = 'h-16', showSlogan = true, theme = 'dark' }) => {
  const isLight = theme === 'light';
  
  return (
    <div className={`flex flex-col items-center justify-center select-none bg-transparent ${className}`}>
      <svg 
        viewBox={showSlogan ? "0 0 540 340" : "0 0 540 270"} 
        className="h-full w-auto cursor-pointer"
        style={{ maxWidth: '100%', background: 'transparent' }}
      >
        {/* UPPER SWOOSH GROUP IN OVAL */}
        <path 
          d="M 32 170 C 26 100, 110 32, 270 30 C 430 28, 514 100, 508 170 C 498 126, 430 62, 270 64 C 110 66, 42 126, 32 170 Z" 
          fill={isLight ? "#ffffff" : "#115fa9"} 
        />
        <path 
          d="M 44 170 C 38 115, 116 50, 270 48 C 424 46, 502 115, 496 170 C 488 135, 420 80, 270 82 C 120 84, 52 135, 44 170 Z" 
          fill={isLight ? "#e2e8f0" : "#1cac4c"} 
        />

        {/* LOWER SWOOSH GROUP */}
        <path 
          d="M 124 220 C 145 238, 200 252, 270 250 C 430 248, 514 180, 508 110 C 498 154, 434 212, 270 214 C 190 216, 145 204, 124 220 Z" 
          fill={isLight ? "#ffffff" : "#115fa9"} 
        />
        <path 
          d="M 144 213 C 160 225, 205 234, 270 232 C 410 230, 480 175, 494 125 C 482 160, 420 202, 270 204 C 210 206, 170 198, 144 213 Z" 
          fill={isLight ? "#cbd5e1" : "#1cac4c"} 
        />

        {/* MAPLE LEAF IN UPPER RIGHT */}
        <g transform="translate(425, 44) scale(1.1)" stroke={isLight ? "#ffffff" : "#ffffff"} strokeWidth="1" strokeLinejoin="round">
          <path 
            d="M 15 35 L 5 30 L 11 22 L 3 19 L 15 14 L 14 3 L 25 8 L 28 0 L 33 8 L 41 3 L 40 14 L 52 19 L 44 22 L 50 30 L 40 35 L 41 40 L 33 37 L 32 46 L 28 46 L 26 37 L 19 40 Z" 
            fill={isLight ? "#ffffff" : "#1cac4c"} 
          />
        </g>

        {/* CENTRAL BRAND LETTERS "SDA" */}
        <text 
          x="270" 
          y="180" 
          fontFamily="'Impact', 'Arial Black', -apple-system, sans-serif" 
          fontWeight="900" 
          fontStyle="italic" 
          fontSize="125" 
          fill={isLight ? "#ffffff" : "#115fa9"} 
          textAnchor="middle"
          letterSpacing="-4"
        >
          SDA
        </text>

        {/* TAGLINE SLOGAN IN ORANGE */}
        {showSlogan && (
          <text 
            x="270" 
            y="315" 
            fontFamily="'Caveat', 'Dancing Script', 'Brush Script MT', cursive" 
            fontSize="46" 
            fontWeight="bold"
            fill={isLight ? "#f8fafc" : "#ee6c09"} 
            textAnchor="middle"
          >
            Our Performance Makes the Difference
          </text>
        )}
      </svg>
    </div>
  );
};

export default SdaLogo;
