import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'KVKK Aydınlatma Metni | Safir Temizlik',
    description: 'Safir Temizlik KVKK (Kişisel Verilerin Korunması Kanunu) kapsamında aydınlatma metni. Kişisel verilerinizin nasıl işlendiği hakkında bilgi edinin.',
    alternates: {
        canonical: 'https://safirtemizlik.com.tr/privacy',
    },
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
                    KVKK Aydınlatma Metni
                </h1>
                <p className="text-slate-500 font-medium mb-12">Son güncelleme: 21 Şubat 2026</p>

                <div className="prose prose-slate prose-lg max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">1. Veri Sorumlusu</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Safir Temizlik olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında,
                            kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Bu aydınlatma metni
                            ile veri sorumlusu sıfatıyla kişisel verilerinizi hangi amaçlarla işlediğimizi, kimlere ve
                            hangi amaçla aktarabildiğimizi, kişisel veri toplamanın yöntemi ve hukuki sebebi ile haklarınız
                            hakkında sizi bilgilendirmek istiyoruz.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">2. Toplanan Kişisel Veriler</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Web sitemiz ve hizmetlerimiz kapsamında aşağıdaki kişisel verileriniz toplanmaktadır:
                        </p>
                        <ul className="list-disc list-inside text-slate-600 space-y-2">
                            <li><strong>Kimlik Bilgileri:</strong> Ad, soyad</li>
                            <li><strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi</li>
                            <li><strong>Hizmet Bilgileri:</strong> Talep edilen hizmet türü, adres, hizmet detayları</li>
                            <li><strong>Dijital Veriler:</strong> IP adresi, tarayıcı bilgileri, çerez verileri</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">3. Verilerin İşlenme Amaçları</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
                        </p>
                        <ul className="list-disc list-inside text-slate-600 space-y-2">
                            <li>Temizlik hizmetlerinin sunulması ve yönetilmesi</li>
                            <li>Müşteri taleplerinin değerlendirilmesi ve yanıtlanması</li>
                            <li>Fiyat teklifi hazırlanması ve iletilmesi</li>
                            <li>Randevu oluşturulması ve takibi</li>
                            <li>Hizmet kalitesinin artırılması</li>
                            <li>İlgili mevzuattan kaynaklanan yasal yükümlülüklerin yerine getirilmesi</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">4. Veri Aktarımı</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Kişisel verileriniz, yukarıda belirtilen amaçlar doğrultusunda, KVKK&apos;nın 8. ve 9. maddelerinde
                            belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde; hizmet sağlayıcılarımız,
                            iş ortaklarımız ve yasal zorunluluk halinde kamu kurum ve kuruluşları ile paylaşılabilecektir.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">5. Haklarınız</h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
                        </p>
                        <ul className="list-disc list-inside text-slate-600 space-y-2">
                            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                            <li>Kişisel verilerinizin düzeltilmesini isteme</li>
                            <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">6. İletişim</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Kişisel verilerinizle ilgili tüm soru ve taleplerinizi aşağıdaki kanallardan bize iletebilirsiniz:
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
