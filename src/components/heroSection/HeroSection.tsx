"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-3/4 md:h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="/video/automotive.224e7418884105595114.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-sm font-medium tracking-wide text-white sm:text-base">
                Driven by performance
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto text-3xl md:text-5xl font-medium leading-tight"
            >
              <span className="">Soft trims and </span>

              <span className="text-[#00BFFF]">NVH solutions</span>
              <span> for seamless rides</span>
            </motion.h1>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      ></motion.div>
    </section>
  );
};

export default HeroSection;
