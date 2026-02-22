import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Hakkımızda | Safir Temizlik İstanbul',
    description: 'Safir Temizlik hakkında bilgi edinin. 25 yılı aşkın tecrübe, 200+ uzman kadro ve 4.000+ mutlu müşteri ile İstanbul\'un en güvenilir profesyonel temizlik şirketi.',
    keywords: ['safir temizlik hakkında', 'istanbul temizlik şirketi', 'profesyonel temizlik ekibi', 'güvenilir temizlik'],
    openGraph: {
        title: 'Hakkımızda | Safir Temizlik',
        description: '25 yılı aşkın tecrübe ile İstanbul\'un en güvenilir temizlik şirketi.',
        images: ['/logo.png'],
    },
    alternates: {
        canonical: 'https://safirtemizlik.com.tr/hakkimizda',
    },
};

const stats = [
    { number: '4.000+', label: 'Mutlu Müşteri' },
    { number: '200+', label: 'Uzman Personel' },
    { number: '25+', label: 'Yıllık Tecrübe' },
    { number: '39', label: 'İlçede Hizmet' },
];

const values = [
    {
        title: 'Güvenilirlik',
        desc: 'Tüm personelimiz eğitimli ve sigortalıdır. Yaşam alanlarınızın güvenliği bizim için en büyük önceliktir.'
    },
    {
        title: 'Kalite',
        desc: 'Endüstriyel grade ekipmanlar ve çevre dostu deterjanlarla en yüksek hijyen standartlarını sağlıyoruz.'
    },
    {
        title: 'Hız',
        desc: 'Aynı gün hizmet imkanı ile İstanbul genelinde 4 saat içinde kapınızdayız.'
    },
    {
        title: 'Şeffaflık',
        desc: 'Net fiyatlandırma, gizli maliyet yok. Fiyat hesaplama aracımızla anında teklif alın.'
    },
    {
        title: 'Çevre Dostu',
        desc: 'Biyolojik olarak parçalanabilen, çevre dostu ürünler kullanarak doğaya saygılı temizlik yapıyoruz.'
    },
    {
        title: 'Müşteri Memnuniyeti',
        desc: '24 saat içinde bildirdiğiniz tüm aksaklıklar için ücretsiz telafi temizliği garantisi veriyoruz.'
    },
];

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-slate-900 pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <span className="text-blue-500 font-black tracking-widest uppercase text-xs mb-6 block">
                        Safir Temizlik Ailesine Hoş Geldiniz
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
                        İstanbul&apos;un En Güvenilir <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            Temizlik Partneri
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                        25 yılı aşkın sektör tecrübemiz, 200&apos;ü aşkın uzman kadromuz ve İstanbul&apos;un 39 ilçesine
                        yayılan hizmet ağımızla yaşam ve çalışma alanlarınızı profesyonelce temizliyoruz.
                    </p>
                </div>
            </section>

            {/* Breadcrumbs */}
            <div className="bg-slate-50 border-y border-slate-100 py-4">
                <div className="max-w-7xl mx-auto px-6 text-[10px] font-bold uppercase tracking-widest text-slate-500 flex gap-3">
                    <a href="/" className="hover:text-blue-600">Ana Sayfa</a>
                    <span>/</span>
                    <span className="text-blue-600">Hakkımızda</span>
                </div>
            </div>

            {/* Stats */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                <div className="text-4xl md:text-5xl font-black text-blue-600 tracking-tighter mb-2">{stat.number}</div>
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4">Hikayemiz</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8">
                                Temizlik Değil, Yaşam Kalitesi Sunuyoruz
                            </h3>
                            <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                                <p>
                                    Safir Temizlik, İstanbul&apos;da kurulmuş profesyonel bir temizlik firmasıdır.
                                    Kuruluşumuzdan bu yana binlerce ev ve iş yerine hizmet vererek sektörde güvenilir
                                    bir marka haline geldik.
                                </p>
                                <p>
                                    Ekibimiz, sürekli eğitim programlarıyla güncel temizlik teknikleri ve hijyen
                                    standartlarını takip etmektedir. Her işe başlamadan önce detaylı bir değerlendirme
                                    yaparak müşterilerimize en uygun çözümü sunuyoruz.
                                </p>
                                <p>
                                    Çevre dostu ürünler ve son teknoloji ekipmanlar kullanarak hem etkili hem de
                                    sürdürülebilir temizlik hizmeti vermeyi ilke ediniyoruz.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200">
                            <Image
                                src="/images/hero1.jpg"
                                alt="Safir Temizlik Profesyonel Ekip"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4">Değerlerimiz</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                            Neden Safir Temizlik?
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value) => (
                            <div key={value.title} className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-sm mb-6">0{values.indexOf(value) + 1}</div>
                                <h4 className="text-xl font-black text-slate-900 mb-3">{value.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-16 bg-slate-50 border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="flex items-center gap-3 text-slate-600">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                                <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                            </div>
                            <div>
                                <div className="text-xs font-black text-slate-900 uppercase tracking-wider">Sigortalı Personel</div>
                                <div className="text-[10px] text-slate-500 font-bold">Tüm ekip sigortalı</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                                <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                            </div>
                            <div>
                                <div className="text-xs font-black text-slate-900 uppercase tracking-wider">Garanti</div>
                                <div className="text-[10px] text-slate-500 font-bold">Memnuniyet garantisi</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                                <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                                <div className="text-xs font-black text-slate-900 uppercase tracking-wider">Aynı Gün</div>
                                <div className="text-[10px] text-slate-500 font-bold">4 saat içinde hizmet</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                                <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                            </div>
                            <div>
                                <div className="text-xs font-black text-slate-900 uppercase tracking-wider">Çevre Dostu</div>
                                <div className="text-[10px] text-slate-500 font-bold">Organik deterjanlar</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
