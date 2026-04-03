import { Content } from '../types';

export const defaultContent: Content = {
  hero: {
    badge: "Layanan Mata Era Baru",
    title: "Cek Mata Tanpa",
    titleHighlight: "Keluar Rumah",
    desc: "VisiGo datang langsung ke lokasi Anda. Layanan profesional, tim ahli, dan peralatan lengkap langsung di rumah Anda.",
    image: "https://i.ibb.co.com/JwSFKFRL/SPG-JKT.png",
    imagePosition: "center"
  },
  problems: {
    title: "Sering Mengalami Ini?",
    desc: "Jangan biarkan kesehatan mata Anda terabaikan karena kesibukan.",
    items: [
      { title: "Malas ke Optik", desc: "Macet di jalan dan repot mencari parkir." },
      { title: "Antri Lama", desc: "Menunggu giliran periksa yang membuang waktu berharga Anda." },
      { title: "Tidak Sempat Cek Mata", desc: "Jadwal kerja padat membuat kesehatan mata dinomorduakan." }
    ],
    solution: {
      title: "Solusinya: VisiGo Datang ke Rumah Anda!",
      desc: "Tinggal atur jadwal, tim ahli kami yang akan mengunjungi Anda dengan peralatan lengkap."
    }
  },
  services: {
    title: "Layanan Unggulan Kami",
    desc: "Solusi penglihatan terbaik, langsung di tempat Anda.",
    items: [
      { title: "Home Eye Check", desc: "Pemeriksaan refraksi lengkap dengan alat portabel modern di rumah." },
      { title: "Kacamata Minus & Plus", desc: "Pilih frame dan lensa berkualitas sesuai gaya dan kebutuhan Anda." },
      { title: "Screening Perusahaan", desc: "Layanan cek mata kolektif untuk karyawan di kantor Anda." },
      { title: "Screening Sekolah", desc: "Pemeriksaan kesehatan mata berkala untuk siswa di sekolah." }
    ]
  },
  howItWorks: {
    title: "Cara Kerja VisiGo",
    desc: "3 langkah mudah untuk penglihatan yang lebih baik.",
    items: [
      { title: "Booking via WhatsApp", desc: "Hubungi kami untuk atur jadwal kunjungan." },
      { title: "Tim Datang ke Rumah", desc: "Optiker profesional memeriksa mata Anda." },
      { title: "Kacamata Jadi & Diantar", desc: "Pesanan selesai dan diantar langsung ke tangan Anda." }
    ]
  },
  why: {
    title: "Kenapa Memilih VisiGo?",
    desc: "Kami menggabungkan kenyamanan layanan di rumah dengan kualitas pemeriksaan standar klinik mata profesional.",
    images: [
      "https://i.ibb.co/gMzsctFz/SPG-KAOS.png",
      "https://i.ibb.co.com/tMMykfhs/SPG-ROMPI.png",
      "https://i.ibb.co.com/2098cgYK/SPG-COW1.png"
    ],
    imagePositions: ["center", "center", "center"],
    highlight: {
      title: "Profesional seperti klinik, mudah seperti Gojek.",
      desc: "Membawa standar optik profesional langsung ke ruang keluarga Anda."
    },
    items: [
      { title: "Tanpa Perlu Keluar Rumah", desc: "Hemat waktu dan tenaga, kami yang datang ke lokasi Anda." },
      { title: "Tim Profesional & Terlatih", desc: "Pemeriksaan dilakukan oleh optiker bersertifikat resmi." },
      { title: "Cepat & Praktis", desc: "Proses booking mudah via WhatsApp, layanan tepat waktu." },
      { title: "Harga Terjangkau", desc: "Kualitas premium dengan harga yang bersahabat." }
    ]
  },
  testimonials: {
    title: "Apa Kata Mereka?",
    desc: "Cerita pelanggan yang telah merasakan kemudahan VisiGo.",
    items: [
      { name: "Budi Santoso", city: "Tuban", text: "Sangat praktis! Nggak perlu macet-macetan ke mall. Optikernya ramah dan alatnya canggih banget.", avatar: "https://i.pravatar.cc/150?u=budi" },
      { name: "Siti Aminah", city: "Bojonegoro", text: "Pilihan frame-nya banyak dan kekinian. Kacamata diantar tepat waktu dan pas banget dipakai.", avatar: "https://i.pravatar.cc/150?u=siti" },
      { name: "Andi Wijaya", city: "Lamongan", text: "Pelayanan profesional. Penjelasan soal kondisi mata sangat detail. Recommended banget buat yang sibuk.", avatar: "https://i.pravatar.cc/150?u=andi" },
      { name: "Rina Kartika", city: "Rembang", text: "Layanan yang sangat membantu untuk orang tua saya yang sulit bepergian. Terima kasih VisiGo!", avatar: "https://i.pravatar.cc/150?u=rina" },
      { name: "Ahmad Fauzi", city: "Blora", text: "Kualitas lensanya top, pelayanannya cepat. Booking hari ini, besok langsung datang.", avatar: "https://i.pravatar.cc/150?u=ahmad" },
      { name: "Linda Wahyuni", city: "Purwodadi", text: "Suka banget sama konsepnya. Bisa pilih frame sepuasnya di rumah sambil santai.", avatar: "https://i.pravatar.cc/150?u=linda" },
      { name: "Eko Prasetyo", city: "Sragen", text: "Alat periksanya modern banget, hasilnya akurat. Harganya juga bersaing dengan optik besar.", avatar: "https://i.pravatar.cc/150?u=eko" },
      { name: "Maya Sari", city: "Jogjakarta", text: "Solusi buat ibu rumah tangga yang ribet bawa anak ke optik. VisiGo bener-bener penyelamat!", avatar: "https://i.pravatar.cc/150?u=maya" },
      { name: "Deni Ramadhan", city: "Purworejo", text: "Prosesnya nggak ribet, adminnya fast respon. Kacamata jadinya juga cepet.", avatar: "https://i.pravatar.cc/150?u=deni" },
      { name: "Sari Dewi", city: "Gunungkidul", text: "Sangat profesional. Optikernya sabar menjelaskan hasil periksa mata saya. Puas banget!", avatar: "https://i.pravatar.cc/150?u=sari" },
      { name: "Rizky Pratama", city: "Wonogiri", text: "Layanan jemput bola yang sangat efisien. Kualitas frame premium tapi harga tetap masuk akal.", avatar: "https://i.pravatar.cc/150?u=rizky" },
      { name: "Anita Putri", city: "Demak", text: "Sangat membantu buat saya yang punya balita. Periksa mata jadi tenang tanpa harus keluar rumah.", avatar: "https://i.pravatar.cc/150?u=anita" },
      { name: "Hendra Kusuma", city: "Tuban", text: "Alat periksanya benar-benar canggih, hasilnya akurat. Proses pemesanan sampai pengiriman sangat lancar.", avatar: "https://i.pravatar.cc/150?u=hendra" },
      { name: "Diana Lestari", city: "Bojonegoro", text: "Frame-nya stylish banget! Banyak pilihan yang nggak ada di optik biasa. Pelayanannya juara.", avatar: "https://i.pravatar.cc/150?u=diana" },
      { name: "Fajar Siddiq", city: "Lamongan", text: "Solusi cerdas buat periksa mata. Nggak perlu antre, tinggal tunggu di rumah. Mantap VisiGo!", avatar: "https://i.pravatar.cc/150?u=fajar" },
      { name: "Nadia Utami", city: "Rembang", text: "Adminnya sangat membantu and ramah. Kacamata sampai dengan aman dan packing-nya rapi sekali.", avatar: "https://i.pravatar.cc/150?u=nadia" },
      { name: "Bambang Hermawan", city: "Blora", text: "Sangat direkomendasikan! Layanan home service terbaik yang pernah saya coba untuk urusan mata.", avatar: "https://i.pravatar.cc/150?u=bambang" }
    ]
  },
  coverage: {
    title: "Jaringan Besar VisiGo",
    desc: "Didukung oleh 200+ Tim Profesional di berbagai kota. Saat ini kami melayani area Tuban, Bojonegoro, Lamongan, Rembang, Blora, Purwodadi, Sragen, jogjakarta, Purworejo, Gunungkidul, wonogiri, Demak.",
    cities: ["Tuban", "Bojonegoro", "Lamongan", "Rembang", "Blora", "Purwodadi", "Sragen", "Jogjakarta", "Purworejo", "Gunungkidul", "Wonogiri", "Demak"]
  },
  cta: {
    title: "Kesehatan Mata Anda Adalah Prioritas Kami",
    desc: "Jangan tunda lagi. Jadwalkan pemeriksaan mata Anda sekarang dan nikmati layanan optik profesional di rumah."
  },
  googleSheetUrl: import.meta.env.VITE_GOOGLE_SHEET_URL || "https://script.google.com/macros/s/AKfycbyY90n4gAPlFy40xM6-E0c9mPzjzT2tRoczPBcwC92Wq14TIZ1gKujerFXT6AjBTcrU/exec",
  logoUrl: "https://i.ibb.co/FLfp65gD/VISIGO-LOGO.png",
  whatsappNumber: "6285232730855",
  socialLinks: {
    instagram: "https://www.instagram.com/visigo.homeeyecare?igsh=MWt0bGwzYm5xYnB0NA%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/1E7UmGBB3F/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@visigo.homeeyecare?_r=1&_t=ZS-95ATqXT2ThN"
  }
};
