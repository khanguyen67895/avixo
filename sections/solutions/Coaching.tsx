"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/components/ui/label";
import Button from "@/components/ui/button";

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-[#E8F9FF] text-[#0090cc] border border-[#b3e8ff]">
      + {label}
    </span>
  );
}

const steps = [
  { icon: "/images/ic_application_ai.png", title: "Đánh giá năng lực",    desc: "Phân tích lịch sử giao dịch bằng AI để tìm ra điểm yếu." },
  { icon: "/images/ic_mindset.png",         title: "Thiết lập chiến lược", desc: "Xây dựng hệ thống giao dịch phù hợp với tính cách." },
  { icon: "/images/ic_ibglobal.png",        title: "Thực chiến 1:1",       desc: "Giao dịch trực tiếp dưới sự giám sát của chuyên gia." },
  { icon: "/images/ic_investor.png",        title: "Tối ưu hiệu suất",     desc: "Đánh giá định kỳ và tinh chỉnh thuật toán cá nhân." },
];

const leftFeatures = [
  { icon: "/images/ic_mindset.png",  title: "Tâm lý giao dịch", desc: "Kiểm soát cảm xúc bằng AI phân tích hành vi." },
  { icon: "/images/ic_ibglobal.png", title: "Quản trị rủi ro",  desc: "Kiểm soát cảm xúc bằng AI phân tích hành vi." },
];

export function Coaching() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Text as="h2" className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
            AI Trade Coaching 1:1
          </Text>
          <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto">
            Phù hợp với nhà đầu tư mới hoặc người cần sự đồng hành, huấn luyện cá nhân hóa để xây dựng sự nghiệp trading bền vững.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-start">
        {/* left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <Text as="h3" className="text-xl md:text-2xl font-bold text-zinc-900 mb-2">
            Cá nhân hóa theo chuẩn quỹ
          </Text>
          <p className="text-zinc-500 text-sm leading-relaxed mb-8">
            Sự kết hợp hoàn hảo giữa trí tuệ nhân tạo (GPT) và chuyên gia đầu tư để huấn luyện cá nhân hóa theo phong cách giao dịch, quy mô vốn và mục tiêu riêng biệt của từng nhà đầu tư.
          </p>

          <div className="flex flex-col gap-6 mb-8">
            {leftFeatures.map((f, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="shrink-0 w-9 h-9 rounded-full bg-[#E8F9FF] flex items-center justify-center">
                  <Image src={f.icon} alt="" width={20} height={20} className="w-5 h-5 object-contain" />
                </div>
                <div>
                  <p className="font-semibold text-zinc-900 text-sm">{f.title}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {["1:1 Mentoring", "Risk Management", "Scalp"].map(t => <Tag key={t} label={t} />)}
          </div>

          <Button href="#">Huấn luyện chuyên sâu ngay</Button>
        </motion.div>

        {/* right — 2×2 grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 grid grid-cols-2 gap-4"
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F5F8FF] rounded-2xl p-5 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                <Image src={s.icon} alt="" width={22} height={22} className="object-contain" />
              </div>
              <p className="font-semibold text-zinc-900 text-sm">{s.title}</p>
              <p className="text-zinc-500 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
