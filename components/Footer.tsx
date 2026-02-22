"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCMS } from '../context/CMSContext';

const Footer: React.FC = () => {
  const { data } = useCMS();
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:${data.contact.email}?subject=Teklif Talebi&body=Merhaba, temizlik hizmeti hakkında bilgi almak istiyorum. E-posta: ${email}`;
      setEmailSent(true);
      setTimeout(() => setEmailSent(false), 3000);
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative border-t border-slate-800">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">

          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <div className="relative w-14 h-14 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-white/10">
                <Image
                  src="/logo.png"
                  alt="Safir Temizlik Logo"
                  fill
                  className="object-contain p-1.5 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tight">Safir<span className="text-blue-500">Temizlik</span></span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-0.5">Profesyonel Hijyen</span>
              </div>
            </Link>
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-sm font-medium">İstanbul'un her noktasına premium temizlik hizmeti. Eviniz ve ofisiniz için Safir Temizlik dokunuşunu keşfedin.</p>
          </div>

          <div className="lg:col-span-3 flex flex-col items-start lg:items-center text-left lg:text-center w-full">
            <div className="w-full lg:w-fit">
              <h4 className="font-black text-xs uppercase tracking-[0.2em] text-white mb-8 border-b border-blue-600/30 pb-2 inline-block">Hizmetlerimiz</h4>
              <ul className="space-y-4 text-slate-400 font-bold text-sm">
                <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Ev Temizliği</Link></li>
                <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Ofis Temizliği</Link></li>
                <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Apartman Temizliği</Link></li>
                <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Cam Temizliği</Link></li>
                <li><Link href="/#services" className="hover:text-blue-400 transition-colors">Kurumsal Temizlik</Link></li>
                <li><Link href="/hakkimizda" className="hover:text-blue-400 transition-colors">Hakkımızda</Link></li>
                <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right w-full">
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-white mb-8 border-b border-blue-600/30 pb-2 inline-block">İletişim</h4>
            <div className="space-y-5 w-full">
              <a href={`tel:${data.contact.phone}`} className="flex items-center lg:justify-end gap-4 text-slate-300 hover:text-white transition-colors group">
                <span className="font-black text-lg tracking-tight">{data.contact.phone}</span>
                <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
              </a>

              <a href={`mailto:${data.contact.email}`} className="flex items-center lg:justify-end gap-4 text-slate-300 hover:text-white transition-colors group">
                <span className="font-bold text-sm tracking-tight">{data.contact.email}</span>
                <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </div>
              </a>

              {/* Opsiyonel E-Posta Formu */}
              <div className="pt-4 border-t border-slate-800 w-full">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-3 lg:text-right">Bize E-Posta Gönderin</p>
                <form onSubmit={handleEmailSubmit} className="flex gap-2 w-full lg:justify-end">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-posta adresiniz"
                    className="flex-1 max-w-[240px] px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    required
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    {emailSent ? '✓ Açıldı' : 'Gönder'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Safir Temizlik. Tüm Hakları Saklıdır.
          </p>
          <div className="flex gap-8 text-slate-500 font-bold text-[10px] uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-white transition-colors">KVKK</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
