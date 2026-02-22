import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Çerez Politikası | Safir Temizlik',
    description: 'Safir Temizlik web sitesinde kullanılan çerezler hakkında bilgi. Çerez türleri, amaçları ve çerez tercihlerinizi yönetme hakkınız.',
    alternates: {
        canonical: 'https://safirtemizlik.com.tr/cookies',
    },
};

export default function CookiesPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
                    Çerez Politikası
                </h1>
                <p className="text-slate-500 font-medium mb-12">Son güncelleme: 21 Şubat 2026</p>

                <div className="prose prose-slate prose-lg max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">Çerez Nedir?</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Çerezler (cookies), web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza
                            kaydedilen küçük metin dosyalarıdır. Bu dosyalar, web sitemizin düzgün çalışmasını sağlamak,
                            kullanıcı deneyimini iyileştirmek ve web sitemizin kullanımını analiz etmek amacıyla kullanılmaktadır.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">Kullanılan Çerez Türleri</h2>

                        <div className="space-y-6">
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <h3 className="font-black text-slate-900 mb-2">🔒 Zorunlu Çerezler</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Web sitemizin temel işlevlerini yerine getirmesi için gereklidir. Bu çerezler olmadan
                                    site düzgün çalışmaz. Oturum yönetimi ve güvenlik amaçlı kullanılır.
                                </p>
                            </div>

                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <h3 className="font-black text-slate-900 mb-2">📊 Analiz Çerezleri</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Ziyaretçilerin web sitemizi nasıl kullandığını anlamamıza yardımcı olur. Sayfa görüntüleme
                                    sayıları, ziyaret süreleri gibi istatistiksel verileri toplar. Bu veriler anonim olarak işlenir.
                                </p>
                            </div>

                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <h3 className="font-black text-slate-900 mb-2">⚙️ İşlevsel Çerezler</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Dil tercihi, tema seçimi gibi kişiselleştirme ayarlarınızı hatırlamak için kullanılır.
                                    Bu çerezler sayesinde siteye her girişinizde tercihlerinizi yeniden ayarlamanız gerekmez.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">Çerezleri Yönetme</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Tarayıcınızın ayarlarından çerezleri kontrol edebilir, silebilir veya engelleyebilirsiniz.
                            Ancak çerezleri engellemeniz durumunda web sitemizin bazı özellikleri düzgün çalışmayabilir.
                        </p>
                        <p className="text-slate-600 leading-relaxed mt-4">
                            Çerez tercihlerinizi değiştirmek için tarayıcınızın ayarlar bölümünü ziyaret edebilirsiniz:
                        </p>
                        <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4">
                            <li><strong>Chrome:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler</li>
                            <li><strong>Firefox:</strong> Seçenekler → Gizlilik ve Güvenlik</li>
                            <li><strong>Safari:</strong> Tercihler → Gizlilik</li>
                            <li><strong>Edge:</strong> Ayarlar → Gizlilik ve Hizmetler</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">İletişim</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Çerez politikamızla ilgili sorularınız için bizimle iletişime geçebilirsiniz.
                        </p>
                        <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <p className="text-slate-700 font-bold">Safir Temizlik</p>
                            <p className="text-slate-600">E-posta: safir.temizlik.official@gmail.com</p>
                            <p className="text-slate-600">Telefon: 0 552 947 5313</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
