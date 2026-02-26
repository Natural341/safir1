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
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Galeri', href: '/#gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/#contact' }
  ];

  if (!data?.contact) return null;

  return (
    <>
      {/* Top Bar - Solid background for readability */}
      <div className={`hidden lg:block fixed top-0 left-0 right-0 z-[120] transition-all duration-500 ${isScrolled ? '-translate-y-full' : 'bg-slate-900 text-white py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-300">7/24 Kesintisiz Hizmet</span>
            </div>

            <div className="flex items-center gap-6 border-l border-white/10 pl-6 h-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-black text-xs">4.000+</span>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Müşteri</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-black text-xs">200+</span>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Personel</span>
              </div>
            </div>
          </div>

          <a href={`tel:${data.contact.phone}`} className="text-white font-black text-xs tracking-widest flex items-center gap-2 hover:text-blue-400 transition-colors uppercase">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1 22 16.92z" /></svg>
            Müşteri Hattı: {data.contact.phone}
          </a>
        </div>
      </div>

      <nav className={`fixed left-0 right-0 z-[110] transition-all duration-500 ${isScrolled ? 'top-0' : 'top-0 lg:top-14'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="flex items-center justify-between px-8 py-4 rounded-[2rem] transition-all duration-500 shadow-2xl bg-white/95 backdrop-blur-2xl border border-white/50">

            <Link href="/" className="flex items-center gap-5 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-2xl bg-white shadow-xl ring-2 ring-blue-600/20">
                <Image
                  src="/logo.png"
                  alt="Safir Temizlik"
                  fill
                  className="object-contain p-1.5 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl md:text-2xl font-black tracking-tighter uppercase text-slate-900">Safir Temizlik</span>
                <span className="text-[9px] md:text-[10px] font-bold text-blue-500 uppercase tracking-[0.25em] mt-0.5">Profesyonel Hijyen</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-10 px-10 py-3 rounded-full border transition-all duration-500 bg-slate-100/50 border-slate-200">
              {navLinks.map(link => (
                <Link key={link.name} href={link.href} className="text-[11px] font-black uppercase tracking-widest transition-all text-slate-600 hover:text-blue-600">
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={`tel:${data.contact.phone}`}
                className="hidden sm:flex px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-lg bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20"
              >
                Hemen Ara
              </a>

              <button aria-label="Menüyü aç" onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden w-12 h-12 flex flex-col items-center justify-center rounded-2xl shadow-xl transition-colors bg-slate-900">
                <div className="w-6 flex flex-col gap-1.5">
                  <span className="h-0.5 w-full bg-white rounded-full" />
                  <span className="h-0.5 w-full bg-white rounded-full" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-slate-900/60 backdrop-blur-xl z-[130] transition-all duration-500 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className={`absolute right-0 top-0 bottom-0 w-[85%] bg-white shadow-2xl transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-center mb-16">
                <span className="font-black text-slate-900 tracking-widest uppercase text-sm">MENÜ</span>
                <button aria-label="Menüyü kapat" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-slate-400 hover:text-slate-900 transition-colors">✕</button>
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map(link => (
                  <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-black tracking-tighter text-slate-900 hover:text-blue-600 transition-colors">
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
