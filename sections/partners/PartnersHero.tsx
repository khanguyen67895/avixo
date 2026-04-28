"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/components/ui/label";

export function PartnersHero() {
  return (
    <section className="relative w-full min-h-[520px] bg-black flex items-center overflow-hidden">
      {/* Pixel dot-grid */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/images/ic_pixels.png')" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between gap-8">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex-1 max-w-2xl"
        >
          <Text as="h1" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            AVIXO Giải pháp<br />đầu tư ứng dụng<br />
            <span className="bg-gradient-to-r from-[#37C0FF] to-[#0076FF] bg-clip-text text-transparent">
              Big Data &amp; AI
            </span>
          </Text>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
            Phục vụ nhà đầu tư cá nhân với độ chính xác lượng tử, tối ưu hóa lợi nhuận
            thông qua phân tích dữ liệu thời gian thực và quản trị rủi ro tự động.
          </p>
        </motion.div>

        {/* Right — decorative border arc with robot hands */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:flex flex-1 justify-end items-center"
        >
          <div className="relative w-[520px] h-[380px]">
            <Image
              src="/images/ic_border_hero.png"
              alt=""
              fill
              className="object-contain brightness-125 drop-shadow-[0_0_30px_rgba(0,180,255,0.5)] mix-blend-screen"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
