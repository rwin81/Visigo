import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Loader2 } from 'lucide-react';
import { Content } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: Content;
}

export const BookingModal = ({ isOpen, onClose, content }: BookingModalProps) => {
  const [step, setStep] = useState<'selection' | 'booking' | 'order' | 'success'>('selection');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: 'Home Eye Check',
    product: '',
    description: '',
    reference: '',
    branch: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when modal closes
  React.useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(resetForm, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const resetForm = () => {
    setStep('selection');
    setFormData({
      name: '',
      phone: '',
      address: '',
      service: 'Home Eye Check',
      product: '',
      description: '',
      reference: '',
      branch: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const type = step === 'booking' ? 'Booking Layanan' : 'Order Produk';
      
      // 1. Save to Google Sheet if URL is provided
      if (content.googleSheetUrl) {
        await fetch(content.googleSheetUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            type: type,
            timestamp: new Date().toLocaleString('id-ID'),
            source: window.location.hostname
          }),
        });
      }

      // 2. Prepare WhatsApp Message for Admin
      let message = '';
      if (step === 'booking') {
        message = `Halo VisiGo, saya ingin booking layanan:%0A%0ANama: ${formData.name}%0ANo. WA: ${formData.phone}%0AAlamat: ${formData.address}%0ALayanan: ${formData.service}%0A%0AMohon info jadwal yang tersedia. Terima kasih.`;
      } else {
        message = `Halo VisiGo, saya ingin order produk:%0A%0ANama: ${formData.name}%0ANo. WA: ${formData.phone}%0AAlamat: ${formData.address}%0AProduk: ${formData.product}%0AKeterangan: ${formData.description}%0AReferensi: ${formData.reference}%0ACabang: ${formData.branch}%0A%0AMohon info ketersediaan stok. Terima kasih.`;
      }
      
      // 3. Open WhatsApp to Admin
      window.open(`https://wa.me/${content.whatsappNumber}?text=${message}`, '_blank');
      
      // 4. Show Success Step
      setStep('success');
      
      // Auto close after 5 seconds
      setTimeout(() => {
        if (isOpen) onClose();
      }, 5000);

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
                  {step === 'selection' ? 'Pilih Layanan' : step === 'booking' ? 'Booking Layanan' : step === 'order' ? 'Order Produk' : 'Booking Berhasil!'}
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
                </div>
              ) : step === 'success' ? (
                <div className="py-8 text-center">
                  <div className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Terima Kasih, {formData.name}!</h4>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    Booking Anda telah kami terima. Tim VisiGo akan segera menghubungi Anda melalui WhatsApp untuk konfirmasi jadwal.
                  </p>
                  <button 
                    onClick={onClose}
                    className="w-full py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                  >
                    Tutup
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                      placeholder="08xx xxxx xxxx" 
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
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Referensi</label>
                          <input 
                            type="text" 
                            value={formData.reference}
                            onChange={(e) => setFormData({...formData, reference: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                            placeholder="IG / FB / Teman" 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Cabang</label>
                          <input 
                            type="text" 
                            value={formData.branch}
                            onChange={(e) => setFormData({...formData, branch: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all" 
                            placeholder="Lokasi Anda" 
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${step === 'booking' ? 'bg-brand-blue' : 'bg-brand-green'} hover:opacity-90 disabled:bg-slate-400 text-white py-4 rounded-xl font-bold mt-4 transition-all flex items-center justify-center gap-3 shadow-lg`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <img src="https://img.icons8.com/color/96/whatsapp.png" alt="WhatsApp" className="w-8 h-8 scale-110" referrerPolicy="no-referrer" />
                        Kirim via WhatsApp
                      </>
                    )}
                  </button>
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
