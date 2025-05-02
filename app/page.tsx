import BrandCarousel from "@/components/BrandCarousel";
import Certificazioni from "@/components/Certificazioni";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import NostriServizi from "@/components/NostriServizi";
import Projects from "@/components/Projects";
import SettoriDiCompetenza from "@/components/Settori";
import { SiamoFattiCosi } from "@/components/SiamoFattiCosi";
import TenYears from "@/components/TenYears";
import TextCarousel from "@/components/TextCarousel";

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
      <CTA />
    </main>
  );
}
