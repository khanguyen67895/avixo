"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { aboutMainCards as mainCards, aboutSubCards as subCards } from "@/lib/constants";
import Text from "@/components/ui/label";
import { GlowBackground } from "@/components/common/GlowBackground";
import { useT } from "@/lib/i18n";

export function AboutLegal() {
  const t = useT();
  return (
    <GlowBackground src="/images/ic_bg1.png" className="w-full pb-12">
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Text className="text-4xl md:text-4xl text-[#1D1D1D] leading-16 mb-6">{t("Pháp lý & minh bạch")}</Text>
          <p className="text-[#505050] text-base leading-6">
            {t("AVIXO tuyệt đối không đưa ra các cam kết lợi nhuận cố định hay bảo đảm vốn dưới bất kỳ hình thức nào. Chúng tôi giáo dục người dùng về tính rủi ro của thị trường tài chính và khuyến khích sự thận trọng trong mọi quyết định.")}
          </p>
        </motion.div>

        {/* 2 main cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {mainCards.map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-8"
            >
              <div className="w-12 h-12 relative mb-5">
                <img src={icon} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="object-contain" />
              </div>
              <Text className="text-2xl font-semibold text-[#1D1D1D] mb-3">{t(title)}</Text>
              <p className="text-base text-[#1D1D1D] leading-relaxed">{t(desc)}</p>
            </motion.div>
          ))}
        </div>

        {/* 3 sub cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subCards.map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-zinc-100 shadow-sm p-6 flex flex-col items-start gap-4"
            >
              <div className="relative w-12 h-12 shrink-0">
                <img src={icon} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="object-contain" />
              </div>
              <div>
                <Text className="text-2xl font-semibold text-[#1D1D1D] mb-2">{t(title)}</Text>
                <p className="text-base text-[#1D1D1D] leading-6">{t(desc)}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </GlowBackground>
  );
}
