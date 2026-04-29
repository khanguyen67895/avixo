"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/components/ui/label";

export function Hero() {
  return (
    <section className="relative w-full min-h-[60vw] md:h-180 bg-black flex items-center overflow-hidden py-24 md:py-0">
      {/* dot-grid background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/ic_pixels.png')" }}
      />

      {/* content */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-0">
        {/* left — text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full md:flex-1 md:pl-80 text-center md:text-left"
        >
          <Text as="h1" className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            Giải pháp<br />và công nghệ
          </Text>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-sm mx-auto md:mx-0">
            Bộ công cụ toàn diện — từ semi-auto đến AI trading — kiểm chứng 15 năm thực chiến trên 5 thị trường tài chính khốc liệt nhất.
          </p>
        </motion.div>

        {/* right — ic_bg_solution (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:flex flex-1 justify-end"
        >
          <Image
            src="/images/bg_solution_tab.png"
            alt=""
            width={350}
            height={350}
            priority
            className="w-full max-w-200"
          />
        </motion.div>
      </div>
    </section>
  );
}
