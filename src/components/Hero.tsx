import React from 'react';
import { motion } from 'motion/react';
import { Eye, CheckCircle2, Star } from 'lucide-react';
import { formatVisiGoText } from '../lib/formatters';
import { Content } from '../types';

interface HeroProps {
  content: Content['hero'];
  setIsBookingOpen: (val: boolean) => void;
}

export const Hero = ({ content, setIsBookingOpen }: HeroProps) => {
  const [imgError, setImgError] = React.useState(false);
  const fallbackImage = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  const stats = [
    { label: "Tim Profesional", value: "200+" },
    { label: "Customer Puas", value: "10k+" },
    { label: "Area Layanan", value: "Nasional" },
  ];

  // Reset error state when image URL changes
  React.useEffect(() => {
    setImgError(false);
  }, [content.image]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/5 via-transparent to-brand-green/5 dark:from-brand-blue/10 dark:to-brand-green/5 bg-[length:200%_200%] blur-3xl opacity-50"
        />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/10 dark:bg-brand-blue/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-green/10 dark:bg-brand-green/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 dark:bg-brand-blue/30 text-brand-blue dark:text-brand-cyan font-black text-sm mb-8 border border-brand-blue/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              {formatVisiGoText(content.badge)}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] sm:leading-[1.05] mb-6 sm:mb-8"
            >
              {formatVisiGoText(content.title)} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">{formatVisiGoText(content.titleHighlight)}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              {formatVisiGoText(content.desc)}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 sm:mb-12"
            >
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-2xl font-black text-lg sm:text-xl transition-all shadow-2xl shadow-brand-blue/30 hover:shadow-brand-blue/50 hover:scale-105 flex items-center justify-center gap-3 group"
              >
                <img src="https://img.icons8.com/color/96/whatsapp.png" alt="WhatsApp" className="w-6 h-6 sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform" referrerPolicy="no-referrer" />
                BOOKING SEKARANG VIA WHATSAPP
              </button>
              <a 
                href="#layanan"
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 rounded-2xl font-bold text-base sm:text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center"
              >
                Lihat Layanan
              </a>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-100 dark:border-slate-800 pt-8"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-brand-blue dark:text-brand-cyan">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider leading-tight">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative flex items-center justify-center">
            {/* Floating Trust Badge */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 md:-left-12 z-20 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt="User" 
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400">+10k Users</div>
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                "Sangat praktis, tim datang tepat waktu!"
              </p>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </motion.div>

            {/* New Floating Hook: 7 Days Service */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute -top-12 -right-6 md:-right-12 z-20 bg-brand-green text-white px-6 py-3 rounded-2xl shadow-2xl shadow-brand-green/30 flex items-center gap-3 border-2 border-white dark:border-slate-900"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </div>
              <p className="font-black text-sm tracking-widest uppercase">7 Hari Seminggu</p>
            </motion.div>

            {/* Main Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-blue/20 border-8 border-white dark:border-slate-900"
            >
              <img 
                src={imgError ? fallbackImage : content.image} 
                alt="Hero Image" 
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: content.imagePosition || 'center' }}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-center gap-4"
              >
                <div className="bg-brand-green/20 dark:bg-brand-green/30 p-3 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Hasil Akurat</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Peralatan standar optik profesional</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-green/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/2 -left-10 w-24 h-24 bg-brand-blue/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
