"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Settore = {
  id: string;
  title: string;
  content: string;
  isActive?: boolean;
};

const SettoriDiCompetenza = () => {
  const [activeSettore, setActiveSettore] = useState("strategy");
  const [showFullText, setShowFullText] = useState(false);

  const settori: Settore[] = [
    {
      id: "strategy",
      title: "Strategy",
      content:
        "Analizziamo la domanda di mercato, la concorrenza e i principali segmenti di mercato. Collochiamo l'azienda all'interno di un contesto e ne definiamo i messaggi chiave, l'identità visiva e verbale portandola a parlare con i proprio clienti nei contesti dove verrà ascoltata.",
    },
    {
      id: "art-direction",
      title: "Art Direction",
      content:
        "Definiamo l'identità visiva del brand attraverso un sistema coerente di elementi grafici, colori, tipografia e immagini che comunicano i valori e la personalità del marchio in modo efficace e memorabile.",
    },
    {
      id: "media-performance",
      title: "Media & performance",
      content:
        "Pianifichiamo e gestiamo campagne pubblicitarie sui diversi canali media, ottimizzando il budget per massimizzare la visibilità e il ritorno sull'investimento, monitorando costantemente le performance.",
    },
    {
      id: "digital-experience",
      title: "Digital experience",
      content:
        "Creiamo esperienze digitali coinvolgenti e intuitive che connettono il brand con il suo pubblico attraverso siti web, app e piattaforme interattive, garantendo usabilità e conversioni.",
    },
  ];

  const handleSettoreChange = (id: string) => {
    setActiveSettore(id);
    setShowFullText(false);
  };

  const titleVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const settoreItemVariants = {
    initial: { opacity: 0.7 },
    animate: { opacity: 1 },
    hover: { x: 5, transition: { duration: 0.2 } },
    active: { scale: 1.02 },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    hover: {
      color: "#4ade80",
      x: 2,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <section className="bg-black text-white pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-sm uppercase text-white mb-16 tracking-wider font-light"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          SETTORI DI COMPETENZA
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          <div className="space-y-6">
            {settori.map((settore) => (
              <motion.div
                key={settore.id}
                className="flex items-center cursor-pointer group"
                onClick={() => handleSettoreChange(settore.id)}
                initial="initial"
                animate={activeSettore === settore.id ? "active" : "animate"}
                whileHover="hover"
                variants={settoreItemVariants}
              >
                <motion.div
                  className={`w-3 h-8 rounded-full mr-4 transition-colors duration-300 ${
                    activeSettore === settore.id
                      ? "bg-green-400"
                      : "bg-gray-700"
                  }`}
                  animate={{
                    backgroundColor:
                      activeSettore === settore.id ? "#4ade80" : "#374151",
                    transition: { duration: 0.3 },
                  }}
                />
                <h3
                  className={`text-4xl transition-colors duration-300 ${
                    activeSettore === settore.id
                      ? "text-white font-semibold"
                      : "font-light group-hover:text-gray-300"
                  }`}
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {settore.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <motion.p
              className="text-green-400 text-sm tracking-wide mb-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={titleVariants}
            >
              Testi Luca
            </motion.p>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSettore}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={contentVariants}
                  className={`relative ${
                    showFullText ? "h-auto" : "h-[120px] overflow-hidden"
                  }`}
                >
                  <p className="text-xl leading-relaxed">
                    {settori.find((s) => s.id === activeSettore)?.content}
                  </p>

                  {!showFullText && (
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="pt-4">
                <motion.button
                  onClick={() => setShowFullText(!showFullText)}
                  className="text-white hover:text-green-400 transition underline underline-offset-2 text-sm focus:outline-none"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  {showFullText ? "Leggi meno" : "Leggi tutto"}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-gray-700 pt-20"></div>
      </div>
    </section>
  );
};

export default SettoriDiCompetenza;
