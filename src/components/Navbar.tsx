import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setIsBookingOpen: (val: boolean) => void;
  logoUrl?: string;
}

export const Navbar = ({ isDarkMode, setIsDarkMode, setIsBookingOpen, logoUrl }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Layanan', href: '#layanan' },
    { name: 'Cara Kerja', href: '#cara-kerja' },
    { name: 'Testimoni', href: '#testimoni' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Small delay to let the menu closing animation start
      setTimeout(() => {
        const offset = 80; // Navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 150);
    } else {
      // Fallback if element not found, just close menu
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-3">
            <Logo className="h-10 sm:h-12 w-auto" logoUrl={logoUrl} />
          </div>
          
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-600 dark:text-slate-300 hover:text-brand-cyan dark:hover:text-brand-cyan font-extrabold text-sm uppercase tracking-[0.2em] transition-all hover:scale-105"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all hover:rotate-12"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="hidden sm:flex items-center gap-3 bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-brand-cyan hover:to-brand-green text-white px-8 py-3.5 rounded-2xl font-black transition-all shadow-xl shadow-brand-cyan/20 hover:shadow-brand-green/40 text-base whitespace-nowrap hover:scale-105"
            >
              <img src="https://img.icons8.com/color/96/whatsapp.png" alt="WhatsApp" className="w-6 h-6" referrerPolicy="no-referrer" loading="lazy" />
              <span>Booking Sekarang</span>
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-cyan hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
