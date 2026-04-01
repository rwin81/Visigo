import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Edit3, Type, Image as ImageIcon, CheckCircle2, Save, Database } from 'lucide-react';
import { Content } from '../types';
import { defaultContent } from '../constants/content';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  content: Content;
  setContent: (val: Content) => void;
  onSave: (val: Content) => void;
}

export const AdminPanel = ({ isOpen, onClose, content, setContent, onSave }: AdminPanelProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="bg-brand-blue p-2 rounded-lg text-white">
                  <Edit3 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Admin Panel - Edit Konten</h3>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-8">
                {/* Hero Section Edit */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Type className="w-5 h-5 text-brand-blue" />
                    Hero Section
                  </h4>
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Badge Text</label>
                      <input 
                        type="text" 
                        value={content.hero.badge}
                        onChange={(e) => setContent({...content, hero: {...content.hero, badge: e.target.value}})}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title (Baris 1)</label>
                        <input 
                          type="text" 
                          value={content.hero.title}
                          onChange={(e) => setContent({...content, hero: {...content.hero, title: e.target.value}})}
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title Highlight (Baris 2)</label>
                        <input 
                          type="text" 
                          value={content.hero.titleHighlight}
                          onChange={(e) => setContent({...content, hero: {...content.hero, titleHighlight: e.target.value}})}
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Deskripsi</label>
                      <textarea 
                        value={content.hero.desc}
                        onChange={(e) => setContent({...content, hero: {...content.hero, desc: e.target.value}})}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                        rows={2}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-2">
                        <ImageIcon className="w-4 h-4" />
                        URL Gambar Hero
                      </label>
                      <input 
                        type="text" 
                        value={content.hero.image}
                        onChange={(e) => setContent({...content, hero: {...content.hero, image: e.target.value}})}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                        placeholder="https://example.com/image.jpg"
                      />
                      <p className="text-[10px] text-slate-500 mt-1 italic">
                        *Gunakan "Direct Link" (berakhiran .jpg, .png, .webp). Jangan gunakan link halaman web.
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-2">
                        <ImageIcon className="w-4 h-4" />
                        Posisi Gambar (Atas/Bawah/Tengah)
                      </label>
                      <div className="flex gap-2">
                        <select 
                          value={content.hero.imagePosition || "center"}
                          onChange={(e) => setContent({...content, hero: {...content.hero, imagePosition: e.target.value}})}
                          className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
                        >
                          <option value="center">Tengah (Default)</option>
                          <option value="top">Atas</option>
                          <option value="bottom">Bawah</option>
                          <option value="left">Kiri</option>
                          <option value="right">Kanan</option>
                          <option value="custom">Custom (Isi manual)</option>
                        </select>
                        <input 
                          type="text" 
                          value={content.hero.imagePosition || ""}
                          onChange={(e) => setContent({...content, hero: {...content.hero, imagePosition: e.target.value}})}
                          className="flex-1 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm" 
                          placeholder="Contoh: center 20% atau top 10px"
                        />
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1 italic">
                        *Gunakan 'top', 'bottom', 'center', atau nilai persentase (misal: center 20%) untuk geser ke atas/bawah.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Why Section Edit */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Type className="w-5 h-5 text-brand-blue" />
                    Why VisiGo Section
                  </h4>
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title</label>
                      <input 
                        type="text" 
                        value={content.why.title}
                        onChange={(e) => setContent({...content, why: {...content.why, title: e.target.value}})}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Deskripsi</label>
                      <textarea 
                        value={content.why.desc}
                        onChange={(e) => setContent({...content, why: {...content.why, desc: e.target.value}})}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                        rows={2}
                      />
                    </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-2">
                            <ImageIcon className="w-4 h-4" /> Gambar 1
                          </label>
                          <input 
                            type="text" 
                            value={content.why.images[0]}
                            onChange={(e) => {
                              const newImages = [...content.why.images];
                              newImages[0] = e.target.value;
                              setContent({...content, why: {...content.why, images: newImages}});
                            }}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm mb-2" 
                          />
                          <input 
                            type="text" 
                            value={content.why.imagePositions?.[0] || ""}
                            onChange={(e) => {
                              const newPositions = [...(content.why.imagePositions || ["center", "center", "center"])];
                              newPositions[0] = e.target.value;
                              setContent({...content, why: {...content.why, imagePositions: newPositions}});
                            }}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs" 
                            placeholder="Posisi (misal: top atau center 20%)"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-2">
                            <ImageIcon className="w-4 h-4" /> Gambar 2
                          </label>
                          <input 
                            type="text" 
                            value={content.why.images[1]}
                            onChange={(e) => {
                              const newImages = [...content.why.images];
                              newImages[1] = e.target.value;
                              setContent({...content, why: {...content.why, images: newImages}});
                            }}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm mb-2" 
                          />
                          <input 
                            type="text" 
                            value={content.why.imagePositions?.[1] || ""}
                            onChange={(e) => {
                              const newPositions = [...(content.why.imagePositions || ["center", "center", "center"])];
                              newPositions[1] = e.target.value;
                              setContent({...content, why: {...content.why, imagePositions: newPositions}});
                            }}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs" 
                            placeholder="Posisi (misal: top atau center 20%)"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-2">
                            <ImageIcon className="w-4 h-4" /> Gambar 3
                          </label>
                          <input 
                            type="text" 
                            value={content.why.images[2]}
                            onChange={(e) => {
                              const newImages = [...content.why.images];
                              newImages[2] = e.target.value;
                              setContent({...content, why: {...content.why, images: newImages}});
                            }}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm mb-2" 
                          />
                          <input 
                            type="text" 
                            value={content.why.imagePositions?.[2] || ""}
                            onChange={(e) => {
                              const newPositions = [...(content.why.imagePositions || ["center", "center", "center"])];
                              newPositions[2] = e.target.value;
                              setContent({...content, why: {...content.why, imagePositions: newPositions}});
                            }}
                            className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs" 
                            placeholder="Posisi (misal: top atau center 20%)"
                          />
                        </div>
                      </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Highlight Title</label>
                        <input 
                          type="text" 
                          value={content.why.highlight.title}
                          onChange={(e) => setContent({...content, why: {...content.why, highlight: {...content.why.highlight, title: e.target.value}}})}
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Highlight Deskripsi</label>
                        <input 
                          type="text" 
                          value={content.why.highlight.desc}
                          onChange={(e) => setContent({...content, why: {...content.why, highlight: {...content.why.highlight, desc: e.target.value}}})}
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonials Section Edit */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Type className="w-5 h-5 text-brand-blue" />
                    Testimonials Section
                  </h4>
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title</label>
                      <input 
                        type="text" 
                        value={content.testimonials.title}
                        onChange={(e) => setContent({...content, testimonials: {...content.testimonials, title: e.target.value}})}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Deskripsi</label>
                      <textarea 
                        value={content.testimonials.desc}
                        onChange={(e) => setContent({...content, testimonials: {...content.testimonials, desc: e.target.value}})}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                        rows={2}
                      />
                    </div>
                    <div className="space-y-4 mt-4">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Daftar Testimoni ({content.testimonials.items.length})</label>
                      {content.testimonials.items.map((item, index) => (
                        <div key={index} className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">Testimoni #{index + 1}</span>
                            <button 
                              onClick={() => {
                                const newItems = content.testimonials.items.filter((_, i) => i !== index);
                                setContent({...content, testimonials: {...content.testimonials, items: newItems}});
                              }}
                              className="text-red-500 hover:text-red-700 text-xs font-medium"
                            >
                              Hapus
                            </button>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <input 
                              type="text" 
                              value={item.name}
                              onChange={(e) => {
                                const newItems = [...content.testimonials.items];
                                newItems[index] = {...newItems[index], name: e.target.value};
                                setContent({...content, testimonials: {...content.testimonials, items: newItems}});
                              }}
                              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-sm" 
                              placeholder="Nama"
                            />
                            <input 
                              type="text" 
                              value={item.city}
                              onChange={(e) => {
                                const newItems = [...content.testimonials.items];
                                newItems[index] = {...newItems[index], city: e.target.value};
                                setContent({...content, testimonials: {...content.testimonials, items: newItems}});
                              }}
                              className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-sm" 
                              placeholder="Kota"
                            />
                          </div>
                          <textarea 
                            value={item.text}
                            onChange={(e) => {
                              const newItems = [...content.testimonials.items];
                              newItems[index] = {...newItems[index], text: e.target.value};
                              setContent({...content, testimonials: {...content.testimonials, items: newItems}});
                            }}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-sm" 
                            rows={2}
                            placeholder="Isi testimoni"
                          />
                          <input 
                            type="text" 
                            value={item.avatar}
                            onChange={(e) => {
                              const newItems = [...content.testimonials.items];
                              newItems[index] = {...newItems[index], avatar: e.target.value};
                              setContent({...content, testimonials: {...content.testimonials, items: newItems}});
                            }}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-xs" 
                            placeholder="URL Avatar (Opsional)"
                          />
                        </div>
                      ))}
                      <button 
                        onClick={() => {
                          const newItem = { name: "", city: "", text: "", avatar: `https://i.pravatar.cc/150?u=${Math.random()}` };
                          setContent({...content, testimonials: {...content.testimonials, items: [...content.testimonials.items, newItem]}});
                        }}
                        className="w-full py-2 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-slate-500 hover:border-brand-blue hover:text-brand-blue transition-all text-sm font-medium"
                      >
                        + Tambah Testimoni Baru
                      </button>
                    </div>
                  </div>
                </div>

                {/* Coverage Section Edit */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Type className="w-5 h-5 text-brand-blue" />
                    Area Layanan Section
                  </h4>
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title</label>
                      <input 
                        type="text" 
                        value={content.coverage.title}
                        onChange={(e) => setContent({...content, coverage: {...content.coverage, title: e.target.value}})}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Deskripsi</label>
                      <textarea 
                        value={content.coverage.desc}
                        onChange={(e) => setContent({...content, coverage: {...content.coverage, desc: e.target.value}})}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                        rows={2}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Daftar Kota (pisahkan dengan koma)</label>
                      <input 
                        type="text" 
                        value={content.coverage.cities.join(',')}
                        onChange={(e) => setContent({...content, coverage: {...content.coverage, cities: e.target.value.split(',')}})}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                        placeholder="Surabaya, Sidoarjo, Gresik"
                      />
                    </div>
                  </div>
                </div>

                {/* CTA Section Edit */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Type className="w-5 h-5 text-brand-blue" />
                    Bottom CTA Section
                  </h4>
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title</label>
                      <input 
                        type="text" 
                        value={content.cta.title}
                        onChange={(e) => setContent({...content, cta: {...content.cta, title: e.target.value}})}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Deskripsi</label>
                      <textarea 
                        value={content.cta.desc}
                        onChange={(e) => setContent({...content, cta: {...content.cta, desc: e.target.value}})}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                        rows={2}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Google Sheet Integration Edit */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-brand-blue" />
                    Integrasi Google Sheet
                  </h4>
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Google Sheet Webhook URL</label>
                      <input 
                        type="text" 
                        value={content.googleSheetUrl || ""}
                        onChange={(e) => setContent({...content, googleSheetUrl: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                        placeholder="https://script.google.com/macros/s/.../exec"
                      />
                      <p className="text-[10px] text-slate-500 mt-1 italic">
                        *Masukkan URL Web App dari Google Apps Script untuk menyimpan data booking secara otomatis ke Google Sheet.
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nomor WhatsApp (Gunakan format 62...)</label>
                      <input 
                        type="text" 
                        value={content.whatsappNumber}
                        onChange={(e) => setContent({...content, whatsappNumber: e.target.value})}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white" 
                        placeholder="6281234567890"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Instagram URL</label>
                        <input 
                          type="text" 
                          value={content.socialLinks?.instagram || ""}
                          onChange={(e) => setContent({...content, socialLinks: {...content.socialLinks, instagram: e.target.value}})}
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm" 
                          placeholder="https://instagram.com/username"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Facebook URL</label>
                        <input 
                          type="text" 
                          value={content.socialLinks?.facebook || ""}
                          onChange={(e) => setContent({...content, socialLinks: {...content.socialLinks, facebook: e.target.value}})}
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm" 
                          placeholder="https://facebook.com/username"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">TikTok URL</label>
                        <input 
                          type="text" 
                          value={content.socialLinks?.tiktok || ""}
                          onChange={(e) => setContent({...content, socialLinks: {...content.socialLinks, tiktok: e.target.value}})}
                          className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm" 
                          placeholder="https://tiktok.com/@username"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Note */}
                <div className="p-4 bg-brand-blue/10 text-brand-blue dark:text-brand-cyan rounded-xl text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p>
                    Ini adalah versi awal dari Admin Panel. Saat ini Anda dapat mengedit teks dan gambar di bagian Hero, Why VisiGo, Area Layanan, dan CTA. 
                    Perubahan akan disimpan di browser Anda (Local Storage).
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
              <button 
                onClick={() => {
                  if (confirm("Apakah Anda yakin ingin mereset semua konten ke pengaturan awal? Semua perubahan yang Anda simpan akan hilang.")) {
                    setContent(defaultContent);
                  }
                }}
                className="px-4 py-2 rounded-xl font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-sm"
              >
                Reset ke Default
              </button>
              <div className="flex gap-3">
                <button 
                  onClick={() => {
                    const savedContent = localStorage.getItem('visigo-content-v2');
                    if (savedContent) {
                      try {
                        const parsed = JSON.parse(savedContent);
                        setContent({ ...defaultContent, ...parsed });
                      } catch (e) {
                        setContent(defaultContent);
                      }
                    } else {
                      setContent(defaultContent);
                    }
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Batal
                </button>
                <button 
                  onClick={() => onSave(content)}
                  className="px-6 py-2.5 rounded-xl font-medium bg-brand-blue hover:bg-brand-blue/90 text-white transition-colors flex items-center gap-2 shadow-lg shadow-brand-blue/20"
                >
                  <Save className="w-5 h-5" />
                  Simpan Perubahan
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
