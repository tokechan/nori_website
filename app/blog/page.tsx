import Image from "next/image"
import Script from "next/script"


export default function Page() {
    return (
      //Scriptで公式のJS読み込む方法
      <>
      <Script
      src="https://note.com/scripts/embed.js"
      strategy="afterInteractive"
      />
      <section className="container mx-auto px-4 py-6">
        <h1 className="text-xl font-serif leading-tight mb-6 text-center">
        BLOG
        </h1>
        {/*note card*/}
        <div className="note-embed" data-note-id="neb60e353a9b8"></div>
      </section>
      </>

      //noteのプロフ全体を表示させる場合
      // <section className="container mx-auto px-4 py-6">
      //   <div className="text-center">
      //     <a 
      //       href="https://note.com/unlabeling" 
      //       target="_blank"
      //       rel="noopener noreferrer"
      //       className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg"
      //     >
      //       noteのページを見る
      //     </a>
      //   </div>
      // </section>  

    )

  }