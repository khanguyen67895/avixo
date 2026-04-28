"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Wallet, ShieldCheck } from "lucide-react";

const features = [
  {
    Icon: CheckCircle2,
    title: "Xác thực 100%",
    desc: "Mọi con số đều có thể kiểm chứng thông qua các cổng dữ liệu độc lập và báo cáo kiểm toán nội bộ.",
  },
  {
    Icon: Clock,
    title: "Live performance",
    desc: "Sự tin cậy được xây dựng từ hệ thống báo cáo và dữ liệu công khai, trung thực.",
  },
  {
    Icon: Wallet,
    title: "Verified live account",
    desc: "Cung cấp theo yêu cầu cho các nhà đầu tư tổ chức và cá nhân có nhu cầu thẩm định sâu.",
  },
  {
    Icon: ShieldCheck,
    title: "Nguồn gốc rõ ràng",
    desc: "Hiệu suất phải đi kèm chú thích nguồn gốc và điều kiện thực hiện cụ thể cho từng thị trường.",
  },
];

export function TrackPhilosophy() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:w-80 shrink-0 pt-4"
          >
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight mb-6">
              Triết lý<br />Minh Bạch
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed">
              Tại AVIXO, chúng tôi định nghĩa lại sự tin cậy trong quản lý tài sản số thông qua dữ liệu cứng và quyền truy cập trực tiếp.
            </p>
          </motion.div>

          {/* Right — feature list */}
          <div className="flex-1 flex flex-col gap-4">
            {features.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5 bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <div className="w-9 h-9 rounded-full bg-[#EBF5FF] flex items-center justify-center">
                    <Icon size={18} className="text-[#37C0FF]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 mb-1">{title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
