// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth-token')?.value;

  // 認証ページのURLを設定
  const loginPage = new URL('/works+/auth', request.url);

  // 認証トークンがない場合はログインページにリダイレクト
  if (!authToken) {
    return NextResponse.redirect(loginPage);
  }

  // 認証されている場合はリクエストを継続
  return NextResponse.next();
}

// ミドルウェアを適用するルートを指定
export const config = {
  matcher: ['/works_plus/:path*'],
};
