import React from "react";
import VehicleTabs from "./VehicleTabs";
import VideoSlider from "../commonUI/MobileViewSlider";
import { commercialData, passengerData } from "@/utils/passengerData";

function ThreeSixtySolution() {
  return (
    <>
      <VehicleTabs />
      <div
        className={`block xl:hidden relative py-8 px-4 bg-black text-white overflow-hidden`}
      >
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-light mb-2">
            Evolving the drive with
            <span className="font-medium"> 360-degree</span> comprehensive
            solutions
          </h1>
        </div>
        <div className="px-4 pt-16 flex flex-col gap-10">
          <VideoSlider
            videos={passengerData}
            autoPlay={true}
            autoPlayInterval={6000}
            showControls={false}
            title="Passenger vehicles"
            heading1="Revving up innovation"
            heading2="from interior to exterior."
          />
          <VideoSlider
            videos={commercialData}
            autoPlay={true}
            autoPlayInterval={6000}
            showControls={false}
            title="Commercial vehicles"
            heading1="Advancing engineering"
            heading2="for heavy-duty vehicles."
          />
        </div>
      </div>
    </>
  );
}

export default ThreeSixtySolution;
