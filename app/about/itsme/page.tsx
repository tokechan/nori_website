// import Image from "next/image"
// import Link from "next/link"
// import { ArrowLeft } from "lucide-react"

// export default function ItsMe() {
//     return (
//         <div className="container mx-auto px-4 py-16">
//             <Link
//             href="/about"
//             className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-12"
//             >
//                 <ArrowLeft className="mr-2" size={18 />
//                 Back to About
//             </Link>
//         </div>
//     )
// }

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function ItsMe() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Link 
        href="/about"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-12"
      >
        <ArrowLeft className="mr-2" size={18} />
        Back to About
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif mb-12">Special interview</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl mb-8">
            映像クリエイターとしての私の想いや、
            作品に込める思いについてお話しします。
          </p>

          {/* ここに詳細なインタビューコンテンツを追加 */}
        </div>
      </div>
    </div>
  )
}

