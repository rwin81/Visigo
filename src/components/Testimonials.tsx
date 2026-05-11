import React, { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { formatVisiGoText } from '../lib/formatters';
import { Content } from '../types';

interface TestimonialsProps {
  content: Content['testimonials'];
  socialLinks?: Content['socialLinks'];
}

export const Testimonials = ({ content, socialLinks }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(content.items.length / itemsPerPage);

  // Auto-slide logic
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  // Clamp currentIndex when totalPages changes
  useEffect(() => {
    if (currentIndex >= totalPages && totalPages > 0) {
      setCurrentIndex(totalPages - 1);
    }
  }, [totalPages, currentIndex]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const TestimonialCard = ({ testi, index }: { testi: any, index: number }) => (
    <div className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-2xl shadow-slate-200/50 dark:shadow-none h-full flex flex-col transition-all hover:scale-[1.02] duration-300">
      <div className="flex gap-1.5 mb-8">
        {[...Array(5)].map((_, j) => (
          <Star key={j} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
        ))}
      </div>
      <p className="text-lg text-slate-700 dark:text-slate-300 mb-10 flex-grow italic leading-relaxed font-medium">"{formatVisiGoText(testi.text)}"</p>
      <div className="flex items-center gap-5">
        <img 
          src={testi.avatar} 
          alt={testi.name} 
          className="w-14 h-14 rounded-full object-cover border-4 border-slate-50 dark:border-slate-700 shadow-lg" 
          referrerPolicy="no-referrer" 
          loading="lazy"
        />
        <div>
          <p className="font-extrabold text-slate-900 dark:text-white text-lg">{testi.name}</p>
          <p className="text-sm font-bold text-brand-cyan uppercase tracking-widest">{testi.city}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      id="testimoni" 
      className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8">{formatVisiGoText(content.title)}</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">{formatVisiGoText(content.desc)}</p>
            </FadeIn>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all shadow-sm"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <motion.div 
          key="slider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative overflow-hidden"
        >
          <motion.div 
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {[...Array(totalPages)].map((_, pageIndex) => (
              <div key={pageIndex} className="flex-shrink-0 w-full flex gap-8 px-4">
                {content.items
                  .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                  .map((testi, i) => (
                    <div key={i} className="flex-1 min-w-0">
                      <TestimonialCard testi={testi} index={i} />
                    </div>
                  ))}
                {pageIndex === totalPages - 1 && 
                 content.items.slice(pageIndex * itemsPerPage).length < itemsPerPage && 
                 [...Array(itemsPerPage - content.items.slice(pageIndex * itemsPerPage).length)].map((_, i) => (
                   <div key={`spacer-${i}`} className="flex-1" />
                 ))
                }
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center gap-8 mt-12">
          <div className="flex justify-center gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'w-8 bg-brand-blue' : 'w-2 bg-slate-300 dark:bg-slate-700'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 bg-white dark:bg-slate-800 rounded-[3rem] p-8 md:p-12 border border-slate-100 dark:border-slate-700 shadow-2xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/5 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4">
                Lihat Real Testimoni Lainnya ✨
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl">
                Cek ribuan interaksi dan bukti kepuasan pelanggan VisiGo Home Eye Care secara langsung di akun media sosial kami.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={socialLinks?.tiktok || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-black text-white rounded-2xl hover:scale-105 transition-all shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 3.44-.3 6.88-.45 10.32-.15 2.13-1.13 4.23-2.94 5.37-2.02 1.28-4.72 1.44-6.86.41-2.14-1.03-3.67-3.26-3.84-5.64-.17-2.38 1.05-4.74 3.06-6.02 1.13-.72 2.48-1.07 3.81-1.02V10.1c-1.35-.05-2.73.32-3.83 1.11-1.1.79-1.8 2.04-1.89 3.4-.09 1.36.4 2.74 1.34 3.72.94.98 2.29 1.48 3.65 1.36 1.36-.12 2.6-.96 3.19-2.19.46-.96.58-2.05.58-3.12V0l.01.02z"/>
                </svg>
                <span className="font-bold">TikTok</span>
              </a>
              
              <a 
                href={socialLinks?.instagram || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white rounded-2xl hover:scale-105 transition-all shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="font-bold">Instagram</span>
              </a>
              
              <a 
                href={socialLinks?.facebook || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-[#1877F2] text-white rounded-2xl hover:scale-105 transition-all shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="font-bold">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
