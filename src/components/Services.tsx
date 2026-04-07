import React from 'react';
import { Eye, Glasses, Building, GraduationCap } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { formatVisiGoText } from '../lib/formatters';
import { Content } from '../types';

interface ServicesProps {
  content: Content['services'];
  setIsBookingOpen: (val: boolean) => void;
}

export const Services = ({ content, setIsBookingOpen }: ServicesProps) => {
  return (
    <section id="layanan" className="py-24 bg-white dark:bg-slate-950 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8">{formatVisiGoText(content.title)}</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">{formatVisiGoText(content.desc)}</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.items.map((service, i) => {
            const Icon = i === 0 ? Eye : i === 1 ? Glasses : i === 2 ? Building : GraduationCap;
            return (
              <div key={i}>
                <FadeIn delay={i * 0.1}>
                  <div 
                    onClick={() => setIsBookingOpen(true)}
                    className="group bg-slate-50 dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:shadow-brand-blue/10 transition-all duration-500 relative overflow-hidden h-full cursor-pointer hover:-translate-y-3"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="bg-brand-cyan/10 w-16 h-16 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500 text-brand-cyan">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">{formatVisiGoText(service.title)}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-lg">{formatVisiGoText(service.desc)}</p>
                      
                      <div className="mt-auto text-brand-cyan font-extrabold text-sm uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                        Pesan Sekarang <span className="text-xl">→</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
