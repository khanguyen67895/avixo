"use client";
/* eslint-disable @next/next/no-img-element */

import founderImg from "@/public/images/founder.png";
import { GlowBackground } from "@/components/common/GlowBackground";
import Text from "@/components/ui/label";
import { useT } from "@/lib/i18n";

export function AboutFounders() {
  const t = useT();
  return (
    <GlowBackground src="/images/ic_bg1.png" className="w-full py-12 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <Text className="text-4xl md:text-4xl text-[#1D1D1D] leading-16 mb-3">{t("Đội ngũ sáng lập")}</Text>
          <p className="text-[#505050] text-base leading-6">{t("Ba Founders — ba thế mạnh bổ trợ nhau — một hệ sinh thái không thể sao chép.")}</p>
        </div>

        <div className="relative w-full">
          <img src={founderImg.src} alt="Founders" className="w-full h-auto object-contain" />
        </div>

      </div>
    </GlowBackground>
  );
}
