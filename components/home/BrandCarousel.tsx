"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  "/brand_1.png",
  "/brand_2.png",
  "/brand_3.png",
  "/brand_4.png",
  "/brand_5.png",
];

export default function BrandCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;

    gsap.to(trackRef.current, {
      x: "-50%",
      ease: "none",
      duration: 12,
      repeat: -1,
    });
  }, []);

  const titleVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      filter: "brightness(1.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="bg-black pb-20 overflow-hidden w-full">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-white text-sm uppercase tracking-wider font-light mb-10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          CREDONO IN NOI
        </motion.h2>
      </div>

      <div className="relative w-full overflow-hidden pb-10">
        <div
          ref={trackRef}
          className="flex space-x-24 min-w-[200%] whitespace-nowrap px-4"
        >
          {[...brands, ...brands].map((logo, i) => (
            <motion.div
              key={i}
              className="w-64 h-32 relative flex-shrink-0"
              whileHover="hover"
              variants={logoVariants}
            >
              <Image
                src={logo || "/placeholder.svg"}
                alt={`Logo ${i}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-gray-700 pt-20"></div>
      </div>
    </section>
  );
}
