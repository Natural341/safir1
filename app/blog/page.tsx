import React from 'react';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Clock, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Safir Temizlik Blog | Profesyonel Temizlik & Hijyen Rehberi",
  description: "Temizlik dünyasından en güncel haberler, profesyonel ipuçları ve sağlıklı yaşam rehberleri. 2026 hijyen trendlerini keşfedin.",
  keywords: ['temizlik rehberi', 'hijyen ipuçları', 'ev temizliği trendleri', 'ofis hijyen', 'profesyonel temizlik blog'],
  openGraph: {
    title: 'Safir Temizlik Blog | Profesyonel Temizlik & Hijyen Rehberi',
    description: 'Temizlik dünyasından profesyonel ipuçları, hijyen trendleri ve uzman tavsiyeleri.',
    images: ['/logo.png'],
    url: 'https://safirtemizlik.com.tr/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safir Temizlik Blog | Hijyen Rehberi',
    description: 'Temizlik ve hijyen dünyasından en güncel profesyonel ipuçları.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://safirtemizlik.com.tr/blog',
  },
};

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://safirtemizlik.com.tr" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://safirtemizlik.com.tr/blog" }
          ]
        })
      }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4 block">Safir Bilgi Portalı</h1>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8">Profesyonel Temizlik Rehberi</h2>
            <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Yaşam alanlarınızda hijyeni sağlamanın bilimsel yolları, uzman tavsiyeleri ve en yeni temizlik teknolojileri burada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
                <div className="relative h-72 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600">{post.category}</span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} /> 5 Dakika</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
                  <div className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-blue-600 group-hover:gap-5 transition-all">
                    Devamını Oku <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
