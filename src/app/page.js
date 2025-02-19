import Navbar from "./ui/Navbar";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import AboutMe from "./components/about/AboutMe";
import ContactUs from "./components/contact/ContactUs";
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
