"use client";

import React, { useState } from 'react';

const faqs = [
  { q: "Temizlik malzemeleri fiyata dahil mi?", a: "Seçtiğiniz pakete göre değişmektedir. 'Malzemeli Temizlik' paketimizde tüm ekipman ve deterjanlar tarafımızdan karşılanmaktadır." },
  { q: "Personel güvenilir mi?", a: "Safir Temizlik bünyesindeki tüm personeller eğitimli, sigortalı ve profesyonel ekibimizden oluşmaktadır. Yaşam alanlarınızın güvenliği bizim için birincil önceliktir." },
  { q: "Ödemeyi nasıl yapabilirim?", a: "Kapıda nakit veya kredi kartı seçeneklerimiz mevcuttur. Yakında online ödeme sistemimiz de aktif olacaktır." },
  { q: "Aynı gün hizmet alabilir miyim?", a: "Müsaitlik durumuna göre İstanbul genelinde 4 saat içinde servis sağlayabiliyoruz." },
  { q: "Memnun kalmazsam ne olur?", a: "Hizmet sonrası 24 saat içinde bildirdiğiniz tüm aksaklıklar için ücretsiz telafi temizliği garantisi veriyoruz." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4">Aklınıza Takılanlar</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Sıkça Sorulan Sorular</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl border border-slate-200 overflow-hidden transition-all shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 text-left flex justify-between items-center group"
              >
                <span className={`font-black text-lg tracking-tight transition-colors ${openIndex === i ? 'text-blue-600' : 'text-slate-700'}`}>
                  {faq.q}
                </span>
                <span className={`text-2xl transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-blue-600' : 'text-slate-300'}`}>
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed animate-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
