const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Restoring detailed Hero texts and updating service images...');
  
  // Update Services
  const services = [
    { id: 'ev', img: '/temizlik_gorsel/depositphotos_475959294-stock-photo-happy-blonde-woman-maid-holding.jpg' },
    { id: 'ofis', img: '/temizlik_gorsel/depositphotos_273770292-stock-photo-two-smiling-young-janitor-cleaning.jpg' },
    { id: 'apartman', img: '/temizlik_gorsel/depositphotos_375776708-stock-photo-janitor-cleaning-a-corridor.jpg' },
    { id: 'kurumsal', img: '/temizlik_gorsel/depositphotos_261608838-stock-photo-cleaning-service-with-professional-equipment.jpg' },
    { id: 'bos-ev', img: '/temizlik_gorsel/depositphotos_192261848-stock-photo-young-woman-in-white-apron.jpg' },
    { id: 'cam', img: '/temizlik_gorsel/depositphotos_219637290-stock-photo-close-cleaning-specialist-yellow-gloves.jpg' },
    { id: 'malzemeli', img: '/temizlik_gorsel/depositphotos_279460574-stock-photo-worker-with-machine-cleaning-floor.jpg' }
  ];

  for (const s of services) {
    await prisma.service.update({
      where: { id: s.id },
      data: { img: s.img }
    }).catch(() => {});
  }

  // Update Hero Slides with original detailed texts
  await prisma.heroSlide.deleteMany({});
  await prisma.heroSlide.createMany({
    data: [
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
  });

  console.log('Database restored with detailed texts.');
}

main().catch(console.error).finally(() => prisma.$disconnect());
