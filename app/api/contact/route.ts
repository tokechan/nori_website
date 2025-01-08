import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // TODO: ここに実際のデータ処理ロジックを実装
    console.log('受信したデータ:', { name, email, subject, message });

    return NextResponse.json(
      { 
        success: true, 
        message: 'お問い合わせを受け付けました' 
      }, 
      { status: 200 }
    );

  } catch (err) {
    console.error('サーバーエラー:', err);
    return NextResponse.json(
      { 
        success: false, 
        message: 'サーバーエラーが発生しました' 
      }, 
      { status: 500 }
    );
  }
}
