import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const initialData = {
  hero: {
    slides: [
      {
        title: "7/24 Profesyonel Hijyen",
        subtitle: "Eviniz İçin Detaylı Safir Dokunuşu",
        desc: "İstanbul genelinde uzman ekiplerimizle evinizde pırıl pırıl bir ferahlık sağlıyoruz. %100 müşteri memnuniyeti garantisi.",
        image: "/images/hero1.jpg"
      },
      {
        title: "Kurumsal Temizlik Çözümleri",
        subtitle: "Ofis ve İş Yerlerinde Maksimum Sterilizasyon",
        desc: "Modern ekipmanlarımız ve profesyonel kadromuzla çalışma alanlarınıza değer katıyoruz. Aynı gün hizmet imkanı.",
        image: "/images/hero2.jpg"
      },
      {
        title: "İnşaat Sonrası Temizlik",
        subtitle: "Kaba Pislikten İnce İşçiliğe Kusursuz Sonuç",
        desc: "Yeni yaşam alanınızı taşınmaya hazır hale getiriyoruz. En zorlu lekelerde bile kesin çözüm.",
        image: "/images/hero3.jpg"
      },
      {
        title: "Villa ve Malikane Temizliği",
        subtitle: "Geniş Alanlar İçin Profesyonel Çözümler",
        desc: "Büyük ölçekli konutlarınızda her detayı titizlikle temizliyor, Safir ışıltısını her köşeye yayıyoruz.",
        image: "/images/hero4.png"
      }
    ]
  },
  contact: {
    phone: "0 552 947 5313",
    whatsapp: "905529475313",
    instagram: "safirtemizlik.hizmetleri",
    address: "Atatürk Mah. Demokrasi Cad. Alaca Sk. No:37 Sancaktepe/İSTANBUL",
    email: "safir.temizlik.official@gmail.com"
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
    { id: "ev", title: "Ev Temizliği", desc: "Eviniz için detaylı ve hijyenik çözümler.", img: "/temizlik_gorsel/depositphotos_475959294-stock-photo-happy-blonde-woman-maid-holding.jpg", color: "text-blue-600 bg-blue-50", multiplier: 1 },
    { id: "ofis", title: "Ofis Temizliği", desc: "Kurumsal iş yerleri için profesyonel hijyen.", img: "/temizlik_gorsel/depositphotos_273770292-stock-photo-two-smiling-young-janitor-cleaning.jpg", color: "text-cyan-600 bg-cyan-50", multiplier: 1.2 },
    { id: "apartman", title: "Apartman/Merdiven Temizliği", desc: "Ortak alanlar için periyodik temizlik hizmeti.", img: "/temizlik_gorsel/depositphotos_375776708-stock-photo-janitor-cleaning-a-corridor.jpg", color: "text-amber-600 bg-amber-50", multiplier: 0.8 },
    { id: "kurumsal", title: "Kurumsal Temizlik", desc: "Büyük ölçekli tesisler ve fabrikalar için uzman kadro.", img: "/temizlik_gorsel/depositphotos_261608838-stock-photo-cleaning-service-with-professional-equipment.jpg", color: "text-indigo-600 bg-indigo-50", multiplier: 1.5 },
    { id: "bos-ev", title: "Boş Ev Temizliği", desc: "Taşınma öncesi ve sonrası derinlemesine sterilizasyon.", img: "/temizlik_gorsel/depositphotos_192261848-stock-photo-young-woman-in-white-apron.jpg", color: "text-purple-600 bg-purple-50", multiplier: 1.3 },
    { id: "cam", title: "Cam Temizliği", desc: "Dış cephe ve yüksek katlı binalar için profesyonel çözümler.", img: "/temizlik_gorsel/depositphotos_219637290-stock-photo-close-cleaning-specialist-yellow-gloves.jpg", color: "text-sky-600 bg-sky-50", multiplier: 1.1 },
    { id: "malzemeli", title: "Malzemeli Temizlik Hizmeti", desc: "Deterjan ve ekipman dahil, tam kapsamlı temizlik.", img: "/temizlik_gorsel/depositphotos_279460574-stock-photo-worker-with-machine-cleaning-floor.jpg", color: "text-emerald-600 bg-emerald-50", multiplier: 1.4 }
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

        // Profesyonel Blog İçerikleri
        await tx.blogPost.createMany({
          data: [
            {
              title: "Ev Temizliğinde 2026 Trendleri",
              excerpt: "Yaşam alanlarınızda gerçek hijyeni sağlamak artık sadece toz almak değil, bütünsel bir sağlık yaklaşımı haline geldi.",
              content: "İçerik...",
              image: "/images/hero1.jpg",
              category: "Rehber",
              date: "17 Şubat 2026"
            },
            {
              title: "Ofis Verimliliği ve Hijyen",
              excerpt: "Temiz bir ofis sadece görsel bir tercih değil, çalışan motivasyonunu ve sağlığını doğrudan etkileyen bir faktördür.",
              content: "İçerik...",
              image: "/images/hero2.jpg",
              category: "Kurumsal",
              date: "15 Şubat 2026"
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
