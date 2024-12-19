import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (password === process.env.AUTH_PASSWORD) {
    const cookieStore = cookies();
    cookieStore.set('auth-token', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict',
      path: '/',
      maxAge: 60 * 60,
    });

    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
