"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const StrategyHero = () => {
  return (
    <section className="bg-black text-white py-24 px-4 min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.span
          className="text-sm uppercase tracking-wider font-light block mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          LOREM IPSUM
        </motion.span>

        <motion.h1
          className="text-5xl md:text-7xl font-light italic leading-tight mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          Prima di tutto
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Prima di tutto bisogna studiare per non farsi trovare impreparati
              dal mercato.
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8"
            >
              <Link
                href="#progetti"
                className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-full text-sm transition-colors hover:bg-gray-700"
              >
                Scopri i nostri progetti
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.p
              className="text-pink-400 text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Testi excel
            </motion.p>
            <motion.p
              className="text-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Analizziamo la domanda, la concorrenza e i principali segmenti di
              mercato. Collochiamo l&apos;azienda all&apos;interno di un
              contesto e ne definiamo i messaggi chiave, l&apos;identità visiva
              e verbale per farla parlare con le community nei contesti dove
              verrà ascoltata.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrategyHero;
