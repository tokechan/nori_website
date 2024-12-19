'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function AuthPage() {
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log('Auth page mounted')
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', password)
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
          <Button type="submit" className="w-full">
            送信
          </Button>
        </form>
      </div>
    </div>
  )
}
