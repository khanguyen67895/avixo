"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import Text from "@/components/ui/label";
import { fetchNews } from "@/lib/newsApi";

const FALLBACK_IMG = "/images/news1.png";

export function NewsHero() {
  const { data: articles = [] } = useQuery({
    queryKey: ["news", "Tất cả"],
    queryFn: fetchNews,
  });

  const featured = articles[0];
  const hot = articles.slice(1, 3);

  if (!featured) return null;

  return (
    <section className="w-full bg-white pt-24 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-6">

          {/* ── Left: Tin Mới ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-3 flex flex-col"
          >
            <Text className="text-[32px] font-semibold text-[#1D1D1D] mb-4">Tin Mới</Text>
            <Link href={`/news/${featured.id}`} className="relative p-2 rounded-2xl overflow-hidden group flex-1 flex flex-col bg-white border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-full aspect-video">
                <img
                  src={featured.imageUrl ?? FALLBACK_IMG}
                  alt={featured.title}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                  className="object-cover rounded-2xl he-[382px]"
                />
              </div>
              <div className="py-6 px-2 flex flex-col flex-1">
                <Text className="text-2xl font-semibold text-[#1D1D1D] leading-8 mb-3 line-clamp-2">{featured.title}</Text>
                <p className="text-lg text-[#1D1D1D] leading-relaxed line-clamp-3">{featured.description}</p>
              </div>
            </Link>
          </motion.div>

          {/* ── Right: Tin Hot ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-2 flex flex-col"
          >
            <Text className="text-[32px] font-semibold text-[#1D1D1D] mb-4">Tin Hot</Text>
            <div className="flex flex-col gap-4">
              {hot.map(item => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="flex bg-white border border-[#E5E5E5] rounded-2xl p-2 hover:shadow-md transition-shadow flex-col"
                >
                  <div className="relative w-full h-35 rounded-xl overflow-hidden">
                    <img src={item.imageUrl ?? FALLBACK_IMG} alt={item.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="object-cover" />
                  </div>
                  <div className="flex flex-col p-1">
                    <h4 className="text-[16px] text-[#1D1D1D] leading-snug mt-2 line-clamp-2">{item.title}</h4>
                    <p className="text-[14px] text-[#505050] leading-relaxed line-clamp-2">{item.description}</p>
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
