import { useState } from "react";

export default function ExperienceSection() {
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
        <section className="mt-8.5 ">
            <div className="w-full h-[525px] border border-[#AAAAAA]/50 flex">

                <div className="flex w-[55%] pl-16 pr-8 pt-14 pb-10">
                    <div className="relative h-full">
                        <img
                            src={current.img}
                            className="h-full object-cover"
                            alt={current.title}
                        />
                        <div className="absolute top-2 left-3.5 bg-[#CB9E38] text-white font-bold w-16 h-16 flex items-center justify-center text-[32px]">
                            {current.id}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center flex-1 pl-6 pr-4 bg-[#181818]/41">
                        <p className="text-[#ffffff] text-[21px] font-semibold">
                            {current.subtitle}
                        </p>

                        <h3 className="text-[#ffffff] text-[30px] font-bold">
                            {current.title}
                        </h3>

                        <div className="w-full h-[1px] bg-[#ffffff] my-4.5"></div>

                        <p className="text-white font-[300] text-[14.5px] leading-relaxed">
                            {current.descJp}
                        </p>

                        <p className="text-white font-[300] text-[17px] mt-5">
                            {current.descEn}
                        </p>
                    </div>
                </div>

                <div className="relative w-[45%] justify-center items-center px-16">

                    <img
                        src="/housemap.png"
                        className="h-full w-auto object-contain"
                        alt="Floor Map"
                    />

                    <button 
                        onClick={() => setActive(1)}
                        className={`absolute cursor-pointer top-[29%] left-[41%] text-white font-bold w-9 h-9 flex items-center justify-center text-[20px] ${
                            active === 1 ? 'bg-[#CB9E38]' : 'bg-[#000000]/29'
                        }`}
                    >
                        1
                    </button>

                    <button 
                        onClick={() => setActive(2)}
                        className={`absolute cursor-pointer top-[35%] left-[68.5%] text-white font-bold w-9 h-9 flex items-center justify-center text-[20px] ${
                            active === 2 ? 'bg-[#CB9E38]' : 'bg-[#000000]/29'
                        }`}
                    >
                        2
                    </button>

                    <button 
                        onClick={() => setActive(3)}
                        className={`absolute cursor-pointer top-[79%] left-[30%] text-white font-bold w-9 h-9 flex items-center justify-center text-[20px] ${
                            active === 3 ? 'bg-[#CB9E38]' : 'bg-[#000000]/29'
                        }`}
                    >
                        3
                    </button>

                    <button 
                        onClick={() => setActive(4)}
                        className={`absolute cursor-pointer top-[38%] left-[17%] text-white font-bold w-9 h-9 flex items-center justify-center text-[20px] ${
                            active === 4 ? 'bg-[#CB9E38]' : 'bg-[#000000]/29'
                        }`}
                    >
                        4
                    </button>



                </div>
            </div>
        </section>
    );
}