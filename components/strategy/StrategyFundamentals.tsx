"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const steps = [
  {
    number: "01",
    title: "ANALISI DI MERCATO E POSIZIONAMENTO",
    description:
      "Analizziamo il mercato e definiamo il posizionamento del tuo brand.",
  },
  {
    number: "02",
    title: "BRANDING",
    description: "Definiamo l'identità verbale e visivia del tuo brand",
  },
  {
    number: "03",
    title: "PIANO MEDIA",
    description:
      "Sviluppiamo un piano media efficace per raggiungere il tuo target.",
  },
  {
    number: "04",
    title: "SEO E CONTENT STRATEGY",
    description:
      "Ottimizziamo la tua presenza online con strategie SEO e contenuti di qualità.",
  },
  {
    number: "05",
    title: "SOTTO TITOLO",
    description: "Descrizione del quinto step del processo.",
  },
];

const StrategyFundamentals = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const animation = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    if (!trackRef.current) return;

    animation.current = gsap.to(trackRef.current, {
      x: "-20%",
      ease: "none",
      duration: 15,
      repeat: -1,
      paused: true,
    });

    animation.current.play();

    return () => {
      if (animation.current) {
        animation.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    if (!animation.current) return;

    if (isHovering) {
      animation.current.pause();
    } else {
      animation.current.play();
    }
  }, [isHovering]);

  const handleMouseEnter = (index: number) => {
    setActiveStep(index % steps.length);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setActiveStep(null);
    setIsHovering(false);
  };

  return (
    <section className="bg-black text-white pb-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-lg">
          <motion.h2
            className="text-4xl md:text-5xl font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            COMINCIAMO DAI FONDAMENTALI
          </motion.h2>

          <motion.p
            className="text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            Per fare un buon lavoro non bisogna mai dare niente per scontato. E
            anche se conosci bene il tuo brand e il tuo target, il mercato si
            muove e cambia in fretta: chi non si tiene aggiornato rischia di
            rimanere indietro.
          </motion.p>

          <motion.p
            className="text-pink-400 text-sm mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Testi excel
          </motion.p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-8">
        <div
          ref={trackRef}
          className="flex space-x-6 min-w-[200%] whitespace-nowrap"
          onMouseLeave={handleMouseLeave}
        >
          {[...steps, ...steps].map((step, index) => (
            <div
              key={`${step.number}-${index}`}
              className="w-72 h-72 flex-shrink-0 relative cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <motion.div
                className="absolute bottom-0 w-full rounded-lg overflow-hidden"
                style={{
                  background:
                    index % 2 === 0
                      ? "linear-gradient(to bottom, #5AEF74, #ef5a5a)"
                      : "linear-gradient(to bottom, #ef5a5a, #5AEF74)",
                }}
                animate={{
                  height:
                    activeStep === index % steps.length ? "300px" : "200px",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-full h-full p-8 flex flex-col overflow-hidden">
                  <motion.span
                    className="text-6xl font-light text-white/80"
                    animate={{
                      fontSize:
                        activeStep === index % steps.length ? "3rem" : "6rem",
                      opacity: activeStep === index % steps.length ? 0.5 : 1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {step.number}
                  </motion.span>

                  <motion.div
                    className="mt-4 flex flex-col flex-1 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeStep === index % steps.length ? 1 : 0,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <h3 className="text-xl font-medium mb-2 break-words">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/80 break-words overflow-hidden text-ellipsis">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategyFundamentals;
