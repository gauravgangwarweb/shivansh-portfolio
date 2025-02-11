import React from "react";

const AboutTrader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center snap-child relative pr-10 overflow-hidden">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="purple-blue-gradient flex justify-center items-center py-4 mt-10">
            <p className="inika-bold text-5xl text-black">ME AS A TRADER</p>
          </div>
          <div className="px-16 mt-20">
            <p className="inika-regular text-5xl tracking-wider leading-none">
              I’m a <span className="text-[#0373F3]">forex trader!</span><br /> Engaged in the exciting world of currency
              trading, analyzing global markets, and seizing opportunities to
              profit from fluctuations in exchange rates.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <img
            className="w-[650px] h-[570px]"
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
