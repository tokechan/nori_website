'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function AuthPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password === process.env.NEXT_PUBLIC_AUTH_PASSWORD) {
      try {
        // シンプルな認証トークンを設定
        document.cookie = `auth-token=authenticated; path=/; max-age=3600; samesite=lax`
        console.log('Authentication successful, redirecting...')
        
        // リダイレクト
        window.location.href = '/works_plus'
      } catch (error) {
        console.error('Authentication error:', error)
        setError('認証処理中にエラーが発生しました')
      }
    } else {
      setError('パスワードが正しくありません')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">WORKS+</h1>
      <div className="w-full max-w-md p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="パスワードを入力..."
          />
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <Button type="submit" className="w-full">
            送信
          </Button>
        </form>
      </div>
    </div>
  )
}
