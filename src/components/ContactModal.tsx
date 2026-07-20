import React from 'react';
import { X, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative z-10 border border-slate-100"
        >
          {/* Header */}
          <div className="bg-cracex-blue p-6 text-white relative">
            <h3 className="text-xl font-black tracking-tight uppercase">
              Contact CracEx Asansol
            </h3>
            <p className="text-blue-100 text-xs mt-1">
              Have questions? Our experts are here to guide you.
            </p>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 hover:bg-white/10 rounded-full transition-colors text-white"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-5">
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Get in touch with CracEx for exam registration, course details, mock test series, or batch timings.
            </p>

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-cracex-orange/10 flex items-center justify-center text-cracex-orange shrink-0 mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Phone Number</span>
                  <a href="tel:7501409423" className="text-sm font-bold text-slate-800 hover:text-cracex-orange transition-colors">
                    +91 7501409423
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Email Address</span>
                  <a href="mailto:support@cracexedu.in" className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors">
                    support@cracexedu.in
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Office Hours</span>
                  <span className="text-sm font-bold text-slate-800">
                    10:00 AM - 7:00 PM (Daily)
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Location</span>
                  <span className="text-sm font-semibold text-slate-800 leading-relaxed block">
                    Lower Chelidanga, Asansol, West Bengal
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="bg-slate-50 p-6 border-t border-slate-200 flex flex-col sm:flex-row justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg font-bold text-slate-600 bg-white border border-slate-300 hover:bg-slate-100 transition-colors uppercase text-xs tracking-wider"
            >
              Close
            </button>
            <a
              href="tel:7501409423"
              className="px-5 py-2.5 rounded-lg font-bold text-cracex-blue bg-cracex-orange hover:bg-cracex-orange-hover transition-colors uppercase text-xs tracking-wider flex items-center justify-center gap-1.5 shadow-md"
            >
              <Phone size={14} /> Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
