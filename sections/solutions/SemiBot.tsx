"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import Text from "@/components/ui/label";
import Button from "@/components/ui/button";
import Tag from "@/components/ui/tag";
import { GlowBackground } from "@/components/common/GlowBackground";
import { semiBotFeatures as features } from "@/lib/constants";
import { useT } from "@/lib/i18n";

export function SemiBot() {
  const t = useT();
  return (
    <GlowBackground src="/images/ic_bg1.png" as="section" id="semi-bot" className="w-full pb-20 mt-10">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-4">
            <Tag bordered>SEMI BOT</Tag>
          </div>
          <Text as="h2" className="text-3xl md:text-4xl text-[#1D1D1D] leading-16">
            {t("Giải pháp giao dịch bán tự động")}
          </Text>
          <p className="text-[#505050] text-base md:text-lg max-w-2xl mx-auto leading-6">
            {t("Phù hợp với nhà đầu tư đã có kinh nghiệm, muốn giữ quyền quyết định cuối cùng và cần công cụ trợ lực mạnh mẽ.")}
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8 md:gap-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <Text as="h3" className="text-2xl md:text-2xl font-semibold text-[#1D1D1D] mb-2">
            {t("Semi Boomerang")}<br />&amp; {t("Smart Money")}
          </Text>
          <p className="text-[#505050] text-[16px] mb-8 leading-6">
            {t("Chiến lược hồi giá kết hợp Smart Money / Liquidity / Order Flow. Hỗ trợ phân tích vùng cung cầu, BOS, CHoCH")}
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
                <img src={f.icon} alt="" className="w-6 h-6 object-contain shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-zinc-900 text-lg">{t(f.title)}</p>
                  <p className="text-[#505050] text-[14px] mt-0.5 leading-relaxed">{t(f.desc)}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Mean Reversion", "Order Flow", "Intraday"].map(t => <Tag bordered key={t}>{t}</Tag>)}
          </div>
          <div className="flex-1 pl-25">
            <Button href="#" className="w-1/2">{t("Download now")}</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-full max-w-sm md:max-w-none aspect-4/3">
            <img src="/images/ic_phone1.png" alt="Semi Bot App" className="object-contain w-157.25 h-117.75 rounded-[40px]" />
          </div>
        </motion.div>
      </div>
    </GlowBackground>
  );
}
