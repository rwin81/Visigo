import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Tag } from 'lucide-react';

interface PromoBubblesProps {
  onClick: () => void;
  whatsappNumber: string;
}

export const PromoBubbles = ({ onClick, whatsappNumber }: PromoBubblesProps) => {
  const [activeBubble, setActiveBubble] = useState<number>(0); // 0: none, 1: Cek Mata, 2: Promo, 3: 7 Hari

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        // Show Bubble 1: Cek Mata
        setActiveBubble(1);
        await new Promise(resolve => setTimeout(resolve, 6000));
        setActiveBubble(0);
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show Bubble 2: Promo
        setActiveBubble(2);
        await new Promise(resolve => setTimeout(resolve, 6000));
        setActiveBubble(0);
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show Bubble 3: 7 Hari
        setActiveBubble(3);
        await new Promise(resolve => setTimeout(resolve, 6000));
        setActiveBubble(0);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
    };

    sequence();
  }, []);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Halo%20VisiGo,%20saya%20ingin%20booking%20layanan%20cek%20mata%20gratis%20dan%20tanya%20promo%20kacamata.`;

  return (
    <div className="fixed right-4 sm:right-6 bottom-28 sm:bottom-40 z-40 flex flex-col gap-4 pointer-events-none">
      <AnimatePresence mode="wait">
        {activeBubble === 1 && (
          <motion.div
            key="bubble-1"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="pointer-events-auto"
          >
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-brand-green to-emerald-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl shadow-2xl shadow-brand-green/40 border-2 border-white/20 hover:scale-105 transition-transform"
            >
              <div className="bg-white/20 p-1.5 sm:p-2 rounded-full">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-pulse" />
              </div>
              <div className="text-left">
                <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest opacity-80">Layanan Home Service</p>
                <p className="text-sm sm:text-base font-black leading-tight">CEK MATA GRATIS!</p>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <motion.div
                  animate={{
                    left: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                />
              </div>
            </a>
          </motion.div>
        )}

        {activeBubble === 2 && (
          <motion.div
            key="bubble-2"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="pointer-events-auto"
          >
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl shadow-2xl shadow-brand-blue/40 border-2 border-white/20 hover:scale-105 transition-transform"
            >
              <div className="bg-white/20 p-1.5 sm:p-2 rounded-full">
                <Tag className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest opacity-80">Promo Terbatas</p>
                <p className="text-sm sm:text-base font-black leading-tight">KACAMATA MULAI 150RB!</p>
              </div>

              {/* Pulsating Ring */}
              <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl border-2 border-brand-cyan/50 animate-ping opacity-20" />
            </a>
          </motion.div>
        )}

        {activeBubble === 3 && (
          <motion.div
            key="bubble-3"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="pointer-events-auto"
          >
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 sm:gap-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-slate-100 dark:border-slate-800 hover:scale-105 transition-transform"
            >
              <div className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
              </div>
              <div className="text-left">
                <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400">Status: Online</p>
                <p className="text-sm sm:text-base font-black leading-tight">SIAP MELAYANI 7 HARI SEMINGGU</p>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
