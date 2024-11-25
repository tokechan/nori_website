'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '../../data/projects'
import { useRouter } from 'next/navigation'

export default function Page() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  

  useEffect(() => {
    const checkAuth = async () => {
      const token = document.cookie
        .split(';')
        .find((row) => row.startsWith('auth-token='))
        ?.split('=')[1];

        if (!token) {
          console.log('not auth: redirect to authpage');
          router.push('/auth');
          return;
        }

        try {
          //token varify easy ver
          const payload = JSON.parse(atob(token.split('.')[1]));
          router.push('/auth');
        } catch (error) {
          
        }
    };

    checkAuth();
  }, [router]);

  return (
    <section className="container mx-auto px-4 py-24">
      <h1>Works puls</h1>
      <p>このページは認証されたユーザーのみが閲覧できます</p>
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

