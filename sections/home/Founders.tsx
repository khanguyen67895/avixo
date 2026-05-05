/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Text from "@/components/ui/label";
import { GlowBackground } from "@/components/common/GlowBackground";
import { homeFounders as founders } from "@/lib/constants";
import Button from "@/components/ui/button";

export function Founders() {
  return (
    <GlowBackground
      src="/images/ic_bg1.png"
      variant="perimeter"
      as="section"
      className="w-full"
    >
      <div className="relative z-10 w-full mb-20 max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          <Text
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#1D1D1D] my-4 leading-16"
          >
            Đội ngũ sáng lập
          </Text>
          <p className="text-[#505050] text-base leading-6">
            Ba Founders — ba thế mạnh bổ trợ nhau — một hệ sinh thái không thể
            sao chép.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white w-77.25 h-auto rounded-[40px] shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-2"
            >
              {/* Avatar */}
                <img
                  src={founder.avatar}
                  alt={founder.name}
                  className="w-full h-70 rounded-4xl object-contain"
                />

              {/* Content */}
              <div className="py-6 px-3">
                <h3 className="text-lg font-semibold text-[#1D1D1D] leading-8 mb-2">
                  {founder.name}
                </h3>
                <p className="text-sm text-[#505050] leading-5 mb-6">
                  {founder.desc}
                </p>
                <div className="flex justify-center">
                  <span className="w-70 text-center rounded-4xl shadow-[inset_0px_-2px_4px_0px_rgba(137,137,137,0.08)] bg-zinc-100 px-5 py-3 text-sm text-[#1D1D1D]">
                    {founder.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </GlowBackground>
  );
}
