import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Sadece /admin yollarını kontrol et
  if (pathname.startsWith('/admin')) {
    const session = request.cookies.get('admin_session');

    // Eğer oturum çerezi yoksa login sayfasına yönlendir
    if (!session || session.value !== 'authenticated') {
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
