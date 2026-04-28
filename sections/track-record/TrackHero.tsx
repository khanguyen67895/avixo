"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { trackStats as stats } from "@/lib/constants";
import Text from "@/components/ui/label";

export function TrackHero() {
  return (
    <section className="relative w-full min-h-200 bg-[#000000] flex flex-col items-center justify-center overflow-hidden pb-70">
      {/* Pixel overlay */}
      <Image src="/images/ic_pixels.png" alt="" fill className="object-cover pointer-events-none" />

      {/* Plexus sphere video */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute bottom-[-20%] sm:bottom-[-40%] md:bottom-[-70%] left-1/2 -translate-x-1/2 w-full h-[105%] flex items-start pointer-events-none"
      >
        <div className="relative w-full aspect-video mix-blend-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            className="w-full h-full object-cover"
          >
            <source src="/videos/vecteezy_rotating-plexus-sphere-futuristic-digital-network-background_75759082 (1).mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* Border arc — very bottom */}
      <div className="absolute -bottom-68 left-0 w-full pointer-events-none z-20">
        <Image src="/images/ic_border_hero.png" alt="" width={1920} height={400} className="w-full h-auto brightness-150 drop-shadow-[0_0_25px_rgba(0,180,255,0.8)] mix-blend-screen" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <Text as="h1" className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white mb-2 font-science">
          Số liệu thực chiến
        </Text>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-white text-base md:text-lg max-w-xl mb-14"
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
              <Text className="text-3xl text-[#37C0FF]">{s.value}</Text>
              <span className="text-[11px] font-semibold text-zinc-400 tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
