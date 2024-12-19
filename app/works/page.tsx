'use client'

import Link from 'next/link'
import Image from 'next/image'
import { projects } from '../../data/projects'
import { VideoGrid } from '../works_plus/components/video-grid'
import type { VideoItem } from '../works_plus/types/video'

// プロジェクトデータをVideoItem形式に変換
const projectVideos: VideoItem[] = projects.map(project => ({
  id: project.id.toString(),
  title: project.title,
  thumbnailUrl: project.image,
  tags: [
    // プロジェクトに応じたタグを設定
    { name: 'Works', url: project.link }
  ]
}))

export default function Page() {
  return (
    <section className="container mx-auto px-4">
      <h1 className="text-4xl font-serif font-bold leading-tight mb-12 text-center mt-12">
        WORKS
      </h1>
      
      {/* VideoGridを使用してプロジェクト一覧を表示 */}
      <VideoGrid videos={projectVideos} />
    </section>
  )
}

