import { supabase } from '../../../lib/supabaseClient';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Supabaseで認証
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !data.session) {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
  }

  // JWTトークン生成
  const token = jwt.sign({ email }, process.env.JWT_SECRET!, { expiresIn: '1h' });

  // クッキーにトークンを保存
  cookies().set({
    name: 'auth-token',
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
    path: '/',
    maxAge: 60 * 60, // 1時間
  });

  return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
}
