import './globals.css'
import { EB_Garamond } from 'next/font/google'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'
import VideoBackground from '../components/VideoBackground'

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'UNLABELING',
  description: 'UNLABELING website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${garamond.className} min-h-screen`}>
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow relative">
            {/* 背景動画レイヤー */}
            <div className="absolute inset-0 z-0 opacity-40">
              <VideoBackground />
            </div>
            {/*メインコンテンツレイヤー*/}
            <div className="relative z-10">
              {children}
            </div>
          </main>
          <Footer />
        </div>
        <Script 
          src="https://note.com/scripts/embed.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}