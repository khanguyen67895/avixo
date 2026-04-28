"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { trackRecords as records } from "@/lib/constants";

function BlueStar({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 3L26 22L45 24L26 26L24 45L22 26L3 24L22 22Z" fill="url(#bsg2)" opacity="0.9" />
        <defs>
          <linearGradient id="bsg2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#37C0FF" />
            <stop offset="100%" stopColor="#0076FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function TrackRecords() {
  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      {/* Decorative blue stars */}
      <BlueStar className="absolute top-16 right-4 opacity-70" />
      <BlueStar className="absolute top-1/2 right-0 opacity-50" />
      <BlueStar className="absolute bottom-32 left-0 opacity-60" />

      {/* Vertical accent lines */}
      <div className="absolute top-0 right-12 w-px h-64 bg-gradient-to-b from-transparent via-[#37C0FF]/30 to-transparent" />
      <div className="absolute bottom-0 right-12 w-px h-64 bg-gradient-to-b from-transparent via-[#37C0FF]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 leading-tight mb-4">
            Những con số minh bạch<br />có thể kiểm chứng.
          </h2>
          <p className="text-zinc-500 text-base">Kết quả giao dịch thực tế từ hệ thống AVIXO .</p>
        </motion.div>

        {/* Phone + stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {records.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Phone mockup */}
              <div className="relative w-56 h-[420px]">
                <Image src={r.phone} alt="trading screen" fill className="object-contain drop-shadow-xl" />
              </div>

              {/* Stat card */}
              <div className="w-full rounded-2xl border border-zinc-150 bg-white shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-zinc-400 mb-1">ROI</p>
                    <p className="text-2xl font-black text-[#4CAF50]">{r.roi}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-zinc-400 mb-1">Max drawdown</p>
                    <p className="text-2xl font-black text-[#FF4D4D]">{r.drawdown}</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed whitespace-pre-line">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
