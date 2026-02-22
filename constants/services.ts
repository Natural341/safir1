export interface ServiceDetailData {
    id: string;
    slug: string;
    title: string;
    fullTitle: string;
    subtitle: string;
    description: string;
    longDescription: string;
    img: string;
    color: string;
    gradient: string;
    features: { title: string; desc: string; icon: string }[];
    process: { step: string; desc: string }[];
    faqs: { q: string; a: string }[];
    keywords: string[];
}

export const SERVICE_DETAILS: ServiceDetailData[] = [
    {
        id: 'ev',
        slug: 'ev-temizligi',
        title: 'Ev Temizliği',
        fullTitle: 'İstanbul Profesyonel Ev Temizliği Hizmeti',
        subtitle: 'Yaşam Alanlarınızda Safir Işıltısı',
        description: 'Eviniz sadece bir mekan değil, huzur bulduğunuz kaledir. HEPA filtreli vakum sistemleri, buhar makineleri ve antibakteriyel solüsyonlar ile derinlemesine hijyen sağlıyoruz.',
        longDescription: 'Safir Temizlik olarak, İstanbul genelinde profesyonel ev temizliği hizmeti sunuyoruz. Eğitimli ve sigortalı kadromuz, evinizin mutfak, banyo, yatak odaları, salon ve balkon gibi her noktasını detaylı şekilde temizler. Çevre dostu deterjanlar ve son teknoloji ekipmanlar kullanarak sağlıklı yaşam alanları oluşturuyoruz. Standart temizlik veya detaylı derin temizlik seçenekleriyle ihtiyacınıza en uygun çözümü sunuyoruz.',
        img: '/images/services/ev.jpg',
        color: 'text-blue-600',
        gradient: 'from-blue-600 to-blue-800',
        features: [
            { title: 'Detaylı Hijyen', desc: 'Mutfak dolaplarından banyo fayanslarına kadar her nokta sterilize edilir.', icon: '✨' },
            { title: 'Güvenli Personel', desc: 'Tüm ekibimiz sigortalı ve güvenlik taramasından geçmiş profesyonellerdir.', icon: '🛡️' },
            { title: 'Ekolojik Ürünler', desc: 'Sağlığınızı koruyan, alerjen içermeyen bitkisel deterjanlar kullanıyoruz.', icon: '🌿' },
            { title: 'Aynı Gün Hizmet', desc: 'Müsaitlik durumuna göre İstanbul genelinde 4 saat içinde kapınızdayız.', icon: '⚡' },
        ],
        process: [
            { step: 'Talep & Değerlendirme', desc: 'Evinizin büyüklüğü, oda sayısı ve özel taleplerinize göre fiyat teklifi oluşturulur.' },
            { step: 'Ekip Planlaması', desc: 'Bölgenize en yakın eğitimli ekibimiz atanır ve randevu saatiniz belirlenir.' },
            { step: 'Profesyonel Temizlik', desc: 'Ekibimiz belirlenen saatte gelir, tüm alanlar sistematik şekilde temizlenir.' },
            { step: 'Kontrol & Teslim', desc: 'Temizlik sonrası kontrol yapılır, memnuniyetiniz teyit edilir.' },
        ],
        faqs: [
            { q: 'Ev temizliği ne kadar sürer?', a: 'Evin büyüklüğüne göre değişir. Ortalama 2+1 bir daire için standart temizlik 3-4 saat, detaylı temizlik 5-6 saat sürer.' },
            { q: 'Ev temizliği fiyatları ne kadar?', a: 'Fiyatlarımız metrekare, oda sayısı ve temizlik derinliğine göre belirlenir. Web sitemizdeki hesaplama aracından anında fiyat alabilirsiniz.' },
            { q: 'Temizlik malzemelerini ben mi sağlamalıyım?', a: 'Malzemeli paket seçerseniz tüm deterjan ve ekipmanlar tarafımızdan karşılanır. Malzemesiz pakette evinizde mevcut malzemeler kullanılır.' },
        ],
        keywords: ['ev temizliği istanbul', 'ev temizliği fiyatları', 'profesyonel ev temizliği', 'derin ev temizliği', 'günlük ev temizliği'],
    },
    {
        id: 'ofis',
        slug: 'ofis-temizligi',
        title: 'Ofis Temizliği',
        fullTitle: 'İstanbul Profesyonel Ofis Temizliği Hizmeti',
        subtitle: 'Verimliliği Artıran Temiz Çalışma Alanları',
        description: 'İş yerinizdeki temizlik, çalışan motivasyonunun en önemli anahtarıdır. Mesai saatlerinize engel olmadan, profesyonel bir çalışma ortamı yaratıyoruz.',
        longDescription: 'Safir Temizlik, İstanbul genelindeki ofis ve iş yerlerine profesyonel temizlik hizmeti sunmaktadır. Çalışma saatlerinizi aksatmadan, akşam veya hafta sonu seçenekleriyle ofisinizi her zaman hijyenik tutuyoruz. Bilgisayar, telefon ve diğer elektronik cihazlarınız için statik elektrik önleyici özel temizlik uyguluyoruz. Periyodik abonelik planlarımız ile düzenli temizlik garantisi sağlıyoruz.',
        img: '/images/services/ofis.jpg',
        color: 'text-cyan-600',
        gradient: 'from-cyan-600 to-cyan-800',
        features: [
            { title: 'Mesai Dışı Hizmet', desc: 'Akşam veya hafta sonu seçenekleriyle çalışma düzeninizi aksatmıyoruz.', icon: '🕐' },
            { title: 'Elektronik Bakımı', desc: 'Hassas cihazlarınız için statik elektrik önleyici özel temizlik uyguluyoruz.', icon: '💻' },
            { title: 'Periyodik Plan', desc: 'Haftalık, iki haftada bir veya aylık abonelik seçenekleri mevcuttur.', icon: '📅' },
            { title: 'Dezenfeksiyon', desc: 'Ortak kullanım alanlarında antibakteriyel dezenfeksiyon uyguluyoruz.', icon: '🧴' },
        ],
        process: [
            { step: 'Keşif Ziyareti', desc: 'Ofisinizi yerinde inceleyerek ihtiyaçlarınıza özel bir temizlik planı oluşturuyoruz.' },
            { step: 'Abonelik Planı', desc: 'İhtiyacınıza uygun periyodik temizlik programı ve fiyatlandırma belirlenir.' },
            { step: 'Düzenli Temizlik', desc: 'Belirlenen program dahilinde ekibimiz düzenli olarak ofisinizi temizler.' },
            { step: 'Kalite Kontrolü', desc: 'Her temizlik sonrası kalite kontrol raporu oluşturulur.' },
        ],
        faqs: [
            { q: 'Ofis temizliği mesai saatlerinde yapılır mı?', a: 'Hayır, genellikle mesai sonrası veya hafta sonu tercih edilir. Ancak taleplerinize göre mesai saatlerinde de hizmet verebiliriz.' },
            { q: 'Ofis temizliği abonelik fiyatları nedir?', a: 'Ofisinizin büyüklüğüne ve temizlik sıklığına göre özel fiyatlandırma yapıyoruz. Detaylı bilgi için bizimle iletişime geçin.' },
            { q: 'Bilgisayar ve elektronik cihazlar temizleniyor mu?', a: 'Evet, anti-statik özel bezler ve ürünlerle tüm elektronik cihazlarınız güvenle temizlenir.' },
        ],
        keywords: ['ofis temizliği istanbul', 'iş yeri temizliği', 'kurumsal ofis temizliği', 'ofis temizlik şirketi', 'periyodik ofis temizliği'],
    },
    {
        id: 'apartman',
        slug: 'apartman-temizligi',
        title: 'Apartman Temizliği',
        fullTitle: 'İstanbul Apartman ve Merdiven Temizliği Hizmeti',
        subtitle: 'Ortak Alanlarda Kusursuz Düzen',
        description: 'Binanızın girişinden en üst katına kadar, komşularınızla birlikte huzurla yaşayacağınız temizlik standartlarını getiriyoruz.',
        longDescription: 'Safir Temizlik, İstanbul genelinde apartman ve site yönetimlerine profesyonel merdiven temizliği, lobi bakımı ve ortak alan hijyeni hizmeti sunmaktadır. Periyodik temizlik programlarımız ile binanızın ortak alanları her zaman temiz ve bakımlı kalır. İlaçlama desteğimiz ile haşerelere karşı da koruma sağlıyoruz.',
        img: '/images/services/apartman.jpg',
        color: 'text-amber-600',
        gradient: 'from-amber-600 to-amber-800',
        features: [
            { title: 'Periyodik Program', desc: 'Belirlenen gün ve saatte aksatmadan düzenli temizlik hizmeti.', icon: '📋' },
            { title: 'Merdiven Yıkama', desc: 'Tüm merdiven basamakları, korkuluklar ve duvarlar detaylı temizlenir.', icon: '🪜' },
            { title: 'Asansör Temizliği', desc: 'Asansör iç mekanı, ayna ve butonlar hijyenik şekilde temizlenir.', icon: '🛗' },
            { title: 'İlaçlama Desteği', desc: 'Haşerelere karşı koruyucu ve dezenfektan uygulama hizmeti.', icon: '🐜' },
        ],
        process: [
            { step: 'Yönetimle Görüşme', desc: 'Binanızın ihtiyaçlarını belirlemek için yöneticiyle görüşme yapılır.' },
            { step: 'Plan Oluşturma', desc: 'Temizlik sıklığı, kapsam ve bütçeye göre program hazırlanır.' },
            { step: 'Düzenli Hizmet', desc: 'Belirlenen takvime uygun şekilde ekibimiz düzenli temizlik yapar.' },
            { step: 'Aylık Rapor', desc: 'Yapılan işler ve kullanılan malzemeler hakkında yönetime rapor sunulur.' },
        ],
        faqs: [
            { q: 'Apartman temizliği haftada kaç gün yapılır?', a: 'İhtiyacınıza göre haftada 1-7 gün arası program oluşturulabilir. En yaygın tercih haftada 2-3 gündür.' },
            { q: 'Apartman temizliği aylık ne kadar?', a: 'Kat sayısı, temizlik sıklığı ve binanın büyüklüğüne göre aylık fiyatlandırma yapılır.' },
            { q: 'Otopark ve bahçe temizliği de dahil mi?', a: 'Evet, talep halinde otopark, bahçe ve teras alanları da temizlik kapsamına alınabilir.' },
        ],
        keywords: ['apartman temizliği istanbul', 'merdiven temizliği', 'bina temizliği', 'site temizliği', 'apartman temizlik şirketi'],
    },
    {
        id: 'kurumsal',
        slug: 'kurumsal-temizlik',
        title: 'Kurumsal Temizlik',
        fullTitle: 'İstanbul Kurumsal ve Endüstriyel Temizlik Hizmeti',
        subtitle: 'Büyük Ölçekli Projelerde Uzman Çözümler',
        description: 'AVM, fabrika, hastane ve büyük ölçekli tesisler için endüstriyel ekipmanlarla profesyonel temizlik çözümleri sunuyoruz.',
        longDescription: 'Safir Temizlik, büyük ölçekli kurumsal müşterilere özel temizlik çözümleri sunmaktadır. AVM\'ler, fabrikalar, hastaneler, oteller ve eğitim kurumları için endüstriyel ekipmanlar ve uzman kadromuzla yüksek hijyen standartlarında hizmet veriyoruz. Özel ihtiyaçlarınıza göre kişiselleştirilmiş temizlik programları oluşturuyoruz.',
        img: '/images/services/kurumsal.jpg',
        color: 'text-indigo-600',
        gradient: 'from-indigo-600 to-indigo-800',
        features: [
            { title: 'Endüstriyel Ekipman', desc: 'Sanayi tipi zemin yıkama ve cilalama makineleri ile profesyonel sonuç.', icon: '🏭' },
            { title: 'Uzman Kadro', desc: 'Kurumsal temizlik eğitimi almış özel ekipler atanır.', icon: '👷' },
            { title: 'Özel Çözümler', desc: 'Sektörünüze özel hijyen standartlarına uygun temizlik protokolleri.', icon: '🎯' },
            { title: 'Kalite Raporlama', desc: 'Düzenli kalite kontrol ve detaylı raporlama sistemi.', icon: '📊' },
        ],
        process: [
            { step: 'İhtiyaç Analizi', desc: 'Tesisinizi yerinde inceleyerek sektörel gereksinimlerinizi belirliyoruz.' },
            { step: 'Özel Proje Planı', desc: 'Tesisinize özel temizlik programı, ekip ve ekipman planlaması yapılır.' },
            { step: 'Profesyonel Uygulama', desc: 'Eğitimli ekibimiz endüstriyel ekipmanlarla yüksek kalitede temizlik yapar.' },
            { step: 'Periyodik Denetim', desc: 'Düzenli kalite kontrolleri ve raporlamalarla hizmet kalitemizi garantiliyoruz.' },
        ],
        faqs: [
            { q: 'Kurumsal temizlik hangi sektörlere hizmet verir?', a: 'AVM, otel, hastane, fabrika, okul, restoran ve tüm büyük ölçekli tesislere hizmet veriyoruz.' },
            { q: 'Kurumsal temizlik sözleşme ile mi yapılır?', a: 'Evet, uzun vadeli sözleşmelerle hem kalite garantisi hem de avantajlı fiyatlar sunuyoruz.' },
            { q: 'Gece vardiyasında temizlik yapılabilir mi?', a: 'Evet, 7/24 hizmet verebiliyoruz. İşletmenizin çalışma saatlerine göre gece veya sabah erken programları oluşturulur.' },
        ],
        keywords: ['kurumsal temizlik istanbul', 'endüstriyel temizlik', 'fabrika temizliği', 'AVM temizliği', 'otel temizliği'],
    },
    {
        id: 'bos-ev',
        slug: 'bos-ev-temizligi',
        title: 'Boş Ev Temizliği',
        fullTitle: 'İstanbul Boş Ev ve Taşınma Temizliği Hizmeti',
        subtitle: 'Yeni Başlangıçlar İçin Tertemiz Alanlar',
        description: 'Taşınma öncesi ve sonrası derinlemesine sterilizasyon. Yeni evinize veya kiracınıza tertemiz bir alan bırakın.',
        longDescription: 'Safir Temizlik, İstanbul genelinde taşınma öncesi ve sonrası boş ev temizliği hizmeti sunmaktadır. Boya sonrası temizlik, inşaat artığı temizleme, zemin cilalama ve tam sterilizasyon hizmetlerimizle evinizi yeni gibi teslim ediyoruz. Kiracılara teslim veya yeni eve taşınma durumlarında en çok tercih edilen hizmetimizdir.',
        img: '/images/services/bos-ev.jpg',
        color: 'text-purple-600',
        gradient: 'from-purple-600 to-purple-800',
        features: [
            { title: 'Derin Temizlik', desc: 'Tüm odalar, mobilyasız ortamda köşe bucak derinlemesine temizlenir.', icon: '🧽' },
            { title: 'Sterilizasyon', desc: 'Antibakteriyel ürünlerle tam sterilizasyon uygulanır.', icon: '🦠' },
            { title: 'Boya Sonrası', desc: 'Boya lekeleri, toz ve inşaat kalıntıları profesyonelce temizlenir.', icon: '🎨' },
            { title: 'Zemin Cilalama', desc: 'Parke, laminat ve fayans zeminler cilalanarak parlatılır.', icon: '💎' },
        ],
        process: [
            { step: 'Durum Tespiti', desc: 'Evin mevcut durumu değerlendirilir, ihtiyaçlar belirlenir.' },
            { step: 'Ekipman Hazırlığı', desc: 'İhtiyaca göre özel ekipman ve malzeme hazırlanır.' },
            { step: 'Kapsamlı Temizlik', desc: 'Tüm alanlar derinlemesine temizlenir, dezenfekte edilir.' },
            { step: 'Kesin Kontrol', desc: 'Her oda tek tek kontrol edilir, müşteriye teslim edilir.' },
        ],
        faqs: [
            { q: 'Boş ev temizliği ne kadar sürer?', a: '2+1 bir daire için ortalama 4-6 saat, daha büyük evler için 6-8 saat sürmektedir.' },
            { q: 'Taşınma sonrası temizlik fiyatı nedir?', a: 'Evin büyüklüğü ve kirlilik durumuna göre fiyatlandırma yapılır. Online hesaplama aracımızdan anlık fiyat alabilirsiniz.' },
            { q: 'İnşaat sonrası kalıntıları da temizliyor musunuz?', a: 'Evet, boya lekeleri, çimento artıkları, talaş ve tüm inşaat kalıntılarını profesyonel ekipmanlarla temizliyoruz.' },
        ],
        keywords: ['boş ev temizliği istanbul', 'taşınma sonrası temizlik', 'boya sonrası temizlik', 'kiracı teslimi temizlik', 'derin ev temizliği'],
    },
    {
        id: 'cam',
        slug: 'cam-temizligi',
        title: 'Cam Temizliği',
        fullTitle: 'İstanbul Profesyonel Cam ve Dış Cephe Temizliği',
        subtitle: 'Kristal Netliğinde Pırıl Pırıl Camlar',
        description: 'Dış cephe ve yüksek katlı binalar için profesyonel cam temizliği. Özel ekipmanlarla pırıl pırıl camlar.',
        longDescription: 'Safir Temizlik, İstanbul genelinde iç ve dış cephe cam temizliği hizmeti vermektedir. Yüksek katlı binalar, plaza cepheler ve villa camları için özel ekipmanlar ve eğitimli dış cephe temizlik ekiplerimiz ile hizmet veriyoruz. İş güvenliği standartlarına uygun, sigortalı personelimizle güvenilir hizmet sunuyoruz.',
        img: '/images/services/cam.jpg',
        color: 'text-sky-600',
        gradient: 'from-sky-600 to-sky-800',
        features: [
            { title: 'Dış Cephe', desc: 'Yüksek katlı binalarda profesyonel dış cephe cam temizliği.', icon: '🏢' },
            { title: 'Yüksek Kat', desc: 'İş güvenliği standartlarına uygun yüksekte çalışma ekipmanları.', icon: '🪟' },
            { title: 'Özel Ekipman', desc: 'Saf su sistemi ve teleskopik çubuklar ile lekesiz sonuç.', icon: '🔧' },
            { title: 'Profesyonel Kadro', desc: 'Yüksekte çalışma sertifikalı, deneyimli cam temizlik ekibi.', icon: '👨‍🔧' },
        ],
        process: [
            { step: 'Fizibilite', desc: 'Binanın yüksekliği, cam sayısı ve erişim koşulları değerlendirilir.' },
            { step: 'Güvenlik Planlaması', desc: 'İş güvenliği önlemleri planlanır, gerekli izinler alınır.' },
            { step: 'Profesyonel Temizlik', desc: 'Özel ekipmanlarla tüm iç ve dış camlar temizlenir.' },
            { step: 'Son Kontrol', desc: 'Tüm camlar kontrol edilir, leke veya iz kalmaması sağlanır.' },
        ],
        faqs: [
            { q: 'Yüksek katlı binalarda cam temizliği güvenli mi?', a: 'Evet, tüm personelimiz yüksekte çalışma sertifikalıdır ve iş güvenliği standartlarına uygun ekipman kullanılır.' },
            { q: 'Cam temizliğinde hangi teknik kullanılıyor?', a: 'Saf su sistemi, teleskopik çubuklar ve profesyonel silecek ekipmanları kullanıyoruz. Bu sayede lekesiz bir sonuç elde ediyoruz.' },
            { q: 'Dış cephe cam temizliği ne sıklıkta yapılmalı?', a: 'Konum ve hava koşullarına göre değişir. Genellikle yılda 2-4 kez yapılması önerilir.' },
        ],
        keywords: ['cam temizliği istanbul', 'dış cephe cam temizliği', 'yüksek kat cam temizliği', 'cam temizlik şirketi', 'plaza cam temizliği'],
    },
    {
        id: 'malzemeli',
        slug: 'malzemeli-temizlik',
        title: 'Malzemeli Temizlik',
        fullTitle: 'İstanbul Malzemeli Profesyonel Temizlik Hizmeti',
        subtitle: 'Siz Sadece Kapıyı Açın, Gerisini Bize Bırakın',
        description: 'Deterjan, ekipman ve profesyonel temizlik malzemeleri dahil, tam kapsamlı temizlik hizmeti.',
        longDescription: 'Safir Temizlik\'in malzemeli temizlik hizmeti, tüm deterjan, ekipman ve temizlik malzemelerinin tarafımızdan sağlandığı kapsamlı bir hizmettir. HEPA filtreli vakum makineleri, buhar teknolojisi, anti-alerjen deterjanlar ve profesyonel temizlik ekipmanlarımızla evinize veya ofisinize geliyoruz. Siz sadece kapıyı açmanız yeterli.',
        img: '/images/services/malzemeli.jpg',
        color: 'text-emerald-600',
        gradient: 'from-emerald-600 to-emerald-800',
        features: [
            { title: 'Malzeme Dahil', desc: 'Tüm deterjan, temizlik bezi, sünger ve ekipmanlar bizden.', icon: '📦' },
            { title: 'Profesyonel Ürünler', desc: 'Endüstriyel kalitede, anti-alerjen ve çevre dostu ürünler.', icon: '🧪' },
            { title: 'HEPA Filtre', desc: 'Havadaki mikro partikülleri yakalayan HEPA filtreli vakum sistemi.', icon: '🌬️' },
            { title: 'Buhar Teknolojisi', desc: 'Kimyasal kullanmadan derin temizlik için buhar makinesi teknolojisi.', icon: '♨️' },
        ],
        process: [
            { step: 'Online Rezervasyon', desc: 'Web sitemiz veya WhatsApp üzerinden randevu oluşturun.' },
            { step: 'Donanımlı Ekip', desc: 'Ekibimiz tüm malzeme ve ekipmanlarla gelir.' },
            { step: 'Kapsamlı Temizlik', desc: 'Profesyonel ürünler ve ekipmanlarla detaylı temizlik yapılır.' },
            { step: 'Memnuniyet Kontrolü', desc: 'Temizlik sonrası kontrol, memnuniyet teyidi alınır.' },
        ],
        faqs: [
            { q: 'Malzemeli temizlik fiyatı normal temizlikten farklı mı?', a: 'Evet, malzeme maliyeti dahil olduğu için standart temizliğe göre bir miktar fark vardır. Ancak kendi malzemenizi temin etme zahmetinden kurtulursunuz.' },
            { q: 'Hangi marka deterjanlar kullanılıyor?', a: 'Profesyonel temizlik sektöründe güvenilen, çevre dostu ve anti-alerjen ürünler kullanıyoruz. Hassas cildiniz veya alerjiniz varsa bunu önceden belirtmeniz yeterlidir.' },
            { q: 'Buhar temizliği her yüzeyde uygulanabilir mi?', a: 'Buhar temizliği fayans, seramik, mermer ve birçok yüzeyde güvenle uygulanır. Hassas yüzeyler için önceden değerlendirme yapılır.' },
        ],
        keywords: ['malzemeli temizlik istanbul', 'malzeme dahil temizlik', 'profesyonel temizlik malzemeli', 'HEPA filtre temizlik', 'buhar temizliği'],
    },
];
