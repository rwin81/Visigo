import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { motion } from 'motion/react';

export const Logo = ({ className = "h-10 w-auto", textClassName = "text-2xl", onClick, logoUrl }: { className?: string, textClassName?: string, onClick?: () => void, logoUrl?: string }) => {
  const [imgError, setImgError] = useState(false);

  // If image fails or no logoUrl, show a high-quality SVG fallback
  if (imgError || !logoUrl) {
    return (
      <motion.div 
        whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
        className="flex items-center gap-2 cursor-pointer group" 
        onClick={onClick}
      >
        <div className="bg-gradient-to-br from-brand-blue to-brand-green p-2 rounded-xl text-white shadow-lg shadow-brand-blue/20 group-hover:scale-110 transition-transform relative overflow-hidden">
          <Eye className="w-6 h-6" />
          {/* Shine effect for fallback */}
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
          />
        </div>
        <span className={`${textClassName} font-bold tracking-tight`}>
          <span className="text-brand-blue dark:text-brand-cyan">Visi</span>
          <span className="text-brand-green">Go</span>
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="relative cursor-pointer group"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={logoUrl} 
          alt="VisiGo Logo" 
          className={`${className} transition-transform duration-500`} 
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
        />
        
        {/* Glossy / Shine Animation */}
        <motion.div 
          animate={{ 
            left: ['-100%', '150%'],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatDelay: 4,
            ease: "linear" 
          }}
          className="absolute top-0 bottom-0 w-12 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-20 z-10 pointer-events-none"
        />
      </div>

      {/* Subtle Rotation on Hover via CSS or Motion */}
      <motion.div 
        className="absolute -inset-1 bg-brand-green/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};
