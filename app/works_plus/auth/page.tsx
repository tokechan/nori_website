// 'use client'

// import { useState, useEffect} from 'react'
// import { useRouter } from 'next/navigation'
// import Image from 'next/image'


// export default function Page() {
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const [redirectTo, setRedirectTo] = useState('/works_plus')//defaut redirect
//   const router = useRouter()
  
//   //クエリパラメータを取得してリダイレクトを更新
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search)
//     const redirectParam = params.get('redirect')
//     console.log(redirectParam);
//     if (redirectParam) {
//       setRedirectTo(redirectParam)
//     }
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
    
//     console.log('送信されるパスワード:', password);

//       const response = await fetch('/api/auth', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ password }),
//       });

//       if (response.ok) {
//         console.log('認証成功');

//         // クッキーが正しく設定されることを確認
//         console.log('Cookies before redirect:', document.cookie);
//         // リダイレクトを少し遅らせることでミドルウェアのトークンチェックを回避
//         const { redirectTo } = await response.json();

//         setTimeout(() => {
//           router.push(redirectTo);// sucessece redirect
//         }, 100);//100ms delay
//       } else {
//         console.log('認証失敗');
//         setError('パスワードが正しくありません');
//       }
//       setIsLoading(false);
//   };

//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-white">
//         <Image
//           src="/images/logo_demo.svg"
//           alt="Logo"
//           width={450}
//           height={450}
//           className="mb-8"
//         />
//         <h1 className="text-2xl font-bold mb-6">WORKS+</h1>
//         <div className="w-full max-w-md p-8">
//           <form onSubmit={handleSubmit} className="relative">
//             <div className="relative">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-2 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
//                 placeholder="パスワードを入力..."
//                 required
//               />
//               <button 
//                 type="submit"
//                 disabled={isLoading}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 px-6 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 transition-colors"
//               >
//                {isLoading ? '送信中...':'送信'}
//               </button>
//             </div>
//             {error && (
//               <p className="text-red-500 text-sm text-center">{error}</p>
//             )}              
//           </form>
//         </div>
//     </div>
//     )
//   }
'use client';

import { useState } from 'react';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || 'Unknown error occurred');
      }

      alert('ログイン成功！');
      window.location.href = '/works_plus';
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">ログイン</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
