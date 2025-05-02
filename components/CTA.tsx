import Image from "next/image";

const CTA = () => {
  return (
    <section className="relative min-h-screen bg-[#5AEF74] text-black flex items-center">
      <Image
        src="/Livello_1.svg"
        alt="Decoración"
        fill
        priority
        className="absolute inset-0 w-full h-full object-contain opacity-30 pointer-events-none z-0"
      />
      <div className="max-w-6xl mx-auto w-full px-4 relative">
        <div className="relative z-10 flex justify-start">
          <div className="text-left">
            <h2 className="text-4xl sm:text-6xl font-light whitespace-nowrap">
              Vogliamo <span className="font-bold">iniziare?</span>
            </h2>
            <button className="mt-8 bg-black text-white px-6 py-3 rounded-full text-lg transition hover:bg-white hover:text-black">
              Contattaci
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
