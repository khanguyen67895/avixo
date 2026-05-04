"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { NEWS_CATEGORIES as CATEGORIES, CATEGORY_COLORS } from "@/lib/constants";
import { fetchNews, fetchNewsByCategory } from "@/lib/newsApi";

const FALLBACK_IMG = "/images/news1.png";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("vi-VN", {
    day: "numeric", month: "long", year: "numeric",
  });
}

const PAGE_SIZE = 9;

export function NewsList() {
  const [active, setActive] = useState("Tất cả");
  const [showAll, setShowAll] = useState(false);

  const { data: articles = [], isLoading } = useQuery({
    queryKey: ["news", active],
    queryFn: () => active === "Tất cả" ? fetchNews() : fetchNewsByCategory(active),
  });

  const visible = showAll ? articles : articles.slice(0, PAGE_SIZE);
  const hasMore = articles.length > PAGE_SIZE && !showAll;

  return (
    <section className="w-full bg-white pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setShowAll(false); }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-[#37C0FF] text-white shadow-md"
                  : "bg-white border border-zinc-200 text-zinc-600 hover:border-[#37C0FF] hover:text-[#37C0FF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-zinc-100 rounded-2xl animate-pulse aspect-4/3" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visible.map((article, i) => (
              <Link key={article.id} href={`/news/${article.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
                >
                  <div className="relative w-full aspect-video bg-zinc-100">
                    <Image
                      src={article.imageUrl ?? FALLBACK_IMG}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wide ${CATEGORY_COLORS[article.category] ?? "text-[#37C0FF]"}`}>
                        {article.source}
                      </span>
                      <span className="text-[10px] text-zinc-400">{formatDate(article.publishedAt)}</span>
                    </div>
                    <h3 className="font-bold text-zinc-900 text-sm leading-snug mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3">{article.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-10 py-3 rounded-full bg-[#37C0FF] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Xem thêm
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
