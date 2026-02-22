"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const galleryItems = [
  { url: "/temizlik_gorsel/depositphotos_192261848-stock-photo-young-woman-in-white-apron.jpg", title: "İstanbul Profesyonel Ev Temizliği Hizmeti", category: "Ev" },
  { url: "/temizlik_gorsel/depositphotos_207465184-stock-photo-cropped-shot-person-cleaning-sofa.jpg", title: "Koltuk ve Tekstil Hijyen Temizliği İstanbul", category: "Detay" },
  { url: "/temizlik_gorsel/depositphotos_219637290-stock-photo-close-cleaning-specialist-yellow-gloves.jpg", title: "Mutfak Sterilizasyonu ve Derin Temizlik", category: "Ev" },
  { url: "/temizlik_gorsel/depositphotos_261608838-stock-photo-cleaning-service-with-professional-equipment.jpg", title: "Endüstriyel Ekipmanlarla Profesyonel Temizlik", category: "Ofis" },
  { url: "/temizlik_gorsel/depositphotos_273770292-stock-photo-two-smiling-young-janitor-cleaning.jpg", title: "Safir Temizlik Ekip Çalışması ve Hijyen", category: "Ofis" },
  { url: "/temizlik_gorsel/depositphotos_279460574-stock-photo-worker-with-machine-cleaning-floor.jpg", title: "Zemin Parlatma ve Cilalama İşlemleri", category: "Ofis" },
  { url: "/temizlik_gorsel/depositphotos_355770200-stock-photo-cropped-view-happy-girl-overalls.jpg", title: "Detaylı Yüzey ve Mobilya Temizliği", category: "Detay" },
  { url: "/temizlik_gorsel/depositphotos_367951828-stock-photo-woman-vacuums-sofa-general-cleaning.jpg", title: "Vakumlu Derin Koltuk ve Halı Temizliği", category: "Ev" },
  { url: "/temizlik_gorsel/depositphotos_375776708-stock-photo-janitor-cleaning-a-corridor.jpg", title: "Kurumsal Alan ve Koridor Temizliği İstanbul", category: "Ofis" },
  { url: "/temizlik_gorsel/depositphotos_475959294-stock-photo-happy-blonde-woman-maid-holding.jpg", title: "Villa ve Rezidans Temizlik Hizmeti", category: "Ev" },
  { url: "/temizlik_gorsel/depositphotos_6153518-stock-photo-cleaning.jpg", title: "Genel Hijyen Standartları ve Dezenfeksiyon", category: "Detay" },
  { url: "/temizlik_gorsel/depositphotos_82117770-stock-photo-worker-cleans-seams-between-tiles.jpg", title: "Banyo Derz Temizliği ve Dış Cephe Bakımı", category: "Dış Cephe" }
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Hepsi');
  const categories = ['Hepsi', 'Ev', 'Ofis', 'Detay', 'Dış Cephe'];

  const filteredItems = filter === 'Hepsi'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-slate-50 relative overflow-hidden" aria-label="Safir Temizlik referans çalışmalar galerisi">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-black tracking-[0.3em] uppercase text-[11px] mb-4">Referanslarımız</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter">İşçilikteki Kusursuzluk</h3>

          <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Galeri kategori filtresi">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                role="tab"
                aria-selected={filter === c}
                aria-label={`${c} kategorisine filtrele`}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" role="tabpanel">
          {filteredItems.slice(0, 12).map((item, i) => (
            <div key={i} className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-sm hover:shadow-2xl transition-all duration-700 bg-white border border-slate-200">
              <Image
                src={item.url}
                alt={`${item.title} - Safir Temizlik İstanbul ${item.category} Temizliği Referans`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
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
          <button
            className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-xl"
            aria-label="Tüm temizlik çalışmalarını görüntüle"
          >
            Tüm Çalışmaları İncele
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
