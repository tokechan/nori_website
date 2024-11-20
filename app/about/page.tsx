import Image from "next/image"

export default function Page() {
    return (

      <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-serif leading-tight mb-8">
            WHO AM I?<br />
            </h1>
            <h2 className="text-xl mb-8">
            HELLO<br />NICE TO MEET YOU
            <br />
            I am NORIKO.
            </h2>
          <p className="text-xl mb-8">
            I'm so happy you're here.<br />
            I am a freelance creative director,content creator,
            motion designer.<br />
            Also founder of "UNLABELING"
            Let me join your journey of business
            Let's work together🤝
          </p>
        </div>
        <div className="relative aspect-square">
          <Image
            src="/images/norichan.jpg"
            alt="noriko image"
            fill
            className="object-contain animate-float"
          />
        </div>
      </div>
      </section>
    )
  }