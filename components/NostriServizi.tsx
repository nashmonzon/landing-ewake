"use client";
import Link from "next/link";

import ArcDiagramVertical from "./arc";

const NostriServizi = () => {
  return (
    <section className="bg-black text-white pb-20 px-4 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row min-h-[600px] gap-12">
        <div className="w-full md:w-1/2 flex flex-col">
          {/* Título arriba */}
          <h2 className="text-sm uppercase tracking-wider font-light mb-6">
            I NOSTRI SERVIZI
          </h2>

          {/* Bloque central centrado verticalmente */}
          <div className="flex flex-1 flex-col justify-center">
            <h3 className="text-3xl md:text-5xl font-extralight leading-snug mb-8">
              Diamo <span className="font-[playfair] italic">nuova carica</span>
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

            <div>
              <Link
                href="#"
                className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-sm transition-colors"
              >
                Scopri i servizi
              </Link>
            </div>
          </div>
        </div>

        <div className=" w-full md:w-1/2 flex flex-col justify-center">
          <div className=" z-10">
            <h3 className="text-sm uppercase mb-6 tracking-wider font-light">
              CI OCCUPIAMO DI
            </h3>
            <ArcDiagramVertical />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NostriServizi;
