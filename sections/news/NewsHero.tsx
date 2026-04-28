"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featuredArticle, hotArticles } from "@/data/news";

export function NewsHero() {
  const featured = featuredArticle;
  const hot = hotArticles.slice(1, 3);

  return (
    <section className="w-full bg-white pt-24 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-6">

          {/* ── Left: Tin Mới ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-[3] flex flex-col"
          >
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Tin Mới</h2>
            <Link href={`/news/${featured.slug}`} className="relative rounded-2xl overflow-hidden group flex-1 flex flex-col bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full aspect-[16/9] bg-zinc-100">
                <Image
                  src={featured.img}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs font-semibold text-[#37C0FF] uppercase tracking-wide mb-2">{featured.category}</p>
                <h3 className="text-xl font-bold text-zinc-900 leading-snug mb-3 line-clamp-2">{featured.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3">{featured.desc}</p>
              </div>
            </Link>
          </motion.div>

          {/* ── Right: Tin Hot ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-[2] flex flex-col"
          >
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Tin Hot</h2>
            <div className="flex flex-col gap-4 flex-1">
              {hot.map((item) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="flex gap-4 bg-white border border-zinc-100 rounded-2xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="relative w-32 h-24 rounded-xl overflow-hidden shrink-0 bg-zinc-100">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <h4 className="text-sm font-bold text-zinc-900 leading-snug mb-1 line-clamp-2">{item.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
