const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Fixing service images in database...');
  
  const updates = [
    { id: 'ev', img: '/images/services/ev.jpg' },
    { id: 'ofis', img: '/images/services/ofis.jpg' },
    { id: 'apartman', img: '/images/services/apartman.jpg' },
    { id: 'kurumsal', img: '/images/services/kurumsal.jpg' },
    { id: 'bos-ev', img: '/images/services/bos-ev.jpg' },
    { id: 'cam', img: '/images/services/cam.jpg' },
    { id: 'malzemeli', img: '/images/services/malzemeli.jpg' }
  ];

  for (const update of updates) {
    await prisma.service.update({
      where: { id: update.id },
      data: { img: update.img }
    }).catch(() => console.log(`Service ${update.id} not found, skipping.`));
  }

  console.log('Images fixed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
