'use client'

import { useEffect } from 'react'

export default function WorksPlusLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    console.log('Layout mounted')
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  )
} 