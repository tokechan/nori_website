import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
//debag log
console.log('middleware: requestpass:', pathname);

  // 認証ページはスキップ
  if (pathname === '/works_plus/auth') {
    console.log('middleware: auth page - skip')
    return NextResponse.next();
  }

  if (pathname.startsWith('/works_plus')) {
    const authToken = request.cookies.get('auth-token')?.value;

    // token extict check
    if (!authToken) {
        console.log('middleware: not token found');
        return redirectToAuthPage(request, pathname);
    }

    //token validation
    try {
      if(!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET not setting');
      }

      const decoded = jwt.verify(authToken, process.env.JWT_SECRET!);
      console.log('middleware: token varify scuees');

      if(!decoded || !(decoded as any).authenticated) {
        console.log('middeleware: token not valid');
        return redirectToAuthPage(request, pathname);
      }    
    } catch (error) {
        console.log('middleware: token varify error', error);
        return redirectToAuthPage(request, pathname);
      }
  }
  
  return NextResponse.next();
}

function redirectToAuthPage(request: NextRequest, pathname: string) {
    console.log('middreware: redirecting to auth page');
    return NextResponse.redirect(
        new URL(`/works_plus/auth?redirect=${encodeURIComponent(pathname)}`, request.url)
    );
}

export const config = {
  matcher: ['/works_plus/:path*'], // set path to need  auth
};
