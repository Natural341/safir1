"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setPosts(data.slice(0, 3)); 
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="py-24 text-center">
       <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
       <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Rehber Yükleniyor...</p>
    </div>
  );

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4">Safir Rehber</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Faydalı Bilgiler & Haberler</h3>
          </div>
          <Link href="/blog" className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-colors">
            Tüm Yazıları Gör <ChevronRight className="group-hover:translate-x-2 transition-transform" size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group block">
              <div className="relative h-72 rounded-[2.5rem] overflow-hidden mb-8 shadow-xl border border-slate-100">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600">{post.category}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={12} className="text-blue-600" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} className="text-blue-600" /> 5 Dakika</span>
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">{post.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
                <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 group-hover:gap-4 transition-all">
                  Devamını Oku <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
           <Link href="/blog" className="inline-flex bg-slate-50 border border-slate-100 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-slate-900 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
             Tüm Rehberleri İncele
           </Link>
        </div>
      </div>
    </section>
  );
}
