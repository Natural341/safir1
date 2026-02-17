import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Blog yazıları yüklenemedi' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const post = await prisma.blogPost.create({
      data: {
        ...body,
        date: new Date().toLocaleDateString('tr-TR')
      }
    });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: 'Blog yazısı kaydedilemedi' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.blogPost.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Blog yazısı silinemedi' }, { status: 500 });
  }
}
