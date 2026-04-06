import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { 
  Home, 
  Stethoscope, 
  Glasses, 
  Clock, 
  ShieldCheck, 
  Zap,
  Star
} from 'lucide-react';

const hooks = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "Tim Datang Ke Anda",
    desc: "Gak perlu macet-macetan. Kami yang datang ke rumah atau kantor Anda.",
    color: "bg-blue-500",
    delay: 0.1
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Cek Mata Profesional",
    desc: "Pemeriksaan akurat menggunakan alat standar optik terkini.",
    color: "bg-green-500",
    delay: 0.2
  },
  {
    icon: <Glasses className="w-8 h-8" />,
    title: "Pilih Kacamata Di Tempat",
    desc: "Ratusan koleksi frame keren bisa langsung Anda coba di lokasi.",
    color: "bg-purple-500",
    delay: 0.3
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Hemat Waktu & Praktis",
    desc: "Proses cepat, tanpa antre, kacamata langsung diproses.",
    color: "bg-orange-500",
    delay: 0.4
  }
];

interface WhyChooseVisiGoHookProps {
  setIsBookingOpen: (val: boolean) => void;
}

export const WhyChooseVisiGoHook = ({ setIsBookingOpen }: WhyChooseVisiGoHookProps) => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30 overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-black mb-4 tracking-widest uppercase">
              <Star className="w-4 h-4 fill-brand-blue" />
              Kenapa Harus VisiGo?
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Layanan <span className="text-brand-blue">Modern</span> Tanpa Ribet
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Kami mengubah cara Anda periksa mata. Lebih personal, lebih nyaman, dan pastinya lebih hemat waktu.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hooks.map((hook, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: hook.delay, duration: 0.5 }}
              whileHover={{ y: -10 }}
              onClick={() => setIsBookingOpen(true)}
              className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 group relative overflow-hidden cursor-pointer"
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${hook.color}`} />
              
              <div className={`${hook.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                {hook.icon}
              </div>
              
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                {hook.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {hook.desc}
              </p>

              <div className="mt-6 flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-2 duration-300">
                <Zap className="w-4 h-4 fill-brand-blue" />
                Solusi Terbaik
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats Hook */}
        <div className="mt-20">
          <FadeIn delay={0.5}>
            <div className="bg-brand-blue rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-brand-blue/30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/20 rounded-full -ml-32 -mb-32 blur-3xl" />
              
              <div className="grid md:grid-cols-3 gap-12 text-center relative z-10">
                <div className="space-y-2">
                  <h4 className="text-4xl md:text-5xl font-black">100%</h4>
                  <p className="text-blue-100 font-bold uppercase tracking-widest text-xs">Puas & Nyaman</p>
                </div>
                <div className="space-y-2 border-y md:border-y-0 md:border-x border-white/20 py-8 md:py-0">
                  <h4 className="text-4xl md:text-5xl font-black">500+</h4>
                  <p className="text-blue-100 font-bold uppercase tracking-widest text-xs">Koleksi Frame</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-4xl md:text-5xl font-black">7 Hari</h4>
                  <p className="text-blue-100 font-bold uppercase tracking-widest text-xs">Siap Melayani</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
