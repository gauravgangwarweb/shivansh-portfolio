import Navbar from "./ui/Navbar";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";

export default function Home() {
  return (
    <div className="w-full lg:max-w-[1440px] mx-auto px-4">
        <Navbar />
        <Hero />
        <Projects />
    </div>
  );
}
