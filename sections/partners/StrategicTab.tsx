"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import Text from "@/components/ui/label";
import Button from "@/components/ui/button";
import { GlowBackground } from "@/components/common/GlowBackground";
import {
  strategicHighlights as highlights,
  strategicStats as stats,
  strategicCoopModels as coopModels,
} from "@/lib/constants";
import Tag from "@/components/ui/tag";
import { useContactModal } from "@/components/common/contact-context";
import { CTA } from "./CTA";

export function StrategicTab() {
  const { open } = useContactModal();
  return (
    <div className="w-full">

      {/* ── Section 1: Heading + 3 hex cards ── */}
      <GlowBackground src="/images/ic_bg4.png" className="w-full pb-18 pt-10">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center pb-12 mb-12"
          >
            <Text as="h2" className="text-3xl md:text-4xl text-[#1D1D1D] leading-16">
              AVIXO Đối tác chiến lược dài hạn
            </Text>
            <p className="text-[#505050] text-base max-w-2xl mx-auto leading-6">
              AVIXO định hình hệ sinh thái công nghệ đầu tư tài chính thế hệ mới, kết nối giá trị giữa
              các nhà đầu tư, tổ chức và đối tác chiến lược toàn cầu qua nền tảng Quantum Intelligence.
              Cung cấp hạ tầng công nghệ và mạng lưới kết nối vượt trội để tối ưu hóa hiệu suất đầu tư.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center px-8 pt-10 pb-10 rounded-2xl bg-white border border-zinc-200 shadow-[0_4px_24px_0_rgba(0,0,0,0.07)]"
              >
                <div className="relative w-48 h-48 shrink-0">
                  <img src={f.icon} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="object-contain" />
                </div>
                <p className="font-bold text-[#1D1D1D] text-lg mt-6 mb-2">{f.title}</p>
                <p className="text-[#505050] text-base leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </GlowBackground>

      {/* ── Section 2: Minh bạch và dữ liệu ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 pt-10 flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <Text as="h2" className="text-3xl md:text-4xl text-[#1D1D1D] leading-16">
              Minh bạch<br />và dữ liệu
            </Text>
            <p className="text-[#1D1D1D] text-base mx-auto leading-6 mb-8">
              Hệ thống báo cáo minh bạch cho phép đối tác tổ chức <br /> truy xuất và thẩm định dữ liệu vận hành thời gian thực.
            </p>
            <div className="flex-1">
              <Button onClick={open} className="w-1/2">Liên hệ kết nối</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 flex flex-col gap-3"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 px-5"
              >
                
                <img src={s.icon} alt="" className="shrink-0 w-24 h-24 object-contain" />
               
                <div className="flex-1 min-w-0 rounded-2xl p-px" style={{ background: "linear-gradient(to bottom, rgba(229,229,229,0.5) 0%, rgba(229,229,229,0) 100%)" }}>
                  <div className="rounded-2xl px-5 py-4 bg-white shadow-sm">
                    <p className="text-[#505050] text-sm mb-0.5">{s.label}</p>
                    <Text className="font-semibold text-[#1D1D1D] text-xl md:text-2xl">{s.value}</Text>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      {/* ── Section 3: Founder ── */}
      {/* <GlowBackground src="/images/ic_bg4.png" className="w-full overflow-hidden"> */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-white border border-zinc-100 rounded-4xl shadow-[0_4px_40px_rgba(0,0,0,0.06)] flex flex-col md:flex-row items-end gap-0"
          >
            <div className="relative w-full md:w-80 shrink-0 self-end h-72 md:h-120 md:-mt-25 overflow-hidden md:overflow-visible">
              <img src="/images/ic_profile4.png" alt="Trần Đại Nghĩa" className="w-full h-full object-contain object-bottom md:absolute md:bottom-0 md:h-136.75 md:w-96" />
            </div>

            <div className="flex-1 px-10 py-5">
              <Tag bg="bg-[#FFD395]" border="border-[#FFA852]" bordered hasZap={false} className="mb-4 rounded-full">
                Founder Strategic Network &amp; Partnership
              </Tag>
              <Text as="h2" className="text-3xl md:text-6xl text-[#1D1D1D] mb-1 leading-18">
                Trần Đại Nghĩa
              </Text>
              <p className="text-[#013989] text-base font-medium mb-5 leading-6">
                Strategic Partner &amp; Ecosystem Developer
              </p>
              <p className="text-[#1D1D1D] text-base leading-relaxed mb-8 max-w-lg">
                {`Với hơn 15 năm kinh nghiệm trong thị trường tài chính quốc tế, ông Trần Đại Nghĩa đóng vai trò là "kiến trúc sư" kết nối hệ sinh thái AVIXO. Ông tập trung vào việc mở rộng mạng lưới đối tác chiến lược tại khu vực Đông Nam Á và Châu Âu, mang lại những cơ hội hợp tác độc quyền cho các tổ chức đầu tư.`}
              </p>
              <div className="flex gap-12">
                <div>
                  <Text className="text-[#099CFF] text-2xl font-semibold">200+</Text>
                  <p className="text-[#505050] text-base">Đối tác và tổ chức</p>
                </div>
                <div>
                  <Text className="text-[#099CFF] text-2xl font-semibold">15+</Text>
                  <p className="text-[#505050] text-base">Quốc gia hiện diện</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      {/* </GlowBackground> */}

      {/* ── Section 4: Mô hình hợp tác ── */}
      <div className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-10 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden bg-[#0D1B3E] rounded-4xl px-6 py-10 md:px-14 md:py-16"
          >
            <div
              className="absolute inset-0 bg-center bg-cover opacity-20 pointer-events-none"
              style={{ backgroundImage: "url('/images/ic_pixels.png')" }}
            />

            <div className="relative z-10 text-center mb-10">
              <Text as="h2" className="text-3xl md:text-4xl text-white leading-16 mb-4">
                Mô hình hợp tác
              </Text>
              <p className="text-white text-sm leading-6 max-w-xl mx-auto">
                Chúng tôi luôn chào đón các đề xuất hợp tác chiến lược mang tính bền vững và tạo ra giá trị thực cho cộng đồng đầu tư.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
              {coopModels.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="relative shrink-0 w-5 h-5 mt-0.5">
                    <img src="/images/ic_broker.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="object-contain" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-lg mb-1">{m.title}</p>
                    <p className="text-white text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <CTA 
        title="Bắt đầu hợp tác cùng AVIXO"
        titleButtonLeft="Liên hệ trao đổi chiến lược"
        titleButtonRight="Hồ sơ nhà đầu tư" />

    </div>
  );
}
