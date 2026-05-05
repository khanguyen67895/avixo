"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { aboutStats as stats } from "@/lib/constants";
import Text from "@/components/ui/label";
import { GlowBackground } from "@/components/common/GlowBackground";

export function AboutHero() {
  return (
    <section className="w-full bg-white overflow-hidden">

      {/* Top: split layout */}
      <div className="max-w-6xl mx-auto px-6 pt-28">
        <div className="flex flex-col md:flex-row items-start gap-0">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 pt-4"
          >
            <Text as="h1" className="text-3xl md:text-6xl text-[#1D1D1D] leading-16 mb-6">
              Tầm nhìn<br />& Sứ mệnh
            </Text>
            <p className="text-[#505050] text-base leading-6 max-w-sm">
              Không chỉ là công cụ — AVIXO là hệ sinh thái toàn diện nơi công nghệ, dữ liệu và con người cùng tạo giá trị dài hạn trên Forex, Gold, Crypto, Chứng khoán và Hàng hóa.
            </p>
          </motion.div>

          {/* Vertical gradient divider */}
          <div className="hidden md:block w-px self-stretch mx-12" style={{ background: "linear-gradient(to bottom, #D7EFFF, #099CFF, #D7EFFF)" }} />

          {/* Right: photo with ic_subtract mask */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-4/3">
              <img src="/images/ic_subtract.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="object-contain object-bottom pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Center logo ball — hidden on mobile */}
        <div className="hidden md:flex justify-center -mt-6 mb-0 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-80 h-80 absolute -top-30 bottom-0 bg-transparent flex items-center justify-center"
          >
            <img src="/images/ic_logo.png" alt="AVIXO" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="object-contain" />
          </motion.div>
        </div>
      </div>

      {/* Mission quote + Stats */}
      <GlowBackground src="/images/ic_bg1.png" className="w-full">
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20">

          {/* Mission quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center pt-8 md:pt-60 md:-mt-10"
          >
            <Text className="text-xl md:text-2xl font-semibold text-[#1D1D1D] leading-8 max-w-3xl mx-auto">
              Hệ sinh thái đầu tư hàng đầu khu vực AVIXO hướng tới trở thành doanh nghiệp công nghệ đầu tư tài chính tiên phong nơi Big Data và AI tạo ra giải pháp đầu tư thông minh, minh bạch và bền vững.
            </Text>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <Text className="text-4xl text-[#1D1D1D]">{s.value}</Text>
                <span className="text-base text-[#505050]">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </GlowBackground>

    </section>
  );
}
