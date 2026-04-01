import { Content } from '../types';

export const defaultContent: Content = {
  hero: {
    badge: "Layanan Mata Era Baru",
    title: "Cek Mata Tanpa",
    titleHighlight: "Keluar Rumah",
    desc: "VisiGo Home Eye Care Service – layanan profesional langsung ke rumah Anda.",
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
      "https://images.unsplash.com/photo-1580281658626-ee379f3cce93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
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
      { name: "Budi Santoso", city: "Surabaya", text: "Sangat praktis! Nggak perlu macet-macetan ke mall. Optikernya ramah dan alatnya canggih banget.", avatar: "https://i.pravatar.cc/150?u=budi" },
      { name: "Siti Aminah", city: "Sidoarjo", text: "Pilihan frame-nya banyak dan kekinian. Kacamata diantar tepat waktu dan pas banget dipakai.", avatar: "https://i.pravatar.cc/150?u=siti" },
      { name: "Andi Wijaya", city: "Gresik", text: "Pelayanan profesional. Penjelasan soal kondisi mata sangat detail. Recommended banget buat yang sibuk.", avatar: "https://i.pravatar.cc/150?u=andi" },
      { name: "Rina Kartika", city: "Malang", text: "Layanan yang sangat membantu untuk orang tua saya yang sulit bepergian. Terima kasih VisiGo!", avatar: "https://i.pravatar.cc/150?u=rina" },
      { name: "Ahmad Fauzi", city: "Jakarta", text: "Kualitas lensanya top, pelayanannya cepat. Booking hari ini, besok langsung datang.", avatar: "https://i.pravatar.cc/150?u=ahmad" },
      { name: "Linda Wahyuni", city: "Bandung", text: "Suka banget sama konsepnya. Bisa pilih frame sepuasnya di rumah sambil santai.", avatar: "https://i.pravatar.cc/150?u=linda" },
      { name: "Eko Prasetyo", city: "Semarang", text: "Alat periksanya modern banget, hasilnya akurat. Harganya juga bersaing dengan optik besar.", avatar: "https://i.pravatar.cc/150?u=eko" },
      { name: "Maya Sari", city: "Yogyakarta", text: "Solusi buat ibu rumah tangga yang ribet bawa anak ke optik. VisiGo bener-bener penyelamat!", avatar: "https://i.pravatar.cc/150?u=maya" },
      { name: "Deni Ramadhan", city: "Solo", text: "Prosesnya nggak ribet, adminnya fast respon. Kacamata jadinya juga cepet.", avatar: "https://i.pravatar.cc/150?u=deni" },
      { name: "Sari Dewi", city: "Denpasar", text: "Sangat profesional. Optikernya sabar menjelaskan hasil periksa mata saya. Puas banget!", avatar: "https://i.pravatar.cc/150?u=sari" },
      { name: "Rizky Pratama", city: "Medan", text: "Layanan jemput bola yang sangat efisien. Kualitas frame premium tapi harga tetap masuk akal.", avatar: "https://i.pravatar.cc/150?u=rizky" },
      { name: "Anita Putri", city: "Palembang", text: "Sangat membantu buat saya yang punya balita. Periksa mata jadi tenang tanpa harus keluar rumah.", avatar: "https://i.pravatar.cc/150?u=anita" },
      { name: "Hendra Kusuma", city: "Makassar", text: "Alat periksanya benar-benar canggih, hasilnya akurat. Proses pemesanan sampai pengiriman sangat lancar.", avatar: "https://i.pravatar.cc/150?u=hendra" },
      { name: "Diana Lestari", city: "Balikpapan", text: "Frame-nya stylish banget! Banyak pilihan yang nggak ada di optik biasa. Pelayanannya juara.", avatar: "https://i.pravatar.cc/150?u=diana" },
      { name: "Fajar Siddiq", city: "Banjarmasin", text: "Solusi cerdas buat periksa mata. Nggak perlu antre, tinggal tunggu di rumah. Mantap VisiGo!", avatar: "https://i.pravatar.cc/150?u=fajar" },
      { name: "Nadia Utami", city: "Manado", text: "Adminnya sangat membantu dan ramah. Kacamata sampai dengan aman dan packing-nya rapi sekali.", avatar: "https://i.pravatar.cc/150?u=nadia" },
      { name: "Bambang Hermawan", city: "Pontianak", text: "Sangat direkomendasikan! Layanan home service terbaik yang pernah saya coba untuk urusan mata.", avatar: "https://i.pravatar.cc/150?u=bambang" }
    ]
  },
  coverage: {
    title: "Area Layanan VisiGo",
    desc: "Saat ini kami melayani area Surabaya, Sidoarjo, dan Gresik. Kami akan segera hadir di kota-kota lainnya!",
    cities: ["Surabaya", "Sidoarjo", "Gresik"]
  },
  cta: {
    title: "Kesehatan Mata Anda Adalah Prioritas Kami",
    desc: "Jangan tunda lagi. Jadwalkan pemeriksaan mata Anda sekarang dan nikmati layanan optik profesional di rumah."
  },
  googleSheetUrl: "",
  logoUrl: "https://i.ibb.co/FLfp65gD/VISIGO-LOGO.png",
  whatsappNumber: "6281234567890",
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com"
  }
};
