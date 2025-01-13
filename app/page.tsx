import VideoBackground from '../components/VideoBackground'


export default function HomePage() {
  return (
    <main className="relative min-h-[calc(100vh-160px)]">
      <div className="absolute inset-0 z-0 opacity-40">
        <VideoBackground />
      </div>
      <div className="relative z-10 h-full">
        <div className="container mx-auto px-4">
          <section className="py-12">
            {/* new feature */}
            <div className="grid grid-cols-1 items-center">
              <div>
                <main>
                  <div>
                                      
                  <div className="flex justify-center">
                    <h2 className="text-2xl md:text-3xl font-normal text-center tracking-normal drop-shadow-sm mt-12 mb-12 leading-loose">
                      <span className="tracking-widest leading-loose">UNLABELING Creative Studio</span>
                      <br />
                      創造力の和でつくる新たな価値
                    </h2>
                  </div>

                  <div className="flex justify-center">
                    <p className="font-base text-lg md:text-xl text-center tracking-normal leading-loose mt-12 mb-12">
                    <span className="tracking-widest leading-loose">UNLABELING</span>は映像を軸とした<span className="tracking-widest leading-loose">Creative Studio</span>です。
                    <br />
                    『心ゆさぶる映像が感動と共感をうむ』をタグラインに
                    <br />
                    人、サービス、モノの想いと魅力を深堀り
                    <br />
                    「見えない価値」を発見し
                    <br />
                    心を動かす映像表現を武器にストーリーを紡ぎ
                    <br />
                    多角的な視点でビジネスをサポートします。
                    </p>
                  </div>
                  </div>
                </main>
              </div>
            </div> 
          </section>
        </div>
      </div>
    </main>
  )
}