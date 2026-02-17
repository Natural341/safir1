"use client";
import Image from 'next/image';

const regions = {
  european: [
    "Arnavutköy", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy", "Başakşehir", 
    "Bayrampaşa", "Beşiktaş", "Beylikdüzü", "Beyoğlu", "Büyükçekmece", "Çatalca", 
    "Esenler", "Esenyurt", "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", 
    "Kağıthane", "Küçükçekmece", "Sarıyer", "Silivri", "Sultangazi", "Şişli", "Zeytinburnu"
  ],
  anatolian: [
    "Adalar", "Ataşehir", "Beykoz", "Çekmeköy", "Kadıköy", "Kartal", 
    "Maltepe", "Pendik", "Sancaktepe", "Sultanbeyli", "Şile", "Tuzla", 
    "Ümraniye", "Üsküdar"
  ]
};

export default function Regions() {
  return (
    <section id="regions" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <h2 className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4">Hizmet Ağımız</h2>
           <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">İstanbul'un Tamamındayız</h3>
           <p className="text-slate-500 font-medium mt-4 max-w-2xl mx-auto">
             Geniş araç filomuz ve mobil ekiplerimizle İstanbul'un her iki yakasında, en uzak semte bile aynı kalite standartlarıyla ulaşıyoruz.
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
           <div className="bg-white p-10 md:p-16 rounded-[3.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-3xl font-black text-blue-600 mb-10 flex items-center gap-4">
                <span className="w-3 h-10 bg-blue-600 rounded-full"></span>
                Avrupa Yakası
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6">
                 {regions.european.map(dist => (
                   <div key={dist} className="flex items-center gap-3 text-slate-600 font-bold text-xs">
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-200"></div>
                     {dist}
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-white p-10 md:p-16 rounded-[3.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-3xl font-black text-green-600 mb-10 flex items-center gap-4">
                <span className="w-3 h-10 bg-green-600 rounded-full"></span>
                Anadolu Yakası
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6">
                 {regions.anatolian.map(dist => (
                   <div key={dist} className="flex items-center gap-3 text-slate-600 font-bold text-xs">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-200"></div>
                     {dist}
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
