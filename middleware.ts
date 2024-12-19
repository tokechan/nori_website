import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  // /works_plus/auth へのアクセスはミドルウェアをスキップ
  if (request.nextUrl.pathname === '/works_plus/auth') {
    return NextResponse.next();
  }

  const token = request.cookies.get('auth-token')?.value;

  if (!token) {
    // トークンがない場合、認証ページにリダイレクト
    return NextResponse.redirect(new URL('/works_plus/auth', request.url));
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET || '');
    return NextResponse.next(); // 正常なトークンの場合、そのまま進む
  } catch (error) {
    console.error('Middleware JWT Error:', error);
    return NextResponse.redirect(new URL('/works_plus/auth', request.url));
  }
}

export const config = {
  matcher: ['/works_plus/:path*'], // Middlewareを適用するパス
};