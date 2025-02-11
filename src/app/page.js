import Image from "next/image";
import Hero from "./components/hero/Hero";
import AboutDes from "./components/about-des/AboutDes";
import AboutTrader from "./components/about-trader/AboutTrader";

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] mx-auto container">
      <Hero />
      <AboutDes />
      <AboutTrader />
    </div>
  );
}
