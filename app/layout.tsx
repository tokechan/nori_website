import './globals.css'
import { Kiwi_Maru } from 'next/font/google'

import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const kiwi = Kiwi_Maru({
  subsets: ['latin'],
  weight: ['300', '400', '500']
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
      <head>

      </head>
      <body className={`${kiwi.className} min-h-screen flex flex-col`}>
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