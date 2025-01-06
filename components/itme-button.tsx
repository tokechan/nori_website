import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function SpecialButton() {
  return (
    <Link 
      href="/about/itsme"
      className="group flex items-center justify-between w-full max-w-2xl mx-auto bg-white border border-gray-200 rounded-full px-8 py-6 hover:bg-gray-50 transition-colors"
    >
      <div>
        <div className="text-xl">Special interview</div>
        <div className="text-sm text-gray-600">It&apos;s me! NORIKO</div>
      </div>
      <div className="h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center">
        <ArrowRight size={20} />
      </div>
    </Link>
  )
}

