import { NextResponse } from 'next/server'
import { parseString } from 'xml2js'
import { unstable_noStore as noStore } from 'next/cache'

// 出力する投稿の型を定義
interface NotePost {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  thumbnail: string | null;
}

// RSS項目の型をより厳密に
interface RSSItem {
  title: [string];
  link: [string];
  description: [string];
  pubDate: [string];
  enclosure?: [{
    $: {
      url: string;
      type?: string;
      length?: string;
    }
  }];
}

interface RSSData {
  rss: {
    channel: [{
      item: RSSItem[];
    }]
  }
}

// 型変換用のユーティリティ関数
function convertRSSItemToNotePost(item: RSSItem): NotePost {
  return {
    title: item.title[0],
    link: item.link[0],
    description: item.description[0],
    pubDate: item.pubDate[0],
    thumbnail: item.enclosure?.[0]?.$.url ?? null
  };
}

export async function GET() {
  noStore()

  try {
    const response = await fetch('https://note.com/unlabeling/rss', {
      next: { revalidate: 3600 }
    })
    
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`)
    }

    const data = await response.text()
    
    const result: RSSData = await new Promise((resolve, reject) => {
      parseString(data, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });

    const posts: NotePost[] = result.rss.channel[0].item
      .slice(0, 5)
      .map(convertRSSItemToNotePost);

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Failed to fetch note posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch note posts' }, 
      { status: 500 }
    )
  }
}

