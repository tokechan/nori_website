import Image from 'next/image'
import Link from 'next/link'
import { projects } from '../data/projects'
import { Instagram, Twitter, Youtube, Vimeo } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-serif leading-tight mb-8">
              HELLO<br />NICE TO MEET YOU
            </h1>
            <p className="text-xl mb-8">
              Hello!!! I'm so happy you're here.<br />
              I am a freelance creative director,content creator,
              motion designer.<br />
              Also founder of "UNLABELING"
              Let me join your journey of business
              Let's work together🤝
            </p>
            <div className="flex gap-4">
              <Link
                href="/projects"
                className="px-8 py-3 rounded-full bg-[#e9c7d0] text-black hover:bg-opacity-90 transition"
              >
                PROJECTS
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full bg-[#c2c95b] text-black hover:bg-opacity-90 transition"
              >
                CONTACT
              </Link>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/main_image.jpeg"
              alt="Creative illustration"
              fill
              className="object-contain animate-float"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <h2 className="text-4xl font-serif mb-12">The Latest</h2>
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
          <h2 className="text-5xl font-serif mb-8">Let's make us !!!</h2>
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