import React from 'react';
import { Logo } from './Logo';
import { formatVisiGoText } from '../lib/formatters';
import { Instagram, Facebook } from 'lucide-react';
import { Content } from '../types';

interface FooterProps {
  content: Content;
}

export const Footer = ({ content }: FooterProps) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6 bg-white w-fit p-2 pr-4 rounded-2xl shadow-sm">
              <Logo className="h-10 sm:h-12 w-auto" logoUrl={content.logoUrl} />
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Layanan optik keliling berbasis home service yang profesional, terpercaya, dan berbasis teknologi.
            </p>
            <div className="flex gap-4">
              <a 
                href={content.socialLinks?.instagram || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-blue transition-colors cursor-pointer text-white" 
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={content.socialLinks?.facebook || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-blue transition-colors cursor-pointer text-white" 
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={content.socialLinks?.tiktok || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-blue transition-colors cursor-pointer text-white" 
                aria-label="TikTok"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 3.44-.3 6.88-.45 10.32-.15 2.13-1.13 4.23-2.94 5.37-2.02 1.28-4.72 1.44-6.86.41-2.14-1.03-3.67-3.26-3.84-5.64-.17-2.38 1.05-4.74 3.06-6.02 1.13-.72 2.48-1.07 3.81-1.02V10.1c-1.35-.05-2.73.32-3.83 1.11-1.1.79-1.8 2.04-1.89 3.4-.09 1.36.4 2.74 1.34 3.72.94.98 2.29 1.48 3.65 1.36 1.36-.12 2.6-.96 3.19-2.19.46-.96.58-2.05.58-3.12V0l.01.02z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Layanan</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Cek Mata di Rumah</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Kacamata Custom</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Lensa Kontak</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Corporate Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Perusahaan</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Kontak</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} {formatVisiGoText("VisiGo")}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
