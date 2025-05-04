"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [_scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    if (isOpen) {
      const currentScroll = window.scrollY;

      document.body.style.overflow = "hidden";

      document.body.style.position = "fixed";
      document.body.style.top = `-${currentScroll}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const lineVariants = {
    closed: {
      width: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      width: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const colorTransition = { duration: 0.5, ease: "easeInOut" };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="w-8 h-8 flex items-center justify-center rounded-full border text-white focus:outline-none"
        aria-label="Menu"
      >
        <span className="block w-5 relative h-0.5 bg-white">
          <span className="block absolute w-5 h-0.5 bg-white transform transition-transform duration-300 -translate-y-1.5"></span>
          <span className="block absolute w-5 h-0.5 bg-white transform transition-transform duration-300 translate-y-1.5"></span>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex flex-col overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            style={{ top: 0 }}
          >
            <motion.div
              className="absolute inset-0 -z-10"
              initial={{ backgroundColor: "#000000" }}
              animate={{
                backgroundColor: isHovered ? "#5AEF74" : "#000000",
                transition: colorTransition,
              }}
            />

            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-6">
                <motion.div
                  className="relative w-32 h-10"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center">
                      <div className="relative w-32 h-10">
                        <motion.div
                          initial={{ opacity: 1 }}
                          animate={{ opacity: isHovered ? 0 : 1 }}
                          transition={colorTransition}
                          className="absolute inset-0"
                        >
                          <Image
                            src="/Ewake.svg"
                            alt="Ewake logo"
                            fill
                            className="object-contain"
                            priority
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isHovered ? 1 : 0 }}
                          transition={colorTransition}
                          className="absolute inset-0"
                        >
                          <Image
                            src="/Ewake-n.svg"
                            alt="Ewake logo"
                            fill
                            className="object-contain"
                            priority
                          />
                        </motion.div>
                      </div>
                    </Link>
                  </div>
                </motion.div>

                <motion.button
                  onClick={toggleMenu}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    backgroundColor: isHovered ? "#000000" : "#1f2937",
                    transition: colorTransition,
                  }}
                  className="px-4 py-2 rounded-full text-white"
                >
                  <span className="flex items-center">
                    <X className="w-4 h-4 mr-2" />
                    Chiudi
                  </span>
                </motion.button>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:gap-16">
                  <div className="w-full md:w-3/5 flex flex-col justify-center">
                    <nav className="space-y-8">
                      {[
                        { name: "Progetti", href: "/progetti" },
                        { name: "Servizi", href: "/servizi" },
                        { name: "Chi siamo", href: "/chi-siamo" },
                        { name: "Entra nel team", href: "/team" },
                        { name: "Contatti", href: "/contatti" },
                      ].map((item) => (
                        <div key={item.name} className="overflow-hidden">
                          <motion.div
                            variants={itemVariants}
                            onMouseEnter={() => setHoveredItem(item.name)}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <Link
                              href={item.href}
                              onClick={toggleMenu}
                              className="block text-4xl font-light relative"
                            >
                              <motion.span
                                animate={{
                                  x: hoveredItem === item.name ? 40 : 0,
                                  opacity: hoveredItem === item.name ? 0.8 : 1,
                                  color: isHovered ? "#000000" : "#FFFFFF",
                                  transition: {
                                    ...colorTransition,
                                    x: { duration: 0.3 },
                                    opacity: { duration: 0.3 },
                                  },
                                }}
                                className="inline-block text-4xl font-light"
                              >
                                {item.name}
                              </motion.span>
                              {hoveredItem === item.name && (
                                <motion.span
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                    color: "#FFFFFFFF",
                                  }}
                                  exit={{ opacity: 0, x: 10 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute left-0 "
                                >
                                  →
                                </motion.span>
                              )}
                            </Link>
                          </motion.div>
                          <motion.div
                            variants={lineVariants}
                            animate={{
                              backgroundColor: isHovered
                                ? "rgba(0, 0, 0, 0.2)"
                                : "rgba(255, 255, 255, 0.2)",
                              transition: colorTransition,
                            }}
                            className="h-px mt-4"
                          />
                        </div>
                      ))}
                    </nav>
                  </div>

                  <div className="w-full md:w-2/5 flex flex-col mt-12 md:mt-0 justify-between md:pl-8">
                    <div className="space-y-8">
                      <motion.div variants={itemVariants} className="space-y-2">
                        <motion.h3
                          animate={{
                            color: isHovered ? "#000000" : "#FFFFFF",
                            transition: colorTransition,
                          }}
                          className="text-xl font-medium"
                        >
                          Vediamoci
                        </motion.h3>
                        <motion.p
                          animate={{
                            color: isHovered ? "#000000" : "#FFFFFF",
                            transition: colorTransition,
                          }}
                        >
                          Viale del lavoro, 33
                        </motion.p>
                        <motion.p
                          animate={{
                            color: isHovered ? "#000000" : "#FFFFFF",
                            transition: colorTransition,
                          }}
                        >
                          37135 - Verona
                        </motion.p>
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <motion.h3
                          animate={{
                            color: isHovered ? "#000000" : "#FFFFFF",
                            transition: colorTransition,
                          }}
                          className="text-xl font-medium"
                        >
                          Contattaci
                        </motion.h3>
                        <motion.p
                          animate={{
                            color: isHovered ? "#000000" : "#FFFFFF",
                            transition: colorTransition,
                          }}
                        >
                          045 82 13 434
                        </motion.p>
                        <motion.p
                          animate={{
                            color: isHovered ? "#000000" : "#FFFFFF",
                            transition: colorTransition,
                          }}
                        >
                          info@ewake.agency
                        </motion.p>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <motion.button
                          animate={{
                            backgroundColor: isHovered ? "#000000" : "#1f2937",
                            transition: colorTransition,
                          }}
                          className="px-6 py-3 rounded-full text-white"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                        >
                          Inizia un progetto
                        </motion.button>
                      </motion.div>

                      {/* Logo aligned with content above - Made larger */}
                      <motion.div variants={itemVariants} className="pt-8">
                        <motion.div
                          initial={{ opacity: 1 }}
                          animate={{ opacity: isHovered ? 0 : 1 }}
                          transition={colorTransition}
                          className="absolute"
                        >
                          <Image
                            src="/Livello_color.svg"
                            alt="Logo"
                            width={180}
                            height={180}
                            className="object-contain"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isHovered ? 1 : 0 }}
                          transition={colorTransition}
                          className="relative"
                        >
                          <Image
                            src="/Livello.svg"
                            alt="Logo"
                            width={180}
                            height={180}
                            className="object-contain"
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavMenu;
