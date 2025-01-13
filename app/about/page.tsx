import { SpecialButton } from "@/components/itme-button"

import Image from "next/image"

export default function Page() {
    return (
      <div>
      <section className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl font-serif font-bold leading-tight mb-12 mt-12 text-center">
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
              <div className="font-bold">
              NORIKO
              </div>
              <p className="text-lg mb-6">
              UNLABELING CREATIVE STUDIO
              </p>
              <p className="text-2xl mb-8">
              Film Director<br />
              Creative Director<br />
              Motion Designer<br />
              Content Creator<br />
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
          {/* {Special Interview Button} */}
          <div className="mt-20 mb-20">
            <SpecialButton
             />
          </div>
      </section>

      <article className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold leading-tight  text-center mb-8 py-8">
        Message
      </h1>
      <p className="mt-4">
        はじめまして。
        映像制作の場で、8年ほど広告や
        ブランディングムービー、SNSコンテンツ制作の仕事をしてる、NORIKOです。
        私たち人間は、無意識のうちに 物事においても、
        人間関係においてもラベリングをして 行動する 事が
        日常では当たり前 の 世界になっていますが
        価値や個性を 他者に 決めつけられてしまい 、
        苦しい 思い をする 人や 、使われ方が 決まってしまうものたちが いる のも 事実。
        <br />
        <br />
        私自身も 周りから 勝手に 創られた
        イメージやラベリングによって
        すごく長い 間 苦しこで 生きてきました 。
        自身の つくる 映像制作を 通して、このラベル を 剥がし
        創造力の 和で つくる 新たな 価値 を 生み出して いくことを 信念に 活動して います。
        <br />
        <br />
        クライアントワークでは、人、サービス、モノの 想い と魅力を 深堀り、
        「 見えない価値 」を 発見し、心を 動かす 映像表現を 武器に ストーリー を 紡ぎます。
        <br />
        <br />
        そして、強いブランド力 とファンづくりをサポートし、
        想像し続けることを 決して 諦めず
        想いの 火 を 灯し合う一 番の 相棒 となることを 目指し 伴走して いきます。
        <br />
        <br />
        u n l a b e l i n g . c o n t a c t @ g m a i l . c o m
      </p>
    </article>
    </div>    
   )
  }