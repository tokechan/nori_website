import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Twitter, Youtube, Vimeo } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-serif leading-tight mb-8">
              クリエイティブな<br />映像制作
            </h1>
            <p className="text-xl mb-8">
              動画編集、アニメーション制作、ショート動画など、<br />あなたのビジョンを映像で実現します。
            </p>
            <div className="flex gap-4">
              <Link
                href="/projects"
                className="px-8 py-3 rounded-full bg-[#e9c7d0] text-black hover:bg-opacity-90 transition"
              >
                作品を見る
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full bg-[#c2c95b] text-black hover:bg-opacity-90 transition"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/hero-illustration.svg"
              alt="Creative illustration"
              fill
              className="object-contain animate-float"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <h2 className="text-4xl font-serif mb-12">最新の作品</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* プロジェクトのマッピングはここに */}
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="relative h-40 mb-8">
            <Image
              src="/images/magic-wand.svg"
              alt="Magic wand illustration"
              fill
              className="object-contain animate-float"
            />
          </div>
          <h2 className="text-5xl font-serif mb-8">一緒に魔法をかけましょう</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-[#c2c95b] text-black hover:bg-opacity-90 transition"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  )
}