'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { VideoGrid } from './components/video-grid'
import { privateProjects } from '@/data/works-plus'
import type { VideoItem } from './types/video'

// プロジェクトデータをVideoItem形式に変換
const privateVideos: VideoItem[] = privateProjects.map(project => ({
  id: project.id.toString(),
  title: project.title,
  thumbnailUrl: project.image,
  tags: project.tags.map(tag => ({ name: tag, url: project.link }))
}))

export default function WorksPlusPage() {
  const [error, setError] = useState('')
  const router = useRouter()
  const AUTH_PATH = '/works_plus/auth'

  useEffect(() => {
    const checkAuth = async () => {
      const token = document.cookie
        .split(';')
        .find((row) => row.trim().startsWith('auth-token='))
        ?.split('=')[1]

      if (!token || token !== 'authenticated') {
        console.log('認証が必要です')
        router.push(AUTH_PATH)
        return
      }
    }

    checkAuth()
  }, [router])

  return (
    <div className="container mx-auto px-4 py-8">
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <>
          <h1 className="text-4xl font-serif font-boldleading-tight mb-12 mt-12 text-center">
WORKS+
</h1>
          <VideoGrid videos={privateVideos} />
        </>
      )}
    </div>
  )
}