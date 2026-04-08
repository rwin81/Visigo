import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { MessageCircle } from 'lucide-react';

const chatScreenshots = [
  "https://i.ibb.co.com/KcGjLbks/Whats-App-Image-2026-04-08-at-13-34-38-1.jpg",
  "https://i.ibb.co.com/9kSx75Pw/Whats-App-Image-2026-04-08-at-13-34-38-2.jpg",
  "https://i.ibb.co.com/b53JB2Zf/Whats-App-Image-2026-04-08-at-13-34-38-3.jpg",
  "https://i.ibb.co.com/3y3mk9fK/Whats-App-Image-2026-04-08-at-13-34-38.jpg",
  "https://i.ibb.co.com/nNxNYDSL/Whats-App-Image-2026-04-08-at-13-34-39-1.jpg",
  "https://i.ibb.co.com/Ng016Xpc/Whats-App-Image-2026-04-08-at-13-34-39.jpg"
];

export const WhatsAppProof = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8">
              💬 <span className="text-brand-cyan">WhatsApp</span> Chat Real
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Lihat bagaimana antusiasme pelanggan kami setiap harinya. Ratusan chat masuk untuk booking dan konsultasi.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chatScreenshots.map((url, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl shadow-brand-blue/10 border border-slate-100 dark:border-slate-800 overflow-hidden group h-full">
                {/* WhatsApp Style Header */}
                <div className="flex items-center justify-between mb-4 px-3 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs">VisiGo Official</h4>
                      <p className="text-[8px] text-brand-green font-bold uppercase tracking-widest">Online</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                  </div>
                </div>

                {/* The Real Screenshot */}
                <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-inner aspect-[3/4]">
                  <img 
                    src={url} 
                    alt={`WhatsApp Chat Proof ${i + 1}`} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-3 right-3 bg-brand-green/90 text-white text-[8px] font-black px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md border border-white/20">
                    REAL CHAT
                  </div>
                </div>

                {/* Decorative WhatsApp Icon Background */}
                <div className="absolute -bottom-4 -right-4 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-500">
                  <img src="https://img.icons8.com/color/144/whatsapp.png" alt="WA" className="w-24 h-24" referrerPolicy="no-referrer" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <FadeIn delay={0.6}>
            <p className="text-slate-500 dark:text-slate-400 font-medium mb-4 italic">
              *Data chat di atas adalah ilustrasi dari percakapan asli pelanggan kami demi menjaga privasi.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green/10 text-brand-green rounded-full font-bold text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
              </span>
              Ratusan Chat Masuk Setiap Hari
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
