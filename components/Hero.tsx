"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCMS } from '../context/CMSContext';

const Hero: React.FC = () => {
  const { data } = useCMS();
  const { slides } = data.hero;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-[100vh] min-h-[700px] overflow-hidden bg-slate-900">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
             <Image 
               src={slide.image} 
               alt={slide.subtitle}
               fill
               priority={index === 0}
               className="object-cover scale-105 animate-[kenburns_20s_infinite]" 
             />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent" />
          </div>

          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
            <div className="max-w-2xl pt-20">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 backdrop-blur-md text-blue-400 rounded-full text-xs font-black mb-8 border border-blue-500/30 uppercase tracking-[0.2em] animate-in slide-in-from-left duration-700 delay-100">
                 <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                 {slide.title}
               </div>
               
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 tracking-tighter animate-in slide-in-from-bottom duration-700 delay-200">
                 {slide.subtitle}
               </h1>
               
               <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-lg font-medium animate-in slide-in-from-bottom duration-700 delay-300">
                 {slide.desc}
               </p>

               <div className="flex flex-wrap gap-4 animate-in fade-in duration-1000 delay-500">
                 <Link href="/services" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-base hover:bg-blue-700 transition-all shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)] hover:scale-105 active:scale-95 flex items-center gap-2">
                   <span>Fiyatı Hesapla</span>
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                 </Link>
                 <Link href="/contact" className="bg-white/10 text-white backdrop-blur-md px-10 py-5 rounded-2xl font-black text-base hover:bg-white/20 transition-all border border-white/20">
                   Bize Ulaşın
                 </Link>
               </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Controls */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-4">
           {slides.map((_, idx) => (
             <button
               key={idx}
               onClick={() => setCurrentSlide(idx)}
               className={`h-1.5 rounded-full transition-all duration-300 ${
                 idx === currentSlide ? 'w-16 bg-blue-600' : 'w-4 bg-white/20 hover:bg-white/40'
               }`}
             />
           ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
