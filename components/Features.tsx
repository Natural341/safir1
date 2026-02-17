"use client";

import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Hızlıyız",
      desc: "En kısa sürede telefon ve maillerinizi yanıtlıyor, ihtiyacınız olan hizmeti size en hızlı şekilde sunuyoruz.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      ),
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Tecrübeli Ekipler",
      desc: "Temizlik sektöründe yılların deneyimine sahip, eğitimli ve sertifikalı profesyonel kadrolar.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
      ),
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Mutlu Personeller",
      desc: "Çalışan memnuniyetinin, müşteri memnuniyetinin anahtarı olduğunun bilincindeyiz.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      ),
      color: "bg-rose-50 text-rose-600"
    },
    {
      title: "Kaliteli Malzeme",
      desc: "Sağlığa zararsız, TSE onaylı ve yüzeylere zarar vermeyen 1. sınıf temizlik ürünleri.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
      ),
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-start group">
              <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;


