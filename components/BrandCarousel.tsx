"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

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

  return (
    <section className="bg-black pb-20 overflow-hidden w-full">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-sm uppercase tracking-wider font-light mb-10">
          CREDONO IN NOI
        </h2>
      </div>

      <div className="relative w-full overflow-hidden pb-10">
        <div
          ref={trackRef}
          className="flex space-x-24 min-w-[200%] whitespace-nowrap px-4"
        >
          {[...brands, ...brands].map((logo, i) => (
            <div key={i} className="w-64 h-32 relative flex-shrink-0">
              <Image
                src={logo}
                alt={`Logo ${i}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-gray-700 pt-20"></div>
      </div>
    </section>
  );
}
