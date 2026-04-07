import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { MessageCircle, CheckCheck } from 'lucide-react';

const chats = [
  {
    name: "Budi Santoso",
    time: "Baru saja",
    message: "Halo VisiGo, saya mau booking Home Eye Check untuk hari Sabtu jam 10 pagi di rumah Tuban bisa?",
    reply: "Halo Pak Budi! Bisa pak, jadwal Sabtu jam 10 masih tersedia. Mohon isi form bookingnya ya pak."
  },
  {
    name: "Siti Aminah",
    time: "2 menit yang lalu",
    message: "Min, kacamata anak saya sudah jadi? Yang pesen hari Senin kemarin di Bojonegoro.",
    reply: "Halo Bu Siti, sudah jadi bu! Sedang dalam pengiriman oleh tim kami, estimasi sampai siang ini ya."
  },
  {
    name: "Andi Wijaya",
    time: "5 menit yang lalu",
    message: "Terima kasih VisiGo, pelayanannya mantap. Gak perlu repot ke optik, kacamata langsung diantar ke kantor.",
    reply: "Sama-sama Pak Andi! Senang bisa membantu. Semoga kacamatanya nyaman dipakai bekerja."
  },
  {
    name: "Rina Kartika",
    time: "12 menit yang lalu",
    message: "Mau tanya min, kalau screening mata untuk karyawan kantor di Rembang ada minimal jumlah orangnya?",
    reply: "Halo Bu Rina, untuk screening kantor minimal 10 orang ya bu. Kami bawakan alat lengkap ke lokasi."
  },
  {
    name: "Ahmad Fauzi",
    time: "18 menit yang lalu",
    message: "Kacamata anti radiasinya keren banget modelnya. Pas banget di muka saya. Thanks ya!",
    reply: "Mantap Pak Ahmad! Terima kasih testimoninya. Jangan lupa rekomendasikan ke teman-teman ya pak."
  },
  {
    name: "Linda Wahyuni",
    time: "25 menit yang lalu",
    message: "Pagi min, mau atur jadwal periksa mata untuk orang tua saya di rumah Sragen besok sore bisa?",
    reply: "Pagi Bu Linda! Besok sore jam 16.00 masih kosong bu. Mau kami amankan jadwalnya?"
  }
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
          {chats.map((chat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-[#e5ddd5] dark:bg-[#0d1418] rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden group transition-all duration-500">
                {/* WhatsApp Header Style */}
                <div className="flex items-center gap-4 mb-6 border-b border-slate-300/50 dark:border-slate-800 pb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-base">{chat.name}</h4>
                    <p className="text-xs text-brand-green font-bold uppercase tracking-widest">Online</p>
                  </div>
                </div>

                {/* Chat Bubbles */}
                <div className="space-y-4 relative z-10">
                  {/* User Message */}
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-[#262d31] p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] border-none">
                      <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                        {chat.message}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1 text-right">{chat.time}</p>
                    </div>
                  </div>

                  {/* Admin Reply */}
                  <div className="flex justify-end">
                    <div className="bg-[#e2ffca] dark:bg-[#056162] p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] border-none">
                      <p className="text-sm text-slate-900 dark:text-white leading-relaxed">
                        {chat.reply}
                      </p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <p className="text-[10px] text-slate-500 dark:text-slate-300/70">{chat.time === 'Baru saja' ? 'Baru saja' : 'Baru saja'}</p>
                        <CheckCheck className="w-3 h-3 text-brand-blue" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative WhatsApp Icon Background */}
                <div className="absolute -bottom-4 -right-4 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-500">
                  <img src="https://img.icons8.com/color/144/whatsapp.png" alt="WA" className="w-32 h-32" referrerPolicy="no-referrer" loading="lazy" />
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
