'use client'

import { useEffect, useRef } from 'react'

export default function HeroCircle() {
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!circleRef.current) return
      
      const { left, top, width, height } = circleRef.current.getBoundingClientRect()
      const x = (e.clientX - left - width / 2) / 25
      const y = (e.clientY - top - height / 2) / 25
      
      circleRef.current.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square">
      {/* Ripple effects */}
      <div className="absolute inset-0 animate-ripple-1 rounded-full bg-gradient-to-br from-pink-200/30 to-orange-200/30" />
      <div className="absolute inset-0 animate-ripple-2 rounded-full bg-gradient-to-br from-pink-200/20 to-orange-200/20" />
      <div className="absolute inset-0 animate-ripple-3 rounded-full bg-gradient-to-br from-pink-200/10 to-orange-200/10" />
      
      {/* Main circle */}
      <div
        ref={circleRef}
        className="relative w-full h-full rounded-full bg-gradient-to-br from-pink-100 to-orange-100 shadow-lg transition-transform duration-300 ease-out"
      >
        <div className="absolute inset-0 backdrop-blur-sm rounded-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
          <p className="text-3xl md:text-5xl mb-4 font-extrabold">もっと、想いは伝わる</p>
          <p className="text-3xl md:text-5xl mb-4 font-extrabold">もっと、可能性は広がる</p>
          <p className="text-3xl md:text-5xl mb-4 font-extrabold">もっと、価値観は繋がる</p>
        </div>
      </div>
    </div>
  )
}