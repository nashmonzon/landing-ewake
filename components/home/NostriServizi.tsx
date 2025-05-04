"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ArcDiagramVertical from "./arc";

const NostriServizi = () => {
  const titleVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const headingVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, duration: 0.5 },
    },
    hover: {
      scale: 1.02,

      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  const arcVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
  };

  return (
    <section className="bg-black text-white pb-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row min-h-[600px] gap-12">
        <div className="w-full md:w-1/2 flex flex-col">
          <motion.h2
            className="text-sm uppercase tracking-wider font-light mb-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={titleVariants}
          >
            I NOSTRI SERVIZI
          </motion.h2>

          <div className="flex flex-1 flex-col justify-center">
            <motion.h3
              className="text-3xl md:text-5xl font-extralight leading-snug mb-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={headingVariants}
            >
              Diamo{" "}
              <motion.span
                className="font-[playfair] italic"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                nuova carica
              </motion.span>
              <br />a progetti di
              <br />
              <motion.span
                className="text-green-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                comunicazione
                <br />
                digitale
              </motion.span>
              .
            </motion.h3>

            <motion.div
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true, amount: 0.3 }}
              variants={buttonVariants}
            >
              <Link
                href="#"
                className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-full text-sm transition-colors"
              >
                Scopri i servizi
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="z-10">
            <motion.h3
              className="text-sm uppercase mb-6 tracking-wider font-light"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={titleVariants}
            >
              CI OCCUPIAMO DI
            </motion.h3>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={arcVariants}
            >
              <ArcDiagramVertical />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NostriServizi;
