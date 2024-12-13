import Image from "next/image"

export default function Page() {
    return (

      <section className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:grid-row gap-12 items-center">
        <div>
          <h1 className="text-xl font-serif leading-tight mb-12 text-center">
            PERSONAL<br />
          </h1>
          <h2 className="text-xl font-serif leding-tight mb-6 text-center">
            「この溢れる感情を」
          </h2>
          <a href="https://afuredasukonokanjyouwo.net" target="_blank" rel="noopener noreferrer">
            <div className="relative aspect-square w-full">
              <Image
                src="/images/ahuredasu.png"
                alt="afuredasukonokanjowo"
                fill
                className="object-contain animate-float"
              />
            </div>
            </a>
            <p className="text-xl py-4 text-center">
              第１２回オイド短編映画祭 入選
            </p>
            <p className="text-xl mb-8 text-center">
              Berlin Lift-oﬀ Film Festival 2022 入選
            </p>
        </div>
        
      </div>
      </section>
    )
  }