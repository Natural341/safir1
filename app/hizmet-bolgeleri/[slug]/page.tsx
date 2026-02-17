import React from 'react';
import { Metadata } from 'next';
import { REGIONS } from '@/constants/regions';
import { notFound } from 'next/navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import QuoteCalculator from '@/components/QuoteCalculator';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const region = REGIONS.find((r) => r.slug === slug);

  if (!region) return { title: 'Sayfa Bulunamadı' };

  return {
    title: `${region.name} Temizlik Şirketi | Safir Temizlik İstanbul`,
    description: `${region.name} genelinde profesyonel ev, ofis ve inşaat sonrası temizlik hizmetleri. Safir Temizlik ile hijyenik, güvenilir ve uygun fiyatlı çözümler.`,
    keywords: [`${region.name} temizlik`, `${region.name} ev temizliği`, `${region.name} ofis temizliği`, `${region.name} temizlik şirketi`, 'istanbul temizlik'],
    openGraph: {
      title: `${region.name} Temizlik Hizmetleri | Safir Temizlik`,
      description: `${region.name} bölgesinde profesyonel ev ve ofis temizliği. Aynı gün hizmet, sigortalı personel.`,
      images: ['/logo.png'],
      url: `https://safirtemizlik.com.tr/hizmet-bolgeleri/${slug}`,
      locale: 'tr_TR',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${region.name} Temizlik | Safir Temizlik`,
      description: `${region.name} bölgesinde profesyonel temizlik hizmetleri.`,
      images: ['/logo.png'],
    },
    alternates: {
      canonical: `https://safirtemizlik.com.tr/hizmet-bolgeleri/${slug}`,
    },
  };
}

export default async function RegionPage({ params }: Props) {
  const { slug } = await params;
  const region = REGIONS.find((r) => r.slug === slug);

  if (!region) notFound();

  return (
    <div className="flex flex-col">
      {/* Özel Hero Alanı */}
      <section className="bg-slate-900 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-blue-500 font-black tracking-widest uppercase text-xs mb-6 block">
            {region.name} Yerel Temizlik Ekibi
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
            {region.name} Profesyonel <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Temizlik Hizmetleri
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            {region.name} bölgesindeki ev ve iş yerleriniz için uzman kadromuz, son teknoloji ekipmanlarımız ve hijyen garantili hizmetlerimizle yanınızdayız.
          </p>
        </div>
      </section>

      {/* Breadcrumbs for SEO */}
      <div className="bg-slate-50 border-y border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-6 text-[10px] font-bold uppercase tracking-widest text-slate-500 flex gap-3">
          <a href="/" className="hover:text-blue-600">Ana Sayfa</a>
          <span>/</span>
          <span className="text-slate-900">Hizmet Bölgeleri</span>
          <span>/</span>
          <span className="text-blue-600">{region.name}</span>
        </div>
      </div>

      <Services />

      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Hemen Fiyat Alın</h2>
            <p className="mt-4 text-slate-500 font-medium">{region.name} özel fiyat tarifelerimizle tanışın.</p>
          </div>
          <QuoteCalculator />
        </div>
      </div>

      <FAQ />
      <ContactForm />
    </div>
  );
}

// Statik sayfa üretimi için (Build hızı artar)
export async function generateStaticParams() {
  return REGIONS.map((region) => ({
    slug: region.slug,
  }));
}
