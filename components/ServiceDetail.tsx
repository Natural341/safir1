"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';

interface ServiceDetailProps {
  serviceId: string;
  onClose: () => void;
}

const serviceDetails: Record<string, any> = {
  "Ev Temizliği": {
    title: "Premium Ev Temizliği",
    subtitle: "Yaşam Alanlarınızda Safir Işıltısı",
    description: "Eviniz sadece bir mekan değil, huzur bulduğunuz kaledir. Safir Temizlik olarak, her köşeyi kendi evimiz gibi benimsiyor, 2026 model teknolojik ekipmanlarımızla derinlemesine hijyen sağlıyoruz.",
    image: "/images/services/ev.jpg",
    features: [
      { title: "Detaylı Hijyen", desc: "Mutfak dolaplarından banyo fayanslarına kadar her nokta sterilize edilir." },
      { title: "Güvenli Personel", desc: "Tüm ekibimiz sigortalı ve güvenlik taramasından geçmiş profesyonellerdir." },
      { title: "Ekolojik Ürünler", desc: "Sağlığınızı koruyan, alerjen içermeyen bitkisel deterjanlar kullanıyoruz." }
    ]
  },
  "Ofis Temizliği": {
    title: "Kurumsal Ofis Hijyeni",
    subtitle: "Verimliliği Artıran Temiz Alanlar",
    description: "İş yerinizdeki temizlik, çalışan motivasyonunun en önemli anahtarıdır. Mesai saatlerinize engel olmadan, profesyonel bir çalışma ortamı yaratıyoruz.",
    image: "/images/services/ofis.jpg",
    features: [
      { title: "Elektronik Bakımı", desc: "Hassas cihazlarınız için statik elektrik önleyici özel temizlik." },
      { title: "Esnek Çalışma", desc: "Akşam veya hafta sonu seçenekleriyle işinizi aksatmıyoruz." },
      { title: "Periyodik Plan", desc: "Haftalık veya aylık aboneliklerle ofisinizi her zaman temiz tutun." }
    ]
  },
  "Apartman/Merdiven Temizliği": {
    title: "Apartman & Merdiven Bakımı",
    subtitle: "Ortak Alanlarda Kusursuz Düzen",
    description: "Binanızın girişinden en üst katına kadar, komşularınızla birlikte huzurla yaşayacağınız temizlik standartlarını getiriyoruz.",
    image: "/images/services/apartman.jpg",
    features: [
      { title: "Düzenli Program", desc: "Belirlenen gün ve saatte aksatmadan profesyonel hizmet." },
      { title: "İlaçlama Desteği", desc: "Haşerelere karşı koruyucu ve temizleyici özel solüsyonlar." },
      { title: "Pırıl Pırıl Camlar", desc: "Ortak alan camları ve asansör içleri için özel parlatma." }
    ]
  }
};

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onClose }) => {
  const data = serviceDetails[serviceId] || serviceDetails["Ev Temizliği"];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in fade-in duration-500">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-sm">S</div>
            <span className="font-black text-xs uppercase tracking-widest text-slate-400">Hizmet Detayı</span>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 hover:bg-blue-600 hover:text-white transition-all">✕</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Uzmanlık Alanı</span>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-[1.1]">
              {data.title}
            </h1>
            <p className="text-xl font-bold text-blue-500 mb-8">{data.subtitle}</p>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
              {data.description}
            </p>

            <div className="grid gap-6">
              {data.features.map((f: any, i: number) => (
                <div key={i} className="flex gap-5 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {i === 0 ? '✨' : i === 1 ? '🛡️' : '🌱'}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1">{f.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">Hemen Randevu Al</button>
              <button className="bg-white border border-slate-200 text-slate-600 px-10 py-5 rounded-2xl font-black hover:bg-slate-50 transition-all">İletişime Geç</button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
            <Image src={data.image} alt={data.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
