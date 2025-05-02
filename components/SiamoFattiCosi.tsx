"use client";

import Image from "next/image";
import Link from "next/link";

export const SiamoFattiCosi = () => {
  return (
    <section className="bg-black text-white pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: Texto */}
          <div className="space-y-6 w-[90%]">
            <h2 className="text-sm uppercase text-white mb-4 tracking-wider font-light">
              SIAMO FATTI COSÌ
            </h2>

            <p className="text-pink-400">Testi Selina</p>

            <div className="space-y-4 text-2xl">
              <p>
                Crediamo che idee chiare, creatività e innovazione siano il
                cuore di ogni{" "}
                <span className="font-bold">strategia di successo</span>.
              </p>
              <p>
                Che il <span className="font-bold">digital</span> sia il più
                grande
                <span className="font-bold"> acceleratore</span> delle
                connessioni fisiche al centro di ogni{" "}
                <span className="font-bold">relazione</span>.
              </p>
              <p>
                Che la lettura e la comprensione dei{" "}
                <span className="font-bold">dati</span> rilevanti generi{" "}
                <span className="font-bold">risultati reali e di qualità</span>.
              </p>
              <p>
                Ma soprattutto crediamo nelle{" "}
                <span className="font-bold">persone</span>, la nostra
                <span className="font-bold"> squadra</span> che ci mette testa,
                cuore e animo in ogni vostro progetto. Come fareste voi.
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="#"
                className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full text-sm transition-colors"
              >
                Scopri chi siamo
              </Link>
            </div>
          </div>

          {/* Columna derecha: Imagen unificada */}
          <div className="relative w-full max-w-md mx-auto aspect-[3/4]">
            <Image
              src="/grand_img.png"
              alt="Team collage"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="border-b border-gray-700 pt-20"></div>
      </div>
    </section>
  );
};
