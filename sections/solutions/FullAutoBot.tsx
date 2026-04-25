"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/components/ui/label";
import Button from "@/components/ui/button";
import { Zap } from "lucide-react";

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-[#E8F9FF] text-[#0090cc] border border-[#b3e8ff]">
      + {label}
    </span>
  );
}

export function FullAutoBot() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-[#FFE1CC] text-[#1D1D1D]">
              <Zap size={11} fill="currentColor" /> FULL AUTO BOT
            </span>
          </div>
          <Text as="h2" className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
            Hệ Thống Giao Dịch Tự Động
          </Text>
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto">
            Phù hợp với người muốn hệ thống hóa quy trình, tối ưu thời gian và loại bỏ hoàn toàn yếu tố cảm xúc trong giao dịch.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-24">
        {/* Bot 1 — phone left, text right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-4/3 rounded-3xl overflow-hidden bg-[#EEF2F8] shadow-xl">
              <Image src="/images/ic_phone1.png" alt="Auto BMR App" fill className="object-contain p-6" />
            </div>
          </div>
          <div className="flex-1">
            <Text as="h3" className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">
              AUTO BMR<br />&amp; SMN · MGH Pro
            </Text>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Boomerang Reversal kiểm soát Drawdown, Smart Money bám sát dòng tiền lớn, kết hợp MGH Multi-layer Hedging giúp giảm thiểu rủi ro tối đa trong giai đoạn thị trường biến động mạnh.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["PAMM/MAM", "Copy Trade", "Low DD"].map(t => <Tag key={t} label={t} />)}
            </div>
            <Button href="#">Download now</Button>
          </div>
        </motion.div>

        {/* Bot 2 — text left, phone right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row-reverse items-center gap-12"
        >
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-4/3 rounded-3xl overflow-hidden bg-[#EEF2F8] shadow-xl">
              <Image src="/images/ic_phone3.png" alt="Arrow Big Trend App" fill className="object-contain p-6" />
            </div>
          </div>
          <div className="flex-1">
            <Text as="h3" className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">
              Arrow Big Trend<br />&amp; AI Trading Swing
            </Text>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Bot bắt xu hướng lớn kết hợp AI phân tích đa khung thời gian, tự động điều chỉnh tham số theo chu kỳ thị trường, tối ưu tỉ lệ R:R dài hạn cho các vị thế lớn.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["AI-powered", "Swing", "Position"].map(t => <Tag key={t} label={t} />)}
            </div>
            <Button href="#">Download now</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
