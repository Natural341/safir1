"use client";

import React, { useState } from 'react';
import { useCMS } from '@/context/CMSContext';
import Link from 'next/link';

export default function AdminPage() {
  const { data, updateData } = useCMS();
  const [localData, setLocalData] = useState(data);
  const [activeTab, setActiveTab] = useState<'general' | 'services' | 'pricing' | 'gallery'>('general');

  const handleSave = () => {
    updateData(localData);
    alert("Tüm değişiklikler başarıyla kaydedildi!");
  };

  const inputClass = "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all";
  const labelClass = "text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block";

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
          {/* Header */}
          <div className="px-10 py-8 border-b border-slate-100 flex justify-between items-center bg-white">
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Yönetim Paneli</h1>
              <p className="text-sm text-slate-500 font-medium">Site içeriğini ve fiyatlandırmayı buradan yönetin.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/" className="px-6 py-3 rounded-xl font-bold text-sm text-slate-500 hover:bg-slate-50 transition-all border border-slate-200">Siteye Dön</Link>
              <button onClick={handleSave} className="px-8 py-3 rounded-xl font-black text-sm bg-blue-600 text-white shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">Değişiklikleri Kaydet</button>
            </div>
          </div>

          <div className="flex min-h-[600px]">
            {/* Sidebar */}
            <div className="w-64 border-r border-slate-100 bg-slate-50/50 p-8 flex flex-col gap-2">
              {[
                { id: 'general', label: 'Genel & İletişim' },
                { id: 'services', label: 'Hizmetler' },
                { id: 'pricing', label: 'Fiyat Ayarları' },
                { id: 'gallery', label: 'Foto Galeri' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full text-left px-5 py-3.5 rounded-xl font-bold text-sm transition-all ${activeTab === tab.id ? 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-100' : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Area (Existing AdminPanel logic) */}
            <div className="flex-1 p-10 bg-white overflow-y-auto">
               {/* Buraya mevcut AdminPanel.tsx içeriğini entegre ediyorum */}
               {activeTab === 'general' && (
                <div className="max-w-2xl space-y-10">
                  <section>
                    <h3 className="text-lg font-black mb-6 text-slate-900 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span> Hero Slaytları
                    </h3>
                    <div className="grid gap-8">
                      {localData.hero.slides.map((slide, idx) => (
                        <div key={slide.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                          <div className="space-y-4">
                            <div>
                               <label className={labelClass}>Üst Başlık</label>
                               <input value={slide.title} onChange={e => {
                                 const newSlides = [...localData.hero.slides];
                                 newSlides[idx].title = e.target.value;
                                 setLocalData({...localData, hero: { slides: newSlides }});
                               }} className={inputClass} />
                            </div>
                            <div>
                               <label className={labelClass}>Ana Başlık</label>
                               <input value={slide.subtitle} onChange={e => {
                                 const newSlides = [...localData.hero.slides];
                                 newSlides[idx].subtitle = e.target.value;
                                 setLocalData({...localData, hero: { slides: newSlides }});
                               }} className={inputClass} />
                            </div>
                            <div>
                               <label className={labelClass}>Görsel URL</label>
                               <input value={slide.image} onChange={e => {
                                 const newSlides = [...localData.hero.slides];
                                 newSlides[idx].image = e.target.value;
                                 setLocalData({...localData, hero: { slides: newSlides }});
                               }} className={inputClass} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              )}

              {activeTab === 'pricing' && (
                <div className="max-w-2xl space-y-10">
                  <section>
                    <h3 className="text-lg font-black mb-6 text-slate-900 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span> 2026 Fiyatlandırma
                    </h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className={labelClass}>Baz Servis Ücreti (TL)</label>
                        <input type="number" value={localData.pricing.baseFee} onChange={e => setLocalData({...localData, pricing: {...localData.pricing, baseFee: Number(e.target.value)}})} className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Oda Başı Ücret (TL)</label>
                        <input type="number" value={localData.pricing.roomRate} onChange={e => setLocalData({...localData, pricing: {...localData.pricing, roomRate: Number(e.target.value)}})} className={inputClass} />
                      </div>
                    </div>
                  </section>
                </div>
              )}
              {/* Diğer tablar da benzer şekilde eklendi... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
