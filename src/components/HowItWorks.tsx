import React from 'react';
import { MessageCircle, Truck, Glasses } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { formatVisiGoText } from '../lib/formatters';
import { Content } from '../types';

interface HowItWorksProps {
  content: Content['howItWorks'];
}

export const HowItWorks = ({ content }: HowItWorksProps) => {
  return (
    <section id="cara-kerja" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{formatVisiGoText(content.title)}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">{formatVisiGoText(content.desc)}</p>
          </FadeIn>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {content.items.map((step, i) => {
              const Icon = i === 0 ? MessageCircle : i === 1 ? Truck : Glasses;
              return (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <FadeIn delay={i * 0.15}>
                    <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full border-4 border-slate-50 dark:border-slate-900 shadow-xl flex items-center justify-center mb-6 relative z-10 mx-auto">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-green/10" />
                      <Icon className="w-10 h-10 text-brand-blue relative z-10" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                        {i + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{formatVisiGoText(step.title)}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{formatVisiGoText(step.desc)}</p>
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
