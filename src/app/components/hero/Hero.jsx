import Image from "next/image";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <div className="w-full h-screen snap-child overflow-hidden">
      <Navbar />
      <div className="w-full flex h-[80%] justify-center items-center relative">
        <img
          className="absolute w-80 -top-6 right-[34rem]"
          src="/hero/hello-text.png"
          alt="hello-text"
        />
        <div className="grid grid-cols-2 gap-20 mt-10">
          <Image
            className="w-[440px]"
            src={"/hero/image-1.png"}
            width={300}
            height={300}
            alt="hero-img"
          />
          <div className="flex flex-col items-start justify-end py-8 relative">
            <p className="preahvihear-regular text-4xl underline underline-offset-4">
              A Trader who
            </p>
            <p className="preahvihear-regular text-6xl leading-tight mt-4">
              Judges a book <br /> by its
            </p>
            <img
              className="absolute w-[300px] -right-4 bottom-6"
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
