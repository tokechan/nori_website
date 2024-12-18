import { NextResponse } from 'next/server'
import { parseString } from 'xml2js'
import { unstable_noStore as noStore } from 'next/cache'

export async function GET() {
  noStore() // このルートのレスポンスをキャッシュしない

  try {
    const response = await fetch('https://note.com/unlabeling/rss', {
      next: { revalidate: 3600 } // 1時間ごとに再検証
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed')
    }

    const data = await response.text()
    
    const result: any = await new Promise((resolve, reject) => {
      parseString(data, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });

    const posts = result.rss.channel[0].item.slice(0, 5).map((item: any) => ({
      title: item.title[0],
      link: item.link[0],
      description: item.description[0],
      pubDate: item.pubDate[0],
      thumbnail: item.enclosure ? item.enclosure[0].$.url : null
    }));

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Failed to fetch note posts:', error)
    return NextResponse.json({ error: 'Failed to fetch note posts' }, { status: 500 })
  }
}

