import { AboutHero } from "@/sections/about/AboutHero";
import { AboutValues } from "@/sections/about/AboutValues";
import { AboutLegal } from "@/sections/about/AboutLegal";
import { AboutFounders } from "@/sections/about/AboutFounders";
import { AboutEvents } from "@/sections/about/AboutEvents";
import { AboutContact } from "@/sections/about/AboutContact";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <AboutLegal />
      <AboutFounders />
      <AboutEvents />
      <AboutContact />
    </>
  );
}
