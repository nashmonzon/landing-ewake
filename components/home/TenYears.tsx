"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const TenYears = () => {
  const numberVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const overlayTextVariants = {
    initial: { opacity: 0, x: 30 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.15,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#4ade80",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  const iconButtonVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.7,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 15,
      backgroundColor: "#4ade80",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="bg-black text-white pb-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 relative flex justify-center items-center overflow-hidden">
          <motion.h2
            className="text-[360px] md:text-[530px] text-transparent font-extrabold leading-none"
            style={{
              WebkitTextStroke: "1px #5AEF74",
              fontFamily: "Montserrat, sans-serif",
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={numberVariants}
          >
            10
          </motion.h2>

          <motion.div
            className="absolute text-left right-10 bg-black p-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={overlayTextVariants}
          >
            <motion.h1
              className="text-[42px] md:text-[57px] font-normal leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Raccontiamo
            </motion.h1>
            <motion.em
              className="italic text-[42px] md:text-[57px] font-light leading-tight block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              la marca
            </motion.em>
            <motion.h1
              className="text-[42px] md:text-[57px] font-normal leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              da{" "}
              <motion.span
                className="text-green-400 font-light"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                10 anni
              </motion.span>
            </motion.h1>
          </motion.div>
        </div>

        {/* Columna derecha: texto + botón */}
        <div className="w-full md:w-1/2 space-y-6 text-left max-w-full">
          <motion.p
            className="text-pink-400 text-sm uppercase tracking-wide"
            custom={0}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            Testi Selina
          </motion.p>

          <motion.p
            className="text-[20px] md:text-[27px] leading-relaxed"
            custom={1}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            Da <strong>10 anni</strong>, diamo la sveglia ai progetti di{" "}
            <strong>comunicazione digitale</strong> e li eleviamo all&apos;
            <strong>ennesima potenza</strong> con l&apos;approccio di chi sa e
            vuole fare, di chi ci mette la faccia e anche le mani.
          </motion.p>

          <motion.p
            className="text-[20px] md:text-[27px] leading-relaxed"
            custom={2}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            Questo fa la differenza tra la <strong>Fabbrica</strong> e
            l&apos;Industry.
          </motion.p>

          <div className="flex items-center gap-2 mt-4">
            <motion.button
              className="inline-flex items-center bg-green-400 text-black px-6 py-2 rounded-full text-base font-medium transition"
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true, amount: 0.3 }}
              variants={buttonVariants}
            >
              Contattaci
            </motion.button>

            <motion.div
              className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center transition"
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true, amount: 0.3 }}
              variants={iconButtonVariants}
            >
              <Phone className="text-black w-5 h-5" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-gray-700 pt-20"></div>
      </div>
    </section>
  );
};

export default TenYears;
