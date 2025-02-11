import React from "react";

const AboutTrader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center snap-child relative md:pr-10 px-4 md:px-0 overflow-hidden">
        <div className="absolute w-full purple-blue-gradient flex md:hidden justify-center items-center py-4 top-0">
            <p className="inika-bold md:text-5xl text-black">
              ME AS A TRADER
            </p>
          </div>
      <div className="grid col-span-1 md:grid-cols-3">
        <div className="col-span-2">
          <div className="purple-blue-gradient hidden md:flex justify-center items-center py-4 md:mt-10">
            <p className="inika-bold text-5xl text-black">ME AS A TRADER</p>
          </div>
          <div className="md:px-16 md:mt-20">
            <p className="inika-regular text-xl md:text-5xl text-center md:text-left tracking-wider leading-none">
              I’m a <span className="text-[#0373F3]">forex trader!</span><br /> Engaged in the exciting world of currency
              trading, analyzing global markets, and seizing opportunities to
              profit from fluctuations in exchange rates.
            </p>
          </div>
        </div>
        <div className="w-full col-span-1">
          <img
            className="w-full md:w-[650px]  md:h-[570px]"
            loading="lazy"
            src="/about-trader/pic-1.png"
            alt="pic"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutTrader;
