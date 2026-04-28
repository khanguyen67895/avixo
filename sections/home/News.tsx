"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/components/ui/label";
import { GlowBackground } from "@/components/common/GlowBackground";
import { homeArticles as articles } from "@/lib/constants";

export function News() {
  return (
    <GlowBackground src="/images/ic_bg1.png" variant="perimeter" as="section" className="w-full bg-white">
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-8"
        >
          <Text as="h2" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-3">
            Tin tức mới nhất
          </Text>
          <p className="text-zinc-500 text-base max-w-xl mx-auto">
            Thông tin mới nhất, được tổng hợp từ kinh nghiệm và dữ liệu thực tiễn quốc tế.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-30">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[20px] shadow-[0_2px_16px_rgba(0,0,0,0.07)] overflow-hidden cursor-pointer hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] transition-shadow"
            >
              <div className="relative w-full aspect-[16/9] bg-zinc-900">
                <Image
                  src={article.img}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-zinc-900 text-base leading-snug mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">
                  {article.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Xem thêm */}
        <div className="flex justify-center mt-10">
          <button className="bg-[#37C0FF] hover:opacity-90 text-white font-semibold px-10 py-3 rounded-full transition-opacity text-sm">
            Xem thêm
          </button>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="px-8 pt-8 pb-20 text-center"
        >
          <Text as="h3" className="text-2xl font-bold text-zinc-900 mb-2">
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
