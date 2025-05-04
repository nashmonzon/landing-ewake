"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ProcessoProprietario = () => {
  return (
    <section className="relative bg-black text-white px-4 py-32 min-h-[80vh] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[260px]">
          <Image
            src="/LAB-E.png"
            alt="Decorativo"
            fill
            className="object-contain object-right"
          />
        </div>

        <motion.span
          className="text-sm uppercase tracking-wider font-light block mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          LAB-E
        </motion.span>

        <motion.h2
          className="text-5xl md:text-7xl font-light font-[playfair] italic leading-tight mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Il nostro processo
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block"
          >
            proprietario
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-3xl md:text-4xl font-light max-w-lg leading-snug"
          style={{
            fontFamily: "Montserrat, sans-serif",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.4,
          }}
        >
          Abbiamo capacità e metodologie per ottenere risultati concreti.
        </motion.p>
      </div>
    </section>
  );
};

export default ProcessoProprietario;
