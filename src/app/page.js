import Collection from "@/components/Collection";
import Extra from "@/components/Extra";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Ratings from "@/components/Ratings";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyUs />
      <Collection />
      <Ratings />
      <Extra />
      <Footer />
    </main>
  );
}
