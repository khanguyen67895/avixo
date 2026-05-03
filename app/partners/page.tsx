import { Suspense } from "react";
import { PartnersHero } from "@/sections/partners/PartnersHero";
import { Partners } from "@/sections/partners/Partners";

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <Suspense fallback={null}>
        <Partners />
      </Suspense>
    </>
  );
}
