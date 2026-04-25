"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/components/ui/label";

export function Hero() {
  return (
    <section className="relative w-full h-200 bg-black flex items-center overflow-hidden">
      {/* dot-grid background */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/ic_pixels.png')" }}
      />

      {/* content */}
      <div className="w-full flex items-center justify-between">
        {/* left — text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex-1 pl-80"
        >
          <Text as="h1" className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Giải pháp<br />và công nghệ
          </Text>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            Bộ công cụ toàn diện — từ semi-auto đến AI trading — kiểm <br /> chứng 15 năm thực chiến trên 5 thị trường tài chính khốc liệt nhất.
          </p>
        </motion.div>

        {/* right — ic_bg_solution */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 flex justify-end"
        >
          <Image
            src="/images/bg_solution_tab.png"
            alt=""
            width={720}
            height={720}
            priority
            className="w-full max-w-220"
          />
        </motion.div>
      </div>
    </section>
  );
}
