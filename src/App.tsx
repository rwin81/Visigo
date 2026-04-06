import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { TrustGallery } from './components/TrustGallery';
import { Testimonials } from './components/Testimonials';
import { Coverage } from './components/Coverage';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SocialProof } from './components/SocialProof';
import { FloatingCTA } from './components/FloatingCTA';
import { ServiceMarquee } from './components/ServiceMarquee';
import { WhyChooseVisiGoHook } from './components/WhyChooseVisiGoHook';
import { WhatsAppProof } from './components/WhatsAppProof';
import { defaultContent } from './constants/content';
import { Content } from './types';

// Error Boundary to catch and display errors
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean, error: Error | null }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
          <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-2xl border border-red-100">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Waduh, ada masalah!</h2>
            <p className="text-slate-600 mb-6">Aplikasi mengalami kesalahan teknis. Silakan coba muat ulang halaman.</p>
            <pre className="bg-slate-50 p-4 rounded-xl text-xs text-red-500 overflow-auto max-h-40 mb-6">
              {this.state.error?.message}
            </pre>
            <button 
              onClick={() => window.location.reload()}
              className="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors"
            >
              Muat Ulang Halaman
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [content] = useState<Content>(defaultContent);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handle dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-950 z-50 transition-colors duration-500">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="relative p-6 flex items-center justify-center bg-white rounded-3xl shadow-lg mb-4">
            <Logo className="h-12 sm:h-16 w-auto" textClassName="text-3xl" logoUrl={content.logoUrl} />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-t-brand-green border-r-transparent border-b-transparent border-l-transparent rounded-3xl"
            />
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 font-medium">Menyiapkan layanan terbaik untuk Anda...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className={`min-h-screen font-sans transition-colors duration-300 overflow-x-hidden ${isDarkMode ? 'bg-slate-950 text-slate-50' : 'bg-slate-50 text-slate-900'}`}>
        <Navbar 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
          setIsBookingOpen={setIsBookingOpen} 
          logoUrl={content.logoUrl}
        />

        <main>
          <Hero content={content.hero} setIsBookingOpen={setIsBookingOpen} />
          <ServiceMarquee cities={content.coverage.cities} setIsBookingOpen={setIsBookingOpen} />
          <Problems content={content.problems} setIsBookingOpen={setIsBookingOpen} />
          <Services content={content.services} setIsBookingOpen={setIsBookingOpen} />
          <HowItWorks content={content.howItWorks} />
          <WhyChooseVisiGoHook setIsBookingOpen={setIsBookingOpen} />
          <TrustGallery />
          <WhatsAppProof />
          <Testimonials content={content.testimonials} />
          <Coverage content={content.coverage} setIsBookingOpen={setIsBookingOpen} />
          <ServiceMarquee cities={content.coverage.cities} setIsBookingOpen={setIsBookingOpen} />
          <CTA content={content.cta} setIsBookingOpen={setIsBookingOpen} />
        </main>

        <Footer content={content} />

        {/* Social Proof Notifications */}
        <SocialProof />

        {/* Floating CTA with Pulsating & Urgency Effects */}
        <FloatingCTA onClick={() => setIsBookingOpen(true)} />

        {/* Modals */}
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)} 
          content={content}
        />
      </div>
    </ErrorBoundary>
  );
}
