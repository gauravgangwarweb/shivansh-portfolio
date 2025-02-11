import React from "react";

const AboutDes = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center snap-child relative pl-10 overflow-hidden">
      <div className="w-full grid grid-cols-3 ">
        <div className="col-span-1">
          <img
            className="w-[650px] h-[550px]"
            loading="lazy"
            src="/about-des/pic-1.png"
            alt=""
          />
        </div>
        <div className="col-span-2">
          <div className="px-16 mt-10">
            <p className="inika-regular text-5xl">
              I am a skilled and experienced professional currently working as
              co-founder and graphic designer at Codekrafter, an IT consulting
              and services agency.
            </p>
          </div>
          <div className="purple-blue-gradient flex justify-center items-center py-4 mt-28">
            <p className="inika-bold text-5xl text-black">ME AS A DESIGNER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDes;
