"use client";
/* eslint-disable @next/next/no-img-element */

import Text from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { GlowBackground } from "@/components/common/GlowBackground";
import {
  howItWorksSteps as steps,
  HOW_IT_WORKS_CARD_H as CARD_H,
  HOW_IT_WORKS_STEP_Y as STEP_Y,
  HOW_IT_WORKS_TEXT_Y as TEXT_Y,
  HOW_IT_WORKS_CARD_W as CARD_W,
} from "@/lib/constants";

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
          <Text className="text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#1D1D1D] mb-4">
            Phương thức hoạt động của AVIXO
          </Text>
          <p className="max-w-2xl mx-auto text-sm text-[#505050] px-2">
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
              <img src={steps[active].bg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="object-contain mix-blend-multiply" />
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
                className="flex flex-col items-center gap-1.5 transition-all"
                style={{ opacity: isActive ? 1 : 0.45 }}
              >
                <img src={step.stepIcon} alt="" className="w-24 h-24 object-contain" />
                <div className={`h-0.5 rounded-full transition-all duration-300 ${isActive ? "w-8 bg-[#0076FF]" : "w-0 bg-transparent"}`} />
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
      <div className="hidden md:block relative z-10 w-full max-w-7xl mx-36 -mt-5 px-5">
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
                <img src={steps[active].bg} className="object-contain mix-blend-multiply" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
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
                          className="w-24 h-24 rounded-full p-px"
                          style={{ background: "linear-gradient(135deg, #4299e1 0%, #38b2ac 55%, #68d391 100%)" }}
                        >
                          <div className="w-full h-full rounded-full overflow-hidden" style={{ background: "#EFEFEF" }}>
                            <img src={step.stepIcon} alt="" className="w-full h-full object-contain" />
                          </div>
                        </motion.div>
                      ) : (
                        <div className="w-24 h-24">
                          <img src={step.stepIcon} alt="" className="w-full h-full object-contain" />
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
                        <img src={step.line} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="object-contain object-left" />
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT — text */}
          <div className="relative flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`earth-big-${active}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className={`absolute pointer-events-none ${
                  active === 0 ? "bottom-6 -right-4" :
                  active === 1 ? "bottom-6 left-8" :
                  "top-18 right-0"
                }`}
              >
                <img src="/images/ic_earth_big.png" alt="" className="object-contain" />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={`earth-${active}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className={`absolute pointer-events-none ${
                  active === 0 ? "top-8 left-18" :
                  active === 1 ? "top-8 right-18" :
                  "top-60 left-18"
                }`}
              >
                <img src="/images/ic_earth.png" alt="" className="object-contain" />
              </motion.div>
            </AnimatePresence>

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
                <Text as="h3" className="text-2xl md:text-2xl font-semibold text-[#1D1D1D] mb-4 leading-8">
                  {steps[active].title}
                </Text>
                <p className="text-[#505050] text-base leading-relaxed max-w-xs">
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
