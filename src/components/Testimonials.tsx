import React, { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from './FadeIn';
import { formatVisiGoText } from '../lib/formatters';
import { Content } from '../types';

interface TestimonialsProps {
  content: Content['testimonials'];
}

export const Testimonials = ({ content }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
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

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="testimoni" className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{formatVisiGoText(content.title)}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">{formatVisiGoText(content.desc)}</p>
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

        <div className="relative">
          <motion.div 
            className="flex gap-8"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {content.items.map((testi, i) => (
              <div 
                key={i} 
                className="min-w-full sm:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.35rem)]"
              >
                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm h-full flex flex-col transition-transform hover:scale-[1.02] duration-300">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-8 flex-grow italic leading-relaxed">"{formatVisiGoText(testi.text)}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testi.avatar} 
                      alt={testi.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-blue/10" 
                      referrerPolicy="no-referrer" 
                    />
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{testi.name}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{testi.city}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center gap-2 mt-12">
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
    </section>
  );
};
