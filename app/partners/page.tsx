import { Suspense } from "react";
import { PartnersHero } from "@/sections/partners/PartnersHero";
import { Partners } from "@/sections/partners/Partners";
import { CTA } from "@/sections/partners/CTA";

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <Suspense fallback={null}>
        <Partners />
      </Suspense>
      <CTA />
    </>
  );
}
