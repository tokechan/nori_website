


export default function Page() {
    return (    
      <section className="container mx-auto px-4 ">
        <h1 className="text-4xl font-serif leading-tight mb-12 mt-12 text-center">
        BLOG
        </h1>
        {/*note card*/}
        <div 
          className="note-embed"
          data-note-id="neb60e353a9b8"
          data-height="500"  
        ></div>
  
      {/*noteのプロフ全体表示*/}
        <div className="text-center mt-6">
          <a 
            href="https://note.com/unlabeling" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg"
          >
            noteのページを見る
          </a>
        </div>
      </section>  

    )

  }