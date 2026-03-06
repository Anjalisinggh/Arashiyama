export default function Footer() {
    return (
        <footer className="relative bg-[#1D1D1D] text-[#C3C3C3] ">
            <img
                src="/cloudup.png"
                alt=""
                className="absolute left-0 -top-10 w-[120px] md:w-[180px] lg:w-[260px] opacity-50 md:opacity-100
          z-50"
            />

            <img
                src="/clouddown.png"
                alt=""
                className="absolute right-0 -bottom-1 w-[120px] md:w-[180px] lg:w-[240px] opacity-50 md:opacity-100"
            />

            <div className="relative max-w-6xl mx-auto text-center px-4 md:px-6">

                {/* Logo */}
                <img
                    src="/footerlogo.png"
                    alt="Takumi Experience"
                    className="mx-auto w-[120px] md:w-[150px] lg:w-[180px] mb-6 md:mb-8 lg:mb-10 mt-6 md:mt-8 lg:mt-10"
                />

                {/* Links */}
                <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 xl:gap-10 text-[#C3C3C3] text-sm md:text-xs lg:text-sm xl:text-[14px] mb-6 md:mb-4 lg:mb-6">
                    <a href="#" className="hover:text-white transition">
                        会社概要
                    </a>

                    <a href="#" className="hover:text-white transition">
                        プライバシーポリシー
                    </a>

                    <a href="#" className="hover:text-white transition">
                        利用規約
                    </a>

                    <a href="#" className="hover:text-white transition">
                        著作権および免責事項
                    </a>

                    <a href="#" className="hover:text-white transition">
                        特定商取引法に基づく表示
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center items-center gap-5 mb-6 md:mb-8 lg:mb-10">

                    <img
                        src="/insta.png"
                        alt="instagram"
                        className="w-6 h-6 object-contain"
                    />

                    <i className="ri-twitter-x-line text-2xl text-white"></i>

                    <img
                        src="/titokk.png"
                        alt="tiktok"
                        className="w-6 h-6 object-contain"
                    />

                    <img
                        src="/youtube.png"
                        alt="youtube"
                        className="w-6 h-6 object-contain"
                    />

                </div>

            </div>

            {/* Bottom Bar */}
            <div className="w-full bg-[#161616] text-center text-[#313131] text-xs md:text-[10px] py-3 px-4">
                © 2026 TAKUMI Experience ARASHIYAMA. All rights reserved.
            </div>

        </footer>
    );
}