import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TenYears />
      <Projects />
      <CTA />
    </main>
  );
}

const Hero = () => {
  return (
    <>
      {/* Sección 1: Texto arriba */}
      <section className="bg-black text-white px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-pink-400 text-sm uppercase tracking-wide mb-4">
            Testi Selina
          </p>
          <h1 className="text-3xl sm:text-5xl font-light leading-tight">
            Siamo una{" "}
            <strong className="font-semibold">
              Fabbrica di Creatività Digitale
            </strong>{" "}
            <em className="italic font-light">indipendente</em> nata e cresciuta
            nell’area industriale di Verona.
          </h1>
        </div>
      </section>

      {/* Sección 2: Video con fondo decorativo */}
      {/* Sección 2: Fondo SVG y video */}
      <section className="relative bg-black flex justify-center items-center py-32 overflow-visible">
        {/* SVG decorativo en fondo */}
        <img
          src="/Livello_color.svg"
          alt="Decoración"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] max-w-none z-0 opacity-100 pointer-events-none"
        />

        {/* Video encima del SVG */}
        <div className="relative z-10 w-full max-w-5xl aspect-[1962/823] rounded-3xl overflow-hidden shadow-xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/EWAKE-loadingPortrait.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
};

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
    <section className="bg-black text-white px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase text-white mb-12 tracking-wider">
          Progetti selezionati
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((project, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden group shadow-lg"
            >
              {/* Imagen de fondo */}
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={500}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

              {/* Texto */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm uppercase text-gray-300 mt-1">
                  {project.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-sm underline text-white hover:text-green-400 transition">
          <a href="#">Vedi tutti i progetti</a>
        </div>
      </div>
    </section>
  );
};

const TenYears = () => {
  return (
    <section className="bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Columna izquierda: Número 10 con texto centrado */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center overflow-hidden">
          <h2
            className="text-[360px] md:text-[530px] text-transparent font-extrabold leading-none"
            style={{
              WebkitTextStroke: "1px #5AEF74",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            10
          </h2>

          <div className="absolute text-left right-10 bg-black p-2">
            <h1 className="text-[42px] md:text-[57px] font-normal leading-tight">
              Raccontiamo
            </h1>
            <em className="italic text-[42px] md:text-[57px] font-light leading-tight block">
              la marca
            </em>
            <h1 className="text-[42px] md:text-[57px] font-normal leading-tight">
              da <span className="text-green-400 font-light">10 anni</span>
            </h1>
          </div>
        </div>

        {/* Columna derecha: texto + botón */}
        <div className="w-full md:w-1/2 space-y-6 text-left max-w-full">
          <p className="text-pink-400 text-sm uppercase tracking-wide">
            Testi Selina
          </p>

          <p className="text-[20px] md:text-[27px] leading-relaxed">
            Da <strong>10 anni</strong>, diamo la sveglia ai progetti di{" "}
            <strong>comunicazione digitale</strong> e li eleviamo all’
            <strong>ennesima potenza</strong> con l’approccio di chi sa e vuole
            fare, di chi ci mette la faccia e anche le mani.
          </p>

          <p className="text-[20px] md:text-[27px] leading-relaxed">
            Questo fa la differenza tra la <strong>Fabbrica</strong> e
            l’Industry.
          </p>

          <button className="inline-flex items-center bg-green-400 text-black px-5 py-2 rounded-full text-base font-semibold hover:bg-green-300 transition">
            Contattaci
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 10l4.553-4.553a1 1 0 011.414 0l1.586 1.586a1 1 0 010 1.414L18 13M9 21v-6a3 3 0 013-3h6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="relative min-h-screen bg-[#5AEF74] text-black overflow-hidden flex items-center justify-center">
      <img
        src="/Livello_1.svg"
        alt="Decoración"
        className="absolute inset-0 w-full h-full object-contain opacity-30 pointer-events-none z-0"
      />

      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl sm:text-5xl font-light">
          Vogliamo <span className="font-bold">iniziare?</span>
        </h2>
        <button className="mt-8 bg-black text-white px-6 py-3 rounded-full text-lg transition hover:bg-white hover:text-black">
          Contattaci
        </button>
      </div>
    </section>
  );
};
