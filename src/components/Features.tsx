import React from 'react';
import { motion } from 'motion/react';
import { FEATURES } from '../data';
import { 
  GraduationCap, IndianRupee, FileEdit, Laptop, 
  Lightbulb, Target, Languages, UserCheck, MessageCircleQuestion 
} from 'lucide-react';

const IconMap: Record<string, React.ElementType> = {
  GraduationCap,
  IndianRupee,
  FileEdit,
  Laptop,
  Lightbulb,
  Target,
  Languages,
  UserCheck,
  MessageCircleQuestion
};

export function Features() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-50">
        <div className="absolute -top-[10%] -right-[5%] w-[30%] h-[40%] rounded-full bg-orange-100/50 blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[40%] rounded-full bg-blue-100/50 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold tracking-[0.2em] text-cracex-orange uppercase mb-2">Why Choose CracEx?</h2>
          <h3 className="text-3xl md:text-4xl font-black text-cracex-blue mb-4 tracking-tight uppercase">
            The Ultimate Ecosystem
          </h3>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            We don't just teach; we mentor. Experience the finest quality education tailored for your success in competitive exams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature, index) => {
            const IconComponent = IconMap[feature.iconName];
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={feature.id}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden"
              >
                <div className="text-cracex-orange text-2xl mb-3 group-hover:scale-110 transition-transform origin-left">
                  {IconComponent && <IconComponent size={28} strokeWidth={2.5} />}
                </div>
                
                <h4 className="text-xs sm:text-sm font-bold text-cracex-blue uppercase mb-2 leading-tight">
                  {feature.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
