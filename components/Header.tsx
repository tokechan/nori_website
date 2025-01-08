'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ナビゲーションリンクを定数として分離
const NAV_ITEMS = ['HOME', 'ABOUT', 'WORKS', 'WORKS_PLUS', 'PERSONAL', 'BLOG', 'CONTACT'] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header className="border-b relative z-50" role="banner">
      <div className="mx-auto px-4 py-4">
        {/* <nav menu adding > */}
        <nav className="flex items-center justify-between">
          {/* logo */}
          <Link href="/" className="text-2xl font-serif z-50 relative">
          <Image
            src="/images/logo_demo.svg"
            alt="site logo"
            width={120}
            height={120}
            className="mr-4 w-auto h-[80px] min-w-[60px]"
            />
          </Link>

          {/* hamburger menu button */}
          <button 
            className="block md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 z-50 relative" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
            </svg>
          </button>

          {/* nav menu */}
          <nav 
            className={`${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } fixed top-0 left-0 h-full w-full bg-navigation-background shadow-md z-50 md:static md:h-auto md:w-auto md:shadow-none md:translate-x-0 transition-transform duration-300 ease-in-out md:transition-none`}
            role="navigation"
            aria-label="Main navigation"
          >
            <ul className="flex flex-col md:flex-row md:items-center md:gap-8 h-full justify-center md:h-auto">
              {NAV_ITEMS.map((item) => (
                <li key={item} className="text-center md:text-left">
                  <Link 
                    href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                    className="
                      block px-6 py-6 md:py-2 
                      text-2xl md:text-base
                      text-navigation-text
                      transform 
                      hover-hover:hover:scale-110 
                      hover-hover:hover:text-navigation-hover
                      active:scale-110 
                      active:text-navigation-hover
                      focus-visible:scale-110
                      focus-visible:text-navigation-hover
                      transition-all duration-300
                      outline-none
                      touch-manipulation
                    "
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </nav>
      </div>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  )
}