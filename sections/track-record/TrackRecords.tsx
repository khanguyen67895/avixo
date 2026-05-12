"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { trackRecords as records } from "@/lib/constants";
import Text from "@/components/ui/label";
import { GlowBackground } from "@/components/common/GlowBackground";
import { useT } from "@/lib/i18n";

export function TrackRecords() {
  const t = useT();
  return (
    <GlowBackground src="/images/ic_bg1.png" className="w-full py-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Text as="h2" className="text-2xl md:text-4xl text-[#1D1D1D] leading-16 mb-4">
            {t("Những Con Số Minh Bạch")}<br />{t("Có Thể Kiểm Chứng.")}
          </Text>
          <p className="text-[#131313] text-base">{t("Kết quả giao dịch thực tế từ hệ thống AVIXO.")}</p>
        </motion.div>

        {/* Phone + stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {records.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col items-center gap-6 h-full"
            >
              {/* Phone mockup */}
              <div className="relative w-[313.5px] h-[654.96px]">
                <img src={r.phone} alt="trading screen" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="object-contain drop-shadow-xl" />
              </div>

              {/* Stat card */}
              <div className="w-full flex-1 rounded-2xl border border-zinc-100 bg-white shadow-[0_4px_24px_0_rgba(0,0,0,0.07)] p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[14px] text-[#131313] mb-1">{t("ROI")}</p>
                    <Text className="text-[24px] text-[#4CAF50]">{r.roi}</Text>
                  </div>
                  <div className="text-right">
                    <p className="text-[14px] text-[#131313] mb-1">{t("Max drawdown")}</p>
                    <Text className={`text-[24px] ${i === 1 ? "text-[#FF6900]" : "text-[#FF4D4D]"}`}>{r.drawdown}</Text>
                  </div>
                </div>
                <p className="text-sm text-[#1D1D1D] leading-relaxed whitespace-pre-line">{t(r.desc)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </GlowBackground>
  );
}
