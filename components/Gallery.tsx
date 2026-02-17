"use client";

import React, { useState } from 'react';

const galleryItems = [
  { url: "/images/gallery/salon.jpg", title: "Salon Temizliği", category: "Ev" },
  { url: "/images/gallery/mutfak.jpg", title: "Mutfak Sterilizasyonu", category: "Ev" },
  { url: "/images/gallery/banyo.jpg", title: "Banyo Dezenfeksiyonu", category: "Detay" },
  { url: "/images/gallery/ofis-masa.jpg", title: "Ofis Temizliği", category: "Ofis" },
  { url: "/images/gallery/zemin.jpg", title: "Zemin Parlatma", category: "Ofis" },
  { url: "/images/gallery/dolap.jpg", title: "Banyo Hijyeni", category: "Detay" },
  { url: "/images/gallery/pencere.jpg", title: "Pencere Temizliği", category: "Dış Cephe" },
  { url: "/images/gallery/yatak.jpg", title: "Yatak Odası Temizliği", category: "Ev" },
  { url: "/images/gallery/hali.jpg", title: "Yüzey Dezenfeksiyonu", category: "Detay" },
  { url: "/images/gallery/ferahlik.jpg", title: "Ev Detay Temizliği", category: "Ev" },
  { url: "/images/gallery/kurumsal.jpg", title: "Kurumsal Temizlik", category: "Ofis" },
  { url: "/images/gallery/mutfak2.jpg", title: "Mutfak Detay Temizliği", category: "Ev" }
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Hepsi');
  const categories = ['Hepsi', 'Ev', 'Ofis', 'Detay', 'Dış Cephe'];

  const filteredItems = filter === 'Hepsi'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-black tracking-[0.3em] uppercase text-[11px] mb-4">Referanslarımız</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter">İşçilikteki Kusursuzluk</h3>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-8 py-3 rounded-2xl font-black text-xs transition-all border-2 tracking-widest uppercase ${filter === c
                  ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-100'
                  : 'bg-white border-slate-100 text-slate-400 hover:border-blue-400 hover:text-blue-600'
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.slice(0, 12).map((item, i) => (
            <div key={i} className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-sm hover:shadow-2xl transition-all duration-700 bg-white border border-slate-200">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.2em] mb-2 block">
                    {item.category}
                  </span>
                  <h4 className="text-white font-black text-xl tracking-tight">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-xl">
            Tüm Çalışmaları İncele
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
