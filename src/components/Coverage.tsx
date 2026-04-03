import React from 'react';
import { MapPin } from 'lucide-react';
import { formatVisiGoText } from '../lib/formatters';
import { Content } from '../types';

interface CoverageProps {
  content: Content['coverage'];
}

export const Coverage = ({ content }: CoverageProps) => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-100 dark:border-slate-800">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-brand-blue" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{formatVisiGoText(content.title)}</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              {formatVisiGoText(content.desc)}
            </p>
            <div className="flex flex-wrap gap-3">
              {content.cities.map(c => c.trim()).filter(c => c !== '').map((city, i) => (
                <span key={i} className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full text-brand-blue dark:text-brand-cyan font-semibold border border-slate-200 dark:border-slate-700 shadow-sm">
                  {city}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-48 h-48 bg-gradient-to-br from-brand-blue/10 to-brand-green/10 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-4 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-inner">
                <MapPin className="w-16 h-16 text-brand-green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
