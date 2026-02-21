const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const reviews = [
    {
      name: "Ayşe Yılmaz",
      comment: "Komşumun tavsiyesiyle ulaştım, gerçekten dedikleri kadar varmış. Çok hızlı ve tertemiz yaptılar, ellerinize sağlık!",
      rating: 5,
      status: "approved",
      date: "15.02.2026"
    },
    {
      name: "Mehmet Demir",
      comment: "Ofis temizliği için düzenli çalışıyoruz. Hem uygun fiyatlı hem de çok profesyoneller. Kesinlikle tavsiye ederim.",
      rating: 5,
      status: "approved",
      date: "10.02.2026"
    },
    {
      name: "Sinem Kaya",
      comment: "İnşaat sonrası temizlik için çağırdık, beklediğimden çok daha iyi sonuç aldık. Ekip çok güler yüzlü ve işini biliyor.",
      rating: 5,
      status: "approved",
      date: "05.02.2026"
    },
    {
      name: "Caner Öz",
      comment: "Fiyat/performans olarak İstanbul'un en iyisi diyebilirim. Hiç düşünmeden arayabilirsiniz.",
      rating: 4,
      status: "approved",
      date: "01.02.2026"
    },
    {
      name: "Buse T.",
      comment: "Evi teslim aldığımda pırıl pırıldı. Özellikle camlar ve mutfak harika olmuş, teşekkürler Safir Temizlik!",
      rating: 5,
      status: "approved",
      date: "28.01.2026"
    },
    {
      name: "Ahmet V.",
      comment: "Hızlı servis, kaliteli hizmet. Söz verdikleri saatte geldiler ve çok titiz çalıştılar.",
      rating: 5,
      status: "approved",
      date: "25.01.2026"
    }
  ];

  console.log('Seeding reviews...');

  // Delete existing reviews first if you want a clean slate
  // await prisma.review.deleteMany({});

  for (const review of reviews) {
    await prisma.review.create({
      data: review
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
