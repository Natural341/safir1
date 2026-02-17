import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    let projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' }
    });

    // Eğer proje yoksa başlangıç için profesyonel örnekler ekle
    if (projects.length === 0) {
      await prisma.project.createMany({
        data: [
          {
            title: "Lüks Villa Mutfak Temizliği",
            category: "Ev Temizliği",
            region: "Beşiktaş",
            imageBefore: "/images/gallery/mutfak.jpg",
            imageAfter: "/images/gallery/mutfak2.jpg",
            description: "Yağlanmış yüzeyler ve dolap içleri özel buharlı temizlik ile ilk günkü haline getirildi."
          },
          {
            title: "Kurumsal Ofis Cam Temizliği",
            category: "Ofis Temizliği",
            region: "Levent",
            imageBefore: "/images/gallery/pencere.jpg",
            imageAfter: "/images/gallery/pencere.jpg",
            description: "Dış cephe ve iç camlar lekesiz temizlik garantisiyle teslim edildi."
          }
        ]
      });
      projects = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } });
    }

    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Projeler yüklenemedi' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const project = await prisma.project.create({ data: body });
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: 'Proje kaydedilemedi' }, { status: 500 });
  }
}
