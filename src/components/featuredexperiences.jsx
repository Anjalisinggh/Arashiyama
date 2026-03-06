import ExperienceSection from "./map";
export default function FeaturedExperiences() {
  return (
    <div className="relative w-full">

      {/* Background */}
      <img
        src="/featuredexperiences.png"
        alt="background"
        className="w-full h-auto -mt-[80px]"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-start pt-6 md:pt-16 lg:pt-32 px-4 md:px-10 lg:px-20">
        <div className="w-full text-white">

          {/* Heading */}
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] font-bold leading-tight md:leading-snug whitespace-normal md:whitespace-nowrap mt-2 md:mt-10 lg:mt-20">
            京都嵐山で
            <span className="text-[#CB9E38] relative mx-1 md:mx-2 inline-block">
              日本文化と伝統を体験
              <img
                src="/yellowline.png"
                alt=""
                className="absolute left-0 bottom-[-4px] md:bottom-[-6px] w-full"
              />
            </span>
            できる、<br className="md:hidden" />
            <span className="block md:inline mt-1 md:mt-0">
              新しい観光商業施設。
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-3 md:mt-4 lg:mt-6 text-white font-bold text-xs md:text-sm lg:text-base xl:text-[20px] whitespace-normal md:whitespace-nowrap leading-relaxed">
            嵐山スクエアは、京都・嵐山の中心に位置する体験型観光商業施設です。忍者体験、伝統的な着つくり、本格的なカフェ、
            <span className="block md:inline md:ml-1 mt-1 md:mt-0">
              そして記念コインショップなど、日本文化を五感で楽しめる4つのコンテンツをご用意しています。
            </span>
          </p>
          <ExperienceSection />
        </div>
      </div>

    </div>
  );
}