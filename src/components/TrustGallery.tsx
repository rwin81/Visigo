import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { formatVisiGoText } from '../lib/formatters';

export const TrustGallery = () => {
  const images = [
    {
      url: "https://i.ibb.co.com/242hZtt/spg-teknisi-cwk.png",
      title: "Teknisi Profesional",
      desc: "Tim ahli kami siap melayani Anda dengan seragam lengkap dan ramah."
    },
    {
      url: "https://i.ibb.co.com/HD8MMKDm/ALAT-1-VISIGO.png",
      title: "Peralatan Canggih",
      desc: "Menggunakan peralatan standar optik untuk hasil yang akurat."
    },
    {
      url: "https://i.ibb.co.com/BK451Q0g/HOME-1-SRV.png",
      title: "Home Service",
      desc: "Pemeriksaan mata dilakukan di kenyamanan rumah Anda sendiri."
    },
    {
      url: "https://i.ibb.co.com/Fkt6GDgs/FRAME-VISIGO.png",
      title: "Koleksi Lengkap",
      desc: "Pilih berbagai model kacamata trendi langsung di tempat."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8">
              Aktivitas Lapangan & <span className="text-brand-cyan">Real Photos</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Lihat bagaimana tim profesional VisiGo melayani ribuan customer di seluruh Indonesia dengan standar kualitas tinggi.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((img, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group relative rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 h-full flex flex-col">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-xl mb-3">{img.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{img.desc}</p>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-brand-blue/90 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    REAL PHOTO
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <FadeIn delay={0.4}>
            <div className="inline-flex items-center gap-8 p-8 bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl shadow-brand-blue/10 border border-slate-100 dark:border-slate-700">
              <div className="text-left">
                <p className="text-4xl font-black text-brand-blue dark:text-brand-cyan mb-1">200+</p>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Tim Lapangan</p>
              </div>
              <div className="w-px h-12 bg-slate-200 dark:bg-slate-700" />
              <div className="text-left">
                <p className="text-4xl font-black text-brand-green mb-1">10k+</p>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Customer Puas</p>
              </div>
              <div className="w-px h-12 bg-slate-200 dark:bg-slate-700" />
              <div className="text-left">
                <p className="text-4xl font-black text-brand-blue dark:text-brand-cyan mb-1">15+</p>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Kota Besar</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
