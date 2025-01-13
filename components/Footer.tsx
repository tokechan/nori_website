import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Twitter, Youtube, NotebookPen } from 'lucide-react'

const navItems = [
  { href: '/about', label: 'ABOUT' },
  { href: '/media', label: 'MEDIA' },
  { href: '/works', label: 'WORKS' },
  { href: '/works_plus', label: 'WORKS+' },
  { href: '/personal', label: 'PERSONAL' },
  { href: '/blog', label: 'BLOG' },
  { href: '/contact', label: 'CONTACT' },
]

const socialLinks = [
  { href: 'https://www.instagram.com/unlabeling___/', Icon: Instagram, label: 'Instagram' },
  { href: '#', Icon: Twitter, label: 'Twitter' },
  { href: '#', Icon: Youtube, label: 'Youtube' },
  // { href: 'https://note.com/unlabeling', Icon: NotebookPen, label: 'note' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <Link href="/" className="mb-8 md:mb-0">
            <Image src="/images/logo_demo.svg" alt="site logo" width={120} height={120} />
          </Link>
          {/* <nav className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8 md:mb-0">
            {navItems.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:underline">
                {label}
              </Link>
            ))}
          </nav> */}
          <div>
            <div className="flex gap-4 mb-4">
              {socialLinks.map(({ href, Icon, label }) => (
                <Link key={label} href={href} className="text-gray-600 hover:text-gray-900">
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>
            <p className="text-sm">
              © 2024 UNLABELING<br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

