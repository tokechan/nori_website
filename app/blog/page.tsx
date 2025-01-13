import NotePreview from '@/components/note-preview'
import VideoBackground from '@/components/VideoBackground'
import { Suspense } from 'react'

export default function BlogPage() {
  return (    
    <section className="page-container">
      {/* 背景レイヤー */}
      <div className="background-layer">
        <VideoBackground />
      </div>
      {/* コンテンツレイヤー */}
      <div className="content-layer">
        <h1 className="page-header">
          BLOG
        </h1>
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <NotePreview />
        </Suspense>
        <div className="text-center mt-12">
          <a 
            href="https://note.com/unlabeling" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg"
          >
            noteのページを見る
          </a>
        </div>
      </div>
    </section>  
  )
}

