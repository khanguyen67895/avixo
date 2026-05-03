"use client";

import Button from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/components/ui/label";

export function Hero() {
  const stats = [
    { value: "63K+", label: "GLOBAL USER" },
    { value: "6+", label: "LIVE PRODUCTS" },
    { value: "15+", label: "YEARS EXPERIENCE" },
    { value: "5+", label: "GLOBAL MARKET" },
  ];

  return (
    <section className="relative w-full md:min-h-screen bg-black flex flex-col items-center pt-30 md:pt-32 pb-10 md:pb-20 overflow-hidden">
      <div
        className="order-2 md:order-1 relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl mx-auto bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/ic_pixels.png')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text as="h2" className="text-3xl sm:text-4xl md:text-6xl tracking-tight text-white mb-2 font-science">
            Công Nghệ Định Lượng
          </Text>
          <Text as="h2" className="text-3xl sm:text-4xl md:text-6xl tracking-tight text-[#37C0FF] mb-4">
            Tài Chính Toàn Cầu
          </Text>
          <h2 className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white mb-6 px-2">
            Hệ sinh thái đầu tư thông minh ứng dụng Big Data & AI, có 15 năm kinh nghiệm thực chiến, phục vụ nhà đầu tư cá nhân, tổ chức và cộng đồng IB toàn cầu
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-manrope flex flex-wrap justify-center gap-6 md:gap-16 mb-10 md:mb-16 px-4 md:px-0"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start">
              <span className="text-xl md:text-2xl font-bold text-[#00b4ff] mb-2">{stat.value}</span>
              <span className="text-xs tracking-widest text-zinc-500 uppercase">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-125 mx-auto"
        >
          <Button href="/about" fullWidth className="font-manrope font-semibold">Khám phá AVIXO</Button>
          <Button href="/solutions" variant="outline" fullWidth className="font-manrope font-semibold">Tìm hiểu nhà đầu tư</Button>
        </motion.div>
      </div>

      {/* Hero Border Arc — hidden on mobile */}
      <div className="hidden md:flex order-1 md:order-2 w-full items-center justify-center relative z-20 pointer-events-none">
        <Image src="/images/ic_border_hero.png" alt="Border" width={1920} height={400} className="w-full h-auto brightness-150 contrast-125 drop-shadow-[0_0_25px_rgba(0,180,255,0.8)] mix-blend-screen" />
      </div>

      {/* Globe Video — hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="hidden md:flex absolute bottom-[-70%] left-1/2 -translate-x-1/2 w-full h-[115%] items-start"
      >
        <div className="relative w-full aspect-video mix-blend-screen opacity-90">
          <video
            autoPlay
            loop
            muted
            disablePictureInPicture
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/vecteezy_digital-earth-hologram-with-global-data-connections_75759093.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </section>
  );
}
