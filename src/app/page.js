import Navbar from "./ui/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import ContactUs from "./components/ContactUs";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <div className="w-full lg:max-w-[1440px] mx-auto px-4">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <AboutMe />
        <ContactUs />
        <Footer />
    </div>
  );
}
