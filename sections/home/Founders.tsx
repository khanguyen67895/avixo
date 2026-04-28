"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/components/ui/label";
import { GlowBackground } from "@/components/common/GlowBackground";
import { homeFounders as founders } from "@/lib/constants";

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
            className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 my-4"
          >
            Đội ngũ sáng lập
          </Text>
          <p className="text-zinc-500">
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
              className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.07)] overflow-hidden text-left"
            >
              {/* Avatar */}
              <div
                className="relative w-full"
                style={{
                  background: "linear-gradient(to bottom, #EBF5FF, #F5F9FF)",
                  aspectRatio: "4/3",
                }}
              >
                <Image
                  src={founder.avatar}
                  alt={founder.name}
                  fill
                  className="object-contain object-bottom"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">
                  {founder.name}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                  {founder.desc}
                </p>
                <span className="block w-full text-center bg-zinc-100 rounded-full px-5 py-3 text-sm font-semibold text-zinc-800">
                  {founder.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </GlowBackground>
  );
}
