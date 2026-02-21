import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { token, name, comment, rating } = await request.json();

    if (!token) {
      return NextResponse.json({ error: 'Geçersiz token.' }, { status: 400 });
    }

    // Token'a ait mevcut (ama henüz doldurulmamış) bir yorum kaydı var mı bak
    const existingReview = await prisma.review.findUnique({
      where: { token }
    });

    if (!existingReview) {
      return NextResponse.json({ error: 'Geçersiz veya süresi dolmuş bağlantı.' }, { status: 404 });
    }

    if (existingReview.status !== 'pending') {
      return NextResponse.json({ error: 'Bu bağlantı zaten kullanılmış.' }, { status: 400 });
    }

    const updatedReview = await prisma.review.update({
      where: { token },
      data: {
        name,
        comment,
        rating,
        status: 'pending', // Onay bekliyor
        date: new Date().toLocaleDateString('tr-TR')
      }
    });

    return NextResponse.json(updatedReview);
  } catch (error) {
    console.error('Review submission error:', error);
    return NextResponse.json({ error: 'Yorum kaydedilemedi.' }, { status: 500 });
  }
}
