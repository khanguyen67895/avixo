import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/data/news";
import { NewsDetail } from "@/sections/news/NewsDetail";

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  return <NewsDetail article={article} />;
}
