"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Tag from "@/components/ui/tag";
import Image from "next/image";
import Text from "@/components/ui/label";
import { GlowBackground } from "@/components/common/GlowBackground";
import { strategicBots as bots } from "@/lib/constants";

export function StrategicSolutions() {
  const [activeIdx, setActiveIdx] = useState(1);

  return (
    <GlowBackground
      src="/images/ic_bg1.png"
      variant="perimeter"
      as="section"
      className="w-full pb-24 md:pb-24 overflow-hidden"
    >

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-10"
        >
          <Text as="h2" className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
            Giải Pháp Chiến Lược
          </Text>
          <p className="max-w-2xl mx-auto text-lg text-zinc-500">
            Các thuật toán được tinh chỉnh qua 15 năm thực chiến trên thị trường quốc tế.
          </p>
        </motion.div>

        {/* Cards — equal width, inactive cards vertically centered against active */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-24">
          {bots.map((bot, idx) => {
            const isActive = activeIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onHoverStart={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                className={`relative w-full md:flex-1 flex flex-col overflow-hidden rounded-[28px] p-6 cursor-pointer transition-all ${
                  isActive
                    ? "bg-white shadow-[0_8px_40px_rgba(0,0,0,0.10)] border-2 border-zinc-300 z-10"
                    : "bg-[#F5F6F8] border-[3px] border-white"
                }`}
              >

                {/* Badge — centered */}
                <div className="relative z-10 mb-4 flex justify-center">
                  <Tag bg={isActive ? "bg-[#4CAF50]" : "bg-[#FFE1CC]"} className="transition-colors duration-300">
                    {bot.type}
                  </Tag>
                </div>

                {/* Icon */}
                <div className="relative z-10 w-full flex justify-center mb-4">
                  <Image
                    src={bot.icon}
                    alt={bot.name}
                    width={280}
                    height={280}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="relative z-10 font-bold text-zinc-900 leading-snug text-lg mb-3">
                  {bot.name}
                </h3>

                {/* Mobile: always show content */}
                <div className="md:hidden relative z-10">
                  <p className="text-sm text-zinc-500 leading-relaxed mb-6">{bot.desc}</p>
                  <Link href={bot.href} className="w-fit mx-auto flex bg-linear-to-r from-[#37C0FF] to-[#0090cc] hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold transition-opacity text-sm">
                    {bot.button}
                  </Link>
                </div>

                {/* Desktop: expand on hover */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="hidden md:block relative z-10 overflow-hidden"
                    >
                      <p className="text-sm text-zinc-500 leading-relaxed mb-6">{bot.desc}</p>
                      <Link href={bot.href} className="w-fit mx-auto flex bg-linear-to-r from-[#37C0FF] to-[#0090cc] hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold transition-opacity text-sm">
                        {bot.button}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </GlowBackground>
  );
}
