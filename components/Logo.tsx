import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-start leading-none font-futuristic ${className}`}>
      <span className="text-2xl font-bold tracking-tighter text-brand">
        NAB<span className="text-white">EEL</span>
      </span>
      <span className="text-[10px] tracking-[0.3em] uppercase text-brand/60 font-medium">
        oolibiloo
      </span>
    </div>
  );
};

export default Logo;