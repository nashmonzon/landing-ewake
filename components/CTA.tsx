"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CTAProps {
  children: ReactNode;
  buttonText?: string;
  backgroundColor?: string;
  backgroundImage?: string;
}

const CTA = ({
  children,
  buttonText = "Contattaci",
  backgroundColor = "#5AEF74",
  backgroundImage = "/Livello_1.svg",
}: CTAProps) => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#000000",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  const imageVariants = {
    initial: { opacity: 0, rotate: -5 },
    animate: {
      opacity: 0.3,
      rotate: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      className="relative min-h-screen text-black flex items-center"
      style={{ backgroundColor }}
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageVariants}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        <Image
          src={backgroundImage}
          alt="Decoración"
          fill
          priority
          className="object-contain"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto w-full px-4 relative">
        <motion.div
          className="relative z-10 flex justify-start"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="text-left">
            <motion.div
              className="text-4xl sm:text-6xl font-light whitespace-pre-line"
              variants={textVariants}
            >
              {children}
            </motion.div>
            <motion.button
              className="mt-8 bg-black text-white px-6 py-3 rounded-full text-lg transition"
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              {buttonText}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
