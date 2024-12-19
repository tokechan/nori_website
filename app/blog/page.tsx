import NotePreview from '@/components/note-preview'
import { Suspense } from 'react'

export default function BlogPage() {
  return (    
    <section className="container mx-auto px-4">
      <h1 className="text-4xl font-serif font-bold leading-tight mb-12 mt-12 text-center">
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
    </section>  
  )
}

