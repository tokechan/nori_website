import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // /works_plus/auth へのアクセスはミドルウェアをスキップ
  if (request.nextUrl.pathname === '/works_plus/auth') {
    return NextResponse.next();
  }

  const token = request.cookies.get('auth-token')?.value;

  if (!token || token !== 'authenticated') {
    // トークンがない、または無効な場合、認証ページにリダイレクト
    return NextResponse.redirect(new URL('/works_plus/auth', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/works_plus/:path*'], // Middlewareを適用するパス
};