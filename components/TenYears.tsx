const TenYears = () => {
  return (
    <section className="bg-black text-white pb-20 px-4">
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
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-gray-700 pt-20"></div>
      </div>
    </section>
  );
};
export default TenYears;
