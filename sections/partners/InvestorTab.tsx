"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/components/ui/label";
import Button from "@/components/ui/button";
import Tag from "@/components/ui/tag";
import { GlowBackground } from "@/components/common/GlowBackground";
import {
  investorFeatures as features,
  investorProducts as products,
  riskItems,
} from "@/lib/constants";
import { CTA } from "./CTA";

export function InvestorTab() {
  return (
    <div className="w-full">

      {/* ── Feature cards ── */}
      <GlowBackground src="/images/ic_bg4.png" className="w-full pb-18 pt-10">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center pb-12 mb-12"
          >
            <Text as="h2" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Nhà đầu tư được gì từ AVIXO?
            </Text>
            <p className="text-[#505050] text-base max-w-2xl mx-auto leading-relaxed">
              Phục vụ nhà đầu tư cá nhân với độ chính xác lượng tử, tối ưu hóa lợi nhuận
              thông qua phân tích dữ liệu thời gian thực và quản trị rủi ro tự động.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
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

      {/* ── ProductsForYou heading ── */}
      <div className="text-center max-w-7xl mx-auto px-6 md:-mb-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <Text as="h2" className="text-3xl md:text-4xl text-center font-bold text-zinc-900 mb-4">
            Sản phẩm dành cho bạn
          </Text>
          <p className="text-zinc-500 text-base text-center leading-relaxed">
            Cá nhân hóa lộ trình đầu tư dựa trên mục tiêu <br /> tài chính và khẩu vị rủi ro của bạn.
          </p>
        </motion.div>
      </div>

      {/* ── ProductsForYou items ── */}
      {products.map((p, i) => {
        const my = i === 1 ? "md:-mt-20 md:-mb-50" : "md:mt-50 md:mb-20";
        const inner = (
          <div
            className={`relative z-10 max-w-7xl mx-auto px-6 py-0 flex flex-col md:flex-row items-center ${my} gap-8 md:gap-16 ${
              !p.imgLeft ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: p.imgLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex-1 flex"
            >
              <div className="relative w-full max-w-xs md:w-120 md:h-120 aspect-square">
                <Image src={p.img} alt={p.title} fill className="object-contain" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: p.imgLeft ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex-1 flex flex-col justify-center"
            >
              <Text as="h3" className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3 leading-snug">
                {p.title}
              </Text>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-6 max-w-sm">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="flex-1">
                <Button href="#" className="w-1/2">{p.cta}</Button>
              </div>
            </motion.div>
          </div>
        );

        return i === 1 ? (
          <div key={p.title} className="w-full py-0">{inner}</div>
        ) : (
          <GlowBackground key={p.title} src="/images/ic_bg4.png" className="w-full overflow-hidden">
            {inner}
          </GlowBackground>
        );
      })}

      {/* ── RiskDisclaimer ── */}
      <GlowBackground src="/images/ic_bg4.png" className="relative w-full pb-20 overflow-hidden">
        <div className="absolute left-90 bottom-1 hidden lg:block pointer-events-none">
          <Image src="/images/ic_bg_understand.png" alt="" width={280} height={580} className="w-100 h-100 object-contain" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-4xl border border-zinc-100 shadow-[0_4px_40px_rgba(0,0,0,0.06)] px-8 md:px-14 py-12"
          >
            <div className="text-center mb-4">
              <Text as="h2" className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-3 leading-snug">
                Những gì cần hiểu trước khi sử dụng
              </Text>
              <p className="text-[#505050] text-sm leading-relaxed max-w-xl mx-auto">
                Tại AVIXO, chúng tôi ưu tiên sự minh bạch và trách nhiệm. Đầu tư tài chính
                luôn đi kèm với những biến động không lường trước được.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {riskItems.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5 items-center bg-[#F2F2F2] rounded-2xl px-6 py-5"
                >
                  <span className="items-center justify-center text-lg font-semibold text-[#0076FF]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[#131313] text-sm leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-xs tracking-widest text-zinc-400 uppercase font-medium">
                Vui lòng xác nhận bạn đã hiểu các rủi ro trên
              </p>
            </div>
          </motion.div>
        </div>
      </GlowBackground>
      <CTA 
        title={`Sẵn sàng để tối ưu hóa \n danh mục đầu tư?`} 
        titleButtonLeft="Xem giải pháp" 
        titleButtonRight="Đăng ký tư vấn" />
    </div>
  );
}
