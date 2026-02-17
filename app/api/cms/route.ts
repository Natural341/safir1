import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const initialData = {
  hero: {
    slides: [
      {
        title: "Safir Temizlik Güvencesi",
        subtitle: "İstanbul'un En İyi Temizlik Hizmeti",
        desc: "Yaşam alanlarınızda teknolojik ve hijyenik Safir dokunuşunu hissedin. Profesyonel kadromuzla İstanbul genelinde yanınızdayız.",
        image: "/images/gallery/salon.jpg"
      },
      {
        title: "7/24 Profesyonel Ekip",
        subtitle: "Pırıl Pırıl Bir Yaşam Alanı",
        desc: "Eviniz veya ofisiniz için detaylı hijyen çözümleri. Aynı gün hizmet imkanıyla zamandan tasarruf edin.",
        image: "/images/gallery/ferahlik.jpg"
      },
      {
        title: "Kurumsal Çözümler",
        subtitle: "Ofisten Fabrikaya Hijyen Standartları",
        desc: "Büyük ölçekli projelerde uzman kadromuzla yanınızdayız. Periyodik bakım planlarıyla sürekli temizlik garantisi.",
        image: "/images/gallery/kurumsal.jpg"
      }
    ]
  },
  contact: {
    phone: "0 552 947 5313",
    whatsapp: "905529475313",
    instagram: "safirtemizlik.hizmetleri",
    address: "İstanbul Geneli Hizmet Ağı",
    email: "okan428215@gmail.com"
  },
  pricing: {
    baseFee: 2450,
    standardRate: 65,
    detailedRate: 95,
    roomRate: 850,
    extras: [
      { id: 'materials', label: 'Malzemeli Temizlik', price: 850 },
      { id: 'windows', label: 'Cam Temizliği', price: 1200 },
      { id: 'balcony', label: 'Balkon Yıkama', price: 750 },
    ]
  },
  services: [
    { id: "ev", title: "Ev Temizliği", desc: "Eviniz için detaylı ve hijyenik çözümler.", img: "/images/services/ev.jpg", color: "text-blue-600 bg-blue-50", multiplier: 1 },
    { id: "ofis", title: "Ofis Temizliği", desc: "Kurumsal iş yerleri için profesyonel hijyen.", img: "/images/services/ofis.jpg", color: "text-cyan-600 bg-cyan-50", multiplier: 1.2 },
    { id: "apartman", title: "Apartman/Merdiven Temizliği", desc: "Ortak alanlar için periyodik temizlik hizmeti.", img: "/images/services/apartman.jpg", color: "text-amber-600 bg-amber-50", multiplier: 0.8 },
    { id: "kurumsal", title: "Kurumsal Temizlik", desc: "Büyük ölçekli tesisler ve fabrikalar için uzman kadro.", img: "/images/services/kurumsal.jpg", color: "text-indigo-600 bg-indigo-50", multiplier: 1.5 },
    { id: "bos-ev", title: "Boş Ev Temizliği", desc: "Taşınma öncesi ve sonrası derinlemesine sterilizasyon.", img: "/images/services/bos-ev.jpg", color: "text-purple-600 bg-purple-50", multiplier: 1.3 },
    { id: "cam", title: "Cam Temizliği", desc: "Dış cephe ve yüksek katlı binalar için profesyonel çözümler.", img: "/images/services/cam.jpg", color: "text-sky-600 bg-sky-50", multiplier: 1.1 },
    { id: "malzemeli", title: "Malzemeli Temizlik Hizmeti", desc: "Deterjan ve ekipman dahil, tam kapsamlı temizlik.", img: "/images/services/malzemeli.jpg", color: "text-emerald-600 bg-emerald-50", multiplier: 1.4 }
  ]
};

