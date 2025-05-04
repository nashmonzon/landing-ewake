"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Certificazioni = () => {
  const partners = [
    {
      name: "Google Partner",
      logo: "/PARTNER-1.png",
      alt: "Google Partner Logo",
    },
    {
      name: "Sky Media",
      logo: "/PARTNER-2.png",
      alt: "Sky Media Advertising Manager Partner Logo",
    },
    {
      name: "Cookiebot",
      logo: "/PARTNER-3.png",
      alt: "Cookiebot Partner Logo",
    },
  ];

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
  };

  const titleVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const logoVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3 + i * 0.15,
      },
    }),
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="bg-black text-white pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h2
              className="text-sm uppercase text-white mb-4 tracking-wider font-light"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={titleVariants}
            >
              CERTIFICAZIONI
            </motion.h2>

            <motion.h3
              className="font-[playfair] italic text-4xl md:text-5xl lg:text-7xl font-light leading-tight"
              custom={0}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariants}
            >
              Le nostre
              <br />
              partnership
            </motion.h3>

            <motion.p
              className="text-xl text-gray-300 max-w-md"
              custom={1}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariants}
            >
              Siamo partner di alcuni tra i più importanti player del settore,
              per offrirvi sempre la massima competenza.
            </motion.p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-4 flex items-center justify-center h-28"
                custom={index}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                variants={logoVariants}
              >
                <div className="relative w-full h-16">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-gray-700 pt-20"></div>
      </div>
    </section>
  );
};

export default Certificazioni;
