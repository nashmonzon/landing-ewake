"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BrandCircles = () => {
  return (
    <section className="bg-black text-white pb-20 px-4 min-h-[80vh]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-[80%] md:w-[75%] aspect-square mx-auto">
              <Image
                src="/brand_schema.svg"
                alt="Brand circles diagram"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.p
              className="text-xl md:text-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Che si tratti di una strategia digitale, di progettazione e
              sviluppo web, di creazione di app per dispositivi mobili, di una
              soluzione completa di e-commerce o di campagne di marketing
              digitale, abbiamo le competenze e l&apos;esperienza per fornirti i
              risultati che desideri e vuoi vedere realizzati.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCircles;
