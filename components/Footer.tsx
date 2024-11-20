import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#f5e6d3] mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
          <Link href="/" className="text-2xl font-serif">
          <Image
            src="/images/logo.png"
            alt="site logo"
            width={50}
            height={50}
            className="mr-4"
            />
          </Link>
          </div>
          <div>
            <nav className="space-y-4">
              <Link href="/projects" className="block hover:underline">PROJECTS</Link>
              <Link href="/about" className="block hover:underline">ABOUT</Link>
              <Link href="/contact" className="block hover:underline">CONTACT</Link>
            </nav>
          </div>
          <div>
            <p className="mb-4">Shonan, Kanagawa </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:opacity-70">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:opacity-70">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:opacity-70">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
            <p className="mt-8 text-sm">© 2024, UNLABELING</p>
          </div>
        </div>
      </div>
    </footer>
  )
}