import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/images/MO Logo.png" 
        alt="Modern Offset Logo" 
        className="h-12 md:h-16 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
