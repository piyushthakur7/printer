import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 md:w-12 md:h-12"
      >
        {/* Dark M Shape */}
        <path
          d="M15 10H35V45L50 30L65 45V10H85V90H70V55L50 40L30 55V90H15V10Z"
          fill="#1A1A1A"
        />
        
        {/* Color Bars Background / Cutout */}
        <rect x="35" y="60" width="30" height="30" fill="white" />
        
        {/* Four Color Bars */}
        <rect x="36" y="62" width="6" height="28" fill="#0077C8" /> {/* Cyan / Blue */}
        <rect x="43" y="62" width="6" height="28" fill="#E4007F" /> {/* Magenta */}
        <rect x="50" y="62" width="6" height="28" fill="#FFED00" /> {/* Yellow */}
        <rect x="57" y="62" width="6" height="28" fill="#F4911E" /> {/* Orange/Yellow */}
      </svg>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-[#1A1A1A]">
            Modern <span className="font-light">Offset</span>
          </span>
          <span className="text-[8px] md:text-[10px] italic uppercase tracking-[0.3em] font-medium opacity-60 text-[#1A1A1A]">
            lasting impressions
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
