import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// 環境変数の定義
const CORRECT_PASSWORD = process.env.WORKS_PLUS_PASSWORD || '';
const JWT_SECRET = process.env.JWT_SECRET || '';

// エンドポイントのPOST処理
export async function POST(request: Request) {
  try {
    // デバッグ用ログ
    console.log('CORRECT_PASSWORD:', CORRECT_PASSWORD); 
    console.log('JWT_SECRET:',process.env.JWT_SECRET); 

    // リクエストボディのパース
    const { password } = await request.json();
    console.log('入力されたパスワード:', password);

    // パスワードの確認
    if (password === CORRECT_PASSWORD) {
      console.log('認証成功');

      // JWTトークンを生成
      const token = jwt.sign({ authenticated: true }, JWT_SECRET, {
        expiresIn: '24h', // トークンの有効期限
      });
      console.log('生成されたトークン:', token);

      // レスポンスにトークンをCookieとして設定
      const response = NextResponse.json({ success: true });
      response.cookies.set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // 本番環境ではsecureを有効に
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24時間
        path: '/', // すべてのパスで有効
      });
      console.log('Cookie set:', response.cookies.get('auth-token'));

      return response;
    } 
      // パスワードが一致しない場合
      console.log('認証失敗: パスワードが一致しません');
      return NextResponse.json(
        { success: false, message: 'パスワードが正しくありません' },
        { status: 401 }
      );
    
  } catch (err) {
    // サーバーエラー時のログ
    console.error('サーバーエラー:', err);
    return NextResponse.json(
      { success: false, message: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
