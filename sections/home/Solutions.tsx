"use client";

import Button from "@/components/ui/button";
import Text from "@/components/ui/label";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { GlowBackground } from "@/components/common/GlowBackground";

export function Solutions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cards = [
    {
      title: "Nhà đầu tư",
      description: "Công cụ quản lý danh mục tự động và AI coaching dành cho tài khoản cá nhân.",
      buttonText: "Bắt đầu",
      href: "/partners?tab=investor",
      icon: "/images/ic_investor.png",
      glow: "#85FF8A",
      glowPos: "top-0 -left-30",
      opacityDefault: 0.1,
      opacityHover: 0,
      width: 'w-52',
    },
    {
      title: "Cộng đồng IB",
      description: "Nền tảng hạ tầng và công cụ hỗ trợ phát triển hệ thống khách hàng toàn cầu.",
      buttonText: "Tìm hiểu",
      href: "/partners?tab=ib",
      icon: "/images/ic_ib.png",
      glow: "#FBE5CA",
      glowPos: "bottom-0 -right-10",
      opacityDefault: 0.5,
      opacityHover: 0,
      width: 'w-20',
    },
    {
      title: "Đối tác chiến lược",
      description: "Hợp tác cung cấp thanh khoản và phát triển giải pháp Quant Technology độc bản.",
      buttonText: "Hợp tác",
      href: "/partners?tab=strategic",
      icon: "/images/ic_partners.png",
      glow: "#AED7F6",
      glowPos: "top-0 -right-30",
      opacityDefault: 0.35,
      opacityHover: 0,
      width: 'w-52',
    },
  ];

  return (
    <GlowBackground
      src="/images/ic_bg1.png"
      as="section"
      className="w-full pb-24 mt-10 bg-white flex flex-col items-center overflow-hidden"
    >

      <div className="relative z-10 w-full max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Text className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-6">
            Giải Pháp Cho Mọi Đối Tác
          </Text>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-[#505050] px-2">
            AVIXO là hệ sinh thái toàn diện nơi công nghệ, dữ liệu và con người cùng tạo giá trị dài hạn trên Forex, Gold, Crypto, Chứng khoán và Hàng hóa.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative rounded-3xl bg-white flex flex-col items-center text-center px-8 pt-20 pb-8 mt-20"
                style={{
                  boxShadow: isHovered
                    ? "0 0 0 1px #37C0FF, 0 20px 40px rgba(55,192,255,0.15)"
                    : "0 0 0 2px rgba(55,192,255,0.35), 0 4px 20px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                {/* Glow blob — vị trí riêng từng card */}
                <div
                  className={`absolute ${card.width} h-80 rounded-full blur-2xl -z-10 transition-opacity duration-300 ${card.glowPos}`}
                  style={{ background: card.glow, opacity: isHovered ? card.opacityHover : card.opacityDefault }}
                />

                <Image
                  src={card.icon}
                  alt={card.title}
                  width={130}
                  height={130}
                  className="mb-6 object-contain"
                />
                <Text className="text-[18px] font-bold text-zinc-900 mb-3">{card.title}</Text>
                <p className="text-zinc-500 text-[16px] leading-relaxed mb-8 flex-1">{card.description}</p>
                <Button variant={isHovered ? "primary" : "light"} fullWidth href={card.href}>
                  {card.buttonText}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </GlowBackground>
  );
}