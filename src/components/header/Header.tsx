"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const controls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);

      if (!ticking && scrollDelta > 10) {
        ticking = true;

        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          controls.start({ y: "-100%" });
        } else {
          controls.start({ y: "0%" });
        }

        setLastScrollY(currentScrollY);

        setTimeout(() => {
          ticking = false;
        }, 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, controls]);

  return (
    <motion.header
      animate={controls}
      initial={{ y: "0%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full 2xl:py-2 xlg:py-1 py-2 z-50 bg-white text-slate-950 fixed top-0 left-0 right-0 shadow-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="w-containe h-full xlg:p-3 p-3 mt-[2px] flex gap-4 items-center justify-between m-auto">
          <div className="flex items-center py-1 space-x-2">
            <Image
              src="/Supreme_logo.png"
              alt="Supreme logo"
              width={140}
              height={36}
              priority
            />
          </div>

          <div className="flex items-center space-x-10">
            <Link
              href="/contact-us"
              className="hidden md:block bg-[#5CD6FF] hover:bg-sky-500 text-slate-950 font-medium px-5 py-2 rounded-full transition-all"
            >
              Contact Us
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-block"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={22}
                height={22}
              />
            </Link>

            <div className="flex items-center space-x-1">
              <Image
                src="/lng.png"
                alt="Language icon"
                width={22}
                height={22}
              />
              <span className="text-xs font-medium">ENG</span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
