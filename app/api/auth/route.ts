import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const CORRECT_PASSWORD = process.env.WORKS_PLUS_PASSWORD

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (password === CORRECT_PASSWORD) {
      // パスワードが正しい場合、認証トークンを設定
      const response = NextResponse.json({ success: true })
      cookies().set('auth-token', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 24時間
      })
      
      return response
    }

    return NextResponse.json(
      { success: false, message: 'パスワードが正しくありません' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'サーバーエラーが発生しました' },
      { status: 500 }
    )
  }
}