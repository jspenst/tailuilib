import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero/HeroSection";
import HeroSection2 from "@/components/Hero/HeroSection2";
import NavBar from "@/components/NavBar";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-main-bg">
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
