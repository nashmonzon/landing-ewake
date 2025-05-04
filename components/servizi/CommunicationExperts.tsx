"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CommunicationExperts = () => {
  return (
    <section className="bg-black text-white pb-20 px-4 min-h-[80vh]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg">
              <Image
                src="/Gif-EWAKE.gif"
                alt="Project showcase animation"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.h2
              className="text-4xl md:text-5xl font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              COMMUNICATION EXPERTS
            </motion.h2>

            <motion.p
              className="text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              Crediamo fermamente che le esperienze digitali debbano essere
              delle vere esperienze: ogni interazione digitale deve avere uno
              scopo e una profondità per l&apos;utente. Il nostro team presta
              grande attenzione a tutti i dettagli e a tutti i livelli affinché
              ogni nostro progetto abbia un impatto visivo, ma anche
              significativo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4,
              }}
            >
              <motion.button
                className="bg-gray-800 text-white px-6 py-3 rounded-full text-sm"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#333333",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Scopri i progetti
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationExperts;
