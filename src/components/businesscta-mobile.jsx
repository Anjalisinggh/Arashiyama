export default function BusinessCTAMobile() {
    const tags = [
        "和文化体験",
        "観光向け飲食",
        "ワークショップ",
        "ブランドPRイベント",
        "観光向け体験コンテンツ",
    ];

    return (
        <section
            className="relative w-full py-12 px-4 text-white bg-cover bg-center md:hidden"
            style={{ backgroundImage: "url('/business.png')" }}
        >
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative max-w-full mx-auto text-left px-2 z-10">
                {/* Heading */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold leading-tight mb-3 text-white">
                        嵐山であなたのお店・企画を出してみませんか？
                    </h2>

                    <div className="mt-3">
                        <img src="/businessline.png" alt="" className="w-28" />
                    </div>
                </div>

               
                <div className="flex flex-col gap-3 mb-8">
                    {tags.map((tag, index) => (
                        <button
                            key={index}
                            className="border border-[#CB9E38] text-[#CB9E38] font-black px-5 py-3 text-sm text-center w-full bg-transparent hover:bg-[#CB9E38]/10 transition-colors rounded-none"
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Description */}
                <p className="text-white font-bold text-sm mb-8 leading-relaxed">
                    世界中の観光客が訪れる京都・嵐山で、ポップアップ出店・イベント開催・文化体験の開催ができます。
                </p>

                {/* Button */}
                <div className="flex justify-center">
                    <button className="bg-[#CB9E38] text-[#161616] px-8 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition w-full max-w-[320px]">
                        出店相談はこちら
                    </button>
                </div>
            </div>
        </section>
    );
}

