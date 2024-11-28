import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('auth-token')?.value;

  console.log('Middleware: Request URL:', request.url);
  console.log('Middleware: Request Path:', pathname);
  console.log('Middleware: Auth Token:', token);

  if (!token) {
    console.log('Middleware: No token found.');
    if (pathname.startsWith('/works_plus/auth')) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/works_plus/auth', request.url));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || '', {
      algorithms: ['HS256'],
    });
    console.log('Middleware: Token validated successfully:', decoded);

    if (pathname.startsWith('/works_plus/auth')) {
      return NextResponse.redirect(new URL('/works_plus', request.url));
    }

    return NextResponse.next();
  } catch (err) {
    console.error('Middleware: JWT Verification Error:', {
      name: err.name,
      message: err.message,
      stack: err.stack,
    });

    if (!pathname.startsWith('/works_plus/auth')) {
      return NextResponse.redirect(new URL('/works_plus/auth', request.url));
    }

    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/works_plus/:path*'],
};
