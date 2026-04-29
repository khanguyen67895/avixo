"use client";

import { motion } from "framer-motion";
import Text from "@/components/ui/label";
import Button from "@/components/ui/button";
import Image from "next/image";
import { GlowBackground } from "@/components/common/GlowBackground";
import { ibHighlights as highlights, ibValues as values, ibTools as tools } from "@/lib/constants";
import { useContactModal } from "@/components/common/contact-context";

export function IBTab() {
  const { open } = useContactModal();
  return (
    <div className="w-full">

      {/* ── Section 1: Heading + 3 image cards ── */}
      <GlowBackground src="/images/ic_bg4.png" className="w-full pb-18 pt-10">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center pb-12 mb-12"
          >
            <Text as="h2" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              AVIXO phục vụ cộng đồng IB toàn cầu
            </Text>
            <p className="text-zinc-500 text-base max-w-2xl mx-auto leading-relaxed">
              Nền tảng hội tụ công nghệ Quant Trading, hệ thống traffic và mạng lưới
              chiến lược để nâng tầm sự nghiệp IB của bạn.
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
                  <Image src={f.icon} alt="" fill className="object-contain" />
                </div>
                <p className="font-bold text-zinc-900 text-base mt-6 mb-2">{f.title}</p>
                <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </GlowBackground>

      {/* ── Section 2: Giá trị hệ sinh thái ── */}
      <GlowBackground src="/images/ic_bg4.png" className="w-full overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Text as="h2" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">
            Giá trị hệ sinh thái cho IB
          </Text>
          <p className="text-zinc-500 text-base max-w-xl mx-auto leading-relaxed">
            Định vị vai trò và tối ưu hóa lợi thế cạnh tranh của bạn trong thị trường tài chính hiện đại.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 max-w-4xl mx-auto">
          {values.map((v, i) => {
            const span = i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-3";
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col gap-4 bg-white border border-zinc-200 rounded-2xl px-7 py-8 shadow-[0_4px_24px_0_rgba(0,0,0,0.07)] ${span}`}
              >
                <div className="relative w-12 h-12 shrink-0">
                  <Image src={v.icon} alt="" fill className="object-contain" />
                </div>
                <Text className="font-bold text-zinc-900 text-base leading-snug">{v.title}</Text>
                <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
        </div>
      </GlowBackground>

      {/* ── Section 3: IB Solution Toolset ── */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 flex flex-col md:flex-row gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <Text as="h2" className="text-3xl md:text-4xl font-bold mb-2">
              IB Solution Toolset
            </Text>
            <Text as="h2" className="text-3xl md:text-4xl font-bold leading-tight mb-5">
              <span className="bg-linear-to-r from-[#37C0FF] to-[#0076FF] bg-clip-text text-transparent">Hệ thống phễu <br />Công cụ</span>
            </Text>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xs">
              Cung cấp kho vũ khí công nghệ để IB chăm sóc khách hàng và tối ưu tỷ lệ
              chuyển đổi hiệu quả nhất.
            </p>
            <div className="flex-1">
              <Button onClick={open} className="w-1/2">Liên hệ hợp tác IB</Button>
            </div>
          </motion.div>

          {/* Right — tool list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 flex flex-col gap-4"
          >
            {tools.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white border border-zinc-100 rounded-2xl px-5 py-4 shadow-sm"
              >
                <div className="shrink-0 relative w-12 h-12">
                  <div className="absolute inset-0 rounded-full border border-[#c8e8f8]" />
                  <div className="absolute inset-1.5 rounded-full border border-[#daeefa] bg-[#f0f8ff] flex items-center justify-center">
                    <t.Icon size={18} className="text-[#37C0FF]" strokeWidth={1.7} />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-zinc-900 text-sm mb-1">{t.title}</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      {/* ── Section: Minh bạch & Tuân thủ ── */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden bg-[#0D1B3E] rounded-4xl px-6 py-10 md:px-10 md:py-14"
          >
            <Image
              src="/images/ic_pixels.png"
              alt=""
              fill
              className="object-cover opacity-30 pointer-events-none"
            />
            <div className="text-center mb-10">
              <Text as="h2" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Minh bạch &amp; Tuân thủ
              </Text>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xl mx-auto">
                Tại AVIXO, chúng tôi cam kết cung cấp dữ liệu xác thực, được kiểm chứng qua các nền tảng
                Myfxbook công khai. Mọi thuật toán đều dựa trên logic toán học, không phải phỏng đoán.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Cung cấp giải pháp công nghệ thuần túy và hạ tầng vận hành chuyên nghiệp.",
                "Mọi thỏa thuận hợp tác đều minh bạch, rõ ràng bằng văn bản pháp lý.",
                "Hợp tác chiến lược với các sàn giao dịch quốc tế được cấp phép uy tín.",
                "Tuyệt đối không cam kết lợi nhuận cố định, tuân thủ đạo đức nghề nghiệp.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="relative shrink-0 w-5 h-5 mt-0.5">
                    <Image src="/images/ic_tick.png" alt="" fill className="object-contain" />
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

    </div>
  );
}
