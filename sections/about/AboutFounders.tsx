"use client";

import Image from "next/image";
import founderImg from "@/public/images/founder.png";
import { GlowBackground } from "@/components/common/GlowBackground";
import Text from "@/components/ui/label";

export function AboutFounders() {
  return (
    <GlowBackground src="/images/ic_bg1.png" className="w-full py-12 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <Text className="text-4xl md:text-5xl text-zinc-900 mb-3">Đội ngũ sáng lập</Text>
          <p className="text-zinc-400">Ba Founders — ba thế mạnh bổ trợ nhau — một hệ sinh thái không thể sao chép.</p>
        </div>

        <div className="relative w-full">
          <Image src={founderImg} alt="Founders" className="w-full h-auto object-contain" />
        </div>

      </div>
    </GlowBackground>
  );
}
