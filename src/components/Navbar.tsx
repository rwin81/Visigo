import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setIsBookingOpen: (val: boolean) => void;
}

export const Navbar = ({ isDarkMode, setIsDarkMode, setIsBookingOpen }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 bg-white/80 dark:bg-white p-1.5 pr-3 rounded-2xl shadow-sm border border-slate-100 dark:border-white/20">
            <Logo className="h-8 sm:h-10 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#layanan" className="text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-cyan font-medium transition-colors">Layanan</a>
            <a href="#cara-kerja" className="text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-cyan font-medium transition-colors">Cara Kerja</a>
            <a href="#testimoni" className="text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-cyan font-medium transition-colors">Testimoni</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="hidden sm:flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40"
            >
              <img src="https://img.icons8.com/color/96/whatsapp.png" alt="WhatsApp" className="w-7 h-7 scale-110" referrerPolicy="no-referrer" />
              Booking Sekarang
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
