import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, MonitorPlay, CheckCircle2, Play, Trophy, FileText, User, Home, BookOpen, Bell, Sparkles } from 'lucide-react';

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
                <div className="absolute inset-0 bg-slate-50 flex flex-col pt-8 px-4 pb-4 select-none">
                  {/* Top Status Bar & Header */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-1.5">
                      <img src="/logo.svg" alt="CracEx Logo" className="w-7 h-7 object-contain bg-white rounded-full p-0.5 shadow-sm" referrerPolicy="no-referrer" />
                      <span className="text-[11px] font-black tracking-tight text-cracex-blue">CracEx App</span>
                    </div>
                    {/* Tiny User Profile & notification dot */}
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Bell size={13} className="text-slate-500" />
                        <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      </div>
                      <div className="w-5 h-5 bg-cracex-blue rounded-full flex items-center justify-center text-[9px] font-bold text-white uppercase">
                        JD
                      </div>
                    </div>
                  </div>

                  {/* Greeting & Search */}
                  <div className="mb-2">
                    <p className="text-[8px] text-slate-400 font-semibold leading-tight">Welcome back,</p>
                    <h5 className="text-[11px] font-bold text-cracex-blue leading-tight flex items-center gap-1">
                      John Doe <Sparkles size={10} className="text-cracex-orange" />
                    </h5>
                  </div>

                  {/* Quick stats / Mini Info */}
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="bg-white p-1.5 rounded-lg border border-slate-100 shadow-sm flex items-center gap-1.5">
                      <Trophy size={11} className="text-cracex-orange shrink-0" />
                      <div>
                        <div className="text-[7px] text-slate-400 font-medium">Global Rank</div>
                        <div className="text-[9px] font-bold text-slate-700">#420</div>
                      </div>
                    </div>
                    <div className="bg-white p-1.5 rounded-lg border border-slate-100 shadow-sm flex items-center gap-1.5">
                      <BookOpen size={11} className="text-blue-500 shrink-0" />
                      <div>
                        <div className="text-[7px] text-slate-400 font-medium">Daily Streak</div>
                        <div className="text-[9px] font-bold text-slate-700">12 Days 🔥</div>
                      </div>
                    </div>
                  </div>

                  {/* Live Video player container */}
                  <div className="bg-cracex-blue text-white rounded-xl p-2 mb-2 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-1.5 right-1.5 flex items-center gap-1 bg-red-500 text-white text-[7px] font-bold px-1 py-0.5 rounded uppercase tracking-wider animate-pulse">
                      <span className="w-1 h-1 bg-white rounded-full"></span> Live
                    </div>
                    <div className="text-[7px] text-cracex-orange font-bold uppercase tracking-wider mb-0.5">PSC Clerkship Special</div>
                    <h6 className="text-[9px] font-bold leading-tight mb-1.5 max-w-[80%]">Geography: Rivers of India</h6>
                    <div className="relative bg-black/40 rounded-lg aspect-video flex items-center justify-center border border-white/10 group-hover:bg-black/50 transition-colors">
                      <div className="w-6 h-6 bg-white text-cracex-blue rounded-full flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                        <Play size={10} fill="currentColor" className="ml-0.5" />
                      </div>
                      <div className="absolute bottom-1 left-1 right-1 flex justify-between text-[6px] font-mono text-white/80">
                        <span>Teacher: Expert Staff</span>
                        <span>142 watching</span>
                      </div>
                    </div>
                  </div>

                  {/* App features categories in the mockup */}
                  <div className="mb-2">
                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-1">Learning Modules</div>
                    <div className="grid grid-cols-3 gap-1.5">
                      <div className="bg-white p-1 rounded-lg border border-slate-200/60 shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors">
                        <Trophy size={13} className="text-cracex-orange mb-0.5" />
                        <span className="text-[8px] font-bold text-slate-700">Mock Tests</span>
                      </div>
                      <div className="bg-white p-1 rounded-lg border border-slate-200/60 shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors">
                        <FileText size={13} className="text-blue-500 mb-0.5" />
                        <span className="text-[8px] font-bold text-slate-700">Study Notes</span>
                      </div>
                      <div className="bg-white p-1 rounded-lg border border-slate-200/60 shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition-colors">
                        <MonitorPlay size={13} className="text-purple-500 mb-0.5" />
                        <span className="text-[8px] font-bold text-slate-700">Videos</span>
                      </div>
                    </div>
                  </div>

                  {/* Active Mock Test Card */}
                  <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded bg-orange-50 flex items-center justify-center text-[10px]">
                        🏆
                      </div>
                      <div>
                        <h6 className="text-[8px] font-bold text-slate-800 leading-tight">WBP SI Mock 5</h6>
                        <span className="text-[6px] text-slate-400">100 Marks • 90 Mins</span>
                      </div>
                    </div>
                    <button className="bg-cracex-orange text-cracex-blue text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm hover:bg-cracex-orange-hover uppercase transition-colors">
                      Start
                    </button>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="mt-auto pt-1.5 border-t border-slate-100 flex justify-between px-1 text-slate-400">
                    <div className="flex flex-col items-center cursor-pointer text-cracex-blue">
                      <Home size={11} strokeWidth={2.5} />
                      <span className="text-[6px] font-bold mt-0.5">Home</span>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer hover:text-cracex-blue transition-colors">
                      <BookOpen size={11} />
                      <span className="text-[6px] font-medium mt-0.5">Classes</span>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer hover:text-cracex-blue transition-colors">
                      <Trophy size={11} />
                      <span className="text-[6px] font-medium mt-0.5">Tests</span>
                    </div>
                    <div className="flex flex-col items-center cursor-pointer hover:text-cracex-blue transition-colors">
                      <User size={11} />
                      <span className="text-[6px] font-medium mt-0.5">Profile</span>
                    </div>
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
