"use client";

import Image from "next/image";
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
            className="md:w-80 shrink-0 pt-4"
          >
            <Text as="h2" className="text-4xl md:text-5xl text-zinc-900 leading-tight mb-6">
              Triết lý<br />Minh Bạch
            </Text>
            <p className="text-zinc-500 text-base leading-relaxed">
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
                className="flex items-center gap-5 bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="relative w-18 h-18 shrink-0">
                  <Image src={icon} alt="" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-1">{title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </GlowBackground>
  );
}
