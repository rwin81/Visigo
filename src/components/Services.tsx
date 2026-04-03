import React from 'react';
import { Eye, Glasses, Building, GraduationCap } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { formatVisiGoText } from '../lib/formatters';
import { Content } from '../types';

interface ServicesProps {
  content: Content['services'];
}

export const Services = ({ content }: ServicesProps) => {
  return (
    <section id="layanan" className="py-24 bg-white dark:bg-slate-950 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{formatVisiGoText(content.title)}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">{formatVisiGoText(content.desc)}</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.items.map((service, i) => {
            const Icon = i === 0 ? Eye : i === 1 ? Glasses : i === 2 ? Building : GraduationCap;
            return (
              <div key={i}>
                <FadeIn delay={i * 0.1}>
                  <div className="group bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-300 relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="bg-brand-blue/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors text-brand-blue">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{formatVisiGoText(service.title)}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{formatVisiGoText(service.desc)}</p>
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
