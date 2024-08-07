import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Location from "@/components/Location";
import NavBar from "@/components/NavBar";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WhatsappFixedCTA from "@/components/WhatsappFixedCTA";

export default function Home() {
  return (
    <main className="bg-gray-100 scroll-smooth	">
      <NavBar />
      <HeroSection />
      <Features />
      <Team />
      <Testimonials />
      <FAQ />
      <Location />
      <Footer />
      <WhatsappFixedCTA />
    </main>
  );
}
