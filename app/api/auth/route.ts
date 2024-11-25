import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const CORRECT_PASSWORD = process.env.WORKS_PLUS_PASSWORD;

export async function POST(request: Request) {
  // 環境変数の確認（デバッグ用ログ）
  console.log('CORRECT_PASSWORD:', CORRECT_PASSWORD); // 環境変数 WORKS_PLUS_PASSWORD を確認
  console.log('JWT_SECRET:', process.env.JWT_SECRET); // 環境変数 JWT_SECRET を確認

  try {
    const { password } = await request.json();

  console.log('入力されたパスワード:', password);



    if (password === CORRECT_PASSWORD) {
      console.log('認証成功');
      // パスワードが正しい場合、暗号化された認証トークンを生成
      const token = jwt.sign({ authenticated: true }, process.env.JWT_SECRET!, {
        expiresIn: '24h', // トークンの有効期限（24時間）
      });

      console.log('生成されたトークン:', token); // JWT トークンの内容を確認

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
  } catch (err) {
    // サーバーエラー発生時のログ
    console.error('サーバーエラー:', err);
    return NextResponse.json(
      { success: false, message: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
