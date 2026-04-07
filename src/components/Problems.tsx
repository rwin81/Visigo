import React from 'react';
import { Smartphone, Activity, Eye, Truck } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { formatVisiGoText } from '../lib/formatters';
import { Content } from '../types';

interface ProblemsProps {
  content: Content['problems'];
  setIsBookingOpen: (val: boolean) => void;
}

export const Problems = ({ content, setIsBookingOpen }: ProblemsProps) => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8">{formatVisiGoText(content.title)}</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">{formatVisiGoText(content.desc)}</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {content.items.map((item, i) => {
            const icons = [Smartphone, Activity, Eye];
            const Icon = icons[i] || Eye;
            return (
              <FadeIn delay={i * 0.1} key={i}>
                <div 
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center h-full group hover:shadow-brand-blue/10 transition-all cursor-pointer hover:-translate-y-3"
                >
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-3xl mb-8 text-red-500 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-500">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">{formatVisiGoText(item.title)}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">{formatVisiGoText(item.desc)}</p>
                  
                  <div className="mt-auto text-brand-cyan font-extrabold text-sm uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                    Atasi Sekarang →
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.4}>
          <div 
            onClick={() => setIsBookingOpen(true)}
            className="bg-gradient-to-br from-brand-blue via-brand-cyan to-brand-green rounded-[3rem] p-10 sm:p-16 md:p-20 text-center text-white shadow-2xl shadow-brand-blue/30 relative overflow-hidden cursor-pointer hover:scale-[1.01] transition-all group"
          >
            <div className="absolute inset-0 bg-white/5 opacity-50" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-md text-white p-6 rounded-3xl mb-10 shadow-xl group-hover:scale-110 transition-transform border border-white/30">
                <Truck className="w-10 h-10" />
              </div>
              <h3 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">{formatVisiGoText(content.solution.title)}</h3>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                {formatVisiGoText(content.solution.desc)}
              </p>
              <div className="inline-flex items-center gap-4 bg-white text-brand-blue px-12 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-white/10 hover:bg-slate-50 transition-all">
                BOOKING SEKARANG
                <span className="text-2xl">→</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
