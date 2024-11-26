import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

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

    //トークン検証は別APIに任せる
    return NextResponse.rewrite(new URL('/api/validation-token', request.url));
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
