/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tag from "@/components/ui/tag";
import Button from "@/components/ui/button";
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
          <Text as="h2" className="text-3xl md:text-4xl tracking-tight text-[#1D1D1D] leading-16">
            Giải pháp chiến lược
          </Text>
          <p className="max-w-2xl mx-auto text-base text-[#505050] leading-6">
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
                animate={{ opacity: isActive ? 1 : 0.1 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                onHoverStart={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                className="relative w-full md:flex-1 flex flex-col overflow-hidden rounded-[20px] p-2 cursor-pointer border border-[#EFEFEF] bg-[#FCFCFC] shadow-[inset_0_-1px_1.3px_0_rgba(0,0,0,0.20),0_61px_17px_0_rgba(0,0,0,0),0_39px_16px_0_rgba(0,0,0,0.01),0_22px_13px_0_rgba(0,0,0,0.02),0_10px_10px_0_rgba(0,0,0,0.04),0_2px_5px_0_rgba(0,0,0,0.04)]"
              >
                <div className={`relative w-full md:flex-1 flex flex-col overflow-hidden rounded-xl p-6 cursor-pointer transition-all ${
                  isActive
                    ? "bg-white shadow-[0_8px_40px_rgba(0,0,0,0.10)] border-2 border-white z-10"
                    : "bg-[#EFEFEF] shadow-[0_8px_40px_rgba(0,0,0,0.10)] border-2 border-[#EFEFEF]"
                }`}>
                  {/* Badge — centered */}
                  <div className="relative z-10 mb-4 flex justify-center">
                    <Tag bg={isActive ? "bg-[#4CAF50]" : "bg-[#FFE1CC]"} className="transition-colors duration-300">
                      {bot.type}
                    </Tag>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 w-full flex justify-center mb-4">
                    <img src={bot.icon} alt={bot.name} width={280} height={280} className="object-contain" />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 font-semibold text-[#1D1D1D] text-center leading-8 text-lg mb-3">
                    {bot.name}
                  </h3>

                  {/* Mobile: always show content */}
                  <div className="md:hidden relative z-10">
                    <p className="text-sm text-[#1D1D1D] text-center leading-5 mb-6">{bot.desc}</p>
                    <Button href={bot.href} className="mx-auto">{bot.button}</Button>
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
                        className="hidden md:block relative z-10 overflow-hidden pb-4"
                      >
                        <p className="text-sm text-[#1D1D1D] text-center leading-5 mb-6">{bot.desc}</p>
                        <Button href={bot.href} className="mx-auto">
                          {bot.button}
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </GlowBackground>
  );
}
