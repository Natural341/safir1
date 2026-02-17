import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Sadece onaylanmış yorumları getir
    const reviews = await prisma.review.findMany({
      where: { status: 'approved' },
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({ error: 'Yorumlar yüklenemedi' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Yeni yorumlar varsayılan olarak "pending" (onay bekliyor) düşer
    const review = await prisma.review.create({
      data: {
        ...body,
        status: 'pending',
        date: new Date().toLocaleDateString('tr-TR')
      }
    });
    return NextResponse.json(review);
  } catch (error) {
    return NextResponse.json({ error: 'Yorum gönderilemedi' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();
    const updatedReview = await prisma.review.update({
      where: { id: Number(id) },
      data: { status }
    });
    return NextResponse.json(updatedReview);
  } catch (error) {
    return NextResponse.json({ error: 'Yorum güncellenemedi' }, { status: 500 });
  }
}
