import Image from "next/image";

const Hero = () => {
  return (
    <>
      {/* Sección 1: Texto arriba */}
      <section className="bg-black text-white px-4 py-24 text-left">
        <div className="max-w-3xl mx-auto ">
          <p className="text-pink-400 text-sm  tracking-wide mb-4">
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none">
          <Image
            src="/Livello_color.svg"
            alt="Decoración"
            fill
            className="object-contain opacity-100"
            priority
          />
        </div>

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
export default Hero;
