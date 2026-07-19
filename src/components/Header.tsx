import React, { useState } from 'react';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';
import { NAV_ITEMS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onLoginClick: () => void;
}

export function Header({ onLoginClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-cracex-blue text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="/logo.svg" alt="CracEx Logo" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-black tracking-tight leading-none text-white">CRACEX</h1>
              <span className="text-[10px] uppercase tracking-widest text-white/80">Asansol Branch</span>
            </div>
          </div>

          {/* Desktop Contact & Login */}
          <div className="hidden md:flex items-center gap-6">
            <div className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2 border border-white/20">
              <Phone size={14} className="text-cracex-orange" />
              <a href="tel:7501409423" className="font-bold text-sm text-white">+91 7501409423</a>
            </div>
            <button
              onClick={onLoginClick}
              className="bg-cracex-orange hover:bg-cracex-orange-hover text-cracex-blue font-bold px-6 py-2 rounded-md text-sm shadow-md uppercase tracking-wider transition-colors"
            >
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-cracex-orange p-2 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Sub-Nav */}
      <nav className="hidden md:block bg-cracex-blue-dark border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <ul className="flex gap-8 text-xs font-semibold uppercase tracking-widest text-blue-100">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`cursor-pointer transition-colors ${index === 0 ? 'text-cracex-orange' : 'hover:text-cracex-orange'}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cracex-blue-dark border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-inner">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-sm font-semibold uppercase tracking-widest text-blue-100 hover:text-cracex-orange hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onLoginClick();
                }}
                className="block w-full text-left px-3 py-3 rounded-md text-sm font-semibold uppercase tracking-widest text-cracex-orange hover:bg-white/5 mt-2 border-t border-white/10"
              >
                Login
              </button>
              <div className="pt-4 mt-2">
                <a 
                  href="tel:7501409423" 
                  className="flex items-center justify-center gap-2 w-full bg-white/10 text-white px-4 py-3 rounded-md font-semibold border border-white/20"
                >
                  <Phone size={16} className="text-cracex-orange" />
                  <span>Call: 7501409423</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
