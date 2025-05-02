import Image from "next/image";

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

  return (
    <section className="bg-black text-white pb-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: Texto */}
          <div className="space-y-6">
            <h2 className="text-sm uppercase text-white mb-4 tracking-wider font-light">
              CERTIFICAZIONI
            </h2>

            <h3 className="font-[playfair] italic text-4xl md:text-5xl lg:text-7xl font-light leading-tight">
              Le nostre
              <br />
              partnership
            </h3>

            <p className="text-xl text-gray-300 max-w-md">
              Siamo partner di alcuni tra i più importanti player del settore,
              per offrirvi sempre la massima competenza.
            </p>
          </div>

          {/* Columna derecha: Logos de partners */}
          <div className="grid grid-cols-3 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 flex items-center justify-center h-28"
              >
                <div className="relative w-full h-16">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
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
