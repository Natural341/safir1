import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICE_DETAILS } from '@/constants/services';
import QuoteCalculator from '@/components/QuoteCalculator';
import FAQ from '@/components/FAQ';

// Static generation for all service slugs
export async function generateStaticParams() {
    return SERVICE_DETAILS.map((service) => ({
        slug: service.slug,
    }));
}

// Dynamic metadata per service
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = SERVICE_DETAILS.find((s) => s.slug === slug);
    if (!service) return {};

    return {
        title: `${service.title} | Safir Temizlik İstanbul`,
        description: `İstanbul ${service.title.toLowerCase()} hizmeti. ${service.description}`,
        keywords: service.keywords,
        openGraph: {
            title: `${service.fullTitle} | Safir Temizlik`,
            description: service.description,
            images: [service.img],
            url: `https://safirtemizlik.com.tr/hizmetler/${service.slug}`,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${service.title} İstanbul | Safir Temizlik`,
            description: service.description,
            images: [service.img],
        },
        alternates: {
            canonical: `https://safirtemizlik.com.tr/hizmetler/${service.slug}`,
        },
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = SERVICE_DETAILS.find((s) => s.slug === slug);
    if (!service) notFound();

    // Service JSON-LD
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.fullTitle,
        "description": service.longDescription,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Safir Temizlik",
            "telephone": "+905529475313",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Atatürk Mah. Demokrasi Cad. Alaca Sk. No:37",
                "addressLocality": "Sancaktepe/İstanbul",
                "addressCountry": "TR"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": "İstanbul"
        },
        "image": `https://safirtemizlik.com.tr${service.img}`,
        "url": `https://safirtemizlik.com.tr/hizmetler/${service.slug}`,
    };

    // FAQ JSON-LD for this specific service
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
            },
        })),
    };

    // Breadcrumb JSON-LD
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://safirtemizlik.com.tr" },
            { "@type": "ListItem", "position": 2, "name": "Hizmetlerimiz", "item": "https://safirtemizlik.com.tr/services" },
            { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://safirtemizlik.com.tr/hizmetler/${service.slug}` },
        ],
    };

    return (
        <>
            {/* Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <main className="min-h-screen bg-white">
                {/* Hero */}
                <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src={service.img}
                            alt={service.fullTitle}
                            fill
                            priority
                            className="object-cover opacity-15"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/60 via-slate-900/80 to-slate-950" />
                    </div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        {/* Breadcrumbs */}
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex gap-3 mb-10">
                            <Link href="/" className="hover:text-slate-200 transition-colors">Ana Sayfa</Link>
                            <span>/</span>
                            <Link href="/services" className="hover:text-slate-200 transition-colors">Hizmetlerimiz</Link>
                            <span>/</span>
                            <span className="text-slate-200">{service.title}</span>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-purple-300/80 font-black tracking-[0.3em] uppercase text-[11px] mb-4 block">
                                    {service.subtitle}
                                </span>
                                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.1]">
                                    {service.fullTitle}
                                </h1>
                                <p className="text-slate-300 text-lg leading-relaxed font-medium mb-8">
                                    {service.longDescription}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://wa.me/905529475313"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-100 active:scale-95 transition-all"
                                    >
                                        WhatsApp ile Teklif Al
                                    </a>
                                    <a
                                        href="tel:05529475313"
                                        className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10"
                                    >
                                        Hemen Ara
                                    </a>
                                </div>
                            </div>

                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 hidden lg:block">
                                <Image
                                    src={service.img}
                                    alt={`${service.title} - Safir Temizlik İstanbul`}
                                    fill
                                    className="object-cover"
                                    sizes="50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-slate-400 font-black tracking-[0.3em] uppercase text-[11px] mb-4">Neden Bizi Tercih Etmelisiniz</h2>
                            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
                                {service.title} Avantajlarımız
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {service.features.map((feature, i) => (
                                <div key={i} className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-sm mb-6">0{i + 1}</div>
                                    <h4 className="text-lg font-black text-slate-900 mb-3">{feature.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-slate-400 font-black tracking-[0.3em] uppercase text-[11px] mb-4">Süreç</h2>
                            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
                                Nasıl Çalışıyoruz?
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {service.process.map((step, i) => (
                                <div key={i} className="relative">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl mb-6">
                                        {i + 1}
                                    </div>
                                    <h4 className="text-lg font-black text-slate-900 mb-3">{step.step}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">{step.desc}</p>
                                    {i < service.process.length - 1 && (
                                        <div className="hidden lg:block absolute top-7 left-[4.5rem] w-[calc(100%-4.5rem)] h-[2px] bg-slate-200" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Service-specific FAQs */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-slate-400 font-black tracking-[0.3em] uppercase text-[11px] mb-4">Sıkça Sorulan Sorular</h2>
                            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
                                {service.title} Hakkında
                            </h3>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-4">
                            {service.faqs.map((faq, i) => (
                                <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-800 hover:text-slate-600 transition-colors">
                                        <span>{faq.q}</span>
                                        <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-500 font-medium leading-relaxed">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Quote Calculator */}
                <QuoteCalculator />

                {/* Other Services CTA */}
                <section className="py-20 bg-slate-900">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6">
                            Diğer Hizmetlerimizi İnceleyin
                        </h2>
                        <p className="text-slate-400 text-lg mb-12 font-medium max-w-2xl mx-auto">
                            İstanbul genelinde 7 farklı profesyonel temizlik hizmeti sunuyoruz.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {SERVICE_DETAILS.filter((s) => s.slug !== slug).map((s) => (
                                <Link
                                    key={s.slug}
                                    href={`/hizmetler/${s.slug}`}
                                    className="px-6 py-3 rounded-2xl bg-white/10 text-white text-sm font-bold hover:bg-blue-600 transition-all border border-white/10 hover:border-blue-600"
                                >
                                    {s.title}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-10">
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/30"
                            >
                                Tüm Hizmetleri Gör
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
