"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/components/ui/label";
import Button from "@/components/ui/button";
import { Zap } from "lucide-react";

const products = [
  {
    img: "/images/ic_semibot.png",
    imgLeft: true,
    title: "Hỗ trợ phân tích",
    desc: "Tăng cường khả năng phán đoán thị trường bằng bộ công cụ theo dấu dòng tiền lớn.",
    tags: ["Semi Boomerang", "Smart Money"],
    cta: "Download now",
  },
  {
    img: "/images/ic_full_auto2.png",
    imgLeft: false,
    title: "Bot tự động & Kiểm soát",
    desc: "Vận hành chiến lược 24/7 với cơ chế kiểm soát drawdown nghiêm ngặt theo tham số cá nhân.",
    tags: ["AUTO BMR & SMN", "Arrow Big Trend"],
    cta: "Download now",
  },
  {
    img: "/images/ic_phone3.png",
    imgLeft: true,
    title: "Coaching cá nhân hóa",
    desc: "Làm việc trực tiếp cùng chuyên gia và AI để tinh chỉnh hệ thống giao dịch của riêng bạn.",
    tags: ["AI Trade Coaching 1:1"],
    cta: "Đăng ký ngay",
  },
];

export function ProductsForYou() {
  return (
    <section className="w-full bg-white py-20">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 max-w-2xl mx-auto px-6"
      >
        <Text as="h2" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
          Sản phẩm dành cho bạn
        </Text>
        <p className="text-zinc-500 text-base leading-relaxed">
          Cá nhân hóa lộ trình đầu tư dựa trên mục tiêu
          tài chính và khẩu vị rủi ro của bạn.
        </p>
      </motion.div>

      {/* Product rows */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-0">
        {products.map((p, i) => (
          <ProductRow key={p.title} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProductRow({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const { img, imgLeft, title, desc, tags, cta } = product;

  const imageEl = (
    <motion.div
      initial={{ opacity: 0, x: imgLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="flex-1 flex items-center justify-center"
    >
      <div className="relative w-[320px] h-[320px]">
        <Image src={img} alt={title} fill className="object-contain" />
      </div>
    </motion.div>
  );

  const textEl = (
    <motion.div
      initial={{ opacity: 0, x: imgLeft ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="flex-1 flex flex-col justify-center py-8 md:py-0"
    >
      <Text as="h3" className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3 leading-snug">
        {title}
      </Text>
      <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-6 max-w-sm">
        {desc}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-[#8DEE92] text-[#1D1D1D]"
          >
            <Zap size={11} fill="currentColor" /> {t}
          </span>
        ))}
      </div>
      <div>
        <Button href="#">{cta}</Button>
      </div>
    </motion.div>
  );

  return (
    <div className="relative">
      {/* Frame with blue corner decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/bg_solution_tab.png"
          alt=""
          fill
          className="object-contain object-right-top opacity-60"
        />
      </div>

      <div
        className={`relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 py-10 md:py-16 ${
          !imgLeft ? "md:flex-row-reverse" : ""
        }`}
      >
        {imageEl}
        {textEl}
      </div>

      {/* Subtle horizontal divider */}
      {index < products.length - 1 && (
        <div className="border-b border-zinc-100" />
      )}
    </div>
  );
}
