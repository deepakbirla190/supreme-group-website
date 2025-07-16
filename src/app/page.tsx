import { lazy, Suspense } from "react";
import Header from "@/components/header/Header";

const HeroSection = lazy(() => import("@/components/heroSection/HeroSection"));
const ThreeSixtySolution = lazy(
  () => import("@/components/vehicleDetailed/ThreeSixtySolution")
);
const ContactUs = lazy(() => import("@/components/contactUs/ContactUs"));
const Footer = lazy(() => import("@/components/footer/Footer"));

export default function Home() {
  return (
    <div className="h-full min-h-full">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <ThreeSixtySolution />
        <ContactUs />
        <Footer />
      </Suspense>
    </div>
  );
}
