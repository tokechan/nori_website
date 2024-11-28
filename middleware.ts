import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import path from 'path';
  

export function middleware(request: NextRequest) {
    //リクエストURLとトークンを取得
    const { pathname } = request.nextUrl;//現在のパスの取得
    const token = request.cookies.get('auth-token')?.value;//クッキーからトークン取得
  
    console.log('Middleware: Request URL:', request.url);
    console.log('Middleware: Request Path:', pathname);
    console.log('Middleware: Auth Token:', token);
  
    //トークンが存在しない場合
    if(!token) {
        console.log('Middleware: No toke found.');

        //認証ページにいる場合はリダイレクトしない
        if(pathname.startsWith('/works_plus/auth')) {
            console.log('Middleware: No Already on auth page. skipping redirect.');
            return NextResponse.next();
        }

        console.log('Middleware: Redirecting to auth page:');
        return NextResponse.redirect(new URL('/works_plus/auth', request.url));
    }

    //トークンの検証
    try {
        //JWT vilidation
        const decoded = jwt.verify(token, process.env.JWT_SECRET || '', {
            algorithms: ['HS256'], //アルゴリズムを明示
        });//トークン検証
        console.log('Middleware: Token validated successfully:', decoded);
        // } catch (err) {
        //     console.log('JWT Verifiction Error:', err.message);//エラー内容を詳細に出力
        //     throw err;//必要に応じてエラーをスロー
        // }

        //認証ずみで認証ページにいる場合、別のページにリダイレクト
        if (pathname.startsWith('/works_plus/auth')){
            console.log('Middleware: Authenticated. Redirecting to /works_plus.');
            return NextResponse.redirect(new URL('/works_plus', request.url));
        }

        //それ以外はそのまま進む
        console.log('Middleware: Authenticated. Proceeding to requestd page.');
        return NextResponse.next();
      } catch (err) {
        console.log('Middleware: JWT Verification Error:', err);
        //トークンが無効の場合、認証ページにリダイレクト
        if(!pathname.startsWith('/works_plus/auth')) {
           return NextResponse.redirect(new URL('/works_plus/auth', request.url));
      }

      //認証ページに入る場合はそのまま進む
      return NextResponse.next();
    }
}
  
  
export const config = {
  matcher: ['/works_plus/:path*'], // Middlwareを適応するパス
};
