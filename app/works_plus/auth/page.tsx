'use client'

import { useState, useEffect} from 'react'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'

export default function Page() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [redirectTo, setRedirectTo] = useState('/works_plus')//defaut redirect
  const router = useRouter()
  
  //クエリパラメータを取得してリダイレクトを更新
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const redirectParam = params.get('redirect')
    console.log(redirectParam);
    if (redirectParam) {
      setRedirectTo(redirectParam)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    console.log('送信されるパスワード:', password);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        console.log('auth scussce - page redirect:', redirectTo);
        router.push(redirectTo)//'redirectTo'に基づきリダイレクト
      } else {
        const data = await response.json();
        setError(data.message ||  'パスワードが正しくありません');
      } 
    } catch (err) {
      setError('エラーが発生しました。もう一度お試しください')
    } finally {
      setIsLoading(false)
    }
  };

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <Image
          src="/images/logo_demo.svg"
          alt="Logo"
          width={450}
          height={450}
          className="mb-8"
        />
        <h1 className="text-2xl font-bold mb-6">WORKS+</h1>
        <div className="w-full max-w-md p-8">
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors"
                placeholder="パスワードを入力..."
                required
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-0 top-1/2 -translate-y-1/2 px-6 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 transition-colors"
              >
               {isLoading ? '送信中...':'送信'}
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}              
          </form>
        </div>
    </div>
    )
  }
