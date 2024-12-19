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
  const AUTH_PATH = '/works_plus/auth';

  useEffect(() => {
    const checkAuth = async () => {
      const token = document.cookie
        .split(';')
        .find((row) => row.startsWith('auth-token='))
        ?.split('=')[1];

        if (!token) {
          console.log('not auth: redirect to authpage');
          router.push(AUTH_PATH);
          return;
        }

        try {
          //token varify easy ver
          const payload = JSON.parse(atob(token.split('.')[1]));
          router.push(AUTH_PATH);
        } catch (error) {
          console.error('Error verifying token:', error);
          setError('認証に失敗しました。');
        }
    };

    checkAuth();
  }, [router]);

  return (
    <section className="container mx-auto px-4 mb-12">
      <h1 className="text-4xl font-serif leading-tight mb-12 mt-12 text-center">
        WORKS_PLUS
      </h1>
      <p className='text-center text-sm mb-12'>このページは認証されたユーザーのみが閲覧できます</p>
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