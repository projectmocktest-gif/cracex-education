import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, MonitorPlay, CheckCircle2 } from 'lucide-react';

export function AppPromo() {
  return (
    <section id="app" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-cracex-orange rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(#0d3b66 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-cracex-blue mb-6 leading-tight tracking-tight uppercase">
                Learn Anywhere <br/> <span className="text-white">With CracEx App</span>
              </h2>
              <p className="text-sm sm:text-base text-cracex-blue/90 mb-8 font-medium">
                Take your preparation to the next level. Our comprehensive digital platform ensures you stay connected with your studies whether you are at home or on the go.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/30 p-2 rounded-lg text-cracex-blue shrink-0 mt-1 shadow-sm">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold mb-1 text-cracex-blue uppercase">Android App Features</h4>
                    <ul className="space-y-2 text-sm text-cracex-blue/90 font-medium">
                      <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-white"/> Complete Student Management</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-white"/> Free & Premium Mock Test Facility</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-white"/> Integrated YouTube Video Player</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cracex-blue p-2 rounded-lg text-white shrink-0 mt-1 shadow-sm">
                    <MonitorPlay size={24} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold mb-1 text-cracex-blue uppercase">Live Online Classes</h4>
                    <p className="text-sm text-cracex-blue/90 font-medium">
                      Interactive live sessions conducted via Google Meet. Seamlessly integrated for registered students using secure Google Workspace/Gmail IDs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-cracex-blue text-white px-8 py-3 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-cracex-blue-dark transition-colors shadow-lg flex items-center gap-2">
                  <Smartphone size={18} />
                  Download App
                </button>
              </div>
            </motion.div>

            {/* Visual/Mockup Side */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden sm:block"
            >
              <div className="relative mx-auto w-full max-w-[280px] h-[550px] bg-slate-50 rounded-[2.5rem] border-[6px] border-cracex-blue shadow-2xl overflow-hidden flex items-center justify-center">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-cracex-blue rounded-b-xl z-20"></div>
                
                {/* App Mockup UI (Simulated) */}
                <div className="absolute inset-0 bg-slate-50 flex flex-col pt-8 px-4 pb-4">
                  <div className="flex justify-between items-center mb-6">
                    <img src="/logo.svg" alt="CracEx Logo" className="w-8 h-8 object-contain bg-white rounded-full p-0.5 shadow-sm" referrerPolicy="no-referrer" />
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                    </div>
                  </div>
                  <div className="w-3/4 h-5 bg-slate-200 rounded mb-4"></div>
                  <div className="w-full h-28 bg-cracex-blue/10 rounded-xl mb-4 flex items-center justify-center text-cracex-blue font-bold text-sm">Live Class Playing...</div>
                  <div className="w-full h-14 bg-white shadow-sm rounded-xl mb-2 border border-slate-100"></div>
                  <div className="w-full h-14 bg-white shadow-sm rounded-xl mb-2 border border-slate-100"></div>
                  <div className="w-full h-14 bg-white shadow-sm rounded-xl mb-2 border border-slate-100"></div>
                  <div className="mt-auto flex justify-between px-2">
                    <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                    <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                    <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                    <div className="w-6 h-6 bg-cracex-orange rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute top-1/4 -right-8 w-24 h-24 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-60"></div>
              <div className="absolute bottom-1/4 -left-8 w-32 h-32 bg-cracex-blue rounded-full mix-blend-overlay filter blur-xl opacity-20"></div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
