import React from 'react';
import { MessageCircle, Calendar, Truck, Eye, Glasses } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { formatVisiGoText } from '../lib/formatters';
import { Content } from '../types';

interface HowItWorksProps {
  content: Content['howItWorks'];
}

export const HowItWorks = ({ content }: HowItWorksProps) => {
  return (
    <section id="cara-kerja" className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{formatVisiGoText(content.title)}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">{formatVisiGoText(content.desc)}</p>
          </FadeIn>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {content.items.map((step, i) => {
              const icons = [MessageCircle, Calendar, Truck, Eye, Glasses];
              const Icon = icons[i] || MessageCircle;
              return (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <FadeIn delay={i * 0.1}>
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white dark:bg-slate-800 rounded-full border-4 border-slate-50 dark:border-slate-900 shadow-xl flex items-center justify-center mb-6 relative z-10 mx-auto group hover:scale-110 transition-transform">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-green/10" />
                      <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-brand-blue relative z-10" />
                      <div className="absolute -top-1 -right-1 w-7 h-7 lg:w-8 lg:h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                        {i + 1}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">{formatVisiGoText(step.title)}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 px-2">{formatVisiGoText(step.desc)}</p>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
