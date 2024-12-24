import './globals.css'
import { Geist } from 'next/font/google'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const geist = Geist({ subsets: ['latin'] })
// const inter = Inter({ subsets: ['latin'] })

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
      <head>

      </head>
      <body className={`${geist.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Script 
          src="https://note.com/scripts/embed.js" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}