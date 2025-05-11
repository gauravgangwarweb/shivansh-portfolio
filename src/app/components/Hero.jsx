"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center relative px-0 lg:px-16
      before:content-[''] before:absolute before:inset-0 before:bg-[url('/hero/hero.png')]
      before:bg-[length:150%] before:bg-no-repeat before:bg-[center_60%]
      lg:before:bg-contain lg:before:bg-center"
    >
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 pl-0 lg:pl-8">
        <div className="">
          <h2 className="text-white text-[34px] md:text-[60px] lg:text-[80px] font-bold lg:mt-16 leading-tight mt-6">
            I am:{">"} <br className="hidden lg:block" /> <span className="text-[#FFCC00] leading-none">Shivansh</span>
          </h2>
          <h2 className="block lg:hidden text-white text-[34px] md:text-[60px] lg:text-[80px] font-bold lg:mt-16 leading-tight">
            A <br className="hidden lg:block" /> <span className="text-[#FFCC00] leading-none">UI/UX designer</span>
          </h2>
          <p className="text-[10px] md:text-[20px] font-medium pr-28 mt-6 block md:hidden lg:block text-white">
            I crafts responsive websites where technologies meet creativity
          </p>
          <button
            className="px-2 md:px-6 py-2 md:py-3 relative mt-8 overflow-hidden bg-[#FFCC00] text-black text-sm md:text-base font-medium rounded-lg 
  group hover:scale-105 transition-all duration-300 hover:shadow-xl active:scale-95"
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
        <div className="hidden lg:block">
          <h2 className="text-white md:text-[60px] lg:text-[80px] font-bold mt-16 ml-28 leading-tight">A <span className="text-[#FFCC00]">UI/UX</span></h2>
          <h2 className="text-[#FFCC00] md:text-[60px] lg:text-[80px] font-bold ml-32 leading-tight">Designer</h2>
        </div>
      </div>
      <div className="w-full flex items-center justify-center absolute md:relative bottom-20 md:bottom-0">
        <img loading="lazy" src="/hero/quote.png" alt="quote" />
      </div>
    </div>
  );
};

export default Hero;
