import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Sparkles } from 'lucide-react';

interface FloatingCTAProps {
  onClick: () => void;
}

export const FloatingCTA = ({ onClick }: FloatingCTAProps) => {
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    // Show label after 3 seconds
    const timer = setTimeout(() => setShowLabel(true), 3000);
    
    // Toggle label every 10 seconds to grab attention
    const interval = setInterval(() => {
      setShowLabel(prev => !prev);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Urgency Label */}
      <AnimatePresence>
        {showLabel && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="bg-white dark:bg-slate-900 px-4 py-2 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-2 pointer-events-auto"
          >
            <div className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </div>
            <p className="text-xs font-black text-slate-900 dark:text-white whitespace-nowrap">
              🟢 SIAP MELAYANI 7 HARI SEMINGGU
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Pulsating Button */}
      <div className="relative pointer-events-auto">
        {/* Pulsating Rings */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-brand-blue rounded-full blur-md"
        />
        <motion.div
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            delay: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-brand-green rounded-full blur-lg"
        />

        {/* The Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={onClick}
          className="relative z-10 bg-brand-blue hover:bg-brand-blue/90 text-white p-4 sm:p-5 rounded-full shadow-2xl shadow-brand-blue/50 flex items-center justify-center group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative">
            <img 
              src="https://img.icons8.com/color/96/whatsapp.png" 
              alt="WhatsApp" 
              className="w-12 h-12 sm:w-14 sm:h-14 group-hover:rotate-12 transition-transform" 
              referrerPolicy="no-referrer" 
            />
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="absolute -top-1 -right-1 bg-brand-green text-white p-1 rounded-full shadow-lg border-2 border-white dark:border-slate-900"
            >
              <Sparkles className="w-4 h-4 fill-white" />
            </motion.div>
          </div>
        </motion.button>

        {/* Floating Text Bubble (Optional/Secondary) */}
        <motion.div
          animate={{
            opacity: [0, 1, 1, 0],
            x: [20, 0, 0, 20],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 10,
          }}
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-brand-blue text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl whitespace-nowrap hidden sm:block"
        >
          Butuh Cek Mata? Chat Yuk!
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-brand-blue rotate-45" />
        </motion.div>
      </div>
    </div>
  );
};
