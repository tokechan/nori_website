import VideoBackground from '../components/VideoBackground'


export default function HomePage() {
  return (
    <main className="relative min-h-[calc(100vh-160px)]">

      <div className="absolute inset-0 z-0 ">

        <VideoBackground />
      </div>
      <div className="relative z-10 h-full">
        <div className="container mx-auto px-4">
          <section className="py-12">
            {/* new feature */}
            <div className="grid grid-cols-1 items-center">
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}