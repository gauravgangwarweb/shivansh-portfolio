import Image from "next/image";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] mx-auto container">
      <Hero />
      <About />
    </div>
  );
}
