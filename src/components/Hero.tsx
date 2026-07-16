import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_SLIDES } from '../data';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[500px] overflow-hidden bg-gray-900">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentSlide}
          src={HERO_SLIDES[currentSlide].image}
          alt={HERO_SLIDES[currentSlide].alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="text-cracex-orange font-bold text-xs sm:text-sm tracking-[0.2em] mb-3 uppercase">
            Managed by Ex-Teachers of Top Brands
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
            CRACK YOUR EXAM <br className="hidden md:block"/>
            <span className="text-cracex-orange">WITH US!</span>
          </h1>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400"></span> PSC
            </div>
            <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span> SSC
            </div>
            <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span> RAILWAY
            </div>
            <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span> WBP
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-medium max-w-2xl">
            Your success story starts here with expert guidance, advanced learning methodologies, and targeted preparation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#courses" 
              className="bg-cracex-orange hover:bg-cracex-orange-hover text-cracex-blue px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider transition-all shadow-md"
            >
              Explore Courses
            </a>
            <a 
              href="tel:7501409423" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider transition-all"
            >
              Free Counseling
            </a>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-cracex-orange w-8' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
