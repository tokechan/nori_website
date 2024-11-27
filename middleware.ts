import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
  

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const authToken = request.cookies.get('auth-token')?.value;
  
    console.log('Middleware: Request URL:', request.url);
    console.log('Middleware: Request Path:', pathname);
    console.log('Middleware: Auth Token:', authToken);
  
    if (pathname.startsWith('/works_plus/auth')) {
      console.log('Middleware: Auth page - skip');
      return NextResponse.next();
    }
  
    if (pathname.startsWith('/works_plus') && !authToken) {
      console.log('Middleware: No token found. Redirecting to auth page.');
      return redirectToAuthPage(request, pathname);
    }
  
    console.log('Middleware: Token validated or not required.');
    return NextResponse.next();
  }
  
  function redirectToAuthPage(request: NextRequest, pathname: string) {
    const redirectUrl = `/works_plus/auth?redirect=${encodeURIComponent(pathname)}`;
    console.log('Middleware: Redirecting to auth page:', redirectUrl);
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }
  

export const config = {
  matcher: ['/works_plus/:path*', '/works_plus/auth'], // works_plus 以下全てを対象に
};
