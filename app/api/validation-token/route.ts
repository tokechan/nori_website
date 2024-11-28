// import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   const cookieHeader = request.headers.get('cookie');
//   const cookies = cookieHeader
//     ? Object.fromEntries(
//         cookieHeader.split('; ').map(cookie => {
//           const [name, ...rest] = cookie.split('=');
//           return [name, rest.join('=')];
//         })
//       )
//     : {};

//   const authToken = cookies['auth-token'];

//   if (!authToken) {
//     return NextResponse.json(
//       { success: false, message: 'トークンがありません' },
//       { status: 401 }
//     );
//   }

//   // トークン検証ロジックを追加
//   if (authToken !== 'your-valid-token') {
//     return NextResponse.json(
//       { success: false, message: '無効なトークンです' },
//       { status: 401 }
//     );
//   }

//   return NextResponse.json({ success: true, message: '認証成功' });
// }
