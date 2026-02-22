import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hizmetlerimiz | Safir Temizlik İstanbul',
    description: 'İstanbul genelinde profesyonel ev temizliği, ofis temizliği, apartman temizliği, cam temizliği, boş ev temizliği ve malzemeli temizlik hizmeti. Safir Temizlik ile yaşam alanlarınız pırıl pırıl.',
    keywords: ['ev temizliği istanbul', 'ofis temizliği', 'apartman temizliği', 'cam temizliği', 'boş ev temizliği', 'malzemeli temizlik', 'kurumsal temizlik', 'profesyonel temizlik hizmeti'],
    openGraph: {
        title: 'Hizmetlerimiz | Safir Temizlik İstanbul',
        description: 'İstanbul genelinde profesyonel ev, ofis, apartman, cam temizliği ve daha fazlası. 7 farklı hizmet kategorisinde uzman çözümler.',
        images: ['/logo.png'],
        url: 'https://safirtemizlik.com.tr/services',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hizmetlerimiz | Safir Temizlik İstanbul',
        description: 'İstanbul genelinde 7 farklı profesyonel temizlik hizmeti.',
        images: ['/logo.png'],
    },
    alternates: {
        canonical: 'https://safirtemizlik.com.tr/services',
    },
};

const services = [
    {
        id: 'ev',
        title: 'Ev Temizliği',
        desc: 'Eviniz için detaylı ve hijyenik çözümler. HEPA filtreli vakum sistemleri, buhar makineleri ve antibakteriyel solüsyonlar ile derinlemesine temizlik.',
        img: '/images/services/ev.jpg',
        features: ['Detaylı hijyen', 'Sigortalı personel', 'Ekolojik ürünler', 'Aynı gün hizmet'],
        color: 'from-blue-600 to-blue-800',
    },
    {
        id: 'ofis',
        title: 'Ofis Temizliği',
        desc: 'Kurumsal iş yerleri için profesyonel hijyen standartları. Mesai saatlerinizi aksatmadan, çalışanlarınız için sağlıklı bir ortam yaratıyoruz.',
        img: '/images/services/ofis.jpg',
        features: ['Mesai dışı hizmet', 'Periyodik plan', 'Elektronik bakımı', 'Dezenfeksiyon'],
        color: 'from-cyan-600 to-cyan-800',
    },
    {
        id: 'apartman',
        title: 'Apartman/Merdiven Temizliği',
        desc: 'Ortak alanlar için periyodik temizlik hizmeti. Merdiven, lobi, asansör ve otopark alanlarınız her zaman temiz.',
        img: '/images/services/apartman.jpg',
        features: ['Periyodik program', 'Merdiven yıkama', 'Asansör temizliği', 'İlaçlama desteği'],
        color: 'from-amber-600 to-amber-800',
    },
    {
        id: 'kurumsal',
        title: 'Kurumsal Temizlik',
        desc: 'Büyük ölçekli tesisler, fabrikalar ve AVM\'ler için uzman kadro ve endüstriyel ekipmanlarla profesyonel çözümler.',
        img: '/images/services/kurumsal.jpg',
        features: ['Endüstriyel ekipman', 'Uzman kadro', 'Özel çözümler', 'Kalite raporlama'],
        color: 'from-indigo-600 to-indigo-800',
    },
    {
        id: 'bos-ev',
        title: 'Boş Ev Temizliği',
        desc: 'Taşınma öncesi ve sonrası derinlemesine sterilizasyon. Yeni evinize veya kiracınıza tertemiz bir alan bırakın.',
        img: '/images/services/bos-ev.jpg',
        features: ['Derin temizlik', 'Sterilizasyon', 'Boya sonrası', 'Zemin cilalama'],
        color: 'from-purple-600 to-purple-800',
    },
    {
        id: 'cam',
        title: 'Cam Temizliği',
        desc: 'Dış cephe ve yüksek katlı binalar için profesyonel cam temizliği. Özel ekipmanlarla pırıl pırıl camlar.',
        img: '/images/services/cam.jpg',
        features: ['Dış cephe', 'Yüksek kat', 'Özel ekipman', 'Profesyonel kadro'],
        color: 'from-sky-600 to-sky-800',
    },
    {
        id: 'malzemeli',
        title: 'Malzemeli Temizlik Hizmeti',
        desc: 'Deterjan, ekipman ve profesyonel temizlik malzemeleri dahil, tam kapsamlı temizlik hizmeti. Siz sadece kapıyı açın.',
        img: '/images/services/malzemeli.jpg',
        features: ['Malzeme dahil', 'Profesyonel ürünler', 'HEPA filtre', 'Buhar teknolojisi'],
        color: 'from-emerald-600 to-emerald-800',
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative bg-slate-900 text-white py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-slate-900" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-blue-400 font-black tracking-[0.3em] uppercase text-[11px] mb-4">Profesyonel Çözümler</h2>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Hizmetlerimiz</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                        Evden ofise, apartmandan kurumsal alanlara kadar İstanbul genelinde profesyonel temizlik çözümleri sunuyoruz.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid gap-16">
                    {services.map((service, idx) => (
                        <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                            {/* Image */}
                            <div className={`relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <Image src={service.img} alt={`İstanbul ${service.title} Hizmeti - Safir Temizlik`} fill className="object-cover" />
                                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`} />
                            </div>

                            {/* Content */}
                            <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white text-xs font-black uppercase tracking-widest`}>
                                    <span>0{idx + 1}</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">{service.title}</h2>
                                <p className="text-slate-500 text-lg leading-relaxed font-medium">{service.desc}</p>

                                <div className="grid sm:grid-cols-2 gap-3">
                                    {service.features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100">
                                            <svg className="text-blue-600 shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            <span className="text-sm font-bold text-slate-700">{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <Link
                                        href={`/hizmetler/${service.id === 'bos-ev' ? 'bos-ev-temizligi' : service.id === 'malzemeli' ? 'malzemeli-temizlik' : service.id === 'kurumsal' ? 'kurumsal-temizlik' : `${service.id}-temizligi`}`}
                                        className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-xl"
                                    >
                                        DETAYLI İNCELE
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </Link>
                                    <a
                                        href="tel:05529475313"
                                        className="inline-flex items-center gap-3 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all"
                                    >
                                        HEMEN ARA
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-900 py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
                        Hizmet Almak İçin Hemen Arayın
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 font-medium">
                        İstanbul genelinde 7/24 ulaşılabilir müşteri hizmetleri ile hızlı ve profesyonel çözümler sunuyoruz.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="tel:08505325282" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/30">
                            0850 532 52 82
                        </a>
                        <Link href="/#contact" className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-100 transition-all">
                            İletişim Formu
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
