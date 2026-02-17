"use client";

import React from 'react';
import Image from 'next/image';
import { useCMS } from '../context/CMSContext';

interface ServicesProps {
  onServiceSelect?: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  const { data } = useCMS();

  // Helper to get specific modern icon based on service ID
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'ev':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
      case 'ofis':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>;
      case 'villa':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M17 21v-8.4a.6.6 0 0 0-.6-.6h-8.8a.6.6 0 0 0-.6.6V21" /><path d="M9 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" /></svg>;
      case 'insaat':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 22 2 22" /><path d="M2.58 14.38 12.34 22" /><path d="M12.8 14.6 22 21.8" /><path d="M21.5 7.6 15 2" /><path d="m2 15 9.4-7.4 3 2.4-9.4 7.4Z" /><path d="M15 2v19" /></svg>;
      case 'cam':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="12" x2="12" y1="3" y2="21" /><line x1="3" x2="21" y1="12" y2="12" /></svg>;
      case 'koltuk':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20" /><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" /><path d="M4 12v-3a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v3" /></svg>;
      case 'hali':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M8 2v20" /><path d="M12 2v20" /><path d="M16 2v20" /><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></svg>;
      case 'zemin':
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-8" /><path d="M16 4a2 2 0 0 0 2 2h4v1a2 2 0 0 1-2 2h-5.5a4 4 0 0 0-3.5 1 4 4 0 0 1-3.5 1h-2" /><path d="M15 2 9 8" /></svg>;
      default:
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-black tracking-[0.3em] uppercase text-[11px] mb-4">Uzmanlık Alanlarımız</h2>
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Hizmet Yelpazemiz</h3>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto font-medium">
            Evden ofise, inşaat sonrasından dış cepheye kadar geniş bir yelpazede profesyonel çözümler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.services.map((service, idx) => {
            const icon = getServiceIcon(service.id);

            return (
              <div key={idx} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2">
                <div className="h-56 overflow-hidden relative">
                  <Image
                    src={service.img}
                    alt={`İstanbul ${service.title} Hizmeti - Safir Temizlik Profesyonel Çözümler`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  <div className={`absolute bottom-4 right-4 w-12 h-12 ${service.color.replace('text-', 'bg-').replace('bg-', 'text-white ')} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                    {icon}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-xl font-black text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6 flex-grow line-clamp-3">
                    {service.desc}
                  </p>

                  <button
                    onClick={() => onServiceSelect?.(service.title)}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-2 duration-300 cursor-pointer"
                  >
                    İncele
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
