"use client"
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <div className="w-full lg:max-w-[1025px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-2">
        <div className="w-full lg:w-[469px] pt-10">
          <h2 className="text-3xl font-semibold">
            I am <span className="text-primary">Shivansh</span> and i am a{" "}
            <span className="text-primary">{"Ui/Ux designer:>"}</span>
          </h2>
          <p className="text-base mt-4">
            I crafts responsive websites where technologies meet creativity
          </p>
          <button className="border-2 border-primary px-4 py-1 mt-4">
            Contact me!!
          </button>
        </div>
        <div>
          <Image width={469} height={423} src={"/hero/hero.svg"} alt="Hero " />
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-20">
        <img loading="lazy" src="/hero/quote.png" alt="quote" />
      </div>
      <img
        className="absolute bottom-0 right-0"
        loading="lazy"
        src="/hero/side-rectangle.png"
        alt="side-rectangle"
      />
    </div>
  );
};

export default Hero;
