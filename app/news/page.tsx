import { CTA } from "@/sections/news/CTA";
import { NewsHero } from "@/sections/news/NewsHero";
import { NewsList } from "@/sections/news/NewsList";

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <NewsList />
      <CTA />
    </>
  );
}
