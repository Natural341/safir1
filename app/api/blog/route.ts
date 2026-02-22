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

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...data } = body;
    const post = await prisma.blogPost.update({
      where: { id: Number(id) },
      data
    });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: 'Blog yazisi guncellenemedi' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.blogPost.delete({ where: { id: Number(id) } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Blog yazisi silinemedi' }, { status: 500 });
  }
}
