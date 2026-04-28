"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/components/ui/label";
import Button from "@/components/ui/button";
import Tag from "@/components/ui/tag";
import { GlowBackground } from "@/components/common/GlowBackground";
import { semiBotFeatures as features } from "@/lib/constants";

export function SemiBot() {
  return (
    <GlowBackground src="/images/ic_bg1.png" as="section" className="w-full bg-white pb-20 mt-10">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-4">
            <Tag>SEMI BOT</Tag>
          </div>
          <Text as="h2" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Giải pháp giao dịch bán tự động
          </Text>
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto">
            Phù hợp với nhà đầu tư đã có kinh nghiệm, muốn giữ quyền quyết định cuối cùng và cần công cụ trợ lực mạnh mẽ.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <Text as="h3" className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">
            Semi Boomerang<br />&amp; Smart Money
          </Text>
          <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
            Chiến lược hồi giá kết hợp Smart Money / Liquidity / Order Flow. Hỗ trợ phân tích vùng cung cầu, BOS, CHoCH
          </p>

          <div className="flex flex-col gap-6 mb-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-3 items-start"
              >
                <Image src={f.icon} alt="" width={20} height={20} className="w-5 h-5 object-contain" />
                <div>
                  <p className="font-semibold text-zinc-900 text-sm">{f.title}</p>
                  <p className="text-zinc-500 text-xs mt-0.5 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-8 ml-30">
            {["Mean Reversion", "Order Flow", "Intraday"].map(t => <Tag key={t}>{t}</Tag>)}
          </div>

          <div className="flex-1">
            <Button href="#" className="w-1/2 ml-35">Download now</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex"
        >
          <div className="relative w-full max-w-200 aspect-4/3">
            <Image src="/images/ic_phone1.png" alt="Semi Bot App" fill className="object-contain" />
          </div>
        </motion.div>
      </div>
    </GlowBackground>
  );
}
