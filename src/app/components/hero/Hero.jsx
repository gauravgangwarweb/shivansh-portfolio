import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center snap-child">
      <div className="grid grid-cols-2 gap-20 mt-8">
        <Image
          className="w-[440px]"
          src={"/hero/image-1.png"}
          width={300}
          height={300}
          alt="hero-img"
        />
        <div className="flex flex-col items-start justify-end py-8 relative">
            <p className="preahvihear-regular text-4xl underline underline-offset-4">A Trader who</p>
            <p className="preahvihear-regular text-6xl leading-tight mt-4">Judges a book <br /> by its</p>
            <img className="absolute w-[300px] -right-4 bottom-6" src="/hero/cover-text.png" alt="cover-text" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
