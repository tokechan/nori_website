'use client'

import { useEffect, useState } from 'react'
import { CircleChevronUp } from 'lucide-react' // もしくはお好みのアイコン

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // 100px以上スクロールしたらボタンを表示
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
          aria-label="ページトップへ戻る"
        >
          <CircleChevronUp
            className="w-6 h-6 text-gray-200 hover:text-white"
            strokeWidth={1.5}
          />
        </button>
      )}
    </>
  )
}