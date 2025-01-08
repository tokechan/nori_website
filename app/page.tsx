import HeroCircle from '../components/ui/hero-circle'



export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-12">
        {/* new feature */}
        <div className="grid grid-cols-1 gap-12 items-center">
          <div>
            <main className="min-h-screen">
              <div className="space-y-40">
                
                  <div>
                  <h1 className="text-4xl md:text-4xl font-bold font-serif text-center pb-12 mb-12">
                    UNLABELING CREATIVE STUDIO
                  </h1>
                  <HeroCircle />
                  </div>

                  <div className="flex justify-center">
                    <h2 className="text-2xl md:text-3xl font-serif  text-left mb-12">
                      人もモノも見え方、捉え方、価値観は、<br />
                      いくつもあって、もっと自由であっていい<br />
                      そんな想像力の溢れる<br />
                      優しい世界をつくっていけるように<br />
                      無意識に付けられてしまっている<br />
                      ラベルをはがしていくことに注力し<br />
                      固定概念に縛られない<br />
                      新しい表現づくりの追求を<br />
                      していきたいという想いから<br />
                      『UNLABELING』と名付けました。<br />
                    </h2>
                  </div>
                </div>
            </main>
          </div>
        </div> 
      </section>
    </div>
  )
}