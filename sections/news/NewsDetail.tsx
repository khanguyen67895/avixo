"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Tag from "@/components/ui/tag";
import { type ApiArticleDetailResponse, fetchNews } from "@/lib/newsApi";
import Text from "@/components/ui/label";
import { CTA } from "./CTA";
import { useT } from "@/lib/i18n";

type ArticleDetail = ApiArticleDetailResponse["article"];

const FALLBACK_IMG = "/images/news1.png";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("vi-VN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export function NewsDetail({ article }: { article: ArticleDetail }) {
  const t = useT();
  // Fetch all news to build sidebar (Tin Hot) and related articles
  const { data: allArticles = [] } = useQuery({
    queryKey: ["news", "Tất cả"],
    queryFn: fetchNews,
  });

  const related = allArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const hot = allArticles
    .filter(a => a.id !== article.id)
    .slice(0, 4);

  return (
    <div className="w-full bg-white min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── Main article ── */}
          <div className="flex-2 min-w-0">

            {/* Back */}
            <Link href="/news" className="inline-flex items-center gap-1.5 text-sm text-[#A6A6A6] hover:text-zinc-800 transition-colors mb-6">
              <ArrowLeft size={15} />
              {t("Quay lại")}
            </Link>

            {/* Meta top */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-zinc-400">{formatDate(article.publishedAt)}</span>
              <Tag bordered bg="bg-[#A0FFA5]">{article.source}</Tag>
              <div className="ml-auto flex items-center gap-3">
                <button className="text-zinc-400 hover:text-red-400 transition-colors"><Heart size={16} /></button>
                <button className="text-zinc-400 hover:text-[#37C0FF] transition-colors"><Share2 size={16} /></button>
              </div>
            </div>

            {/* Title */}
            <Text className="text-2xl md:text-3xl font-bold text-zinc-900 leading-snug mb-6">
              {article.title}
            </Text>

            {/* Featured image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-100 mb-8">
              <Image
                src={article.imageUrl ?? FALLBACK_IMG}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Description */}
            <p className="text-[15px] text-zinc-700 leading-relaxed mb-6">{article.description}</p>

            {/* Body blocks (if provided by API) */}
            {article.body && article.body.length > 0 && (
              <div className="flex flex-col gap-4 text-[15px] text-zinc-700 leading-relaxed">
                {article.body.map((block, i) =>
                  typeof block === "string" ? (
                    <p key={i}>{block}</p>
                  ) : (
                    <p key={i} className="font-bold text-zinc-900">{block.bold}</p>
                  )
                )}
              </div>
            )}

            {/* Read full article */}
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm text-[#37C0FF] hover:underline"
            >
              {t("Đọc bài gốc tại")} {article.source} →
            </a>

            {/* Meta bottom */}
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-zinc-100">
              <span className="text-xs text-zinc-400">{formatDate(article.publishedAt)}</span>
              <Tag bordered bg="bg-[#A0FFA5]">{article.source}</Tag>
              <div className="ml-auto flex items-center gap-3">
                <button className="text-zinc-400 hover:text-red-400 transition-colors"><Heart size={16} /></button>
                <button className="text-zinc-400 hover:text-[#37C0FF] transition-colors"><Share2 size={16} /></button>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-zinc-400 mt-4 leading-relaxed">
              {t("Tuyên bố miễn trừ trách nhiệm: Bao gồm cả quan điểm của bên thứ ba. Đây không phải lời khuyên tài chính.")}{" "}
              <a href="#" className="text-[#37C0FF] hover:underline">{t("Xem Điều khoản & Điều kiện.")}</a>
            </p>

            {/* Related articles */}
            {related.length > 0 && (
              <div className="mt-12">
                <Text className="text-3xl font-bold text-[#1D1D1D] mb-6">{t("Tin cùng thể loại")}</Text>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {related.map(item => (
                    <Link key={item.id} href={`/news/${item.id}`} className="group flex flex-col bg-white border border-[#E5E5E5] rounded-2xl p-2 hover:shadow-md transition-shadow">
                      <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-zinc-100">
                        <Image
                          src={item.imageUrl ?? FALLBACK_IMG}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-400"
                        />
                      </div>
                      <div className="flex flex-col p-1 mt-2">
                        <h4 className="text-sm font-bold text-[#1D1D1D] leading-snug mb-1 line-clamp-3 group-hover:text-[#37C0FF] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#505050] line-clamp-2">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── Sidebar: Tin Hot ── */}
          <div className="lg:w-72 shrink-0">
            <div className="sticky top-24">
              <Text className="text-[32px] font-semibold text-[#1D1D1D] mb-5">{t("Tin Hot")}</Text>
              <div className="flex flex-col gap-5">
                {hot.map(item => (
                  <Link key={item.id} href={`/news/${item.id}`} className="group flex flex-col bg-white border border-[#E5E5E5] rounded-2xl p-2 hover:shadow-md transition-shadow">
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-zinc-100">
                      <Image
                        src={item.imageUrl ?? FALLBACK_IMG}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-400"
                      />
                    </div>
                    <div className="flex flex-col p-1 mt-2">
                      <h4 className="text-sm font-bold text-[#1D1D1D] leading-snug mb-1 line-clamp-2 group-hover:text-[#37C0FF] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#505050] line-clamp-2">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      <CTA />
    </div>
  );
}
