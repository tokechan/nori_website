import Image from "next/image"

export default function Page() {
    return (

      <section className="container mx-auto px-4 ">
      <div className="flex flex-col md:grid-row gap-12 items-center">
        <div>
          <h1 className="text-4xl font-serif font-bold leading-tight mt-12 mb-12 text-center">
            PERSONAL<br />
          </h1>
          <h2 className="text-xl font-serif leding-tight mb-6 text-center">
            「この溢れる感情を」
          </h2>
          <a href="https://afuredasukonokanjyouwo.net" target="_blank" rel="noopener noreferrer">
            <div className="relative w-full aspect-[16/9] md:aspect-[4/3] lg:aspect-square">
              <Image
                src="/images/ahuredasu.jpg"
                alt="afuredasukonokanjowo"
                fill
                sizes="(max-width: 768px) 100vw, 
                       (max-width: 1200px) 85vw,
                       75vw"  
                className="object-contain hover:scale-105 transform duration-300"
                priority
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