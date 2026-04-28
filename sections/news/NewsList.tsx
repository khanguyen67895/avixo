"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { articles } from "@/data/news";

const CATEGORIES = [
  "Tất cả",
  "Hướng dẫn",
  "Công nghệ tài chính",
  "Phân tích thị trường",
  "Chiến lược giao dịch",
];

const CATEGORY_COLORS: Record<string, string> = {
  "Phân tích thị trường": "text-[#37C0FF]",
  "Chuyển đổi số trong ngành bán lẻ": "text-[#FF8C42]",
  "Phát triển bền vững và môi trường": "text-[#4CAF50]",
  "Công nghệ AI và tương lai công việc": "text-[#A855F7]",
  "Hướng dẫn": "text-[#F59E0B]",
  "Công nghệ tài chính": "text-[#06B6D4]",
  "Chiến lược giao dịch": "text-[#EC4899]",
};

export function NewsList() {
  const [active, setActive] = useState("Tất cả");

  const filtered = active === "Tất cả"
    ? articles
    : articles.filter(a => a.category === active);

  return (
    <section className="w-full bg-white pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((article, i) => (
            <Link key={article.slug} href={`/news/${article.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-zinc-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="relative w-full aspect-[16/9] bg-zinc-100">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wide ${CATEGORY_COLORS[article.category] ?? "text-[#37C0FF]"}`}>
                      {article.category}
                    </span>
                    <span className="text-[10px] text-zinc-400">{article.date}</span>
                  </div>
                  <h3 className="font-bold text-zinc-900 text-sm leading-snug mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3">{article.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Load more */}
        <div className="flex justify-center mt-10">
          <button className="px-10 py-3 rounded-full bg-[#37C0FF] text-white font-semibold text-sm hover:opacity-90 transition-opacity">
            Xem thêm
          </button>
        </div>

      </div>
    </section>
  );
}
