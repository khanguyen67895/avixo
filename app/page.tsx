import { Hero } from "@/sections/home/Hero";
import { Solutions } from "@/sections/home/Solutions";
import { HowItWorks } from "@/sections/home/HowItWorks";
import { StrategicSolutions } from "@/sections/home/StrategicSolutions";
import { Transparency } from "@/sections/home/Transparency";
import { Founders } from "@/sections/home/Founders";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <HowItWorks />
      <StrategicSolutions />
      <Transparency />
      <Founders />
    </>
  );
}
