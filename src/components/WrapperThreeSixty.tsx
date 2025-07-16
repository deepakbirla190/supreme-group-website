"use client";

import dynamic from "next/dynamic";

const ThreeSixtySolution = dynamic(
  () => import("@/components/vehicleDetailed/ThreeSixtySolution"),
  { ssr: false }
);

export default function WrapperThreeSixty() {
  return (
    <>
      <ThreeSixtySolution />
    </>
  );
}
