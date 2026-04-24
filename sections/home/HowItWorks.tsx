"use client";

import Text from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Cpu, Brain, Globe } from "lucide-react";

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

export function HowItWorks() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % steps.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">

      {/* Heading */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Text className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Phương thức hoạt động của AVIXO
          </Text>
          <p className="max-w-2xl mx-auto text-lg text-zinc-500">
            Chúng tôi không chỉ cung cấp công cụ, chúng tôi xây dựng một nền tảng tư duy
            và công nghệ bền vững cho sự thịnh vượng tài chính toàn cầu.
          </p>
        </motion.div>
      </div>

      {/* Main content area — bg sits behind this */}
      <div className="relative w-full max-w-6xl mx-auto px-4">

        {/* Background svg — behind content, like Solutions */}
        <div className="absolute inset-0 -top-10 -bottom-10 pointer-events-none">
          <Image
            src="/images/bg_howtoit.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Layout row */}
        <div className="relative z-10 flex items-stretch gap-0">

          {/* LEFT — image card */}
          <div className="relative w-[42%] shrink-0 h-115 rounded-[40px] overflow-hidden bg-[#f0f2f5]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={steps[active].bg}
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CENTER — vertical line + step circles (in normal flow, not absolute) */}
          <div className="relative flex flex-col items-center justify-between w-20 shrink-0 py-10">
            {/* Vertical connecting line */}
            <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-px bg-zinc-200" />

            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <div key={i} className="relative z-10 flex items-center">
                  <button
                    onClick={() => setActive(i)}
                    className="flex items-center justify-center"
                  >
                    <motion.div
                      animate={{
                        width: isActive ? 56 : 40,
                        height: isActive ? 56 : 40,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`rounded-full flex items-center justify-center border-2 bg-white shadow-md transition-colors ${
                        isActive ? "border-[#37C0FF]" : "border-zinc-200"
                      }`}
                    >
                      <step.Icon
                        className={`transition-colors ${isActive ? "text-[#37C0FF]" : "text-zinc-400"}`}
                        size={isActive ? 24 : 18}
                      />
                    </motion.div>
                  </button>

                  {/* Connector line — absolute, extends to the right into content area */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      style={{ originX: "left" }}
                      className="absolute left-full w-20 h-16 pointer-events-none"
                    >
                      <Image
                        src={step.line}
                        alt=""
                        fill
                        className="object-contain object-left"
                      />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT — text content + earth decorations */}
          <div className="relative flex-1 flex flex-col justify-center pl-20">

            {/* Earth decorations */}
            <div className="absolute top-6 right-2 pointer-events-none">
              <Image
                src="/images/ic_earth_big.png"
                alt=""
                width={110}
                height={110}
                className="object-contain opacity-70"
              />
            </div>
            <div className="absolute top-24 right-24 pointer-events-none">
              <Image
                src="/images/ic_earth.png"
                alt=""
                width={52}
                height={52}
                className="object-contain opacity-50"
              />
            </div>
            <div className="absolute bottom-16 right-8 pointer-events-none">
              <Image
                src="/images/ic_earth.png"
                alt=""
                width={36}
                height={36}
                className="object-contain opacity-35"
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${active}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4 leading-snug">
                  {steps[active].title}
                </h3>
                <p className="text-zinc-500 text-base leading-relaxed max-w-xs">
                  {steps[active].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
