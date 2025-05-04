import ServiziHero from "@/components/servizi/ServiziHero";
import BrandCircles from "@/components/servizi/BrandCircles";
import SettoriList from "@/components/servizi/SettoriList";
import ProcessoProprietario from "@/components/servizi/ProcessoProprietario";
import ProcessoSteps from "@/components/servizi/ProcessoSteps";
import CommunicationExperts from "@/components/servizi/CommunicationExperts";
import Certificazioni from "@/components/home/Certificazioni";
import CTA from "@/components/CTA";

export default function ServiziPage() {
  return (
    <main className="bg-black min-h-screen pt-20">
      <ServiziHero />
      <BrandCircles />
      <SettoriList />
      <ProcessoProprietario />
      <ProcessoSteps />
      <Certificazioni />
      <CommunicationExperts />
      <CTA>
        <h2 className="text-4xl sm:text-6xl font-light whitespace-nowrap">
          Creiamo qualcosa <br />
          di <em className="font-bold italic font-[playfair]">unico</em> per il{" "}
          <span className="font-bold ">tuo brand</span>.
        </h2>
      </CTA>
    </main>
  );
}
