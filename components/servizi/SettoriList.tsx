"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SettoriList = () => {
  const settori = [
    { name: "Strategy", isActive: true, href: "/strategy" },
    { name: "Art Direction", isActive: false },
    { name: "Media Performance", isActive: false },
    { name: "Digital Experience", isActive: false },
  ];

  return (
    <section className="bg-black text-white pb-20 min-h-[80vh]">
      <div className="px-4 md:px-20 max-w-6xl mx-auto">
        <motion.h2
          className="text-sm uppercase tracking-wider font-light mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          I NOSTRI SETTORI
        </motion.h2>
      </div>

      <div className="divide-y divide-white/20">
        {settori.map((settore, index) => (
          <motion.div
            key={settore.name}
            className="py-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <div className="flex items-center max-w-6xl mx-auto">
              {settore.isActive && (
                <motion.span
                  className="text-3xl mr-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  →
                </motion.span>
              )}

              {settore.href ? (
                <Link href={settore.href} className="block w-full">
                  <motion.h3
                    className="text-4xl md:text-6xl font-light "
                    whileHover={{
                      x: settore.isActive ? 0 : 10,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {settore.name}
                  </motion.h3>
                </Link>
              ) : (
                <motion.h3
                  className="text-4xl md:text-6xl font-light"
                  whileHover={{
                    x: settore.isActive ? 0 : 10,
                    transition: { duration: 0.3 },
                  }}
                >
                  {settore.name}
                </motion.h3>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SettoriList;
