"use client";
import { useState } from "react";

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

  // Resetear el estado de texto completo cuando cambia el sector activo
  const handleSettoreChange = (id: string) => {
    setActiveSettore(id);
    setShowFullText(false);
  };

  return (
    <section className="bg-black text-white pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase text-white mb-16 tracking-wider font-light">
          SETTORI DI COMPETENZA
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {/* Columna izquierda: Lista de sectores */}
          <div className="space-y-6">
            {settori.map((settore) => (
              <div
                key={settore.id}
                className="flex items-center cursor-pointer group"
                onClick={() => handleSettoreChange(settore.id)}
              >
                <div
                  className={`w-3 h-8 rounded-full mr-4 transition-colors duration-300 ${
                    activeSettore === settore.id
                      ? "bg-green-400"
                      : "bg-gray-700"
                  }`}
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
              </div>
            ))}
          </div>

          {/* Columna derecha: Contenido del sector activo */}
          <div className="space-y-4">
            <p className="text-green-400 text-sm  tracking-wide mb-4">
              Testi Luca
            </p>

            <div className="relative">
              {/* Contenedor con altura fija y overflow hidden para el efecto fade */}
              <div
                className={`relative ${
                  showFullText ? "h-auto" : "h-[120px] overflow-hidden"
                }`}
              >
                <p className="text-xl leading-relaxed">
                  {settori.find((s) => s.id === activeSettore)?.content}
                </p>

                {/* Overlay de degradado que se muestra solo cuando el texto está truncado */}
                {!showFullText && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                )}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setShowFullText(!showFullText)}
                  className="text-white hover:text-green-400 transition underline underline-offset-2 text-sm focus:outline-none"
                >
                  {showFullText ? "Leggi meno" : "Leggi tutto"}
                </button>
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
