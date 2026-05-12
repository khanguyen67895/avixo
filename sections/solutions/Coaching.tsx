"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import Text from "@/components/ui/label";
import Button from "@/components/ui/button";
import Tag from "@/components/ui/tag";
import { GlowBackground } from "@/components/common/GlowBackground";
import { coachingSteps as steps, coachingLeftFeatures as leftFeatures } from "@/lib/constants";
import { useContactModal } from "@/components/common/contact-context";
import { useT } from "@/lib/i18n";

export function Coaching() {
  const { open } = useContactModal();
  const t = useT();
  return (
    <GlowBackground src="/images/ic_bg1.png" as="section" className="w-full pb-24 flex flex-col items-center overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Text as="h2" className="text-3xl md:text-4xl text-[#1D1D1D] leading-16">
            {t("AI Trade Coaching 1:1")}
          </Text>
          <p className="text-[#131313] text-base md:text-lg max-w-2xl mx-auto">
            {t("Phù hợp với nhà đầu tư mới hoặc người cần sự đồng hành, huấn luyện cá nhân hóa để xây dựng sự nghiệp trading bền vững.")}
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-start">
        {/* left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <Text as="h3" className="text-xl md:text-2xl font-semibold text-[#1D1D1D] mb-2">
            {t("Cá Nhân Hóa Theo Chuẩn Quỹ")}
          </Text>
          <p className="text-[#131313] text-sm leading-relaxed mb-8">
            {t("Sự kết hợp hoàn hảo giữa trí tuệ nhân tạo (GPT) và chuyên gia đầu tư để huấn luyện cá nhân hóa theo phong cách giao dịch, quy mô vốn và mục tiêu riêng biệt của từng nhà đầu tư.")}
          </p>

          <div className="flex flex-col gap-6 mb-8">
            {leftFeatures.map((f, i) => (
              <div key={i} className="flex gap-3 items-start">
                <img src={f.icon} alt="" className="w-15 h-15 object-contain -mt-3" />
           
                <div>
                  <p className="font-semibold text-[#1D1D1D] text-lg">{t(f.title)}</p>
                  <p className="text-[#131313] text-sm mt-0.5">{t(f.desc)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {["1:1 Mentoring", "Risk Management", "Scalp"].map(tag => <Tag bordered hasZap={false} key={tag}>{tag}</Tag>)}
          </div>
          <div className="flex-1">
            <Button onClick={open} className="w-3/4">{t("Huấn Luyện Chuyên Sâu Ngay")}</Button>
          </div>
        </motion.div>

        {/* right — vertical stepper */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-0"
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 items-start"
            >
              {/* icon + connector line */}
              <div className="flex flex-col items-center">
                {/* <div className="w-12 h-12 rounded-full bg-[#EAF4FF] border border-[#c8e4ff] flex items-center justify-center shrink-0"> */}
                <img src={s.icon} alt="" className="object-contain w-24 h-24" />
                {/* </div> */}
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 min-h-8 bg-[#c8e4ff] my-1" />
                )}
              </div>
              {/* text */}
              <div className="md:w-112.25 pb-6 p-4 bg-neutral-50 rounded-[20px] outline-1 -outline-offset-1 outline-neutral-200 flex flex-col gap-2">
                <p className="font-semibold text-[#1D1D1D] text-lg leading-8">{t(s.title)}</p>
                <p className="text-[#131313] text-sm leading-5">{t(s.desc)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </GlowBackground>
  );
}
