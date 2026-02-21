"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCMS } from '@/context/CMSContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data } = useCMS();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hizmetlerimiz', href: '/#services' },
    { name: 'Galeri', href: '/#gallery' },
    { name: 'Yorumlar', href: '/#yorumlar' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/#contact' }
  ];

  if (!data?.contact) return null;

  return (
    <>
      <div className="hidden lg:block bg-slate-900 text-white py-2 px-6 relative z-[110] border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-8">
          <div className="flex items-center gap-10">
            <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              7/24 Hizmet
            </span>
            
            <div className="flex items-center gap-8 border-l border-slate-800 pl-8">
              <div className="flex flex-col">
                <span className="text-blue-500 font-black text-xs">4.000+</span>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Mutlu Müşteri</span>
              </div>
              <div className="flex flex-col">
                <span className="text-blue-500 font-black text-xs">25+</span>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Yıllık Tecrübe</span>
              </div>
              <div className="flex flex-col">
                <span className="text-blue-500 font-black text-xs">200+</span>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Uzman Personel</span>
              </div>
            </div>
          </div>
          
          <a href={`tel:${data.contact.phone}`} className="text-white font-black text-sm tracking-tight flex items-center gap-2 hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            {data.contact.phone}
          </a>
        </div>
      </div>

      <nav className={`fixed left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'top-0' : 'top-0 lg:top-12'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className={`flex items-center justify-between px-6 py-4 md:py-5 rounded-[2rem] transition-all duration-500 ${isScrolled
            ? 'bg-white/95 backdrop-blur-2xl shadow-xl border border-white/50'
            : 'bg-white/80 backdrop-blur-md border border-white/40 shadow-sm'
            }`}>

            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 md:w-12 md:h-12 overflow-hidden rounded-2xl">
                <Image 
                  src="/logo.png" 
                  alt="Safir Temizlik Logo" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 uppercase">Safir Temizlik</span>
                <span className="text-[9px] md:text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mt-0.5">Profesyonel Hijyen</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-10 px-10 py-3 bg-slate-100/50 rounded-full border border-white/50">
              {navLinks.map(link => (
                <Link key={link.name} href={link.href} className="text-[11px] font-black uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-all">
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/#contact"
                className="hidden sm:flex bg-slate-900 text-white px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all"
              >
                Teklif Al
              </Link>

              <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden w-12 h-12 flex flex-col items-center justify-center bg-slate-900 rounded-2xl shadow-lg">
                <div className="w-6 flex flex-col gap-1.5">
                  <span className="h-0.5 w-full bg-white rounded-full" />
                  <span className="h-0.5 w-full bg-white rounded-full" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-slate-900/60 backdrop-blur-xl z-[120] transition-all duration-500 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className={`absolute right-0 top-0 bottom-0 w-[85%] bg-white shadow-2xl transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-center mb-16">
                <span className="font-black text-slate-900">MENÜ</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-2xl">✕</button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map(link => (
                  <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black tracking-tighter text-slate-900 hover:text-blue-600">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
