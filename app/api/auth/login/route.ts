import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    const adminPassword = process.env.ADMIN_PASSWORD || 'safir123';
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';

    if (username === adminUsername && password === adminPassword) {
      const cookieStore = await cookies();

      cookieStore.set('admin_session', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Kullanici adi veya sifre hatali' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
