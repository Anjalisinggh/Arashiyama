import { useState } from "react";

export default function FeaturedExperiencesMobile() {
    const [active, setActive] = useState(1);

    const data = [
        {
            id: 1,
            img: "/exp1.png",
            subtitle: "Ninja Experience",
            title: "忍者体験",
            descJp:
                "忍者になりきって本格体験。忍者衣装に着替え、手裏剣やクナイ投げに挑戦できます。子どもから大人まで楽しめる、京都ならではの体験型アトラクションです。写真 撮影にもおすすめ。",
            descEn:
                "Become a ninja and enjoy an authentic experience.  Dress up in ninja costume and try throwing shuriken  and kunai.A fun, hands-on attraction for all ages,  perfect for memorable photos in Kyoto."
        },
        {
            id: 2,
            img: "/exp2.png",
            subtitle: "Chopstick Making Experience",
            title: "箸づくり体験",
            descJp: "木を削り、自分だけの一膳をつくる箸づくり体験。日本の伝統文化に触れながら、ものづくりの楽しさを体感できます。旅の思い出やお土産にもおすすめです。",
            descEn: "Create your own pair of chopsticks by carving wood yourself.Experience the joy of craftsmanship while learning about traditional Japanese culture.A perfect souvenir and travel memory."
        },
        {
            id: 3,
            img: "/exp3.png",
            subtitle: "Café",
            title: "カフェ",
            descJp: "和の雰囲気に包まれた、ゆったりくつろげるカフェ。バルコニー席を含む約40席をご用意し、観光の合間の休憩にも最適です。荷物預り所も併設し、和テイストの商品と心地よい時間をお楽しみいただけます。 ",
            descEn: "A relaxing café with a Japanese-inspired  atmosphere. About 40 seats including balcony seating, ideal for a break during sightseeing.  Luggage storage is available, allowing you to enjoy Japanese-style items in comfort."
        },
        {
            id: 4,
            img: "/exp4.png",
            subtitle: "Souvenir Coin Shop",
            title: "記念コイン販売",
            descJp: "京都観光の思い出に、世界に一つだけの記念コインを。オリジナルデザインのコインやネックレスに、お名前や日付の刻印が可能です。京都ならではの特別なデザインもご用意しています。",
            descEn: "Create a one-of-a-kind souvenir to remember your visit to Kyoto.Original coins and necklaces can be engraved with names or dates, including  special designs inspired by Kyoto."
        }
    ];

    const current = data.find((item) => item.id === active);

    return (
        <div className="relative w-full md:hidden  -mt-40 min-h-[1200px] ">

            <div className="absolute inset-0 w-full h-full">
                <img
                    src="/sefeature.png"
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>



            <div className="relative w-full flex flex-col    items-start pt-6 px-4 pb-8 z-10">
                <div className="w-full text-white  ">


                    <h1 className="text-lg font-black leading-tight whitespace-normal mt-50">
                        <span className="block text-white">
                            京都嵐山で
                        </span>
                        <span className="block mt-3">
                            <span className="text-[#CB9E38] relative inline-block">
                                日本文化と伝統を体験
                                <img
                                    src="/yellowline.png"
                                    alt=""
                                    className="absolute left-0 bottom-[-4px] w-[170px]"
                                />
                            </span>
                            <span className="text-white inline ml-1">
                                できる
                            </span>
                        </span>
                        <span className="block text-white mt-3">
                            新しい観光商業施設。
                        </span>
                    </h1>


                    <p className="mt-8 text-white font-bold font-700 text-xs whitespace-normal leading-relaxed">
                        嵐山スクエアは、京都・嵐山の中心に位置する体験型観光商業施設です。
                        <span className="block mt-6">
                            忍者体験、伝統的な着つくり、本格的なカフェ、そして記念コインショップなど、日本文化を五感で楽しめる4つのコンテンツをご用意しています。
                        </span>
                    </p>


                    <div className="mt-6 w-full">
                        <div className="relative w-full  p-4 ">
                            <img
                                src="/housemap.png"
                                className="w-full h-auto object-contain"
                                alt="Floor Map"
                            />

                            {/* Map Buttons */}
                            <button
                                onClick={() => setActive(1)}
                                className={`absolute cursor-pointer top-[29%] left-[41%] text-white font-bold w-8 h-8 flex items-center justify-center text-base ${active === 1 ? 'bg-[#CB9E38]' : 'bg-[#000000]/50'
                                    }`}
                            >
                                1
                            </button>

                            <button
                                onClick={() => setActive(2)}
                                className={`absolute cursor-pointer top-[35%] left-[68.5%] text-white font-bold w-8 h-8 flex items-center justify-center text-base  ${active === 2 ? 'bg-[#CB9E38]' : 'bg-[#000000]/50'
                                    }`}
                            >
                                2
                            </button>

                            <button
                                onClick={() => setActive(3)}
                                className={`absolute cursor-pointer top-[79%] left-[30%] text-white font-bold w-8 h-8 flex items-center justify-center text-base  ${active === 3 ? 'bg-[#CB9E38]' : 'bg-[#000000]/50'
                                    }`}
                            >
                                3
                            </button>

                            <button
                                onClick={() => setActive(4)}
                                className={`absolute cursor-pointer top-[38%] left-[17%] text-white font-bold w-8 h-8 flex items-center justify-center text-base  ${active === 4 ? 'bg-[#CB9E38]' : 'bg-[#000000]/50'
                                    }`}
                            >
                                4
                            </button>
                        </div>
                    </div>


                    <div className="mt-6 w-full">
                        <div className="flex bg-[#2F2F2F]/40   overflow-hidden">
                            {/* Image Section */}
                            <div className="relative w-[42%] shrink-0">
                                <img
                                    src={current.img}
                                    className="w-full h-full min-h-[220px] object-cover"
                                    alt={current.title}
                                />
                                <div className="absolute top-2 left-2 bg-[#CB9E38] text-white font-bold w-11 h-11 flex items-center justify-center text-[20px]">
                                    {current.id}
                                </div>
                            </div>


                            <div className="p-4 flex flex-1 flex-col justify-center">
                                <p className="text-[#ffffff] text-[12px] font-semibold">
                                    {current.subtitle}
                                </p>

                                <h3 className="text-[#ffffff] text-[16px] font-bold mt-1">
                                    {current.title}
                                </h3>

                                <div className="w-full h-px bg-[#393939] my-3"></div>

                                <p className="text-white font-light text-[10px] leading-relaxed">
                                    {current.descJp}
                                </p>

                                <p className="text-white font-light text-[10px] mt-5 leading-relaxed">
                                    {current.descEn}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

