"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const NostriServizi = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const services = [
    { name: "Strategy & Innovation", hasPoint: true },
    { name: "Branding", hasPoint: true },
    { name: "Creativity & Design", hasPoint: true },
    { name: "Mindset & Experience", hasPoint: true },
    { name: "Performance optimization", hasPoint: true },
    { name: "Advertising", hasPoint: true },
    { name: "Digital Experience", hasPoint: true },
    { name: "Social media management", hasPoint: false },
    { name: "Creators", hasPoint: false },
    { name: "Websites & Apps", hasPoint: false },
    { name: "Production", hasPoint: false },
  ];

  // Función para dibujar las líneas curvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ajustar el tamaño del canvas al tamaño del contenedor
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;

      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;

      drawCurves();
    };

    // Dibujar las curvas
    const drawCurves = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Color verde para las líneas
      ctx.strokeStyle = "#5AEF74";
      ctx.lineWidth = 1;

      const startX = 0;
      const serviceElements = document.querySelectorAll(".service-item");

      serviceElements.forEach((el, index) => {
        if (!(el instanceof HTMLElement)) return;

        const rect = el.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();

        const endX = rect.left - canvasRect.left;
        const endY = rect.top - canvasRect.top + el.offsetHeight / 2;

        // Dibujar la curva
        ctx.beginPath();
        ctx.moveTo(startX, endY);

        // Punto de control para la curva
        const controlX = startX + (endX - startX) * 0.7;

        ctx.bezierCurveTo(controlX, endY, controlX, endY, endX, endY);

        ctx.stroke();
      });
    };

    // Inicializar
    resizeCanvas();

    // Actualizar cuando cambie el tamaño de la ventana
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="bg-black text-white pb-20 px-4 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row min-h-[600px] gap-12">
        {/* Columna izquierda */}
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <div className="space-y-6 justify-around flex flex-col">
            <div>
              <h2 className="text-sm uppercase tracking-wider font-light">
                I NOSTRI SERVIZI
              </h2>
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-extralight leading-snug">
                Diamo{" "}
                <span className="font-[playfair] italic">nuova carica</span>
                <br />
                a progetti di
                <br />
                <span className="text-green-400">
                  comunicazione
                  <br />
                  digitale
                </span>
                .
              </h3>
            </div>

            <div className="pt-6">
              <Link
                href="#"
                className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-sm transition-colors"
              >
                Scopri i servizi
              </Link>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="relative w-full md:w-1/2 flex flex-col justify-center">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
          />
          <div className="relative z-10">
            <h3 className="text-sm uppercase mb-6 tracking-wider font-light">
              CI OCCUPIAMO DI
            </h3>
            <div className="space-y-5 pl-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center service-item">
                  {service.hasPoint ? (
                    <div className="w-2 h-2 bg-white rounded-full mr-3" />
                  ) : (
                    <div className="w-2 mr-3" />
                  )}
                  <span className="text-lg">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NostriServizi;
