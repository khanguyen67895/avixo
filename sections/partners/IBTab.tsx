"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import Text from "@/components/ui/label";
import Button from "@/components/ui/button";
import { GlowBackground } from "@/components/common/GlowBackground";
import { ibHighlights as highlights, ibValues as values, ibTools as tools } from "@/lib/constants";
import { useContactModal } from "@/components/common/contact-context";
import { CTA } from "./CTA";
import { useT } from "@/lib/i18n";

export function IBTab() {
  const { open } = useContactModal();
  const t = useT();
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
            <Text as="h2" className="text-3xl md:text-4xl text-[#1D1D1D] leading-16">
              {t("AVIXO Phục Vụ Cộng Đồng IB Toàn Cầu")}
            </Text>
            <p className="text-[#131313] text-base max-w-2xl mx-auto leading-6">
              {t("Nền tảng hội tụ công nghệ Quant Trading, hệ thống traffic và mạng lưới chiến lược để nâng tầm sự nghiệp IB của bạn.")}
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
                <p className="font-bold text-[#1D1D1D] text-lg mt-6 mb-2">{t(f.title)}</p>
                <p className="text-[#131313] text-base leading-relaxed">{t(f.desc)}</p>
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
          <Text as="h2" className="text-3xl md:text-4xl text-[#1D1D1D] leading-16">
            {t("Giá Trị Hệ Sinh Thái Cho IB")}
          </Text>
          <p className="text-[#131313] text-base max-w-2xl mx-auto leading-6">
            {t("Định vị vai trò và tối ưu hóa lợi thế cạnh tranh của bạn trong thị trường tài chính hiện đại.")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 max-w-4xl mx-auto pt-10">
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
                  <img src={v.icon} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="object-contain" />
                </div>
                <Text className="font-semibold text-[#1D1D1D] text-2xl leading-8">{t(v.title)}</Text>
                <p className="text-[#1D1D1D] text-base leading-5">{t(v.desc)}</p>
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
            <Text as="h2" className="text-3xl text-[#1D1D1D] md:text-4xl font-semibold  mb-2">
              {t("IB Solution Toolset")}
            </Text>
            <Text as="h2" className="text-3xl md:text-4xl leading-8 mb-5">
              <span className="bg-linear-to-r from-[#37C0FF] to-[#0076FF] bg-clip-text text-transparent">{t("Hệ Thống Phễu")} <br />{t("Công Cụ")}</span>
            </Text>
            <p className="text-[#131313] text-base leading-5 mb-8 max-w-xs">
              {t("Cung cấp kho vũ khí công nghệ để IB chăm sóc khách hàng và tối ưu tỷ lệ chuyển đổi hiệu quả nhất.")}
            </p>
            <div className="flex-1">
              <Button onClick={open} className="w-1/2">{t("Liên hệ hợp tác IB")}</Button>
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
            {tools.map((tool, i) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white "
              >
                <img src={tool.icon} alt="" className="shrink-0 w-24 h-24 object-contain" />
                <div className="rounded-2xl px-5 py-4 border border-[#E5E5E5] shadow-sm">
                  <p className="font-semibold text-[#1D1D1D] text-lg mb-1 leading-8">{t(tool.title)}</p>
                  <p className="text-[#131313] text-sm leading-5">{t(tool.desc)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      {/* ── Section: Minh Bạch & Tuân Thủ ── */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden bg-[#0D1B3E] rounded-4xl px-6 py-10 md:px-10 md:py-14"
          >
            <img
              src="/images/ic_pixels.png"
              alt=""
              className="object-cover opacity-30 pointer-events-none absolute inset-0 w-full h-full"
            />
            <div className="text-center mb-10">
              <Text as="h2" className="text-3xl md:text-4xl text-white mb-4 leading-8">
                {t("Minh Bạch & Tuân Thủ")}
              </Text>
              <p className="text-white text-sm leading-5">
                {t("Tại AVIXO, chúng tôi cam kết cung cấp dữ liệu xác thực, được kiểm chứng qua các nền tảng Myfxbook công khai. Mọi thuật toán đều dựa trên logic toán học, không phải phỏng đoán.")}
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
                    <img src="/images/ic_tick.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} className="object-contain" />
                  </div>
                  <p className="text-white text-sm leading-relaxed">{t(text)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      <CTA
        title={t("Nâng Tầm Sự Nghiệp?")}
        titleButtonLeft={t("Liên hệ hợp tác")}
        titleButtonRight={t("Xem pháp lý và minh bạch")} />
    </div>
  );
}
