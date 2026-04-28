import { AboutHero } from "@/sections/about/AboutHero";
import { AboutValues } from "@/sections/about/AboutValues";
import { AboutLegal } from "@/sections/about/AboutLegal";
import { AboutFounders } from "@/sections/about/AboutFounders";
import { AboutEvents } from "@/sections/about/AboutEvents";
import { AboutContact } from "@/sections/about/AboutContact";
import { AboutCTA } from "@/sections/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <AboutLegal />
      <AboutFounders />
      <AboutEvents />
      <AboutContact />
      <AboutCTA />
    </>
  );
}
