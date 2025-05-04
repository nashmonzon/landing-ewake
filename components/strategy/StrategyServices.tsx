"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Strategy",
    description:
      "Senza una strategia ben pensata non si può vincere nessuna sfida del mercato.",
    gradient: "linear-gradient(135deg, #FF3B4A, #5AEF74)",
  },
  {
    title: "Art Direction",
    description:
      "Per attrarre clienti ed utenti il tuo brand deve rimanere se stesso, ma nella sua versione più bella.",
    gradient: "linear-gradient(135deg, #8159FF, #FF3B4A)",
  },
  {
    title: "Media & Performance",
    description:
      "C'è un media per tutto, ma noi scegliamo quelli che raggiungono il maggior numero di utenti con il minimo dispendio di risorse.",
    gradient: "linear-gradient(135deg, #8159FF, #5AEF74)",
  },
  {
    title: "Digital Experience",
    description:
      "Scriviamo codici per ogni angolo del digitale: sarà molto difficile non trovare il tuo brand.",
    gradient: "linear-gradient(135deg, #191919, #5AEF74)",
  },
];

const StrategyServices = () => {
  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.span
          className="text-sm uppercase tracking-wider font-light block mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          TUTTI I SERVIZI
        </motion.span>

        <motion.h2
          className="text-6xl md:text-8xl font-light font-[playfair] italic leading-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          I nostri servizi,
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block"
          >
            al servizio del tuo brand.
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-lg mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.4,
          }}
        >
          Più il progetto è complesso e più ci piace perché possiamo fare quello
          che ci riesce meglio: fornire soluzioni per ogni fase del processo.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="w-24 h-24 rounded-full flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{ background: service.gradient }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <motion.span className="text-2xl text-white">↗</motion.span>
                </div>
              </motion.div>

              <div>
                <h3 className="text-2xl font-medium mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategyServices;
