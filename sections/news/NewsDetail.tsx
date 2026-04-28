"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import Tag from "@/components/ui/tag";
import { type Article, hotArticles, getRelatedArticles } from "@/data/news";

export function NewsDetail({ article }: { article: Article }) {
  const related = getRelatedArticles(article.slug, article.category);
  const hot = hotArticles.filter(a => a.slug !== article.slug).slice(0, 4);

  return (
    <div className="w-full bg-white min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── Main article ── */}
          <div className="flex-[2] min-w-0">

            {/* Back */}
            <Link href="/news" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-800 transition-colors mb-6">
              <ArrowLeft size={15} />
              Quay lại
            </Link>

            {/* Meta top */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-zinc-400">{article.date}</span>
              <Tag bg="bg-[#4CAF50]">{article.category}</Tag>
              <div className="ml-auto flex items-center gap-3">
                <button className="text-zinc-400 hover:text-red-400 transition-colors"><Heart size={16} /></button>
                <button className="text-zinc-400 hover:text-[#37C0FF] transition-colors"><Share2 size={16} /></button>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 leading-snug mb-6">
              {article.title}
            </h1>

            {/* Featured image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-100 mb-8">
              <Image src={article.img} alt={article.title} fill className="object-cover" priority />
            </div>

            {/* Body */}
            <div className="flex flex-col gap-4 text-[15px] text-zinc-700 leading-relaxed">
              {article.body.map((block, i) =>
                typeof block === "string" ? (
                  <p key={i}>{block}</p>
                ) : (
                  <p key={i} className="font-bold text-zinc-900">{block.bold}</p>
                )
              )}
            </div>

            {/* Meta bottom */}
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-zinc-100">
              <span className="text-xs text-zinc-400">{article.date}</span>
              <Tag bg="bg-[#4CAF50]">{article.category}</Tag>
              <div className="ml-auto flex items-center gap-3">
                <button className="text-zinc-400 hover:text-red-400 transition-colors"><Heart size={16} /></button>
                <button className="text-zinc-400 hover:text-[#37C0FF] transition-colors"><Share2 size={16} /></button>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-zinc-400 mt-4 leading-relaxed">
              Tuyên bố miễn trừ trách nhiệm: Bao gồm cả quan điểm của bên thứ ba. Đây không phải lời khuyên tài chính.{" "}
              <a href="#" className="text-[#37C0FF] hover:underline">Xem Điều khoản & Điều kiện.</a>
            </p>

            {/* Related articles */}
            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-zinc-900 mb-6">Tin cùng thể loại</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {related.map((item) => (
                    <Link key={item.slug} href={`/news/${item.slug}`} className="group block">
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100 mb-3">
                        <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-400" />
                      </div>
                      <h4 className="text-sm font-bold text-zinc-900 leading-snug mb-1 line-clamp-3 group-hover:text-[#37C0FF] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-400 line-clamp-2">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── Sidebar: Tin Hot ── */}
          <div className="lg:w-72 shrink-0">
            <div className="sticky top-24">
              <h2 className="text-xl font-bold text-zinc-900 mb-5">Tin Hot</h2>
              <div className="flex flex-col gap-5">
                {hot.map((item) => (
                  <Link key={item.slug} href={`/news/${item.slug}`} className="group block">
                    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-zinc-100 mb-3">
                      <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-400" />
                    </div>
                    <h4 className="text-sm font-bold text-zinc-900 leading-snug mb-1 line-clamp-2 group-hover:text-[#37C0FF] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-400 line-clamp-2">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Newsletter footer */}
      <div className="w-full bg-[#050b14] mt-16 py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Giữ kết nối với</h2>
        <p className="text-zinc-400 text-sm mb-8 max-w-md mx-auto">
          Cập nhật bài viết, ưu đãi và thông báo mới qua email.
        </p>
        <div className="flex items-center w-full max-w-md mx-auto bg-white/10 rounded-full px-4 py-1.5 border border-white/10">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/40 px-2 py-2"
          />
          <button className="bg-[#37C0FF] hover:opacity-90 text-white font-semibold px-6 py-2 rounded-full transition-opacity text-sm shrink-0">
            Theo dõi
          </button>
        </div>
      </div>
    </div>
  );
}
