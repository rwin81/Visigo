import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'motion/react';
import { Logo } from './components/Logo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { WhyVisiGo } from './components/WhyVisiGo';
import { Testimonials } from './components/Testimonials';
import { Coverage } from './components/Coverage';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LoginModal } from './components/LoginModal';
import { AdminPanel } from './components/AdminPanel';
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

const deepMerge = (target: any, source: any): any => {
  if (!source) return target;
  const output = { ...target };
  Object.keys(source).forEach(key => {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      output[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      output[key] = source[key];
    }
  });
  return output;
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [content, setContent] = useState<Content>(defaultContent);

  // Load content from localStorage
  useEffect(() => {
    const savedContent = localStorage.getItem('visigo-content-v2');
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        const merged = deepMerge(defaultContent, parsed);
        setContent(merged);
      } catch (e) {
        console.error("Failed to parse saved content", e);
      }
    }
    
    // Simulate loading
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

  const handleSaveContent = (newContent: Content) => {
    try {
      setContent(newContent);
      localStorage.setItem('visigo-content-v2', JSON.stringify(newContent));
      setIsAdminOpen(false);
    } catch (error) {
      console.error("Failed to save content to localStorage:", error);
      alert("Gagal menyimpan perubahan. Pastikan browser Anda mengizinkan penyimpanan lokal (LocalStorage).");
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "@123") {
      setIsAdminOpen(true);
      setIsLoginOpen(false);
      setPassword("");
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

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
      <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-50' : 'bg-slate-50 text-slate-900'}`}>
        <Navbar 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
          setIsBookingOpen={setIsBookingOpen} 
          logoUrl={content.logoUrl}
        />

        <main>
          <Hero content={content.hero} setIsBookingOpen={setIsBookingOpen} />
          <Problems content={content.problems} />
          <Services content={content.services} />
          <HowItWorks content={content.howItWorks} />
          <WhyVisiGo content={content.why} />
          <Testimonials content={content.testimonials} />
          <Coverage content={content.coverage} />
          <CTA content={content.cta} setIsBookingOpen={setIsBookingOpen} />
        </main>

        <Footer setIsLoginOpen={setIsLoginOpen} content={content} />

        {/* Floating WhatsApp Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          onClick={() => setIsBookingOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-brand-blue hover:bg-brand-blue/90 text-white p-3 rounded-full shadow-2xl shadow-brand-blue/40 transition-transform hover:scale-110 flex items-center justify-center cursor-pointer"
          aria-label="Chat WhatsApp"
        >
          <img src="https://img.icons8.com/color/96/whatsapp.png" alt="WhatsApp" className="w-16 h-16 scale-125 object-contain" referrerPolicy="no-referrer" />
        </motion.button>

        {/* Modals */}
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)} 
          content={content}
        />
        
        <LoginModal 
          isOpen={isLoginOpen} 
          onClose={() => {
            setIsLoginOpen(false);
            setLoginError(false);
            setPassword("");
          }}
          onLogin={handleLogin}
          password={password}
          setPassword={setPassword}
          loginError={loginError}
        />

        <AdminPanel 
          isOpen={isAdminOpen} 
          onClose={() => setIsAdminOpen(false)}
          content={content}
          setContent={setContent}
          onSave={handleSaveContent}
        />
      </div>
    </ErrorBoundary>
  );
}
