import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeLanguage, setActiveLanguage] = useState("jp");
  const [navbarHeight, setNavbarHeight] = useState(112);
  const [isMobile, setIsMobile] = useState(false);
  const imageRef = useRef(null);

  const navItems = [
    { label: "施設について" },
    { label: "フロアマップ" },
    { label: "体験コンテンツ" },
    { label: "アクセス" },
    { label: "お問い合わせ" },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleImageLoad = () => {
      if (imageRef.current && window.innerWidth >= 768) {
        setNavbarHeight(imageRef.current.offsetHeight);
      }
    };

    if (imageRef.current?.complete) {
      handleImageLoad();
    } else {
      imageRef.current?.addEventListener("load", handleImageLoad);
    }

    const handleResize = () => {
      if (imageRef.current && window.innerWidth >= 768) {
        setNavbarHeight(imageRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", checkMobile);
      imageRef.current?.removeEventListener("load", handleImageLoad);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className="relative w-full z-50 h-[200px] md:h-auto"
      style={{ height: isMobile ? "200px" : `${navbarHeight}px` }}
    >
      {/* Navbar Background */}
      <img
        ref={imageRef}
        src="/navbar.png"
        alt=""
        className="absolute top-0 left-0 w-full h-[70px] md:h-auto object-cover object-top z-10"
      />

      {/* Navbar Content */}
      <div
        className="absolute top-0 left-0 flex items-center w-full justify-between px-4 md:px-5 z-20 h-[190px] md:h-auto"
        style={{ height: isMobile ? "70px" : `${navbarHeight - 10}px` }}
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Takumi Experience Logo"
          className="h-[55px] md:h-[85%] z-20"
        />

        <div className="flex items-center gap-2 md:gap-[3vw] z-20">
          {/* Nav Items */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-[2.5vw] text-white font-black text-xs md:text-sm lg:text-[1.1vw] tracking-wider">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className="relative group cursor-pointer"
              >
                <span>{item.label}</span>

                {activeIndex === index && (
                  <img
                    src="/line.png"
                    alt=""
                    className="absolute -bottom-5 left-1/2 -translate-x-1/2"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Language Switch */}
          <div className="flex items-center bg-[#1B1B1B] rounded-full w-24 h-9 p-1 md:w-[15vw] md:h-[3.6vw] md:p-[0.15vw]">
            <button
              onClick={() => setActiveLanguage("jp")}
              className={`text-white w-full h-full font-bold transition-colors rounded-full cursor-pointer text-xs md:text-[0.9vw] ${
                activeLanguage === "jp" ? "bg-[#610C0F]" : "bg-transparent"
              }`}
            >
              日本語
            </button>

            <button
              onClick={() => setActiveLanguage("en")}
              className={`text-white w-full h-full font-bold transition-colors rounded-full cursor-pointer text-xs md:text-[1.1vw] ${
                activeLanguage === "en" ? "bg-[#610C0F]" : "bg-transparent"
              }`}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;