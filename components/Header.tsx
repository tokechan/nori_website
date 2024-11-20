import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif">
            UNLABELING
          </Link>
          <div className="flex gap-8">
            <Link href="/projects" className="hover:underline">PROJECTS</Link>
            <Link href="/about" className="hover:underline">ABOUT</Link>
            <Link href="/contact" className="hover:underline">CONTACT</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}