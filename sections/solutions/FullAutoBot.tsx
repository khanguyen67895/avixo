"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/components/ui/label";
import Button from "@/components/ui/button";
import Tag from "@/components/ui/tag";
import { GlowBackground } from "@/components/common/GlowBackground";

export function FullAutoBot() {
  return (
    <GlowBackground id="full-auto-bot" src="/images/ic_bg1.png" as="section" className="w-full bg-white pb-20">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-4">
            <Tag bg="bg-[#FFE1CC]">FULL AUTO BOT</Tag>
          </div>
          <Text as="h2" className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Hệ Thống Giao Dịch Tự Động
          </Text>
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto">
            Phù hợp với người muốn hệ thống hóa quy trình, tối ưu thời gian và loại bỏ hoàn toàn yếu tố cảm xúc trong giao dịch.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col pt-40">
        {/* Bot 1 — phone left, text right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center gap-32"
        >
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-200 aspect-4/3">
              <Image src="/images/ic_phone2.png" alt="Auto BMR App" fill className="object-contain" />
            </div>
          </div>
          <div className="flex-1">
            <Text as="h3" className="text-xl md:text-2xl font-bold text-zinc-900 mb-3">
              AUTO BMR<br />&amp; SMN · MGH Pro
            </Text>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Boomerang Reversal kiểm soát Drawdown, Smart Money bám sát dòng tiền lớn, kết hợp MGH Multi-layer Hedging giúp giảm thiểu rủi ro tối đa trong giai đoạn thị trường biến động mạnh.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["PAMM/MAM", "Copy Trade", "Low DD"].map(t => <Tag key={t}>{t}</Tag>)}
            </div>
            <div className="flex-1">
              {/* TODO: add download link */}
              <Button href="#" className=" w-1/2">Download now</Button>
            </div>
          </div>
        </motion.div>

        {/* Bot 2 — text left, phone right */}
        <motion.div
          id="arrow-big-trend"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row-reverse items-center gap-12"
        >
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-200 aspect-4/3">
              <Image src="/images/ic_phone3.png" alt="Arrow Big Trend App" fill className="object-contain p-6" />
            </div>
          </div>
          <div className="flex-1">
            <Text as="h3" className="text-xl md:text-2xl font-bold text-zinc-900 mb-3">
              Arrow Big Trend<br />&amp; AI Trading Swing
            </Text>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Bot bắt xu hướng lớn kết hợp AI phân tích đa khung thời gian, tự động điều chỉnh tham số theo chu kỳ thị trường, tối ưu tỉ lệ R:R dài hạn cho các vị thế lớn.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["AI-powered", "Swing", "Position"].map(t => <Tag key={t}>{t}</Tag>)}
            </div>
            <div className="flex-1">
              {/* TODO: add download link */}
              <Button href="#" className=" w-1/2">Download now</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </GlowBackground>
  );
}
