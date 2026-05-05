"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { aboutValues as values } from "@/lib/constants";
import Text from "@/components/ui/label";

export function AboutValues() {
  return (
    <section className="w-full bg-white pb-24 pt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-80 shrink-0 self-center"
          >
            <Text className="text-4xl md:text-4xl text-[#1D1D1D] leading-tight mb-6">
              Giá trị cốt lõi<br />tại AVIXO
            </Text>
            <p className="text-[#505050] text-base leading-relaxed">
              AVIXO vận hành như một đơn vị cung cấp giải pháp và công cụ công nghệ giao dịch tiên tiến. Chúng tôi khẳng định:
            </p>
          </motion.div>

          {/* Right */}
          <div className="flex-1 flex flex-col gap-4">
            {values.map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-5 bg-white p-5"
              >
                <div className="relative w-24 h-24 shrink-0">
                  <img src={icon} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="object-contain" />
                </div>
                <div className="flex flex-col bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold text-lg text-[#1D1D1D] mb-1">{title}</h3>
                  <p className="text-sm text-[#505050] leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
