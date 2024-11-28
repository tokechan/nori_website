import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('auth-token')?.value;

  console.log('Middleware: Request URL:', request.url);
  console.log('Middleware: Request Path:', pathname);
  console.log('Middleware: Auth Token:', token);

  // トークンがない場合
  if (!token) {
    console.log('Middleware: No token found.');

    // 認証ページはそのまま進む
    if (pathname.startsWith('/works_plus/auth')) {
      console.log('Middleware: Already on auth page. Skipping redirect.');
      return NextResponse.next();
    }

    // 他のページは認証ページにリダイレクト
    console.log('Middleware: Redirecting to auth page.');
    const redirectUrl = new URL('/works_plus/auth', request.url);
    return NextResponse.redirect(redirectUrl);
  }

  try {
    // JWTトークンを検証
    const decoded = jwt.verify(token, process.env.JWT_SECRET || '', {
      algorithms: ['HS256'],
    });
    console.log('Middleware: Token validated successfully:', decoded);

    // 認証ページにいる場合、認証済みページにリダイレクト
    if (pathname.startsWith('/works_plus/auth')) {
      console.log('Middleware: Authenticated. Redirecting to /works_plus.');
      const redirectUrl = new URL('/works_plus', request.url);
      return NextResponse.redirect(redirectUrl);
    }

    // 他のリクエストはそのまま進む
    console.log('Middleware: Authenticated. Proceeding to requested page.');
    return NextResponse.next();
  } catch (err: any) {
    console.error('Middleware: JWT Verification Error:', {
      name: err.name,
      message: err.message,
      stack: err.stack,
    });

    // 無効なトークンの場合、認証ページにリダイレクト
    if (!pathname.startsWith('/works_plus/auth')) {
      const redirectUrl = new URL('/works_plus/auth', request.url);
      return NextResponse.redirect(redirectUrl);
    }

    // 認証ページはそのまま進む
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/works_plus/:path*'], // Middlewareを適用するパス
};
