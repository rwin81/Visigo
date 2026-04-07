import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Calendar } from 'lucide-react';

const names = ['Totok', 'Rina', 'Budi', 'Siti', 'Andi', 'Maya', 'Eko', 'Linda', 'Ahmad', 'Diana', 'Hendra', 'Sari'];
const cities = ['Blora', 'Tuban', 'Bojonegoro', 'Lamongan', 'Rembang', 'Purwodadi', 'Sragen', 'Jogjakarta', 'Purworejo', 'Gunungkidul', 'Wonogiri', 'Demak'];
const actions = [
  'barusan booking Home Eye Check',
  'baru saja pesan kacamata baru',
  'booking screening untuk kantornya',
  'pesan lensa kacamata anti radiasi',
  'jadwalkan cek mata untuk keluarga',
  'baru saja order frame kacamata stylish'
];

export const SocialProof = () => {
  const [currentNotif, setCurrentNotif] = useState<{
    name: string;
    city: string;
    action: string;
    avatar: string;
  } | null>(null);

  const generateRandomNotif = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const avatar = `https://i.pravatar.cc/150?u=${name}${city}`;
    
    return { name, city, action, avatar };
  };

  useEffect(() => {
    const showNext = () => {
      // Show notification
      setCurrentNotif(generateRandomNotif());
      
      // Hide after 5 seconds
      setTimeout(() => {
        setCurrentNotif(null);
      }, 5000);
    };

    // Initial delay
    const initialTimer = setTimeout(showNext, 3000);

    // Loop every 15 seconds
    const interval = setInterval(showNext, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-[60] pointer-events-none">
      <AnimatePresence>
        {currentNotif && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 p-4 max-w-[320px] pointer-events-auto flex items-center gap-4"
          >
            <div className="relative flex-shrink-0">
              <img 
                src={currentNotif.avatar} 
                alt={currentNotif.name} 
                className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue/10"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute -bottom-1 -right-1 bg-brand-green text-white p-1 rounded-full shadow-sm">
                {currentNotif.action.includes('booking') ? <Calendar className="w-3 h-3" /> : <ShoppingBag className="w-3 h-3" />}
              </div>
            </div>
            
            <div className="flex-grow">
              <p className="text-sm text-slate-900 dark:text-white leading-snug">
                <span className="font-bold">{currentNotif.name}</span> dari <span className="font-bold">{currentNotif.city}</span> {currentNotif.action}
              </p>
              <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-semibold">Baru saja</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
