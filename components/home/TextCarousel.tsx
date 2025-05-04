"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const words = ["SVEGLIA ,", "PENSA ,", "CREA."];

export default function TextCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;

    gsap.to(trackRef.current, {
      x: "-50%",
      ease: "none",
      duration: 10,
      repeat: -1,
    });
  }, []);

  return (
    <section className="bg-black pt-20 overflow-hidden w-full">
      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex space-x-32 min-w-[200%] whitespace-nowrap px-4"
        >
          {[...words, ...words].map((word, i) => (
            <motion.div
              key={i}
              className="text-white text-[80px] sm:text-[120px] md:text-[160px] font-thin uppercase tracking-wider"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              whileHover={{ scale: 1.05, color: "#ff5db1" }}
              transition={{ duration: 0.3 }}
            >
              {word}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-gray-700 pt-10"></div>
      </div>
    </section>
  );
}
