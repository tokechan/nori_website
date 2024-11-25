import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken'; // トークン検証に必要

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log('middleware: requestpath:', pathname);

  // 認証ページはスキップ
  if (pathname.startsWith('/works_plus/auth')) {
    console.log('middleware: auth page - skip');
    return NextResponse.next();
  }

  // works_plus 以下のページでトークンを確認
  if (pathname.startsWith('/works_plus')) {
    const authToken = request.cookies.get('auth-token')?.value;

    // トークンが存在しない場合は認証ページにリダイレクト
    if (!authToken) {
      console.log('middleware: no token found');
      return redirectToAuthPage(request, pathname);
    }

    // トークンの検証
    try {
      const decoded = jwt.verify(authToken, process.env.JWT_SECRET!); // トークンを検証
      console.log('middleware: token verification successful:', decoded);
      return NextResponse.next(); // トークンが有効であればそのまま許可
    } catch (err) {
      console.log('middleware: token verification failed:', err);
      return redirectToAuthPage(request, pathname); // 無効なトークンの場合はリダイレクト
    }
  }

  return NextResponse.next(); // 他のルートはそのまま許可
}

function redirectToAuthPage(request: NextRequest, pathname: string) {
  const redirectUrl = `/works_plus/auth?redirect=${encodeURIComponent(pathname)}`;
  console.log('middleware: redirecting to auth page with URL:', redirectUrl);
  return NextResponse.redirect(
    new URL(redirectUrl, request.url)
  );
}

export const config = {
  matcher: ['/works_plus/:path*'], // works_plus 以下全てを対象に
};
