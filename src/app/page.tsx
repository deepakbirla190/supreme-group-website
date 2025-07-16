import ContactUs from "@/components/contactUs/ContactUs";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/heroSection/HeroSection";
import WrapperThreeSixty from "@/components/WrapperThreeSixty";

export default function Home() {
  return (
    <div className="h-full min-h-full">
      <Header />
      <HeroSection />
      <WrapperThreeSixty />
      <ContactUs />
      <Footer />
    </div>
  );
}
