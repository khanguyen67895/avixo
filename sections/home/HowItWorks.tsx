"use client";

import Text from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Cpu, Brain, Globe } from "lucide-react";
import { GlowBackground } from "@/components/common/GlowBackground";

const steps = [
  {
    bg: "/images/ic_bg_application_ai.png",
    line: "/images/ic_line_application_ai.png",
    title: "Ứng dụng công nghệ AI và Big data",
    desc: "Khai thác sức mạnh của Big Data và AI để phân tích hàng triệu biến số thị trường trong thời gian thực, loại bỏ hoàn toàn yếu tố cảm xúc trong quyết định đầu tư.",
    Icon: Cpu,
  },
  {
    bg: "/images/ic_bg_mindset.png",
    line: "/images/ic_line_mindset.png",
    title: "Huấn luyện tư duy đầu tư chuyên nghiệp",
    desc: "Chuyển giao phương pháp luận và tư duy định lượng cho cộng đồng, giúp nhà đầu tư làm chủ tài chính một cách khoa học.",
    Icon: Brain,
  },
  {
    bg: "/images/ic_bg_ibglobal.png",
    line: "/images/ic_line_ibglobal.png",
    title: "Phát triển mạng lưới IB Global",
    desc: "Xây dựng hệ sinh thái liên kết toàn cầu, hỗ trợ các đối tác phát triển bền vững dựa trên giá trị thực và tính minh bạch tuyệt đối.",
    Icon: Globe,
  },
];

const CARD_H = 540;
const STEP_Y = [108, 270, 432];
const TEXT_Y = [108, 200, 300];
const CARD_W = 45;

export function HowItWorks() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % steps.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <GlowBackground
      src="/images/ic_bg1.png"
      as="section"
      className="w-full pb-24 md:pb-32 pt-8 overflow-hidden"
    >

      {/* Heading */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <Text className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Phương thức hoạt động của AVIXO
          </Text>
          <p className="max-w-2xl mx-auto text-base text-zinc-500 px-2">
            Chúng tôi không chỉ cung cấp công cụ, chúng tôi xây dựng một nền tảng tư duy
            và công nghệ bền vững cho sự thịnh vượng tài chính toàn cầu.
          </p>
        </motion.div>
      </div>

      {/* ── MOBILE layout (below md) ── */}
      <div className="md:hidden relative z-10 w-full max-w-6xl px-4">
        {/* Image card */}
        <div
          className="relative w-full rounded-[30px] overflow-hidden"
          style={{ background: "linear-gradient(to bottom, #F8FCFF, #EBECF0)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`mb-bg-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image src={steps[active].bg} alt="" fill className="object-contain mix-blend-multiply" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Step icon tabs */}
        <div className="flex justify-center gap-4 mb-6">
          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                  isActive
                    ? "bg-[#37C0FF] text-white shadow-md"
                    : "bg-zinc-100 text-zinc-400"
                }`}
              >
                <step.Icon size={22} />
              </button>
            );
          })}
        </div>

        {/* Text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`mb-txt-${active}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center px-2"
          >
            <Text as="h3" className="text-xl font-bold text-zinc-900 mb-3 leading-snug">
              {steps[active].title}
            </Text>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {steps[active].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── DESKTOP layout (md+) ── */}
      <div className="hidden md:block relative z-10 w-full max-w-7xl mx-36 -mt-8 px-4">
        <div className="relative flex gap-0" style={{ height: CARD_H }}>

          {/* LEFT — image card */}
          <div
            className="relative shrink-0 rounded-[30px] overflow-hidden"
            style={{ width: `${CARD_W}%`, background: "linear-gradient(to bottom, #F8FCFF, #EBECF0)" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image src={steps[active].bg} alt="" fill />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CENTER — icon column */}
          <div
            className="absolute z-20 w-20"
            style={{ left: `calc(${CARD_W}% - 40px)`, top: 0, bottom: 0 }}
          >
            <div
              className="absolute left-1/2 -translate-x-1/2 w-px bg-zinc-200"
              style={{ top: STEP_Y[0], bottom: CARD_H - STEP_Y[2] }}
            />

            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <div
                  key={i}
                  className="absolute left-1/2 z-10"
                  style={{ top: STEP_Y[i], transform: "translate(-50%, -50%)" }}
                >
                  <div className="relative flex items-center">
                    <button onClick={() => setActive(i)} className="flex items-center justify-center">
                      {isActive ? (
                        <motion.div
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="relative w-24 h-24 rounded-full flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg, #4299e1 0%, #38b2ac 55%, #68d391 100%)", padding: "2px" }}
                        >
                          <div className="w-full h-full rounded-full bg-[#f0f2f5] flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
                              <step.Icon className="text-[#37C0FF]" size={24} />
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="w-20 h-20 rounded-full bg-[#f0f2f5] flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                            <step.Icon className="text-zinc-400" size={20} />
                          </div>
                        </div>
                      )}
                    </button>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        style={{ originX: "left" }}
                        className={`absolute left-full w-24 h-16 pointer-events-none ${
                          i === 0 ? "top-7" : i === 2 ? "bottom-7" : ""
                        }`}
                      >
                        <Image src={step.line} alt="" fill className="object-contain object-left" />
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT — text */}
          <div className="relative flex-1">
            <div className="absolute top-6 right-2 pointer-events-none">
              <Image src="/images/ic_earth_big.png" alt="" width={110} height={110} className="object-contain opacity-70" />
            </div>
            <div className="absolute top-24 right-24 pointer-events-none">
              <Image src="/images/ic_earth.png" alt="" width={52} height={52} className="object-contain opacity-50" />
            </div>
            <div className="absolute bottom-16 right-8 pointer-events-none">
              <Image src="/images/ic_earth.png" alt="" width={36} height={36} className="object-contain opacity-35" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${active}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute pr-4 bottom-10"
                style={{ top: TEXT_Y[active], left: 144, right: 0, transform: "translateY(-50%)" }}
              >
                <Text as="h3" className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4 leading-snug">
                  {steps[active].title}
                </Text>
                <p className="text-zinc-500 text-base leading-relaxed max-w-xs">
                  {steps[active].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </GlowBackground>
  );
}
