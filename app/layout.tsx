import './globals.css'
import { Amiri } from 'next/font/google'
import { Noto_Sans_JP } from 'next/font/google'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'
import ScrollToTop from '../components/ScrollToTop'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-notoSansJP',
})

const amiri = Amiri({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-amiri',
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
    <html lang="ja" className={`${notoSansJP.variable} ${amiri.variable}`}>
      <body className={`${notoSansJP.variable} ${amiri.variable} font-sans min-h-screen`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Script 
          src="https://note.com/scripts/embed.js" 
          strategy="lazyOnload"
        />
        <ScrollToTop />
      </body>
    </html>
  )
}