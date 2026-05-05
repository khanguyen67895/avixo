"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Text from "@/components/ui/label";
import { GlowBackground } from "@/components/common/GlowBackground";
import { fetchNews } from "@/lib/newsApi";

const FALLBACK_IMG = "/images/news1.png";

export function News() {
  const { data: articles = [] } = useQuery({
    queryKey: ["news", "Tất cả"],
    queryFn: fetchNews,
    select: data => data.slice(0, 3),
  });

  return (
    <GlowBackground src="/images/ic_bg1.png" variant="perimeter" as="section" className="w-full">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-8"
        >
          <Text as="h2" className="text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#1D1D1D] leading-16">
            Tin tức mới nhất
          </Text>
          <p className="text-[#505050] text-base leading-6">
            Thông tin mới nhất, được tổng hợp từ kinh nghiệm và dữ liệu thực tiễn quốc tế.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-30">
          {articles.map((article, i) => (
            <Link key={article.id} href={`/news/${article.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white h-69.5 rounded-[20px] shadow-[0_2px_16px_rgba(0,0,0,0.07)] overflow-hidden cursor-pointer hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] transition-shadow p-2"
              >
                  <Image
                    src={article.imageUrl ?? FALLBACK_IMG}
                    alt={article.title}
                    height={365}
                    width={140}
                    className="object-cover rounded-2xl w-91.25 h-35"
                  />
                <div className="p-5">
                  <h3 className="text-[#1D1D1D] text-base leading-snug mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#505050] leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Xem thêm */}
        <div className="flex justify-center mt-10">
          <Link href="/news" className="bg-[#37C0FF] hover:opacity-90 text-white font-semibold px-10 py-3 rounded-full transition-opacity text-sm">
            Xem thêm
          </Link>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="px-8 pt-8 pb-20 text-center"
        >
          <Text as="h3" className="text-2xl font-semibold text-[#1D1D1D] mb-2">
            Nhận tin mới nhất từ chúng tôi
          </Text>
          <p className="text-zinc-500 text-sm mb-8">
            Cập nhật bài viết, ưu đãi và thông báo mới qua email.
          </p>
          <div className="flex items-center w-full max-w-md mx-auto bg-white rounded-full px-4 py-1.5 shadow-sm border border-zinc-200">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-transparent outline-none text-sm text-zinc-700 placeholder:text-zinc-400 px-2 py-2"
            />
            <button className="bg-[#37C0FF] hover:opacity-90 text-white font-semibold px-6 py-2 rounded-full transition-opacity text-sm shrink-0">
              Theo dõi
            </button>
          </div>
        </motion.div>

      </div>
    </GlowBackground>
  );
}
