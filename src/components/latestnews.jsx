export default function LatestNews() {
    const news = [
        {
            date: "2025.08.25",
            category: "お知らせ",
            title: "ホームページを公開しました。",
        },
        {
            date: "2025.08.25",
            category: "お知らせ",
            title: "「システム開発コンサルティングサービス」を開始しました。",
        },
        {
            date: "2025.08.25",
            category: "お知らせ",
            title: "海外輸出支援事業に関する新しい取り組みをスタートしました。",
        },
        {
            date: "2025.08.25",
            category: "お知らせ",
            title: "提携企業ページを更新しました。",
        },
        {
            date: "2025.08.25",
            category: "お知らせ",
            title: "新しいロゴと名刺デザインを導入しました。",
        },
    ];

    return (
        <section className="bg-[#0b0b0b] text-white py-12 md:py-20 lg:py-24 px-4 md:px-6">
            <div className="max-w-5xl mx-auto">


                <div className="text-center mb-8 md:mb-10 lg:mb-12 xl:mb-16">
                    <div className="relative inline-block">

                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold flex flex-wrap items-end gap-1 md:gap-2 justify-center">

                            <span className="text-[#CB9E38]">
                                最新ニュース
                            </span>

                            <span className="text-white text-base md:text-lg lg:text-xl xl:text-2xl">
                                はこちら
                            </span>

                        </h2>

                        {/* underline image */}
                        <img
                            src="/latestline.png"
                            alt=""
                            className="absolute left-1/2 -translate-x-1/2 mt-1 md:mt-2 w-full max-w-[200px] md:max-w-none"
                        />

                    </div>
                </div>
                {/* News List */}
                <div className="space-y-3 md:space-y-4 lg:space-y-6">
                    {news.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:grid md:grid-cols-[150px_120px_1fr] md:items-center gap-2 md:gap-4 lg:gap-8 border-b border-gray-700 pb-3 md:pb-4"
                        >
                            {/* Mobile Layout: Tag + Description row */}
                            <div className="flex items-start gap-3 md:hidden">
                                {/* Golden Tag */}
                                <span className="bg-[#CB9E38] border border-[#CB9E38] text-white px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap flex-shrink-0">
                                    {item.category}
                                </span>
                                
                                {/* Description */}
                                <span className="text-white font-regular text-sm flex-1">
                                    {item.title}
                                </span>
                            </div>

                            {/* Date - Mobile: bottom right */}
                            <span className="text-gray-400 font-regular text-xs self-end md:self-auto md:text-white md:font-black md:text-base md:text-lg lg:text-[24px] md:col-start-1">
                                {item.date}
                            </span>

                            {/* Desktop Layout */}
                            <span className="hidden md:block text-white font-regular text-base md:text-lg lg:text-[24px]">
                                {item.category}
                            </span>

                            <span className="hidden md:block text-white font-regular text-sm md:text-base lg:text-[22px]">
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="flex justify-center mt-6 md:mt-8 lg:mt-12">
                    <button className="bg-[#CB9E38] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg md:rounded-[62px] text-sm md:text-base lg:text-[16px] font-semibold hover:opacity-90 transition w-full max-w-[280px] md:w-auto">
                        ニュースをもっと見る
                    </button>
                </div>

            </div>
            <div className="border-t border-[#454545] mt-12 md:mt-16 lg:mt-20"></div>
        </section>
    );
}