import StrategyHero from "@/components/strategy/StrategyHero";
import StrategyCollage from "@/components/strategy/StrategyCollage";
import StrategyFundamentals from "@/components/strategy/StrategyFundamentals";
import StrategyServices from "@/components/strategy/StrategyServices";
import StrategyMain from "@/components/strategy/StrategyMain";
import CTA from "@/components/CTA";

export default function StrategyPage() {
  return (
    <main className="bg-black min-h-screen pt-20">
      <StrategyMain />
      <StrategyHero />
      <StrategyCollage />
      <StrategyFundamentals />
      <StrategyServices />
      <CTA>
        <h2 className="text-4xl sm:text-6xl font-light whitespace-nowrap">
          Creiamo qualcosa <br />
          di <em className="font-bold italic font-[playfair]">unico</em> per il{" "}
          <span className="font-bold ">vostro brand</span>.
        </h2>
      </CTA>
    </main>
  );
}
