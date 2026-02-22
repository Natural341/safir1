"use client";

import React, { useState, useEffect } from 'react';
import { useCMS } from '../context/CMSContext';

const QuoteCalculator: React.FC = () => {
  const { data } = useCMS();
  const { pricing = { baseFee: 0, standardRate: 0, detailedRate: 0, roomRate: 0, extras: [] }, services = [] } = data || {};

  const [selectedServiceId, setSelectedServiceId] = useState<string>("ev");
  const [size, setSize] = useState<number>(85);
  const [type, setType] = useState<string>("Standart");
  const [rooms, setRooms] = useState<number>(3);
  const [extras, setExtras] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (!pricing || !services) return;

    const selectedService = services.find(s => s.id === selectedServiceId);
    const serviceMultiplier = selectedService?.multiplier || 1;
    
    let rate = type === "Detaylı" ? (pricing.detailedRate || 0) : (pricing.standardRate || 0);
    rate = rate * serviceMultiplier;
    let roomCharge = rooms * (pricing.roomRate || 0);
    
    let extrasTotal = extras.reduce((acc, curr) => {
      const option = pricing.extras?.find(o => o.id === curr);
      return acc + (option ? option.price : 0);
    }, 0);

    const calculatedTotal = (pricing.baseFee || 0) + (size * rate) + roomCharge + extrasTotal;
    setTotal(isNaN(calculatedTotal) ? 0 : calculatedTotal);
  }, [selectedServiceId, size, type, rooms, extras, pricing, services]);

  const toggleExtra = (id: string) => {
    setExtras(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const labelClass = "text-[10px] font-black uppercase tracking-widest text-slate-800 mb-2 block";

  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-black tracking-[0.3em] uppercase text-[11px] mb-4">Akıllı Hesaplama</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Fiyatını Şimdi Belirle</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          <div className="flex-1 bg-slate-50 p-6 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm relative">
            <div className="space-y-10">
              <div className="space-y-4">
                 <label className={labelClass}>Hizmet Türü</label>
                 <select 
                   value={selectedServiceId}
                   onChange={(e) => setSelectedServiceId(e.target.value)}
                   className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 font-bold text-slate-700 outline-none focus:border-blue-500 transition-all cursor-pointer"
                 >
                   {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                 </select>
              </div>

              <div className="space-y-4">
                <label className={labelClass}>Temizlik Derinliği</label>
                <div className="flex bg-white p-2 rounded-2xl border border-slate-200 w-full">
                  {["Standart", "Detaylı"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setType(t)}
                      className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${type === t ? 'bg-blue-600 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className={labelClass}>Alan Genişliği ({size} m²)</label>
                </div>
                <input 
                  type="range" min="30" max="600" value={size} 
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              <div className="space-y-4">
                <label className={labelClass}>Oda Sayısı</label>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {[1, 2, 3, 4, 5, 6].map(n => (
                    <button
                      key={n}
                      onClick={() => setRooms(n)}
                      className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl text-sm md:text-base font-black transition-all border-2 ${rooms === n ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-blue-400'}`}
                    >
                      {n === 6 ? '6+' : n}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className={labelClass}>Ekstra Hizmetler</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pricing.extras.map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => toggleExtra(opt.id)}
                      className={`p-4 md:p-5 rounded-2xl text-left border-2 transition-all flex items-center justify-between gap-3 ${extras.includes(opt.id) ? 'bg-blue-50 border-blue-600' : 'bg-white border-slate-200 hover:border-blue-200'}`}
                    >
                      <span className={`font-black text-xs md:text-sm ${extras.includes(opt.id) ? 'text-blue-700' : 'text-slate-600'}`}>{opt.label}</span>
                      {extras.includes(opt.id) && <span className="text-blue-600 font-black">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[420px] flex flex-col">
            <div className="flex-1 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] p-8 md:p-10 text-white flex flex-col justify-between shadow-2xl shadow-blue-200 sticky top-24">
              <div>
                <p className="text-blue-100 font-bold uppercase tracking-widest text-[10px] mb-4">Tahmini Teklif Tutarı</p>
                <div className="text-5xl md:text-6xl font-black mb-2 tracking-tighter">
                  {Math.round(total).toLocaleString('tr-TR')} <span className="text-xl md:text-2xl font-medium text-blue-200">TL</span>
                </div>
                <p className="text-blue-100/70 text-xs font-medium leading-relaxed">Fiyatlarımız İstanbul geneli için geçerli güncel verilerdir.</p>
              </div>

              <div className="my-10 space-y-4">
                <div className="flex items-center gap-4 text-xs md:text-sm font-bold bg-white/10 p-4 rounded-xl border border-white/10">
                   <div className="w-8 h-8 rounded-lg bg-white text-blue-600 flex items-center justify-center shrink-0 font-black text-[10px]">✓</div>
                   <span>Premium Hizmet Garantisi</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <a 
                  href={`https://wa.me/${data?.contact?.whatsapp || '905529475313'}?text=Merhaba, ${size}m2 ${selectedServiceId} (${type}) temizliği için yaklaşık ${Math.round(total)} TL teklif aldım. Rezervasyon yapmak istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-500 text-white py-4 md:py-5 rounded-2xl font-black text-base md:text-lg hover:bg-emerald-600 transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-3"
                >
                  <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
                  WhatsApp'tan Yaz
                </a>
                <a 
                  href={`tel:${data?.contact?.phone || '05529475313'}`}
                  className="w-full bg-white text-slate-900 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg hover:bg-slate-50 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 border border-slate-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;
