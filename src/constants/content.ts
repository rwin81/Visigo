import { Content } from '../types';

export const defaultContent: Content = {
  hero: {
    badge: "1000+ Pelanggan Terbantu",
    title: "Cek Mata Tanpa",
    titleHighlight: "Keluar Rumah",
    desc: "Praktis, cepat, dan akurat — tanpa antre di optik. Tim Profesional VisiGo Datang ke Lokasi Anda.",
    image: "https://i.ibb.co.com/JwSFKFRL/SPG-JKT.png",
    imagePosition: "center"
  },
  problems: {
    title: "Sering Mengalami Ini?",
    desc: "Bisa jadi minus atau silinder bertambah tanpa disadari. Jangan biarkan kesehatan mata Anda terabaikan.",
    items: [
      { title: "Mata Cepat Lelah", desc: "Terutama saat melihat layar HP atau laptop dalam waktu lama." },
      { title: "Sering Pusing", desc: "Pusing tanpa sebab yang jelas seringkali dipicu oleh gangguan penglihatan." },
      { title: "Pandangan Buram", desc: "Mulai kesulitan melihat objek jauh atau tulisan kecil dengan jelas." }
    ],
    solution: {
      title: "VisiGo Hadir Sebagai Solusi Modern 👇",
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
    desc: "Simple & Cepat. Hanya 5 langkah mudah.",
    items: [
      { title: "1. Chat WhatsApp", desc: "Hubungi kami untuk konsultasi awal." },
      { title: "2. Pilih Jadwal", desc: "Tentukan waktu kunjungan yang paling nyaman." },
      { title: "3. Tim Datang", desc: "Tim ahli kami tiba di lokasi Anda tepat waktu." },
      { title: "4. Pemeriksaan Mata", desc: "Pemeriksaan profesional dengan alat lengkap." },
      { title: "5. Kacamata Dikirim", desc: "Pesanan selesai dan diantar langsung ke tangan Anda." }
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
      { title: "Tim Datang ke Rumah/Kantor", desc: "Hemat waktu dan tenaga, kami yang datang ke lokasi Anda." },
      { title: "Pemeriksaan Profesional", desc: "Pemeriksaan dilakukan oleh optiker bersertifikat resmi." },
      { title: "Bisa Langsung Pilih Kacamata", desc: "Bawa ratusan pilihan frame langsung ke tempat Anda." },
      { title: "Praktis & Hemat Waktu", desc: "Proses booking mudah via WhatsApp, layanan tepat waktu." }
    ]
  },
  testimonials: {
    title: "Apa Kata Mereka?",
    desc: "Sudah dipercaya 1000+ pelanggan untuk kesehatan mata mereka.",
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
  googleSheetUrl: "https://script.google.com/macros/s/AKfycbz8PIXZuyQOfLhCXgmhP-MxjWdRwQB9dv6Yii6eY3Brzyldvt4jsU1_KnPrpvgwKqpCwg/exec",
  logoUrl: "https://i.ibb.co.com/WNvxR9Kw/VISIGO-LOGO.png",
  whatsappNumber: "6281296921892",
  socialLinks: {
    instagram: "https://www.instagram.com/visigo.homeeyecare?igsh=MWt0bGwzYm5xYnB0NA%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/share/1E7UmGBB3F/?mibextid=wwXIfr",
    tiktok: "https://www.tiktok.com/@visigo.homeeyecare?_r=1&_t=ZS-95ATqXT2ThN"
  }
};