export async function GET() {
  try {
    let [heroSlides, contact, pricing, pricingExtras, services] = await Promise.all([
      prisma.heroSlide.findMany(),
      prisma.contact.findFirst(),
      prisma.pricing.findFirst(),
      prisma.pricingExtra.findMany(),
      prisma.service.findMany(),
    ]);

    if (!contact) {
      await prisma.$transaction(async (tx) => {
        await tx.contact.create({ data: initialData.contact });
        await tx.pricing.create({
          data: {
            baseFee: initialData.pricing.baseFee,
            standardRate: initialData.pricing.standardRate,
            detailedRate: initialData.pricing.detailedRate,
            roomRate: initialData.pricing.roomRate,
          }
        });
        for (const extra of initialData.pricing.extras) {
          await tx.pricingExtra.create({ data: extra });
        }
        for (const service of initialData.services) {
          await tx.service.create({ data: service });
        }
        for (const slide of initialData.hero.slides) {
          await tx.heroSlide.create({ data: slide });
        }

        // Profesyonel ve Uzun Blog İçerikleri (SEO Odaklı)
        await tx.blogPost.createMany({
          data: [
            {
              title: "Ev Temizliğinde 2026 Trendleri: Akıllı Hijyen Dönemi Başlıyor",
              excerpt: "Yaşam alanlarınızda gerçek hijyeni sağlamak artık sadece toz almak değil, bütünsel bir sağlık yaklaşımı haline geldi. İşte 2026'nın öne çıkan temizlik teknolojileri.",
              content: "2026 yılında ev temizliği anlayışı köklü bir değişim geçiriyor. Artık sadece 'temiz görünen' evler değil, 'gerçekten sterilize edilmiş' yaşam alanları ön planda. Safir Temizlik olarak bu dönüşümün öncülüğünü yapıyoruz.\n\n### Neden Akıllı Hijyen?\nAkıllı hijyen, temizlik süreçlerinde yapay zeka destekli ekipmanların ve insan uzmanlığının birleşimidir. Kullandığımız HEPA-14 filtreli vakum sistemleri, havadaki 0.3 mikron boyutundaki partikülleri %99.97 oranında hapsederek evinizdeki hava kalitesini artırır.\n\n### Ozon Dezenfeksiyonu Nedir?\nÖzellikle evcil hayvan beslenen veya alerjik bünyeye sahip bireylerin olduğu evlerde, ozon jeneratörleri ile yaptığımız dezenfeksiyon işlemleri, kimyasal kalıntı bırakmadan tüm bakteri ve virüsleri yok eder. Bu işlem, 2026 temizlik standartlarının en kritik parçasıdır.\n\n### Sürdürülebilirlik ve Yeşil Temizlik\nKullandığımız hipoalerjenik ve biyolojik olarak parçalanabilen temizlik ajanları, hem çevreyi korur hem de çocuklarınızın ve evcil hayvanlarınızın sağlığını tehlikeye atmaz. Safir Temizlik olarak 'Sıfır Atık' prensibiyle çalışıyoruz.\n\nSonuç olarak, profesyonel bir temizlik hizmeti almak, sadece size zaman kazandırmaz, aynı zamanda yaşam kalitenizi doğrudan etkileyen bir yatırımdır.",
              image: "/images/gallery/salon.jpg",
              category: "Rehber",
              date: "17 Şubat 2026"
            },
            {
              title: "Ofis Verimliliği ve Hijyen Arasındaki Bilimsel Bağlantı",
              excerpt: "Temiz bir ofis sadece görsel bir tercih değil, çalışan motivasyonunu ve sağlığını doğrudan etkileyen en kritik kurumsal faktörlerden biridir.",
              content: "Modern iş dünyasında verimlilik her şeydir. Yapılan araştırmalar, düzenli ve profesyonelce temizlenen ofislerde çalışanların %25 daha az hastalık izni aldığını ve motivasyonlarının %30 daha yüksek olduğunu gösteriyor.\n\n### Mikropların En Çok Biriktiği Yerler\nİlginç bir istatistik: Tipik bir ofis masası, ortalama bir klozet kapağından 400 kat daha fazla bakteri barındırır. Klavye, fare ve telefonlar çapraz bulaşma riskinin en yüksek olduğu noktalardır. Safir Temizlik uzmanları, bu kritik noktalar için özel dezenfektanlar kullanır.\n\n### Hava Kalitesi ve Konsantrasyon\nKapalı ofis ortamlarında karbondioksit birikimi ve toz partikülleri, gün içinde çalışanlarda baş ağrısı ve yorgunluğa neden olur. Periyodik havalandırma kanalı temizliği ve profesyonel yüzey hijyeni ile bu sorunları ortadan kaldırıyoruz.\n\n### Kurumsal İmajın Parçası Olarak Temizlik\nMüşterileriniz ofisinize girdiğinde gördükleri temizlik seviyesi, markanızın detaylara verdiği önemi temsil eder. Parlayan zeminler, lekesiz camlar ve ferah bir koku, profesyonel bir iş ortamının ayrılmaz parçasıdır.",
              image: "/images/services/ofis.jpg",
              category: "Kurumsal",
              date: "15 Şubat 2026"
            },
            {
              title: "İnşaat Sonrası Temizlikte Yapılan 5 Ölümcül Hata ve Çözümleri",
              excerpt: "Yeni bitmiş bir yapıda yanlış kimyasal kullanımı kalıcı hasarlara yol açabilir. Neden inşaat sonrası temizlikte profesyonel destek şart?",
              content: "Yeni evinizi veya ofisinizi teslim aldığınızda hissettiğiniz heyecan, yanlış temizlik yöntemleri nedeniyle hüsrana dönüşebilir. İnşaat sonrası temizlik (post-construction cleaning), normal temizlikten tamamen farklı bir disiplindir.\n\n### 1. Yanlış Kazıma İşlemleri\nCamlardaki alçı ve boya kalıntılarını raspa ile temizlerken yapılan en küçük hata, camlarınızda kalıcı çizikler bırakır. Biz bu işlemler için profesyonel solventler ve özel koruyuculu bıçaklar kullanıyoruz.\n\n### 2. Mermer ve Hassas Yüzeylerde Asidik Ürün Kullanımı\nMermer, traverten gibi doğal taşlar asit içeren temizleyicilerle (kireç sökücüler dahil) temas ettiğinde yanar ve matlaşır. Safir Temizlik, her yüzeyin pH değerine uygun temizleyiciler seçer.\n\n### 3. İnşaat Tozunun (Mikron Toz) İhmal Edilmesi\nİnşaat tozu mikronize bir yapıdır ve standart vakumlarla temizlenemez. Duvardaki gözeneklere işleyen bu tozlar, profesyonel vakumlar ve ıslak-kuru sistemlerle çekilmediği sürece aylar boyu uçuşmaya devam eder.\n\nSafir Temizlik olarak inşaat sonrası teslimatları anahtar teslim hijyen garantisiyle yapıyoruz.",
              image: "/images/services/cam.jpg",
              category: "Uzmanlık",
              date: "12 Şubat 2026"
            }
          ]
        });
      });

      // Verileri tekrar çek
      [heroSlides, contact, pricing, pricingExtras, services] = await Promise.all([
        prisma.heroSlide.findMany(),
        prisma.contact.findFirst(),
        prisma.pricing.findFirst(),
        prisma.pricingExtra.findMany(),
        prisma.service.findMany(),
      ]);
    }

    return NextResponse.json({
      hero: { slides: heroSlides },
      contact,
      pricing: { ...pricing, extras: pricingExtras },
      services,
    });
  } catch (error) {
    console.error("MySQL veri hatası:", error);
    return NextResponse.json({ error: 'Veritabanı hatası' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await prisma.$transaction(async (tx) => {
      await tx.contact.upsert({ where: { id: 1 }, update: data.contact, create: { id: 1, ...data.contact } });
      const { extras, ...mainPricing } = data.pricing;
      await tx.pricing.upsert({ where: { id: 1 }, update: mainPricing, create: { id: 1, ...mainPricing } });
      for (const extra of extras) {
        await tx.pricingExtra.upsert({ where: { id: extra.id }, update: { label: extra.label, price: extra.price }, create: extra });
      }
      for (const service of data.services) {
        await tx.service.upsert({ where: { id: service.id }, update: service, create: service });
      }
      await tx.heroSlide.deleteMany({});
      for (const slide of data.hero.slides) {
        const { id, ...slideWithoutId } = slide;
        await tx.heroSlide.create({ data: slideWithoutId });
      }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Veritabanı güncelleme hatası' }, { status: 500 });
  }
}
