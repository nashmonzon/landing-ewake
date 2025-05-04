"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const StrategyCollage = () => {
  return (
    <section className="bg-black text-white pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          <motion.div
            className="relative md:w-[140%]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/group3.png"
                alt="Strategy collage"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          <div className="space-y-6 z-1">
            <motion.h2
              className="text-4xl md:text-5xl font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              CALCOLIAMO OGNI MOSSA
            </motion.h2>

            <motion.p
              className="text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              Dopo aver definito i contesti, i messaggi, gli obiettivi, rendiamo
              misurabile le nostre attività. Calcolando ogni mossa si evitano
              brutte sorprese.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyCollage;
