'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'


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
    <header className="border-b relative z-50">
      <div className="container mx-auto px-4 py-4">
        {/* <nav menu adding > */}
        <nav className="flex items-center justify-between">
          {/* logo */}
          <Link href="/" className="text-2xl font-serif z-50 relative">
          <Image
            src="/images/logo_demo.svg"
            alt="site logo"
            width={120}
            height={120}
            className="mr-4 "
            />
          </Link>

          {/* bumbergar menu button */}
          <button 
            className="block md:hidden text-gray-800 focus:outline-none z-50 relative" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
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
            <div 
              className={`${
                isOpen ? 'translate-x-0' : 'translate-x-full' 
              } fixed top-0 left-0 h-full w-full bg-white shadow-md z-50 md:static md:h-auto md:w-auto md:shadow-none md:translate-x-0 transition-transform duration-300 ease-in-out md:transition-none`}
            >
             <ul className="flex flex-col md:flex-row md:items-center md:gap-8 h-full justify-center md:h-auto">
              {['HOME', 'ABOUT', 'WORKS', 'WORKS+', 'PERSONAL', 'BLOG', 'CONTACT'].map((item) => (
                <li key={item} className= "text-center md:text-left">
                  <Link 
                    href={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                    className="block px-4 py-4 md:py-2 hover:bg-gray-100 text-2xl md:text-base"
                    onClick={() => setIsOpen(false)}
                    >
                      {item}
                  </Link>
                </li>
                ))}
            </ul>
          </div>
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