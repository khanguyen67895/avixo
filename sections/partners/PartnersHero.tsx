"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/components/ui/label";

export function PartnersHero() {
  return (
    <section className="relative w-full min-h-150 bg-black flex items-center overflow-hidden">
      {/* Pixel dot-grid background */}
      <div
        className="absolute z-50 inset-0 bg-center bg-cover bg-no-repeat opacity-50 pointer-events-none"
        style={{ backgroundImage: "url('/images/ic_pixels.png')" }}
      />

      <div className="relative z-10 w-full max-w-8xl mx-auto flex items-center">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex-1 flex flex-col pl-80"
        >
          <Text as="h1" className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            AVIXO Giải pháp<br />đầu tư ứng dụng<br />
            <span className="bg-linear-to-r from-[#37C0FF] to-[#0076FF] bg-clip-text text-transparent">
              Big Data &amp; AI
            </span>
          </Text>
          <p className="text-white text-sm md:text-base">
            Phục vụ nhà đầu tư cá nhân với độ chính xác lượng tử, tối ưu hóa lợi nhuận<br />
            thông qua phân tích dữ liệu thời gian thực và quản trị rủi ro tự động.
          </p>
        </motion.div>

        {/* Right — sphere video + hands */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:block relative flex-1 h-130"
        >
          {/* Plexus sphere video — centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <video
              src="/videos/vecteezy_rotating-plexus-sphere-futuristic-digital-network-background_75759082.mp4"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              className="w-180 h-180 object-contain mix-blend-screen"
            />
          </div>

          {/* Hand 1 — top right, pointing toward sphere */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-0 left-0 w-160 h-55"
            style={{ maskImage: "linear-gradient(to right, transparent 0%, black 7%)" }}
          >
            <Image
              src="/images/ic_hand1.png"
              alt=""
              fill
              className="object-contain object-top-left"
            />
          </motion.div>

          {/* Hand 2 — bottom right */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-0 right-0 w-60 h-50"
          >
            <Image
              src="/images/ic_hand2.png"
              alt=""
              fill
              className="object-contain object-bottom-right"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
