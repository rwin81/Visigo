import React from 'react';
import { FadeIn } from './FadeIn';
import { formatVisiGoText } from '../lib/formatters';
import { Content } from '../types';

interface CTAProps {
  content: Content['cta'];
  setIsBookingOpen: (val: boolean) => void;
}

export const CTA = ({ content, setIsBookingOpen }: CTAProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/40 via-brand-cyan/20 to-brand-green/40 opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-blue/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-green/20 rounded-full blur-[150px] animate-pulse" />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-20 text-center shadow-2xl overflow-hidden relative">
          {/* Inner decorative circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl" />
          
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-brand-cyan font-bold text-sm mb-8 border border-white/10">
              SIAP MELAYANI ANDA
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              {formatVisiGoText(content.title)}
            </h2>
            
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {formatVisiGoText(content.desc)}
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90 text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-2xl shadow-brand-blue/40 hover:shadow-brand-blue/60 hover:scale-105 flex items-center justify-center gap-4 group"
              >
                <img src="https://img.icons8.com/color/96/whatsapp.png" alt="WhatsApp" className="w-10 h-10 group-hover:rotate-12 transition-transform" referrerPolicy="no-referrer" />
                BOOKING SEKARANG
              </button>
              
              <div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 20}`} 
                      alt="User" 
                      className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span>Bergabung dengan 10,000+ customer puas</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
