import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { redirect } from 'next/dist/server/api-utils';

// 環境変数の定義
const CORRECT_PASSWORD = process.env.WORKS_PLUS_PASSWORD || '';
const JWT_SECRET = process.env.JWT_SECRET || '';

if (!CORRECT_PASSWORD || !JWT_SECRET) {
  console.error('環境変数が正しく設定されていません');
}

export async function POST(request: Request) {
  try {
    // Content-Type チェック
    if (request.headers.get('Content-Type') !== 'application/json') {
      return NextResponse.json(
        { success: false, message: '無効な Content-Type です' },
        { status: 400 }
      );
    }

    // リクエストボディのパース
    const { password } = await request.json();

    // デバッグログ
    if (process.env.NODE_ENV !== 'production') {
      console.log('入力されたパスワード:', password);
    }

    // パスワードの確認
    if (password === CORRECT_PASSWORD) {
      console.log('認証成功');

      // JWTトークンの生成
      const token = jwt.sign({ authenticated: true }, JWT_SECRET, {
        expiresIn: '24h',
      });

      // トークンをCookieに設定
      const response = NextResponse.json({ success: true });
      response.cookies.set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24,
        path: '/',
      });

      return NextResponse.json({ success: true, redirectTo: '/works_plus' });
    } else {
      console.log('認証失敗: パスワードが一致しません');
      return NextResponse.json(
        { success: false, message: 'パスワードが正しくありません' },
        { status: 401 }
      );
    }
  } catch (err) {
    console.error('サーバーエラー:', err);
    return NextResponse.json(
      { success: false, message: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
