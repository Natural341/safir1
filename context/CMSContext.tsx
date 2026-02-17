"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ServiceData {
  id: string;
  title: string;
  desc: string;
  img: string;
  color: string;
  multiplier: number;
}

interface PricingConfig {
  baseFee: number;
  standardRate: number;
  detailedRate: number;
  roomRate: number;
  extras: { id: string; label: string; price: number }[];
}

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
}

interface CMSData {
  hero: {
    slides: HeroSlide[];
  };
  contact: {
    phone: string;
    whatsapp: string;
    instagram: string;
    address: string;
    email: string;
  };
  pricing: PricingConfig;
  services: ServiceData[];
}

const initialData: CMSData = {
  hero: {
    slides: [
      {
        id: 1,
        title: "Safir Temizlik Güvencesi",
        subtitle: "İstanbul'un En İyi Temizlik Hizmeti",
        desc: "Yaşam alanlarınızda teknolojik ve hijyenik Safir dokunuşunu hissedin. Profesyonel kadromuzla İstanbul genelinde yanınızdayız.",
        image: "/images/gallery/salon.jpg"
      },
      {
        id: 2,
        title: "7/24 Profesyonel Ekip",
        subtitle: "Pırıl Pırıl Bir Yaşam Alanı",
        desc: "Eviniz veya ofisiniz için detaylı hijyen çözümleri. Aynı gün hizmet imkanıyla zamandan tasarruf edin.",
        image: "/images/gallery/ferahlik.jpg"
      },
      {
        id: 3,
        title: "Kurumsal Çözümler",
        subtitle: "Ofisten Fabrikaya Hijyen Standartları",
        desc: "Büyük ölçekli projelerde uzman kadromuzla yanınızdayız. Periyodik bakım planlarıyla sürekli temizlik garantisi.",
        image: "/images/gallery/kurumsal.jpg"
      }
    ]
  },
  contact: {
    phone: "0 552 947 5313",
    whatsapp: "905529475313",
    instagram: "safirtemizlik.hizmetleri",
    address: "İstanbul Geneli Hizmet Ağı",
    email: "okan428215@gmail.com"
  },
  pricing: {
    baseFee: 2450,
    standardRate: 65,
    detailedRate: 95,
    roomRate: 850,
    extras: [
      { id: 'materials', label: 'Malzemeli Temizlik', price: 850 },
      { id: 'windows', label: 'Cam Temizliği', price: 1200 },
      { id: 'balcony', label: 'Balkon Yıkama', price: 750 },
    ]
  },
  services: [
    { id: "ev", title: "Ev Temizliği", desc: "Eviniz için detaylı ve hijyenik çözümler.", img: "/images/services/ev.jpg", color: "text-blue-600 bg-blue-50", multiplier: 1 },
    { id: "ofis", title: "Ofis Temizliği", desc: "Kurumsal iş yerleri için profesyonel hijyen.", img: "/images/services/ofis.jpg", color: "text-cyan-600 bg-cyan-50", multiplier: 1.2 },
    { id: "apartman", title: "Apartman/Merdiven Temizliği", desc: "Ortak alanlar için periyodik temizlik hizmeti.", img: "/images/services/apartman.jpg", color: "text-amber-600 bg-amber-50", multiplier: 0.8 },
    { id: "kurumsal", title: "Kurumsal Temizlik", desc: "Büyük ölçekli tesisler ve fabrikalar için uzman kadro.", img: "/images/services/kurumsal.jpg", color: "text-indigo-600 bg-indigo-50", multiplier: 1.5 },
    { id: "bos-ev", title: "Boş Ev Temizliği", desc: "Taşınma öncesi ve sonrası derinlemesine sterilizasyon.", img: "/images/services/bos-ev.jpg", color: "text-purple-600 bg-purple-50", multiplier: 1.3 },
    { id: "cam", title: "Cam Temizliği", desc: "Dış cephe ve yüksek katlı binalar için profesyonel cam temizliği.", img: "/images/services/cam.jpg", color: "text-sky-600 bg-sky-50", multiplier: 1.1 },
    { id: "malzemeli", title: "Malzemeli Temizlik Hizmeti", desc: "Deterjan ve ekipman dahil, tam kapsamlı temizlik.", img: "/images/services/malzemeli.jpg", color: "text-emerald-600 bg-emerald-50", multiplier: 1.4 }
  ]
};

interface CMSContextType {
  data: CMSData;
  updateData: (newData: CMSData) => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<CMSData>(initialData);

  useEffect(() => {
    // Verileri API'den çek
    fetch('/api/cms')
      .then(res => res.json())
      .then(savedData => {
        if (savedData) setData(savedData);
      })
      .catch(err => console.error("CMS veri çekme hatası:", err));
  }, []);

  const updateData = async (newData: CMSData) => {
    setData(newData);
    try {
      await fetch('/api/cms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData),
      });
    } catch (err) {
      console.error("CMS veri kaydetme hatası:", err);
    }
  };

  return (
    <CMSContext.Provider value={{ data, updateData }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) throw new Error("useCMS must be used within CMSProvider");
  return context;
};
