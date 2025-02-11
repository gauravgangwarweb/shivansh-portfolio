import React from "react";

const AboutDes = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center snap-child relative md:pl-10 px-4 md:px-0 overflow-hidden">
          <div className="absolute w-full purple-blue-gradient flex md:hidden justify-center items-center py-4 top-0">
            <p className="inika-bold md:text-5xl text-black">
              ME AS A DESIGNER
            </p>
          </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-0">
        <div className="col-span-1">
          <img
            className="w-80 md:w-[650px] h-80 md:h-[550px]"
            loading="lazy"
            src="/about-des/pic-1.png"
            alt=""
          />
        </div>
        <div className="col-span-2">
          <div className="md:px-16 mt-4 md:mt-10">
            <p className="inika-regular text-xl md:text-5xl text-center md:text-left tracking-wider leading-none">
              I am a skilled and experienced professional currently working as
              co-founder and graphic designer at Codekrafter, an IT consulting
              and services agency.
            </p>
          </div>
          <div className="hidden purple-blue-gradient md:flex justify-center items-center py-4 mt-28">
            <p className="inika-bold text-5xl text-black">ME AS A DESIGNER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDes;
