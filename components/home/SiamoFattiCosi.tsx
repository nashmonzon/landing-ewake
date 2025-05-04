"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const SiamoFattiCosi = () => {
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const paragraphVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * i,
      },
    }),
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: 0.6 },
    },
    hover: {
      scale: 1.02,

      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <section className="bg-black text-white pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 w-[90%]">
            <motion.h2
              className="text-sm uppercase text-white mb-4 tracking-wider font-light"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariants}
            >
              SIAMO FATTI COSÌ
            </motion.h2>

            <motion.p
              className="text-pink-400"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariants}
            >
              Testi Selina
            </motion.p>

            <div className="space-y-4 text-2xl">
              <motion.p
                custom={0}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={paragraphVariants}
              >
                Crediamo che idee chiare, creatività e innovazione siano il
                cuore di ogni{" "}
                <span className="font-bold">strategia di successo</span>.
              </motion.p>
              <motion.p
                custom={1}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={paragraphVariants}
              >
                Che il <span className="font-bold">digital</span> sia il più
                grande
                <span className="font-bold"> acceleratore</span> delle
                connessioni fisiche al centro di ogni{" "}
                <span className="font-bold">relazione</span>.
              </motion.p>
              <motion.p
                custom={2}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={paragraphVariants}
              >
                Che la lettura e la comprensione dei{" "}
                <span className="font-bold">dati</span> rilevanti generi{" "}
                <span className="font-bold">risultati reali e di qualità</span>.
              </motion.p>
              <motion.p
                custom={3}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={paragraphVariants}
              >
                Ma soprattutto crediamo nelle{" "}
                <span className="font-bold">persone</span>, la nostra
                <span className="font-bold"> squadra</span> che ci mette testa,
                cuore e animo in ogni vostro progetto. Come fareste voi.
              </motion.p>
            </div>

            <div className="pt-6">
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
                  Scopri chi siamo
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="relative w-full max-w-md mx-auto aspect-[3/4]"
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <Image
              src="/grand_img.png"
              alt="Team collage"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="border-b border-gray-700 pt-20"></div>
      </div>
    </section>
  );
};
