"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import Text from "@/components/ui/label";
import { GlowBackground } from "@/components/common/GlowBackground";

export function Transparency() {
  return (
    <GlowBackground src="/images/ic_bg1.png" variant="perimeter" as="section" className="w-full py-12">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#1D1D1D] rounded-[40px] py-12 md:py-14 text-center overflow-hidden"
        >
          {/* Pixel background */}
          <img
            src="/images/ic_pixels.png"
            alt=""
            className="object-cover opacity-50 pointer-events-none absolute inset-0 w-full h-full"
          />

          <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-0">
            <Text as="h2" className="text-2xl sm:text-3xl md:text-4xl tracking-tight text-white mb-6 leading-16">
              Minh bạch là nền tảng của<br />mọi niềm tin
            </Text>

            <p className="text-white text-sm mb-12 leading-5">
              Tại AVIXO, chúng tôi cam kết cung cấp dữ liệu xác thực, được kiểm chứng qua các nền tảng <br /> Myfxbook công khai. Mọi thuật toán đều dựa trên logic toán học, không phải phỏng đoán.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <div className="relative shrink-0 w-5 h-5 mt-0.5">
                  <img src="/images/ic_tick.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="object-contain" />
                </div>
                <span className="text-white font-semibold text-lg">Track Record & Minh bạch</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative shrink-0 w-5 h-5 mt-0.5">
                  <img src="/images/ic_commit.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="object-contain" />
                </div>
                <span className="text-white font-semibold text-lg">Pháp lý & cam kết</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </GlowBackground>
  );
}
