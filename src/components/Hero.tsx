import React from 'react';
import { motion } from 'motion/react';
import { Eye, CheckCircle2 } from 'lucide-react';
import { formatVisiGoText } from '../lib/formatters';
import { Content } from '../types';

interface HeroProps {
  content: Content['hero'];
  setIsBookingOpen: (val: boolean) => void;
}

export const Hero = ({ content, setIsBookingOpen }: HeroProps) => {
  const [imgError, setImgError] = React.useState(false);
  const fallbackImage = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  // Reset error state when image URL changes
  React.useEffect(() => {
    setImgError(false);
  }, [content.image]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Subtle moving gradient background */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <motion.div 
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-brand-green/20 dark:from-brand-blue/40 dark:to-brand-green/20 bg-[length:200%_200%]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 dark:bg-brand-blue/30 text-brand-blue dark:text-brand-cyan font-medium text-sm mb-6 border border-brand-blue/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              {formatVisiGoText(content.badge)}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6"
            >
              {formatVisiGoText(content.title)} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-green">{formatVisiGoText(content.titleHighlight)}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
            >
              {formatVisiGoText(content.desc)}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-brand-blue/20 hover:shadow-brand-blue/40 flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <img src="https://img.icons8.com/color/96/whatsapp.png" alt="WhatsApp" className="w-8 h-8 scale-110" referrerPolicy="no-referrer" />
                Booking Sekarang via WhatsApp
              </button>
            </motion.div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Floating Eye Icon */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 z-20 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700"
            >
              <Eye className="w-8 h-8 text-brand-cyan" />
            </motion.div>

            {/* Parallax Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-blue/20"
            >
              <img 
                src={imgError ? fallbackImage : content.image} 
                alt="Hero Image" 
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: content.imagePosition || 'center' }}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-center gap-4"
              >
                <div className="bg-brand-green/20 dark:bg-brand-green/30 p-3 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Hasil Akurat</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Peralatan standar optik profesional</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
