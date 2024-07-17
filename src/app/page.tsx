import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <NavBar />
      <HeroSection />
      <Features />
      <Team />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
