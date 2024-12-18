import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CalendarIcon, ExternalLinkIcon } from 'lucide-react'
import DOMPurify from 'isomorphic-dompurify'
import Image from 'next/image'

interface NotePost {
  title: string
  link: string
  description: string
  pubDate: string
  thumbnail: string | null
}

async function getNotePostsData(): Promise<NotePost[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/note-posts`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }
  const data = await res.json()
  return data.posts
}

function stripHtmlTags(html: string) {
  return DOMPurify.sanitize(html, { ALLOWED_TAGS: [] }).trim()
}

export default async function NotePreview() {
  const posts = await getNotePostsData()

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <Card key={index} className="flex flex-col">
          {post.thumbnail && (
            <div className="relative w-full h-48">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={75}
                priority={index < 3}
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = '/images/fallback.jpg';
                }}
              />
            </div>
          )}
          <CardHeader>
            <div className="line-clamp-2">
              <CardTitle>{post.title}</CardTitle>
            </div>
              <div className="flex items-center gap-2">
                <CardDescription>
                <CalendarIcon className="w-4 h-4" />
                {new Date(post.pubDate).toLocaleDateString('ja-JP')}
            </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-3 text-sm text-muted-foreground">
              {stripHtmlTags(post.description)}
            </p>
          </CardContent>
          <CardFooter className="mt-auto">
            <Button asChild variant="outline" className="w-full">
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                記事を読む
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

