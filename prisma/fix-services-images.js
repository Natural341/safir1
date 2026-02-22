const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Updating service images with professional photos from temizlik_gorsel...');
  
  const updates = [
    { id: 'ev', img: '/temizlik_gorsel/depositphotos_475959294-stock-photo-happy-blonde-woman-maid-holding.jpg' },
    { id: 'ofis', img: '/temizlik_gorsel/depositphotos_273770292-stock-photo-two-smiling-young-janitor-cleaning.jpg' },
    { id: 'apartman', img: '/temizlik_gorsel/depositphotos_375776708-stock-photo-janitor-cleaning-a-corridor.jpg' },
    { id: 'kurumsal', img: '/temizlik_gorsel/depositphotos_261608838-stock-photo-cleaning-service-with-professional-equipment.jpg' },
    { id: 'bos-ev', img: '/temizlik_gorsel/depositphotos_192261848-stock-photo-young-woman-in-white-apron.jpg' },
    { id: 'cam', img: '/temizlik_gorsel/depositphotos_219637290-stock-photo-close-cleaning-specialist-yellow-gloves.jpg' },
    { id: 'malzemeli', img: '/temizlik_gorsel/depositphotos_279460574-stock-photo-worker-with-machine-cleaning-floor.jpg' }
  ];

  for (const update of updates) {
    await prisma.service.update({
      where: { id: update.id },
      data: { img: update.img }
    }).catch(() => console.log(`Service ${update.id} not found, skipping.`));
  }

  console.log('Service images updated successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
