import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Loader2 } from 'lucide-react';
import { Content } from '../types';

const compressImage = (file: File, maxWidth = 1200, maxHeight = 1200, quality = 0.75): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve(dataUrl);
        } else {
          resolve(event.target?.result as string);
        }
      };
    };
    reader.onerror = () => {
      const fallbackReader = new FileReader();
      fallbackReader.onloadend = () => resolve(fallbackReader.result as string);
      fallbackReader.readAsDataURL(file);
    };
  });
};

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: Content;
}

export const BookingModal = ({ isOpen, onClose, content }: BookingModalProps) => {
  const [step, setStep] = useState<'selection' | 'booking' | 'order' | 'followup' | 'idcard' | 'success'>('selection');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: 'Home Eye Check',
    product: '',
    description: '',
    reference: '',
    branch: '',
    teamReference: '',
    teamArea: '',
    followupStatus: 'Proses',
    affiliateName: '',
    affiliateArea: '',
    nik: '',
    domicile: ''
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePayload, setFilePayload] = useState<{ base64: string; type: string; name: string } | null>(null);
  const [isFileProcessing, setIsFileProcessing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedWaLink, setGeneratedWaLink] = useState('');

  // Reset form when modal closes
  React.useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(resetForm, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const resetForm = () => {
    setStep('selection');
    setGeneratedWaLink('');
    setSelectedFile(null);
    setFilePayload(null);
    setIsFileProcessing(false);
    setFormData({
      name: '',
      phone: '',
      address: '',
      service: 'Home Eye Check',
      product: '',
      description: '',
      reference: '',
      branch: '',
      teamReference: '',
      teamArea: '',
      followupStatus: 'Proses',
      affiliateName: '',
      affiliateArea: '',
      nik: '',
      domicile: ''
    });
  };

  const handleFileChange = async (file: File | null) => {
    setSelectedFile(file);
    if (!file) {
      setFilePayload(null);
      return;
    }

    setIsFileProcessing(true);
    try {
      let base64 = '';
      if (file.type.startsWith('image/')) {
        try {
          base64 = await compressImage(file, 1200, 1200, 0.75);
        } catch (compressError) {
          console.error("Image compression failed, falling back to standard read:", compressError);
          base64 = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        }
      } else {
        base64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      }

      const base64Data = base64.includes(',') ? base64.split(',')[1] : base64;
      setFilePayload({
        base64: base64Data,
        type: file.type.startsWith('image/') ? 'image/jpeg' : file.type,
        name: file.type.startsWith('image/') 
          ? file.name.replace(/\.[^/.]+$/, "") + ".jpg" 
          : file.name
      });
    } catch (err) {
      console.error("Error reading/processing file:", err);
    } finally {
      setIsFileProcessing(false);
    }
  };

  const formatWhatsAppLink = (phone: string) => {
    // Remove all non-digit characters except +
    let cleaned = phone.replace(/[^\d+]/g, '');
    
    // Handle +62 or 62 or 08
    if (cleaned.startsWith('+')) {
      cleaned = cleaned.substring(1);
    }
    
    if (cleaned.startsWith('0')) {
      cleaned = '62' + cleaned.substring(1);
    }
    
    if (!cleaned.startsWith('62') && cleaned.length >= 9) {
      cleaned = '62' + cleaned;
    }
    
    return `https://wa.me/${cleaned}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const type = step === 'booking' ? 'Booking Layanan' : step === 'followup' ? 'Follow Up' : step === 'idcard' ? 'Registrasi ID Card' : 'Order Produk';
      const waBase = formatWhatsAppLink(formData.phone);
      const cleanedPhone = waBase.split('/').pop();
      
      // 1. Prepare WhatsApp Message for Admin (Customer sends to Admin)
      let messageText = '';
      
      if (step === 'booking') {
        messageText = `*BOOKING LAYANAN VISIGO*\n\n` +
                      `*Nama:* ${formData.name}\n` +
                      `*No. WA:* ${formData.phone}\n` +
                      `*Alamat:* ${formData.address}\n` +
                      `*Layanan:* ${formData.service}\n` +
                      `*Affiliate:* ${formData.affiliateName || '-'}\n` +
                      `*Area:* ${formData.affiliateArea || '-'}\n\n` +
                      `Mohon info jadwal yang tersedia. Terima kasih!`;
      } else if (step === 'idcard') {
        messageText = `*PENGAJUAN ID CARD VISIGO*\n\n` +
                      `*Nama Lengkap:* ${formData.name}\n` +
                      `*NIK:* ${formData.nik}\n` +
                      `*No. HP:* ${formData.phone}\n` +
                      `*Domisili:* ${formData.domicile}\n` +
                      `*Cabang:* ${formData.branch}\n\n` +
                      `Mohon proses verifikasi ID Card saya. Terima kasih!`;
      } else if (step === 'followup') {
        messageText = `*FOLLOW UP CUSTOMER VISIGO*\n\n` +
                      `*Nama:* ${formData.name}\n` +
                      `*No. WA:* ${formData.phone}\n` +
                      `*Alamat:* ${formData.address}\n` +
                      `*Petugas:* ${formData.teamReference}\n` +
                      `*Cabang:* ${formData.teamArea}\n` +
                      `*Status:* ${formData.followupStatus}\n\n` +
                      `Data followup telah diperbarui.`;
      } else {
        messageText = `*ORDER PRODUK VISIGO*\n\n` +
                      `*Nama:* ${formData.name}\n` +
                      `*No. WA:* ${formData.phone}\n` +
                      `*Alamat:* ${formData.address}\n` +
                      `*Produk:* ${formData.product}\n` +
                      `*Keterangan:* ${formData.description || '-'}\n` +
                      `*Petugas:* ${formData.reference || '-'}\n` +
                      `*Cabang:* ${formData.branch || '-'}\n\n` +
                      `Mohon info ketersediaan stok. Terima kasih!`;
      }
      
      const finalWaUrl = `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
      setGeneratedWaLink(finalWaUrl);
      
      // Manual URL Encoding for Emojis to ensure they survive the transport to Google Sheets
      const waveEnc = "%F0%9F%91%8B";
      const glassesEnc = "%F0%9F%91%93";
      const calendarEnc = "%F0%9F%93%85";
      const sparklesEnc = "%E2%9C%A8";
      const heartEnc = "%F0%9F%92%96";
      
      const encodeText = (text: string) => encodeURIComponent(text).replace(/%20/g, '+');
      
      // Initial Confirmation Link
      let waLinkForSheet = '';
      if (step === 'booking') {
        const text = `https://api.whatsapp.com/send?phone=${cleanedPhone}&text=Halo+kak+${encodeText(formData.name)},+saya+Admin+VisiGo+${waveEnc}+Terima+kasih+sudah+booking+layanan+${encodeText(formData.service)}+${glassesEnc}+Kapan+waktu+yang+pas+untuk+kami+kunjungi?+${calendarEnc}`;
        waLinkForSheet = `=HYPERLINK("${text}", "Chat ${formData.name}")`;
      } else {
        const text = `https://api.whatsapp.com/send?phone=${cleanedPhone}&text=Halo+kak+${encodeText(formData.name)},+saya+Admin+VisiGo+${waveEnc}+Terima+kasih+sudah+order+${encodeText(formData.product)}+${glassesEnc}+Pesanan+Anda+sedang+kami+proses+ya.+${sparklesEnc}`;
        waLinkForSheet = `=HYPERLINK("${text}", "Chat ${formData.name}")`;
      }

      // Follow-up Reminder Link (3 months later)
      const followUpMsg = `Halo+kak+${encodeText(formData.name)},+apa+kabar?+${waveEnc}+Sudah+3+bulan+nih+sejak+kunjungan/order+terakhir+di+VisiGo.+Yuk+jadwalkan+cek+mata+rutin+lagi+supaya+mata+tetap+sehat+dan+nyaman+${glassesEnc}+${heartEnc}`;
      const waFollowUpLink = `=HYPERLINK("https://api.whatsapp.com/send?phone=${cleanedPhone}&text=${followUpMsg}", "Kirim Pengingat")`;

      const nextDate = new Date();
      nextDate.setMonth(nextDate.getMonth() + 3);
      const nextCheckDateStr = nextDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
      
      // 2. DISPATCH Google Sheet Post request first
      if (content.googleSheetUrl) {
        const payload = {
          timestamp: new Date().toLocaleString('id-ID'),
          name: formData.name,
          phone_raw: formData.phone,
          phone: waLinkForSheet,
          address: formData.address,
          type: type,
          service_product: step === 'booking' ? (formData.service || "-") : (formData.product || "-"),
          service: formData.service || "-",
          product: formData.product || "-",
          description: formData.description || '-',
          reference: formData.reference || '-',
          branch: formData.branch || '-',
          team_reference: formData.teamReference || '-',
          team_area: formData.teamArea || '-',
          affiliate_name: formData.affiliateName || '-',
          affiliate_area: formData.affiliateArea || '-',
          nik: formData.nik || '-',
          domicile: formData.domicile || '-',
          followup_status_value: formData.followupStatus || 'Proses',
          whatsapp_link: waLinkForSheet,
          wa_followup: waFollowUpLink,
          next_check_date: nextCheckDateStr,
          followup_status: "Belum Diingatkan",
          file: filePayload 
        };

        try {
          console.log("Sending data to Google Sheet:", payload);
          // Keepalive is true where possible, but since the raw base64 could exceed 64KB, we do a normal fetch first
          fetch(content.googleSheetUrl, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: {
              'Content-Type': 'text/plain',
            },
            body: JSON.stringify(payload),
          })
          .then(() => console.log("Data sent to Google Sheet (no-cors mode)"))
          .catch(err => console.error("Sheet sync background error:", err));
        } catch (sheetError) {
          console.error('Google Sheet sync failed to initiate:', sheetError);
        }
      }

      // 3. IMMEDIATELY Redirect / Open WhatsApp in a synchronous tick
      // This is now 100% compliant with Safari & Chrome popup blockers!
      window.open(finalWaUrl, '_blank');
      
      // 4. Show Success Step
      setStep('success');
      
    } catch (error) {
      console.error("Error submitting:", error);
      alert("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                {step !== 'selection' && step !== 'success' && (
                  <button 
                    onClick={() => setStep('selection')}
                    className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                )}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {step === 'selection' ? 'Pilih Layanan' : step === 'booking' ? 'Booking Layanan' : step === 'order' ? 'Order Produk' : step === 'idcard' ? 'Form ID Card Tim' : 'Berhasil!'}
                </h3>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 max-h-[80vh] overflow-y-auto">
              {step === 'selection' ? (
                <div className="space-y-4 py-4">
                  <button 
                    onClick={() => setStep('booking')}
                    className="w-full p-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-brand-blue dark:hover:border-brand-blue bg-slate-50 dark:bg-slate-800/50 transition-all group text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-brand-blue/10 p-3 rounded-xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">Booking Layanan</h4>
                        <p className="text-sm text-slate-500">Cek mata di rumah atau screening</p>
                      </div>
                    </div>
                  </button>

                  <button 
                    onClick={() => setStep('order')}
                    className="w-full p-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-brand-green dark:hover:border-brand-green bg-slate-50 dark:bg-slate-800/50 transition-all group text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-brand-green/10 p-3 rounded-xl text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">Order Produk</h4>
                        <p className="text-sm text-slate-500">Pesan kacamata, lensa, atau frame</p>
                      </div>
                    </div>
                  </button>

                  <button 
                    onClick={() => setStep('followup')}
                    className="w-full p-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-brand-cyan dark:hover:border-brand-cyan bg-slate-50 dark:bg-slate-800/50 transition-all group text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-brand-cyan/10 p-3 rounded-xl text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">Follow Up</h4>
                        <p className="text-sm text-slate-500">Laporan tindak lanjut tim lapangan</p>
                      </div>
                    </div>
                  </button>

                  <button 
                    onClick={() => setStep('idcard')}
                    className="w-full p-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-brand-blue dark:hover:border-brand-blue bg-slate-50 dark:bg-slate-800/50 transition-all group text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-brand-blue/10 p-3 rounded-xl text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 014 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.333 0 4 1 4 3" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">ID Card Tim VisiGo</h4>
                        <p className="text-sm text-slate-500">Verifikasi & Registrasi Petugas</p>
                      </div>
                    </div>
                  </button>
                </div>
              ) : step === 'success' ? (
                <div className="py-8 text-center">
                  <div className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Berhasil Terkirim! ✨</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    Data Anda telah otomatis tersimpan di sistem kami dan WhatsApp admin sedang dibuka. 🚀
                  </p>
                  
                  <div className="space-y-3">
                    <button 
                      onClick={onClose}
                      className="w-full py-4 bg-brand-blue text-white rounded-xl font-bold hover:opacity-90 transition-all shadow-lg"
                    >
                      Selesai
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {step === 'idcard' ? (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nama Lengkap</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                          placeholder="Nama lengkap sesuai KTP" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">NIK</label>
                        <input 
                          required
                          type="text" 
                          pattern="[0-9]*"
                          value={formData.nik}
                          onChange={(e) => setFormData({...formData, nik: e.target.value.replace(/\D/g, '')})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                          placeholder="Nomor Induk Kependudukan" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nomor HP/WA</label>
                        <input 
                          required
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                          placeholder="0812..." 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Domisili</label>
                        <input 
                          required
                          type="text" 
                          value={formData.domicile}
                          onChange={(e) => setFormData({...formData, domicile: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                          placeholder="Kota / Kabupaten" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Cabang VisiGo</label>
                        <select 
                          value={formData.branch}
                          onChange={(e) => setFormData({...formData, branch: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                        >
                          <option value="">Pilih Cabang</option>
                          {content.coverage.cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Upload KTP</label>
                        <div className="relative">
                          <input 
                            required
                            type="file" 
                            accept="image/*"
                            onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)}
                            className="hidden" 
                            id="ktp-upload"
                          />
                          <label 
                            htmlFor="ktp-upload"
                            className="w-full px-4 py-3 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:border-brand-blue hover:text-brand-blue transition-all cursor-pointer flex items-center justify-center gap-2"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            {isFileProcessing ? "Memproses Berkas..." : (selectedFile ? selectedFile.name : "Foto KTP Jelas")}
                          </label>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nama Lengkap</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                          placeholder="Masukkan nama Anda" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nomor WhatsApp</label>
                        <input 
                          required
                          type="tel" 
                          pattern="[0-9]*"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                          placeholder="Contoh: 08123456789" 
                          title="Masukkan nomor WhatsApp yang valid (hanya angka)"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Alamat Lengkap</label>
                        <textarea 
                          required
                          value={formData.address}
                          onChange={(e) => setFormData({...formData, address: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                          placeholder="Masukkan alamat lengkap Anda"
                          rows={2}
                        />
                      </div>

                      {step === 'booking' ? (
                    <>
                      <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Pilih Layanan</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                      >
                        <option>Home Eye Check</option>
                        <option>Kacamata Minus & Plus</option>
                        <option>Screening Perusahaan</option>
                        <option>Screening Sekolah</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nama affiliate</label>
                        <input 
                          type="text" 
                          value={formData.affiliateName}
                          onChange={(e) => setFormData({...formData, affiliateName: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                          placeholder="Nama affiliate" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">area</label>
                        <select 
                          value={formData.affiliateArea}
                          onChange={(e) => setFormData({...formData, affiliateArea: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                        >
                          <option value="">Pilih Area</option>
                          {content.coverage.cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </>
                ) : step === 'followup' ? (
                  <>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Petugas Chek mata</label>
                        <input 
                          required
                          type="text" 
                          value={formData.teamReference}
                          onChange={(e) => setFormData({...formData, teamReference: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-cyan outline-none transition-all" 
                          placeholder="Nama petugas" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">kantor cabang</label>
                        <select 
                          required
                          value={formData.teamArea}
                          onChange={(e) => setFormData({...formData, teamArea: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-cyan outline-none transition-all"
                        >
                          <option value="">Pilih Cabang</option>
                          {content.coverage.cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Status Follow Up</label>
                        <select 
                          value={formData.followupStatus}
                          onChange={(e) => setFormData({...formData, followupStatus: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-cyan outline-none transition-all"
                        >
                          <option>Proses</option>
                          <option>Done</option>
                          <option>Pending</option>
                          <option>Cancel</option>
                        </select>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Produk yang Dipesan</label>
                        <input 
                          required
                          type="text" 
                          value={formData.product}
                          onChange={(e) => setFormData({...formData, product: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                          placeholder="Contoh: Kacamata Anti Radiasi" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Keterangan (Opsional)</label>
                        <textarea 
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                          placeholder="Tambahkan catatan jika ada"
                          rows={2}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Foto Resep (Opsional)</label>
                        <div className="relative">
                          <input 
                            type="file" 
                            accept="image/*"
                            onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)}
                            className="hidden" 
                            id="prescription-upload"
                          />
                          <label 
                            htmlFor="prescription-upload"
                            className="w-full px-4 py-3 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:border-brand-green hover:text-brand-green transition-all cursor-pointer flex items-center justify-center gap-2"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            {isFileProcessing ? "Memproses Berkas..." : (selectedFile ? selectedFile.name : "Upload Foto Resep")}
                          </label>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Petugas check mata</label>
                          <input 
                            type="text" 
                            value={formData.reference}
                            onChange={(e) => setFormData({...formData, reference: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                            placeholder="Nama petugas" 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">kantor cabang</label>
                          <select 
                            value={formData.branch}
                            onChange={(e) => setFormData({...formData, branch: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                          >
                            <option value="">Pilih Cabang</option>
                            {content.coverage.cities.map(city => (
                              <option key={city} value={city}>{city}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}

              <button 
                type="submit"
                disabled={isSubmitting || isFileProcessing}
                className={`w-full ${step === 'booking' ? 'bg-brand-blue' : step === 'followup' ? 'bg-brand-cyan' : 'bg-brand-green'} hover:opacity-90 disabled:bg-slate-400 text-white py-4 rounded-xl font-bold mt-4 transition-all flex items-center justify-center gap-3 shadow-lg`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Mengirim...
                  </>
                ) : isFileProcessing ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Memproses Foto...
                  </>
                ) : (
                  <>
                    <img src="https://img.icons8.com/color/96/whatsapp.png" alt="WhatsApp" className="w-8 h-8 scale-110" referrerPolicy="no-referrer" loading="lazy" />
                    Kirim via WhatsApp
                  </>
                )}
              </button>

                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Malas isi form? Chat admin langsung aja:</p>
                    <a 
                      href={`https://wa.me/${content.whatsappNumber}?text=Halo VisiGo, saya ingin tanya-tanya tentang layanan/produk.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-brand-blue dark:text-brand-cyan font-bold hover:underline"
                    >
                      <img src="https://img.icons8.com/color/96/whatsapp.png" alt="WhatsApp" className="w-5 h-5" referrerPolicy="no-referrer" loading="lazy" />
                      Chat Admin Sekarang
                    </a>
                  </div>
                </form>
              )}
              <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 mt-4">
                Data Anda akan tersimpan secara aman dan kami akan segera menghubungi Anda.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
