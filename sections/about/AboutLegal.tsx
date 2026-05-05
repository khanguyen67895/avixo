"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutMainCards as mainCards, aboutSubCards as subCards } from "@/lib/constants";
import Text from "@/components/ui/label";
import { GlowBackground } from "@/components/common/GlowBackground";

export function AboutLegal() {
  return (
    <GlowBackground src="/images/ic_bg1.png" className="w-full py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Text className="text-4xl md:text-5xl font-black text-zinc-900 mb-5">Pháp lý & minh bạch</Text>
          <p className="text-zinc-500 text-base max-w-2xl mx-auto leading-relaxed">
            AVIXO tuyệt đối không đưa ra các cam kết lợi nhuận cố định hay bảo đảm vốn dưới bất kỳ hình thức nào. Chúng tôi giáo dục người dùng về tính rủi ro của thị trường tài chính và khuyến khích sự thận trọng trong mọi quyết định.
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
                <Image src={icon} alt="" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
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
                <Image src={icon} alt="" fill className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 mb-2">{title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </GlowBackground>
  );
}
