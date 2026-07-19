import React from 'react';
import { Facebook, Youtube, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="CracEx Logo" className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
              <span className="text-xl font-black text-cracex-blue tracking-tight leading-none">CRACEX</span>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Premier coaching institute in Asansol offering specialized preparation for competitive government exams.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61591085533486" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cracex-orange transition-colors bg-slate-50 border border-slate-100 p-2 rounded hover:shadow-sm">
                <Facebook size={16} />
              </a>
              <a href="#" className="text-slate-400 hover:text-cracex-orange transition-colors bg-slate-50 border border-slate-100 p-2 rounded hover:shadow-sm">
                <Youtube size={16} />
              </a>
              <a href="#" className="text-slate-400 hover:text-cracex-orange transition-colors bg-slate-50 border border-slate-100 p-2 rounded hover:shadow-sm">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cracex-blue font-bold mb-4 uppercase text-[11px] tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-500 font-medium">
              <li><a href="#home" className="hover:text-cracex-orange transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-cracex-orange transition-colors">Our Courses</a></li>
              <li><a href="#jobs" className="hover:text-cracex-orange transition-colors">Job Notifications</a></li>
              <li><a href="#app" className="hover:text-cracex-orange transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-cracex-blue font-bold mb-4 uppercase text-[11px] tracking-wider">Legal</h4>
            <ul className="space-y-2 text-xs text-slate-500 font-medium">
              <li><a href="#" className="hover:text-cracex-orange transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-cracex-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cracex-orange transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-cracex-blue font-bold mb-4 uppercase text-[11px] tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-xs text-slate-500 font-medium">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-cracex-orange shrink-0 mt-0.5" />
                <span>Lower Chelidanga,<br />Asansol, West Bengal</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-cracex-orange shrink-0" />
                <a href="tel:7501409423" className="hover:text-cracex-orange transition-colors">+91 7501409423</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-cracex-orange shrink-0" />
                <a href="mailto:support@cracexedu.in" className="hover:text-cracex-orange transition-colors">support@cracexedu.in</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] text-slate-400 font-medium text-center md:text-left">
            &copy; {currentYear} CracEx Asansol. All Rights Reserved. 
            <span className="mx-2 hidden md:inline">|</span>
            <span className="block md:inline mt-1 md:mt-0">Crack Your Exam With Us!</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-slate-400 font-medium">Online classes via <span className="text-slate-800">Google Meet</span></span>
            <div className="flex gap-1.5">
              <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
              <div className="w-3.5 h-3.5 bg-red-600 rounded-full"></div>
              <div className="w-3.5 h-3.5 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
