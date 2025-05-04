"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ServiziHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pb-20">
      <div className="absolute right-0 top-0 h-full w-[60%] z-0">
        <Image
          src="/mask_group.png"
          alt="Background"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.h1
          className="text-white text-6xl md:text-8xl font-light font-[playfair] italic leading-tight text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          I nostri servizi
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block"
          >
            al servizio del tuo brand.
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
};

export default ServiziHero;
