import Link from 'next/link'
import Image from 'next/image'
import { projects } from '../../data/projects'

export default function Page() {
  return (
    // <div className="container mx-auto px-4 py-24">
    //   <h1 className="text-4xl font-serif mb-8">The Latest Works</h1>
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
    //   <Link href="/" className="text-2xl font-serif">
    //         {/* ロゴ画像を追加する場合の例 */}
    //         <Image
    //           src="/images/hiratsuka1.jpg" // public/images/logo.png への参照
    //           alt="UNLABELING"
    //           width={500}
    //           height={300

    //           }
    //         />
    //       </Link>
    //     {/* ページコンテンツ */}
    //   </div>
    // </div>

    <section className="container mx-auto px-4 py-24">
    <h2 className="text-4xl font-serif mb-12">The latest</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={project.link}
          className="group block"
        >
          <div className="relative aspect-[4/3] mb-4 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition group-hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-serif underline-offset-4 group-hover:underline">
            {project.title}
          </h3>
        </Link>
      ))}
    </div>
  </section>
  )
}