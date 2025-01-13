import { SpecialButton } from "@/components/itme-button"

import Image from "next/image"

export default function Page() {
    return (
      <div>
      <section className="container mx-auto px-4 mb-12">
      <h1 className="text-4xl font-base leading-tight mb-12 text-center mt-12">
        ABOUT
        </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] overflow-hidden">
            <Image
              src="/images/aboutme.jpg"
              alt="noriko image"
              fill
              className="object-cover rounded-xl"
            />
            </div>
              <h2 className="text-3xl mb-8">

              <div className="font-base">

              NORIKO
              </div>
              <p className="text-lg mb-6">
              UNLABELING CREATIVE STUDIO
              </p>
              <p className="text-2xl mb-8">
              Film Director<br />
              Creative Director<br />
              Motion Designer<br />


              </p>
              </h2>
              <div className="col-span-1 md:col-span-2 text-xl mb-8">
              <p>
              現在、日本を拠点に国を問わず活動する映像監督。
              神田外語大学英米語学科外国語学部卒業後、
              外資系IT企業から映像業界へ転身。
              約７年間の映像制作会社での経験したのち独立。
              ２０２２年映画美学校にて脚本コースを受講し
              プライベートでは映画製作も精力的に行っている。
              <br />
              <br />
              U N L A B E L I N Gという名のもと<br />
              固定観念から解放された、全ての個性が尊重される<br />
              想像力に満ちた優しい世界づくりを目指し <br />
              新しい表現づくりの追求をし続けている 。<br />
              <br />
              <br />
              Noriko is a Film Director based in Japan, working globally.<br />
              After graduating from the Department foreign languages<br />
              at Kanda University of International Studies.<br />
              she switched from working at a foreign IT company to the video industry.<br />
              Following around seven years of experience at a video production company,<br />
              she became independent.<br />
              In 2022, she took a screenwriting course at the Film School of Tokyo<br />
              and is also involved in filmmaking in her private time.<br />
              <br />
              <br />
              Under the name &quot;UNLABELING,&quot; she continues to pursue<br />
              new forms of expression in order to realize various ideas,<br />
              with the vision of creating a gentle,<br />
              imaginative world where every individual is<br />
              respected and freed from preconceived notions.
              </p>
              </div>
          </div>

      </section>

      <section className="container mx-auto px-4 mb-12">
      <h1 className="text-3xl font-base font-bold leading-tight  text-center mb-8 py-8">
        Message
      </h1>
      <h2 className="text-2xl font-base leading-tight mb-12 text-center">
        Turning passion into stories and ideas into impact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <p className="mt-4 text-xl leading-relaxed text-left mb-12 ">
      はじめまして。映像制作の場で、8年ほど広告やブランディングムービー、SNSコンテンツ制作の仕事をしてる、NORIKOです。
      <br />   
      私自身、周りから勝手に創られたイメージやラベリングによってすごく長い間苦しこで生きてきました。自身のつくる映像制作を通して、このラベルを剥がし「創造力の和でつくる新たな価値」を生み出していくことを信念に活動しています。   
      <br />
      クライアントワークでは、人、サービス、モノの想いと魅力を深堀り、「見えない価値」を発見し、心を動かす映像表現を武器にストーリーを紡ぎます。
      <br />
      そして、強いブランド力とファンづくりをサポートし、想像し続けることを決して諦めず想いの火を灯し合う一番の相棒となることを目指し伴走していきます。
      </p>
      <div className="relative h-[500px] overflow-hidden">
            <Image
              src="/images/aboutme.png"
              alt="noriko image"
              fill
              className="object-cover rounded-xl"
            />
            </div>
      <div className="col-span-1 md:col-span-2">
        <p className="mt-4 text-xl leading-relaxed mb-12">
          Hey there, I&apos;m NORIKO! I&apos;ve been in the video production for 8 years, crafting ads, branding videos, and social media content .
        <br />
        For years, I struggled with the labels and assumptions others imposed on me.
        <br />
        But through my work, I&apos;m all about stripping away those labels and creating fresh value through the power of imagination and collaboration.
        <br />
        When working with clients, I dive deep into the heart of people, services, and products, uncovering the *hidden gems* that truly make them shine. With storytelling that moves hearts and video magic that sparks emotions, I bring their vision to life.
        <br />
        My mission is  help build strong brands, foster loyal fans, and keep that creative spark burning bright. I&apos;m not just your video creator—I&apos;m your ride-or-die partner, ready to walk alongside you as we dream big and make it happen.
        </p>
      </div>
      </div>
    
              {/* {Special Interview Button} */}
              <div className=" mb-20">
            <SpecialButton
             />
          </div>
    </section>

    </div>    
   )
  }