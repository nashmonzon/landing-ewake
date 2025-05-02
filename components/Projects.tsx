import Image from "next/image";

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

  return (
    <section className="bg-black text-white px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase text-white mb-12 tracking-wider font-light">
          PROGETTI SELEZIONATI
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((project, idx) => (
            <div
              key={idx}
              className="w-full rounded-2xl overflow-hidden group shadow-lg"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/5] relative group cursor-pointer">
                <div className="relative w-full h-full">
                  {/* Imagen con Next/Image para optimización */}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />

                  {/* Overlay gradiente para mejorar legibilidad del texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>

                  <div className="absolute bottom-10 left-4 right-4 z-20">
                    {/* Línea verde horizontal con ancho completo */}
                    <div className="w-full h-[1px] bg-green-400 mb-3"></div>
                    <h3 className="text-xl font-normal mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs tracking-wider text-gray-300">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm">
          <a
            href="#"
            className="text-white hover:text-green-400 transition underline underline-offset-2"
          >
            Vedi tutti i progetti
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-gray-700 pt-20"></div>
      </div>
    </section>
  );
};
export default Projects;
