import React, { useState, useRef, useEffect } from 'react';

export default function ExperiencesMobile() {
  const scrollContainerRef = useRef(null);
  const [activeSegment, setActiveSegment] = useState(0);

  const data = [
      {
        img: "/exp1.png",
        title: "忍者体験",
        subtitle: "Ninja Experience",
        descJp:
          "忍者になりきって本格体験。忍者衣装に着替え、手裏剣やクナイ投げに挑戦できます。子どもから大人まで楽しめる、京都ならではの体験型アトラクションです。写真 撮影にもおすすめ。 ",
        descEn:
          "Become a ninja and enjoy an authentic experience.  Dress up in ninja costume and try throwing shuriken  and kunai.A fun, hands-on attraction for all ages,  perfect for memorable photos in Kyoto"
      },
      {
        img: "/exp2.png",
        title: "箸づくり体験",
        subtitle: "Chopstick Making Experience",
        descJp:
          "木を削り、自分だけの一膳をつくる箸づくり体験。日本の伝統文化に触れながら、ものづくりの楽しさを体感できます。旅の思い出やお土産にもおすすめです。 ",
        descEn:
          "Create your own pair of chopsticks by carving wood yourself.Experience the joy of craftsmanship while learning about traditional Japanese culture.A perfect souvenir and travel memory."
      },
      {
        img: "/exp3.png",
        title: "カフェ",
        subtitle: "Café",
        descJp:
          "和の雰囲気に包まれた、ゆったりくつろげるカフェ。バルコニー席を含む約40席をご用意し、観光の合間の休憩にも最適です。荷物預り所も併設し、和テイストの商品と心地よい時間をお楽しみいただけます。",
        descEn:
          "A relaxing café with a Japanese-inspired  atmosphere. About 40 seats including balcony seating, ideal for a break during sightseeing.  Luggage storage is available, allowing you to enjoy Japanese-style items in comfort."
      },
      {
        img: "/exp4.png",
        title: "記念コイン販売",
        subtitle: "Souvenir Coin Shop",
        descJp:
          "京都観光の思い出に、世界に一つだけの記念コインを。オリジナルデザインのコインやネックレスに、お名前や日付の刻印が可能です。京都ならではの特別なデザインもご用意しています。",
        descEn:
          "Create a one-of-a-kind souvenir to remember your visit to Kyoto. Original coins and necklaces can be engraved with names or dates, including  special designs inspired by Kyoto."
      }
    ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      if (scrollWidth <= 0) return;
      const segmentWidth = scrollWidth / (data.length - 1);
      const currentSegment = Math.round(scrollLeft / segmentWidth);
      setActiveSegment(Math.min(currentSegment, data.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [data.length]);
  
  return (
    <section className="relative py-8 bg-[#0b0b0b] overflow-hidden md:hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/scrollbackground.png')` }}
      />

      <div className="relative max-w-full mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-white text-lg font-bold inline-block relative px-4">
            それぞれ
            <span className="text-[#CB9E38] mx-1">異なる魅力を持つ文化を体験</span>
            せよ
            <img
              src="/expline.png"
              alt=""
              className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[200px]"
            />
          </h2>
        </div>

        {/* Scrollable Cards */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto experience-scroll no-scrollbar"
        >
          <div className="flex gap-4 min-w-max pb-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-row bg-[#363636] opacity-80 w-[320px] h-[200px] shrink-0"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[140px] h-full object-cover shrink-0"
                />
                
                {/* Content */}
                <div className="flex flex-col justify-center p-3 flex-1 overflow-hidden">
                  <p className="text-[#FFB100] text-xs font-semibold mb-1">
                    {item.subtitle}
                  </p>

                  <h3 className="text-[#FFB100] text-sm font-bold mb-1">
                    {item.title}
                  </h3>

                  <div className="w-24 h-px bg-[#CB9E38] mb-1"></div>

                  <p className="text-[#FFB100] text-[10px] leading-tight mb-1 line-clamp-2">
                    {item.descJp}
                  </p>

                  <p className="text-[#FFB100] text-[10px] leading-tight line-clamp-2">
                    {item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="segmented-progress">
          {data.map((_, index) => (
            <div
              key={index}
              className={`segment ${index === activeSegment ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

