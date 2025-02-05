import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection2 from "@/components/Hero/HeroSection2";
import NavBar from "@/components/NavBar";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function HomeEnglish() {
  return (
    <main className="scroll-smooth">
      <NavBar />
      <HeroSection2 />
      <Features />
      <Portfolio />
      <Team />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
