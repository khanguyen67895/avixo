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
    <section className="relative w-full min-h-screen h-[813px] bg-black flex flex-col items-center pt-32 pb-20 overflow-hidden">
      <div
        className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl mx-auto bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/ic_pixels.png')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text as="h1" className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-2 font-science">
            Công nghệ Định lượng
          </Text>
          <Text as="h2" className="text-4xl md:text-6xl font-semibold tracking-tight text-[#37C0FF] mb-4">
            Tài chính toàn cầu
          </Text>
          <h2 className="max-w-3xl mx-auto text-lg text-white mb-6">
            Hệ sinh thái đầu tư thông minh ứng dụng Big Data & AI, có 15 năm kinh <br /> nghiệm thực chiến, phục vụ nhà đầu tư cá nhân, tổ chức và cộng đồng IB toàn cầu
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16"
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
          className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-[500px] mx-auto"
        >
          <Button href="/explore">Khám phá AVIXO</Button>
          <Button href="/investors" variant="outline">Tìm hiểu nhà đầu tư</Button>
        </motion.div>
      </div>

      {/* Hero Border Arc */}
      <div className="w-full h-full flex items-center justify-center relative z-10 pointer-events-none">
        <Image src="/images/ic_border_hero.png" alt="Border" width={1920} height={400} className="w-full h-auto brightness-150 contrast-125 drop-shadow-[0_0_25px_rgba(0,180,255,0.8)] mix-blend-screen" />
      </div>

      {/* Globe Video */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute bottom-[-50%] md:bottom-[-70%] left-1/2 -translate-x-1/2 w-full h-[115%] flex items-start"
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
