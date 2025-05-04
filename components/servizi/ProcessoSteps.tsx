"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProcessoSteps = () => {
  const steps = [
    {
      title: "Learning by Listening",
      description:
        "Comprendiamo il contesto e ascoltiamo la voce del tuo brand per poi analizzare e sfidare i dati digitali, di mercato e consumer.",
      icon: "/image6.png",
    },
    {
      title: "Agile Design Thinking",
      description:
        "Costruiamo il nostro pensiero dai data insights, che ci guidano verso la soluzione più efficace.",
      icon: "/image5.png",
    },
    {
      title: "Brand Experience",
      description:
        "Coerenza, congruenza e rilevanza di obiettivi e strategia per costruire una creatività efficace.",
      icon: "/image7.png",
    },
    {
      title: "Empowerment",
      description:
        "Sfidiamo e ottimizziamo costantemente le performance del brand attraverso la lettura e la condivisione di insight rilevanti.",
      icon: "/image8.png",
    },
  ];

  return (
    <section className="bg-black text-white py-24  min-h-[90vh] px-4">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex  gap-6 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            <div className="relative w-28 h-28 flex-shrink-0">
              <Image
                src={step.icon}
                alt={step.title}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-3">{step.title}</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProcessoSteps;
