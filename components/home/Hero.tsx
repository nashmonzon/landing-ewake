"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: "easeOut",
      },
    }),
  };

  const videoVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const svgVariants = {
    initial: { opacity: 0, rotate: -2 },
    animate: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <section className="bg-black text-white px-4 py-24 text-left">
        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-pink-400 text-sm tracking-wide mb-4"
            initial="initial"
            whileInView="animate"
            custom={0}
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            Testi Selina
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-5xl font-light leading-tight"
            initial="initial"
            whileInView="animate"
            custom={1}
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            Siamo una{" "}
            <motion.strong
              className="font-semibold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Fabbrica di Creatività Digitale
            </motion.strong>{" "}
            <motion.em
              className="italic font-light"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              indipendente
            </motion.em>{" "}
            nata e cresciuta nell&apos;area industriale di Verona.
          </motion.h1>
        </div>
      </section>

      <section className="relative bg-black flex justify-center items-center py-32 overflow-visible">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={svgVariants}
        >
          <Image
            src="/Livello_color.svg"
            alt="Decoración"
            fill
            className="object-contain opacity-100"
            priority
          />
        </motion.div>

        <motion.div
          className="relative z-10 w-full max-w-5xl aspect-[1962/823] rounded-3xl overflow-hidden shadow-xl"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={videoVariants}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/EWAKE-loadingPortrait.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
