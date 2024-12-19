import Image from 'next/image'
import { VideoItem } from '../types/video'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

interface VideoGridProps {
  videos?: VideoItem[]
}

export function VideoGrid({ videos = [] }: VideoGridProps) {
  if (videos.length === 0) {
    return <p className="text-center text-gray-500 my-8">表示する動画がありません。</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <Card key={video.id} className="overflow-hidden group cursor-pointer">
          <CardContent className="p-0" onClick={() => window.open(video.tags[0].url, '_blank')}>
            <div className="relative aspect-video">
              <Image
                src={video.thumbnailUrl}
                alt={video.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
              <div className="flex flex-wrap gap-2">
                {video.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-pointer hover:bg-secondary/80"
                    onClick={(e) => {
                      e.stopPropagation();  // カード全体のクリックイベントを防ぐ
                      window.open(tag.url, '_blank')
                    }}
                  >
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

