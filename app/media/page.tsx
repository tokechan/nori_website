import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function ItsMe() {
  return (
    <div className="container mx-auto px-4 py-16">
     
    <article className="max-w-4xl mx-auto">
    {/* Introduction */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl text-center font-bold mb-16">
            It&apos;s me! Interview
            <br />
            <p className="text-sm"  >
            写真と文：七緒
            </p>
        </h1>
        <p className="prose prose-lg text-lg leading-relaxed mb-8">
            映像監督、クリエイティブディレクターとして活躍するNORIKOさん。その創作の源は、
            今まで歩んできた人生にあります。息苦しさを抱えた幼少期を経て、たどり着いた自分らしい表現。
            そして見据える未来について、ゆっくりお話を伺いました。
        </p>
      </div>

      {/* Section 1 */}
      <section className="mb-24">
                <div className="relative aspect-[3/2] mt-8 mb-12">
                    <Image
                    src="/images/noriko-ocean1.jpg"
                    alt="海辺に立つNOROKO"
                    fill 
                    className="object-cover rounded-lg"
                    priority 
                    />
                </div> 
        
        <div className="prose prose-lg text-lg leading-relaxed mb-8">
        <h2 className="text-2xl font-bold mb-12">本当の私は置いてけぼりだった</h2>
            <p>
            「人の期待に応えてばかりで、本当の私は置いてけぼりだった」
            </p>
            <p>
            チャーミングな笑顔でそう吐露するNORIKOさんは映像監督、クリエイティブディレクターとして、
              映像を軸としたコンテンツ制作を生業にしています。いくつかの制作会社を経て『UNALABELING』として独立。
              アート、ファッション、音楽などジャンルを越境した映像制作を手がけています。
            </p>

            <p>
              幼い頃から、厳しい家庭で育てられたNORIKOさん。部活やサークルは禁止、進学先まで
              親の一存で決められてしまう。そんな日々にずっと葛藤を抱いていました。
            </p>

            <p>
              「学校、友だち、放課後の過ごし方....。こうしなさいああしなさいって、親がいいと思う
              ことを押し付けられてきました。やりたいことは否定され、反抗すると『なんで、お前は
              そういうこと言うんだ』と怒鳴られる。言いなりにならざるを得ない状況でした」
            </p>

            <div className=" relative aspect-[2/3] mt-8 mb-12">
            <Image
            src="/images/noriko-ocean2.jpg"
            alt="海辺に立つNOROKO"
            fill 
            className="object-cover rounded-lg"
            priority 
            />
            </div>

            <p>
            当時を振り返り「親も生きるのに必死で、子どもを慮る余裕がなかった」とぽつり。大人になった今は俯瞰で捉えられる。
            だけどたった一度の子ども時代。やりたいことをのびのびとしたかったでしょう。
            </p>

            <p>
            「不自由なく育ててもらった感謝もあります。部活のかわりに英語を習ったことで得意になりましたし、留学も行かせてもらいました。
            でも将来の夢を打ち明けた時も『つべこべ言わずに、家族のために生きろ』って。私の人生は誰のもの？ずっと…苦しかった」
            </p>

            <p>
            そんな環境下で、NORIKOさんは次第に本音を隠すように。心ない言葉で傷ついたのに笑顔でごまかしたり、場の空気を読んで明るく振る舞ったり。
            本当の私と、誰かがまなざす私。少しずつ離れていく距離。
            </p>

            <p>
            「周りから誤解されるのは自分らしくいられないから。姉と容姿を比較されて育ったのも大きいです。
            幼稚園頃からかな…私はかわいくないから、と盛り上げキャラを演じてきました。みんなが笑ってくれると居場所ができる気がして…。
            友達からも『陽キャラだね』なんて言われて。自分を守るための術だったけれど、しんどかったです」
            </p>
        </div>
      </section>

        {/* Section 2 */}
        <section className="mb-24">
            <h2 className="text-2xl font-bold mb-12">暗闇で見つけた「映像」という光</h2>

            <div className="relative aspect-[16/9] mt-8 mb-12">
                <Image
                src="/images/noriko-ocean3.jpg"
                alt="海辺に座るNOROKO"
                fill 
                className="object-cover rounded-lg"
                priority 
                />
            </div>

            <div className="prose prose-lg text-lg leading-relaxed mb-8">
                <p>
                無邪気でいたいのに、環境がそうさせてくれず、勝手なイメージを抱かれてしまう。
                息苦しさを抱えながらも、いよいよ就職。親の猛反対を押し切り、学生時代からアルバイトを続けていたApple Japanへ。ところが…
                </p>

                <p>
                「入社したはいいものの『何もできない…』って引け目ばかり感じていました。同僚は一芸に秀でた人が多く、職場で生き抜くには人を惹きつける魅力が必要。
                英語は得意だけど、当時はそこまでITに詳しくなかったし、かわいい人がチヤホヤされるから容姿コンプレックスも増して。人に合わせて笑って、その場しのぎする毎日でした」
                </p>

                <p>
                NORIKOさんと周りの歯車がずれていった時、とうとう心の調子を崩します。仕事も家族も自分もにっちもさっちもいかない。
                起き上がることさえできず、鬱病と診断されてからは、引きこもり状態に。
                </p>
                <p>
                社会から見放されたような孤独に沈む中、テレビや映画、ミュージックビデオをぼんやり見つめる日々。
                生きがいもない、いっそのこと消えてしまいたい。先が全く見えない中で、ついに気づくのです。
                </p>
                <p>
                「私の人生に寄り添ってくれているのは、映像だ」
                </p>

                <div className="relative aspect-[16/9] mt-8 mb-12">
                <Image
                src="/images/noriko-ocean4.jpg"
                alt="海辺を走るNOROKO"
                fill 
                className="object-cover rounded-lg"
                priority 
                />
            </div>
            <div className="prose prose-lg text-lg leading-relaxed mb-8">
                <p>
                「親に否定されてばかりで好きなものがわからなかったけれど、どんな辛い時もそばにいてくれたのは映像でした。
                幼少期からいじめられることも多く、画面越しの世界に浸ることで心のバランスを取っていました。
                うまく伝えられない想いを代弁してくれたり、心揺さぶる世界を見せてくれたのは、いつも映画や音楽、アニメーションだった」
                </p>
                <p>
                それは暗闇の中でたった一筋さしこんだ光。得てして大切なものは、寄り添うようにしてずっとそばにいる。   
                </p>
                <p>
                「だから自分を救ってくれた映像に関わりたいと強く思いました」
                </p>
                <p>
                27歳の冬、NORIKOさんは未経験で映像業界へ飛び込みます。そこからのキャリアは目をみはるほど。
                </p>
                <p>
                日本トップクラスのモーショングラフィックを生み出す「EDP Grapics Works」でモーショングラフィックデザインを学んだ後、ファッションメディアでトレンド感のある動画やコンテンツ制作を手がけた後、海外拠点のニュースメディアへ。
                </p>
                <div className="relative aspect-[2/3] mt-8 mb-12">
                <Image
                src="/images/ahuredasu.jpg"
                alt="溢れ出すこの感情を"
                fill 
                className="object-cover rounded-lg"
                priority 
                />
            </div>
                <p>
                2021年には映画<Link href="https://afuredasukonokanjyouwo.net/" className="text-blue-600 hover:text-blue-800 underline">『溢れ出すこの感情を』</Link>を監督し「第12回オイド短編映画祭」「Berlin Lift-off Film Festival 2022」入選。
                活躍の幅をのびのびと広げ『UNALABELING』として独立しました。
                </p>
            </div>
            </div>
        </section>

      {/* Section 3 */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-12">対話と情熱で、変幻自在に想いを届ける</h2>
          <div className="prose prose-lg text-lg leading-relaxed mb-8">
          <p>
                NORIKOさんは多彩な表現が魅力です。モーショングラフィックス、ファッション、アート、対談、ドキュメンタリー。
                ひとところにおさまらない表現において、通底している想い。それは屋号でもある「UNALABELING」。
                ラベルをはがすことで、固定観念に縛られないあたらしい表現を。
                </p>
                <p>
                「私たちはつい見た目の印象で人やモノの価値をラベリングします。その結果、人知れず傷ついている人がいるのも事実。
                固定観念を丁寧に取り払った先に、本当の価値が眠っていると思う」
                </p>
            </div>

          <div className="relative aspect-[16/9] mb-12">
            <Image
            src="/images/noriko-ocean5.jpg"
            alt="海辺に立つNOROKO"
            fill 
            className="object-cover rounded-lg"
            priority 
            />
        </div>

        <div className="prose prose-lg text-lg leading-relaxed mb-8">
        <p>
            「私自身、本来の自分と異なるたくさんのラベルを貼られて、長い間、息苦しかった。たとえば、容姿や体型に対して嫌な言葉を散々受けてきました。だから映像を作ることで、無意識に抱いてしまう思い込みをはがしていきたい」
            </p>
            <p>
            その信念のもと、制作で大切にしているのが、対話と情熱です。
            </p>
            <p>
            人に届く表現はどういう形なのか。表面的な見栄えではなく、本質を捉えること。
            丁寧な対話を重ねてクライアントの思い込みを取り払い、魅力を届けています。
            </p>
            <p>
            たとえば毛織物産地・尾州のオープンファクトリー<Link href="https://hitsuji.fun/" className="text-blue-600 hover:text-blue-800 underline">『ひつじサミット2023』</Link>の動画制作。
            </p>
            <p>
            「はじめは企業のPR映像を求められました。でも実際、工場へ足を運ぶと、織り機の美しさ、職人の真剣なまなざしが印象的で。
            よくある説明的なものではなく、思い切って世界観ベースに舵を切ることを提案したんです。
            言葉を削ぎ落とし、美しさを見せましょうって」
            </p>
        </div>

        <div className="aspect-video mb-8">
            <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=1234567890"
            title="Factory Tour Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
            ></iframe>
        </div>
        
        <div className="prose prose-lg text-lg leading-relaxed mb-8">
            <p>
            「最初は産地の方々もびっくりしていましたが、結果的に皆さん、とても喜んでくれました。
            働く人も見学しに来た人もイメージが変わったと言っていて。
            魅力を紐解き、一番伝わる表現を追求したことで『産地とは、動画とは、こういうもの』という固定観念が外れていきました」
            </p>

            <p>
            どんな映像がフィットするか。対話を重ねることができるのは、内に宿る情熱があってこそ。
            その熱が誰かの想いと交差した時、社会に響き、心揺さぶる表現につながっていくのだと感じます。
            </p>

            <p>
            「よく『もう大丈夫だよ』って言われるくらい、丁寧に作りこむタイプです。
            これじゃまだ伝わらないから、もう少し向き合わせてって。納得できるまで突き詰めることを信条としています」
            </p>
          </div>
      </section>

      {/* Section 4 */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold mb-12">ラベルをはがし、やさしい世界をつくりたい</h2>

        <div className="relative aspect-[16/9] mb-12">
            <Image
            src="/images/noriko-ocean6.jpg"
            alt="海辺に座るNOROKO"
            fill 
            className="object-cover rounded-lg"
            priority 
            />
        </div>

        <div className="prose prose-lg text-lg leading-relaxed mb-8">
            <p>
            苦しみ続けた過去があるから、今がある。なんて綺麗事では語れないほど、色々あった人生だけれど。いくつもの殻を破って、自らの足で前に進んできた。そのことはたしかです。
            </p>

            <p>
            「互いに想像力を培い、歩み寄ることができれば、個を尊重し合えるやさしい社会になっていくと信じています。今は、いろんな生き方をする人の姿を届けたい。人の話に耳を傾けると『こういう考えがあるんだ！』って視界がぱっと開ける瞬間、ありますよね。そんな小さな積み重ねで、人も社会も変わっていくと思う」
            </p>

            <p>
            アプローチはさまざまあれど、NORIKOさんが選ぶのは、映像。
            </p>
            「映像という表現は欠かせないと思っています。なぜなら人の心を動かす映像の力を心底信じているから。息づかい、手ぶり、空気感…映像はその人をありのまま伝え、人を動かす力があると信じています。制作は大変ですが、唯一好きになったことだし、映像以外考えられない」
            <p>
            NORIKOさんの信念が波紋のように共鳴していったら、彼女自身も周りにいる大切な人たちもやさしくなっていく。その先には社会も変わっていく。そんな兆しが見えるようです。
            </p>

            <p>
            「知らぬ間につけていたラベルをお互いはがしていけたら、あたらしい世界を一緒に見られる気がする」   
            </p>

            <div className="relative aspect-[16/9] mt-8 mb-12">
            
            <Image
            src="/images/noriko-ocean7.jpg"
            alt="海辺に立つNOROKO"
            fill 
            className="object-cover rounded-lg"
            priority 
            />
            </div>
        <div className="prose prose-lg text-lg leading-relaxed mb-8">
            <p>
            これからもNORIKOさんは、人に向き合いながら、情熱を携え、届けていく。その過程で、私もあなたも脱皮しながら、あたらしくなっていく。その延長線上にある未来を、一緒に見てみたいなと思う。
            </p>

            <p>
            写真と文：七緒
            </p>
        </div>
        </div>
      </section>
      </article>

    </div>
  )
}

