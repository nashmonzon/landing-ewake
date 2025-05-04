import BrandCarousel from "@/components/home/BrandCarousel";
import Certificazioni from "@/components/home/Certificazioni";
import CTA from "@/components/CTA";
import Hero from "@/components/home/Hero";

import Projects from "@/components/home/Projects";
import SettoriDiCompetenza from "@/components/home/Settori";
import { SiamoFattiCosi } from "@/components/home/SiamoFattiCosi";
import TenYears from "@/components/home/TenYears";
import TextCarousel from "@/components/home/TextCarousel";
import NostriServizi from "@/components/home/NostriServizi";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TextCarousel />
      <TenYears />
      <Projects />
      <SettoriDiCompetenza />
      <SiamoFattiCosi />
      <BrandCarousel />
      <Certificazioni />
      <NostriServizi />
      <CTA>
        <h2 className="text-4xl sm:text-6xl font-light whitespace-nowrap">
          Vogliamo <span className="font-bold">iniziare?</span>
        </h2>
      </CTA>
    </main>
  );
}
