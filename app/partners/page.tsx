import { PartnersHero } from "@/sections/partners/PartnersHero";
import { Partners } from "@/sections/partners/Partners";
import { ProductsForYou } from "@/sections/partners/ProductsForYou";
import { RiskDisclaimer } from "@/sections/partners/RiskDisclaimer";

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <Partners />
      <ProductsForYou />
      <RiskDisclaimer />
    </>
  );
}
