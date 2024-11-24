import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const CORRECT_PASSWORD = process.env.WORKS_PLUS_PASSWORD;

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (password === CORRECT_PASSWORD) {
      // パスワードが正しい場合、暗号化された認証トークンを生成
      const token = jwt.sign({ authenticated: true }, process.env.JWT_SECRET!, {
        expiresIn: '24h', // トークンの有効期限（24時間）
      });

      const response = NextResponse.json({ success: true });
      response.cookies.set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24時間
      });

      return response;
    }

    // パスワードが一致しない場合
    return NextResponse.json(
      { success: false, message: 'パスワードが正しくありません' },
      { status: 401 }
    );
  } catch {
    // サーバーエラーが発生した場合
    return NextResponse.json(
      { success: false, message: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
