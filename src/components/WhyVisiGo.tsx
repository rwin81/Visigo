import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { formatVisiGoText } from '../lib/formatters';
import { Content } from '../types';

interface WhyVisiGoProps {
  content: Content['why'];
}

export const WhyVisiGo = ({ content }: WhyVisiGoProps) => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <FadeIn delay={0.1} className="space-y-4 pt-12">
              <img 
                src={content.images[0]} 
                alt="Pemeriksaan mata" 
                className="rounded-3xl shadow-lg w-full object-cover aspect-[4/5]" 
                style={{ objectPosition: content.imagePositions?.[0] || 'center' }}
                referrerPolicy="no-referrer" 
              />
              <img 
                src={content.images[1]} 
                alt="Kacamata" 
                className="rounded-3xl shadow-lg w-full object-cover aspect-square" 
                style={{ objectPosition: content.imagePositions?.[1] || 'center' }}
                referrerPolicy="no-referrer" 
              />
            </FadeIn>
            <FadeIn delay={0.3} className="space-y-4">
              <img 
                src={content.images[2]} 
                alt="Dokter mata" 
                className="rounded-3xl shadow-lg w-full object-cover aspect-square" 
                style={{ objectPosition: content.imagePositions?.[2] || 'center' }}
                referrerPolicy="no-referrer" 
              />
              <div className="bg-brand-blue rounded-3xl p-6 sm:p-8 text-white shadow-lg aspect-[4/5] flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{formatVisiGoText(content.highlight.title)}</h3>
                <p className="text-blue-100">{formatVisiGoText(content.highlight.desc)}</p>
              </div>
            </FadeIn>
          </div>
          
          <div className="order-1 lg:order-2">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">{formatVisiGoText(content.title)}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {formatVisiGoText(content.desc)}
              </p>
              <ul className="space-y-6 mb-8">
                {content.items.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="bg-brand-green/10 p-2 rounded-full h-fit mt-1">
                      <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg">{formatVisiGoText(item.title)}</h4>
                      <p className="text-slate-600 dark:text-slate-400">{formatVisiGoText(item.desc)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
