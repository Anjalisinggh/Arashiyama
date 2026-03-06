export default function AccessSection() {

    const hours = [
      { day: "土曜日", time: "9時30分〜18時00分" },
      { day: "日曜日", time: "9時30分〜18時00分" },
      { day: "月曜日", time: "9時30分〜18時00分" },
      { day: "火曜日", time: "9時30分〜18時00分" },
      { day: "水曜日", time: "9時30分〜18時00分" },
      { day: "木曜日", time: "9時30分〜18時00分" },
      { day: "金曜日", time: "9時30分〜18時00分" },
    ];
  
    return (
      <section className="bg-[#0b0b0b] text-white py-12 px-4 md:px-8 lg:py-14  lg:px-16">
  
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-start">
  
          {/* LEFT */}
          <div>
  
            {/* Logo + circle */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-6 gap-4 lg:gap-0">
  
              <div>
                <img
                  src="/accesslogo.png"
                  className="w-full max-w-[280px] md:max-w-[320px] lg:w-[380px]"
                />
  
                <p className="text-sm md:text-base lg:text-[18px] tracking-[2px] md:tracking-[3px] lg:tracking-[4px] mt-2 md:mt-3 lg:mt-4 ml-0 md:ml-4 lg:ml-6">
                  TAKUMI Experience ARASHIYAMA
                </p>
              </div>
  
              <img
                src="/accesscircle.png"
                className="w-[120px] md:w-[150px] lg:w-[170px] self-center lg:self-start"
              />
  
            </div>
  
  
            {/* Divider */}
            <div className="border-t border-[#454545] my-6 md:my-7 lg:my-8"></div>
  
  
            {/* Address */}
            <div className="flex flex-col lg:flex-row gap-3 md:gap-8 lg:gap-14 mb-6 md:mb-8 lg:mb-10">
  
              <span className="text-base md:text-lg lg:text-[20px] font-semibold text-white whitespace-nowrap w-full lg:w-[120px]">
                営業時間
              </span>
  
              <p className="text-sm md:text-base lg:text-[20px] font-medium text-white break-words lg:whitespace-nowrap">
                〒616-8384 京都府京都市右京区嵯峨天龍寺造路町20
              </p>
  
            </div>
  
  
            {/* Opening hours */}
            <div className="flex flex-col lg:flex-row gap-3 md:gap-4 lg:gap-14">

              <span className="text-base md:text-lg lg:text-[20px] font-semibold text-white whitespace-nowrap w-full lg:w-[120px]">
                営業時間
              </span>

              <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-5 lg:gap-6 items-start">

                <div className="space-y-1 w-full md:w-auto lg:w-auto">

                  {hours.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">

                      <div className="relative w-[70px] md:w-[75px] lg:w-[80px]">

                        <span className="text-sm md:text-base lg:text-[20px] font-regular">
                          {item.day}
                        </span>

                        <img
                          src="/yellow.png"
                          className="absolute left-0 bottom-[-5px] w-[45px] md:w-[50px] lg:w-[55px]"
                        />

                      </div>

                      <span className="text-sm md:text-base lg:text-[20px] font-regular whitespace-nowrap">
                        {item.time}
                      </span>

                    </div>
                  ))}

                </div>

                
                <img
                  src="/accessbutton.png"
                  className="w-full max-w-[200px] md:max-w-[220px] lg:w-[230px] self-center md:self-end lg:self-end mt-4 md:mt-0 lg:mt-0"
                />

              </div>

            </div>
  
          </div>
  
  
          {/* RIGHT MAP */}
          <div className=" justify-center lg:justify-center mt-8 lg:mt-0">
  
            <div className="bg-[#1a1a1a] p-4 md:p-5 lg:p-6 w-full max-w-full lg:w-auto">
  
              <img
                src="/map.png"
                className="w-full  h-auto lg:h-[460px] object-cover mx-auto lg:mx-0"
              />
  
            </div>
  
          </div>
  
        </div>
  
  
        {/* Bottom divider */}
        <div className="border-t border-[#3a3a3a] mt-12 md:mt-16 lg:mt-20 "></div>
  
      </section>
    );
  }