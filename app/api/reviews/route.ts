import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const isAdmin = searchParams.get('admin') === 'true';

    // Eğer admin ise hepsini getir, değilse sadece onaylıları
    const reviews = await prisma.review.findMany({
      where: isAdmin ? {} : { status: 'approved' },
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
    const { id, status, reply } = await request.json();
    const updatedReview = await prisma.review.update({
      where: { id: Number(id) },
      data: { status, reply }
    });
    return NextResponse.json(updatedReview);
  } catch (error) {
    return NextResponse.json({ error: 'Yorum güncellenemedi' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.review.delete({
      where: { id: Number(id) }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Yorum silinemedi' }, { status: 500 });
  }
}
