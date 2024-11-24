import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 認証ページはスキップ
  if (pathname === '/works_plus/auth') {
    return NextResponse.next();
  }

  if (pathname.startsWith('/works_plus')) {
    const authToken = request.cookies.get('auth-token')?.value;

    try {
      if (!authToken) {
        // トークンが見つからない場合は認証ページにリダイレクト
        return NextResponse.redirect(
          new URL(`/works_plus/auth?redirect=${encodeURIComponent(pathname)}`, request.url)
        );
      }

      // トークンを検証
      const decoded = jwt.verify(authToken, process.env.JWT_SECRET!);
      if (!decoded || !(decoded as any).authenticated) {
        // トークンが無効の場合も認証ページにリダイレクト
        return NextResponse.redirect(
          new URL(`/works_plus/auth?redirect=${encodeURIComponent(pathname)}`, request.url)
        );
      }
    } catch {
      // トークンの検証中にエラーが発生した場合もリダイレクト
      return NextResponse.redirect(
        new URL(`/works_plus/auth?redirect=${encodeURIComponent(pathname)}`, request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/works_plus/:path*'], // シンプルにパスのみを指定
};
