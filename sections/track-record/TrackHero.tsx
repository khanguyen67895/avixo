"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { trackStats as stats } from "@/lib/constants";

export function TrackHero() {
  return (
    <section className="relative w-full min-h-[580px] bg-[#060d18] flex flex-col items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Globe bg */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[380px] pointer-events-none opacity-60">
        <Image src="/images/ic_earth_big.png" alt="" fill className="object-contain object-bottom" />
      </div>

      {/* Pixel overlay */}
      <Image src="/images/ic_pixels.png" alt="" fill className="object-cover opacity-10 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight tracking-tight"
        >
          Số liệu thực chiến
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-zinc-400 text-base md:text-lg max-w-xl mb-14"
        >
          Minh bạch là nền tảng niềm tin. Mọi con số đều có thể kiểm chứng<br className="hidden md:block" />
          không phải backtest lý thuyết.
        </motion.p>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex flex-col gap-1 text-left backdrop-blur-sm"
            >
              <span className="text-3xl font-black text-[#37C0FF]">{s.value}</span>
              <span className="text-[11px] font-semibold text-zinc-400 tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
