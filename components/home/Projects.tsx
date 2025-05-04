"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  const items = [
    {
      title: "Boschetti",
      subtitle: "BRAND IMAGE / LABEL DESIGN / WEBSITE",
      image: "/boschetti.png",
    },
    {
      title: "Askoll",
      subtitle: "BRAND IMAGE / LABEL DESIGN / WEBSITE",
      image: "/askoll.png",
    },
    {
      title: "Infermentum",
      subtitle: "BRAND IMAGE / LABEL DESIGN / WEBSITE",
      image: "/infermentum.png",
    },
  ];

  const titleVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.15,
      },
    }),
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.5 },
    },
  };

  const linkVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: 0.6 },
    },
    hover: {
      color: "#4ade80",
      x: 2,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="bg-black text-white px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-sm uppercase text-white mb-12 tracking-wider font-light"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          PROGETTI SELEZIONATI
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((project, idx) => (
            <motion.div
              key={idx}
              className="w-full rounded-2xl overflow-hidden group shadow-lg"
              custom={idx}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/5] relative group cursor-pointer">
                <div className="relative w-full h-full">
                  <motion.div
                    className="w-full h-full"
                    variants={imageVariants}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      className="object-cover"
                      priority
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>

                  <motion.div
                    className="absolute bottom-10 left-4 right-4 z-20"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-full h-[1px] bg-green-400 mb-3"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                    <motion.h3
                      className="text-xl font-normal mb-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-xs tracking-wider text-gray-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      {project.subtitle}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-sm">
          <motion.a
            href="#"
            className="text-white hover:text-green-400 transition underline underline-offset-2"
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            variants={linkVariants}
          >
            Vedi tutti i progetti
          </motion.a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-gray-700 pt-20"></div>
      </div>
    </section>
  );
};

export default Projects;
