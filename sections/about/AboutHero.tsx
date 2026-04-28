"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "63K+", label: "Global users" },
  { value: "6+", label: "Live products" },
  { value: "15+", label: "Years experience" },
  { value: "5+", label: "Global market" },
];

export function AboutHero() {
  return (
    <section className="w-full bg-white pt-28 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top: split layout */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-0">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 pt-4"
          >
            <h1 className="text-5xl md:text-6xl font-black text-zinc-900 leading-tight mb-6">
              Tầm nhìn<br />& Sứ mệnh
            </h1>
            <p className="text-zinc-500 text-base leading-relaxed max-w-sm">
              Không chỉ là công cụ — AVIXO là hệ sinh thái toàn diện nơi công nghệ, dữ liệu và con người cùng tạo giá trị dài hạn trên Forex, Gold, Crypto, Chứng khoán và Hàng hóa.
            </p>
          </motion.div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
              <Image src="/images/ic_about_team.png" alt="AVIXO Team" fill className="object-cover" priority />
            </div>
          </motion.div>
        </div>

        {/* Center logo ball */}
        <div className="flex justify-center -mt-6 mb-0 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-28 h-28 rounded-full border-4 border-[#37C0FF]/30 shadow-[0_0_40px_rgba(55,192,255,0.2)] bg-white flex items-center justify-center"
          >
            <div className="relative w-16 h-16">
              <Image src="/images/ic_investor.png" alt="AVIXO" fill className="object-contain" />
            </div>
          </motion.div>
        </div>

        {/* Mission quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center py-16 border-t border-b border-zinc-100 mt-8"
        >
          <p className="text-xl md:text-2xl font-bold text-zinc-900 leading-relaxed max-w-3xl mx-auto">
            Hệ sinh thái đầu tư hàng đầu khu vực AVIXO hướng tới trở thành doanh nghiệp công nghệ đầu tư tài chính tiên phong nơi Big Data và AI tạo ra giải pháp đầu tư thông minh, minh bạch và bền vững.
          </p>
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
              <span className="text-4xl font-black text-zinc-900">{s.value}</span>
              <span className="text-sm text-zinc-400">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
