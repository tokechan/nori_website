import Image from "next/image"
import ahureasuImage from '@/public/images/ahuredasu.jpg'

export default function PersonalPage() {
    return (
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:grid-row gap-12 items-center">
          <div>
            <h1 className="text-4xl font-serif font-bold leading-tight mt-12 mb-12 text-center">
              PERSONAL<br />
            </h1>
            <h2 className="text-xl font-serif leading-tight mb-6 text-center">
              「溢れ出すこの感情を」
            </h2>
            <a href="https://afuredasukonokanjyouwo.net" target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <Image
                  src={ahureasuImage}
                  alt="afuredasukonokanjowo"
                  className="object-contain hover:scale-105 transform duration-300"
                  priority
                />
              </div>
            </a>
            <p className="text-xl py-4 mt-4 text-center">
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