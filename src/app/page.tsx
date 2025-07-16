import Header from "@/components/header/Header";
import HeroSection from "@/components/heroSection/HeroSection";
import WrapperThreeSixtyAndContact from "@/components/WrapperThreeSixty";

export default function Home() {
  return (
    <div className="h-full min-h-full">
      <Header />
      <HeroSection />
      <WrapperThreeSixtyAndContact />
    </div>
  );
}
