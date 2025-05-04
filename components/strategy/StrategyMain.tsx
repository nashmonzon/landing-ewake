"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const StrategyMain = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pb-20">
      <div className="absolute right-0 top-0 h-full w-[60%] z-0">
        <Image
          src="/mask_group.png"
          alt="Background"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="relative z-10 w-full">
        <motion.h1
          className="text-white text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none font-light font-[playfair] italic text-left pl-10 sm:pl-16 lg:pl-32 xl:pl-40"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          Strategy
        </motion.h1>
      </div>
    </section>
  );
};

export default StrategyMain;
