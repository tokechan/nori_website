import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  const authToken = request.cookies.get('auth-token')?.value;

  if (!authToken) {
    return NextResponse.json({ success: false, message: 'トークンがありません' }, { status: 401 });
  }

  try {
    jwt.verify(authToken, process.env.JWT_SECRET!);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, message: 'トークンが無効です' }, { status: 401 });
  }
}
