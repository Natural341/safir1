"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCMS } from '../context/CMSContext';

const heroImages = [
  { src: '/images/hero1.jpg', alt: 'İstanbul Profesyonel Ev Temizliği - Safir Temizlik Güvencesi' },
  { src: '/images/hero2.jpg', alt: 'Ofis ve İş Yeri Temizliği İstanbul - 7/24 Hizmet' },
  { src: '/images/hero3.jpg', alt: 'Kurumsal Temizlik Çözümleri - Safir Temizlik İstanbul' },
  { src: '/images/hero4.png', alt: 'Detaylı Hijyen ve Dezenfeksiyon Hizmeti İstanbul' },
];

const Hero: React.FC = () => {
  const { data } = useCMS();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev: number) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[800px] w-full overflow-hidden bg-slate-900">
      {/* Background Images Slider */}
      {heroImages.map((img, index) => (
        <div
          key={img.src}
          className="absolute inset-0 w-full h-full"
          style={{
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 2s ease-in-out',
            zIndex: index === currentSlide ? 2 : 1,
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={index === 0}
            className="object-cover object-center"
            quality={90}
            sizes="100vw"
          />
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-slate-950/30 z-[3]" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/25 to-transparent z-[3]" />
        </div>
      ))}

      {/* Static Content */}
      <div className="relative h-full z-[10] flex items-start lg:items-center pt-24 lg:pt-0">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center w-full pt-0 lg:pt-20">

          {/* Left Side: Content */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-600/20 text-blue-100 rounded-full text-[10px] font-black mb-8 border border-blue-400/30 uppercase tracking-[0.3em]">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></span>
              İstanbul'un En İyi Temizlik Hizmeti
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] mb-9 tracking-tighter uppercase">
              <span className="block" style={{ color: '#2980b9' }}>SAF</span>
              <span className="block text-white">TEMİZLİK</span>
            </h1>

            <p className="text-lg md:text-xl text-white mb-11 leading-relaxed max-w-2xl font-semibold opacity-90">
              Profesyonel kadromuz ve modern ekipmanlarımızla yaşam alanlarınıza değer katıyoruz.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link href="/services" className="bg-blue-600 text-white px-10 py-5 rounded-[2rem] font-black text-base hover:bg-blue-700 transition-all shadow-[0_20px_50px_-10px_rgba(37,99,235,0.6)] hover:scale-105 active:scale-95 flex items-center gap-3 uppercase tracking-wider">
                <span>Fiyatı Hesapla</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Right Side: Statistics */}
          <div className="lg:col-span-5 xl:col-span-4 grid grid-cols-3 gap-4 lg:flex lg:flex-col lg:gap-10 lg:pl-16 lg:border-l border-white/10 mt-6 lg:mt-0">
            <div className="flex flex-col group text-center lg:text-left">
              <span className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-black text-white tracking-tighter group-hover:text-blue-500 transition-colors duration-500">4.000+</span>
              <div className="flex items-center gap-2 mt-2 lg:mt-3 justify-center lg:justify-start">
                <span className="hidden lg:block h-[2px] w-8 bg-blue-600"></span>
                <span className="text-[8px] lg:text-[11px] font-black text-blue-400 uppercase tracking-[0.3em] lg:tracking-[0.4em]">Mutlu Müşteri</span>
              </div>
            </div>
            <div className="flex flex-col group text-center lg:text-left">
              <span className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-black text-white tracking-tighter group-hover:text-blue-500 transition-colors duration-500">200+</span>
              <div className="flex items-center gap-2 mt-2 lg:mt-3 justify-center lg:justify-start">
                <span className="hidden lg:block h-[2px] w-8 bg-blue-600"></span>
                <span className="text-[8px] lg:text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] lg:tracking-[0.4em]">Uzman Kadro</span>
              </div>
            </div>
            <div className="flex flex-col group text-center lg:text-left">
              <span className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-black text-white tracking-tighter group-hover:text-blue-500 transition-colors duration-500">25+</span>
              <div className="flex items-center gap-2 mt-2 lg:mt-3 justify-center lg:justify-start">
                <span className="hidden lg:block h-[2px] w-8 bg-blue-600"></span>
                <span className="text-[8px] lg:text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] lg:tracking-[0.4em]">Yıllık Tecrübe</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
