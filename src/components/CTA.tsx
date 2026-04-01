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
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-cyan to-brand-green" />
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {formatVisiGoText(content.title)}
          </h2>
          <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto">
            {formatVisiGoText(content.desc)}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto bg-white text-brand-blue hover:bg-slate-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-3"
            >
              <img src="https://img.icons8.com/color/96/whatsapp.png" alt="WhatsApp" className="w-10 h-10 scale-110" referrerPolicy="no-referrer" />
              WhatsApp Booking Sekarang
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
