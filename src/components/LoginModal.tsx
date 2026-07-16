import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, ShieldCheck } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            <div className="bg-cracex-blue p-6 text-center relative">
              <button 
                onClick={onClose}
                className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold text-white mb-1">Welcome Back</h2>
              <p className="text-blue-100 text-sm">Please select your login type to continue</p>
            </div>
            
            <div className="p-8 flex flex-col gap-4">
              <button className="group flex items-center justify-between w-full p-4 border-2 border-gray-100 rounded-xl hover:border-cracex-orange transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-50 text-cracex-orange p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <User size={24} />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-gray-800 text-lg">Student Login</span>
                    <span className="block text-sm text-gray-500">Access mock tests & resources</span>
                  </div>
                </div>
              </button>

              <button className="group flex items-center justify-between w-full p-4 border-2 border-gray-100 rounded-xl hover:border-cracex-blue transition-all duration-300 hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 text-cracex-blue p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-gray-800 text-lg">Admin Login</span>
                    <span className="block text-sm text-gray-500">Institute management portal</span>
                  </div>
                </div>
              </button>
            </div>
            
            <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
              <p className="text-xs text-gray-500">
                Don't have an account? <a href="tel:7501409423" className="text-cracex-orange font-semibold hover:underline">Contact us to enroll</a>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
