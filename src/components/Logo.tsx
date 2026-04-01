import React, { useState } from 'react';
import { Eye } from 'lucide-react';

export const Logo = ({ className = "h-10 w-auto", textClassName = "text-2xl", onClick, logoUrl }: { className?: string, textClassName?: string, onClick?: () => void, logoUrl?: string }) => {
  const [imgError, setImgError] = useState(false);

  // If image fails or no logoUrl, show a high-quality SVG fallback
  if (imgError || !logoUrl) {
    return (
      <div className="flex items-center gap-2 cursor-pointer group" onClick={onClick}>
        <div className="bg-gradient-to-br from-brand-blue to-brand-green p-2 rounded-xl text-white shadow-lg shadow-brand-blue/20 group-hover:scale-110 transition-transform">
          <Eye className="w-6 h-6" />
        </div>
        <span className={`${textClassName} font-bold tracking-tight`}>
          <span className="text-brand-blue dark:text-brand-cyan">Visi</span>
          <span className="text-brand-green">Go</span>
        </span>
      </div>
    );
  }

  return (
    <img 
      src={logoUrl} 
      alt="VisiGo Logo" 
      className={`${className} cursor-pointer hover:scale-105 transition-transform`} 
      onClick={onClick}
      onError={() => setImgError(true)}
      referrerPolicy="no-referrer"
    />
  );
};
