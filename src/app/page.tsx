import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <HeroSection />
      <Features />
      <Team />
    </main>
  );
}
