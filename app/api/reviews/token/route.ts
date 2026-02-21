import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const token = crypto.randomBytes(16).toString('hex');
    
    // Geçici bir "bekleyen" yorum kaydı oluştur
    // Müşteri bu token ile formu açtığında adını ve yorumunu dolduracak
    const review = await prisma.review.create({
      data: {
        name: 'Bekleyen Müşteri',
        comment: '',
        rating: 5,
        status: 'pending', // Link hala form doldurulmayı bekliyor
        token,
        date: new Date().toLocaleDateString('tr-TR')
      }
    });

    return NextResponse.json({ token, id: review.id });
  } catch (error) {
    console.error('Token generation error:', error);
    return NextResponse.json({ error: 'Token oluşturulamadı.' }, { status: 500 });
  }
}
