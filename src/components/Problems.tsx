import React from 'react';
import { ThumbsDown, Clock, Eye, Truck } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { formatVisiGoText } from '../lib/formatters';
import { Content } from '../types';

interface ProblemsProps {
  content: Content['problems'];
}

export const Problems = ({ content }: ProblemsProps) => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{formatVisiGoText(content.title)}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">{formatVisiGoText(content.desc)}</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {content.items.map((item, i) => (
            <FadeIn delay={i * 0.1} key={i}>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center h-full">
                <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full mb-6 text-red-500">
                  {i === 0 ? <ThumbsDown className="w-8 h-8" /> : i === 1 ? <Clock className="w-8 h-8" /> : <Eye className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{formatVisiGoText(item.title)}</h3>
                <p className="text-slate-600 dark:text-slate-400">{formatVisiGoText(item.desc)}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="bg-gradient-to-r from-brand-blue to-brand-cyan rounded-[2rem] sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center bg-white text-brand-blue p-4 rounded-full mb-6 shadow-lg">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{formatVisiGoText(content.solution.title)}</h3>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                {formatVisiGoText(content.solution.desc)}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
