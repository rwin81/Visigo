import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

interface ServiceMarqueeProps {
  cities: string[];
  setIsBookingOpen: (val: boolean) => void;
}

export const ServiceMarquee = ({ cities, setIsBookingOpen }: ServiceMarqueeProps) => {
  // Duplicate cities to ensure smooth infinite scroll
  const displayCities = [...cities, ...cities, ...cities, ...cities];

  return (
    <div className="bg-brand-blue dark:bg-slate-950 py-4 overflow-hidden border-y border-white/10 relative group">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-brand-blue/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Gradient Overlays for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-blue dark:from-slate-950 to-transparent z-20" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-blue dark:from-slate-950 to-transparent z-20" />

      <motion.div
        animate={{
          x: [0, -2000], 
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{ animationPlayState: 'paused' }}
        className="flex items-center gap-16 whitespace-nowrap relative z-10"
      >
        {displayCities.map((city, i) => (
          <div 
            key={i} 
            onClick={() => setIsBookingOpen(true)}
            className="flex items-center gap-4 group/item cursor-pointer hover:scale-110 transition-transform"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-green blur-md opacity-50 group-hover/item:opacity-100 transition-opacity" />
              <MapPin className="w-5 h-5 text-brand-green relative z-10" />
            </div>
            <span className="text-white font-black text-base tracking-[0.2em] uppercase flex items-center gap-2 drop-shadow-lg">
              {city}
            </span>
            <div className="w-1.5 h-1.5 bg-white/20 rounded-full mx-4" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
