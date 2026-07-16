import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DynamicSection } from './components/DynamicSection';
import { Features } from './components/Features';
import { AppPromo } from './components/AppPromo';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 scroll-smooth selection:bg-cracex-orange selection:text-white">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />
      
      <main>
        <Hero />
        <DynamicSection />
        <Features />
        <AppPromo />
      </main>

      <Footer />
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
}
