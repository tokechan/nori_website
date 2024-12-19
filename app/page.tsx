import Image from 'next/image'
import Link from 'next/link'
import { projects } from '../data/projects'
import HeroCircle from '../components/ui/hero-circle'


export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-12">
        {/* new feature */}
        <div className="grid grid-cols-1 md:grid-cols2 gap-12 items-center">
          <div>
            <main className="min-h-screen">
              <div className="space-y-40">
                
                  <div>
                  <h1 className="text-4xl md:text-4xl font-bold font-serif text-center pb-12 mb-12">
                    UNLABELING CREATIVE STUDIO
                  </h1>
                  <HeroCircle />
                  </div>

                  <div className="flex justify-center">
                    <h2 className="text-2xl md:text-3xl font-serif  text-left mb-12">
                      人もモノも見え方、捉え方、価値観は、<br />
                      いくつもあって、もっと自由であっていい<br />
                      そんな想像力の溢れる<br />
                      優しい世界をつくっていけるように<br />
                      無意識に付けられてしまっている<br />
                      ラベルをはがしていくことに注力し<br />
                      固定概念に縛られない<br />
                      新しい表現づくりの追求を<br />
                      していきたいという想いから<br />
                      『UNLABELING』と名付けました。<br />
                    </h2>
                  </div>
                </div>
            </main>
          </div>
        </div> 
      </section>

      <section className="py-24">
        <h2 className="text-3xl md:text-4xl font-serif mb-12">The Latest</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* プロジェクトのマッピングはここに */}
          {projects.slice(0, 3).map((project) => (
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

      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="relative h-40 mb-8">
            <Image
              src="/images/footer_image.jpg"
              alt="panorama image"
              fill
              className="object-contain animate-float"
            />
          </div>
          <h2 className="text-5xl font-serif mb-8">Let&apos;s make us !!!</h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-[#c2c95b] text-black hover:bg-opacity-90 transition"
          >
            CONTACT
          </Link>
        </div>
      </section>
    </div>
  )
}