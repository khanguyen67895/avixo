import { notFound } from "next/navigation";
import { fetchNewsArticle } from "@/lib/newsApi";
import { NewsDetail } from "@/sections/news/NewsDetail";

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await fetchNewsArticle(slug).catch(() => null);
  if (!article) notFound();
  return <NewsDetail article={article} />;
}
