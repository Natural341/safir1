import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id: Number(id) } });

  if (!post) return { title: 'Yazı Bulunamadı' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      locale: 'tr_TR',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://safirtemizlik.com.tr/blog/${id}`,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id: Number(id) } });

  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.createdAt.toISOString(),
    "dateModified": post.updatedAt.toISOString(),
    "author": {
      "@type": "Person",
      "name": "Elif Kirazlı",
      "url": "https://safirtemizlik.com.tr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Safir Temizlik",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safirtemizlik.com.tr/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://safirtemizlik.com.tr/blog/${post.id}`
    }
  };

  // İçerikteki anahtar kelimelere otomatik link ekleme
  const contentWithLinks = post.content
    .replace(/Ev Temizliği/g, '<a href="/services" class="text-blue-600 hover:underline font-bold">Ev Temizliği</a>')
    .replace(/Ofis Temizliği/g, '<a href="/services" class="text-blue-600 hover:underline font-bold">Ofis Temizliği</a>')
    .replace(/İnşaat Sonrası/g, '<a href="/services" class="text-blue-600 hover:underline font-bold">İnşaat Sonrası</a>')
    .replace(/Safir Temizlik/g, '<a href="/" class="text-blue-600 hover:underline font-bold">Safir Temizlik</a>')
    .replace(/\n/g, '<br />');

  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Blog'a Dön
        </Link>

        {/* Hero */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6 font-medium">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full">{post.category}</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.createdAt).toLocaleDateString('tr-TR')}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Safir Editör
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              5 dk okuma
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-slate-600 font-medium leading-relaxed 
          prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tighter
          prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
          prose-p:mb-6 prose-p:text-base prose-p:leading-[1.9]
          prose-ul:my-6 prose-li:text-base
          prose-strong:text-slate-800
          prose-img:rounded-3xl prose-img:shadow-xl prose-img:my-10 prose-img:w-full prose-img:object-cover prose-img:max-h-[450px]
          prose-blockquote:border-l-blue-600 prose-blockquote:bg-blue-50/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:text-slate-700 prose-blockquote:font-semibold prose-blockquote:not-italic"
          dangerouslySetInnerHTML={{ __html: contentWithLinks }}
        />

        {/* Author Card at Bottom */}
        <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-lg flex-shrink-0">
            <User size={32} />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-black text-slate-900 text-lg mb-1">Elif Kirazlı</p>
            <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">Safir Temizlik · İçerik Editörü</p>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">Temizlik ve hijyen alanında uzman içerik üreticisi. Profesyonel temizlik sektöründe yılların deneyimiyle, yaşam alanlarınızı daha sağlıklı hale getirmeniz için rehber içerikler hazırlıyor.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
