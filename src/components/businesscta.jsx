export default function BusinessCTA() {
    const tags = [
      "和文化体験",
      "観光向け飲食",
      "ワークショップ",
      "ブランドPRイベント",
      "観光向け体験コンテンツ",
    ];
  
    return (
      <section
        className="hidden md:block relative w-full py-20 lg:py-24 xl:py-32 px-6 lg:px-8 text-center text-white bg-cover bg-center min-h-[450px] lg:h-[477px]"
        style={{ backgroundImage: "url('/business.png')" }}
      >
      
        <div className="absolute inset-0 bg-black/20"></div>
  
        <div className="relative max-w-2xl lg:max-w-5xl mx-auto text-left lg:text-center px-4">

          {/* Heading */}
          <div className="mb-10 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl xl:text-[33px] font-bold leading-tight mb-4">
              <span className="text-[#CB9E38] inline">嵐山であなたのお店・企画</span>
              <span className="text-white text-xl lg:text-2xl xl:text-[28px] inline ml-1">を出してみませんか？</span>
            </h2>
  
            <div className="flex lg:justify-center mt-4">
              <img src="/businessline.png" alt="" className="w-32 lg:w-36 xl:w-40" />
            </div>
          </div>
  
          {/* Tags */}
          <div className="flex flex-row flex-wrap justify-center gap-3.5 lg:gap-4 mb-10 lg:mb-12">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="border border-[#CB9E38] text-[#CB9E38] font-black px-6 py-3 text-base lg:text-[15px] text-center w-auto"
              >
                {tag}
              </span>
            ))}
          </div>
  
          {/* Description */}
          <p className="text-white font-bold text-base lg:text-[16px] max-w-2xl lg:max-w-3xl lg:mx-auto mb-10 lg:mb-12 leading-loose">
            世界中の観光客が訪れる京都・嵐山で、ポップアップ出店・イベント開催・
            文化体験の開催ができます。
          </p>
  
          {/* Button */}
          <div className="flex justify-center">
            <button className="bg-[#CB9E38] text-[#161616] px-10 lg:px-12 py-3.5 lg:py-4 rounded-xl lg:rounded-full font-bold text-base lg:text-[16px] hover:opacity-90 transition max-w-[360px] lg:w-auto">
              出店相談はこちら
            </button>
          </div>
  
        </div>
      </section>
    );
  }