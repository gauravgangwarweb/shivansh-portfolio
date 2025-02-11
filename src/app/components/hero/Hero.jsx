import Image from "next/image";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <div className="w-full h-screen snap-child overflow-hidden">
      <Navbar />
      <div className="w-full flex h-[80%] justify-center items-center relative">
        <img
          className="hidden md:block absolute w-80 -top-6 right-[34rem]"
          src="/hero/hello-text.png"
          alt="hello-text"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 md:mt-10">
          <Image
            className="w-72 md:w-[440px]"
            src={"/hero/image-1.png"}
            width={300}
            height={300}
            alt="hero-img"
          />
          <div className="md:flex flex-col items-start justify-end md:py-8 relative">
            <p className="preahvihear-regular text-2xl md:text-4xl underline underline-offset-4">
              A Trader who
            </p>
            <p className="preahvihear-regular text-3xl md:Ltext-6xl leading-tight mt-4">
              Judges a book <br /> by its
            </p>
            <img
              className="absolute w-36 md:w-[300px] right-14 md:-right-4 -bottom-1 md:bottom-6"
              src="/hero/cover-text.png"
              alt="cover-text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
