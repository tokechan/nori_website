import Image from "next/image"

export default function Page() {
    return (
      <div>
      <section className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl font-serif font-bold leading-tight mb-12 mt-12 text-center">
        ABOUT
        </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
            <Image
              src="/images/about1fix.png"
              alt="noriko image"
              fill
              className="object-contain animate-float"
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
              現 在 、日 本 を 拠 点 に 国 を 問 わ ず 活 動 する 映 像 監 督 。<br />
              神 田 外 語 大 学 英 米 語 学 科 外 国 語 学 部 卒 業 後 、<br />
              外 資 系 I T 企 業 から 映 像 業 界 へ 転 身 。<br />
              約７年 間 の 映 像 制 作 会 社 で の 経 験 した の ち 独 立 。<br />
              ２０２２ 年 映 画 美 学 校 に て 脚 本 コ ース を 受 講 し<br />
              プライベートで は 映 画 製 作 も 精 力 的 に 行って いる 。<br />
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
      <article className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold leading-tight  text-center mb-8 py-8">
        Message
      </h1>
      <p className="mt-4">
        は じ め まして 。 <br />
        映 像 制 作 の 場 で、8 年 ほ ど 広 告 や <br />
        ブランディン グム ー ビ ー 、S N S コ ンテン ツ 制 作 の 仕 事 をしてる 、N O R I K O です。 <br />
        私 た ち 人 間 は 、無 意 識 のうちに 物 事 に お いても、 <br />
        人 間 関 係 に お いてもラ ベ リン グをして 行 動 する 事 が <br />
        日 常 で は 当 たり前 の 世 界 に なって い ます が <br />
        価 値 や 個 性 を 他 者 に 決 め つ けら れてしま い 、 <br />
        苦 しい 思 い をする 人 や 、使 わ れ 方 が 決 まってしまうも の た ちが いる の も 事 実 。 <br />
        <br />
        <br />
        私 自 身 も 周 りから 勝 手 に 創 ら れ た<br />
        イメ ー ジ やラ ベ リン グによって<br />
        すごく長 い 間 苦 しんで 生 きてきました 。<br />
        自 身 の つくる 映 像 制 作 を 通 して、このラ ベ ル を 剥 がし<br />
        創 造 力 の 和 で つくる 新 た な 価 値 を 生 み 出 して いくことを 信 念 に 活 動 して い ます。<br />
        <br />
        <br />
        クライアントワ ー クで は 、人 、サ ー ビス 、モノの 想 い と魅 力 を 深 堀 り、<br />
        「 見 え な い 価 値 」を 発 見 し、心 を 動 か す 映 像 表 現 を 武 器 に ストーリー を 紡 ぎます。<br />
        <br />
        <br />
        そして、強 いブランド力 とファン づくりをサ ポ ートし、<br />
        想 像 し 続 け ることを 決 して 諦 め ず<br />
        想 い の 火 を 灯 し 合 う一 番 の 相 棒 とな ることを 目 指 し 伴 走 して いきます。<br />
        <br />
        <br />
        u n l a b e l i n g . c o n t a c t @ g m a i l . c o m
      </p>
    </article>
    </div>    
   )
  }