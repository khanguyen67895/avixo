"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/components/ui/label";
import { useT } from "@/lib/i18n";

export function Hero() {
  const t = useT();
  return (
    <section className="hidden md:flex relative w-full md:h-auto bg-black items-center overflow-hidden pt-20">
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
          <Text as="h1" className="text-5xl md:text-6xl text-white leading-18 mb-4">
            {t("Giải Pháp")}<br />{t("Và Công Nghệ")}
          </Text>
          <p className="text-white text-base md:text-lg leading-6 mx-auto md:mx-0">
            {t("Bộ công cụ toàn diện — từ semi-auto đến AI trading — kiểm chứng 15 năm thực chiến trên 5 thị trường tài chính khốc liệt nhất.")}
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
