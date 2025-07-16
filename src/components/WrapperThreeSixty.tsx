"use client";

import dynamic from "next/dynamic";

const ThreeSixtySolution = dynamic(
  () => import("@/components/vehicleDetailed/ThreeSixtySolution"),
  { ssr: false }
);

const ContactUs = dynamic(() => import("@/components/contactUs/ContactUs"), {
  ssr: false,
});

export default function WrapperThreeSixty() {
  return (
    <>
      <ThreeSixtySolution />
      <ContactUs />
    </>
  );
}
