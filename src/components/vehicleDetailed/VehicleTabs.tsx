"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import DescktopViewVehiclesDetail from "../commonUI/DescktopViewVehiclesDetail";
import { commercialData, passengerData } from "@/utils/passengerData";

const tabData = [
  {
    key: "passenger",
    title: "Passenger vehicles",
    description: "Revving up innovation from interior to exterior.",
    videoSrc: "/passenger-video.mp4",
  },
  {
    key: "commercial",
    title: "Commercial vehicles",
    description: "Advancing engineering for heavy-duty vehicles.",
    videoSrc: "/commercial-video.mp4",
  },
];

export default function VehicleTabs() {
  const [activeTab, setActiveTab] = useState("passenger");
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY.current = currentScrollY;

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInViewport) {
          const sectionHeight = rect.height;
          const viewportHeight = window.innerHeight;
          const scrollProgress =
            Math.abs(rect.top) / (sectionHeight - viewportHeight);

          if (scrollDirection === "down") {
            if (scrollProgress > 0.3) {
              setActiveTab("commercial");
            } else {
              setActiveTab("passenger");
            }
          } else {
            if (scrollProgress < 0.7) {
              setActiveTab("passenger");
            } else {
              setActiveTab("commercial");
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection]);

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  console.log(activeTab, "activeTab");

  return (
    <motion.section
      ref={sectionRef}
      className="hidden xl:block bg-black text-white min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center pt-20 pb-4 px-6 max-w-5xl md:mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-3xl text-white md:text-4xl xl:text-5xl font-light mb-2">
          Evolving the drive with
          <span className="font-medium text-white"> 360-degree</span>{" "}
          comprehensive solutions
        </h1>
      </motion.div>

      <div className="w-full mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute left-12 top-0 bottom-0 w-px bg-white/20"></div>

            <div className="pl-24 space-y-16 mx-auto">
              {tabData.map((tab, index) => {
                const isActive = tab.key === activeTab;
                return (
                  <motion.div
                    key={tab.key}
                    className="relative cursor-pointer group"
                    onClick={() => handleTabClick(tab.key)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + index * 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <motion.div
                      className="absolute -left-12 top-0 bottom-0 w-[1px] bg-white origin-top"
                      initial={{ scaleY: 0 }}
                      animate={{
                        scaleY: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    />

                    <div className="max-w-md">
                      <motion.h3
                        className={`text-3xl md:text-4xl font-light mb-4 transition-all duration-500 ${
                          isActive ? "text-white" : "text-white/40"
                        }`}
                        animate={{
                          color: isActive
                            ? "#ffffff"
                            : "rgba(255, 255, 255, 0.4)",
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {tab.title}
                      </motion.h3>

                      <motion.p
                        className={`text-base leading-relaxed transition-all duration-500 ${
                          isActive ? "text-white/90" : "text-white/30"
                        }`}
                        animate={{
                          color: isActive
                            ? "rgba(255, 255, 255, 0.9)"
                            : "rgba(255, 255, 255, 0.3)",
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {tab.description}
                      </motion.p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {activeTab === "commercial" ? (
                <DescktopViewVehiclesDetail
                  autoPlay
                  videos={commercialData}
                  showControls={false}
                />
              ) : (
                <DescktopViewVehiclesDetail
                  autoPlay
                  videos={passengerData}
                  showControls={false}
                />
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="flex flex-col items-center space-y-4">
          {tabData.map((tab, index) => (
            <motion.div
              key={tab.key}
              className={`w-2 h-8 rounded-full transition-all duration-300 ${
                tab.key === activeTab ? "bg-white" : "bg-white/20"
              }`}
              whileHover={{ scale: 1.2 }}
              animate={{
                backgroundColor:
                  tab.key === activeTab
                    ? "#ffffff"
                    : "rgba(255, 255, 255, 0.2)",
                scale: tab.key === activeTab ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </motion.section>
  );
}
