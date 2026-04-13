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
    <section className="relative py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* WhatsApp Doodle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")`,
             backgroundSize: '200px'
           }} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green rounded-full text-xs font-black tracking-widest uppercase mb-6">
              Social Proof
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-[0.9]">
              💬 <span className="text-brand-cyan">WhatsApp</span> <br className="hidden sm:block" /> Chat Real
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Bukan sekadar janji, ini adalah bukti nyata interaksi harian kami dengan pelanggan setia VisiGo.
            </p>
          </FadeIn>
        </div>

        {/* Scattered Layout (Desktop) */}
        <div className="hidden md:block relative min-h-[1000px]">
          {chatScreenshots.map((url, i) => {
            const placements = [
              { top: '0%', left: '5%', rotate: -3, scale: 1, delay: 0 },
              { top: '5%', left: '40%', rotate: 2, scale: 0.95, delay: 0.1 },
              { top: '0%', left: '70%', rotate: -1, scale: 1.05, delay: 0.2 },
              { top: '45%', left: '10%', rotate: 4, scale: 1, delay: 0.3 },
              { top: '50%', left: '45%', rotate: -2, scale: 1.1, delay: 0.4 },
              { top: '40%', left: '75%', rotate: 3, scale: 0.9, delay: 0.5 },
            ];
            
            const p = placements[i % placements.length];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotate: p.rotate * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: p.delay || i * 0.5
                }}
                className="absolute w-[350px] pointer-events-auto"
                style={{ 
                  top: p.top, 
                  left: p.left,
                  zIndex: i + 10
                }}
              >
                <div className="relative bg-white dark:bg-slate-900 rounded-[2rem] p-3 shadow-2xl shadow-slate-200/50 dark:shadow-brand-blue/20 border border-slate-100 dark:border-slate-800 overflow-hidden group hover:z-50 hover:scale-105 transition-all duration-500">
                  {/* WhatsApp Style Header */}
                  <div className="flex items-center justify-between mb-3 px-3 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-[10px]">VisiGo Official</h4>
                        <p className="text-[8px] text-brand-green font-bold uppercase tracking-widest">Online</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                    </div>
                  </div>

                  {/* The Real Screenshot */}
                  <div className="relative rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-inner">
                    <img 
                      src={url} 
                      alt={`WhatsApp Chat Proof ${i + 1}`} 
                      className="w-full h-auto object-cover object-top"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    
                    {/* Overlay Badge */}
                    <div className="absolute top-3 right-3 bg-brand-green/90 text-white text-[8px] font-black px-3 py-1 rounded-full shadow-lg backdrop-blur-md border border-white/20">
                      REAL CHAT
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View: Grid Layout */}
        <div className="md:hidden grid grid-cols-1 gap-8">
          {chatScreenshots.map((url, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative bg-white dark:bg-slate-900 rounded-[2rem] p-3 shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                <div className="flex items-center justify-between mb-3 px-3 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-[10px]">VisiGo Official</h4>
                      <p className="text-[8px] text-brand-green font-bold uppercase tracking-widest">Online</p>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700">
                  <img 
                    src={url} 
                    alt={`WhatsApp Chat Proof ${i + 1}`} 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
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
