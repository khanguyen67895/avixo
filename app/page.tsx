import { Hero } from "@/sections/home/Hero";
import { Solutions } from "@/sections/home/Solutions";
import { HowItWorks } from "@/sections/home/HowItWorks";
import { StrategicSolutions } from "@/sections/home/StrategicSolutions";
import { Transparency } from "@/sections/home/Transparency";
import { Founders } from "@/sections/home/Founders";
import { News } from "@/sections/home/News";
import { CTA } from "@/sections/home/CTA";

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <Hero />
      </div>
      <Solutions />
      <HowItWorks />
      <StrategicSolutions />
      <Transparency />
      <Founders />
      <News />
      <CTA />
    </>
  );
}
