"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { trackPhilosophyFeatures as features } from "@/lib/constants";
import Text from "@/components/ui/label";
import { GlowBackground } from "@/components/common/GlowBackground";

export function TrackPhilosophy() {
  return (
    <GlowBackground src="/images/ic_bg1.png" className="w-full py-24 pt-12">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-80 shrink-0 pt-4 self-center"
          >
            <Text as="h2" className="text-3xl md:text-4xl text-[#1D1D1D] leading-16 mb-6">
              Triết lý<br />Minh Bạch
            </Text>
            <p className="text-[#505050] text-base leading-6">
              Tại AVIXO, chúng tôi định nghĩa lại sự tin cậy trong quản lý tài sản số thông qua dữ liệu cứng và quyền truy cập trực tiếp.
            </p>
          </motion.div>

          {/* Right — feature list */}
          <div className="flex-1 flex flex-col gap-4">
            {features.map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-5 p-5"
              >
                <div className="relative w-24 h-24 shrink-0">
                  <img src={icon} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="object-contain" />
                </div>
                <div className="flex flex-col bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold text-[#000000] text-lg mb-1">{title}</h3>
                  <p className="text-sm text-[#505050] leading-5">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </GlowBackground>
  );
}
